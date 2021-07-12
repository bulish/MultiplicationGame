import React, {useState, useRef} from 'react';
import { gsap } from 'gsap';

const Field = ({ questions }) => {
    let [count, setCount] = useState(1);
    let [index, setIndex] = useState(0);
    let [score, setScore] = useState(0);
    const input = useRef(null);
    const container = useRef(null);

    const clickFunction = () => {
        if (count !== 50) {
            setCount(count + 1);
            if (eval(input.current.value) === questions[index].result){
                setScore(score + 1);
            }
            input.current.value = "";
            setIndex(index + 1);
        } else {
            container.current.innerHTML = 'Done!';
        }
    }

    const TitleFunction = () => {
			gsap.fromTo(
				'.field',
				{
					x: 0,
					duration: 1.5,
				},
				{
					x: '100vw',
					duration: 1.5,
				},
			);
            gsap.fromTo('.mainPage', {
				x: '-100vw',
				duration: 1.5,
			}, {
                x: 0,
                duration: 1.5
            });
		};

	return (
		<section className="field">
            <div className="title" onClick={TitleFunction}>Multiplication Game</div>
			<div className="field__container" ref={container}>
				<div className="field__container__question">{questions[index].question}</div>
				<input type="number" className="field__container__input" ref={input}/>
				<div className="field__container__button" onClick={clickFunction}>Submit!</div>
			</div>
            <div className="count">{count}/50</div>
            <div className="score">Score: {score}</div>
		</section>
	);
};

export default Field;
