import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Redux/actions/action'

const Todocomp = () => {

    const [show, setShow] = useState(false)

    const { User_Data } = useSelector((state) => state.todoreducers)
    const dispatch = useDispatch()

    // Deleting the To Do with handler
    const deleteHandler = (id) => {
        dispatch(remove(id))
        window.setTimeout(() => {
            setShow(true)
        }, 200)
        window.setTimeout(() => {
            setShow(false)
        }, 2500)

    }

    let myCount = 1

    return (
        <>
            {/* <div className='text-center font-Poppins text-xl py-1 px-3 text-black'>{show && <h1>Item Deleted Successfully...!!!</h1>}</div> */}
            {show && <div class="bg-green-300 border flex justify-center  border-slate-800 px-4 py-3 rounded relative" role="alert">
                <p class="font-bold text-black font-Poppins text-lg"> Task Has Been Removed Successfully....</p>

            </div>}

            <div className='flex justify-center items-center py-6 flex-col space-y-7'>

                {
                    User_Data.map((elem, key) => {
                        return (
                            <>

                                <div className='w-[35.9rem] shadow-xl shadow-pink-300 py-3 rounded-2xl border-2 border-slate-700 flex justify-between px-10' key={key} >

                                    <div>

                                        <h2 id='todotext' className='text-2xl flex items-center gap-2 font-Poppins '>{myCount++}.<AssignmentIcon style={{ fontSize: '2.3rem', cursor: 'pointer' }} />{elem}
                                        </h2></div>
                                    <div className='flex space-x-4'>
                                        <button onClick={() => deleteHandler(key)}>
                                            <DeleteIcon className='text-red-500' style={{ fontSize: '1.9rem', cursor: 'pointer' }} />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Todocomp