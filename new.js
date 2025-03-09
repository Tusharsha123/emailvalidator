//getting 
let input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.getElementById("result");

//styl
let div=document.querySelector("div");
div.style.cssText = `
width: 400px;
height: 300px;
margin: 100px auto;
border: 1px solid #ccc;
padding: 20px;
text-align: center;
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

let pemail = document.getElementById("subtitle");
pemail.style.textAlign = "left";
pemail.style.marginLeft = "25px";
pemail.style.marginBottom = "0px";
pemail.style.marginTop = "50px";
pemail.style.paddingTop = "25px";

 document.getElementById("title").style.marginTop ="70px";
 document.getElementById("title").style.marginBottom ="-50px";
 document.getElementById("title").style.fontSize ="30px";

input.style.cssText = `
width: 80%;
padding: 10px 15px ;
margin: 10px 0px 10px 0px;
outline: none;
`;

button.style.cssText = `
background-color: #007bff;
color: #f8fafe;
border: none;
font-size: 15px;
padding: 10px 15px;
width: 90%;
font-weight: bold;
`;

button.onclick = check;

// Function to Check Email
function check(){
input.value = input.value.toLowerCase().trim(); 
if(input.value ===""){
    alert("please enter an email");
        return false;
}
if(!input.value.includes("@")){
        alert("Invalid email / does'nt include @");
        return false;
    }
else if(input.value.match(/[\*\/s\+\#\^\&\!\~\%\?\^\$\|\(\)\{\}\[\]\\]/g)){
        alert("Invalid email 'has spacial character or spaces'");
        return false;
    }
else{
        let domain = input.value.split("@").pop();
    if (domain.split(".").pop() === "com" ){
            result.innerText = "Valid Email";
        }
    else{
            result.innerText = "Invalid Email / domain should be com";
        }
    }
}
    
        
    
