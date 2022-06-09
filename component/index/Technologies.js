import ScrollAnimation from "react-animate-on-scroll";
import { SectionImgBg } from "../widgets";

const Technologies = () => {
	return (
		<>
			<section>
				<div className='container'>
					<h1>Futuristic Technologies</h1>

					<div className='flex flex-column' style={{ gap: 37 }}>
						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<SectionImgBg
								title='Motion Controlling'
								description="Using CCTV cameras and the ScreenFlex AI facial recognition system, the screen changes content based on age, gender, even the customer's location"
								img='/img/technologies/motion-controlling.png'
								bgColor='#FFF2E2'
							/>
						</ScrollAnimation>

						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<SectionImgBg
								title='Flexible Multiscreen'
								description="Using CCTV cameras and the ScreenFlex AI facial recognition system, the screen changes content based on age, gender, even the customer's location"
								img='/img/technologies/multiscreen.png'
								bgColor='#FFF6F6'
							/>
						</ScrollAnimation>

						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<SectionImgBg
								title='Cloud Technologie'
								description='Screenflex provides cloud storage to our customers for increased security and real-time changes to all your screens with virtually 0 latency'
								img='/img/cloud.png'
							/>
						</ScrollAnimation>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 180px;
				}

				h1 {
					text-align: center;
					margin-bottom: 37px;
				}

				@media only screen and (max-width: 1023px) {
					h1 {
						font-size: 36px;
						line-height: 35px;
					}
				}
			`}</style>
		</>
	);
};

export default Technologies;
