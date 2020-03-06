import React from 'react';
import Main from "../main/Main";
import Nav from "../nav/nav";
import Product from "../product/product";
import Orders from "../orders/Orders";
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="container-fluid no-gutters">
            <Router>
                <Nav/>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/product/:id" component={Product}/>
                        <Route path="/orders" component={Orders}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;