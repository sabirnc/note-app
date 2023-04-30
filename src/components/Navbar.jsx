import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import { drawerWidth } from "./Sidebar";
import { format } from "date-fns"


const useStyles = makeStyles((theme) => ({
    nav: {
      maxWidth: `calc(100% - ${drawerWidth}px)`,
    },
    full:{
        backgroundColor:'#fff'
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
       <AppBar className={classes.nav} elevation={1}>
          <Toolbar className={classes.full}>
            <Typography
             variant="h6"
             className={classes.nav}
            >
               {format( Date.now(), 'MM-EEEE-yyyy')}
            </Typography>
          </Toolbar>
       </AppBar>
    )
}


export default Navbar