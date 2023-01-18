
const initialState = {
    User_Data: []
}

export const todoreducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                User_Data: [...state.User_Data, action.payload]
            }

        case 'REMOVE_DATA':

            const deletedata = state.User_Data.filter((element, key) => key !== action.payload)

            return {
                ...state,
                User_Data: deletedata
            }

        default:
            return state
    }
}