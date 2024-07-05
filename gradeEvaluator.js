/*Mini Project: Grade Evaluator
Difficulty Level: 3

Description:
Create a function that evaluates a student's grade based on a numerical score. Here are the grading criteria:

Scores 90 and above: 'A'
Scores between 80 and 89: 'B'
Scores between 70 and 79: 'C'
Scores between 60 and 69: 'D'
Scores below 60: 'F'*/


function gradeEvaluator (score) {
    if (score >= 90) {
        return 'A'
    }else if (score >= 80) {
        return 'B'
    }else if (score >= 70) {
        return 'C';
    }else if (score >= 60) {
        return 'D';
    }else {
        return 'F';
    }
}

console.log(gradeEvaluator(52))
console.log(gradeEvaluator(89))
