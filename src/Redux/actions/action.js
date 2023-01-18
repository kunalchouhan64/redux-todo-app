export const add = (items) => {
    return {
        type: 'ADD_DATA',
        payload: items
    }
}

//Removing Item Action 
export const remove = (id) => {
    return {
        type: 'REMOVE_DATA',
        payload: id
    }
}


