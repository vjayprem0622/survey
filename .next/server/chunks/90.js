"use strict";
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 1090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ AppContext),
  "m": () => (/* binding */ StepsProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/stepper/initialValues.ts
const initialValues = {
    headOfFamily: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    bonafide: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    economicLevel: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    religion: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    category: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    resident: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    district: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    municipality: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    ward: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    },
    address: {
        value: "",
        error: "",
        required: true,
        validate: "text",
        minLength: 2,
        maxLength: 20,
        helperText: "Custom error message"
    }
};

;// CONCATENATED MODULE: ./src/components/stepper/Context.tsx



const isText = /^[A-Z ]+$/i;
const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isPhone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/; // us
const isZip = /^[0-9]{5}([- /]?[0-9]{4})?$/; // us
const isNumber = /^\d+$/;
const variant = "outlined";
const margin = "normal";
const AppContext = /*#__PURE__*/ (0,external_react_.createContext)({
    activeStep: 0,
    formValues: initialValues,
    handleChange () {},
    handleNext () {},
    handleBack () {},
    variant,
    margin
});
function reducer(state, action) {
    switch(action.type){
        case "increase":
            return {
                ...state,
                activeStep: state.activeStep + 1
            };
        case "decrease":
            return {
                ...state,
                activeStep: state.activeStep - 1
            };
        case "form-value":
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    [action.name]: {
                        ...state.formValues[action.name],
                        value: action.fieldValue
                    }
                }
            };
        case "form-error":
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    [action.name]: {
                        ...state.formValues[action.name],
                        error: action.error
                    }
                }
            };
        default:
            return state;
    }
}
function StepsProvider({ children  }) {
    const [{ activeStep , formValues  }, dispatch] = (0,external_react_.useReducer)(reducer, {
        activeStep: 0,
        formValues: initialValues
    });
    // Proceed to next step
    const handleNext = (0,external_react_.useCallback)(()=>dispatch({
            type: "increase"
        }), []);
    // Go back to prev step
    const handleBack = (0,external_react_.useCallback)(()=>dispatch({
            type: "decrease"
        }), []);
    // Handle form change
    const handleChange = (0,external_react_.useCallback)((event, checked)=>{
        console.log(event, checked, "Asdjknasdjnsandkasd");
        const { type , name , value  } = event.target;
        const fieldValue = type === "checkbox" ? checked : value;
        dispatch({
            type: "form-value",
            name,
            fieldValue
        });
        const fieldName = initialValues[name];
        if (!fieldName) return;
        const { required , validate , minLength , maxLength , helperText  } = fieldName;
        let error = "";
        if (required && !fieldValue) error = "This field is required";
        if (minLength && value && value.length < minLength) error = `Minimum ${minLength} characters is required.`;
        if (maxLength && value && value.length > maxLength) error = "Maximum length exceeded!";
        if (validate) {
            switch(validate){
                case "text":
                    if (value && !isText.test(value)) error = helperText || "This field accepts text only.";
                    break;
                case "number":
                    if (value && !isNumber.test(value)) error = helperText || "This field accepts numbers only.";
                    break;
                case "email":
                    if (value && !isEmail.test(value)) error = helperText || "Please enter a valid email address.";
                    break;
                case "phone":
                    if (value && !isPhone.test(value)) error = helperText || "Please enter a valid phone number. i.e: xxx-xxx-xxxx";
                    break;
                case "zip":
                    if (value && !isZip.test(value)) error = helperText || "Please enter a valid zip code.";
                    break;
                case "checkbox":
                    if (!checked) error = helperText || "Please provide a valid value.";
                    break;
                case "select":
                    if (!value) error = helperText || "Please select a value.";
                    break;
                default:
                    break;
            }
        }
        dispatch({
            type: "form-error",
            name,
            error
        });
    }, []);
    const constextValue = (0,external_react_.useMemo)(()=>({
            activeStep,
            formValues,
            handleChange,
            handleNext,
            handleBack,
            variant,
            margin
        }), [
        activeStep,
        formValues,
        handleChange,
        handleNext,
        handleBack
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: constextValue,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mui-step-form",
            children: children
        })
    });
}


/***/ })

};
;