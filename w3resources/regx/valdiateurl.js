/*
Validate URL

Write a JavaScript function
to check whether a given value is a valid URL or not.

Click me to see the solution

*/
function check_url(url) {
    let regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/\S*)?$/;
    let result = url.match(regex);
    if (result) {
        return 'Valdtion Url';
    } else {
        return "Not Valdtion Url"
    }
}

console.log(check_url("https://www.google.com")); // true
console.log(check_url("http://example.org/path")); // true
console.log(check_url("www.test.com")); // true
console.log(check_url("invalid_url")); // false