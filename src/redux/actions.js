export const ADD_ORDER = 'ADD_ORDER'
export const AddOrder = (order)=>{
    return ({
    type : ADD_ORDER,
    payload : order
    })
}
export const DELETE_ORDER = 'DELETE_ORDER'
export const deleteOrder = (order)=>{
    return ({
    type : DELETE_ORDER,
    payload : order
    })
}
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const searchProduct = (productTitle)=>{
    return ({
    type : SEARCH_PRODUCT,
    payload : productTitle
    })
}
export const SET_PRODUCT = 'SET_PRODUCT'
export const setProduct = (productId)=>{
    return ({
    type : SET_PRODUCT,
    payload : productId
    })
}