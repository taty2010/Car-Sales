export const REMOVE_ITEM = "REMOVE_ITEM"

export function removeItem(remove) {
    console.log('remove', remove)
    return{
        type: REMOVE_ITEM,
        payload: remove
    };
}

export const ADD_ITEM = "ADD_ITEM"

export function addItem(add) {
    console.log('action add', add)
    return{
        type: ADD_ITEM,
        payload: add
    };
}