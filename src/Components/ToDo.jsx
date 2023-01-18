import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { add } from '../Redux/actions/action'
import { useDispatch } from 'react-redux';
import Todocomp from './Todocomp';


const ToDo = () => {

    const [data, setData] = useState('')
    const dispatch = useDispatch()

    const clickHandler = () => {
        if (!data == '') {
            dispatch(add(data))
            setData('')
        } else {
            alert(`Hey...Please Some Enter Task📑📑`)
        }

    }

    return (
        <>
            <section className='h-[300vh] mybg flex justify-start py-16 flex-col space-y-4'>

                <h2 className='text-center text-4xl w-auto font-Poppins font-bold pb-4'>Enter Your Tasks</h2>

                <div className='justify-center flex space-x-4'>

                    <input type="text" className='py-2 px-4 font-Poppins rounded-xl border-2 border-slate-600 w-[30.5rem] text-lg shadow-2xl shadow-slate-200' name="" value={data} onChange={(e) => setData(e.target.value)} id="" placeholder='Enter Your Task' />

                    <button onClick={clickHandler} className='text-white hover:bg-green-600 delay-100  bg-slate-700 px-3 rounded-xl py-1'><AddIcon style={{ fontSize: '2.8rem' }} /></button>
                </div>

                <Todocomp />

            </section>
        </>
    )
}

export default ToDo