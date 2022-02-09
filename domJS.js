function clickBtn() {
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const input3 = document.createElement("button");
  const text1 = document.createTextNode("Username");
  const text2 = document.createTextNode("Password");
  const text3 = document.createTextNode("Login");

  let existDiv = document.getElementById("div1");

  input1.appendChild(text1);
  input2.appendChild(text2);
  input3.appendChild(text3);

  existDiv.appendChild(input1);
  existDiv.appendChild(input2);
  existDiv.appendChild(input3);
}

document.getElementById("btnStart").addEventListener("click", clickBtn);
