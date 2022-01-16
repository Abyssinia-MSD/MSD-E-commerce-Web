import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cardRedux";
import productReducer from "./productRedux"


export default configureStore({
  reducer: {
      cart: cartReducer,
      products: productReducer
  },
 
});
