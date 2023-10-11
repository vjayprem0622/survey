import React, { useCallback, useContext, useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "./Context";
import Autocomplete from '@mui/material/Autocomplete';
import { InputLabel, MenuItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { DateField } from "@mui/x-date-pickers";
import { DatePicker } from "antd";
const moment = require("moment");
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Select from 'react-select'


export default function Occupation(props) {

    const [birthUserList, setbirthUserList] = useState([]);

    const forms = useSelector((state) => state.formData);

    const familyDetails = useSelector((state) => state.familyDetail)

    const [dobList, setdobList] = useState([]);

    const [memberList, setMemberList] = useState([]);

    const [familyHead, setFamilyHead] = useState("");

    const [occupationsList, setOccupationsList] = useState([]);

    // const [isValid, setIsValid] = useState([]);





    const initialGenders = ['', ''];
    const [selectedDobs, setselectedDobs] = useState(initialGenders);


    const { formValues, handleChange, handleNext, variant, margin, handleBack } = useContext(
        AppContext
    );


    const dispatch = useDispatch();



    useEffect(() => {
        let members = [];

        if (forms) {
            const { value } = forms || {};

            console.log(value, "asdqjiaasddasdlks")

            if (value.length > 0) {

                for (let i = 0; i < value.length; i++) {

                    if (value[i].memberName) {
                        if (i == 1) {
                            console.log(value[i].memberName, "Adjqwjioalskdjwkfuqeoilkds")
                            // setFamilyHead({})
                        }
                        members.push({ label: value[i].memberName, value: value[i].memberName, occupation: {}, error: undefined, required: true, message: "Please Select Occupation" })

                    }
                }

                console.log(members, "Adjasdaqwasdq3wedscjioalskdjwkfuqeoilkds")

                setMemberList(members);

            }

        }

        const getAllMaster = async () => {

            const callAPi = await fetch('/api/occupation-api');

            const res = await callAPi.json();


            const { occupations } = res || {};

            let edu_list = [];


            console.log(occupations, "Asnjfkwqaldq")

            if (occupations) {

                for (let i = 0; i < occupations.length; i++) {

                    let object = { label: occupations[i].professionName, value: occupations[i].id }
                    edu_list.push(object);

                }


                setOccupationsList(edu_list)

            }
            // console.log(res);
        }

        getAllMaster();


    }, [])

    const handleGenderChange = (event, index, name, event_type) => {
        const newSelectedGenders = [...memberList];

        console.log(newSelectedGenders[index], "Adjskbqijwlkasdfbuowqijfleskd")

        for (let i = 0; i < memberList.length; i++) {
            newSelectedGenders[index].occupation.value = event.value;
            newSelectedGenders[index].occupation.label = event.label;

            newSelectedGenders[index].error = false;


        }

        console.log(memberList, "askldkasmdjwfeoidklcs")
        setMemberList(newSelectedGenders);

    };



    const checkValidations = () => {
        const newSelectedGenders = [...memberList];
        let errorShow = false;


        for (let i = 0; i < memberList.length; i++) {

            if (memberList[i].occupation) {
                if (memberList[i].occupation.value == undefined) {
                    newSelectedGenders[i].error = true;
                    errorShow = true
                }
            }

        }

        console.log(memberList, "askldkasmdjwfeoidklcs")
        setMemberList(newSelectedGenders);

        return errorShow;

    };



    return (
        <>
            {memberList && memberList.map((item, index) => {
                console.log(item, "assfijwaeksdjdaskjdalz")
                return (

                    <Paper elevation={3} style={{ width: '100%', padding: 10, marginBottom: 20 }} key={index}>

                        <Typography mt={2} style={{ textAlign: 'center', fontSize: 18, marginBottom: 16 }}>
                            {item.label}
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={5} style={{}}>
                                <InputLabel style={{ marginBottom: 5, justifyContent: 'center', height: 40 }} id="demo-simple-select-helper-label">Occupation</InputLabel>
                            </Grid>
                            <Grid item xs={4}>
                                <Select
                                    closeMenuOnSelect={true}
                                    value={item.occupation}
                                    options={occupationsList}
                                    onChange={(event) => {
                                        console.log(event, "asdjkqwjadsc")
                                        // setFamilyHead(event)
                                        handleGenderChange(event, index, item.label, "name")
                                    }}
                                    required={item.required}
                                />
                                {item.error &&
                                    <InputLabel style={{ marginBottom: 5, justifyContent: 'center', height: 40, fontSize: 10, color: 'red' }} id="demo-simple-select-helper-label">{item.message}</InputLabel>

                                }
                            </Grid>

                        </Grid>

                    </Paper>

                )


            })}



            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>

                <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    // disabled={isError()}
                    // color="success"
                    onClick={() => handleBack()}
                    style={{ backgroundColor: 'blue' }}
                // onClick={!isError() ? handleNext : () => null}
                >
                    Back
                </Button>



                <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    // disabled={isError()}
                    // color="success"
                    onClick={() => {

                        let errorShow = checkValidations();

                        console.log(memberList, "Asjdfdjoiqwlskdjfoiewds");
                        if (!errorShow) {
                            handleNext()
                        }
                        // handleNext()
                    }}
                    style={{ backgroundColor: 'blue' }}
                // onClick={!isError() ? handleNext : () => null}
                >
                    Save and Proceed
                </Button>
            </Box>
        </>
    );
}
