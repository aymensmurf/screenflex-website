import ScrollAnimation from "react-animate-on-scroll";
import { SectionImgBg } from "../widgets";

const Cloud = () => {
	return (
		<>
			<section>
				<div className='container'>
					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<SectionImgBg
							title='Cloud Technologie'
							description='Screenflex provides cloud storage to our customers for increased security and real-time changes to all your screens with virtually 0 latency'
							img='/img/cloud.png'
						/>
					</ScrollAnimation>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 71px;
				}
			`}</style>
		</>
	);
};

export default Cloud;
