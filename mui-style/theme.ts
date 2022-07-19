import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#00BFFF",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
	components: {
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
						maxWidth: "1024px",
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
						color: "red",
					},
				},
			},
		},
	},
	typography: {
		fontFamily: [
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
	},
});

export { theme };
