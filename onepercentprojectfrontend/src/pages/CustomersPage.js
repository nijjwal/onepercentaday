import react from 'react';
import GetAllCustomerService from '../services/GetAllCustomerService';

function CustomersPage(){
    return (
        <div>
           <GetAllCustomerService/>
        </div>
    );

}

export default CustomersPage;