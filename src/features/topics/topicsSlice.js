import { createSlice } from '@reduxjs/toolkit';
import { quizzesSlice } from '../quizzes/quizzesSlice';

const initialState = { topics: {} };

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = {...action.payload, quizIds: []};
    },
  },
  extraReducers: {
    [quizzesSlice.actions.addQuiz]: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    }
  }
});

export const topicsObject = (state) => state.topics.topics;
export const { addTopic, addQuizIdsToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;