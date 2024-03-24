import React, {  } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {setSingleNoteId, setEditId} from '../Redux/Reducer'
import { useDispatch } from 'react-redux';

function Main() {
    const notes = useSelector(state => state.notes)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const clicked = (id)=>{
        navigate('/singlenote');
        dispatch(setSingleNoteId(id))
    }

    const clickedOnEdit = (e, id)=>{
        e.stopPropagation();
        navigate('/edit')
        dispatch(setEditId(id))
    }

    return (
        <>
            {
                notes.map(note => (
                    <div key={note.id} onClick={()=>clicked(note.id)} className='w-4/5 text-[#575757] flex flex-col md:justify-between md:flex-row bg-[#ffffff] h-36 justify-center gap-1 md:items-center lg:h-28 lg:w-1/2   md:h-24 md:w-11/12 mt-5 rounded-2xl'>
                        <div className='mx-4'>
                            <p className='text-2xl font-bold '>{note.title}</p>
                            <p className='text-xl '>{String(note.text).substring(0, 25)} &rarr;</p>
                        </div>
                            <button onClick={(e)=>clickedOnEdit(e, note.id)} className='text-white hover:bg-purple-400 mx-4 text-xl font-[500] bg-purple-500 w-20 h-10 rounded-xl'>EDIT</button>
                    </div>
                ))
            }

        </>
    );
}

export default Main;