// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1m09X1tdhpTdmJt5DDiu-RoQqSb07S2o",
    authDomain: "cbc2019-d1813.firebaseapp.com",
    databaseURL: "https://cbc2019-d1813.firebaseio.com",
    projectId: "cbc2019-d1813",
    storageBucket: "cbc2019-d1813.appspot.com",
    messagingSenderId: "539021525066"
};
firebase.initializeApp(config);

var database = firebase.database();

var name;
var role;
var date;
var months;
var rate;
var billed;


database.ref().on("child_added", function (childSnapshot) {
    // Create new row
    var newRow = $("<tr>");

    // Create new data point in row for name .. etc
    var nameData = $("<td>");
    nameData.text(childSnapshot.val().employeeName);
    newRow.append(nameData);

    var roleData = $("<td>");
    roleData.text(childSnapshot.val().employeeRole);
    newRow.append(roleData);

    var dateData = $("<td>");
    dateData.text(childSnapshot.val().employeeDate);
    newRow.append(dateData);

    var monthData = $("<td>");
    monthData.text(monthsWorked);
    newRow.append(monthData);

    var rateData = $("<td>");
    rateData.text(childSnapshot.val().employeeRate);
    newRow.append(rateData);

    var billingData = $("<td>");
    billingData.text(totalBilled);
    newRow.append(billingData);

    // Add our new row to our existing table
    $("tbody").append(newRow);
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


// When given new info, and submit is pressed
$("#submit").on("click", function (event) {
    event.preventDefault();

    // Get values from input forms
    name = $("#name").val();
    role = $("#role").val();
    date = $("#date").val();
    rate = $("#rate").val();

    // Create new row
    var newRow = $("<tr>");

    // Create new data point in row for name .. etc
    var nameData = $("<td>");
    nameData.text(name);
    newRow.append(nameData);

    var roleData = $("<td>");
    roleData.text(role);
    newRow.append(roleData);

    var dateData = $("<td>");
    dateData.text(date);
    newRow.append(dateData);

    var monthData = $("<td>");
    monthData.text(monthsWorked);
    newRow.append(monthData);

    var rateData = $("<td>");
    rateData.text(rate);
    newRow.append(rateData);

    var billingData = $("<td>");
    billingData.text(totalBilled);
    newRow.append(billingData);

    // Add our new row to our existing table
    $("tbody").append(newRow);

    // Save our newly inputted info to firebase! 
    database.ref().push({
        employeeName: name,
        employeeRole: role,
        employeeDate: date,
        employeeRate: rate,
    });

    // Clear input fields
    $("#name").val("");
    $("#role").val("");
    $("#date").val("");
    $("#months").val("");
    $("#rate").val("");
});

// Calculate months worked
function monthsWorked() {
    
}

// Calculate total amount billed
function totalBilled() {
    total = months * rate
    return total;
}
