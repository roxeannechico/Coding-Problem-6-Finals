let numbers = [];

while (numbers.length < 10) {
  let input = prompt("Enter a number:");
  let num = parseInt(input);
  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    alert("Please enter a valid number:");
  }
}

function bubSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(`Swapping ${arr[j]} with ${arr[j + 1]} at position ${j} and ${j + 1}`);
      }
    }
  }
  return arr;
}
const sortedArray = bubSort(numbers);

console.log("Sorted Array:", sortedArray);