import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import {noteDelete} from '../Redux/Reducer'


function SingleNote() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes)
    const id = useSelector(state => state.singleNoteId)
    const note = notes.filter(note => note.id === id)
    const Edit = () => {
        navigate('/edit')
    }
    useEffect(() => {
        if(id === -1) {
            navigate('/')
        }
    }, [id]);
    
    const sendForDelete = () =>{
        dispatch(noteDelete({id}))
        navigate('/')
    }
    return (
        <>
            {id !== -1 &&
                <div className='rounded-3xl w-3/5 mt-5 bg-[#ffffff]'>
                    <p className='text-xl font-[500] mt-8 ml-8 mr-8 text-justify'><b>Title :</b> {note[0].title}</p>
                    <div className='bg-purple-500 h-[1px] w-auto ml-8 mr-8' />
                    <p className='text-xl font-[500] mt-4 ml-8 mr-8 text-justify mb-8'><b>Description:</b> <span dangerouslySetInnerHTML={{__html:note[0].text.replace(/\n/g, '<br>')}} /> </p>
                    <div className='flex justify-center gap-3'>
                        <button onClick={() => Edit()} className='w-28 h-11 text-white rounded-2xl bg-purple-500 text-xl mb-5 font-[500] hover:bg-purple-400'>EDIT</button>
                        <button onClick={() => sendForDelete()} className='w-28 h-11 text-white rounded-2xl bg-purple-500 text-xl mb-5 font-[500] hover:bg-purple-400'>DELETE</button>
                    </div>
                </div>
            }
        </>
    );
}

export default SingleNote;
