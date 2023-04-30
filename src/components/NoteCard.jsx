import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function color(col){
  return {
    sx:{
      bgcolor:col
    }
  }
}

function avatarBackground(note){
  if(note.category === "Work"){
    return color("#008000")
  }
  if(note.category === "Remainder"){
    return color("#C80000")  
  }
  if(note.category === "Todos"){
    return color("#EDED00")
  }
  return color("#0000B6")
}
 

const NoteCard = ({ note, handleDeleteNote }) => {

  

  return (
    <Card  >
      <CardHeader
        avatar={<Avatar {...avatarBackground(note)}>S</Avatar>}
        action={
          <IconButton onClick={() => handleDeleteNote(note.id)}>
            <DeleteOutlinedIcon />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color={"text.secondary"} >
          {note.detail}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
