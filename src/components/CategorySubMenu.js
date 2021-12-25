import React, { Component } from 'react';

import { connect } from "react-redux";
import { authActions, addItem } from '../redux/actions/authActions';

class CategorySubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            // isButtonPressed: false
        };
    }

    render() {
        const {display} = this.props;
        return (
            <div className={display ? "category-submenu display-flex flex-column" : "category-submenu display-none flex-column"}>
                <p>Hello</p><br/>
                <p>Hello</p><br/>
                <p>Hello</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        message: state.auth.message,
        categories: state.auth.categories
    }
}

export default connect(
    mapStateToProps,
    {
        authActions,
        addItem
    }
)(CategorySubMenu);