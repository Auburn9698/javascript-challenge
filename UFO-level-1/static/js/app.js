// Declarations:
// from data.js:
var tableData = data;
// Select the button:
var button = d3.select(".btn-default");
// Select the form:
var form = d3.select("#form");
// Select the table body:
var tbody = d3.select("tbody");

// Create event handlers for clicking the button or pressing the enter key:
button.on("click", runEnter);
form.on("submit",runEnter);

// BONUS: Refactor to use Arrow Functions!
tableData.forEach((ufo_sighting) => {
  var row = tbody.append("tr");
  Object.entries(ufo_sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Create the function to run for both events:
function runEnter() {
   // Prevent the page from refreshing:   
    d3.event.preventDefault();
    // Clear table rows:
    tbody.html("")
    // Select the input element and get the raw HTML code:
    var inputElement = d3.select(".form-control");
    // Get the value property of the input element:
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((ufo_sighting) => {
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};