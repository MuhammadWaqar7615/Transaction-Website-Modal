window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const index = localStorage.getItem("index");
  if (!userData[index]) {
    window.location.reload();
    alert("No User Found");
    window.location.href = "loginPage.html";
  }
  
  userData[index].cameraCheck = false;
  localStorage.setItem("userData", JSON.stringify(userData));
  // userData[index].homeCheck = true;
  // localStorage.setItem("userData", JSON.stringify(userData));

  // if(userData.loginCheck == false) {
  //   window.location.href = "loginPage.html"
  // }
  if (!userData || !userData[index].loginCheck) {
    window.location.href = "loginPage.html";
  } else {
    let close = document.querySelector("#close");
    let burg = document.querySelector("#burgur");
    let hamMenu = document.querySelector(".hamMenu");
    let details = document.querySelector(".details");
    let prof = document.querySelector(".profile");
    let icons = document.querySelector(".icons");
    let log = document.querySelector("#log");
    let tranlogs = document.querySelector(".tranLogs");
    let his = document.querySelector("#his");
    let tranHistory = document.querySelector(".tranHistory");
    let login = document.querySelector("#login");
    let loginHistory = document.querySelector(".loginHistory");
    let hamTranLogs = document.querySelector("#hamTranLogs");
    let hamTranHistory = document.querySelector("#hamTranHistory");
    let hamtLogHistory = document.querySelector("#hamLogHistory");
    let accNo = document.querySelector("#num");


    function showMenu() {
      hamMenu.style.display="block";
        prof.style.display="none";
        details.style.display="none";

        burg.style.display="none";
        close.style.display="block";
        prof.style.display="block";
        
      }
      // showMenu();
      close.style.display='none';
      function hideMenu() {
        hamMenu.style.display="none";
        
        close.style.display="none";
        burg.style.display="block";
        prof.style.display="block";
      }
      burg.addEventListener('click', showMenu);
      close.addEventListener('click', hideMenu);

    let logOut = document.querySelector("#logOut");
    logOut.addEventListener("click", () => {
      let index = localStorage.getItem("index");
      let userData = JSON.parse(localStorage.getItem("userData"));
      userData[index].loginCheck = false;
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "loginPage.html"
      
    });
    let delAcc = document.querySelector("#delAcc");
    delAcc.addEventListener("click", () => {
      let delConfirm = document.querySelector(".delConfirm");
      let delConCross = document.querySelector("#delConCross");
      let crossYes = document.querySelector("#crossYes");
      let crossNo = document.querySelector("#crossNo");

      delConfirm.style.display = "block";

      crossNo.addEventListener("click", delPopUp);
      delConCross.addEventListener("click", delPopUp);
      crossYes.addEventListener("click", delAclogCount);

      function delPopUp() {
        console.log("clicked");
        delConfirm.style.display = "none";
        return;
      }

      function delAclogCount() {
        let users = [];
        for (let i = 0; i < userData.length; i++) {
          if (i != index) {
            users.push(userData[i]);
            window.location.reload();
            window.location.href = "loginPage.html";
          }
        }

        localStorage.setItem("userData", JSON.stringify(users));
        window.location.href = "http://127.0.0.1:5500/register.html";
      }
    });

    function showMenu() {
      hamMenu.style.display = "block";
      prof.style.display = "none";

      burg.style.display = "none";
      close.style.display = "block";
    }
    close.style.display = "none";
    function hideMenu() {
      hamMenu.style.display = "none";
      prof.style.display = "block";

      close.style.display = "none";
      burg.style.display = "block";

      tranlogs.style.display = "none";
      tranHistory.style.display = "none";
      loginHistory.style.display = "none";
    }

    hamTranLogs.addEventListener("click", () => {
      prof.style.display = "none";
      hamMenu.style.display = "none";
      details.appendChild(tranlogs);
      details.style.marginTop = "30px";

      tranlogs.style.display = "block";
      tranHistory.style.display = "none";
      loginHistory.style.display = "none";
    });

    hamTranHistory.addEventListener("click", () => {
      prof.style.display = "none";
      hamMenu.style.display = "none";
      details.appendChild(tranHistory);
      details.style.marginTop = "30px";

      tranlogs.style.display = "none";
      tranHistory.style.display = "block";
      loginHistory.style.display = "none";
    });

    hamtLogHistory.addEventListener("click", () => {
      prof.style.display = "none";
      hamMenu.style.display = "none";
      details.appendChild(loginHistory);
      details.style.marginTop = "30px";

      loginHistory.style.display = "block";
      tranlogs.style.display = "none";
      tranHistory.style.display = "none";
    });

    log.addEventListener("click", () => {
      log.style.opacity = "1";
      log.style.textDecorationLine = "underline";
      log.style.textUnderlineOffset = "20px";
      tranlogs.style.display = "block";

      tranHistory.style.display = "none";
      loginHistory.style.display = "none";

      his.style.textDecoration = "none";
      login.style.textDecoration = "none";
      login.style.opacity = "0.7";
      his.style.opacity = "0.7";
    });

    his.addEventListener("click", () => {
      his.style.opacity = "1";
      his.style.textDecorationLine = "underline";
      his.style.textUnderlineOffset = "20px";
      tranHistory.style.display = "block";

      // tranlogs.style.display="none";
      // log.style.textDecoration="none";

      tranlogs.style.display = "none";
      log.style.textDecoration = "none";

      loginHistory.style.display = "none";
      login.style.textDecoration = "none";
      log.style.opacity = "0.7";
      login.style.opacity = "0.7";
    });

    login.addEventListener("click", () => {
      login.style.opacity = "1";
      login.style.textDecorationLine = "underline";
      login.style.textUnderlineOffset = "20px";
      loginHistory.style.display = "block";

      tranlogs.style.display = "none";
      log.style.textDecoration = "none";

      tranHistory.style.display = "none";
      his.style.textDecoration = "none";
      log.style.opacity = "0.7";
      his.style.opacity = "0.7";
    });

    // profile information editing option
    prof.style.cursor = "pointer";

    let profUserName = document.querySelector("#profUserName");
    let profEmail = document.querySelector("#profEmail");
    let profAccNo = document.querySelector("#profAccNo");
    let profBalance = document.querySelector("#profBalance");

    // javascript for profile data
    const userData = JSON.parse(localStorage.getItem("userData"));
    const index = localStorage.getItem("index");
    profUserName.innerText = userData[index].name;
    profEmail.innerText = userData[index].email;
    profAccNo.innerText = userData[index].accountNo;
    profBalance.innerText = userData[index].balance;

    let editInfoBtn = document.querySelector("#editInfoBtn");

    editInfoBtn.addEventListener("click", (event) => {
      let editInfoData = document.querySelector(".editInfoData");

      editInfoData.style.display = "block";
      prof.style.display = "none";

      burg.style.display = "none";
      close.style.display = "block";

      //   editInfoData.style.display="none"
      close.addEventListener("click", () => {
        prof.style.display = "block";
        editInfoData.style.display = "none";
      });

      let inputUser = document.querySelector("#inputUser");
      let inputOldPass = document.querySelector("#inputOldPass");

      editInfoData.addEventListener("submit", (event) => {
        // event.preventDefault();

        if (inputOldPass.value == userData[index].password) {
          if (inputUser.value.length < 3) {
            alert("username cannot be less than 3 characters");
            event.preventDefault();
            return;
          }

          let char = /^[A-Za-z]+$/;
          if (!char.test(inputUser.value)) {
            alert(
              "You cannot add symbols, spaces or numbers in the username feild"
            );
            event.preventDefault();
            return;
          }

          alert("Username changed Successfully");
          userData[index].name = inputUser.value;
          localStorage.setItem("userData", JSON.stringify(userData));
        } else {
          alert("Old Password is incorrect");
          event.preventDefault();
        }

        const passwordRegex =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      });
    });

    //Editing profile picture
    let editProfBtn = document.querySelector("#editProfBtn");
    let userImgBtn = document.querySelector("#userImgBtn");
    let editProfData = document.querySelector(".editProfData");
    editProfBtn.addEventListener("click", (event) => {
      prof.style.display = "none";
      details.style.display = "none";
      editProfData.style.display = "block";
      burg.style.display = "none";
      close.style.display = "block";
      close.addEventListener("click", () => {
        prof.style.display = "block";
        details.style.display = "block";
        editProfData.style.display = "none";
      });

      let delImg = document.querySelector("#delImg");
      delImg.style.marginBottom = "30px";
      delImg.addEventListener("click", () => {
        delete userData[index].image;
        let img = userData[index];
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Image deleted");
        return;
      });

      let userInputPic = document.querySelector("#userInputPic");
      userInputPic.style.marginTop = "30px";
      userInputPic.addEventListener("change", (event) => {
        const fileInput = userInputPic.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
          let url = reader.result;

          userData[index].image = url;

          localStorage.setItem("userData", JSON.stringify(userData));
        });

        reader.readAsDataURL(fileInput);
      });

      userImgBtn.addEventListener("click", () => {
        prof.style.display = "block";
        editProfData.style.display = "none";
        details.style.display = "block";
        window.location.reload();
      });
    });

    // setting profile img
    let profImg = document.querySelector("#profImg");
    JSON.parse(localStorage.getItem("userData"));
    let userImage = userData[index].image;
    profImg.src = userImage;

    // setting camera

    let cameraBtn = document.querySelector("#cameraBtn");
    let video = document.querySelector("#video");
    let captureBtn = document.querySelector("#captureBtn");
    let canvas = document.querySelector("#canvas");
    let img = document.querySelector("#img");

    async function startCam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        video.srcObject = stream;
        video.play();
      } catch (error) {
        alert(error);
        alert("camera not found");
      }
    }
    cameraBtn.addEventListener("click", () => {
      video.style.display = "block";
      captureBtn.style.display = "block";
      delImg.style.display = "block";
      delImg.style.display = "none";
      userInputPic.style.display = "none";
      cameraBtn.style.display = "none";
      userImgBtn.style.display = "none";
      startCam();
    });
    captureBtn.addEventListener("click", () => {
      canvas.style.display = "none";
      video.style.display = "none";
      // delImg.style.display = "block";
      captureBtn.style.display = "none";
      userImgBtn.style.display = "block";

      canvas.width = video.videoWidth;
      canvas.Height = video.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      let pic = canvas.toDataURL("image/png");
      img.src = pic;
      img.style.display = "block";

      delImg.addEventListener("click", () => {
        prof.style.display = "block";
        details.style.display = "block";
        editProfData.style.display = "none";
      });
      userImgBtn.addEventListener("click", () => {
        prof.style.display = "block";
        details.style.display = "block";
        editProfData.style.display = "none";
        userData[index].image = pic;
        localStorage.setItem("userData", JSON.stringify(userData));

        // let profImg = document.querySelector("#profImg");
        // JSON.parse(localStorage.getItem("userData"));
        // profImg.src = profImage;
      });
      return;
    });

    let actualImg = document.querySelector("#profImg");
    let profPic = document.querySelector(".img");
    let isshowing = false;
    profPic.addEventListener("click", () => {
      if (isshowing) {
        actualImg.style.display = "block";
        actualImg.style.width = "100px";
        actualImg.style.height = "100px";
        profPic.style.width = "100px";
        profPic.style.height = "100px";
        let wrap = document.querySelectorAll(".wrap");
        for (let i = 0; i < wrap.length; i++) {
          wrap[i].style.display = "";
        }
        isshowing = false;
        return;
      }
      actualImg.style.display = "block";
      actualImg.style.width = "250px";
      actualImg.style.height = "250px";
      profPic.style.width = "250px";
      profPic.style.height = "250px";
      document.querySelector("#profImg").style.display = "block";
      let wrap = document.querySelectorAll(".wrap");
      for (let i = 0; i < wrap.length; i++) {
        wrap[i].style.display = "none";
      }
      isshowing = true;
      return;
    });

    // Transection Logs

    let tranLogs = document.querySelector(".tranLogs");
    tranLogs.addEventListener("submit", (e) => {
      let amountUser = document.querySelector("#amount");
      let cvNo = document.querySelector("#cv").value;

      let val1 = accNo.value;
      let val2 = amountUser.value;
      let val3 = cvNo;

      let accNum = parseInt(val1);
      let amountclient = parseInt(val2);
      let CVV = parseInt(val3);

      if (accNum < 0 || amountclient < 0 || CVV < 0) {
        alert("You can not put negative Number");
        return;
      }

      if (
        accNo.value.length == 16 &&
        amountUser.value.length <= 1000 &&
        cvNo.length == 3
      ) {
        let num = parseInt(accNo.value);
        let amount = parseInt(amountUser.value);

        let userData = JSON.parse(localStorage.getItem("userData"));

        let userBal = userData[index].balance;
        if (userBal > amount) {
          rem = userData[index].balance - amount;
          userData[index].balance = rem;
          userData[index].tranAmount = amount;
        } else {
          alert("Insufficent Balance");
          return;
        }

        let d = new Date();
        let date = d.toLocaleString();

        let tranLogs = {
          accountNo: num,
          currentBalance: userData[index].balance,
          transaction: userData[index].tranAmount,
          cvv: cvNo,
          date: date,
        };

        userData[index].userTranHis.push(tranLogs);

        localStorage.setItem("userData", JSON.stringify(userData));

        let tranSuccessful = document.querySelector(".tranSuccessful");
        let cardPara1 = document.querySelector("#cardPara1");
        let cardPara2 = document.querySelector("#cardPara2");
        let cardPara3 = document.querySelector("#cardPara3");
        let cardPara4 = document.querySelector("#cardPara4");
        let xMark = document.querySelector("#xMark");
        let succImg = document.querySelector("#succImg");

        tranSuccessful.style.display = "block";
        JSON.parse(localStorage.getItem("userData"));
        let cardImg = userData[index].image;
        succImg.src = cardImg;
        let lastEl = userData[index].userTranHis;
        let cardAccNo = userData[index].accountNo;
        let enteredAmount = parseInt(amountUser.value);

        cardPara1.innerText = accNo.value;
        cardPara2.innerText = lastEl[lastEl.length - 1].date;
        cardPara3.innerText = enteredAmount;
        cardPara4.innerText = lastEl[lastEl.length - 1].currentBalance;

        xMark.addEventListener("click", () => {
          tranSuccessful.style.display = "none";
          window.location.reload();
          return;
        });
        event.preventDefault();
      } else {
        if (accNo.value.length < 16) {
          alert("AclogCount Number is less then 16 digits");
        }
        if (cvNo.length < 3) {
          alert("CVV is less then 3 digit");
        }
      }
    });

    // Creating transaction History table
    let tranTable = document.querySelector("#tranTable > tbody");
    let tranColumn = userData[index].userTranHis;

    let tranlogCount = 0;
    for (let i = 0; i < tranColumn.length; i++) {
      let row = `
      <tr>
        <td id="c1" >${tranColumn[i].accountNo}</td>
        <td id="c2">${tranColumn[i].transaction}</td>
        <td id="c3">${tranColumn[i].cvv}</td>
        <td id="c4">${tranColumn[i].date}</td>
      </tr>
      `;
      tranTable.innerHTML += row;

      if(tranlogCount == 30) {
        return;
      }
      tranlogCount++
    }

    // Modefying transaction Table
    let tranInput = document.querySelector("#tranTableSrch");
    tranInput.addEventListener("input", () => {
      const searchVal = tranInput.value.toLowerCase();
      const rows = document.querySelectorAll("#tranTable tbody tr");
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        let containVal = false;
        cells.forEach((cell) => {
          if (cell.textContent.toLowerCase().includes(searchVal)) {
            containVal = true;
          }
        });
        if (containVal) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });

    // hiding columns

    let chkRec = document.getElementById("chkRec");
    chkRec.addEventListener("click", () => {
      if (chkRec.checked == true) {
        const c1s = document.querySelectorAll("#c1");
        c1s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";
        });
      } else if (chkRec.checked == false) {
        const c1s = document.querySelectorAll("#c1");
        c1s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";
        });
      }
    });

    let chkBal = document.getElementById("chkBal");
    chkBal.addEventListener("click", () => {
      if (chkBal.checked == false) {
        const c2s = document.querySelectorAll("#c2");
        c2s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";
          // document.querySelector('#srchTrBal').style.display = "none"
          // chkBal.style.marginRight = "20px"
        });
      } else if (chkBal.checked == true) {
        const c2s = document.querySelectorAll("#c2");
        c2s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";

          // document.querySelector('#srchTrBal').style.display = "inline-block"
          // chkBal.style.marginRight = "0px"
        });
      }
    });

    let chkCv = document.getElementById("chkCv");
    chkCv.addEventListener("click", () => {
      if (chkCv.checked == false) {
        const c3s = document.querySelectorAll("#c3");
        c3s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";
          // document.querySelector('#srchTrCv').style.display = "none"
          // chkCv.style.marginRight = "20px"
        });
      } else if (chkCv.checked == true) {
        const c3s = document.querySelectorAll("#c3");
        c3s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";
          // document.querySelector('#srchTrCv').style.display = "inline-block"
          // chkCv.style.marginRight = "0px"
        });
      }
    });

    let chkDate = document.getElementById("chkDate");
    chkDate.addEventListener("click", () => {
      if (chkDate.checked == false) {
        const c4s = document.querySelectorAll("#c4");
        c4s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";

          // document.querySelector('#srchTrDt').style.display = "none"
          // chkDate.style.marginRight = "20px"
        });
      } else if (chkDate.checked == true) {
        const c4s = document.querySelectorAll("#c4");
        c4s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";
          elem.style.maxWidth = "";
          // document.querySelector('#srchTrDt').style.display = "inline-block"
          // chkDate.style.marginRight = "0px"
        });
      }
    });

    // Creating login table
    let loginTable = document.querySelector("#loginTable > tbody")
    let logCol = userData[index].userLoginHis;

    let logCount = 0;
    for (let i = 0; i < logCol.length; i++) {
      let row = `
      <tr>
            <td id = c1><img id=logTablePic src = "${userData[index].image || null}"></td>
            <td id = c2>${logCol[i].date}</td>
            <td id = c3>${logCol[i].email}</td>
            <td id = c4>${logCol[i].accountNo}</td>
            <td id = c5>${logCol[i].BrowserDetails}</td>
      </tr>
       `
      loginTable.innerHTML += row;

      if(logCount == 30) {
        return;
      }
      logCount++;
    }

    // Modifying login Table
    let logInput = document.querySelector("#loginTableSrch");
    logInput.addEventListener("input", () => {
      const searchVal = logInput.value.toLowerCase();
      const rows = document.querySelectorAll("table tbody tr");
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        let containVal = false;
        cells.forEach((cell) => {
          if (cell.textContent.toLowerCase().includes(searchVal)) {
            containVal = true;
          }
        });
        if (containVal) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });

    // hiding Table Columns
    
    let logProfImg = document.getElementById("logProfImg");
    logProfImg.addEventListener("click", () => {
      if (logProfImg.checked == false) {
        const c1s = document.querySelectorAll("#c1");
        c1s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";
        });
      } else if (logProfImg.checked == true) {
        const c1s = document.querySelectorAll("#c1");
        c1s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";
        });

      }
    });

    let logDate = document.getElementById("logDate");
    logDate.addEventListener("click", () => {
      if (logDate.checked == false) {
        const c2s = document.querySelectorAll("#c2");
        c2s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";
        });

      } else if (logDate.checked == true) {
        const c2s = document.querySelectorAll("#c2");
        c2s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";
      });
      }
    });

    let logEmail = document.getElementById("logEmail");
    logEmail.addEventListener("click", () => {
      if (logEmail.checked == false) {
        const c3s = document.querySelectorAll("#c3");
        c3s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";
          // document.querySelector('#srchTrBal').style.display = "none"
          // chkBal.style.marginRight = "20px"
        });
      } else if (logEmail.checked == true) {
        const c3s = document.querySelectorAll("#c3");
        c3s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";

          // document.querySelector('#srchTrBal').style.display = "inline-block"
          // chkBal.style.marginRight = "0px"
        });
      }
    });

    let logAccNo = document.getElementById("logAccNo");
    logAccNo.addEventListener("click", () => {
      if (logAccNo.checked == false) {
        const c4s = document.querySelectorAll("#c4");
        c4s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";
          // document.querySelector('#srchTrCv').style.display = "none"
          // chkCv.style.marginRight = "20px"
        });
      } else if (logAccNo.checked == true) {
        const c4s = document.querySelectorAll("#c4");
        c4s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";
          // document.querySelector('#srchTrCv').style.display = "inline-block"
          // chkCv.style.marginRight = "0px"
        });
      }
    });

    let logBrows = document.getElementById("logBrows");
    logBrows.addEventListener("click", () => {
      if (logBrows.checked == false) {
        const c5s = document.querySelectorAll("#c5");
        c5s.forEach((elem) => {
          elem.style.display = "none";
          elem.style.width = "0px";
          elem.style.background = "white";

          // document.querySelector('#srchTrDt').style.display = "none"
          // chkDate.style.marginRight = "20px"
        });
      } else if (logBrows.checked == true) {
        const c5s = document.querySelectorAll("#c5");
        c5s.forEach((elem) => {
          elem.style.display = "";
          elem.style.width = "";
          elem.style.maxWidth = "";
          // document.querySelector('#srchTrDt').style.display = "inline-block"
          // chkDate.style.marginRight = "0px"
        });
      }
    });

  }
};
