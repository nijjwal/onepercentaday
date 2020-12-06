import Axios from 'axios';
import React, { useState } from 'react';

function UpdateCustomerService() {
    const [messageBox, setMessageForCreateAction] = useState('');

    const [formData, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    });

    function handleTxtChange(event) {
        const { name, value } = event.target;

        setUserInfo(prevValue => {
            if (name === 'firstName') {
                return {
                    firstName: value,
                    lastName: prevValue.lastName,
                    userName: prevValue.userName,
                    email: prevValue.email,
                    password: prevValue.password
                }
            } else if (name === 'lastName') {
                return {
                    firstName: prevValue.firstName,
                    lastName: value,
                    userName: prevValue.userName,
                    email: prevValue.email,
                    password: prevValue.password
                }
            } else if (name === 'userName') {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    userName: value,
                    email: prevValue.email,
                    password: prevValue.password
                }
            } else if (name === 'email') {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    userName: prevValue.userName,
                    email: value,
                    password: prevValue.password
                }
            } else if (name === 'password') {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    userName: prevValue.userName,
                    email: prevValue.email,
                    password: value
                }
            }

        });

    }

    function handleBtnData() {
        //console.log(formData.firstName + formData.lastName + formData.userName + formData.email + formData.password);
        console.log(formData);

        let url = 'http://localhost:8080/customers/' + formData.userName;

        Axios.put(url, formData)
            .then(
                (response) => {
                    console.log(response.data);
                    setMessageForCreateAction(response.data);
                }
            );

    }

    return (
        <div>

            <div>{messageBox}</div>

            <ul className="wrapper">
                <li className="form-row">
                    <label htmlFor="userName">User Name:</label>
                    <input type="text" onChange={handleTxtChange} name="userName" id="userName" size="20" placeholder='Please enter your existing user name.' value={formData.userName} />
                </li>


                <li className="form-row">
                    <label htmlFor="firstName">New First Name:</label>
                    <input type="text" onChange={handleTxtChange} name="firstName" id="firstName" size="20" placeholder='Please enter your updated first name.' value={formData.firstName} />
                </li>

                <li className="form-row">
                    <label htmlFor="lastName">New Last Name:</label>
                    <input type="text" onChange={handleTxtChange} name="lastName" id="lastName" size="20" placeholder='Please enter your updated last name.' value={formData.lastName} />
                </li>



                <li className="form-row">
                    <label htmlFor="email">New Email:</label>
                    <input type="text" onChange={handleTxtChange} name="email" id="email" size="20" placeholder='Please enter your updated email.' value={formData.email} />
                </li>

                <li className="form-row">
                    <label htmlFor="password">New Password:</label>
                    <input type="text" onChange={handleTxtChange} name="password" id="password" size="20" placeholder='Please enter your updated password.' value={formData.password} />
                </li>


            </ul>

            <button type="submit" onClick={handleBtnData}>Add Customer</button>

        </div>
    );
}


export default UpdateCustomerService;