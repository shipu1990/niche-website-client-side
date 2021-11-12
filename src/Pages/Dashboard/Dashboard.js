import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import shopBanner from '../../Images/slider-3.jpg';
import AddReview from './AddReview/AddReview';
import AddWatch from './AddWatch/AddWatch';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrder from './ManageOrder/ManageOrder';
import MyOrder from './MyOrder/MyOrder';

const Dashboard = () => {
    const commonBanner = {
        width: "100%",
        height: "300px",
        color: "#000",
        paddingTop: "100px",
        backgroundImage: `url(${shopBanner})`
    }
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div  style={commonBanner}>
                <div className="container">
                    <div className="row">
                        <h1 className="text-light">Dashboard</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <nav class="col-sm-3 col-md-4 d-none d-sm-block bg-light sidebar">
                        <ul class="nav nav-pills flex-column">
                            <Link to={`${url}/myOrder`}>My Order</Link>
                            <Link to={`${url}/addReview`}>Add Review</Link> 
                            {admin && <>
                                <Link  to={`${url}/makeAdmin`}>Make Admin</Link>
                                <Link to={`${url}/manageOrder`}>Manage Order</Link>
                                <Link to={`${url}/addWatch`}>Add Watch</Link>
                            </>}
                            
                        </ul>
                    </nav>
                    <div className="col-sm-9 col-md-8">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/manageOrder`}>
                            <ManageOrder></ManageOrder>
                        </Route>
                        <Route path={`${path}/addWatch`}>
                            <AddWatch></AddWatch>
                        </Route>
                        <Route path={`${path}/addReview`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                    </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;