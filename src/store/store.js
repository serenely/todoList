import { configureStore, createSlice } from '@reduxjs/toolkit'

const ACTIVITIES = [
  { id: 1, text: 'Make a video in which you need to open your mouth to music', active: false },
  { id: 2, text: 'Take a bag and go to the gym', active: true },
  { id: 3, text: 'Do some exercises at home', active: false },
]

const addListSlice = createSlice({
  name: 'todo',
  initialState: ACTIVITIES,
  reducers: {
    removeItem(state, action) {
      return state.filter(activity => activity.id !== action.payload)
    },
    toggleActive(state, action) {
      const index = state.findIndex(activity => activity.id === parseInt(action.payload));
      if (index !== -1) {
        state[index].active = !state[index].active;
      }
    }
  },
})

const store = configureStore({
  reducer: addListSlice.reducer
})

export const activityGetState = addListSlice.getInitialState();
export const activityActions = addListSlice.actions


export default store;