import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-type"

const initislState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initislState, {type, payload}) => {
    switch(type){
        case ORDER: const allCharactersFavCopy = [...state.allCharactersFav] 
        return{...state, myFavorites: payload === "A" ? allCharactersFavCopy.sort((a,b) => a.id - b.id) : allCharactersFavCopy.sort((a,b) => b.id - a.id)}
        
        case FILTER: const allCharactersFilter = state.allCharactersFav.filter(character => character.gender == payload)
        return {...state, myFavorites: payload === "AllCharacters" ? [...state.allCharactersFav]  : allCharactersFilter}

        case REMOVE_FAV: return { ...state, myFavorites: payload };
             
        case ADD_FAV: return { ...state, myFavorites: payload, allCharacters: payload };

        default: return{...state}
    }
}

export default reducer;