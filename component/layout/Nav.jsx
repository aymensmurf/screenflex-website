import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ isStaticNav = false, transparent = false }) => {
	const sectorRef = useRef(null);
	const [isMedia1023, setIsMedia1023] = useState(false);
	const [isSectorsOpen, setIsSectorsOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		let doc = document.documentElement;
		let w = window;

		let prevScroll = w.scrollY || doc.scrollTop;
		let curScroll;
		let direction = 0;
		let prevDirection = 0;

		let header = document.getElementById("main-nav");

		if (w.scrollY <= 80 || doc.scrollTop) {
			header.classList.remove("bg-color");
		}

		const checkScroll = function () {
			setIsSectorsOpen(false);

			curScroll = w.scrollY || doc.scrollTop;

			if (curScroll <= 80) {
				header.classList.remove("bg-color");
			}

			if (curScroll > prevScroll) {
				direction = 2;
			} else if (curScroll < prevScroll) {
				direction = 1;
			}

			if (direction !== prevDirection) {
				toggleHeader(direction, curScroll);
			}

			prevScroll = curScroll;
		};

		const toggleHeader = function (direction, curScroll) {
			if (direction === 2 && curScroll > 80) {
				header.classList.add("hide");
				prevDirection = direction;
			} else if (direction === 1) {
				header.classList.remove("hide");
				header.classList.add("bg-color");
				prevDirection = direction;
			}
		};

		window.addEventListener("scroll", checkScroll);
	}, []);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1023px)");

		if (mediaQuery.matches) {
			setIsMedia1023(true);
		} else {
			setIsMedia1023(false);
		}

		const listner = mediaQuery.addEventListener("change", (mediaQuery) => {
			if (mediaQuery.matches) {
				setIsMedia1023(true);
			} else {
				setIsMedia1023(false);
			}
		});

		return listner;
	}, []);

	useEffect(() => {
		const header = document.getElementById("main-nav");

		if (isSectorsOpen) {
			header.classList.add("bg-color");
		} else {
			header.classList.remove("bg-color");
		}
	}, [isSectorsOpen]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (sectorRef.current && !sectorRef.current.contains(event.target)) {
				setIsSectorsOpen(false);
			} else {
				setIsSectorsOpen(true);
			}
		};

		document.addEventListener("mouseover", handleClickOutside);
		return () => {
			document.removeEventListener("mouseover", handleClickOutside);
		};
	}, []);

	return (
		<>
			<nav id='main-nav'>
				<div className='container'>
					<div className='flex ai-c jc-sb' style={{ width: "100%" }}>
						<Link href='/'>
							<div style={{ cursor: "pointer" }}>
								<Image
									src={transparent && isMedia1023 ? "/img/logo-w.svg" : "/img/logo.svg"}
									width={90}
									height={40}
									objectFit='contain'
									alt='Screenflex'
								/>
							</div>
						</Link>

						<div className='display-desktop'>
							<ul>
								<li ref={sectorRef} style={{ position: "relative" }}>
									<p
										style={{ zIndex: 100, position: "relative" }}
										onClick={() => {
											setIsSectorsOpen(true);
										}}>
										Sectors
									</p>
									{isSectorsOpen && (
										<div className='sub-menu'>
											<div style={{ height: 60 }}></div>
											<ul>
												<li>
													<a>
														<Link href='/restaurant'>Restaurant</Link>
													</a>
												</li>
												<li>
													<a>
														<Link href='/education'>Education</Link>
													</a>
												</li>
											</ul>
										</div>
									)}
								</li>
								<li>
									<a>
										<Link href='/#our-solution'>Our Solution</Link>
									</a>
								</li>
								<li>
									<a>
										<Link href='/#features'>Features</Link>
									</a>
								</li>
								<li>
									<a>
										<Link href='/#pricing'>Pricing</Link>
									</a>
								</li>
							</ul>
						</div>

						<div className='display-desktop'>
							<div className='flex ai-c' style={{ gap: 15 }}>
								<a href='https://app.screenflex.pro/login' target='_blank' rel='noopener noreferrer'>
									Login
								</a>
								<a href='https://app.screenflex.pro/signup' target='_blank' rel='noreferrer noopener'>
									<div className='btn-free-trial'>Free trial</div>
								</a>
							</div>
						</div>

						<div className='display-mobile'>
							<div
								style={{ cursor: "pointer" }}
								onClick={() => {
									setIsMobileMenuOpen(!isMobileMenuOpen);
								}}>
								<Image
									src={transparent && isMedia1023 ? "/img/menu-w.svg" : "/img/menu.svg"}
									width={33}
									height={22}
									objectFit='contain'
								/>
							</div>
						</div>

						{isMobileMenuOpen && (
							<div className='display-mobile mobile-menu'>
								<ul>
									<li
										onClick={() => {
											setIsMobileMenuOpen(false);
										}}>
										<a>
											<Link href='/#our-solution'>Our Solution</Link>
										</a>
									</li>
									<li
										onClick={() => {
											setIsMobileMenuOpen(false);
										}}>
										<a>
											<Link href='/#how-it-works'>How it works</Link>
										</a>
									</li>
									<li
										onClick={() => {
											setIsMobileMenuOpen(false);
										}}>
										<a>
											<Link href='/#pricing'>Pricing</Link>
										</a>
									</li>
									<li
										onClick={() => {
											setIsMobileMenuOpen(false);
										}}>
										<a>
											<Link href='/#features'>Features</Link>
										</a>
									</li>
									<li
										onClick={() => {
											setIsMobileMenuOpen(false);
										}}>
										<a>
											<Link href='/restaurant'>Restaurant</Link>
										</a>
									</li>
									<li
										onClick={() => {
											setIsMobileMenuOpen(false);
										}}>
										<a>
											<Link href='/education'>Education</Link>
										</a>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</nav>

			{isSectorsOpen && <div className='overlay'></div>}

			<style jsx>{`
				#main-nav {
					top: 0;
					width: 100%;
					transition: all 0.5s ease;
					z-index: 99;
					background-color: ${isStaticNav ? "#fff" : "transparent"};
					position: ${isStaticNav ? "relative" : "fixed"};
				}

				#main-nav.hide {
					top: -143px;
				}

				#main-nav.bg-color {
					background: #fff;
				}

				.container {
					padding-top: 45px;
					padding-bottom: 23px;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				ul {
					list-style-type: none;
					display: flex;
					gap: 25px;
				}

				li {
					font-size: 18px;
					cursor: pointer;
					z-index: 100;
				}

				li:hover {
					text-decoration: underline;
				}

				.btn-free-trial {
					min-width: 150px;
					padding: 13px 34px;
					border-radius: 30px;
					font-weight: 600;
					font-size: 18px;
					filter: drop-shadow(0px 10px 25px rgba(84, 99, 255, 0.25));
					transition: all 0.3s ease;
					background: linear-gradient(45deg, #aeb5ff 0%, #5463ff 80%);
					color: #fff;
					border: 1px solid #fff;
				}

				.btn-free-trial:hover {
					background: #fff;
					color: #5463ff;
					border: 1px solid #5463ff;
				}

				.sub-menu {
					position: absolute;
					top: 0;
					left: 0;
					z-index: 99;
				}

				.sub-menu ul,
				.mobile-menu ul {
					padding: 10px 24px;
					flex-direction: column;
					gap: 15px;
					background: ${transparent ? "#5463ff" : "#fff"};
				}

				.mobile-menu ul {
					padding: 0px;
				}

				.sub-menu ul li {
					font-size: 16px;
				}

				.overlay {
					width: 100vw;
					height: 100vh;
					background: #000;
					opacity: 0.5;
					position: fixed;
					top: 0;
					left: 0;
					z-index: 98;
					animation: animation-opacity-50 0.3s ease-out;
				}

				.mobile-menu {
					width: 100vw;
					height: 100vh;
					overflow-x: hidden;
					overflow-y: auto;
					position: fixed;
					top: 0px;
					left: 0px;
					padding: 140px 60px 40px;
					z-index: -1;
					animation: animation-opacity-100 0.5s ease-out;
					background: ${transparent ? "linear-gradient(-90deg, #aeb5ff 0%, #5463ff 80%)" : "#fff"};
				}

				@media only screen and (max-width: 1023px) {
					#main-nav.bg-color {
						background: ${transparent ? "linear-gradient(-90deg, #aeb5ff 0%, #5463ff 80%)" : "#fff"};
					}

					li a,
					li p {
						color: ${transparent ? "#fff" : "#2b2b2b"};
					}

					.btn-free-trial {
						background: ${transparent ? "#fff" : "linear-gradient(45deg, #aeb5ff 0%, #5463ff 80%)"};
						color: ${transparent ? "#5463ff" : "#fff"};
						border: ${transparent ? "1px solid #5463ff" : "1px solid #fff"};
					}
				}

				@media only screen and (max-width: 950px) {
					.mobile-menu ul {
						background: transparent;
					}

					.display-desktop {
						display: none;
						clear: both;
					}

					.display-mobile {
						display: block;
					}
				}
			`}</style>
		</>
	);
};

export default Nav;
