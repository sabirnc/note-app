import { deleteNote, getNotes } from "../../apis/noteapi"
import { deleteRequest, requestNotes } from "../constant"


export const fetchNotes = (dispatch) => {
    getNotes().then( (res) => res.json())
    .then( data => {
        dispatch({type:requestNotes , payload:data})
    })
}

export const removeNote = (id , dispatch) => {
    deleteNote(id).then( res => res.json )
    dispatch({type:deleteRequest , payload:id})

}