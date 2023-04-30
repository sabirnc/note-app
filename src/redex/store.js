import { createStore } from "redux"
import rootReducer from "../redex/slice/rootSlice"



export const store = createStore(rootReducer)

store.subscribe( () => {
    console.log('state changed' ,store.getState())
})