"use client"
import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Container from "../components/Container";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';






import { onDashboard } from "../network/actions/dashboard";
import { useDispatch, useSelector } from 'react-redux';

import Layout from "../components/dashboard/layout";

import { DataGrid } from '@mui/x-data-grid';


import {
    CollectionsBookmark,
    Edit,
    Feedback,
    Help,
    PermMedia,
    UploadFile,
    Work,
} from "@mui/icons-material";
import { Button } from "@mui/material";

import { getToken, removeToken } from "../utils/cookie";
import { useRouter } from "next/router";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';




const drawWidth = 220;

function Dashboard(props) {
    const [mobileViewOpen, setMobileViewOpen] = React.useState(false);
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [checked, setChecked] = React.useState([0]);


    const [wardId, setWardId] = React.useState([0]);


    const [dashboardCount, setdashboardCount] = React.useState({ totalFamilyCount: 0, totalMemberCount: 0, wardFamilyCount: 0, wardMemberCount: 0 });



    const globalUser = getToken();
    const router = useRouter();


    const dispatch = useDispatch();
    const dashboard_data = useSelector((state) => state.dashboard);





    const handleToggle = () => {
        setMobileViewOpen(!mobileViewOpen);
    };

    const handleListSelected = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    // const getDashboard = async (wardId) => {

    //     const callAPi = await fetch(`/api/dashboard-api?ward_id=${wardId}`);

    //     const res = await callAPi.json();

    //     console.log(res, "asjkdhwqdknawqjndoika")

    //     const { economicCategories, religions, social_categories, resident, gender } = res || {};


    // }


    useEffect(() => {

        let tokenData = {};

        try {
            tokenData = JSON.parse(globalUser);
        }
        catch (err) {

            console.log(err, "asasdwie")
        }


        console.log(tokenData, "asjdkjoiqlkmwjefijoqdwlks")

        if (tokenData) {
            const { userName, ulb, token, wardName, districtName } = tokenData || {};


            if (ulb) {

                const { wardNo, wardName, municipalName, municipalId, id, districtCode } = ulb || {};
                if (wardNo) {

                    setWardId(id)

                    // getDashboard(id);
                    dispatch(onDashboard(id, token))

                }

            }
            // else {
            //     removeToken();
            //     router.push('/login')
            // }


        }


    }, [])

    useEffect(() => {
        console.log(dashboard_data, "Asdjkakasdasdqwusdjquakodlw")

        if (dashboard_data.error) {
            console.log(dashboard_data.error, "Asasdasqwdjkakasdasdqwusdjquakodlw")

            if (dashboard_data.error.message) {


                if (dashboard_data.error.message.includes("401")) {
                    removeToken();
                    router.push('/login')
                }

            }
        }


        if (dashboard_data) {
            const { data, message, status } = dashboard_data.data || {};

            console.log(data, "asdoiqakmdlasdqweklfmqamfjewoqdal")
            if (message === "SUCCESS" && status === "OK") {

                setdashboardCount(data);
            }

        }


    }, [dashboard_data])


    return (
        <Layout>
            <Container dashboardData={dashboardCount} wardId={wardId} />
        </Layout>

    );
}

export default Dashboard;



// export const getServerSideProps = async (context) => {
//     // Fetch data from an API or a database

//     // Return the data as props
//     return {
//         props: {
//             data,
//         },
//     };
// };
