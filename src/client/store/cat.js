import axios from 'axios'
import { loadCats } from './cats'

// ACTION TYPES
const SET_CAT = 'SET_CAT'

// INITIAL STATE
const initialState = {}

// ACTION CREATORS
export const loadCat = cat => ({ type: SET_CAT, cat })

// THUNK CREATORS
export const fetchCat = id => async dispatch => {
  console.log('in store - id', id)
  const cat = (await axios.get(`/cats/${id}`)).data
  console.log('in store - cat', cat)
  return dispatch(loadCat(cat))
}

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CAT:
      return action.cat
    default:
      return state
  }
}
