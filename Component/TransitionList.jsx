import React , {useContext}from 'react'
import Global from './Context/Global'
import { Transition } from './Transition'

export const TransitionList = () => {
    const {transition} = useContext(Global)
    return (
        <div className='trasnitionList'>
            <ul className='list' id='list'>
             {transition.map(func1=>(
             <Transition key={func1.id} func1={func1}/>
             ))}       
            </ul>
        </div>
    )
}
