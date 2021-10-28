export default (state , action)=>{
    switch (action.type) {
        case 'DELETE_TRANSITION':
            return{
                ...state,
                transition: state.transition.filter(transition => transition.id !== action.payload)
            }
        case 'ADD_TRANSITION':
            return{
                ...state , 
                transition: [action.payload , ...state.transition]
            }
        default:
            return state;
    }
}
