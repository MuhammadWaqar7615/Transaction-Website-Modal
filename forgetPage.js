  let userData = JSON.parse(localStorage.getItem("userData"));

// let conForPass = document.querySelector('#conPass');
// console.log(conForPass);

let form = document.querySelector('form');
form.addEventListener('submit', (event)=> {
    let conPass = event.target.confirmPass.value;
    event.preventDefault()

    // console.log(this.event.target.name.value);
    // console.log(this.event.target.email.value);
    // console.log(this.event.target.password.value);
    // console.log(this.event.target.confirmPass.value);    
    
    
    if(!userData || userData == "") {
        alert("No user Found");
        return;
    }

    for (const el of userData) {
        if(el.name==this.event.target.name.value && el.email==this.event.target.email.value) {
            
            const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (pattern.test(conPass) == false) {
                console.log('conPass: ', conPass)
              alert(
                "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              );
              return;
            }

            if(this.event.target.password.value == this.event.target.confirmPass.value) {

                el.password = this.event.target.password.value;
                alert('Password changed successfuly');
                localStorage.setItem('userData', JSON.stringify(userData))
                window.location.reload();
                window.location.href = "loginPage.html"
            }else {
                alert("password does not match")
                return;
            }
            
        }else {
            alert("Username or Email is incorrect")            
            return;
        }
    }
 
})