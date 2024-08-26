import axiosInstance from "../AxiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    project: {},
    projectlist: [],
    error: '',
    message: '',
    totalprojects: 0,
    clientquote: {},
    singleproject: {},
    quoteslist: [],
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

export const FetchClientQuote = createAsyncThunk("FetchClientQuote", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/createquoteforproject/?slug=${data}`);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const DeleteClientQuoteTask = createAsyncThunk("DeleteClientQuoteTask", async ({ id, slug }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/createquotetask/?slug=${slug}&id=${id}`);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const UpdateClientQuoteTask = createAsyncThunk("UpdateClientQuoteTask", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.put(`${process.env.NEXT_PUBLIC_API_URL}/createquotetask/`, data);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const DeleteSubTask = createAsyncThunk("DeleteSubTask", async ({ id, slug }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/createsubtask/?slug=${slug}&id=${id}`);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const CreateSubTask = createAsyncThunk("CreateSubTask", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/createsubtask/`, data);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const PatchSubTask = createAsyncThunk("PatchSubTask", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.patch(`${process.env.NEXT_PUBLIC_API_URL}/createsubtask/`, data);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const UpdateSubTask = createAsyncThunk("UpdateSubTask", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.put(`${process.env.NEXT_PUBLIC_API_URL}/createsubtask/`, data);
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const FetchSingleProject = createAsyncThunk("FetchSingleProject", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchproject/${data}`)
        return response.data;
    } catch (error) {
        const processederror = processError(error.response?.data || error.message)
        return rejectWithValue(processederror);
    }
});

export const FetchQuotes = createAsyncThunk("FetchQuotes", async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchquotes/?slug=${data}`)
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
        },
        clientQuoteAction: (state, action) => {
            state.clientquote = action.payload
        },
        quoteslistAction: (state, action) => {
            state.quoteslist = action.payload
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
        builder.addCase(FetchClientQuote.fulfilled, (state, action) => {
            state.clientquote = action.payload
        })
        builder.addCase(FetchClientQuote.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(DeleteClientQuoteTask.fulfilled, (state, action) => {
            state.clientquote = action.payload
        })
        builder.addCase(DeleteClientQuoteTask.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(UpdateClientQuoteTask.fulfilled, (state, action) => {
            state.message = action.payload
        })
        builder.addCase(UpdateClientQuoteTask.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(DeleteSubTask.fulfilled, (state, action) => {
            state.clientquote = action.payload
        })
        builder.addCase(DeleteSubTask.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(CreateSubTask.fulfilled, (state, action) => {
            state.clientquote = action.payload
        })
        builder.addCase(CreateSubTask.rejected, (state, action) => {
            state.error = action.payload
        })
        // builder.addCase(UpdateSubTask.fulfilled, (state, action) => {
        //     state.clientquote = action.payload
        // })
        // builder.addCase(UpdateSubTask.rejected, (state, action) => {
        //     state.error = action.payload
        // })
        builder.addCase(PatchSubTask.fulfilled, (state, action) => {
            state.clientquote = action.payload
        })
        builder.addCase(PatchSubTask.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(FetchSingleProject.fulfilled, (state, action) => {
            state.singleproject = action.payload
        })
        builder.addCase(FetchSingleProject.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(FetchQuotes.fulfilled, (state, action) => {
            state.quoteslist = action.payload
        })
        builder.addCase(FetchQuotes.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})


export const { isloadingAction, projectAction, clientQuoteAction,quoteslistAction } = Slice.actions;
export default Slice.reducer;