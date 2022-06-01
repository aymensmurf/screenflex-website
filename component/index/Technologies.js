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
								title='AI Technologie'
								description="Using CCTV cameras and the ScreenFlex AI facial recognition system, the screen changes content based on age, gender, even the customer's location"
								img='/img/technologies/ai.png'
								bgColor='#F6F7FF'
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
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 112px;
				}

				h1 {
					text-align: center;
					margin-bottom: 37px;
				}
			`}</style>
		</>
	);
};

export default Technologies;
