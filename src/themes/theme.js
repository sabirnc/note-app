import createTheme from '@mui/material/styles/createTheme'
import { purple  } from "@mui/material/colors"


const theme = createTheme({
    typography:{
        fontFamily:'Quicksand',
        fontWeightLight:300,
        fontWeightRegular:400,
        fontWeightMedium:500.,
        fontWeightBold:700
    },
    palette:{
        primary:{
            main:"#efefef"
        },
        secondary:purple
    }
})

export default theme