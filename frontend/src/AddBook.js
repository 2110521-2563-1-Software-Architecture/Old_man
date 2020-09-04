import React, { Component } from 'react'
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
                    <Button>Add</Button>
                </div>
            </div>
        )
    }
}

export default AddBook