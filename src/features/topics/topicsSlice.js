import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  initialState: {
    topics: {},
    reducers: {
    addTopic: (state, payload) => {
      const { topic } = action.payload.topic
      state[topic].push(action.payload)
    },
    quizIds: [],
   }
  }
})

export const selectTopics = (state) => state.actions.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
