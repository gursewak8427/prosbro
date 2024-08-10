const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    quoteStepperFormIndex: 0,
    sidebarStatus: true,
}

const Slice = createSlice({
    name: "commonSlice",
    initialState,
    reducers: {
        setQuoteStepperFormIndex: (state, action) => {
            state.quoteStepperFormIndex = action.payload;
        },
        nextQuoteStepperFormIndex: (state, action) => {
            state.quoteStepperFormIndex = state.quoteStepperFormIndex + 1;
        },
        backQuoteStepperFormIndex: (state, action) => {
            state.quoteStepperFormIndex = state.quoteStepperFormIndex - 1;
        },
        setSidebarStatus: (state, action) => {
            state.sidebarStatus = action.payload
        }
    }
})

export const { setQuoteStepperFormIndex, setSidebarStatus, nextQuoteStepperFormIndex, backQuoteStepperFormIndex } = Slice.actions;
export default Slice.reducer;