import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CustomersPage from '../pages/CustomersPage';
import SearchACustomerPage from '../pages/SearchACustomerPage';

function App() {

  return (
    <div>
      <Router>
        <nav>
          <ul className="horizontalNavBar">
            <li><i className="fa fa-fw fa-home"></i><Link to="/">Home</Link></li>
            <li><i className="fa fa-fw fa-envelope"></i><Link to="/customer">Customers</Link></li>
            <li><i className="fa fa-fw fa-search"></i><Link to="/search">Search</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/customer" component={CustomersPage}/>
          <Route path="/search" component={SearchACustomerPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>

      </Router>
    </div>

  );

}

export default App;