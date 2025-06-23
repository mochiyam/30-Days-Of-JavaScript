function myFunction() {
  let person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
  const agree = confirm('Are you sure you that\'s your name? ')
  console.log(agree) 
}