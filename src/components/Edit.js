import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { editNote, noteDelete } from '../Redux/Reducer'

function Edit() {
    const notes = useSelector(state => state.notes)
    const id = useSelector(state => state.EditId)
    const note = notes.filter(note => note.id === id)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {
        if (id === -1) {
            navigate('/')
        } else {
            setText(note[0].text)
            setTitle(note[0].title)
        }
    }, [id]);

    const sendToReducer = () => {
        if (text.length !== 0 && title.length !== 0) {
            dispatch(editNote({ id, title, text }))
            navigate('/')
        }
    }
    const sendForDelete = () => {
        dispatch(noteDelete({ id }))
        navigate('/')
    }

    const discard = () => {
        navigate('/')
    }

    return (
        <>
            {
                id !== -1 &&
                <div className='w-full h-full flex flex-col items-center md:w-4/5 md:h-5/6' >
                    <p className='text-[40px] text-red-600 font-bold mt-8'>EDIT YOUR NOTES</p>
                    <input onChange={(e) => setTitle(e.target.value)} defaultValue={note[0].title} className='w-full text-purple-600 mt-10 rounded-2xl overflow-hidden px-2 text-2xl h-12 outline-none border-t-transparent border-l-transparent border-r-transparent border-[3px] border-red-500 bg-white md:w-4/5' type="text" placeholder='Title' />
                    <textarea onChange={(e) => setText(e.target.value)} defaultValue={note[0].text} className='rounded-2xl px-2 py-1 text-purple-600 outline-none text-2xl w-full mt-4 h-3/5 border-2 md:w-4/5' cols="30" rows="10" placeholder='Write...'></textarea>
                    <div className='flex gap-8'>
                        <button onClick={() => [sendToReducer()]} className='border-none bg-white font-semibold w-24 h-11 rounded-2xl mt-3 hover:bg-blue-200 text-xl'>SAVE</button>
                        <button onClick={() => [discard()]} className='border-none bg-white font-semibold w-24 h-11 rounded-2xl mt-3 hover:bg-blue-200 text-xl'>DISCARD</button>
                        <button onClick={() => [sendForDelete()]} className='border-none bg-white font-semibold w-24 h-11 rounded-2xl mt-3 hover:bg-blue-200 text-xl'>DELETE</button>
                    </div>
                </div>
            }
        </>
    );
}

export default Edit;
