 //scrool
window.addEventListener('scroll',function(){
const header =document.querySelector('header');
header.classList.toggle("sticky",window.scrollY > 0);
});

//filter galery

const filterItem =document.querySelector(".items");
const filterImg =document.querySelectorAll(".image");

window.onload=()=>{
    filterItem.onclick=(selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName=selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
                let filterImage = image.getAttribute("data-name");
                if((filterImage==filterName) || filterName=="all" ){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
}

//contact validation

var nom =document.getElementById('name');
var email = document.getElementById("email");
var message = document.getElementById('message');
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function valide()
{
    var i  =0;
    //name
    if(nom.value=='')
    {
        document.getElementById('sname').innerHTML="nom vide !";
    }
    else
    {
        document.getElementById('sname').innerHTML="";
        i++;
    }
    //mail
    if(email.value.match(mailformat))
    {
       
        document.getElementById('smail').innerHTML="";
        i++;
    }
    else if(email.value=='')
    {   
        document.getElementById('smail').innerHTML="email vide !";
    }
    else
    {  
        document.getElementById('smail').innerHTML="emaail incorrect !";
    }
    //message
    if(message.value.length>30 )
    {
        
        document.getElementById('smsg').innerHTML="";
       i++;
    }
    else{
       document.getElementById('smsg').innerHTML="message incorrect !";
    }
    //
    if(i>=3)
    {
        alert("votre message a ete envoyer");
    }
}
// reservation

//json
var type={
    "moto":{
                "carburant":{"essence":0.14,"electrique": 0.05},
                "boite":"",
                "prix":10
            },
   "camion":{
                "carburant":{"diesel":0.21},
                "boite":{"automatique":0.19},
                "prix":250
            },
    "engin":{
                "carburant":{"diesel":0.21},
                "boite":"manuelle",
                "prix":900
            },        
    "voiture":{
                "cadin":{
                    "carburant":{"essence":0.14,"electrique": 0.05,"hybrid": 0.09,"diesel":0.21},
                    "boite":"manuelle",
                    "prix":12
                },
                "compact":{
                    "carburant":{"diesel":0.21},
                    "boite":"manuelle",
                    "prix":14
                },
                "berline":{
                    "carburant":{"diesel":0.21},
                    "boite":{"automatique":0.19},
                    "prix":20
                }
    }        
}
//fin

