import Image from "next/image";

const PageFooter = () => {
	return (
		<>
			<section>
				<div className='container'>
					<div className='header'>
						<div className='grid'>
							<div>
								<h2 className='title'>Cost-effectiveness</h2>

								<p className='description'>
									Besides reducing paper waste and printing costs, effective digital signage in schools and universities
									can relieve you from the cost of re-printing whenever you have new updates. As innovation progress and
									interactive displays and kiosks become more cost-effective, the return on investment will increase.
								</p>
							</div>

							<div className='img-wrapper'>
								<Image src='/img/education/footer.png' layout='fill' objectFit='contain' />
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
					height: 100%;
					background: linear-gradient(-90deg, #aeb5ff 0%, #5463ff 80%);
					padding: 96px 45px 82px 90px;
					border-radius: 25px;
				}

				.grid {
					display: grid;
					grid-template-columns: 45% 55%;
					gap: 10px;
				}

				h2 {
					margin-top: 26px;
				}

				p.description {
					margin-top: 7px;
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

export default PageFooter;
