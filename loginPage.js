const userData = JSON.parse(localStorage.getItem("userData"));
const index = localStorage.getItem("index");

try {
  if ((homeCheck = userData[index].loginCheck)) {
    window.location.href = "home.html";
  }
} catch (error) {
  console.log("error of ", error);
}
let loginForm = document.querySelector("form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let loginPic = document.querySelector(".loginPic");
  let logEmail = event.target.email.value;
  let logPassword = event.target.password.value;

  if (!userData || userData == "") {
    alert("No user Found...");
    return;
  }
      

  for (let i = 0; i < userData.length; i++) {
    userData[i].loginCheck = false;
    if (userData[i].email == logEmail && userData[i].password == logPassword && userData != null) {
      localStorage.setItem("index", i);
      
      
      
      let date = new Date().toLocaleString();
      let his = {
        profile: userData[i].image,
        name: userData[i].name,
        email: userData[i].email,
        BrowserDetails: navigator.userAgent,
        date: date,
        accountNo: userData[i].accountNo,
      };

      userData[i].loginCheck = true;
      userData[i].cameraCheck = true;

      userData[i].userLoginHis.push(his);
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "camera.html";
      event.preventDefault();
      alert("verification Successful");
      return;
      break;
    } else {
    }
  event.preventDefault()

  }
  alert("Email or Password is incorrect");
  event.preventDefault()
});
