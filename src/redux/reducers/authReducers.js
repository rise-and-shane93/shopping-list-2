import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {ADD_CATEGORY, ADD_ITEM, REMOVE_ITEM, WELCOME_MSG, EDIT_ITEM, REMOVE_CATEGORY} from '../actions/types';

const initialState = {
    message: "",
    // categories: ["Food"]
    categories: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case WELCOME_MSG:
            return {
                ...state,
                message: action.payload
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, {categoryName: action.payload, items: []}]
            }
        case ADD_ITEM:
            let updatedListAdd = state.categories.map((el,i) => {
                if (el.categoryName === action.payload.catName) {
                    return {
                        categoryName: action.payload.catName, 
                        items: [...state.categories[i].items, action.payload.itemName]
                    }
                } else {
                    return {
                        categoryName: el.categoryName,
                        items: [...state.categories[i].items]
                    }
                }
            });
            // console.log(updatedListAdd);
            return{
                ...state,
                categories: updatedListAdd
            }
        case EDIT_ITEM:
            let updatedItemName = action.payload.itemName;
            let categoryName = action.payload.catName;
            let index = action.payload.index;
            console.log(`Updated item's name is ${updatedItemName}, corresponding category is ${categoryName}, and index is ${index}`);
            let updatedList = state.categories.map((el, i) => {
                if (el.categoryName === categoryName) {
                    return {
                        categoryName,
                        items: state.categories[i].items.map((el,i) => {
                            if (i === index) {
                                return updatedItemName;
                            } else {
                                return el;
                            }
                        })
                    }
                } else {
                    return {
                        categoryName: el.categoryName,
                        items: state.categories[i].items
                    }
                }
            });
            console.log(updatedList);
            return {
                ...state,
                categories: updatedList
            }
        case REMOVE_ITEM:
            let updatedListRemove = state.categories.map((el,i) => {
                if (el.categoryName === action.payload.catName) {
                    let updatedItems = el.items.filter((item,index) => {
                        return item !== action.payload.itemName;
                    });
                    return {
                        categoryName: action.payload.catName, 
                        items: [...updatedItems]
                    }
                } else {
                    return {
                        categoryName: el.categoryName,
                        items: [...state.categories[i].items]
                    }
                }
            });
            return {
                ...state,
                categories: updatedListRemove
            }
        case REMOVE_CATEGORY:
            let updatedListRemoveCategory = state.categories.filter((el,i) => {
                if (i !== action.payload.index) {
                    return el;
                }
            })
            console.log(updatedListRemoveCategory);
            return {
                ...state,
                categories: updatedListRemoveCategory
            }
        default:
            return state;
    }
}