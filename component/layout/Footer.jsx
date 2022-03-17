import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<>
			<footer>
				<div className='bg'>
					<div className='container flex flex-column ai-c'>
						<h3>
							Take your client communication to the <br />
							next level with Screenflex.
						</h3>
						<p>
							Be the first to know when Screenflex launches. Early access users <br />
							will receive an extended free trial and early bird pricing options.
						</p>

						<div className='btn'>Get a Demo</div>
					</div>

					<div className='footer'>
						<hr />

						<div className='flex ai-c jc-sb' style={{ marginTop: 36 }}>
							<ul className='flex ai-c' style={{ gap: 30 }}>
								<li>Privacy Policy</li>
								<li>Terms and Conditions</li>
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
							<p className='innovant-studio'>Innovant Studio</p>
							<p className='all-rights'>© 2022 Screenflex All rights reserved</p>
						</div>
					</div>
				</div>
			</footer>

			<style jsx>{`
				footer {
					margin-top: 400px;
					position: relative;
				}

				.bg {
					min-height: 826px;
					width: 100vw;
					background-image: url("/img/footer/background.svg");
					background-position: top center;
					background-repeat: no-repeat;
					background-size: cover;
					overflow: hidden;
				}

				.container {
					padding-top: 235px;
				}

				h3 {
					text-align: center;
					color: #fff;
				}

				p {
					line-height: 30px;
					text-align: center;
					color: #fff;
					margin-top: 34px;
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
					margin-bottom: 36px;
					padding: 0px 60px;
				}

				hr {
					border-top: 1px solid #f7f9fd;
					opacity: 0.14;
				}

				ul {
					list-style-type: none;
					padding: 0;
					margin: 0;
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
					margin-top: 10px;
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
			`}</style>
		</>
	);
};

export default Footer;
