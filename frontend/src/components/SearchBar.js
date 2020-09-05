import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './SearchBar.css'
import BookTable from './BookTable.js'
import FormControl from 'react-bootstrap/esm/FormControl'

class SearchBar extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
     }

    render(){
        function handleClick(e) {
            e.preventDefault();
            this.props.BookTable.onShowChange();
        }
        return (
            <div>
                <div>
                    <text>Search books</text>
                </div>
                <div className='row' >
                    <Form>
                        <FormControl placeholder="Search" />
                    </Form>
                    <Button variant='primary' onClick={handleClick}>Go</Button>
                </div>
            </div>
        )
    }
}

export default SearchBar