import React, { useContext } from 'react'
import { useState } from 'react'
import Global from './Context/Global'

export const AddTransition = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('');

    // const {transition} = useContext(Global)

    const { addTransition } = useContext(Global)

    const onSubmit = e => {
        e.preventDefault()
        
        const newTransition = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount
        }
        if (text.length  > 0){
        addTransition(newTransition)
        }
        else{
            window.alert("Text area can't by empty")
        }
        // console.log(AddTransition)
    }

    return (
        <div>
            <h2 className="addTitle">Add New Trasnition</h2><hr />
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label><br />
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text.." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative-expense , positive-income)</label> <br />
                    <input type="number" id="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount.." />
                <button className='btn' >Add Transaction</button>
                </div>
            </form>
        </div>
    )
}
