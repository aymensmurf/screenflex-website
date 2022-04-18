import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ isStaticNav, transparent, children }) => {
	return (
		<>
			<Head>
				<title>ScreenFlex</title>

				<link rel='shortcut icon' href='/favicon.png' type='image/png' />
			</Head>

			<Nav isStaticNav={isStaticNav} transparent={transparent} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
