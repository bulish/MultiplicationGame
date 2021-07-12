import React, { useState } from 'react';
import {gsap} from 'gsap';
import './styles.scss';
import MainPage from './components/mainPage/mainPage';
import Field from './components/field/field';
import data from './data.js';

function App() {
	const [questions, setQuestions] = useState(data());
	return (
		<div>
			<MainPage />
			<Field questions={questions} setQuestions={setQuestions} />
		</div>
	);
}

export default App;
