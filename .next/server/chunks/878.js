"use strict";
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 7385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/himachal_bg.91f53b89.jpeg","height":762,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqgG//8QAGhAAAgIDAAAAAAAAAAAAAAAAAhIABAFBkf/aAAgBAQABPwA7tnIAhgLbQW7P/8QAGREAAgMBAAAAAAAAAAAAAAAAAgMAARMh/9oACAECAQE/AN3FXWFP/8QAGhEAAgIDAAAAAAAAAAAAAAAAAgMAAREikf/aAAgBAwEBPwAVLrOg8n//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 6052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sx": () => (/* binding */ onLogin)
/* harmony export */ });
/* unused harmony exports fetchLoginSuccess, fetchLoginFailure */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2894);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// actions/someActions.js


// Action Creators
const fetchLoginSuccess = (data)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOGIN_SUCCESS */ .XP,
        payload: data
    });
const fetchLoginFailure = (error)=>({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOGIN_FAILURE */ ._9,
        payload: error
    });
// Async Action to Fetch Data
const onLogin = (username, password)=>{
    return async (dispatch)=>{
        try {
            console.log("jsoasd");
            const response = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/login", {
                username: username,
                password: password
            });
            dispatch(fetchLoginSuccess(response.data));
        } catch (error) {
            dispatch(fetchLoginFailure(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var _network_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2894);
/* harmony import */ var _network_actions_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6052);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_network_api__WEBPACK_IMPORTED_MODULE_0__, _network_actions_login__WEBPACK_IMPORTED_MODULE_1__]);
([_network_api__WEBPACK_IMPORTED_MODULE_0__, _network_actions_login__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// export default async function handler(req, res) {
//     try {
//         // Make an API request here and retrieve the data
//         const param1 = 'value1';
//         const param2 = 'value2';
//         console.log(param1, param2, "sdajndiwqdnjkad")
//         axiosInstance.post("/api/fetchData?param1=${param1}&param2=${param2}")
//             .then((response) => console.log(response))
//             .catch((error) => console.log(error));
//         // res.status(200).json({ data });
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching data' });
//     }
// }


async function handler(req, res) {
    try {
        console.log("asnkjdasjdkqwd");
        // const data = useDispatch(onLogin()); // Call your Axios API function
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching data"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(399);
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _network_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2894);
/* harmony import */ var _assets_BackgroundLogin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7242);
/* harmony import */ var _assets_svg_himachal_logoo_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6489);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _network_actions_login__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6052);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(662);
/* harmony import */ var _pages_api_signIn__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_network_api__WEBPACK_IMPORTED_MODULE_17__, _network_actions_login__WEBPACK_IMPORTED_MODULE_22__, _utils_cookie__WEBPACK_IMPORTED_MODULE_24__, _pages_api_signIn__WEBPACK_IMPORTED_MODULE_25__]);
([_network_api__WEBPACK_IMPORTED_MODULE_17__, _network_actions_login__WEBPACK_IMPORTED_MODULE_22__, _utils_cookie__WEBPACK_IMPORTED_MODULE_24__, _pages_api_signIn__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";






















// import { useDispatch, useSelector } from 'react-redux';



// import handler from './api/hello';

const img = __webpack_require__(7385);
const styling = {
    backgroundImage: `url('${img}')`,
    width: "100%",
    height: "100%"
};
function Copyright(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
        variant: "body2",
        color: "primary",
        align: "center",
        ...props,
        children: [
            "\xa9",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default()), {
                color: "inherit",
                href: "www.google.com",
                children: "2023 Department of Digital Technology and Governance"
            }),
            "",
            "."
        ]
    });
}
// TODO remove, this demo shouldn't need to reset the theme.
function SignIn(props) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_23__.useDispatch)();
    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_23__.useSelector)((state)=>state.login);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_21__.useRouter)();
    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { data: user_data  } = data || {};
        const { token  } = user_data || {};
        // console.log(JSON.stringify(user_data.data), "asdhiqwuoldkjjfeiqud")
        if (user_data.data) {
            (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_24__/* .saveToken */ .Fr)(JSON.stringify(user_data.data));
            router.push("/dashboard");
        }
    }, [
        data
    ]);
    const handlePost = ()=>{
        const param1 = "value1";
        const param2 = "value2";
        // router.push('/dashboard')
        // fetch(`/api/auth/signIn/`)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data, "asjkdmaskdnkjndakd")
        //     // Handle the API response here
        //   })
        //   .catch((error) => {
        //     console.log(error, "asjkdmaskdnkjndakd")
        //     // Handle errors
        //   });
        console.log("asldaskmdalkdalfeiow");
        dispatch((0,_network_actions_login__WEBPACK_IMPORTED_MODULE_22__/* .onLogin */ .Sx)("Khaliyar", 1234));
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password")
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "background",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            container: true,
            spacing: 0,
            direction: "column",
            alignItems: "center",
            justifyContent: "center",
            sx: {
                minHeight: "100vh"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_16___default()), {
                elevation: 15,
                style: {
                    margin: 20,
                    padding: 10,
                    borderRadius: 10
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default()), {
                    component: "main",
                    maxWidth: "xs",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {
                            sx: {
                                marginTop: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    src: _assets_svg_himachal_logoo_svg__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
                                    width: 100,
                                    height: 100,
                                    alt: "Logo"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    align: "center",
                                    color: "inherit",
                                    sx: {
                                        fontSize: "18px",
                                        lineHeight: "28px",
                                        mb: 1
                                    },
                                    variant: "h3",
                                    children: [
                                        "Welcome to",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            sx: {
                                                color: "#6366F1"
                                            },
                                            target: "_blank",
                                            children: "Himachal Parivar Register (Urban)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    sx: {
                                        fontSize: "14px",
                                        lineHeight: "28px",
                                        mb: 1
                                    },
                                    children: "Please Sign In to Continue"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    component: "form",
                                    onSubmit: handleSubmit,
                                    noValidate: true,
                                    sx: {
                                        mt: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            margin: "normal",
                                            required: true,
                                            fullWidth: true,
                                            id: "email",
                                            label: "Email Address",
                                            name: "email",
                                            autoComplete: "email",
                                            autoFocus: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            margin: "normal",
                                            required: true,
                                            fullWidth: true,
                                            name: "password",
                                            label: "Password",
                                            type: "password",
                                            id: "password",
                                            autoComplete: "current-password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                value: "remember",
                                                color: "primary"
                                            }),
                                            label: "Remember me"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            type: "submit",
                                            fullWidth: true,
                                            variant: "contained",
                                            onClick: ()=>{
                                                handlePost();
                                            },
                                            children: "Sign In"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Copyright, {
                            sx: {
                                mt: 8,
                                mb: 4
                            }
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;