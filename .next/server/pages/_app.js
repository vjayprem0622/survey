(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
// EXTERNAL MODULE: ./src/network/action_types/index.js
var action_types = __webpack_require__(2085);
;// CONCATENATED MODULE: ./src/network/reducers/login.js
// reducers/someReducer.js

const initialState = {
    data: [],
    error: null
};
const login = (state = initialState, action)=>{
    switch(action.type){
        case action_types/* LOGIN_SUCCESS */.XP:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* LOGIN_FAILURE */._9:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_login = (login);

;// CONCATENATED MODULE: ./src/network/reducers/dashboard.js
// reducers/someReducer.js

const dashboard_initialState = {
    data: [],
    error: null
};
const dashboard = (state = dashboard_initialState, action)=>{
    switch(action.type){
        case action_types/* DASHBOARD_SUCCESS */.A4:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* DASHBOARD_FAILURE */.$q:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_dashboard = (dashboard);

;// CONCATENATED MODULE: ./src/network/reducers/rationDetails.js
// reducers/someReducer.js

const rationDetails_initialState = {
    data: [],
    error: null
};
const rationDetails = (state = rationDetails_initialState, action)=>{
    switch(action.type){
        case action_types/* RATION_SUCCESS */.ak:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* RATION_FALIURE */.gK:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_rationDetails = (rationDetails);

;// CONCATENATED MODULE: ./src/network/reducers/gender.js
// reducers/someReducer.js

const gender_initialState = {
    data: [],
    error: null
};
const gender = (state = gender_initialState, action)=>{
    switch(action.type){
        case action_types/* GENDER_SUCCESS */.Xh:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* GENDER_FALIURE */.$L:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_gender = (gender);

;// CONCATENATED MODULE: ./src/network/reducers/economicCategories.js
// reducers/someReducer.js

const economicCategories_initialState = {
    data: [],
    error: null
};
const economicCategories = (state = economicCategories_initialState, action)=>{
    switch(action.type){
        case action_types/* ECONOMIC_CATEGORIES_SUCCESS */.DE:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* ECONOMIC_CATEGORIES_FALIURE */.Yj:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_economicCategories = (economicCategories);

;// CONCATENATED MODULE: ./src/network/reducers/resident.js
// reducers/someReducer.js

const resident_initialState = {
    data: [],
    error: null
};
const residentList = (state = resident_initialState, action)=>{
    switch(action.type){
        case action_types/* RESIDENTIAL_SUCCESS */.Dk:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* RESIDENTIAL_FALIURE */.eX:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const resident = (residentList);

;// CONCATENATED MODULE: ./src/network/reducers/relations.js
// reducers/someReducer.js

const relations_initialState = {
    data: [],
    error: null
};
const relations = (state = relations_initialState, action)=>{
    switch(action.type){
        case action_types/* RELATION_SUCCESS */.Cj:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* RELATION_FALIURE */.LM:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_relations = (relations);

;// CONCATENATED MODULE: ./src/network/reducers/qualifications.js
// reducers/someReducer.js

const qualifications_initialState = {
    data: [],
    error: null
};
const qualifications = (state = qualifications_initialState, action)=>{
    switch(action.type){
        case action_types/* QUALIFICATION_SUCCESS */.XX:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* QUALIFICATION_FALIURE */.dw:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_qualifications = (qualifications);

;// CONCATENATED MODULE: ./src/network/reducers/occupations.js
// reducers/someReducer.js

const occupations_initialState = {
    data: [],
    error: null
};
const occupations = (state = occupations_initialState, action)=>{
    switch(action.type){
        case action_types/* OCCUPATION_SUCCESS */.y9:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* OCCUPATION_FALIURE */.ul:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_occupations = (occupations);

;// CONCATENATED MODULE: ./src/network/reducers/formData.js
// src/reducers/yourReducer.js

const formData_initialState = {
    value: null
};
const formData = (state = formData_initialState, action)=>{
    switch(action.type){
        case action_types/* SET_VALUE */.WE:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_formData = (formData);

;// CONCATENATED MODULE: ./src/network/reducers/religion.js
// reducers/someReducer.js

const religion_initialState = {
    data: [],
    error: null
};
const religion = (state = religion_initialState, action)=>{
    switch(action.type){
        case action_types/* RELIGION_SUCCESS */.wP:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* RELIGION_FALIURE */.kG:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_religion = (religion);

;// CONCATENATED MODULE: ./src/network/reducers/SocialCategories.js
// reducers/someReducer.js

const SocialCategories_initialState = {
    data: [],
    error: null
};
const social_categories = (state = SocialCategories_initialState, action)=>{
    switch(action.type){
        case action_types/* SOCIAL_CAT_SUCCESS */.cI:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* SOCIAL_CAT_FALIURE */.EP:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const SocialCategories = (social_categories);

;// CONCATENATED MODULE: ./src/network/reducers/district.js
// reducers/someReducer.js

const district_initialState = {
    data: [],
    error: null
};
const district_reducer = (state = district_initialState, action)=>{
    switch(action.type){
        case action_types/* DISTRICT_SUCCESS */.GH:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* DISTRICT_FALIURE */.aG:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const district = (district_reducer);

;// CONCATENATED MODULE: ./src/network/reducers/municipality.js
// reducers/someReducer.js

const municipality_initialState = {
    data: [],
    error: null
};
const municipality_reducer = (state = municipality_initialState, action)=>{
    switch(action.type){
        case action_types/* MUNICIPALITY_SUCCESS */.V8:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* MUNICIPALITY_FALIURE */.gC:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const municipality = (municipality_reducer);

;// CONCATENATED MODULE: ./src/network/reducers/ward.js
// reducers/someReducer.js

const ward_initialState = {
    data: [],
    error: null
};
const ward_reducer = (state = ward_initialState, action)=>{
    switch(action.type){
        case action_types/* WARD_SUCCESS */.wx:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* WARD_FALIURE */.xn:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const ward = (ward_reducer);

;// CONCATENATED MODULE: ./src/network/reducers/familyDetail.js
// src/reducers/yourReducer.js

const familyDetail_initialState = {
    value: null
};
const familyDetail = (state = familyDetail_initialState, action)=>{
    switch(action.type){
        case action_types/* FAMILY_DETAIL_SUCCESS */.Vb:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_familyDetail = (familyDetail);

;// CONCATENATED MODULE: ./src/network/reducers/familiesList.js
// reducers/someReducer.js

const familiesList_initialState = {
    data: [],
    error: null
};
const familiesList = (state = familiesList_initialState, action)=>{
    switch(action.type){
        case action_types/* FAMILIES_LIST_SUCCESS */.xz:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* FAMILIES_LIST_FALIURE */.aD:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_familiesList = (familiesList);

;// CONCATENATED MODULE: ./src/network/reducers/familiesDetailApi.js
// reducers/someReducer.js

const familiesDetailApi_initialState = {
    data: [],
    error: null
};
const familiesDetail = (state = familiesDetailApi_initialState, action)=>{
    switch(action.type){
        case action_types/* FAMILIES_DETAIL_SUCCESS */.gr:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case action_types/* FAMILIES_DETAIL_FALIURE */.Fn:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const familiesDetailApi = (familiesDetail);

;// CONCATENATED MODULE: ./src/network/reducers/index.js
// reducers/index.js



















const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    login: reducers_login,
    dashboard: reducers_dashboard,
    rationDetails: reducers_rationDetails,
    gender: reducers_gender,
    economicCategories: reducers_economicCategories,
    residentList: resident,
    relations: reducers_relations,
    qualifications: reducers_qualifications,
    occupations: reducers_occupations,
    formData: reducers_formData,
    religion: reducers_religion,
    social_categories: SocialCategories,
    district_reducer: district,
    municipality_reducer: municipality,
    ward_reducer: ward,
    familyDetail: reducers_familyDetail,
    familiesList: reducers_familiesList,
    familiesDetailApi: familiesDetailApi
});
/* harmony default export */ const reducers = (rootReducer);

;// CONCATENATED MODULE: ./src/store.js
// store.js

 // Use Redux Thunk for async actions

 // Create a rootReducer
const middleware = [
    (external_redux_thunk_default())
];
const store_initialState = {};
const store = (0,external_redux_namespaceObject.createStore)(reducers, store_initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
/* harmony default export */ const src_store = (store);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./src/components/stepper/Context.tsx + 1 modules
var Context = __webpack_require__(1090);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/x-date-pickers/LocalizationProvider"
const LocalizationProvider_namespaceObject = require("@mui/x-date-pickers/LocalizationProvider");
;// CONCATENATED MODULE: external "@mui/x-date-pickers/AdapterDayjs"
const AdapterDayjs_namespaceObject = require("@mui/x-date-pickers/AdapterDayjs");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/theme/color.js

const withAlphas = (color)=>{
    return {
        ...color,
        alpha4: (0,styles_.alpha)(color.main, 0.04),
        alpha8: (0,styles_.alpha)(color.main, 0.08),
        alpha12: (0,styles_.alpha)(color.main, 0.12),
        alpha30: (0,styles_.alpha)(color.main, 0.30),
        alpha50: (0,styles_.alpha)(color.main, 0.50)
    };
};
const neutral = {
    50: "#F8F9FA",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D2D6DB",
    400: "#9DA4AE",
    500: "#6C737F",
    600: "#4D5761",
    700: "#2F3746",
    800: "#1C2536",
    900: "#111927"
};
const indigo = withAlphas({
    lightest: "#F5F7FF",
    light: "#EBEEFE",
    main: "#074465",
    dark: "#074465",
    darkest: "#312E81",
    contrastText: "#FFFFFF"
});
const success = withAlphas({
    lightest: "#F0FDF9",
    light: "#3FC79A",
    main: "#10B981",
    dark: "#0B815A",
    darkest: "#134E48",
    contrastText: "#FFFFFF"
});
const info = withAlphas({
    lightest: "#ECFDFF",
    light: "#CFF9FE",
    main: "#06AED4",
    dark: "#0E7090",
    darkest: "#164C63",
    contrastText: "#FFFFFF"
});
const warning = withAlphas({
    lightest: "#FFFAEB",
    light: "#FEF0C7",
    main: "#F79009",
    dark: "#B54708",
    darkest: "#7A2E0E",
    contrastText: "#FFFFFF"
});
const error = withAlphas({
    lightest: "#FEF3F2",
    light: "#FEE4E2",
    main: "#F04438",
    dark: "#B42318",
    darkest: "#7A271A",
    contrastText: "#FFFFFF"
});

;// CONCATENATED MODULE: ./src/theme/create-palette.js



function createPalette() {
    return {
        action: {
            active: neutral[500],
            disabled: (0,styles_.alpha)(neutral[900], 0.38),
            disabledBackground: (0,styles_.alpha)(neutral[900], 0.12),
            focus: (0,styles_.alpha)(neutral[900], 0.16),
            hover: (0,styles_.alpha)(neutral[900], 0.04),
            selected: (0,styles_.alpha)(neutral[900], 0.12)
        },
        background: {
            default: colors_namespaceObject.common.white,
            paper: colors_namespaceObject.common.white
        },
        divider: "#F2F4F7",
        error: error,
        info: info,
        mode: "light",
        neutral: neutral,
        primary: indigo,
        success: success,
        text: {
            primary: neutral[900],
            secondary: neutral[500],
            disabled: (0,styles_.alpha)(neutral[900], 0.38)
        },
        warning: warning
    };
}

;// CONCATENATED MODULE: ./src/theme/create-components.js

// Used only to create transitions
const muiTheme = (0,material_.createTheme)();
function createComponents(config) {
    const { palette  } = config;
    return {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    textTransform: "none"
                },
                sizeSmall: {
                    padding: "6px 16px"
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    [`&.${material_.paperClasses.elevation1}`]: {
                        boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)"
                    }
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "32px 24px",
                    "&:last-child": {
                        paddingBottom: "32px"
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2"
                }
            },
            styleOverrides: {
                root: {
                    padding: "32px 24px 16px"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                body: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                "#__next": {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    backgroundColor: palette.primary.main,
                    height: 3,
                    left: 0,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 2000
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        opacity: 1
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px",
                    "&::placeholder": {
                        color: palette.text.secondary
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    borderRadius: 8,
                    borderStyle: "solid",
                    borderWidth: 1,
                    overflow: "hidden",
                    borderColor: palette.neutral[200],
                    transition: muiTheme.transitions.create([
                        "border-color",
                        "box-shadow"
                    ]),
                    "&:hover": {
                        backgroundColor: palette.action.hover
                    },
                    "&:before": {
                        display: "none"
                    },
                    "&:after": {
                        display: "none"
                    },
                    [`&.${material_.filledInputClasses.disabled}`]: {
                        backgroundColor: "transparent"
                    },
                    [`&.${material_.filledInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        borderColor: palette.primary.main,
                        boxShadow: `${palette.primary.main} 0 0 0 0.5px`
                    },
                    [`&.${material_.filledInputClasses.error}`]: {
                        borderColor: palette.error.main,
                        boxShadow: `${palette.error.main} 0 0 0 2px`
                    }
                },
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px"
                }
            }
        },
        // MuiOutlinedInput: {
        //     styleOverrides: {
        //         root: {
        //             '&:hover': {
        //                 backgroundColor: palette.action.hover,
        //                 [`& .${outlinedInputClasses.notchedOutline}`]: {
        //                     borderColor: palette.neutral[200]
        //                 }
        //             },
        //             [`&.${outlinedInputClasses.focused}`]: {
        //                 backgroundColor: 'transparent',
        //                 [`& .${outlinedInputClasses.notchedOutline}`]: {
        //                     borderColor: palette.primary.main,
        //                     boxShadow: `${palette.primary.main} 0 0 0 2px`
        //                 }
        //             },
        //             [`&.${filledInputClasses.error}`]: {
        //                 [`& .${outlinedInputClasses.notchedOutline}`]: {
        //                     borderColor: palette.error.main,
        //                     boxShadow: `${palette.error.main} 0 0 0 2px`
        //                 }
        //             }
        //         },
        //         input: {
        //             fontSize: 14,
        //             fontWeight: 500,
        //             lineHeight: '24px',
        //         },
        //         notchedOutline: {
        //             borderColor: palette.neutral[200],
        //             transition: muiTheme.transitions.create([
        //                 'border-color',
        //                 'box-shadow'
        //             ])
        //         }
        //     }
        // },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    [`&.${material_.inputLabelClasses.filled}`]: {
                        transform: "translate(12px, 18px) scale(1)"
                    },
                    [`&.${material_.inputLabelClasses.shrink}`]: {
                        [`&.${material_.inputLabelClasses.standard}`]: {
                            transform: "translate(0, -1.5px) scale(0.85)"
                        },
                        [`&.${material_.inputLabelClasses.filled}`]: {
                            transform: "translate(12px, 6px) scale(0.85)"
                        },
                        [`&.${material_.inputLabelClasses.outlined}`]: {
                            transform: "translate(14px, -9px) scale(0.85)"
                        }
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: "auto",
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: "none",
                    "& + &": {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: palette.divider,
                    padding: "15px 16px"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: "none",
                    [`& .${material_.tableCellClasses.root}`]: {
                        borderBottom: "none",
                        backgroundColor: palette.neutral[50],
                        color: palette.neutral[700],
                        fontSize: 12,
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: "uppercase"
                    },
                    [`& .${material_.tableCellClasses.paddingCheckbox}`]: {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled"
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/create-shadows.js
const createShadows = ()=>{
    return [
        "none",
        "0px 1px 2px rgba(0, 0, 0, 0.08)",
        "0px 1px 5px rgba(0, 0, 0, 0.08)",
        "0px 1px 8px rgba(0, 0, 0, 0.08)",
        "0px 1px 10px rgba(0, 0, 0, 0.08)",
        "0px 1px 14px rgba(0, 0, 0, 0.08)",
        "0px 1px 18px rgba(0, 0, 0, 0.08)",
        "0px 2px 16px rgba(0, 0, 0, 0.08)",
        "0px 3px 14px rgba(0, 0, 0, 0.08)",
        "0px 3px 16px rgba(0, 0, 0, 0.08)",
        "0px 4px 18px rgba(0, 0, 0, 0.08)",
        "0px 4px 20px rgba(0, 0, 0, 0.08)",
        "0px 5px 22px rgba(0, 0, 0, 0.08)",
        "0px 5px 24px rgba(0, 0, 0, 0.08)",
        "0px 5px 26px rgba(0, 0, 0, 0.08)",
        "0px 6px 28px rgba(0, 0, 0, 0.08)",
        "0px 6px 30px rgba(0, 0, 0, 0.08)",
        "0px 6px 32px rgba(0, 0, 0, 0.08)",
        "0px 7px 34px rgba(0, 0, 0, 0.08)",
        "0px 7px 36px rgba(0, 0, 0, 0.08)",
        "0px 8px 38px rgba(0, 0, 0, 0.08)",
        "0px 8px 40px rgba(0, 0, 0, 0.08)",
        "0px 8px 42px rgba(0, 0, 0, 0.08)",
        "0px 9px 44px rgba(0, 0, 0, 0.08)",
        "0px 9px 46px rgba(0, 0, 0, 0.08)"
    ];
};

;// CONCATENATED MODULE: ./src/theme/create-typography.js
const createTypography = ()=>{
    return {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.57
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 500,
            lineHeight: 1.66
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            lineHeight: 2.5,
            textTransform: "uppercase"
        },
        h1: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.2
        },
        h2: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.2
        },
        h3: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 1.2
        },
        h4: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.2
        },
        h5: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: 1.2
        },
        h6: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            lineHeight: 1.2
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/index.js





function createTheme() {
    const palette = createPalette();
    const components = createComponents({
        palette
    });
    const shadows = createShadows();
    const typography = createTypography();
    return (0,material_.createTheme)({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1440
            }
        },
        components,
        palette,
        shadows,
        shape: {
            borderRadius: 8
        },
        typography
    });
}

;// CONCATENATED MODULE: external "react-router-dom"
const external_react_router_dom_namespaceObject = require("react-router-dom");
;// CONCATENATED MODULE: ./src/pages/_app.js



// import "tailwindcss/tailwind.css";










// import { Rubik } from '@next/font/google'
// const inter = Rubik({ subsets: ['latin'] })
function App(props) {
    const { Component , pageProps  } = props;
    const getLayout = Component.getLayout ?? ((page)=>page);
    const theme = createTheme();
    (0,external_react_.useEffect)(()=>{
    // const getAllMaster = async () => {
    //   const callAPi = await fetch('/api/hello');
    //   const res = await callAPi.json();
    //   console.log(res);
    // }
    // getAllMaster();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(LocalizationProvider_namespaceObject.LocalizationProvider, {
        dateAdapter: AdapterDayjs_namespaceObject.AdapterDayjs,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                    store: src_store,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Context/* StepsProvider */.m, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [85,90], () => (__webpack_exec__(7213)));
module.exports = __webpack_exports__;

})();