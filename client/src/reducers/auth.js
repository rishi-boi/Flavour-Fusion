const auth = (state = {}, action) => {
    switch (action.type) {
        case 'signup':
            return {...state, ...action.payload}
    
        default:
            return state;
    }
}

export default auth