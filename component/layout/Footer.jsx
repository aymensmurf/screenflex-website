import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<>
			<footer>
				<div className='bg'>
					<div className='container flex flex-column ai-c'>
						<h3 className='title'>Bring your favorite content to life</h3>
						<p className='desc'>
							Unlock the power of digital signage with our smart, easy, professional and affordable solution.
						</p>

						<a href='https://app.screenflex.pro/signup' target='_blank' rel='noreferrer noopener'>
							<div className='btn'>Get a Demo</div>
						</a>
					</div>

					<div className='footer'>
						<hr />

						<div className='links flex ai-c jc-sb' style={{ marginTop: 36 }}>
							<ul className='flex ai-c'>
								<li>
									<Link href='/terms-and-conditions'>Terms and conditions</Link>
								</li>
								<li>
									<Link href='/privacy-policy'>Privacy policy</Link>
								</li>
								<li>Contact</li>
							</ul>

							<div className='flex ai-c' style={{ gap: 27 }}>
								<Image src='/img/footer/facebook.svg' width={18} height={18} objectFit='contain' />
								<Image src='/img/footer/twitter.svg' width={18} height={18} objectFit='contain' />
								<Image src='/img/footer/instagram.svg' width={18} height={18} objectFit='contain' />
							</div>
						</div>

						<div className='flex flex-column jc-c'>
							<p className='powered-by'>Powered by</p>
							<a href='https://innovant.studio/' target='_blank' rel='norefferer noopener'>
								<p className='innovant-studio'>Innovant Studio</p>
							</a>
							<p className='all-rights'>© 2022 Screenflex All rights reserved</p>
						</div>
					</div>

					<div className='video-container'>
						<div className='container-video'>
							<video muted autoPlay loop>
								<source src='/video/home.webm' type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						</div>

						<div className='img-screens-wrapper'>
							<Image src='/img/footer/home.png' layout='fill' objectFit='contain' />
						</div>
					</div>
				</div>
			</footer>

			<style jsx>{`
				footer {
					padding-top: 400px;
					position: relative;
				}

				.bg {
					min-height: 826px;
					width: 100vw;
					background-image: url("/img/footer/background.svg");
					background-position: top center;
					background-repeat: no-repeat;
					background-size: cover;
					position: relative;
				}

				.container {
					padding-top: 300px;
				}

				h3,
				p {
					text-align: center;
				}

				h3.title {
					color: #fff;
					max-width: 695px;
				}

				p.desc {
					line-height: 30px;
					color: #fff;
					margin-top: 34px;
					max-width: 574px;
				}

				.btn {
					min-width: 211px;
					padding: 15px 55px;
					border-radius: 27px;
					background: #fff;
					color: #5d698d;
					cursor: pointer;
					margin-top: 52px;
					box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
					border: 1px solid #fff;
					transition: all 500ms ease;
				}

				.btn:hover {
					background: transparent;
					color: #fff;
				}

				.footer {
					max-width: 1380px;
					margin: auto;
					margin-top: 136px;
					padding: 0px 60px;
					padding-bottom: 60px;
				}

				hr {
					border-top: 1px solid #f7f9fd;
					opacity: 0.14;
				}

				ul {
					list-style-type: none;
					padding: 0;
					margin: 0;
					gap: 30px;
				}

				li {
					font-weight: 600;
					font-size: 14px;
					color: #f7f9fd;
				}

				.powered-by {
					font-size: 12px;
					line-height: 12px;
					color: #f7f9fd;
					margin-top: 40px;
				}
				.innovant-studio {
					font-weight: 600;
					font-size: 18px;
					line-height: 18px;
					color: #fff;
					margin-top: 8px;
				}
				.all-rights {
					font-size: 13px;
					line-height: 13px;
					color: #dcdff1;
					margin-top: 25px;
				}

				.img-screens-wrapper {
					width: 1140px;
					height: 505px;
					position: relative;
				}

				.video-container {
					position: absolute;
					top: 0px;
					left: 50%;
					transform: translate(-50%, -50%);
				}

				.container-video {
					position: absolute;
					top: 11%;
					left: 50%;
					transform: translate(-50%, 0);
				}

				.container-video video {
					width: 100%;
					object-fit: cover;
				}

				@media only screen and (max-width: 1230px) {
					footer {
						padding-top: 300px;
					}

					.img-screens-wrapper {
						width: 800px;
					}

					.container-video {
						top: 23%;
					}

					.container {
						padding-top: 200px;
					}
				}

				@media only screen and (max-width: 830px) {
					footer {
						padding-top: 250px;
					}

					.img-screens-wrapper {
						width: 600px;
					}

					.container-video {
						top: 30%;
					}

					.container {
						padding-top: 150px;
					}
				}

				@media only screen and (max-width: 747px) {
					h3.title {
						margin-top: 40px;
					}

					.footer {
						margin-top: 45px;
					}

					.links {
						display: grid;
						grid-template-columns: 1fr;
						place-items: center;
						gap: 46px;
					}

					hr {
						display: none;
						clear: both;
					}

					.bg {
						min-height: 600px;
					}

					ul {
						gap: 20px;
					}

					li {
						font-size: 12px;
					}
				}

				@media only screen and (max-width: 630px) {
					footer {
						padding-top: 200px;
					}

					.img-screens-wrapper {
						width: 400px;
					}

					.container-video {
						top: 38%;
					}

					.container {
						padding-top: 100px;
					}
				}
			`}</style>
		</>
	);
};

export default Footer;
