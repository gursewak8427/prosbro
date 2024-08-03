const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    formone: {}
}

const Slice = createSlice({
    name: "newprojectslice",
    initialState,
    reducers: {
        isloadingAction: (state, action) => {
            state.isloading = action.payload;
        },
        formoneAction: (state, action) => {
            state.formone = action.payload
        }
    }
})

export const { isloadingAction, formoneAction } = Slice.actions;
export default Slice.reducer;