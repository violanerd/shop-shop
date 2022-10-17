import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// createContext creates container to hold global state data
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useProductReducer({
        //instatiate global state
        products: [],
        categories: [],
        currentCategory: ''
    })
    console.log(state);
    // useProductReducer returns state and dispatch (method to update state)
    return <Provider value={[state, dispatch]} {...props} />
}
// useContext is a react hook that allows us to use the state created from createContext
const useStoreContext = () => {
    return useContext(StoreContext)
}

export { StoreProvider, useStoreContext };