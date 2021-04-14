/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  console.log(typeof timeString)
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet( parseInt (str){
  if (str <12) {
    return "Good Morning"

  } else if(str>12 && str<17){
    return "Good Afternoon"

  }
  else if(str>17){
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(str){
  const h1 = document.getElementById('greeting')
}
