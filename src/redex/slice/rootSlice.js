import { deleteRequest, requestNotes } from "../constant"


const intialState = [] 

function rootSlice (state , action) {

    switch(action.type) {
        case requestNotes : 
          return action.payload
        case deleteRequest :
            const newNotes = state.filter( note => note.id !== action.payload)
            return newNotes  
        default : return intialState
    }

    
}


export default rootSlice