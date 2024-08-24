import axiosInstance from "./AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    token: '',
    profile: [],
    isloading: false,
    error: '',
    message: '',
}

export const FetchProfile = createAsyncThunk("FetchProfile", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchprofile/`)
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});


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
        },
        profileAction: (state, action) => {
            state.profile = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchProfile.fulfilled, (state, action) => {
            state.profile = action.payload
        })
        builder.addCase(FetchProfile.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export const { isloadingAction, authtoken, profileAction } = Slice.actions;
export default Slice.reducer;