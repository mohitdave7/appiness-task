import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
class PrivteRoute extends Component {
    render() {
        const {component:Component,...rest}=this.props;
        const token=localStorage.getItem('token')
        return (
            <Route
            {...rest}
            render={(props)=>
                token?
                (<Component {...props}/>)
                :
                (<Redirect to={{pathname:"/"}}/>)
            }/>
                
        );
    }
}

export default PrivteRoute;
// const PrivateRouteComponent = (props) => (
//     <Route {...props.routeProps} render={() => (
//     props.logged_in ? (
//         <div>{props.children}</div>
//         ) : (
//         <Redirect to={{
//             pathname: '/login',
//             state: { from: props.location }
//         }} /> )
//     )} />
// );