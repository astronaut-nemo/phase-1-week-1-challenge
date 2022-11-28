// Question: Challenge 1: Student Grade Generator (Toy Problem)
// Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 

// A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

// Get user input from the browser console and save it in the variable 'marks'
let marks = window.prompt("Enter the student marks (0-100)");
console.log(marks);
let grade = '';

switch(true)
{
    case marks > 79:
        console.log('The student\'s grade is: ' + (grade = 'A'));
        break;
    case marks >= 60:
        console.log('The student\'s grade is: ' + (grade = 'B'));
        break;
    case marks >= 49:
        console.log('The student\'s grade is: ' + (grade = 'C'));
        break;
    case marks >= 40:
        console.log('The student\'s grade is: ' + (grade = 'D'));
        break;
    case marks < 40:
        console.log('The student\'s grade is: ' + (grade = 'E'));
        break;
}
