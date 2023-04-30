




export const getNotes = async  () => {
   return await fetch('http://localhost:4000/notes')
}

export const deleteNote = async (id) => {
   return await fetch("http://localhost:4000/notes/"+id,{
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
   })
}