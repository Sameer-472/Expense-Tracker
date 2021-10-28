import React ,  {createContext , useReducer} from 'react';  
import AppReducer from './AppReducer';
// import data from './interfaces'

//intial state

// console.log(data)

const InitalState = {
    transition: [
        // {id: 1 , text: "flower" , amount: 200} , 
        // {id: 2 , text: "flower" , amount: -4} ,
        // {id: 3 , text: "flower" , amount: 500} ,
        // {id: 3 , text: "flower" , amount: -50} ,
        // {id: 4 , text: "flower" , amount: 100} ,
    ]
}

// console.log(InitalState.transition); // this printing an array

// create conetxt
// provider
// consumer

// createcontext
const Global = createContext(InitalState)
 // this returning  an object of context

// provider component

export const GlobalProvider = ({children})=> {
    const [state, dispatch] = useReducer(AppReducer, InitalState)

    //Delete action

    function deleteTransition(id){
        dispatch({
            type: 'DELETE_TRANSITION',
            payload: id
        })
    }

    const addTransition = (transition) => {
         dispatch({
             type: 'ADD_TRANSITION',
             payload: transition
         })
    }

    return(
        <>
        <Global.Provider value={{
            transition: state.transition,
            deleteTransition , 
            addTransition 
            }
            }>
            {children}
        </Global.Provider>
        </>
    )

}

export default Global 