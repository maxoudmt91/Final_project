const pingApi = () => {
    console.log({ value: document.getElementById("inputNumber").value });
    fetch(
      "/api/ping?" +
        new URLSearchParams({
          value: document.getElementById("inputNumber").value,
        })
    ).then((res) => res.json());
  };
  
  const executeFunction = () => {
    console.log("test");
    var functionSwitch = document.getElementById("request").value;
    switch (functionSwitch) {
      case "create": {
        getCreation();
        break;
      }
      case "read": {
        getRead();
        break;
      }
      case "update": {
        getUpdate();
        break;
      }
      case "delete": {
        getDelete();
        break;
      }
      case "createReservation": {
        getCreationReservation();
        break;
      }
      case "readReservation": {
        getseereservation();
        break;
      }
    }
  };
  
  const getRead = () => {
    var id = document.getElementById("userId").value;
    var lastname = document.getElementById("userLastName").value;
    var firstname = document.getElementById("userFirstName").value;
    var number = document.getElementById("userNumber").value;
    if (id != "") {
      console.log(id);
      fetch("/user_db/" + id)
        .then((data) => data.json())
        .then((data) => alert(JSON.stringify(data)));
    } else {
      fetch("/user_db/")
        .then((data) => data.json())
        .then((data) => alert(JSON.stringify(data)));
    }
  };
  
  const getCreation = () => {
    var userlastname = document.getElementById("userLastName").value;
    var userfirstname = document.getElementById("userFirstName").value;
    var userage = document.getElementById("userAge").value;
    var usernumber = document.getElementById("userNumber").value;
  
    var payload = {
        lastname: userlastname,
        firstname: userfirstname,
        user_number: usernumber,
        age: userage,
    };
  
    fetch("/user_db/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => alert(JSON.stringify(res)));
  };
  
  const getCreationReservation = () => {
    
    var reservlastname = document.getElementById("rLastname").value;
    var reservfirstname = document.getElementById("rFirstname").value;
    var reservdata = document.getElementById("rDate").value;
    var reservplayerid = document.getElementById("rPlayerID").value;
  
    var payload = {
        reservationlastname: reservlastname,
        reservationfirstname: reservfirstname,
        reservationdate: reservdata,
        playerid: reservplayerid,
    };
  
    fetch("/reservation/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
    
      alert("Reservation booked");
  };


  const getDelete = () => {
    var id = document.getElementById("userId").value;
    fetch("/user_db/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => alert(JSON.stringify(res)));
  };
  
  const getUpdate = () => {
    var id = document.getElementById("userId").value;
    var userlastname = document.getElementById("userLastName").value;
    var userfirstname = document.getElementById("userFirstName").value;
    var userage = document.getElementById("userAge").value;
    var usernumber = document.getElementById("userNumber").value;

    var payload = {
      lastname: userlastname,
      firstname: userfirstname,
      user_number: usernumber,
      age: userage,
      user_id: id,
    };
  
    fetch("/user_db/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => alert(JSON.stringify(res)));
      
  };


  const getseereservation=()=>{
    fetch("/reservation/")
        .then((data) => data.json())
        .then((data) => converthtml(data));
  };

  const converthtml = (json1,c) => {
    let cat_list = document.querySelector(".row");
  
    for (catI in json1){
      const cat = json1[catI]
      console.log(cat.id_chores);
        if (true){
          cat_list.innerHTML='';
            cat_list.innerHTML += '<tbody><tr><td>'+cat.playerid+'</td><td>'+cat.reservationfirstname+'</td><td>'+cat.reservationlastname+'</td><td>'+cat.reservationdate+'</td></tbody><div>'
        }
    }
  
  }

