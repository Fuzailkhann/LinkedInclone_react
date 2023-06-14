import linkedinReducer from "../redux/linkedinSlice"


import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    linreducer :   linkedinReducer , 
  },
 
})

export default store;