import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const SectionWithImg = ({ img, icon, title, description, width, height, right }) => {
	return (
		<>
			<ScrollAnimation animateOnce animateIn='fadeInUp'>
				<section>
					<div className='img-container'>
						{img && (
							<div className='img-wrapper'>
								<Image src={img} layout='fill' objectFit='contain' />
							</div>
						)}

						{icon && (
							<div className='icon-container'>
								<Image src={icon} width={100} height={100} objectFit='contain' />
							</div>
						)}
					</div>

					<div className='text-container'>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				</section>
			</ScrollAnimation>

			<style jsx>{`
				section {
					display: grid;
					gap: 40px;
					margin-bottom: 130px;
					grid-auto-flow: dense;
					grid-template-columns: ${right ? "45% calc(55% - 40px)" : "calc(55% - 40px) 45%"};
				}

				section > .img-container {
					grid-column: ${right ? 2 : 1};
				}

				section > .text-container {
					grid-column: ${right ? 1 : 2};
				}

				p {
					margin-top: 20px;
					color: #1a1a1a;
				}

				.img-container {
					width: 100%;
					height: 100%;
					background: linear-gradient(-90deg, #aeb5ff 0%, #5463ff 80%);
					padding: 20px 40px;
					border-radius: 25px;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
				}

				.img-wrapper {
					position: relative;
					width: 100%;
					max-width: ${width}px;
					height: ${height}px;
				}

				.icon-container {
					position: absolute;
					top: 0px;
					transform: translateY(-50%);
					right: ${right ? "10px" : "auto"};
					left: ${!right ? "10px" : "auto"};
				}

				@media only screen and (max-width: 1023px) {
					section {
						grid-template-columns: 1fr;
						margin-bottom: 70px;
					}

					section > .img-container {
						grid-column: 1;
					}

					section > .text-container {
						grid-column: 1;
					}
				}
			`}</style>
		</>
	);
};

export default SectionWithImg;
