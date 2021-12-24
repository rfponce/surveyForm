function captureInformation()
{
  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("number").value;
  const sex = document.querySelector("input[name='sex']:checked").value;
  const ownMoreComputers = document.getElementById("dropdown").value;
  const osList = document.querySelectorAll("input[name='os']:checked");
  const comment = document.getElementById("comments").value;
  let info = "";
  
  info += "Your information was...\n";
  info += "Name: " + fullName + "\n";
  info += "Email: " + email + "\n";
  if(info) info += "Age: " + age + "\n";
  info += "Sex: " + sex + "\n";
  info += "Do you own more than one computer?: " + ownMoreComputers + "\n";
  info += "Operating systems you use: \n";

  for(let i = 0; i < osList.length; i++)
  {
    info += "- " + osList[i].value + "\n";
  }

  if(comment) info += "Comment: " + comment + "\n";

  console.log(info);
}

function depuracion() // *** For debugging purposes only ***
{
  document.getElementById("name").value = "Juan Pérez";
  document.getElementById("email").value = "hola@fabianponce.dev";
  document.getElementById("number").value = "41";
  document.querySelector("input[value='male']").checked = true;
  document.getElementById("dropdown").value = "yes";
  document.querySelector("input[name='os'][value='windows']").checked = true;
  document.querySelector("input[name='os'][value='linux']").checked = true;
  document.getElementById("comments").value = "Nothing to add...";
}

const form = document.getElementById("survey-form");

form.addEventListener("submit", function(event)
{
  const windowsCheckbox = document.querySelector("input[name='os'][value='windows']").checked;
  const linuxCheckbox = document.querySelector("input[name='os'][value='linux']").checked;
  const macosCheckbox = document.querySelector("input[name='os'][value='macos']").checked;
  const otherOsCheckbox = document.querySelector("input[name='os'][value='other']").checked;
  
  event.preventDefault();
  
  if(windowsCheckbox || linuxCheckbox || macosCheckbox || otherOsCheckbox) // if any of them is checked
  {
    captureInformation(); 
  }
  else
  {
    const osCheckboxsField = document.querySelector("#osField");

    osCheckboxsField.style.border = "4px solid red";
    alert("Please select an operating system.");
  }
}
);