import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ isStaticNav = false }) => {
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

		let checkScroll = function () {
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

		let toggleHeader = function (direction, curScroll) {
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

	return (
		<>
			<nav id='main-nav' className='display-desktop'>
				<div className='container'>
					<div className='flex ai-c jc-sb' style={{ width: "100%" }}>
						<Link href='/'>
							<div style={{ cursor: "pointer" }}>
								<Image src='/img/logo.svg' width={90} height={40} objectFit='contain' alt='Screenflex' />
							</div>
						</Link>

						<ul>
							<li>
								<Link href='/#our-solution'>Our Solution</Link>
							</li>
							<li>
								<Link href='/#how-it-works'>How it works</Link>
							</li>
							<li>
								<Link href='/#pricing'>Pricing</Link>
							</li>
							<li>
								<Link href='/#features'>Features</Link>
							</li>
						</ul>

						<div className='flex ai-c' style={{ gap: 9 }}>
							<a href='https://builder.screenflex.pro/signup' target='_blank' rel='noreferrer noopener'>
								<div className='btn btn-free-trial'>Free trial</div>
							</a>
						</div>
					</div>
				</div>
			</nav>

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
					background-color: #fff;
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
					color: #2b2b2b;
				}

				.btn {
					min-width: 150px;
					padding: 13px 34px;
					border-radius: 30px;
					font-weight: 600;
					font-size: 18px;
					transition: all 0.3s ease;
				}

				.btn-free-trial {
					background: linear-gradient(45deg, #aeb5ff 0%, #5463ff 80%);
					filter: drop-shadow(0px 10px 25px rgba(84, 99, 255, 0.25));
					color: #fff;
					border: 1px solid #fff;
				}

				.btn-free-trial:hover {
					background: #fff;
					color: #5463ff;
					border: 1px solid #5463ff;
				}
			`}</style>
		</>
	);
};

export default Nav;
