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
import { onFamiliesDetailApi } from '../network/actions/familyDetailApi';
import { TopCard } from './TopCard';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { onShowLoader } from '../network/actions/showLoader';


const columns = [
    { id: 'headOfFamily', label: 'Head of Family', minWidth: 170 },
    { id: 'rationCardNo', label: 'Ration No.', minWidth: 100 },
    {
        id: 'municipalName',
        label: 'Municipality',
        align: 'left',
        // format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'economicStatus',
        label: 'Economic Status',
        minWidth: 170,
        align: 'left',
        // format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'wardName',
        label: 'Ward Name',
        minWidth: 120,
        align: 'left',
        format: (value) => value.toFixed(2),
    },

    {
        id: 'socialCategory',
        label: 'Social Category',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'religion',
        label: 'Religion',
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'residentStatus',
        label: 'Resident',
        align: 'left',
        format: (value) => value.toFixed(2),
    },

];

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




const Dashboard = (props) => {

    const { totalFamilyCount, totalMemberCount, wardFamilyCount, wardMemberCount } = props.dashboardData || {};

    // const { wardId } = props.wardId || {};

    const [search, setSearch] = useState("");
    const [checked, setChecked] = React.useState([0]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [familyList, setfamilyList] = useState([]);

    const [selectedFamily, setselectedFamily] = useState({});

    const [detailCalled, setdetailCalled] = useState(false);



    const [isCardClicked, setCardClicked] = useState(false);


    const [showModal, setShowModal] = useState(false);



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);



    const [totalPage, setTotalPage] = useState(0);


    const dispatch = useDispatch();
    const familiesList = useSelector((state) => state.familiesList);

    const familiesDetailApi = useSelector((state) => state.familiesDetailApi);


    const showLoader = useSelector((state) => state.showLoader);





    useEffect(() => {


        console.log(showLoader, "ASsdkjnqwjdkjqwodada")


    });


    const onSearchChange = (searchQuery) => {
        setSearch(searchQuery);

    };


    const handleCardClick = () => {
        setCardClicked(!isCardClicked);
    };


    async function searchRationCard() {
        dispatch(onFamiliesList(0, props.wardId));
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        if (familiesDetailApi?.data && detailCalled) {
            const { data, status, message, rationCardAlreadyExists } = familiesList.data || {};
            setShowModal(true)
            // setrationList(data);

            setselectedFamily(familiesDetailApi.data);
            setdetailCalled(false);


        }

    }, [familiesDetailApi])



    useEffect(() => {
        if (familiesList?.data) {
            const { data, status, message, rationCardAlreadyExists } = familiesList.data || {};
            dispatch(onShowLoader(false))

            // setrationList(data);
            setfamilyList(familiesList.data)

        }

    }, [familiesList])

    useEffect(() => {
        dispatch(onShowLoader(true))
        dispatch(onFamiliesList(0, 99));


    }, [])


    return (
        <>
            <main className="p-6 space-y-6">
                <Grid item={true} xs={12}>
                    <TopCard
                        top_header_data={[
                            {
                                label: 'TOTAL FAMILY',
                                value: totalFamilyCount,
                                color: "red"
                            },
                            {
                                label: 'TOTAL MEMBER',
                                value: totalMemberCount,
                                color: "blue"
                            },
                            {
                                label: 'WARD FAMILY',
                                value: wardFamilyCount,
                                color: "green"
                            },
                            {
                                label: 'WARD MEMBERS',
                                value: wardMemberCount,
                                color: "orange"
                            }
                        ]}
                    />
                </Grid>

                <Grid
                    container
                    sx={{ background: "#FFF", borderRadius: 6 }}
                >
                    <Grid item={true} xs={12} md={12} lg={12} sx={{ background: "#FFF", borderRadius: 6 }}>

                        <div style={{ display: 'table', tableLayout: 'fixed', width: '100%', maxHeight: "400px" }}>

                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer sx={{ maxHeight: 400, height: 400 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column, index) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth, background: "#074465", color: "#FFF" }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {familyList?.content && familyList?.content
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row, index2) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={index2} >
                                                            {columns.map((column) => {
                                                                const value = row[column.id];
                                                                return (
                                                                    <TableCell
                                                                        className="hoverable-cell"

                                                                        key={column.id} align={column.align} onClick={(handleEvent) => {

                                                                            console.log(row, "Asdjkuiwhqdjwknshfewdsk")
                                                                            setSelectedItems(row)
                                                                            setdetailCalled(true);
                                                                            dispatch(onFamiliesDetailApi(row.himParivarId, row.rationCardNo))


                                                                        }}>
                                                                        {column.format && typeof value === 'number'
                                                                            ? column.format(value)
                                                                            : value}
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 20]}
                                    component="div"
                                    count={familyList?.content ? familyList?.content.length : 0}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>


                        </div>


                    </Grid>

                </Grid>





                {/* <div className="px-6 py-5 font-semibold border-b border-gray-100">Ration Search</div> */}
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

                                <Grid container  >
                                    <Grid item={true} xs={11.5}  >
                                        <Typography fontWeight='600' style={{ fontSize: 20 }} color="black">
                                            Member Details
                                        </Typography>


                                    </Grid>

                                    <Grid item={true} xs={0.5} style={{ justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <IconButton aria-label="delete" size="small" onClick={() => setShowModal(false)}>
                                            <HighlightOffIcon fontSize="medium" />
                                        </IconButton>
                                    </Grid>


                                </Grid>

                                <Divider variant="fullWidth" horizontal style={{ marginTop: 10, marginBottom: 10 }} />



                                {selectedFamily?.members && selectedFamily?.members.map((memberObject, index) => {

                                    return (

                                        <>
                                            <Paper elevation={3} variant="elevation" style={{ marginBottom: 16 }}>

                                                <Typography style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5, background: "#074465", padding: 10, color: '#FFF' }} >
                                                    Member Name: {memberObject.memberName}
                                                </Typography>

                                                <Box style={{ padding: 10 }}>


                                                    <Grid container >
                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Name:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4} >

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.memberName}
                                                            </Typography>


                                                        </Grid>



                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Date of Birth:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4}>

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.dateOfBirth}
                                                            </Typography>


                                                        </Grid>

                                                    </Grid>


                                                    <Grid container mt={1} >
                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Gender:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4} >

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.gender}
                                                            </Typography>


                                                        </Grid>



                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Qualification:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4}>

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.educationQualification}
                                                            </Typography>

                                                        </Grid>

                                                    </Grid>




                                                    <Grid container mt={1} >
                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Relation:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4} >

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.relation}
                                                            </Typography>


                                                        </Grid>



                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Relative Name:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4}>

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.relativeName}
                                                            </Typography>


                                                        </Grid>

                                                    </Grid>



                                                    <Grid container mt={1} >
                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Ration Number::
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4} >

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.rationCardNumber}
                                                            </Typography>


                                                        </Grid>



                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Aadhaar Number:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4}>

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.aadhaarNumber}
                                                            </Typography>

                                                        </Grid>

                                                    </Grid>



                                                    <Grid container mt={1} >
                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                Mobile Number:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4} >

                                                            <Typography style={{ fontSize: 14, letterSpacing: 0.5 }} >
                                                                {memberObject.mobileNumber}
                                                            </Typography>


                                                        </Grid>



                                                        <Grid item={true} xs={12} sm={2}>
                                                            <Typography style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5 }} >
                                                                E-KYC:
                                                            </Typography>


                                                        </Grid>

                                                        <Grid item={true} xs={12} sm={4}>

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


                </div>

            </main>

        </>
    );
};

export default Dashboard;