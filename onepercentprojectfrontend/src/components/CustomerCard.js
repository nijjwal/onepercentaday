import React from 'react';


function CustomerCard(props){
    return(
        <div>
            <p>User Id: {props.userId} </p>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>User Name: {props.userName}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <hr/>
        </div>
    );

}

export default CustomerCard;