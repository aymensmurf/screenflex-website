import Image from "next/image";
import { FEATURES } from "../../utils/consts";
import { Feature } from "../widgets";

const Features = () => {
	return (
		<>
			<section>
				<div className='container'>
					<div className='features'>
						<div className='flex ai-c jc-c'>
							<Image src='/img/features/money.png' width={77} height={77} objectFit='contain' />
							<h3>How can Screenflex help your business?</h3>
						</div>

						<div style={{ marginTop: 68 }}>
							<div className='grid ai-fs'>
								{FEATURES.map(({ img, title, description }, i) => (
									<Feature key={i} img={img} title={title} description={description} />
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 145px;
				}

				.features {
					background: #f6f7ff;
					border-radius: 15px;
					padding: 48px 85px 90px;
				}

				.grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					row-gap: 25px;
					column-gap: 66px;
				}
			`}</style>
		</>
	);
};

export default Features;
