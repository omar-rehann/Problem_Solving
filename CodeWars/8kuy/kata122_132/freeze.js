let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

myData.push = function() {
    // فاضي = مش هيضيف حاج
    return 0
};

myData.push("Name");

console.log(myData);
// ['Osama', 'Mohamed', 'Elsayed', 'Elzero']