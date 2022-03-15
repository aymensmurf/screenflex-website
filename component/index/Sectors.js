import Image from "next/image";

const Sectors = () => {
	return (
		<>
			<section>
				<div className='container'>
					<h2>Choose your sector</h2>

					<div className='sectors'>
						<div className='sector'>
							<div className='container-img'>
								<div className='img-wrapper'>
									<Image src='/img/sectors/restaurant.png' width={323} height={184} objectFit='contain' />
								</div>
							</div>
							<p>Restaurant</p>
						</div>
						<div className='sector'>
							<div className='container-img'>
								<div className='img-wrapper'>
									<Image src='/img/sectors/education.png' width={323} height={184} objectFit='contain' />
								</div>
							</div>
							<p>Educarion</p>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 145px;
					text-align: center;
				}

				.container {
					padding-right: 140px;
					padding-left: 140px;
				}

				h2 {
					margin-bottom: 43px;
				}

				.sectors {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 40px;
				}

				.container-img {
					width: 100%;
					border-radius: 25px;
					border: 5px solid #e9e9e9;
					padding: 66px 10px;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
				}

				.container-img:hover {
					border: 5px solid #5463ff;
				}

				.img-wrapper {
					transition: all 300ms ease;
				}

				.container-img:hover .img-wrapper {
					transform: scale(0.75);
				}

				p {
					font-size: 28px;
					text-align: center;
					color: #101010;
					margin-top: 25px;
				}
			`}</style>
		</>
	);
};

export default Sectors;