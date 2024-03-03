import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionChoiceNumber: null,
  luckyChoiceNumber: null,
  question: "",
};

const numberSlice = createSlice({
  name: "numberChoice",
  initialState,
  reducers: {
    userQuestionChoice: (state, action) => {
      state.questionChoiceNumber = action.payload;
    },
    userLuckeyChoice: (state, action) => {
      state.luckyChoiceNumber = action.payload;
    },
    userChoiceQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

export const { userQuestionChoice, userLuckeyChoice, userChoiceQuestion } =
  numberSlice.actions;
export default numberSlice.reducer;
