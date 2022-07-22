import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#00C2FF",
		},
		secondary: {
			main: "#fff",
		},
		error: {
			main: red.A400,
		},
	},
	components: {
		MuiAppBar: {
			defaultProps: {
				color: "secondary",
			},
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: "md",
			},
			styleOverrides: {
				maxWidthSm: {
					"@media (min-width: 600px)": {
						maxWidth: "680px",
					},
				},
				maxWidthMd: {
					"@media (min-width: 900px)": {
						maxWidth: "1212px",
					},
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: "none",
			},
			styleOverrides: {
				root: {
					color: "black",
					"&:hover, &.active": {
						color: "#00C2FF",
					},
				},
			},
		},
	},
	typography: {
		fontFamily: [
			"Montserrat",
			"Oleo Script",
			"Noto Serif Display",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		fontSize: 12,
	},
});

export { theme };
