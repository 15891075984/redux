
export const createStore = (reducer) => {
    let currentState = {
        count: 0
    }
    let observers =[]
    const getState = () => {
        return currentState
    }
    const dispatch = (action) => {
        currentState = reducer(currentState, action)
        observers.forEach(fn => fn())
    }
    dispatch({ type: '@@REDUX_INIT' })
    const subscribe = (fn) => {
        observers.push(fn)
    }

    


    return { getState, dispatch, subscribe }
}