import Image from "next/image";

const PricingCard = ({ type, title, price, duration, description, options }) => {
	return (
		<>
			<div className={title === "Premium" ? "pricing active" : "pricing"}>
				<p className='title'>{title}</p>
				{duration ? (
					<div className='flex ai-fs jc-c' style={{ gap: 30, marginTop: 10, height: 48 }}>
						<p className='price'>${price * (type === "monthly" ? 1 : 10)}</p>
						<p className='duration'>{title === "Premium" && type !== "monthly" ? "/ Yearly" : duration}</p>
					</div>
				) : (
					<div style={{ marginTop: 10, height: 48 }}>
						<p className='price-no-duration'>{price}</p>
					</div>
				)}

				<p className='desc'>{description}</p>

				<div className='options' style={{ marginTop: 33 }}>
					{options.map(({ title: optionTitle, checked }, i) => (
						<div key={i} className='flex ai-c' style={{ gap: 19, marginBottom: 22 }}>
							{checked ? (
								title === "Premium" ? (
									<Image src='/img/pricing/checked-white.svg' width={16} height={10} objectFit='contain' />
								) : (
									<Image src='/img/pricing/checked.svg' width={16} height={10} objectFit='contain' />
								)
							) : (
								<div style={{ width: 16, height: 10 }} />
							)}

							<p className='option' style={{ color: checked ? "#121d2a" : "#abbac3" }}>
								{optionTitle}
							</p>
						</div>
					))}
				</div>

				<div className='btn'>Choose Plan</div>
			</div>

			<style jsx>{`
				.pricing {
					padding: 24px 31px 34px;
					border-top-left-radius: 30px;
					border-bottom-right-radius: 30px;
					border: 1px solid #5463ff;
					cursor: pointer;
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
					color: #121d2a;
				}

				.price {
					font-size: 48px;
					line-height: 48px;
					color: #121d2a;
				}

				.price-no-duration {
					font-size: 26px;
					line-height: 26px;
					text-align: center;
					color: #121d2a;
				}

				.duration {
					font-size: 17px;
					color: #96a5ae;
					margin-top: 10px;
				}

				.desc {
					font-size: 14px;
					line-height: 21px;
					text-align: left;
					color: #677177;
					margin-top: 15px;
				}

				.option {
					font-size: 15px;
					color: #121d2a;
				}

				.btn {
					width: 100%;
					padding: 15px 40px;
					border: 1px solid #5463ff;
					border-radius: 12px;
					font-weight: 600;
					font-size: 15px;
					color: #5463ff;
					margin-top: 35px;
				}
			`}</style>
		</>
	);
};

export default PricingCard;
