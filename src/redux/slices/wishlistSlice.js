import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState:[],
    reducers:{
        //action define
        //Add  to wishlist - array of data added to wishlist component
        addToWishList:(state,action)=>{
            state.push(action.payload);
            alert('Added to wishlist')
        },
        deleteFromWishlist:(state,action)=>{
        return  state.filter(item=>item.id!=action.payload)
        
        }

    }
})
export const {addToWishList,deleteFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer