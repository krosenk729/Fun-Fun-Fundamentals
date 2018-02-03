// https://visualgo.net/en

/* Bubble Sort */
// going through each item in array
// if this item is bigger than next item, swap
// repeat until no swaps are made
/* O(n^2) */
function myBubble( arr ){
	let wasSwapped = true;
	while(wasSwapped){
		wasSwapped = false;
		for(let i=1, x=arr.length; i<x; i++){
			if( arr[i] < arr[i-1] ){
				[arr[i], arr[i-1]] = [arr[i-1], arr[i]];
				wasSwapped = true;
			}
		}
	}
	console.log(arr);
}

myBubble([6, 7, 8, 1, 5, 1, 1, 2, 20]);

/* Comb Sort */
// loop through array, comparing this value with this value plus a gap
// the gap starts as a portion of length / factor
// as the sorting continues, the gap is updatedd to be smaller and smaller
// once the gap reaches 1, the array is sorted
function myComb( arr ){
	let isSorted = false;
	let shrink = 1.3;
	let gap = arr.length;

	while(!isSorted){
		gap = Math.max(Math.floor(gap/shrink), 1);
		if(gap === 1){ 
			isSorted = true; 
		}
		
		for(let i = 0, x = arr.length; i + gap < x; i++ ){
			if(arr[i] > arr[i+gap]){
				[arr[i], arr[i+gap]] = [arr[i+gap], arr[i]];
				isSorted = false;
			}
		}
	}

	console.log(arr);
}

myComb([6, 7, 8, 1, 5, 1, 1, 2, 20]);

/* Insertion Sort */
// loop through array, taking each value and inserting it in preceeding
// position so that it is "sorted"

function myInsert( arr ){
	for(let i = 1, x = arr.length; i < x ; i++){
		if( arr[i-1] > arr[i] ){

			let a1 = arr.slice(0, i-1);
			let a2 = arr.slice(i+1);
			a2.unshift(arr[i-1]);

			let x = arr[i];
			for(let j = a1.length-1; j >= 0; j--){
				if( a1[j] > x ){
					a2.unshift(a1.pop());
				}else{
					break;
				}
			}
			arr = a1.concat(x, a2);
		}
	}

	console.log(arr);
}

myInsert([6, 7, 8, 1, 5, 1, 1, 2, 20]);
