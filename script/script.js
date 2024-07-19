//Implementing a stack with arrays
let stack =[5,10];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); 
console.log(stack);

//Implementing a queue with arrays
let queue = [2 ,3 ];
queue.push(1);
queue.shift()
console.log(queue);

//Mapping
let array=[6,8,3,4];
let array1=array.map(x=>x*2);
console.log(array1);

//Array filtering
let name1=["jefita","akshalin","jebarson"];
let m1=name1.filter(n1=>n1.length>6);
document.write(m1,"<br>");

//Array finding maximum and minimum
let arr=[10,90,56,23,4];
console.log(Math.min(...arr));
console.log(Math.max(...arr));

  