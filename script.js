// const buttonSubmit = document.getElementById("buttonSubmit");

// buttonSubmit.addEventListener("click", alert(captureInformation()));

// function captureInformation()
// {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const age = document.getElementById("number").value;
//   const sex = document.querySelector("input[name='sex']:checked").value;
//   const ownMoreComputers = document.getElementById("dropdown").value;
//   const osList = document.querySelectorAll("input[name='os']:checked");
//   const comment = document.getElementById("comments").value;
//   let message = "";

//   message += "Your information was...\n";
//   message += "Name: " + name + "\n";
//   message += "Email: " + email + "\n";
//   if(message) message += "Age: " + age + "\n";
//   message += "Sex: " + sex + "\n";
//   message += "Do you own more than one computer?: " + ownMoreComputers + "\n";
//   message += "Operating systems you use: \n";

//   for(let i = 0; i < osList.length; i++)
//   {
//     message += "- " + osList[i].value + "\n";
//   }

//   if(comment) message += "Comment: " + comment + "\n";
//   return message;
// }