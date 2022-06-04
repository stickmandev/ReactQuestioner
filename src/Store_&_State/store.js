import { configureStore } from '@reduxjs/toolkit';
import numOfQuestionsReducer from '../components/slices/numOfQuestions_Slice';
import currentNumReducer from '../components/slices/currentNum_Slice';
import data_IdReducer from '../components/slices/data_Id_Slice';
import answeredCorrectReducer from '../components/slices/answeredCorrect_Slice';
import answeredFailedReducer from '../components/slices/answeredFailed_Slice';

export const store = configureStore({
  reducer: {
    numOfQuestions:numOfQuestionsReducer,
    currentNum:currentNumReducer,
    data_Id:data_IdReducer,
    answeredCorrect:answeredCorrectReducer,
    answeredFailed:answeredFailedReducer,
  },
});
