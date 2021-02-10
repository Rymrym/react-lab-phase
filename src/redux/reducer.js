import {productList, orders, checkedItem} from './states';
import {ADD_ORDER, DELETE_ORDER, SEARCH_PRODUCT, SET_PRODUCT} from './actions'

export let reducerOrders = (state= orders, action)=>{

    switch (action.type)
    {
        case ADD_ORDER :
            break;
            case DELETE_ORDER :
                break;
                default :
                break;
}
return state
}

export let reducerProduct = (state= productList, action)=>{
    switch (action.type){
        case SEARCH_PRODUCT :
            let newList = state.filter(item => item.name.includes(action.payload))
            return newList
    }
    return state
}
export let reducerCheckedProduct = (state= checkedItem, action)=>{
    switch(action.type){
        case SET_PRODUCT :
            let newItem = 0
            newItem = action.payload
            console.log (newItem+"aaaaaaaaaaaaaaaaa")
            return newItem
    }
    return state
}