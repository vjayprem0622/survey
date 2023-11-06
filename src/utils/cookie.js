import Cookies from 'js-cookie';

// Save the token in localStorage
export const saveToken = (data) => {
    console.log(data, 'save token')
    Cookies.set('userName', JSON.stringify(data.userName)); // expires in 1 days
    Cookies.set('authToken', JSON.stringify(data));
    Cookies.set('ulb', JSON.stringify(data.ulb)); // expires in 1 days


    // Cookies.set('authToken', token, { expires: 1 }); // Set the token to expire in 7 days, adjust as needed
};

// Retrieve the token from localStorage
export const getToken = () => {
    return Cookies.get('authToken');
};

export const getUserName = () => {
    return Cookies.get('userName');
};


export const getUlb = () => {
    return Cookies.get('ulb');
};

// Remove the token from localStorage
export const removeToken = () => {

    // Cookies.set('userName', null, { expires: 1 }); // expires in 1 days
    // Cookies.set('authToken', null, { expires: 1 });
    // Cookies.set('ulb', null, { expires: 1 }); // expires in 1 days


    Cookies.remove('authToken');
    Cookies.remove('userName');
    Cookies.remove('ulb');

    // Cookies.remove('authToken', { path: '' })
    // Cookies.remove('userName', { path: '' })
    // Cookies.remove('ulb', { path: '' })


    const cookies = Cookies.get(); // Get all cookies

    for (const cookie in cookies) {
        console.log(cookies, "asldnjkqjiwk")
        if (cookies.hasOwnProperty(cookie)) {
            Cookies.remove(cookie); // Remove each cookie
        }
    }


};