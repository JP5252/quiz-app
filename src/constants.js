//Quiz questions
export const jsQuizz = {
	questions: [
	  {
		question:
		  "Which statement will properly free allocated memory?",
		choices: [
		  "dealloc()",
		  "free()",
		  "Both A and B",
		  "None of the above",
		],
		type: "MCQs",
		correctAnswer: "free()",
	  },
	  {
		question: "Is C a compiled or interpreted language?",
		choices: [
		  "Compiled",
		  "Interpreted",
		  "None of the above",
		  "I have no idea what that means",
		],
		type: "MCQs",
		correctAnswer: "Compiled",
	  },
	  {
		question:
		  "How can you pass the integer variables num1 and num2 into the function addnum(int num1, int num2) in C?",
		choices: [
			"addnum(num1, num2)",
			"addnum(num1, num2);", 
			"addnum(&num1, &num2);", 
			"addnum(*num1, *num2);"],
		type: "MCQs",
		correctAnswer: "addnum(&num1, &num2);",
	  },
	  {
		question: "Who created the C language?",
		choices: [
			"George Washington", 
			"Bill Gates", 
			"Clint Reginald", 
			"Dennis Ritchie"],
		type: "MCQs",
		correctAnswer: "Dennis Ritchie",
	  },
	  {
		question: "What is the name of the C compiler?",
		choices: [
		  "GCC",
		  "GMCS",
		  "C Realtime Compiler",
		  "None of the above",
		],
		type: "MCQs",
		correctAnswer: "GCC",
	  },
	],
  };

//for keeping track of user results
export const resultInitialState = {
	score: 0,
	correctAnswers: 0,
	wrongAnswers: 0
};