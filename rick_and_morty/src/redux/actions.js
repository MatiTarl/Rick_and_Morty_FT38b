import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions-type";

export const  addFav = (charachter) => {
    return{
        type: ADD_FAV, 
        payload: charachter
    }
}

export const  removeFav = (id) => {
    return{
        type: REMOVE_FAV, 
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type:FILTER, payload: gender
    }
}

export const orderCards = (order) => {
    return{
        type: ORDER, payload: order
    }
}