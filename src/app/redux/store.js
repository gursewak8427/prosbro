const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './AuthSlice';
import NewProjectSlice from './Project/NewProjectSlice';
import ProjectSlice from './Project/ProjectSlice';

export const store = configureStore({
    reducer: {
        userData: userReducer,
        newProject: NewProjectSlice,
        projectData:ProjectSlice
    }
})