
import { createSlice } from "@reduxjs/toolkit";






const productSlice = createSlice(
    {
        name: 'products',
        initialState: {
            allProducts: [],
        },
        reducers: {
            fetchProducts : (state, action)=>{
                state.allProducts = action.payload

            }
        }

    }
)
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;