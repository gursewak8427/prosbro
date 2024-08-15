import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const toastSlice = createSlice({
    name: 'toast',
    initialState: {},
    reducers: {
        showToastPromise: (state, action) => {
            const { promise, messages } = action.payload;
            const toastId = toast.promise(
                promise,
                {
                    pending: messages.pending || 'Processing...',
                    success: messages.success || 'Success!',
                    error: messages.error || 'Something went wrong!',
                }
            );
            return { ...state, toastId };
        },
        updateToast: (state, action) => {
            const { toastId, options } = action.payload;
            toast.update(toastId, options);
        }
    }
});

export const { showToastPromise, updateToast } = toastSlice.actions;
export default toastSlice.reducer;
