let regForm = document.querySelector("form");
regForm.addEventListener("submit", (event) => {
  let name = event.target.fName.value;
  let email = event.target.email.value;
  let password = event.target.password.value;
  let confirmPass = event.target.confirmPass.value;
  let accountNo = Math.floor(Math.random() * 1000000000000000);
  let balance = Math.floor(Math.random() * 14000 + 4000);
  
  

  // var keys = /^[a-zA-Z\-]+$/;
  // if(keys.test(name)) {
  //   alert('Enter the alphabets only')
  // }

  let char = /^[A-Za-z]+$/;
  if(!char.test(name)) {
    alert('You cannot add symbols, spaces or numbers in the username feild')
    event.preventDefault();
    return;
  }

  if(name.length < 3){ 
    console.log(name.length);
    alert('username cannot be less than 3 characters')
    event.preventDefault()
    return;
  }

  
  if(email.length < 10) {
    alert('invalid email')
    event.preventDefault();
    return;
  }
  
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!pattern.test(password)) {
    
    console.log(password.value)
    alert(
      "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    );
    event.preventDefault();
    return;
  }


  if (password != confirmPass) {
    event.preventDefault();
    alert("Password did not match");
    event.preventDefault()
    return;
  } 
  else {
    var userData = JSON.parse(localStorage.getItem("userData")) || [];

    let chk=false
    userData.forEach(element => {
      if(element.name.includes(name) || element.email.includes(email)) {
        alert('user already exist');
        chk=true
        return;
      } 
    });
    if(chk){
      return;
    }

    user = {
      name: name,
      email: email,
      password: password,
      accountNo: accountNo,
      balance: balance,
      BrowserDetails: navigator.userAgent,
      userTranHis: [],
      userLoginHis: [],
    };
    userData.push(user);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registered Successfull");
  }
});
