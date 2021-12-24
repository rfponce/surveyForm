function captureInformation()
{
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("number").value;
  const sex = document.querySelector("input[name='sex']:checked").value;
  const ownMoreComputers = document.getElementById("dropdown").value;
  const osList = document.querySelectorAll("input[name='os']:checked");
  const comment = document.getElementById("comments").value;
  let info = "";

  info += "Your information was...\n";
  info += "Name: " + name + "\n";
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
  return info;
}

function showAlert()
{
  return alert(captureInformation());
}

const buttonSubmit = document.getElementById("send");

buttonSubmit.addEventListener("click", showAlert);