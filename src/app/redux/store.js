const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './AuthSlice';
import NewProjectSlice from './Project/NewProjectSlice';
import ProjectSlice from './Project/ProjectSlice';
import CommonSlice from './CommonSlice';
import toastSlice from './toastSlice';

export const store = configureStore({
    reducer: {
        userData: userReducer,
        newProject: NewProjectSlice,
        projectData: ProjectSlice,
        commonSlice: CommonSlice,
        toast: toastSlice
    }
})