import Image from "next/image";

const Header = () => {
	return (
		<>
			<section>
				<div className='container'>
					<div className='header'>
						<div className='grid'>
							<div>
								<div className='flex ai-c' style={{ gap: 7 }}>
									<Image src='/img/education/icon.svg' alt='' width={24} height={21} objectFit='contain' />
									<p className='category'>Education</p>
								</div>

								<h3 className='title'>Screenflex Is Vital For Schools and Universities</h3>

								<p className='description'>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
									labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
									et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								</p>

								<div className='flex ai-c' style={{ marginTop: 25, gap: 20 }}>
									<div className='btn btn-start-now'>Start Now</div>
									<div className='btn btn-get-demo'>Get Demo</div>
								</div>
							</div>

							<div className='img-wrapper'>
								<Image src='/img/education/background.png' layout='fill' objectFit='contain' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					padding-top: 150px;
				}

				section * {
					color: #fff;
				}

				.header {
					width: 100%;
					background: linear-gradient(-90deg, #aeb5ff 0%, #5463ff 80%);
					padding: 96px 45px 82px 90px;
					border-radius: 25px;
				}

				.grid {
					display: grid;
					grid-template-columns: 45% 55%;
					gap: 10px;
				}

				p.category {
					font-weight: bold;
				}

				h3 {
					margin-top: 26px;
				}

				p.description {
					margin-top: 7px;
				}

				.btn {
					min-width: 150px;
					padding: 7px 30px 9px;
					border-radius: 30px;
					font-weight: bold;
					font-size: 18px;
					text-align: center;
					color: #5463ff !important;
					background: #fff;
					border: 1px solid #fff;
					transition: all 300ms ease;
				}

				.btn:hover {
					border: 1px solid #fff;
					color: #fff !important;
					background: transparent;
				}

				.btn.btn-start-now {
					color: #fff !important;
					background: #ffc300;
					border: 1px solid #ffc300;
					filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.16));
				}

				.btn.btn-start-now:hover {
					border: 1px solid #ffc300;
					color: #ffc300 !important;
					background: transparent;
				}

				.img-wrapper {
					width: 100%;
					height: 100%;
					position: relative;
				}
			`}</style>
		</>
	);
};

export default Header;
