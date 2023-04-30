import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const myStyles = {
  marginTop: "40px",
  marginBottom: "40px",
  display: "block",
};



const Create = () => {
  const [category, setCategory] = useState(null);
  const [title , setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [titleError , setTitleError] = useState(false)
  const [detailError , setDetailError] = useState(false)
  const [categoryError , setCategoryError] = useState(false)
  const navigate = useNavigate()
 

  const handleSubmit = async (e) => {
    e.preventDefault()

    setTitleError(false)
    setDetailError(false)
    setCategoryError(false)

    if(title === ""){
      setTitleError(true)
    }

    if(detail === ""){
        setDetailError(true)
    }

    if(category == null){
        setCategoryError(true)
    }

    if(title && detail && category){
       await fetch('http://localhost:4000/notes',{
        method:"post",
        body:JSON.stringify({title , detail , category  }),
        headers:{"Content-Type":"application/json"}
       })
       .then( res => {
          navigate('/')
       })
       
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component={"h2"}
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={myStyles}
          label="Note Title"
          variant="outlined"
          fullWidth
          color="secondary"
          required
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          sx={myStyles}
          label="Note"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          color="secondary"
          required
          onChange={(e) => setDetail(e.target.value)}
          error={detailError}
        />
        <FormControl sx={myStyles} required error={categoryError} >
          <FormLabel>Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="Todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            <FormControlLabel
              value="Money"
              control={<Radio color="secondary" />}
              label="Money"
            />
            <FormControlLabel
              value="Remainder"
              control={<Radio color="secondary" />}
              label="Remainder"
            />
            <FormControlLabel
              value="Work"
              control={<Radio color="secondary" />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
          disableElevation
        >
          SUBMIT
        </Button>
      </form>
    </Container>
  );
};

export default Create;
