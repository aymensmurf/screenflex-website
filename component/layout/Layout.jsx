import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ isStaticNav, children }) => {
	return (
		<>
			<Head>
				<title>ScreenFlex</title>

				<link rel='shortcut icon' href='/favicon.png' type='image/png' />
			</Head>

			<Nav isStaticNav={isStaticNav} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
