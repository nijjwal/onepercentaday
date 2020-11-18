import CustomerCard from '../components/CustomerCard';
import React, { useState } from 'react';
import Axios from 'axios';

function SearchACustomer() {

    const [uid, setUserId] = useState('');
    const [lName, setLName] = useState('');
    const [result, setResult] = useState({});

    function handleTxtChange(event) {
        if (event.target.name === 'uId') {
            setUserId(event.target.value);
        }

        if (event.target.name === 'lName') {
            setLName(event.target.value);
        }
    }

    function handleBtnClick() {
        let newQryString = 'http://localhost:8080/customer?uid=' + uid + '&lName=' + lName;
        console.log(newQryString);


        Axios.get(newQryString)
            .then(
                (response) => {
                    console.log(response.data);
                    setResult(response.data);
                }
            );

    }

    return (
        <div>

            <CustomerCard
                userId={result.id}
                firstName={result.firstName}
                lastName={result.lastName}
                userName={result.userName}
                email={result.email}
                password={result.password}
            />

            Enter User Id: <input type="text" name="uId" onChange={handleTxtChange} value={uid}></input>
            Enter Last Name: <input type="text" name="lName" onChange={handleTxtChange} value={lName}></input>
            <button onClick={handleBtnClick} type="submit">Display Data</button>
        </div>
    );
}

export default SearchACustomer;