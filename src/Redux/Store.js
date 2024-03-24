import {configureStore} from '@reduxjs/toolkit'
import notePadSlice from './Reducer'


export const store = configureStore({
    reducer:notePadSlice
})
