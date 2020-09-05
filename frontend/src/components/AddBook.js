import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import AddBookPage from '../AddBookPage'
import Button from 'react-bootstrap/Button'

class AddBook extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
     }

    render(){
        return (
            <div>
                <div>
                    <text>Add a book</text>
                </div>
                <div>
                    <Link to="/AddBookPage">
                        <Button>Add</Button>
                    </Link>
                    <Route path="/AddBookPage" component={AddBookPage}/>
                </div>
            </div>
        )
    }
}

export default AddBook