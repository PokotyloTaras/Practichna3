function GeneratingMatrix(value, min, max) {
    let matrix = [];
    for (let i = 0; i < value; i++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        matrix.push(random);
    }
    return matrix;
}

function isSorted(arr, flag) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (flag && arr[i] > arr[i + 1]) return false;
        if (!flag && arr[i] < arr[i + 1]) return false;
    }
    return true;
}

function bubbleSort(arr, flag) {
    let matrix = [...arr];
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            const condition = flag 
                ? matrix[j] > matrix[j + 1] 
                : matrix[j] < matrix[j + 1];

            if (condition) {
                [matrix[j], matrix[j + 1]] = [matrix[j + 1], matrix[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }

    return isSorted(matrix, flag);
}

function insertionSort(arr, flag) {
    let matrix = [...arr];

    for (let i = 1; i < matrix.length; i++) {
        let current = matrix[i];
        let j = i - 1;

        while (j >= 0 && (flag ? matrix[j] > current : matrix[j] < current)) {
            matrix[j + 1] = matrix[j];
            j--;
        }
        matrix[j + 1] = current;
    }

    return isSorted(matrix, flag);
}

function selectionSort(arr, flag) {
    let matrix = [...arr];

    for (let i = 0; i < matrix.length; i++) {
        let targetIndex = i;
        for (let j = i + 1; j < matrix.length; j++) {
            const condition = flag 
                ? matrix[targetIndex] > matrix[j] 
                : matrix[targetIndex] < matrix[j];

            if (condition) {
                targetIndex = j;
            }
        }
        if (i !== targetIndex) {
            [matrix[i], matrix[targetIndex]] = [matrix[targetIndex], matrix[i]];
        }
    }

    return isSorted(matrix, flag);
}

const array1 = GeneratingMatrix(12523, 1, 100);
const array2 = GeneratingMatrix(32523, -50, 50);

console.log("За зростанням ");
console.log("Bubble Sort:", bubbleSort(array1, true));      
console.log("Insertion Sort:", insertionSort(array1, true));  
console.log("Selection Sort:", selectionSort(array1, true)); 

console.log("\nЗа спаданням");
console.log("Bubble Sort:", bubbleSort(array2, false));      
console.log("Insertion Sort:", insertionSort(array2, false));
console.log("Selection Sort:", selectionSort(array2, false));
