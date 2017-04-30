// dodaje element do listy po kliknieciu
function addProduct() {
    
    var product = document.getElementById("inputProduct").value;
    
    if(product != ""){
        
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      var input = document.createElement('input');
      input.type = "checkbox";
        
      li.appendChild(document.createTextNode(product));
      //li.appendChild(document.createTextNode(input));  <-- dodawanie checkbox'a nie działa 
      ul.appendChild(li);
        
    }else{
        alert("Fill product field!")
    }
}


//czyszczenie listy
function cleanProducts(){
    var ul = document.getElementById("list");
    ul.innerHTML = "";
}


// sms
var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};