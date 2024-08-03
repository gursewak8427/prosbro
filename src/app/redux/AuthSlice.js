const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    token: '',
    user: [],
    isloading: false,
    error: '',
    message: '',
    isloggedin: false,
    pageloader: true,
    panelname: null,
}

const Slice = createSlice({
    name: "authuserslice",
    initialState,
    reducers: {
        isloadingAction: (state, action) => {
            state.isloading = action.payload;
        },
        authtoken: (state, action) => {
            localStorage.setItem('authToken', action.payload);
            state.token = action.payload
        }
    }
})

export const { isloadingAction, authtoken } = Slice.actions;
export default Slice.reducer;