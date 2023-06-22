import { configureStore } from '@reduxjs/toolkit';
import scrollLocationReducer from './features/navigation/scroll-location';


export default configureStore({
  reducer: {
    scrollLocation: scrollLocationReducer
  }
})
