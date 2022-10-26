import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
name:"form",
initialState:{
    member:{
    name: '',
    surname: '',
    email: '',
    phonenumber:"",
    gender:"",
    city:"",
    }
 },
reducers:{
    newMember: (state,action)=>{
        return {...state,member:action.payload}       
}
}
});

export const {newMember} = formSlice.actions;
export default formSlice.reducer;
