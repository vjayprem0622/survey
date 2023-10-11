import Cookies from 'js-cookie';

// Save the token in localStorage
export const saveToken = (token) => {
    console.log(token, 'save token')
    Cookies.set('authToken', token, { expires: 1 }); // expires in 1 days


    // Cookies.set('authToken', token, { expires: 1 }); // Set the token to expire in 7 days, adjust as needed
};

// Retrieve the token from localStorage
export const getToken = () => {
    return Cookies.get('authToken');
};

// Remove the token from localStorage
export const removeToken = () => {
    Cookies.remove('authToken');
};