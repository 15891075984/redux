let initState = {
    count : 0
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'add':
           
            return {
                ...state,
                count : state.count + 1
            }
    
        default:
            return initState
    }
}