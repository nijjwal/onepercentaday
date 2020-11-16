import React from 'react';
import CustomerCard from '../components/CustomerCard';


class CustomerService extends React.Component {

    //1. Constructor
    constructor(props) {
        super();

        //2. Initialize state
        this.state = {
            list: []
        };

    }

    /**
     * OPAD-1: This is a second lifecycle method which will be called 
     * after the component has been rendered for the first time. 
     */
    componentDidMount() {
        console.log("Make REST API call to get all customers info after the compontent has mounted");

        /* 4. After the component has been rendered for the first time, make REST API call to get all 
        customers and store the array of object in the state variable. */
        fetch('http://localhost:8080/customers')
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState(
                    {
                        list: data
                    }
                );
            });
    }

    CreateCustomerCard(item, i) {
        return (<CustomerCard
            key={i}
            userId={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            userName={item.userName}
            email={item.email}
            password={item.password}
        />);
    }

    //3. Render the div with an empty array at the beginning
    render() {
        return (
            <div>
                {this.state.list.map((item, i) => {
                    return this.CreateCustomerCard(item, i);
                }
                )}
            </div>
        );
    }

}

export default CustomerService;