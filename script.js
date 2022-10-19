
                    
function info() {
  let name = prompt("What is your name?");
  let email = prompt("Thanks " + name + "! What is your email?");

  if (name) {
    let response = alert(
      "Appreciate your support " +
        name +
        "! 💖  "
    );
  } else {
    alert(" Sorry we're going to need an email 😞");
  }
}


         

              
              let button = document.querySelector("button");
button.addEventListener("click", info);
