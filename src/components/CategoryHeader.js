import React, { Component } from 'react';

import { connect } from "react-redux";
import { authActions, addItem, removeCategory } from '../redux/actions/authActions';
import CategorySubMenu from './CategorySubMenu';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isButtonPressed: false
        };
    }

    openCategoryMenu = () => {
        // if (!this.state.isButtonPressed) {
        //     this.setState({isButtonPressed: true});
        // } else {
        //     this.setState({isButtonPressed: false});
        // }

        this.setState({isButtonPressed: !this.state.isButtonPressed});
    }

    render() {
        const {name, index, removeCategory} = this.props;
        return (
            <div className="category-header">
                <h2>{name}</h2>
                <button className="list-item-button" aria-label="delete" onClick={() => removeCategory(name, index)}><strong>&times;</strong></button>
                {/* <button onClick={() => (this.openCategoryMenu())} 
                className={this.state.isButtonPressed ? "button-pressed" : ""}><strong>&#8942;</strong></button> */}
                {/* <CategorySubMenu display={this.state.isButtonPressed} /> */}
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
        addItem,
        removeCategory
    }
)(Category);