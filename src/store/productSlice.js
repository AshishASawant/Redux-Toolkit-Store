import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {
    // setProduct: (state, action) => {
    //   state.data = action.payload;
    // },
    // setStatus: (state, action) => {
    //   state.status = action.payload;
    // },
  },
  extraReducers:(builder)=>{
    builder
        .addCase(fetchData.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status='idle'
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status='error'
        })
  }
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;


//Thunks 

//new way , less code , hard to understand

export const fetchData =createAsyncThunk('data/fetch',async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    let json = await res.json();
    return json
})


// old way , lot of code , easy to understand

// export const fetchData = () => {
//   return async function fetchDataThunk(dispatch, getState){
//     try {
//         dispatch(setStatus("loading"));
//         const res = await fetch("https://fakestoreapi.com/products");
//         let json = await res.json();
//         console.log(json)
//         dispatch(setProduct(json));
//         dispatch(setStatus("idle"));
//     } catch (err) {
//         console.log(err)
//         dispatch(setStatus('error'))
//     }
//   };
// };
