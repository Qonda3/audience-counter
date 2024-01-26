// document.getElementById("count-el").innerText = 5

// let count = 5
// count = count + 1 

// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
// grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment() {
    count += 1
    // set countEl's innerText to the count
    countEl.textContent = count
}


function save() {
    //Variable that contains both the count and the dash separator
    let result = count + " - "
    saveEl.textContent += result
    console.log(count)
    countEl.textConent = 0
    count = 0
}