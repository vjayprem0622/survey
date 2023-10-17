"use strict";
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 9809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);








const SearchBar = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_5___default()), {
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4___default()), {
                htmlFor: "outlined-adornment-amount",
                children: "Search Ration Card"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_3___default()), {
                onChange: (e)=>props.onSearch(e.target.value),
                value: props.value,
                startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default()), {
                    position: "end",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6___default()), {
                        color: "primary"
                    })
                }),
                label: "Search Ration Card"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);


/***/ }),

/***/ 3788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/CssBaseline"
var CssBaseline_ = __webpack_require__(4960);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/icons-material/MoveToInbox"
var MoveToInbox_ = __webpack_require__(8307);
var MoveToInbox_default = /*#__PURE__*/__webpack_require__.n(MoveToInbox_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/icons-material/Mail"
var Mail_ = __webpack_require__(9026);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/assets/BackgroundLogin/index.js
var BackgroundLogin = __webpack_require__(7242);
// EXTERNAL MODULE: ./src/assets/svg/himachal_logoo.svg
var himachal_logoo = __webpack_require__(6489);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/AccountCircle"
var AccountCircle_ = __webpack_require__(1883);
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);
// EXTERNAL MODULE: external "@mui/icons-material/Home"
var Home_ = __webpack_require__(3467);
;// CONCATENATED MODULE: ./src/components/Loader/index.js

function Loading() {
    return /*#__PURE__*/ _jsx("div", {
        className: "fixed inset-0 bg-blue-500 z-[10000] flex flex-1 items-center justify-center",
        children: "Loading"
    });
}

;// CONCATENATED MODULE: ./src/components/dashboard/layout.js





























const drawerWidth = 260;
const FireNav = (0,styles_.styled)((List_default()))({
    "& .MuiListItemButton-root": {
        paddingLeft: 24,
        paddingRight: 24
    },
    "& .MuiListItemIcon-root": {
        minWidth: 0,
        marginRight: 16
    },
    "& .MuiSvgIcon-root": {
        fontSize: 20
    }
});
function Layout(props) {
    const { window  } = props;
    const { children  } = props;
    const router = (0,router_.useRouter)();
    const pathName = (0,navigation.usePathname)();
    const [mobileOpen, setMobileOpen] = external_react_.useState(false);
    const [anchorEl, setAnchorEl] = external_react_.useState(null);
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };
    const handleMenuClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const drawer = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {},
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: himachal_logoo/* default */.Z,
                        width: 50,
                        height: 30,
                        alt: "Logo"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "h6",
                        noWrap: true,
                        component: "div",
                        marginLeft: 2,
                        children: [
                            "Parivar Register",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " (Urban)"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                style: {
                    marginTop: 20
                },
                children: [
                    "Dashboard",
                    "Survey",
                    "Registration"
                ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                        disablePadding: true,
                        sx: {
                            borderRight: pathName.startsWith("/" + text.toLowerCase()) ? "4px solid #074465   " : "0px solid #FFFFFF"
                        },
                        className: pathName.startsWith("/" + text.toLowerCase()) ? " text-[#074465] bg-[#f2f5f9] bg-white" : "text-slate-700",
                        // style={{ color: pathName.startsWith("/" + text.toLowerCase()) ? "text-sky-600 bg-slate-100" : "text-slate-700" }}
                        onClick: ()=>router.push("/" + text.toLowerCase()),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                    // className={pathName.startsWith("/" + text.toLowerCase()) ? "bg-[#e6f5ff] bg-white" : "text-slate-700"}
                                    className: pathName.startsWith("/" + text.toLowerCase()) ? "text-[#074465]" : "text-slate-700",
                                    children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    sx: {
                                        transition: "color 0.3s",
                                        "&:hover": {
                                            color: "#074465"
                                        }
                                    },
                                    primaryTypographyProps: {
                                        fontSize: "14px"
                                    },
                                    primary: text
                                })
                            ]
                        })
                    }, text))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                children: [
                    "About Us",
                    "Contact Us"
                ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                        disablePadding: true,
                        className: pathName.startsWith("/" + text.toLowerCase()) ? " text-[#074465] bg-[#f2f5f9] bg-white" : "text-slate-700",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                    children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    sx: {
                                        transition: "color 0.3s",
                                        "&:hover": {
                                            color: "#074465"
                                        }
                                    },
                                    primaryTypographyProps: {
                                        fontSize: "14px"
                                    },
                                    primary: text
                                })
                            ]
                        })
                    }, text))
            })
        ]
    });
    const container = window !== undefined ? ()=>window().document.body : undefined;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "fixed",
                enableColorOnDark: false,
                sx: {
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`
                    },
                    ml: {
                        sm: `${drawerWidth}px`
                    },
                    bgcolor: "#FFF",
                    color: "#000"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    elevation: 0,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            edge: "start",
                            onClick: handleDrawerToggle,
                            sx: {
                                mr: 2,
                                display: {
                                    sm: "none"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    color: "inherit",
                                    onClick: handleMenuClick,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Menu, {
                                    anchorEl: anchorEl,
                                    open: Boolean(anchorEl),
                                    onClose: handleClose,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                            onClick: handleClose,
                                            children: "Profile"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                            onClick: handleClose,
                                            children: "Settings"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                            onClick: handleClose,
                                            children: "Logout"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                component: "nav",
                sx: {
                    width: {
                        sm: drawerWidth
                    },
                    flexShrink: {
                        sm: 0
                    }
                },
                "aria-label": "mailbox folders",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                        container: container,
                        variant: "temporary",
                        open: mobileOpen,
                        onClose: handleDrawerToggle,
                        ModalProps: {
                            keepMounted: true
                        },
                        sx: {
                            display: {
                                xs: "block",
                                sm: "none"
                            },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                borderWidth: 0
                            }
                        },
                        children: drawer
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                        variant: "permanent",
                        anchor: "left",
                        PaperProps: {
                            style: {
                                backgroundColor: "#FFFFFF",
                                // boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.2)',
                                overflow: "hidden"
                            }
                        },
                        sx: {
                            display: {
                                xs: "none",
                                sm: "block"
                            },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                borderWidth: 0
                            }
                        },
                        open: true,
                        children: drawer
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#f2f5f9",
                    margin: 0,
                    padding: 0,
                    borderRadius: 5
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "flex-none transition-all",
                        children: children
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 5044:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jq": () => (/* binding */ onDashboard)
/* harmony export */ });
/* unused harmony exports fetchDashboardSuccess, fetchDashboardFailure */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2894);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// actions/someActions.js


// Action Creators
const fetchDashboardSuccess = (data)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .DASHBOARD_SUCCESS */ .A4,
        payload: data
    });
const fetchDashboardFailure = (error)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .DASHBOARD_FAILURE */ .$q,
        payload: error
    });
// Async Action to Fetch Data
const onDashboard = (wardNo)=>{
    return async (dispatch)=>{
        try {
            const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/survey/report/count?wardId=${wardNo}`, {});
            console.log(response, "dashboard response");
            dispatch(fetchDashboardSuccess(response.data));
        } catch (error) {
            dispatch(fetchDashboardFailure(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ onRationDetails)
/* harmony export */ });
/* unused harmony exports fetchRationDetailSuccess, fetchRationDetailFailure */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2894);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// actions/someActions.js


// Action Creators
const fetchRationDetailSuccess = (data)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .RATION_SUCCESS */ .ak,
        payload: data
    });
const fetchRationDetailFailure = (error)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .RATION_FALIURE */ .gK,
        payload: error
    });
// Async Action to Fetch Data
const onRationDetails = (rationNumber)=>{
    return async (dispatch)=>{
        try {
            let params = {
                rationCardNo: rationNumber
            };
            const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/fetch-ration-details`, {
                params: params
            });
            console.log(response, "Ration response");
            dispatch(fetchRationDetailSuccess(response.data));
        } catch (error) {
            dispatch(fetchRationDetailFailure(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;