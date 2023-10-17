"use strict";
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 7827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9809);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3691);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3843);
/* harmony import */ var _mui_material_Icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _network_actions_rationSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1005);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_FamilyRestroom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6324);
/* harmony import */ var _mui_icons_material_FamilyRestroom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FamilyRestroom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Groups2TwoTone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5179);
/* harmony import */ var _mui_icons_material_Groups2TwoTone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Groups2TwoTone__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_DoneAll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4914);
/* harmony import */ var _mui_icons_material_DoneAll__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DoneAll__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_HighlightOff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6380);
/* harmony import */ var _mui_icons_material_HighlightOff__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_HighlightOff__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8690);
/* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _network_actions_familiesList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3661);
/* harmony import */ var _network_actions_familyDetailApi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6924);
/* harmony import */ var _TopCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(856);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7308);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_28__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_network_actions_rationSearch__WEBPACK_IMPORTED_MODULE_11__, _network_actions_familiesList__WEBPACK_IMPORTED_MODULE_19__, _network_actions_familyDetailApi__WEBPACK_IMPORTED_MODULE_20__]);
([_network_actions_rationSearch__WEBPACK_IMPORTED_MODULE_11__, _network_actions_familiesList__WEBPACK_IMPORTED_MODULE_19__, _network_actions_familyDetailApi__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























// const columns = [
//     {
//         field: 'headOfFamily', headerName: 'Head of Family', width: 200,
//     },
//     {
//         field: 'rationCardNo', headerName: 'Ration No.', width: 170, renderHeader: () => (
//             <Typography  >
//                 Ration No.
//             </Typography>
//         )
//     },
//     {
//         field: 'municipalName', headerName: 'Municipality', width: 130,
//     },
//     {
//         field: 'economicStatus', headerName: 'Economic Status', width: 130,
//     },
//     {
//         field: 'wardName', headerName: 'Ward Name', width: 100,
//     },
//     {
//         field: 'socialCategory', headerName: 'Social Category', width: 130,
//     },
//     {
//         field: 'religion', headerName: 'Religion', width: 130,
//     },
//     {
//         field: 'residentStatus', headerName: 'Resident', width: 130,
//     },
// ];
const columns = [
    {
        id: "headOfFamily",
        label: "Head of Family",
        minWidth: 170
    },
    {
        id: "rationCardNo",
        label: "Ration No.",
        minWidth: 100
    },
    {
        id: "municipalName",
        label: "Municipality",
        minWidth: 170,
        align: "right"
    },
    {
        id: "economicStatus",
        label: "Economic Status",
        minWidth: 170,
        align: "right"
    },
    {
        id: "wardName",
        label: "Ward Name",
        minWidth: 170,
        align: "right",
        format: (value)=>value.toFixed(2)
    },
    {
        id: "socialCategory",
        label: "Social Category",
        minWidth: 170,
        align: "right",
        format: (value)=>value.toFixed(2)
    },
    {
        id: "religion",
        label: "Religion",
        minWidth: 170,
        align: "right",
        format: (value)=>value.toFixed(2)
    },
    {
        id: "residentStatus",
        label: "Resident",
        minWidth: 170,
        align: "right",
        format: (value)=>value.toFixed(2)
    }
];
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 30,
    maxHeight: "80vh",
    overflow: "hidden",
    overflowY: "auto",
    p: 4,
    borderRadius: 1
};
function CustomCellRenderer(params) {
    const cellValue = params.value;
    console.log(cellValue, "askdhuqwjkndsiuhfewd");
    const cellHeight = cellValue && cellValue.length > 1 ? cellValue.length * 20 : 40; // Adjust the height factor (20) as needed
    // Customize the cell rendering as needed
    return /*#__PURE__*/ _jsx("div", {
        style: {
            height: `${cellHeight}px`,
            overflow: "auto"
        },
        children: cellValue.map((item, index)=>/*#__PURE__*/ _jsx(Typography, {
                style: {
                    color: "red",
                    fontWeight: "500"
                },
                variant: "h7",
                component: "h3",
                children: item
            }, index))
    });
}
let modalData = {
    "districtName": "BILASPUR",
    "members": [
        {
            "memberName": "PRADEEP",
            "rationCardNumber": "HP2021072923147",
            "dateOfBirth": "25-03-1983",
            "relation": "GrandMother",
            "relativeName": "Kusum Devi",
            "aadhaarNumber": 200032502966,
            "mobileNumber": "9857530008",
            "gender": "Female",
            "isEkycVerfied": true,
            "educationQualification": "Postgraduate",
            "occupation": "Govt. Employee",
            "emailAddress": "dfsdfds",
            "himMemberId": 758723668,
            "isBonafide": true
        },
        {
            "memberName": "VEDANSH SISODIA",
            "rationCardNumber": "HP2021072923147",
            "dateOfBirth": "17-03-2018",
            "relation": "Maternal Grandfather",
            "relativeName": "Kusum Devi",
            "aadhaarNumber": 406113712294,
            "mobileNumber": "6456456654",
            "gender": "Others",
            "isEkycVerfied": false,
            "educationQualification": "10+2",
            "occupation": "Private Employee",
            "emailAddress": "sdfdsf",
            "himMemberId": 766710634,
            "isBonafide": true
        },
        {
            "memberName": "SURYANSH SISODIA",
            "rationCardNumber": "HP2021072923147",
            "dateOfBirth": "13-07-2014",
            "relation": "Maternal GrandMother",
            "relativeName": "Kusum Devi",
            "aadhaarNumber": 821850558655,
            "mobileNumber": "5467654654",
            "gender": "Others",
            "isEkycVerfied": true,
            "educationQualification": "10+2",
            "occupation": "Govt. Employee",
            "emailAddress": "dsfdsfds",
            "himMemberId": 917948277,
            "isBonafide": true
        },
        {
            "memberName": "Kusum Devi",
            "rationCardNumber": "HP2021072923147",
            "dateOfBirth": "03-07-1989",
            "relation": "GrandMother",
            "relativeName": "Kusum Devi",
            "aadhaarNumber": 231761748926,
            "mobileNumber": "3324354354",
            "gender": "Female",
            "isEkycVerfied": true,
            "educationQualification": "Graduate",
            "occupation": "Labour",
            "emailAddress": "fsdfsd",
            "himMemberId": 187915807,
            "isBonafide": true
        }
    ],
    "propertyDetail": {
        "propertyId": "gfdfdgfd",
        "propertyDetails": "Rented",
        "rentGivenTo": "dsfdsdsf",
        "electricityConsumerNo": "fdssdfsdf",
        "waterConnectionNumber": "dsfdfsdf"
    },
    "wardName": "99",
    "houseAddress": "eewrewrwerew",
    "rationCardNo": "HP2021072923147",
    "himParivarId": 26364644,
    "economicStatus": "B.P.L",
    "socialCategory": "Minority",
    "religion": "Buddhism",
    "residentStatus": "Rural",
    "municipalName": "M.C. Bilaspur",
    "headOfFamily": "Kusum Devi"
};
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
};
const Dashboard = (props)=>{
    const { totalFamilyCount , totalMemberCount , wardFamilyCount , wardMemberCount  } = props.dashboardData || {};
    // const { wardId } = props.wardId || {};
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        0
    ]);
    const [selectedItems, setSelectedItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [familyList, setfamilyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedFamily, setselectedFamily] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [detailCalled, setdetailCalled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isCardClicked, setCardClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(10);
    const [totalPage, setTotalPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
    const familiesList = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>state.familiesList);
    const familiesDetailApi = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>state.familiesDetailApi);
    const onSearchChange = (searchQuery)=>{
        setSearch(searchQuery);
    };
    const handleCardClick = ()=>{
        setCardClicked(!isCardClicked);
    };
    async function searchRationCard() {
        dispatch((0,_network_actions_familiesList__WEBPACK_IMPORTED_MODULE_19__/* .onFamiliesList */ .a0)(0, props.wardId));
    }
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(familiesDetailApi, "Aasdsadsdajoiskdlqwiuadjsckfweoa");
        if (familiesDetailApi?.data && detailCalled) {
            const { data , status , message , rationCardAlreadyExists  } = familiesList.data || {};
            setShowModal(true);
            // setrationList(data);
            setselectedFamily(familiesDetailApi.data);
            setdetailCalled(false);
        }
    }, [
        familiesDetailApi
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(familiesList, "Aasdsadsdajoiskdlqwiuadjsckfweoa");
        if (familiesList?.data) {
            const { data , status , message , rationCardAlreadyExists  } = familiesList.data || {};
            // setrationList(data);
            setfamilyList(familiesList.data);
        }
    }, [
        familiesList
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_network_actions_familiesList__WEBPACK_IMPORTED_MODULE_19__/* .onFamiliesList */ .a0)(0, 99));
    }, []);
    const onRowsSelectionHandler = (ids)=>{
        let rows = data.data;
        const selectedRowsData = ids.map((id)=>rows.find((row)=>row.aadhaarNumber === id));
        console.log(selectedRowsData);
        setSelectedItems(selectedRowsData);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "p-6 space-y-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopCard__WEBPACK_IMPORTED_MODULE_21__/* .TopCard */ .Q, {
                        top_header_data: [
                            {
                                label: "TOTAL FAMILY",
                                value: totalFamilyCount,
                                color: "red"
                            },
                            {
                                label: "TOTAL MEMBER",
                                value: totalMemberCount,
                                color: "blue"
                            },
                            {
                                label: "WARD FAMILY",
                                value: wardFamilyCount,
                                color: "green"
                            },
                            {
                                label: "WARD MEMBERS",
                                value: wardMemberCount,
                                color: "orange"
                            }
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    container: true,
                    sx: {
                        background: "#FFF",
                        borderRadius: 6
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 12,
                        lg: 12,
                        sx: {
                            background: "#FFF",
                            borderRadius: 6
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "table",
                                tableLayout: "fixed",
                                width: "100%",
                                maxHeight: "400px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
                                sx: {
                                    width: "100%",
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_25___default()), {
                                        sx: {
                                            maxHeight: 400,
                                            height: 400
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_22___default()), {
                                            stickyHeader: true,
                                            "aria-label": "sticky table",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_26___default()), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_28___default()), {
                                                        children: columns.map((column)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_24___default()), {
                                                                align: column.align,
                                                                style: {
                                                                    minWidth: column.minWidth,
                                                                    background: "#074465",
                                                                    color: "#FFF"
                                                                },
                                                                children: column.label
                                                            }, column.id))
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_23___default()), {
                                                    children: familyList?.content && familyList?.content.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_28___default()), {
                                                            hover: true,
                                                            role: "checkbox",
                                                            tabIndex: -1,
                                                            children: columns.map((column)=>{
                                                                const value = row[column.id];
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_24___default()), {
                                                                    align: column.align,
                                                                    onClick: (handleEvent)=>{
                                                                        console.log(row, "Asdjkuiwhqdjwknshfewdsk");
                                                                        setSelectedItems(row);
                                                                        setdetailCalled(true);
                                                                        dispatch((0,_network_actions_familyDetailApi__WEBPACK_IMPORTED_MODULE_20__/* .onFamiliesDetailApi */ .Bm)(row.himParivarId, row.rationCardNo));
                                                                    },
                                                                    children: column.format && typeof value === "number" ? column.format(value) : value
                                                                }, column.id);
                                                            })
                                                        }, row.code);
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_27___default()), {
                                        rowsPerPageOptions: [
                                            5,
                                            10,
                                            20
                                        ],
                                        component: "div",
                                        count: familyList?.content ? familyList?.content.length : 0,
                                        rowsPerPage: rowsPerPage,
                                        page: page,
                                        onPageChange: handleChangePage,
                                        onRowsPerPageChange: handleChangeRowsPerPage
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-4 flex-grow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Modal, {
                        open: showModal,
                        onClose: ()=>{
                            setShowModal(false);
                        },
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: style,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {},
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                        container: true,
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                xs: 11.5,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    fontWeight: "600",
                                                    style: {
                                                        fontSize: 20
                                                    },
                                                    color: "black",
                                                    children: "Member Details"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                xs: 0.5,
                                                style: {
                                                    justifyContent: "flex-end",
                                                    alignContent: "flex-end",
                                                    alignItems: "flex-end"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                    "aria-label": "delete",
                                                    size: "small",
                                                    onClick: ()=>setShowModal(false),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_HighlightOff__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                        fontSize: "medium"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {
                                        variant: "fullWidth",
                                        horizontal: true,
                                        style: {
                                            marginTop: 10,
                                            marginBottom: 10
                                        }
                                    }),
                                    selectedFamily?.members && selectedFamily?.members.map((memberObject, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
                                                elevation: 3,
                                                variant: "elevation",
                                                style: {
                                                    marginBottom: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        style: {
                                                            fontSize: 16,
                                                            fontWeight: "bold",
                                                            letterSpacing: 0.5,
                                                            background: "#074465",
                                                            padding: 10,
                                                            color: "#FFF"
                                                        },
                                                        children: [
                                                            "Member Name: ",
                                                            memberObject.memberName
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                        style: {
                                                            padding: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                container: true,
                                                                spacing: 1,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Name:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.memberName
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Date of Birth:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.dateOfBirth
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                container: true,
                                                                spacing: 1,
                                                                mt: 1,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Gender:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.gender
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Qualification:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.educationQualification
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                container: true,
                                                                spacing: 1,
                                                                mt: 1,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Relation:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.relation
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Relative Name:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.relativeName
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                container: true,
                                                                spacing: 1,
                                                                mt: 1,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Ration Number::"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.rationCardNumber
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Aadhaar Number:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.aadhaarNumber
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                container: true,
                                                                spacing: 1,
                                                                mt: 1,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "Mobile Number:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.mobileNumber
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 14,
                                                                                fontWeight: "bold",
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: "E-KYC:"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                        item: true,
                                                                        xs: 12,
                                                                        sm: 4,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            style: {
                                                                                fontSize: 16,
                                                                                letterSpacing: 0.5
                                                                            },
                                                                            children: memberObject.isEkycVerfied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                                                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DoneAll__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                                                    fontSize: "small",
                                                                                    color: "success"
                                                                                }),
                                                                                label: "Verified",
                                                                                style: {
                                                                                    height: 20
                                                                                }
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                                                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                                                    color: "error",
                                                                                    fontSize: "small"
                                                                                }),
                                                                                label: "Not Verified",
                                                                                style: {
                                                                                    height: 20
                                                                                }
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        });
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ TopCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const TopCard = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                gap: 3,
                display: "grid",
                gridTemplateColumns: {
                    md: "repeat(4, 1fr)",
                    sm: "repeat(2, 1fr)",
                    xs: "repeat(1, 1fr)"
                }
            },
            children: props.top_header_data && props.top_header_data.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    elevation: 10,
                    sx: {
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        borderRadius: 1,
                        p: 2,
                        "&:hover": {
                            transform: "scale(1.03)"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            color: "primary",
                            variant: "overline",
                            children: item.label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h5",
                            color: item.color,
                            children: item.value
                        })
                    ]
                }, item.label))
        })
    });
};
TopCard.propTypes = {
    stats: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};


/***/ }),

/***/ 3661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a0": () => (/* binding */ onFamiliesList)
/* harmony export */ });
/* unused harmony exports fetchFamiliesListSuccess, fetchFamiliesListFailure */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2894);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// actions/someActions.js


// Action Creators
const fetchFamiliesListSuccess = (data)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FAMILIES_LIST_SUCCESS */ .xz,
        payload: data
    });
const fetchFamiliesListFailure = (error)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FAMILIES_LIST_FALIURE */ .aD,
        payload: error
    });
// Async Action to Fetch Data
const onFamiliesList = (pageNo, wardId)=>{
    return async (dispatch)=>{
        try {
            const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`familyList?page=${pageNo}&size=10&wardId=${wardId}`, {});
            console.log(response, "dashboard response");
            dispatch(fetchFamiliesListSuccess(response.data));
        } catch (error) {
            dispatch(fetchFamiliesListFailure(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bm": () => (/* binding */ onFamiliesDetailApi)
/* harmony export */ });
/* unused harmony exports fetchFamiliesDetSuccess, fetchFamiliesDetFailure */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2894);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// actions/someActions.js


// Action Creators
const fetchFamiliesDetSuccess = (data)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FAMILIES_DETAIL_SUCCESS */ .gr,
        payload: data
    });
const fetchFamiliesDetFailure = (error)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FAMILIES_DETAIL_FALIURE */ .Fn,
        payload: error
    });
// Async Action to Fetch Data
const onFamiliesDetailApi = (parivarId, rationNo)=>{
    return async (dispatch)=>{
        try {
            const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/familyDetail?himParivarId=${parivarId}&rationCardNo=${rationNo}`, {});
            console.log(response, "dashboard response");
            dispatch(fetchFamiliesDetSuccess(response.data));
        } catch (error) {
            dispatch(fetchFamiliesDetFailure(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1057:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7827);
/* harmony import */ var _mui_icons_material_AccessAlarm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9672);
/* harmony import */ var _mui_icons_material_AccessAlarm__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccessAlarm__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _network_actions_dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5044);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3788);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(662);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _mui_icons_material_Comment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(5342);
/* harmony import */ var _mui_icons_material_Comment__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Comment__WEBPACK_IMPORTED_MODULE_27__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Container__WEBPACK_IMPORTED_MODULE_10__, _network_actions_dashboard__WEBPACK_IMPORTED_MODULE_12__, _utils_cookie__WEBPACK_IMPORTED_MODULE_18__]);
([_components_Container__WEBPACK_IMPORTED_MODULE_10__, _network_actions_dashboard__WEBPACK_IMPORTED_MODULE_12__, _utils_cookie__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";




























const drawWidth = 220;
function Dashboard(props) {
    const [mobileViewOpen, setMobileViewOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [selectedRows, setSelectedRows] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        0
    ]);
    const [wardId, setWardId] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        0
    ]);
    const [dashboardCount, setdashboardCount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        totalFamilyCount: 0,
        totalMemberCount: 0,
        wardFamilyCount: 0,
        wardMemberCount: 0
    });
    const globalUser = (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_18__/* .getToken */ .LP)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_19__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
    const dashboard_data = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)((state)=>state.dashboard);
    const handleToggle = ()=>{
        setMobileViewOpen(!mobileViewOpen);
    };
    const handleListSelected = (value)=>()=>{
            const currentIndex = checked.indexOf(value);
            const newChecked = [
                ...checked
            ];
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let tokenData = {};
        try {
            tokenData = JSON.parse(globalUser);
        } catch (err) {
            console.log(err, "asasdwie");
        }
        console.log(tokenData, "asjdkjoiqlkmwjefijoqdwlks");
        if (tokenData) {
            const { userName , ulb , token , wardName , districtName  } = tokenData || {};
            if (ulb) {
                const { wardNo , wardName: wardName1 , municipalName , municipalId , id , districtCode  } = ulb || {};
                if (wardNo) {
                    setWardId(id);
                    // getDashboard(id);
                    dispatch((0,_network_actions_dashboard__WEBPACK_IMPORTED_MODULE_12__/* .onDashboard */ .Jq)(id, token));
                }
            }
        // else {
        //     removeToken();
        //     router.push('/login')
        // }
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(dashboard_data, "Asdjkakasdasdqwusdjquakodlw");
        if (dashboard_data.error) {
            console.log(dashboard_data.error, "Asasdasqwdjkakasdasdqwusdjquakodlw");
            if (dashboard_data.error.message) {
                if (dashboard_data.error.message.includes("401")) {
                    (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_18__/* .removeToken */ .gy)();
                    router.push("/login");
                }
            }
        }
        if (dashboard_data) {
            const { data , message , status  } = dashboard_data.data || {};
            console.log(data, "asdoiqakmdlasdqweklfmqamfjewoqdal");
            if (message === "SUCCESS" && status === "OK") {
                setdashboardCount(data);
            }
        }
    }, [
        dashboard_data
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            dashboardData: dashboardCount,
            wardId: wardId
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard); // export const getServerSideProps = async (context) => {
 //     // Fetch data from an API or a database
 //     // Return the data as props
 //     return {
 //         props: {
 //             data,
 //         },
 //     };
 // };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;