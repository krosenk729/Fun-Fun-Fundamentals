// ******************************************
const randomArray = function(len = 10){
	return new Array(len).fill(0).map( i => Math.floor( Math.random() * 100 ));
}
// ******************************************

/*******************************************
Bubble Sort
*/

function bubbleSort(arr) {
	let is_done = false;
	let top_index = arr.length - 1;

	while(!is_done){
		is_done = true;
		// console.log(arr, `running another while loop...`);
		for(let i = 0, x = top_index; i < x; i ++){
			// console.log(arr, `checking arr[i = ${i}] = ${arr[i]} versus arr[i +1 = ${i+1}] = ${arr[i+1]}`);
			if(arr[i] > arr[i+1]){
				// console.log(arr, `swapping ${arr[i]} and ${arr[i+1]}`);
				[arr[i], arr[i+1]] = [arr[i+1], arr[i]];
				is_done = false;
			}
		}
		top_index --;
	}

	return arr;
}

bubbleSort(randomArray(100));

/*******************************************
Insertion Sort
*/

function insertSort(arr){

	for(let i = 1, x = arr.length; i < x; i++){
		// console.log(arr, `iteration i = ${i}`);
		for(let j = i; j > 0; j--){
			// console.log(arr, `checking arr[j = ${j}] = ${arr[j]} versus arr[j-1 = ${j-1}] = ${arr[j-1]}`);
			if(arr[j-1] > arr[j]){
				// console.log(arr, `sawpping ${arr[j]} and ${arr[j-1]}`);
				[arr[j-1], arr[j]] = [arr[j], arr[j-1]];
			} else {
				break;
			}
		}
	}

	return arr;
}

insertSort(randomArray(100));


/*******************************************
Merge Sort
*/

function mergeSort(arr){

	if(arr.length <= 1){
		return arr;
	} else {
		const split = Math.floor(arr.length/2);
		const [half1, half2] = [arr.slice(0, split), arr.slice(split)];

		return mergeArrays(mergeSort(half1), mergeSort(half2));
	}

	function mergeArrays(arr1, arr2){
		let merged = [];

		while(arr1.length && arr2.length){
			if(arr1[0] < arr2[0] ){
				merged.push( arr1.shift() );
			} else {
				merged.push( arr2.shift() );
			}
		}

		if(arr1.length) merged = [...merged, ...arr1]
		if(arr2.length) merged = [...merged, ...arr2]

		return merged;
	}
}

mergeSort(randomArray(100));


/*******************************************
Quick Sort
*/

function quickSort(arr){

	if(arr.length <= 1){
		return arr;
	} else {
		const pivot = arr.pop(); 

		const lessThanArr = arr.filter( i => i <= pivot);
		const greaterThanArr = arr.filter( i => i > pivot);

		return [...quickSort(lessThanArr), pivot, ...quickSort(greaterThanArr)];
	}

}

quickSort(randomArray(50));
