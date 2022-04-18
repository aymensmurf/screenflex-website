import Image from "next/image";

const Slider = ({ slides = [] }) => {
	return (
		<>
			<section>
				<div className='container'>
					<h2>Screenflex makes managing screens throughout your campus easy</h2>
				</div>
				<div className='grid' style={{ marginTop: 60 }}>
					{slides.map(({ title, img }, i) => (
						<div key={i} id={`slide-${i}`} className={i === 2 ? "slide active" : "slide"}>
							<div className='img-wrapper'>
								<Image src={img} alt={title} layout='fill' objectFit='containe' />
							</div>
							<p>{title}</p>
						</div>
					))}
				</div>
			</section>

			<style jsx>{`
				section {
					text-align: center;
					margin-top: 60px;
					margin-bottom: 160px;
				}

				.grid {
					width: calc(100% + 438px);
					display: grid;
					grid-template-columns: repeat(5, 1fr);
					gap: 67px;
					margin-left: -219px;
				}

				.slide {
					cursor: pointer;
					transition: all 300ms;
				}

				.active {
					// transform: scale(1.25);
				}

				.img-wrapper {
					width: 390px;
					height: 212px;
					position: relative;
				}

				p {
					color: #1a1a1a;
					margin-top: 20px;
				}
			`}</style>
		</>
	);
};

export default Slider;
