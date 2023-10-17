import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { Box, Button, CardMedia, Chip, Divider, Grid, IconButton, Modal, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Avatar from '@mui/material/Avatar';

import { onRationDetails } from '../network/actions/rationSearch';
import { useDispatch, useSelector } from 'react-redux';

import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { FaceRetouchingOffRounded } from '@mui/icons-material';
import ErrorIcon from '@mui/icons-material/Error';

import { onFamiliesList } from '../network/actions/familiesList';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 30,
    maxHeight: '80vh',
    overflow: 'hidden',
    overflowY: 'auto',
    p: 4,
    borderRadius: 1
};



function CustomCellRenderer(params) {
    const cellValue = params.value;

    console.log(cellValue, "askdhuqwjkndsiuhfewd")

    const cellHeight = cellValue && cellValue.length > 1 ? cellValue.length * 20 : 40; // Adjust the height factor (20) as needed


    // Customize the cell rendering as needed
    return (

        <div style={{ height: `${cellHeight}px`, overflow: 'auto' }}>
            {cellValue.map((item, index) => (

                <Typography style={{ color: 'red', fontWeight: '500' }} key={index} variant="h7" component="h3">
                    {item}
                </Typography>

            ))}
        </div>

    );
}


const columns = [

    {
        field: 'headOfFamily', headerName: 'Head of Family', width: 200,
    },
    {
        field: 'rationCardNo', headerName: 'Ration No.', width: 170, renderHeader: () => (
            <Typography  >
                Ration No.
            </Typography>
        )
    },
    {
        field: 'municipalName', headerName: 'Municipality', width: 130,
    },
    {
        field: 'economicStatus', headerName: 'Economic Status', width: 130,

    },
    {
        field: 'wardName', headerName: 'Ward Name', width: 100,
    },
    {
        field: 'socialCategory', headerName: 'Social Category', width: 130,
    },
    {
        field: 'religion', headerName: 'Religion', width: 130,
    },
    {
        field: 'residentStatus', headerName: 'Resident', width: 130,

    },

];


let modalData = { "districtName": "BILASPUR", "members": [{ "memberName": "PRADEEP", "rationCardNumber": "HP2021072923147", "dateOfBirth": "25-03-1983", "relation": "GrandMother", "relativeName": "Kusum Devi", "aadhaarNumber": 200032502966, "mobileNumber": "9857530008", "gender": "Female", "isEkycVerfied": true, "educationQualification": "Postgraduate", "occupation": "Govt. Employee", "emailAddress": "dfsdfds", "himMemberId": 758723668, "isBonafide": true }, { "memberName": "VEDANSH SISODIA", "rationCardNumber": "HP2021072923147", "dateOfBirth": "17-03-2018", "relation": "Maternal Grandfather", "relativeName": "Kusum Devi", "aadhaarNumber": 406113712294, "mobileNumber": "6456456654", "gender": "Others", "isEkycVerfied": false, "educationQualification": "10+2", "occupation": "Private Employee", "emailAddress": "sdfdsf", "himMemberId": 766710634, "isBonafide": true }, { "memberName": "SURYANSH SISODIA", "rationCardNumber": "HP2021072923147", "dateOfBirth": "13-07-2014", "relation": "Maternal GrandMother", "relativeName": "Kusum Devi", "aadhaarNumber": 821850558655, "mobileNumber": "5467654654", "gender": "Others", "isEkycVerfied": true, "educationQualification": "10+2", "occupation": "Govt. Employee", "emailAddress": "dsfdsfds", "himMemberId": 917948277, "isBonafide": true }, { "memberName": "Kusum Devi", "rationCardNumber": "HP2021072923147", "dateOfBirth": "03-07-1989", "relation": "GrandMother", "relativeName": "Kusum Devi", "aadhaarNumber": 231761748926, "mobileNumber": "3324354354", "gender": "Female", "isEkycVerfied": true, "educationQualification": "Graduate", "occupation": "Labour", "emailAddress": "fsdfsd", "himMemberId": 187915807, "isBonafide": true }], "propertyDetail": { "propertyId": "gfdfdgfd", "propertyDetails": "Rented", "rentGivenTo": "dsfdsdsf", "electricityConsumerNo": "fdssdfsdf", "waterConnectionNumber": "dsfdfsdf" }, "wardName": "99", "houseAddress": "eewrewrwerew", "rationCardNo": "HP2021072923147", "himParivarId": 26364644, "economicStatus": "B.P.L", "socialCategory": "Minority", "religion": "Buddhism", "residentStatus": "Rural", "municipalName": "M.C. Bilaspur", "headOfFamily": "Kusum Devi" }



let data = {
    "content": [
        {
            "districtName": "BILASPUR",
            "memberNames": [
                "PRADEEP",
                "Kusum Devi",
                "SURYANSH SISODIA",
                "VEDANSH SISODIA"
            ],
            "wardName": "99",
            "socialSubCategory": null,
            "houseAddress": "eewrewrwerew",
            "rationCardNo": "HP2021072923147",
            "himParivarId": 26364644,
            "economicStatus": "B.P.L",
            "socialCategory": "Minority",
            "religion": "Buddhism",
            "residentStatus": "Rural",
            "municipalName": "M.C. Bilaspur",
            "headOfFamily": "Kusum Devi"
        },
        {
            "districtName": "BILASPUR",
            "memberNames": [
                "NEETA KUMARI",
                "SUNIL KUMAR",
                "ANSH CHOUDHARY"
            ],
            "wardName": "99",
            "socialSubCategory": null,
            "houseAddress": "testing",
            "rationCardNo": "HP2021072923149",
            "himParivarId": 81418163,
            "economicStatus": "B.P.L",
            "socialCategory": "Other Backward Class (OBC)",
            "religion": "Christian",
            "residentStatus": "Rural",
            "municipalName": "M.C. Bilaspur",
            "headOfFamily": "ANSH CHOUDHARY"
        },
        {
            "districtName": "BILASPUR",
            "memberNames": [
                "SURENDER KUMAR",
                "RACHNA",
                "ADITYA THAKUR",
                "MANISH  THAKUR"
            ],
            "wardName": "99",
            "socialSubCategory": null,
            "houseAddress": "gfdgf",
            "rationCardNo": "HP2021072923176",
            "himParivarId": 50251406,
            "economicStatus": "A.P.L",
            "socialCategory": "Other Backward Class (OBC)",
            "religion": "Christian",
            "residentStatus": "Rural",
            "municipalName": "M.C. Bilaspur",
            "headOfFamily": "ADITYA THAKUR"
        }
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 10,
        "paged": true,
        "unpaged": false
    },
    "last": true,
    "totalElements": 3,
    "totalPages": 1,
    "size": 10,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
}




const Dashboard = (props) => {

    const { totalFamilyCount, totalMemberCount, wardFamilyCount, wardMemberCount } = props.dashboardData || {};


    // const { wardId } = props.wardId || {};





    const [search, setSearch] = useState("");
    const [checked, setChecked] = React.useState([0]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [rationList, setrationList] = useState([]);

    const [isCardClicked, setCardClicked] = useState(false);





    const [showModal, setShowModal] = useState(false);



    const [page, setPage] = useState(0);

    const [totalPage, setTotalPage] = useState(0);


    const dispatch = useDispatch();
    const familiesList = useSelector((state) => state.familiesList);

    const onSearchChange = (searchQuery) => {
        setSearch(searchQuery);

    };


    const handleCardClick = () => {
        setCardClicked(!isCardClicked);
    };


    async function searchRationCard() {
        dispatch(onFamiliesList(1, props.wardId));
    }


    useEffect(() => {
        console.log(familiesList, "Aasdsadsdajoiskdlqwiuadjsckfweoa")
        if (familiesList?.data) {
            const { data, status, message, rationCardAlreadyExists } = familiesList.data || {};

            if (status === "OK" && message === "SUCCESS") {
                // setrationList(data);
            }
            if (familiesList.data.length == 0) {
                // setrationList(data);
            }
        }

    }, [familiesList])

    useEffect(() => {

        dispatch(onFamiliesList(1, 99));


    }, [])




    const onRowsSelectionHandler = (ids) => {
        let rows = data.data;
        const selectedRowsData = ids.map((id) => rows.find((row) => row.aadhaarNumber === id));
        console.log(selectedRowsData);
        setSelectedItems(selectedRowsData);
    };




    return (
        <>
            <main className="p-6 space-y-6">

                <Grid container spacing={4} >
                    <Grid item xs={12} sm={3} >
                        <Card sx={{
                            backgroundColor: "#ff413a",
                            alignContent: 'center',
                            justifyContent: 'center',
                            display: 'flex', borderRadius: 2, paddingLeft: 2, transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)', // Scale the card on hover
                            },
                        }}

                        // onClick={() => handleCardClick()}

                        >



                            <CardContent style={{ padding: 5 }}>
                                <Typography style={{ fontSize: 28, fontWeight: 'bold', color: '#FFF', textAlign: 'center' }} color="black">
                                    {totalFamilyCount}
                                </Typography>
                                <Typography style={{ fontSize: 14, color: '#FFF' }} >
                                    TOTAL FAMILY
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>



                    <Grid item xs={12} sm={3} >
                        <Card sx={{
                            backgroundColor: "#3366ff",
                            alignContent: 'center',
                            justifyContent: 'center',
                            display: 'flex', borderRadius: 2, paddingLeft: 2, transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)', // Scale the card on hover
                            },
                        }}

                        // onClick={() => handleCardClick()}

                        >



                            <CardContent style={{ padding: 5 }}>
                                <Typography style={{ fontSize: 28, fontWeight: 'bold', color: '#FFF', textAlign: 'center' }} color="black">
                                    {totalMemberCount}
                                </Typography>
                                <Typography style={{ fontSize: 14, color: '#FFF' }} >
                                    TOTAL MEMBER
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>



                    <Grid item xs={12} sm={3} >
                        <Card sx={{
                            backgroundColor: "#f4a100",
                            alignContent: 'center',
                            justifyContent: 'center',
                            display: 'flex', borderRadius: 2, paddingLeft: 2, transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)', // Scale the card on hover
                            },
                        }}

                        // onClick={() => handleCardClick()}

                        >



                            <CardContent style={{ padding: 5 }}>
                                <Typography style={{ fontSize: 28, fontWeight: 'bold', color: '#FFF', textAlign: 'center' }} color="black">
                                    {wardFamilyCount}
                                </Typography>
                                <Typography style={{ fontSize: 14, color: '#FFF' }} >
                                    WARD FAMILY
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={12} sm={3} >
                        <Card sx={{
                            backgroundColor: "#04ab69",
                            alignContent: 'center',
                            justifyContent: 'center',
                            display: 'flex', borderRadius: 2, paddingLeft: 2, transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)', // Scale the card on hover
                            },
                        }}

                        // onClick={() => handleCardClick()}

                        >



                            <CardContent style={{ padding: 5 }}>
                                <Typography style={{ fontSize: 28, fontWeight: 'bold', color: '#FFF', textAlign: 'center' }} color="black">
                                    {wardFamilyCount}
                                </Typography>
                                <Typography style={{ fontSize: 14, color: '#FFF' }} >
                                    WARD FAMILY
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>


                <Grid
                    container
                    sx={{ background: "#FFF", borderRadius: 6 }}
                >
                    <Grid item xs={12} md={12} lg={12} sx={{ background: "#FFF", borderRadius: 6 }}>

                        <div style={{ display: 'table', tableLayout: 'fixed', width: '100%', maxHeight: "400px" }}>
                            <DataGrid
                                rows={data.content}
                                style={{ background: "#FFF", borderRadius: 6 }}
                                columns={columns}

                                initialState={{
                                    pagination: {
                                        paginationModel: { page: data.pageable.pageNumber, pageSize: data.size },
                                    },
                                }}
                                // pageSizeOptions={[5, 10]}
                                paginationMode="server"
                                // checkboxSelection
                                getRowId={(row) => row.himParivarId}
                                getRowHeight={() => 'auto'}
                                onCellClick={(handleEvent) => {

                                    console.log(handleEvent, "Asdjkuiwhqdjwknshfewdsk")
                                    setSelectedItems(handleEvent)
                                    setShowModal(true)

                                }}

                            // getRowHeight={getRowHeight}
                            // onRowSelectionModelChange={
                            //     (ids) => onRowsSelectionHandler(ids)
                            // }
                            />

                        </div>


                    </Grid>

                </Grid>




                <section className="grid md:grid-cols-1 xl:grid-cols-1 xl:grid-rows-1 xl:grid-flow-col gap-6">

                    <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">Ration Search</div>
                        <div className="p-4 flex-grow">


                            <Modal
                                open={showModal}
                                onClose={() => { setShowModal(false) }}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>

                                    <div
                                        style={{
                                        }}
                                    >

                                        <Grid container spacing={2} >
                                            <Grid item xs={11.5}  >
                                                <Typography style={{ fontSize: 22, fontWeight: 'bold' }} color="black">
                                                    Member Details
                                                </Typography>


                                            </Grid>

                                            <Grid item xs={0.5} style={{ justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }} >
                                                <IconButton aria-label="delete" size="small">
                                                    <HighlightOffIcon fontSize="medium" />
                                                </IconButton>
                                            </Grid>


                                        </Grid>

                                        <Divider variant="fullWidth" horizontal style={{ marginTop: 10, marginBottom: 10 }} />



                                        {modalData.members && modalData.members.map((memberObject, index) => {

                                            return (

                                                <>
                                                    <Paper elevation={3} variant="elevation" style={{ marginBottom: 16 }}>

                                                        <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5, background: '#5569ff', padding: 10, color: '#FFF' }} >
                                                            Member Name: {memberObject.memberName}
                                                        </Typography>

                                                        <Box style={{ padding: 10 }}>


                                                            <Grid container spacing={1} >
                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Name:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4} >

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.memberName}
                                                                    </Typography>


                                                                </Grid>



                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Date of Birth:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4}>

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.dateOfBirth}
                                                                    </Typography>


                                                                </Grid>

                                                            </Grid>


                                                            <Grid container spacing={1} mt={1} >
                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Gender:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4} >

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.gender}
                                                                    </Typography>


                                                                </Grid>



                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Qualification:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4}>

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.educationQualification}
                                                                    </Typography>

                                                                </Grid>

                                                            </Grid>




                                                            <Grid container spacing={1} mt={1} >
                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Relation:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4} >

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.relation}
                                                                    </Typography>


                                                                </Grid>



                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Relative Name:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4}>

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.relativeName}
                                                                    </Typography>


                                                                </Grid>

                                                            </Grid>



                                                            <Grid container spacing={1} mt={1} >
                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Ration Number::
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4} >

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.rationCardNumber}
                                                                    </Typography>


                                                                </Grid>



                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Aadhaar Number:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4}>

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.aadhaarNumber}
                                                                    </Typography>

                                                                </Grid>

                                                            </Grid>



                                                            <Grid container spacing={1} mt={1} >
                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        Mobile Number:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4} >

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >
                                                                        {memberObject.mobileNumber}
                                                                    </Typography>


                                                                </Grid>



                                                                <Grid item xs={12} sm={2}>
                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                        E-KYC:
                                                                    </Typography>


                                                                </Grid>

                                                                <Grid item xs={12} sm={4}>

                                                                    <Typography style={{ fontSize: 16, letterSpacing: 0.5 }} >

                                                                        {memberObject.isEkycVerfied ?

                                                                            <Chip icon={<DoneAllIcon fontSize='small' color='success' />} label="Verified" style={{ height: 20 }} />
                                                                            : <Chip icon={<ErrorIcon color='error' fontSize='small' />} label="Not Verified" style={{ height: 20 }} />}

                                                                    </Typography>

                                                                </Grid>

                                                            </Grid>


                                                        </Box>
                                                    </Paper>




                                                </>



                                            )


                                        })}







                                    </div>

                                </Box>
                            </Modal>







                            {/* 
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 120 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    indeterminate={numSelected > 0 && numSelected < rowCount}
                                                    checked={rowCount > 0 && numSelected === rowCount}
                                                    onChange={onSelectAllClick}
                                                    inputProps={{
                                                        'aria-label': 'select all desserts',
                                                    }}
                                                />
                                            </TableCell>

                                            <TableCell align="left">Ration No.</TableCell>
                                            <TableCell align="left">Member Name</TableCell>
                                            <TableCell align="left">Date of Birth</TableCell>
                                            <TableCell align="left">Aadhar No.</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.data.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <Checkbox
                                                        color="primary"
                                                        indeterminate={numSelected > 0 && numSelected < rowCount}
                                                        checked={rowCount > 0 && numSelected === rowCount}
                                                        onChange={onSelectAllClick}
                                                        inputProps={{
                                                            'aria-label': 'select all desserts',
                                                        }}
                                                    />
                                                </TableCell>

                                                <TableCell component="th" scope="row">
                                                    {row.rationCardNumber}
                                                </TableCell>
                                                <TableCell align="left">{row.memberName}</TableCell>
                                                <TableCell align="left">{row.dateOfBirth}</TableCell>
                                                <TableCell align="right">{row.aadhaarNumber}</TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer> */}


                            <ul className="p-6 space-y-6">
                                {/* <li className="flex items-center">

                                    <input id="apple" type="checkbox" name="apple" />
                                    <span className="font-semibold">Ration Card</span>
                                    <span className="ml-auto font-semibold">Member Name</span>
                                    <span className="ml-auto font-semibold">Date of Birth</span>
                                    <span className="ml-auto font-semibold">Aadhaar Number</span>
                                </li> */}



                                {/* {data.data.map((item, index) => {
                                    return (
                                        <li className="flex items-center">

                                            <span className="font-regular">{item.rationCardNumber}</span>
                                            <span className="ml-auto font-regular">{item.memberName}</span>
                                            <span className="ml-auto font-regular">{item.dateOfBirth}</span>
                                            <span className="ml-auto font-regular">{item.aadhaarNumber}</span>
                                        </li>

                                    )
                                })} */}




                            </ul>

                        </div>
                    </div>
                    {/* <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold">25</span>
                            <span className="block text-gray-500">Lections left</span>
                        </div>
                    </div> */}
                    {/* <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold">139</span>
                            <span className="block text-gray-500">Hours spent on lections</span>
                        </div>
                    </div> */}
                    {/* 
                    <div className="row-span-3 bg-white shadow rounded-lg">
                        <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                            <span>Students by average mark</span>
                            <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                                Descending
                                <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns
                        </div>
                        <div className="overflow-y-auto" style={{ maxHeight: '24rem' }}>
                            <ul className="p-6 space-y-6">
                                <li className="flex items-center">
                                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                                    </div>
                                    <span className="text-gray-600">Annette Watson</span>
                                    <span className="ml-auto font-semibold">9.3</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture" />
                                    </div>
                                    <span className="text-gray-600">Calvin Steward</span>
                                    <span className="ml-auto font-semibold">8.9</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture" />
                                    </div>
                                    <span className="text-gray-600">Ralph Richards</span>
                                    <span className="ml-auto font-semibold">8.7</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture" />
                                    </div>
                                    <span className="text-gray-600">Bernard Murphy</span>
                                    <span className="ml-auto font-semibold">8.2</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture" />
                                    </div>
                                    <span className="text-gray-600">Arlene Robertson</span>
                                    <span className="ml-auto font-semibold">8.2</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture" />
                                    </div>
                                    <span className="text-gray-600">Jane Lane</span>
                                    <span className="ml-auto font-semibold">8.1</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture" />
                                    </div>
                                    <span className="text-gray-600">Pat Mckinney</span>
                                    <span className="ml-auto font-semibold">7.9</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture" />
                                    </div>
                                    <span className="text-gray-600">Norman Walters</span>
                                    <span className="ml-auto font-semibold">7.7</span>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                        {/* <div className="px-6 py-5 font-semibold border-b border-gray-100">Students by type of studying</div>
                        <div className="p-4 flex-grow">
                            <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                        </div> */}
                    </div>
                </section>

            </main>

        </>
    );
};

export default Dashboard;