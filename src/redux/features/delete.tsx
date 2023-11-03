import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteStudent = createAsyncThunk("student/delete", async({id})=>{
    try {
        let response = await axios.delete(`https://6544ff835a0b4b04436d689a.mockapi.io/students/${{id}}`)
        let result = response.data
        return result
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    loading: false,
    deletedStudent: null,
    error: false
}

const deleteStudentSlicer = createSlice({
    name: "student/delete",
    reducers: {},
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(deleteStudent.pending, (state)=>{
            state.loading  = true
        }).addCase(deleteStudent.fulfilled, (state, action)=>{
            state.deletedStudent = action.payload
        }).addCase(deleteStudent.rejected, (state)=>{
            state.error = true
            console.log("@error while deleting")
        })
    }
})

export default deleteStudentSlicer.reducer