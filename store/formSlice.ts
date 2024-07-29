import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  submissions: Array<{
    title: string;
    firstName: string;
    lastName: string;
    birthDay: string;
    nationality: string;
    citizenId: string;
    gender: string;
    mobileNumber: string;
    passportNumber: string;
    expectedSalary: string;
  }>;
}

const initialState: FormState = {
  submissions: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addSubmission(
      state,
      action: PayloadAction<{
        title: string;
        firstName: string;
        lastName: string;
        birthDay: string;
        nationality: string;
        citizenId: string;
        gender: string;
        mobileNumber: string;
        passportNumber: string;
        expectedSalary: string;
      }>
    ) {
      state.submissions.push(action.payload);
    },
    clearSubmissions(state) {
      state.submissions = [];
    },
  },
});

export const { addSubmission, clearSubmissions } = formSlice.actions;

export default formSlice.reducer;
