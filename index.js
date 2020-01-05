/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

//greet function receives string of time
function greet(time){
  // remove: from time string and parse single integer, set this to timeNow variable
  let timeNow = parseInt(time.split(':'))
  // if timeNow is less than 12 return and stop
  if (timeNow < 12 ){
    return "Good Morning"
    //if timeNow is greater than 5 return and stop
  } else if (timeNow - 12 > 5) {
    return "Good Evening"
    // if timeNow has not stopped, return and stop
  }else{
    return "Good Afternoon"
  }
}

// displayMessage function receives string as argument
function displayMessage(text){
  // find text containing id of greeting
  let content = document.getElementById('greeting')
  // update text associated with greeting id
  content.innerText = text;
}
