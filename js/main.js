// input for both age and name
// take inputs and put the results on the page

function writeName() {
    var welcomeMessage = document.getElementById('welcome')
    var name = document.getElementById('name')
    var age = document.getElementById('age')
    // inputs message into blank <p> 
    welcomeMessage.innerHTML = 'Welcome ' + name.value + '!' + ' Thank you for being alive for ' + age.value + ' years :)';
}