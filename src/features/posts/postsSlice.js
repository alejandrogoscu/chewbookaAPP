import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "./postsService";

const initialState = {
    posts : [],
    post: {},
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
    try {
        const res = await postService.getAll()
        return res;
    } catch (error) {
        console.error('Erros al sacar los posts', error);
        return [];
    }
});


export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
                .addCase(getAll.fulfilled, (state, action) => {
                    console.log('Payload que llega:', action.payload);
                    state.posts = Array.isArray(action.payload)
                    ? action.payload   
                    : Object.values(action.payload) || [];
                    // state.posts = action.payload || [];
                })
    },

});


export default postSlice.reducer;