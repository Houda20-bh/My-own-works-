import axios from 'axios'
import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
export const register = createAsyncThunk('user/register',async({formValue,toast,navigate},
     {rejectWithValue,getState})=>{
        try{
            const {data} = await axios.post ('http://localhost:5000/users/register',formValue)
            toast.success('You have registed successfully')
            navigate('/user/login')
            return data;
        }
        catch(error){
            rejectWithValue(error?.response?.data)
        }
     })
     export const login = createAsyncThunk(
        "user/login",
        async ({ formValue, navigate, toast }, { rejectWithValue }) => {
          try {
            const { data } = await axios.post(
              "http://localhost:5000/users/login",
              formValue
            );
            localStorage.setItem("userInfos", JSON.stringify(data));
            toast.success("Logged Successfully");
            navigate("/");
            return data;
          } catch (error) {
            return rejectWithValue(error?.response?.data);
          }
        }
      );
        export const logOut= createAsyncThunk('user/logout', async({navigate},{rejectWithValue})=>{
            try{
                await localStorage.removeItem('userInfos')
                navigate('/user/login')
              
            }
            catch(error)
            {
                return rejectWithValue(error?.response?.data)
            }
        })
        const userStored = localStorage.getItem('userInfos')?JSON.parse(localStorage.getItem('userInfos')): null;
     const UserSlice = createSlice({
        name:'user',
        initialState:{
             userLoggedIn:userStored,
        },
        extraReducers:{
            [register.pending]:(state,action)=>{
                state.loading= true;
                state.appErr= undefined;
                state.serverErr= undefined;
            },
            [register.fulfilled]:(state,action)=>{
                state.newUser= action?.payload;
                state.appErr= undefined;
                state.serverErr= undefined;
            },
            [register.rejected]:(state,action)=>{
                state.loading= false;
                state.appErr= action?.payload?.message;
                state.serverErr= action?.error?.message;
            },
            //////login
            [login.pending]: (state, action) => {
                state.loading = true;
                state.appErr = undefined;
                state.serverErr = undefined;
              },
              [login.fulfilled]: (state, action) => {
                state.loading = false;
                state.userLogged = action?.payload;
                window.location.reload();
                state.appErr = undefined;
                state.serverErr = undefined;
              },
              [login.rejected]: (state, action) => {
                state.loading = false;
                state.appErr = action?.payload?.message;
                state.serverErr = action?.error?.message;
              },
            /// logout
            [logOut.pending]:(state,action)=>{
                state.loading= true;
            },
            [logOut.fulfilled]:(state,action)=>{
                state.loading=false;
                state.userLogged= null;
                window.location.reload();
                state.appErr= undefined;
                state.serverErr= undefined;
            },
            [logOut.rejected]:(state,action)=>{
                state.loading= false;
                state.appErr= action?.payload?.message;
                state.serverErr= action?.error?.message;
            },
        }

     });
     export default UserSlice.reducer