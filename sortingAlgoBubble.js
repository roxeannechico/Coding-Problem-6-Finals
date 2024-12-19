const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let inputNumbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];
let currentIndex = 0;


function askForNumber() {
    if (currentIndex < inputNumbers.length) {
        rl.question(`Enter number ${currentIndex + 1} (default ${inputNumbers[currentIndex]}): `, (input) => {
            let number = input ? parseInt(input) : inputNumbers[currentIndex]; // Use default if input is empty
            arr.push(number);
            currentIndex++;
            askForNumber();
        });
    } else {
        processBubbleSort();
    }
}


function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        console.log(`Pass ${i + 1}:`);
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                console.log(`Swapped ${arr[j]} and ${arr[j + 1]}`);
            }
        }
        console.log(`Array after pass ${i + 1}: ${arr.join(", ")}`);
        if (!swapped) break; 
    }
    return arr;
}


function processBubbleSort() {
    console.log("Original Array: ", arr.join(", "));
    let sortedArray = bubbleSort(arr);
    console.log("Sorted Array: ", sortedArray.join(", "));
    rl.close();
}


askForNumber();