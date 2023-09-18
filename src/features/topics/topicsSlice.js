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

export const selectTopic = (state) => state.actions.topics;
