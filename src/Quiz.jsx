import { useState } from "react";
import { resultInitialState } from "./constants";

const Quiz = ({ questions }) => {

	//initializing variables
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerIdx, setAnswerIdx] = useState(null);
	const [answer, setAnswer] = useState(null);
	const [result, setResult] = useState(resultInitialState);
	const [showResult, setShowResult] = useState(false);
	const [inputAnswer, setInputAnswer] = useState('');
	const { question, choices, correctAnswer, type } = questions[currentQuestion];

	//when an answer button is clicked
	const onAnswerClick = (answer, index) => {
		setAnswerIdx(index);
		if(answer === correctAnswer) {
			setAnswer(true);
		} else setAnswer(false);
	}

	//When next button is clicked
	const onClickNext = () => {
		setAnswerIdx(null);
		setResult((prev) => 
		answer
		? {
			...prev,
			score: prev.score + 5,
			correctAnswers: prev.correctAnswers + 1
		} 
		: {
			...prev,
			wrongAnswers: prev.wrongAnswers + 1,
		});

		if(currentQuestion !== questions.length - 1) {
			setCurrentQuestion((prev) => prev + 1);
		} else {
			setCurrentQuestion(0);
			setShowResult(true);
		}
	};

	//user presses try again on result page
	const onTryAgain = () => {
		setResult(resultInitialState);
		setShowResult(false);
	}

	//for handling the input change in the input box
	const handleInputChange = (evt) => {
		setInputAnswer(evt.target.value);

		if(evt.target.value === correctAnswer) {
			setAnswer(true);
		} else {
			setAnswer(false);
		}
	}

	//chooses UI for the question based on the type, Multiple choice is default
	const getAnswerUI = () => {
		
		if (type === 'FIB') {
			return <input value={inputAnswer} onChange={handleInputChange}/>;
		}

		return (
			<ul>
				{
					choices.map((answer, index) => (
						<li 
							onClick={() => onAnswerClick(answer, index)}
							key={answer}
							className={answerIdx === index ? 'selected-answer' : null}
						>
							{answer}
						</li>
					))
				}
			</ul>
		)
	}

	return (
	<div className="quiz-container">
		{!showResult ? (		<>
			<span className="active-question-no">{currentQuestion + 1}</span>
			<span className="total-question">/{questions.length}</span>
			<h2>{question}</h2>
			{getAnswerUI()}
			<div className="footer">
				<button onClick={onClickNext} 
				disabled={answerIdx === null && !inputAnswer}>
					{currentQuestion === questions.length - 1 ? "Finish" : "Next"}
				</button>
			</div>
		</>) : <div className="result">
			<h3>result</h3>
			<p>
				Total Questions: <span>{questions.length}</span>
			</p>
			<p>
				Total Score: <span>{result.score}</span>
			</p>
			<p>
				Correct Answers: <span>{result.correctAnswers}</span>
			</p>
			<p>
				Wrong Answers: <span>{result.wrongAnswers}</span>
			</p>
			<button onClick={onTryAgain}>Try Again</button>
			</div>}

	</div>
	);
};

export default Quiz;