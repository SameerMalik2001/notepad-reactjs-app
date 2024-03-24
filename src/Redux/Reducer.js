import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    notes:[],
    singleNoteId : -1,
    EditId:-1
}

export const notePadSlice = createSlice({
    name: 'notepad',
    initialState,
    reducers : {
        setSingleNoteId:(state, action)=>{
            state.singleNoteId = action.payload
            state.EditId = action.payload
        },
        setEditId:(state, action)=>{
            state.EditId = action.payload
        },
        addnote:(state, action)=>{
            const {title, text} = action.payload
            state.notes.push({id:nanoid(), title:title, text:text})
        },
        editNote:(state, action)=>{
            const {id, title, text} = action.payload
            state.notes = state.notes.filter(note=>note.id !== id)
            state.notes.push({id:nanoid(), title:title, text:text})
        },
        noteDelete:(state, action)=>{
            const {id} = action.payload
            state.notes = state.notes.filter(note=>note.id !== id)
        },
    }

})

export const {setSingleNoteId, setEditId, addnote, editNote,noteDelete} = notePadSlice.actions

export default notePadSlice.reducer