
// Declarations:
// from data.js:
var tableData = data;
// Select the button:
var button = d3.select("#button");
// Select the form:
var form = d3.select("#form");
// Select the table body:
var tbody = d3.select("tbody");

// Create event handlers for clicking the button or pressing the enter key:
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events:
function runEnter() {
   // Prevent the page from refreshing:   
    d3.event.preventDefault();

}