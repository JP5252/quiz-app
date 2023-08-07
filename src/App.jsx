import { useEffect, useState } from "react";
import Quiz from "./Quiz";

function App() {
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		getQuestions();
	}, []);

	const getQuestions = async () => {
		try {
			const response = await fetch(
				"https://64d0405bff953154bb78b8ef.mockapi.io/questions"
			);
			const questionsResponse = await response.json();
			setQuestions(questionsResponse);
		} catch(error) {
			console.log(error);
		}
	};

	return (questions.length && <Quiz questions={questions}/>);
}

export default App
