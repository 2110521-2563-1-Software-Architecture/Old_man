import React, { Component } from 'react'
import { Link, BrowserRouter, Route } from "react-router-dom";
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
                    <BrowserRouter>
                    <Link to="/AddBookPage">
                        <Button type="button">Add</Button>
                    </Link>
                    <Route path="/AddBookPage" component={AddBookPage}/>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default AddBook