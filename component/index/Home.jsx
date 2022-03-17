import { useState } from "react";
import Image from "next/image";

const Home = () => {
	const [type, setType] = useState("restaurants");

	return (
		<>
			<section>
				<div className='container'>
					<div className='flex flex-column ai-c' style={{ position: "relative", zIndex: 1 }}>
						<h1>All screens, One place.</h1>
						<p>
							Manage screens. Deliver world class experiences. Make the <br /> best out of digital signage.
						</p>
						<div className='options'>
							<div
								className={type === "restaurants" ? "option active" : "option"}
								onClick={() => {
									setType("restaurants");
								}}>
								Restaurants
							</div>
							<div
								className={type === "education" ? "option active" : "option"}
								onClick={() => {
									setType("education");
								}}>
								Education
							</div>
						</div>
					</div>
				</div>

				<div className='bg'>
					<div className='img-holder-icons'>
						<Image src='/img/home-icons.png' width={1100} height={375} objectFit='cover' />
					</div>

					<div className='img-holder-pc'>
						<div className='container-video'>
							<video muted autoPlay loop>
								<source src='/video/home.webm' type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						</div>

						<Image src='/img/home-pc.png' width={1100} height={690} objectFit='contain' />
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					padding-top: 150px;
					text-align: center;
				}

				p {
					margin-top: 14px;
				}

				.options {
					margin-top: 45px;
					display: flex;
					align-items: center;
				}

				.option {
					padding: 6px 18px;
					font-weight: 600;
					font-size: 18px;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 5px;
					cursor: pointer;
					transition: all 300ms ease;
					border-radius: 18px;
				}

				.option.active {
					background: #ffc300;
					color: #fff;
				}

				.bg {
					width: 100vw;
					height: 560px;
					background-image: url("/img/home-bg.svg");
					background-position: top center;
					background-repeat: no-repeat;
					background-size: cover;
					position: relative;
				}

				.img-holder-icons {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
				}

				.img-holder-pc {
					position: absolute;
					left: 50%;
					top: 108px;
					transform: translateX(-50%);
				}

				.container-video {
					position: absolute;
					top: 40px;
					left: 0;
				}

				.container-video video {
					width: 65%;
					object-fit: cover;
				}
			`}</style>
		</>
	);
};

export default Home;
