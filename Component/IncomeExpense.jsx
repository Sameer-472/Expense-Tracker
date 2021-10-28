import React, { useContext } from 'react';
import Global from './Context/Global';


function IncomeExpense(){
    let green={
        color: 'green' 
    }
    let red = {
        color: 'red'
    }

    const {transition} = useContext(Global);
    const amount = transition.map(transition=> transition.amount);
    console.log(amount)

    const income = amount.filter(item => item>0).reduce( (total , item) => ( total += item) , 0).toFixed(2);
    console.log(income)
    const expense = amount.filter(item => item<0).reduce( (total , item) => ( total += item) , 0 ).toFixed(2);
    // console.log(income);
    console.log(expense);
    return(
        <>
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money-plus' style={green}>+${income}</p>
            </div>
            <div className="line"></div>
            <div>
                <h4>Expense</h4>
                <p id='money-min' className='money-min' style={red}>+${expense}</p>
            </div>
        </div>
        </>
    )
}

export default IncomeExpense;