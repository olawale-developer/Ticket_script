const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const input = document.getElementById('input');
const Output = document.getElementById('output');

let final;
let count = 0;

const inputValue = input.value
const ticketArray = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","W","Q","S","X","a","b","c","d","e","f","g","h","w","q","s","x",];
let result = '';
let ticketNum = "";
let amount = 1000;

btn.addEventListener('click', () => {

  for(let i = 0; i < 8; i++){
    let random = Math.floor(Math.random() * ticketArray.length)
    result +=  ticketArray[random]
  }
  document.getElementById("demo2").innerHTML = `Ticket Id: ${result}`

  ticketNum = result
  result = ""

   setInterval(myTimer, 60000);
    function myTimer() {
    final = amount += 200
    }

    setInterval(my, 1000);
    function my() {
     count += 1
    }

})
 
btn1.addEventListener('click', () => { 
   
    if(input.value === ticketNum){
   if(final === undefined){
    document.getElementById("demo").innerHTML = ` Amount: N${amount}`
   }else{
    document.getElementById("demo").innerHTML = `Amount: N${final}`
   }

   if(count < 60){
        document.getElementById("demo1").innerHTML = ` Time Spent: ${count} Sec`
    }
    if(count >= 60){
        const mins = count / 60;
        
        document.getElementById("demo1").innerHTML = ` Time Spent: ${mins.toFixed(2)} Mins`
    }
    }else{
        document.getElementById("demo").innerHTML = `enter valid ticket `
    } 
    
    
  
})
