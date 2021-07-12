import React from 'react';
import { gsap } from 'gsap';

const MainPage = () => {
	const mainPageButton = () => {
		gsap.to(".mainPage", {
			x: '-100vw',
			duration: 1.5
		});
		gsap.fromTo(
			'.field',
			{
				x: '100vw',
				duration: 1.5,
			},
			{
				x: 0,
				duration: 1.5,
			},
		);
	}
	return (
		<section className="mainPage">
			<div className="mainPage__container">
				<div className="mainPage__container__title">Multiplication Game</div>
					<div className="mainPage__container__button" onClick={mainPageButton}>
						Play!
					</div>
			</div>
		</section>
	);
};

export default MainPage;
