// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(firstValue, secondValue, thirdValue) {
    // ищем большее число
    if (firstValue > secondValue && secondValue > thirdValue) {
        console.log(firstValue);
    } else if (thirdValue > secondValue && secondValue > firstValue) {
        console.log(thirdValue);        
    } else {
        console.log(secondValue);
    }
    
} 
findLargest(1,2,3)
