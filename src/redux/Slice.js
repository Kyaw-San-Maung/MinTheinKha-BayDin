import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionChoiceNumber: null,
  luckyChoiceNumber: null,
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
  },
});

export const { userQuestionChoice, userLuckeyChoice } = numberSlice.actions;
export default numberSlice.reducer;
