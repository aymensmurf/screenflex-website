import { WHYS } from "../../utils/consts";
import { WhyCard } from "../widgets";

const Why = () => {
	return (
		<>
			<section>
				<div className='container'>
					<div className='why'>
						<h4>Why Opt for Screenflex?</h4>

						<div className='grid' style={{ marginTop: 93, alignItems: "flex-start" }}>
							{WHYS.map(({ img, title, description }, i) => (
								<WhyCard key={i} img={img} title={title} description={description} />
							))}
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 145px;
					text-align: left;
				}

				.why {
					background: #f6f7ff;
					border-radius: 25px;
					padding: 43px 99px 121px;
				}

				h4 {
					font-size: 32px;
					text-align: center;
				}

				.grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					row-gap: 42px;
					column-gap: 104px;
				}
			`}</style>
		</>
	);
};

export default Why;