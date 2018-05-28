const firstNum = 10;
const secondNum = 33;
const result = firstNum + secondNum;
console.log(result);
const greeting = "Hello";
const pronune = "World!!";
const adding = greeting + pronune;
console.log(adding);
const mdArray = [[9,14],[19,24],[79,43]];
console.log(mdArray[0][1],mdArray[2][0]);
function check(){
    let getingNum =  prompt('Enter a number',"Enter number here.");
    let input = parseInt(getingNum);
    const base = 100;
    if(typeof(input)=="number"){
        if(input>base){
            alert('The number is grater than '+base);
        }else if(input<base){
            alert(input+" is less than "+base);
        }else if(input===base){
            alert(input+" is equal to "+base);
        }else{
            alert('This is not a number');
        }    
    }
}
check();
function another(){
   let string = prompt('Enter a string here\nFor example:"Have a good day"','Enter here');
   const base = "How are your today?";
   if(string==base){
       alert("They match each other.");
   }else{
       alert("This is differnet.");
   }
}
another();
function name (namey){
    if(namey!==""){
        alert('You entred: '+namey);
    }else{
        alert("You didn't enter a name");
    }
}
name(prompt("Enter a name"));
function print(){
    console.log('something');
}
print();
function prize(door){
    const prizes = ['You received an i-phon X !!','You received a PlayStation 4.','You received two free ticket to march'];
    if (door==="2"){
        alert(prizes[Math.floor(Math.random()*3)]);
    }else if (door=="1"){
        alert(prizes[Math.floor(Math.random()*3)]);
    }else if(door=="3"){
        alert(prizes[Math.floor(Math.random()*3)]);
    }else{
        alert ('Didn\'t pick one of the number');
    }
}
prize(prompt('Pick one of the three door \n 1 2 3 ','Pick'));
