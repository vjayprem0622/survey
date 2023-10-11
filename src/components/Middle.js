import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'

import SearchBar from './SearchBar';

import { onRationDetails } from '../network/actions/rationSearch';
import { useDispatch, useSelector } from 'react-redux';


import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';


// import '../styles/MyDataGrid.css';





const Middle = (props) => {
    const [search, setSearch] = useState("");
    const [rationCardNumber, setRationCardNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);



    const onSearchChange = (searchQuery) => {
        setSearch(searchQuery);

    };

    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };


    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Dessert (100g serving)',
        },
        {
            id: 'calories',
            numeric: true,
            disablePadding: false,
            label: 'Calories',
        },
        {
            id: 'fat',
            numeric: true,
            disablePadding: false,
            label: 'Fat (g)',
        },
        {
            id: 'carbs',
            numeric: true,
            disablePadding: false,
            label: 'Carbs (g)',
        },
        {
            id: 'protein',
            numeric: true,
            disablePadding: false,
            label: 'Protein (g)',
        },
    ];




    const dispatch = useDispatch();

    const rationData = useSelector((state) => state.rationDetails);



    async function searchRationCard() {

        dispatch(onRationDetails(search));

    }


    useEffect(() => {

        console.log(rationData, "Asdajoiskdlqwiuadjsckfweoa")


    }, [rationData])


    const handleCheckboxChange = (event, item) => {
        if (event.target.checked) {
            setSelectedItems([...selectedItems, item]);
        } else {
            setSelectedItems(selectedItems.filter((selected) => selected !== item));
        }
    };



    function createData(name, calories, fat, carbs, protein) {
        return {
            name,
            calories,
            fat,
            carbs,
            protein,
        };
    }

    const rows = [
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Donut', 452, 25.0, 51, 4.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Honeycomb', 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Jelly Bean', 375, 0.0, 94, 0.0),
        createData('KitKat', 518, 26.0, 65, 7.0),
        createData('Lollipop', 392, 0.2, 98, 0.0),
        createData('Marshmallow', 318, 0, 81, 2.0),
        createData('Nougat', 360, 19.0, 9, 37.0),
        createData('Oreo', 437, 18.0, 63, 4.0),
    ];


    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }


    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }





    return (
        <div className=" bg-white shadow-sm w-12/12 border rounded-xl border-gray-100">

            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  "> Family Survey Via Ration Card Number </p>

                <Grid container spacing={2}>
                    <Grid item xs={11} sm={9}>
                        <SearchBar onSearch={onSearchChange} value={search} />
                        {/* {!isValid && <p className="error">Invalid ration card number.</p>} */}

                    </Grid>

                    <Grid item xs={11} sm={2.5}>
                        {/* {!isValid && <p className="error">Invalid ration card number.</p>} */}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                            style={{ backgroundColor: 'blue', marginLeft: 12, height: 54 }}
                            onClick={() => searchRationCard()}
                        >
                            Search
                        </Button>


                    </Grid>

                    <div className="responsive-grid-container" style={{ height: 300, width: '100%' }}>


                        <Grid item xs={12} sm={12}>

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
                                    {headCells.map((headCell) => (
                                        <TableCell
                                            key={headCell.id}
                                            align={headCell.numeric ? 'right' : 'left'}
                                            padding={headCell.disablePadding ? 'none' : 'normal'}
                                            sortDirection={orderBy === headCell.id ? order : false}
                                        >
                                            <TableSortLabel
                                                active={orderBy === headCell.id}
                                                direction={orderBy === headCell.id ? order : 'asc'}
                                                onClick={createSortHandler(headCell.id)}
                                            >
                                                {headCell.label}
                                                {orderBy === headCell.id ? (
                                                    <Box component="span" sx={visuallyHidden}>
                                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                    </Box>
                                                ) : null}
                                            </TableSortLabel>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>



                        </Grid>

                    </div>




                </Grid>






            </div>
            <div>
                {/* <Line data={data} /> */}
            </div>
        </div>
    )
}

export default Middle
