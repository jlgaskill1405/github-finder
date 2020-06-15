//import React, { Component } from 'react' //Class bassed needs Component
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//class UserItem extends Component {    //Class based component
//const UserItem = (props) => { //Stateless function
const UserItem = ({user: {login, avatar_url, html_url}}) => { //Destructuring the props in the function definition
    
    //render() {  //Only class based component needs a render fuction

        //const {login, avatar_url, html_url} = this.props.user;  //Class based uses 'this'
        //const {login, avatar_url, html_url} = props.user; //Props is passed in as a parameter

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
                <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        );
    //}
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
