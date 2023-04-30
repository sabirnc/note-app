import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  container:{
    marginLeft:'240px'
  },
  topbar:{
    marginBottom:"100px"
  }
})

const RootLayout = () => {

    const classes = useStyles()

    return (
        <>
          <Navbar />
          <div className={classes.topbar}></div>
          <Sidebar/>

          <div className={classes.container}>
            <Outlet />
          </div>
        </>
    )
}

export default RootLayout