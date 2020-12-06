import Axios from 'axios';
import React, { useState } from 'react';

function DeleteCustomerService() {
    const [messageBox, setMessageForCreateAction] = useState('');

    const [formData, setUserInfo] = useState({
        userName: ''
    });

    function handleTxtChange(event) {
        const { name, value } = event.target;

        setUserInfo(prevValue => {
            if (name === 'userName') {
                return {
                    userName: value
                }
            }

        });

    }

    function handleBtnData() {
        //console.log(formData.firstName + formData.lastName + formData.userName + formData.email + formData.password);
        console.log(formData);

        let url = 'http://localhost:8080/customers/' + formData.userName;

        Axios.delete(url, formData)
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

            </ul>

            <button type="submit" onClick={handleBtnData}>Delete Customer</button>

        </div>
    );
}

export default DeleteCustomerService;