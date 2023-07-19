const recipe = (state = {}, action) => {
    switch (action.type) {
        case 'recipe':
            return {...state, ...action.payload}
        case 'clear':
            return {}
        case 'err':
            return action.payload
    
        default:
            return state;
    }
}

export default recipe