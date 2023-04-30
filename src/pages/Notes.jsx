import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import NoteCard from "../components/NoteCard"
import { useEffect } from "react"
import { fetchNotes, removeNote } from "../redex/action/notes"
import { useDispatch, useSelector } from 'react-redux'



const Notes =  () => {
    const noteDispatch = useDispatch()
    const notes  = useSelector( state => state )

    useEffect( () => {
      fetchNotes(noteDispatch)
    }, [noteDispatch])

    const handleDeleteNote = async (id) => {

      removeNote( id , noteDispatch)
    }

    return (
       <Container>
          <Grid container spacing={3}>
             {
               notes &&  notes.map( note => (
                    <Grid item sm={12} md={6} lg={4} key={note.id} >
                       <NoteCard note={note} handleDeleteNote={handleDeleteNote} />
                    </Grid>
                ))
             }
          </Grid>
       </Container>
    )
}

export default Notes