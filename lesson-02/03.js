/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = Math.floor(Math.random() * 101) // тестовое значение, можно изменять
let grade
// your code
if (49 >= score) {
    grade = 'F'
} else if (score >= 50 && 69 >= score) {
    grade = 'D' 
} else if (score >= 70 && 79 >= score) {
    grade = 'C'  
} else if (score >= 80 && 89 >= score) {
    grade = 'B'
} else if (score >= 90 && 100 >= score) 
    grade = 'A' 
console.log(`Your score is : ${score}  and your grade is : ${grade}`); // Выводим оценку