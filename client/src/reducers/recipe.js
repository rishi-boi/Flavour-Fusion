const recipe = (state = {}, action) => {
    switch (action.type) {
        case 'get':
            return {state}
    
        default:
            return state;
    }
}

export default recipe