import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink , useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";


export const drawerWidth = 240;
const useStyles = makeStyles({
    navlink: {
        color: "#d500f9",
        textDecoration: "none",
      },
      active: {
        backgroundColor: "#ececec",
      },
});

const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation()
  const menuItem = [
    {
      text: "My Notes",
      icon: <SubjectOutlinedIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" component={"p"} color={"secondary"}>
          Note App
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItem.map((item) => (
          <NavLink
            to={item.path}
            className={classes.navlink}
            key={item.text}
          >
            <ListItem  disablePadding className={location.pathname === item.path ? classes.active : null}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
