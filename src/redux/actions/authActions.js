import {WELCOME_MSG, ADD_CATEGORY, 
    ADD_ITEM, REMOVE_ITEM, EDIT_ITEM} from './types';

export const authActions = () => dispatch => {
    dispatch({
        type: WELCOME_MSG,
        payload: "hello world"
    });
};

export const addCategory = (catName) => dispatch => {
    // console.log(catName);
    dispatch({
        type: ADD_CATEGORY,
        payload: catName
    })
}

export const addItem = (catName, itemName) => dispatch => {
    // console.log(catName);
    dispatch({
        type: ADD_ITEM,
        payload: {catName, itemName}
    })
}

export const removeItem = (catName, itemName) => dispatch => {
    // console.log(catName, itemName);
    dispatch({
        type: REMOVE_ITEM,
        payload: {catName, itemName}
    })
}

export const editItem = (catName, itemName, index) => dispatch =>{
    dispatch({
        type: EDIT_ITEM,
        payload: {catName, itemName, index}
    })
}