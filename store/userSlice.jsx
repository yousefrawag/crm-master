import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userinfo:{
        name:"yousef",
        role:"admin"
    }
}
const user = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        login:(state , action) => {
            const {user} = action.payload
            console.log(user);
        }
    }
})
export const {login} = user.actions
export default user.reducer