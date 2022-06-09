import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const PreFooter = () => {
	return (
		<>
			<section>
				<div className='container'>
					<div className='pre-footer'>
						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<h2>Display any type of content on your screens quickly and easily</h2>
						</ScrollAnimation>

						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<div style={{ marginTop: 15 }}>
								<Image src='/img/pre-footer.png' width={930} height={580} objectFit='contain' />
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 144px;
					text-align: center;
				}

				.pre-footer {
					width: 100%;
					background: linear-gradient(-90deg, #aeb5ff 0%, #5463ff 80%);
					padding: 64px 115px 0px;
					border-radius: 25px;
				}

				h2 {
					max-width: 1072px;
					color: #fff;
				}

				@media only screen and (max-width: 655px) {
					.pre-footer {
						padding-left: 30px;
						padding-right: 30px;
					}
				}
			`}</style>
		</>
	);
};

export default PreFooter;
