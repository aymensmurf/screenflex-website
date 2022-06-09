import Image from "next/image";

const PricingCard = ({
	type,
	details: { title, priceMonth, priceYear, noPrice, description, options, buttonTitle, buttonDescription },
}) => {
	return (
		<>
			<div className={title === "Premium" ? "pricing active" : "pricing"}>
				<div>
					<p className='title'>{title}</p>
					{!noPrice && (
						<div className='flex ai-fs jc-c' style={{ gap: 30, marginTop: 10, height: 48 }}>
							<p className='price'>${type === "monthly" ? priceMonth : priceYear}</p>
							<p className='duration'>{type === "monthly" ? "/ Month" : "/ Year"}</p>
						</div>
					)}

					<p className='desc'>{description}</p>

					<div className='options' style={{ marginTop: 33 }}>
						{options.map(({ title: optionTitle, checked }, i) => (
							<div key={i} className='flex ai-c' style={{ marginBottom: 10 }}>
								<p className='option' style={{ color: checked ? "#121d2a" : "#abbac3" }}>
									- {optionTitle}
								</p>
							</div>
						))}
					</div>
				</div>

				<div style={{ marginTop: 35 }}>
					<p className='nb'>{buttonDescription}</p>
					<div className='btn'>{buttonTitle}</div>
				</div>
			</div>

			<style jsx>{`
				.pricing {
					padding: 24px 31px 34px;
					border-top-left-radius: 30px;
					border-bottom-right-radius: 30px;
					border: 1px solid #5463ff;
					cursor: pointer;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.active {
					background: #5463ff;
				}

				.active .title,
				.active .duration,
				.active .desc,
				.active .price,
				.active .option {
					color: #fff !important;
				}

				.active .btn {
					background: #c3ddff;
					color: #2c2c2c;
				}

				.title {
					font-size: 23px;
					text-align: center;
				}

				.price {
					font-size: 48px;
					line-height: 48px;
				}

				.price-no-duration {
					font-size: 26px;
					line-height: 26px;
					text-align: center;
				}

				.duration {
					font-size: 17px;
					margin-top: 10px;
				}

				.desc {
					font-size: 14px;
					line-height: 21px;
					text-align: left;
					margin-top: 15px;
				}

				.option {
					font-size: 15px;
				}

				.nb {
					font-size: 12px;
				}

				.btn {
					width: 100%;
					padding: 15px 40px;
					border: 1px solid #5463ff;
					border-radius: 12px;
					font-weight: 600;
					font-size: 15px;
					color: #5463ff;
					margin-top: 10px;
				}
			`}</style>
		</>
	);
};

export default PricingCard;
