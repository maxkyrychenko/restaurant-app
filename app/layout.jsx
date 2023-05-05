import "./globals.css";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

const RootLayout = ({children}) => (
	<html lang="en">
		<body className={montserrat.className}>{children}</body>
	</html>
);

export default RootLayout;
