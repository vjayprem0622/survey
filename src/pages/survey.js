"use client"
import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Head from "next/head";


import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'


import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

// import { useSession } from "next-auth/react";
import Grid from '@mui/material/Grid';


import { signOut } from 'next-auth/react';

import StepForm from "../components/stepper/StepForm";

import {
    onFormData
} from "../network/actions/formData";

// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';



import { GetServerSideProps } from 'next';

import { onDashboard } from "../network/actions/dashboard";
import { useDispatch, useSelector } from 'react-redux';

import Layout from "../components/dashboard/layout";
// import { Steps } from 'antd';

import Step from "../components/step";
import Form from "../components/form/form";



import {
    CollectionsBookmark,
    Edit,
    Feedback,
    Help,
    PermMedia,
    UploadFile,
    Work,
} from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import LinearStepper from '../components/stepper/LinearStepper'
import SearchBar from "../components/SearchBar";
import { onRationDetails } from "../network/actions/rationSearch";
import { DataGrid } from "@mui/x-data-grid";
import { AppContext } from "../components/stepper/Context";
import StepperControl from "../components/stepper/StepperControl";
import { onGenderList } from "../network/actions/genders";

const drawWidth = 220;

function Dashboard(props) {
    const [mobileViewOpen, setMobileViewOpen] = React.useState(false);
    const steps = ['Add Member', 'Family Details', 'Enter Property Details', 'Preview Details'];

    const [search, setSearch] = useState("");
    const [checked, setChecked] = React.useState([0]);
    const [selectedItems, setSelectedItems] = useState([]);

    const [rationList, setrationList] = useState([]);

    const [step, setStep] = useState(1);

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const [showForm, setShowForm] = useState(false);

    const { formValues } = useContext(
        AppContext
    );








    const dispatch = useDispatch();
    const data = useSelector((state) => state.dashboard);

    const rationData = useSelector((state) => state.rationDetails);

    const gender = useSelector((state) => state.gender);


    let religionData = useSelector((state) => state.religion);




    const columns = [
        { field: 'aadhaarNumber', headerName: 'Aadhar No.', width: 130 },
        { field: 'rationCardNumber', headerName: 'Ration No.', width: 170 },
        { field: 'memberName', headerName: 'Member Name', width: 130 },
        { field: 'dateOfBirth', headerName: 'Date of Birth', width: 130 },
        { field: 'gender', headerName: 'Gender', width: 80 },
        { field: 'mobileNumber', headerName: 'Mobile', width: 130 },
        { field: 'panchayatName', headerName: 'Panchayat', width: 130 },
        { field: 'villageName', headerName: 'Village', width: 130 },
        { field: 'cardType', headerName: 'Card Type', width: 130 },


    ];
    const onSearchChange = (searchQuery) => {
        setSearch(searchQuery);

    };



    async function searchRationCard() {
        dispatch(onRationDetails(search));
    }





    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    useEffect(() => {
        console.log("ASdasdnlk", "Asdjkakusdjquakodlw")

        // dispatch(onGenderList())

        console.log(religionData, "Asdnfqojdilksadldaskd")


    }, [])

    useEffect(() => {

        console.log(rationData, "Aasdsadsdajoiskdlqwiuadjsckfweoa")

        if (rationData?.data) {

            const { data, status, message, rationCardAlreadyExists } = rationData.data || {};


            if (status === "OK" && message === "SUCCESS") {
                setrationList(data);





                for (let i = 0; i < data.length; i++) {
                    let { headofFamily, bonafide, economicLevel, religion, category, resident, district, municipality, ward, date } = formValues;
                    // const { memberName } = props.familyDetails[a];

                    if (data[i].relationName === "Self") {
                        formValues.headOfFamily.value = data[i].memberName;

                    }

                    formValues.economicLevel.value = data[i].cardType;
                    formValues.religion.value = data[i].casteCategory;
                    formValues.religion.value = data[i].address;
                    formValues.district.value = data[i].district;



                    // let object = { label: memberName, year: "" }

                    // members.push(object)



                }



            }
            if (rationData.data.length == 0) {
                setrationList(data);
            }


        }

    }, [rationData])



    const onRowsSelectionHandler = (ids) => {

        console.log(ids, "Asdjkqwjkasjad");

        let rows = rationList;
        const selectedRowsData = ids.map((id) => rows.find((row) => row.aadhaarNumber === id));
        console.log(selectedRowsData, "Asdjkqwjkasjad");

        setSelectedItems(selectedRowsData);
    };


    const formVisibility = (formVisible) => {
        // setShowForm(formVisible);


    };


    return (
        <div>
            <div>
                <Layout>
                    <Paper
                        variant="outlined"
                        sx={{ my: { xs: 3 }, mx: { xs: 3 }, p: { xs: 2, } }}
                    >
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">Ration Search</div>






                        {!showForm &&
                            <div>
                                <Grid
                                    container
                                    spacing={3}
                                    direction="row"

                                >
                                    <Grid item xs={9}><SearchBar onSearch={onSearchChange} value={search} /></Grid>
                                    <Grid item xs={3}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            style={{ backgroundColor: 'rgb(59 130 246)', height: 54 }}
                                            onClick={() => {
                                                searchRationCard()
                                            }}
                                        >
                                            Search
                                        </Button></Grid>
                                </Grid>



                                {rationList && rationList.length > 0 &&

                                    <div style={{ display: 'table', tableLayout: 'fixed', width: '100%', marginTop: 20 }}>
                                        <DataGrid
                                            rows={rationList}
                                            columns={columns}

                                            // initialState={{
                                            //     pagination: {
                                            //         paginationModel: { page: 0, pageSize: 5 },
                                            //     },
                                            // }}
                                            // pageSizeOptions={[5, 10]}
                                            checkboxSelection
                                            hideFooter
                                            getRowId={(row) => row.aadhaarNumber}
                                            onRowSelectionModelChange={
                                                (ids) => onRowsSelectionHandler(ids)
                                            }
                                        />

                                    </div>
                                }




                                {selectedItems.length > 0 &&

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        style={{ backgroundColor: 'blue' }}

                                        onClick={() => {
                                            console.log(selectedItems, "Asdqwoijdlakmfqdwal")
                                            dispatch(onFormData(selectedItems))

                                            setShowForm(true)
                                            // handlePost()
                                        }}

                                    >
                                        Proceed for Verification
                                    </Button>
                                }
                            </div>
                        }




                        {showForm &&
                            <StepForm formVisible={formVisibility} selectedFamily={selectedItems} />

                            // <StepperControl selectedFamily={selectedItems} />
                        }

                    </Paper>
                </Layout>
            </div>
        </div >
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