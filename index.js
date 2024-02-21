 let cvBtn = document.getElementById("cvBtn");
 let submit = document.getElementById("submit");
 let bar = document.getElementById("bar");


 cvBtn.addEventListener("click", function(){
   var driveLink = 'https://github.com/Bramhais/My-Resume';
     window.open(driveLink, '_blank');
     alert("Downloading CV...");
  })

//  document.getElementById("cvBtn").addEventListener("click", function() {
//    // Replace 'YOUR_DRIVE_LINK_HERE' with the actual URL of your Google Drive link
//    var driveLink = 'https://drive.google.com/drive/home';
   

 
 submit.addEventListener("click", function(){
     
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Fill Detail")
    }else{
        alert("Logged IN")
    }

 })




 let ul = document.querySelector("ul");
 bar.addEventListener("click", function(){
     ul.classList.toggle("showData");

     if(ul.className == "showData"){
        bar.className="fa-solid fa-xmark"
     }else{
        bar.className="fa-solid fa-bars"

     }
 })

