import Link from "next/link";

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
				</div>
			</footer>

			<style jsx>{`
				footer {
					margin-top: 400px;
					position: relative;
				}

				.bg {
					height: 826px;
					width: 100vw;
					background-image: url("/img/footer/background.svg");
					background-position: top center;
					background-repeat: no-repeat;
					background-size: cover;
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
					width: 211px;
					padding: 15px 55px;
					border-radius: 27px;
					background: #fff;
					color: #5d698d;
					cursor: pointer;
					margin-top: 52px;
				}
			`}</style>
		</>
	);
};

export default Footer;
