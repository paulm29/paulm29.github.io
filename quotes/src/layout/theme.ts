import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export default createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#ffffff',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});
