import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addnote } from '../Redux/Reducer';
import { useNavigate } from 'react-router';

function Add () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const navigateToHome = ()=>{
        navigate('/')
    }
    const sendToReducer = ()=>{
        if(text.length !== 0 && title.length !== 0) {
            dispatch(addnote({title, text}))
            navigateToHome()
        }
    }
    return (
        <div className='w-full h-full flex flex-col items-center md:w-4/5 md:h-5/6'>
            <p className='text-[40px] text-white font-bold mt-8'>ADD YOUR NOTES</p>
            <input onChange={(e)=>setTitle(e.target.value)} className='w-full mt-10 text-purple-600 rounded-2xl px-2 text-2xl h-12 outline-none border-t-transparent border-l-transparent border-r-transparent border-[3px bg-white md:w-4/5' type="text" placeholder='Title' />
            <textarea onChange={(e)=>setText(e.target.value)} className='rounded-2xl text-purple-600 px-2 py-1 outline-none text-2xl w-full mt-4 h-3/5 border-2 md:w-4/5' cols="30" rows="10" placeholder='Write...'></textarea>
            <div className='flex gap-8'>
                <button onClick={()=>[sendToReducer()]} className='border-none bg-white font-semibold w-24 h-11 rounded-2xl mt-3 hover:bg-blue-200 text-xl'>ADD</button>
                <button className='border-none bg-white font-semibold w-24 h-11 rounded-2xl mt-3 hover:bg-blue-200 text-xl'>DISCARD</button>
            </div>
        </div>
    );
}

export default Add;