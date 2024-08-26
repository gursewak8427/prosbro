import axiosInstance from "./AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    token: '',
    profile: [],
    isloading: false,
    error: '',
    message: '',
    busniessprofile: {},
    projectprofile: {},
    defaultquotetaxes: []
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

export const FetchBusniessProfile = createAsyncThunk("FetchBusniessProfile", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchbusniessprofile/`)
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const FetchProjectProfile = createAsyncThunk("FetchProjectProfile", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchprojectprofile/`)
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const FetchDefQuotetaxes = createAsyncThunk("FetchDefQuotetaxes", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchdefaultquotetaxes/`)
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
        builder.addCase(FetchBusniessProfile.fulfilled, (state, action) => {
            state.busniessprofile = action.payload
        })
        builder.addCase(FetchBusniessProfile.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(FetchProjectProfile.fulfilled, (state, action) => {
            state.projectprofile = action.payload
        })
        builder.addCase(FetchProjectProfile.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(FetchDefQuotetaxes.fulfilled, (state, action) => {
            state.defaultquotetaxes = action.payload
        })
        builder.addCase(FetchDefQuotetaxes.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export const { isloadingAction, authtoken, profileAction } = Slice.actions;
export default Slice.reducer;