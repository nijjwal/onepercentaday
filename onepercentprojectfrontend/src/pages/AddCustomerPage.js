import CreateCustomerService from '../services/CreateCustomerService';


function CustomersPage(){
    return (
        <div>
           Add a customer!
           <CreateCustomerService/>
        </div>
    );

}

export default CustomersPage;