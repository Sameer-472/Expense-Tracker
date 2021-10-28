import React  from 'react';
import Global from './Context/Global';
import { useContext } from 'react';
function Balance(){

    const {transition} = useContext(Global);

    const amount = transition.map(transition => transition.amount);
    console.log(amount)

    const total = amount.reduce((totalAmount , item) => (totalAmount +=item) , 0).toFixed(2)
    console.log(total);
    return(
        <>
        <h3 className="heading">Your Balance</h3>
        <h1 id='balance'>${total}</h1>
        </>
    )
}

export default Balance