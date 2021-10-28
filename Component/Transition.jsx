import React , {useContext} from 'react'
import Global from './Context/Global';


export const Transition = ({func1}) => {     // func1 is the prop which is coming from the map function in transition list
    const sign = func1.amount < 0 ? '-': '+'; 

    const {deleteTransition} = useContext(Global);
    console.log(deleteTransition)  


    // console.log(sign)
    return (
        <li className= {sign === '-' ? 'minus': 'plus'}> {func1.text}
            <span className='amount'>{sign}${Math.abs(func1.amount)}</span>
            <button className="delete-btn" onClick={ ()=> deleteTransition(func1.id)}>X</button>
        </li>
    )
}
