//მაგალითი 1

for (let i = 5; i < 100; i++) {
    console.log(i)
} 

//მაგალითი 2

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
    if (array1[1] > 0 && array1 [i] < 10) {
    console.log (array1[i]);
    }
}


//მაგალითი 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('არის');
for (let element of array2) {
    if (element = 5) {
        break;
    }
    console.log(element)
} 

//მაგალითი 4

let array3= [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array3.length; i++)
{ sum = array3[i]}
console.log(sum);


//მაგალითი 5

let array4= [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < array4.length; i++) 
{sum1 = array4 [i] /5 }
console.log(sum1);


//მაგალითი 6

let array5 = [1, 2, 3, 7, 6, 9];
for (let element of array5) {
    if (element =7 ) {
        continue
    }
}
console.log(element);


//მაგალითი 7 

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };
  
  console.log (user [studentstatus]);


//მაგალითი 8 

let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

if (user2 [age] < 18 & user2 [studentstatus] == "active") 
{ console.log('hello user');}
if (user2[name] == "levani")
{console.log("hello levani")}
if (user2 [studentstatus] == "active" || (user2) [age] <25)
{console.log ("hello anna")}


//მაგალითი 9

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for ( let element of array6){
    if (element % 2 == 0)
    {console.log(element)}
}


//მაგალითი 10

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (element of users )
 if (element.status = true)
{console.log(element);}
console.log(user2); 


//მაგალითი 11
 
let array7 = [32, 14, null, '40', 50];
for (let element of array7)
{if (typeof element == 'number' && element % 5==0)}
console.log(element);


//მაგალითი 12

let rray8 = [ [2, -3, 5, 11], [1, -35, –11], [12, -36, -24] ];
 
// აქ ვერ გავიგე ვერაფერი, -11ს შეცდომად მიჩვენებს