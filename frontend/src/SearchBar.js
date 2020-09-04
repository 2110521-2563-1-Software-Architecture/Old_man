import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
     }

    render(){
        return (
            <div>
                <div>
                    <text>Search books</text>
                </div>
                <div>
                    <input placeholder='Search'></input>
                    <Button>Go</Button>
                </div>
            </div>
        )
    }
}

export default SearchBar