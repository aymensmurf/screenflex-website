import Image from "next/image";
import { SOLUTIONS } from "../../utils/consts";
import { Solution } from "../widgets";

const Solutions = () => {
	return (
		<>
			<section>
				<div className='container'>
					<div className='flex ai-fs jc-sb'>
						<div>
							<h2>Take your client communication</h2>
							<div className='flex ai-fs'>
								<h2>the next level with Screenflex.</h2>
								<div className='display-desktop'>
									<Image src='/img/solution/solution.png' width={84} height={84} objectFit='contain' />
								</div>
							</div>
						</div>

						<div className='display-desktop-1023'>
							<div className='btn'>Get started</div>
						</div>
					</div>

					<div className='grid' style={{ marginTop: 58 }}>
						{SOLUTIONS.map(({ img, title, description }, i) => (
							<Solution key={i} img={img} title={title} description={description} />
						))}
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 145px;
				}

				.btn {
					min-width: 165px;
					padding: 12px 40px;
					border-radius: 30px;
					font-weight: 600;
					font-size: 16px;
					color: #fff;
					transition: all 500ms ease;
					background: linear-gradient(-45deg, #aeb5ff 0%, #5463ff 80%);
					border: 1px solid #fff;
				}

				.btn:hover {
					background: #fff;
					color: #5463ff;
					border: 1px solid #5463ff;
				}

				.grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					gap: 16px;
				}

				@media only screen and (max-width: 1140px) {
					h2 {
						font-size: 36px;
						line-height: 44px;
					}

					.display-desktop {
						display: none;
						clear: both;
					}
				}

				@media only screen and (max-width: 1023px) {
					.display-desktop-1023 {
						display: none;
						clear: both;
					}

					.grid {
						grid-template-columns: 1fr;
					}
				}

				@media only screen and (max-width: 678px) {
					h2 {
						font-size: 28px;
						line-height: 36px;
					}
				}
			`}</style>
		</>
	);
};

export default Solutions;
