import axiosInstance from "../AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    project: {},
    projectlist: [],
    error: '',
    totalprojects: 0
}

// Utility function to process error and convert to string
const processError = (error) => {
    if (!error) {
        return 'Unknown error occurred.';
    }

    if (typeof error === 'string') {
        // Remove double quotes from the string
        return error.replace(/"/g, '');
    }

    if (error instanceof Array) {
        // If it's an array, check if it's an array of objects
        if (error.length > 0 && typeof error[0] === 'object') {
            // If it's an array of objects, convert each object to a string and remove double quotes
            return error.map((obj) => JSON.stringify(obj).replace(/"/g, '')).join(', ');
        }
        // If it's a regular array, join the items into a string and remove double quotes
        return error.join(', ').replace(/"/g, '');
    }

    if (error instanceof Object) {
        // If it's an object, convert it to string and remove double quotes
        return JSON.stringify(error).replace(/"/g, '');
    }

    return 'Error processing request.';
};

export const Fetchprojects = createAsyncThunk("Fetchprojects", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchprojects?query=${data}`);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});
export const TotalProjects = createAsyncThunk("TotalProjects", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/totalprojects/`);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

const Slice = createSlice({
    name: "projectslice",
    initialState,
    reducers: {
        isloadingAction: (state, action) => {
            state.isloading = action.payload;
        },
        projectAction: (state, action) => {
            state.project = action.payload
        }
    },
    // extra reducer for api calss
    extraReducers: (builder) => {
        builder.addCase(Fetchprojects.fulfilled, (state, action) => {
            state.projectlist = action.payload
        })
        builder.addCase(Fetchprojects.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(TotalProjects.fulfilled, (state, action) => {
            state.totalprojects = action.payload
        })
        builder.addCase(TotalProjects.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})


export const { isloadingAction, projectAction } = Slice.actions;
export default Slice.reducer;