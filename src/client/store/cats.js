import axios from 'axios'

// ACTION TYPES
const SET_CATS = 'SET_CATS'

// INITIAL STATE
// what would be a good initial state?
// :thinking:
const initialState = []

// ACTION CREATORS
export const loadCats = cats => ({ type: SET_CATS, cats })

// THUNK CREATORS
export const fetchCats = () => async dispatch => {
  const cats = (await axios.get('/cats')).data
  return dispatch(loadCats(cats))
}

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CATS:
      return action.cats
    default:
      return state
  }
}
