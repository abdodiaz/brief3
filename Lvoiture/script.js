//scrool
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//filter galery

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image) => {
                let filterImage = image.getAttribute("data-name");
                if ((filterImage == filterName) || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
}

//contact validation

var nom = document.getElementById('name');
var email = document.getElementById("email");
var message = document.getElementById('message');
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function valide() {
    var i = 0;
    //name
    if (nom.value == '') {
        document.getElementById('sname').innerHTML = "nom vide !";
    }
    else {
        document.getElementById('sname').innerHTML = "";
        i++;
    }
    //mail
    if (email.value.match(mailformat)) {

        document.getElementById('smail').innerHTML = "";
        i++;
    }
    else if (email.value == '') {
        document.getElementById('smail').innerHTML = "email vide !";
    }
    else {
        document.getElementById('smail').innerHTML = "emaail incorrect !";
    }
    //message
    if (message.value.length > 30) {

        document.getElementById('smsg').innerHTML = "";
        i++;
    }
    else {
        document.getElementById('smsg').innerHTML = "message incorrect !";
    }
    //
    if (i >= 3) {
        alert("votre message a ete envoyer");
    }
}
// reservation

//json
var type = {
    "cadin": {
        "nome": "cadin",
        "carburant": [ "essence", "electrique", "hybrid", "diesel" ],
        "boite": "manuelle",
        "prix": 12
    },
    "compact": {
        "nome": "compact",
        "carburant": [ "diesel" ],
        "boite": "manuelle",
        "prix": 14
    },
    "berline": {
        "nome": "berline",
        "carburant": [ "diesel" ],
        "boite": "automatique",
        "prix": 20
    },

    "moto": {
        "carburant": ["essence", "electrique" ] ,
        "boite": " ",
        "prix": 10
    },
    "camion": {
        "carburant": [ "diesel" ],
        "boite": "automatique",
        "prix": 250
    },
    "engin": {
        "nome": "engin",
        "carburant": ["diesel" ],
        "boite": "manuelle",
        "prix": 900
    },


}
var carburants= {"essence": 0.14, "electrique": 0.05, "hybrid": 0.09, "diesel": 0.21};
//fin


var Cindex ;
var selCarb = document.getElementById('carburant');

function Vl(elm, index) {
    Cindex=index;
    
    selCarb.innerHTML='<option value="-1">choisir carburant</option>';
   type[Cindex].carburant.forEach(function (elm, i) {
        selCarb.innerHTML+="<option value="+type[Cindex].carburant[i]+">" + elm + "</option>"
    });
    if( type[index].boite)
    {
        document.getElementById('tboite').innerHTML= type[index].boite;
    }
    else{
        document.getElementById('boitevts').style.display="none";
    }

}
function calcul()
{
    var jour = document.getElementById("inptss").value;
    var total;
    var prix=type[Cindex].prix;
    var i,j;
  for(i=0;i<type[Cindex].carburant.length;i++)
  {
      if(type[Cindex].carburant[i]==selCarb.value)
      {
          break;
      }
  }
var vcar=type[Cindex].carburant[i];
var v2carb =carburants[vcar];
if(type[Cindex].boite=="automatique")
{
    total = (prix +(prix*v2carb) +(prix*0.19))*jour;
}
else
{
    total = (prix +(prix*v2carb))*jour
}
alert("le prix est : "+total);
}