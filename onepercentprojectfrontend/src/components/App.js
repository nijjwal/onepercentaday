import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CustomersPage from '../pages/CustomersPage';
import SearchACustomerPage from '../pages/SearchACustomerPage';
import AddCustomerPage from '../pages/AddCustomerPage';

function App() {

  return (
    <div>
      <Router>
        <nav>
          <ul className="horizontalNavBar">
            <li><i className="fa fa-fw fa-home"></i><Link to="/">Home</Link></li>
            <li><i className="fa fa-fw fa-envelope"></i><Link to="/customer">Customers</Link></li>
            <li><i className="fa fa-fw fa-search"></i><Link to="/search">Search</Link></li>
            <li><i className="fa fa-user-plus"></i><Link to="/addcustomer">Add Customer</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/customer" component={CustomersPage} />
          <Route path="/search" component={SearchACustomerPage} />
          <Route path="/addcustomer" component={AddCustomerPage} />
          <Route path="/" component={HomePage} />
        </Switch>

      </Router>
    </div>

  );

}

export default App;