import config from '../constants/config.json';

export const getRecipe =(id) => async (dispatch) => {
    fetch(`${config.host}recipes/${id}/information?apiKey=${config.api}`)
    .then(data => data.json())
    .then(data => {
        dispatch({
            type: 'recipe',
            payload: data
        })
    })
    .catch(err => {
        dispatch({
            type: 'err',
            payload: 'err'
        })
    })

    
}

export const clear =() => async (dispatch) => {

    dispatch({
        type: 'clear',
        payload: null
    })
    
}