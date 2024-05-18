import { createSlice } from "@reduxjs/toolkit";

const cartlistSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload);
            alert('Added to Cart')
        },
        deleteFromWishlist:(state,action)=>{
            return  state.filter(item=>item.id!=action.payload)
            
            },
            emptyCart:(state)=>{
                return state=[]
            }

    }
})
export const {addToCart,deleteFromWishlist,emptyCart} = cartlistSlice.actions;
export default cartlistSlice.reducer