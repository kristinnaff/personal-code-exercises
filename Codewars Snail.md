# Codewars: Snail

https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

I like snails. I think they're kinda cute. And "Snail" is a cute little problem. 

The challenge: given a multidimensional array of size n, list all the elements as you follow a path from the top left corner spiraling to the middle. 

Let's get into it.

## A Few Test Cases

I don't yet know where things might get hairy. Still, I expect I should try an array with an odd number of elements, one with an even number, and one that's too small to go through a full rotation of the spiral. 

```javascript
let regularArray = [[1,2,3],
         	       [4,5,6],
         		   [7,8,9]]

let evenArray = [[1,2,3,4],
    	        [5,6,7,8],
       	  	    [9,10,11,12],
        	    [13,14,15,16]]

let tinyArray = [[0,1],
          		[2,3]]

```

And the expected results: 

```javascript
let regularArrayExpectedResult = [1,2,3,6,9,8,7,4,5]
let evenArrayExpectedResult = [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
let tinyArrayExpectedResult = [0,1,3,2]
```

## Initial Thoughts on the Problem

What do I know already? 

- The movement pattern. We move in four different ways in regular sequence. This means that `sidesDrawn % 4` gives the direction of movement: 
  ```
  1: top left to top right
  2: top right to bottom right
  3: bottom right to bottom left
  4: bottom left to top left
  ```

- A function that "traverses" an array from point A to point B and returns the values it crosses would make this easier. Then the problem is to determine the starting and ending points at each turn. 

- Writing out the expected results in a different way may reveal some patterns. First, I'll make this easier by by replacing the array values with their coordinates. (NB: this coordinate set is row, then column!)
  ```
  0,0  0,1  0,2
  1,0  1,1  1,2
  2,0  2,1  2,2
  ```

  Now I'll write out the spiral:

  ```
  0,0  0,1  0,2	// side 1: columns increase. 
  1,2  2,2 		// side 2: row increases. 
  2,1  2,0 		// side 3: columns decreases. 
  1,0 			// side 4: row decrases. 
  1,1 			// side 5: finished! 
  ```

  Now I'll try with four. Again, I'm writing the coordinates first. 

  ```
  0,0  0,1  0,2  0,3
  1,0  1,1  1,2  1,3
  2,0  2,1  2,2  2,3
  3,0  3,1  3,2  3,3
  ```

  And then the spiral: 

  ```
  0,0  0,1  0,2  0,3
  1,3, 2,3  3,3
  3,2  3,1  3,0
  2,0  1,0
  1,1  1,2
  2,2
  2,1
  ```

There's a consistent pattern here: n values, then n-1 values for two rounds, then n-2 values for two rounds, and so on. 

My first run at this problem involved some playing around with coordinate systems, but actually, that just makes it harder.

## Helper Functions

I've gotten in the habit of saying "this would be easier if . . . " or "I wish I had something that would . . . " and writing small functions. I need a function that moves me in a direction.

```javascript
function moveOneStep (startingRow, startingCol, direction) {
        
    let row = startingRow;
    let col = startingCol;
    
    switch(direction) {
        case "down":
            row = startingRow+=1;
            break;
        case "up":
            row = startingRow-=1;
            break;
        case "right":
            col = startingCol+=1;
            break;
        case "left":
            col = startingCol-=1;
            break;
    }
    // console.log(`row: ${row}, col: ${col}`)
    return [row, col]
}
```

Initially I wrote this to return the value at that pair of coordinates rather than the coordinates themselves. But this is more flexible. 

## Tiny Functions

To begin, we receive an array. 

```javascript
let n = array[0].length;
let resultArray = []
```

With the first row being an outlier, we handle it separately. 

```javascript
array[0].map(item => resultArray.push(item));
// resultArray = [1,2,3]
```

Then we specify our coordinates. Instead of starting at 0,0--especially because the first pass doesn't hold to the pattern--we're starting on row 1, col n. 

```javascript
let [row, col] = [1,n]
```

We take n-1 steps down, then n-1 steps left. Why down and left? Good question. Let's specify the sequence of turns here. 

```javascript
let turns = 1; 
let directions = ["right","down","left","up"]
// console.log(directions[turns%4]); -- "down"
for (let i=0; i < n; i++) {
    console.log(moveOneStep(row,col,directions[turns%4]));
}

```







## Helper Functions

I've gotten in the habit of saying "this would be easier if . . . " or "I wish I had something that would . . . " and writing small functions. 

```javascript
function moveOneStep (array, startingRow, startingCol, direction) {
        
    let row = startingRow;
    let col = startingCol;
    
    switch(direction) {
        case "down":
            row = startingRow+=1;
            break;
        case "up":
            row = startingRow-=1;
            break;
        case "right":
            col = startingCol+=1;
            break;
        case "left":
            col = startingCol-=1;
            break;
    }
    // console.log(`row: ${row}, col: ${col}`)
    return array[row][col];
}
```

Here's another version:

```javascript
Array.prototype.moveOneStep = function (startingRow, startingCol, direction) {
  direction == "down"
    ? (returnValue = this[startingRow + 1][startingCol])
    : direction == "up"
    ? (returnValue = this[startingRow - 1][startingCol])
    : direction == "right"
    ? (returnValue = this[startingRow][startingCol + 1])
    : direction == "left"
    ? (returnValue = this[startingRow][startingCol - 1])
    : (returnValue = "Something went wrong.");
  return returnValue;
}
```

Ideally there would be some error checking here. You shouldn't be able to take a left if cols = 0, for example, but such safeties are beyond the scope of this exercise in my opinion. 

