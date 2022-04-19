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
						<p>Manage screens. Deliver world class experiences. Make the best out of digital signage.</p>

						<div className='options display-desktop'>
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

						<div className='display-mobile'>
							<a href='https://app.screenflex.pro/signup' target='_blank' rel='noreferrer noopener'>
								<div className='btn btn-free-trial'>Free trial</div>
							</a>
						</div>
					</div>
				</div>

				<div className='bg'>
					<div className='img-holder-pc'>
						<div className='img-screen-wrapper'>
							<div className='container-video'>
								<video muted autoPlay loop>
									<source src='/video/home.webm' type='video/mp4' />
									Your browser does not support the video tag.
								</video>
							</div>
							<Image src='/img/home-pc.png' layout='fill' objectFit='contain' />
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					padding-top: 150px;
					text-align: center;
				}

				p {
					margin-top: 20px;
					max-width: 520px;
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
					top: 154px;
					transform: translateX(-50%);
				}

				.container-video {
					position: absolute;
					top: 26px;
					left: 50%;
					transform: translateX(-50%);
				}

				.container-video video {
					height: 340px;
					object-fit: cover;
				}

				.img-screen-wrapper {
					width: 100vw;
					height: 528px;
					position: relative;
				}

				.btn-free-trial {
					min-width: 150px;
					padding: 13px 34px;
					border-radius: 30px;
					font-weight: 600;
					font-size: 18px;
					background: linear-gradient(45deg, #aeb5ff 0%, #5463ff 80%);
					filter: drop-shadow(0px 10px 25px rgba(84, 99, 255, 0.25));
					color: #fff;
					border: 1px solid #fff;
					margin-top: 35px;
					transition: all 0.3s ease;
				}

				.btn-free-trial:hover {
					background: #fff;
					color: #5463ff;
					border: 1px solid #5463ff;
				}

				@media only screen and (max-width: 950px) {
					.display-desktop {
						display: none;
						clear: both;
					}

					.display-mobile {
						display: block;
					}

					p {
						margin-top: 35px;
					}

					.bg {
						height: 322px;
					}

					.img-holder-pc {
						top: 108px;
					}

					.img-screen-wrapper {
						height: 240px;
					}

					.container-video {
						top: 12px;
					}

					.container-video video {
						height: 154px;
					}
				}

				@media only screen and (max-width: 425px) {
					.img-screen-wrapper {
						height: 180px;
					}

					.container-video {
						top: 9px;
					}

					.container-video video {
						height: 116px;
					}
				}
			`}</style>
		</>
	);
};

export default Home;
