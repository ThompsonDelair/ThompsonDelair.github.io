let addArtist;
let addArtistUI;
let addButton;
let artistTable;
let toggle = false;
let firstNameField;
let aboutField;
let portraitField;

let addToggle = true;

document.addEventListener("DOMContentLoaded",(event)=>{
    addArtist = document.getElementById("addArtist");
    //addArist.textContent = "text changed";
    addArtist.onclick = OpenAddArtist;
    
    addArtistUI = document.getElementById("addArtistUI");    
    
    artistTable = document.getElementById("artistTable");
    addButton = document.getElementById("add");
    addButton.onclick = AddArtist;
    
    firstNameField = document.getElementById("firstname");
    aboutField = document.getElementById("about");
    portraitField = document.getElementById("url");
    
    HideAddArtistUI();
});

function OpenAddArtist(){
    let addArist = document.getElementById("addArtist");
    if(addToggle){
        HideAddArtistUI()
    } else {
        ActivateAddAristUI();
    }    
};

function ActivateAddAristUI(){
    addArtistUI.style.display = "block";
    addToggle = true;
};

function HideAddArtistUI(){
    addArtistUI.style.display = "none";
    addToggle = false;
};

function AddToTable(){
    let newRow = artistTable.insertRow(-1);
    newRow.classList.add("outlined");
    newRow.classList.add("hover");
    
    let newCell1 = newRow.insertCell(0);
    newCell1.classList.add("cell");
    
    let img = document.createElement("img");
    newCell1.appendChild(img);
    
//    if(portraitField.value == "portrait url"){
//        img.src = "https://randomuser.me/api/portraits/med/men/1.jpg";
//    } else {
//        img.src = portraitField.value;
//    }
    
    img.src = portraitField.value;
    
    let newCell2 = newRow.insertCell(1);
    
    let div1 = document.createElement("div");    
    newCell2.appendChild(div1);
    div1.innerHTML = firstNameField.value;
    div1.classList.add("name");
    
    let p = document.createElement("p");
    newCell2.appendChild(p);
    p.innerHTML = aboutField.value;    
    
    let newCell3 = newRow.insertCell(2);
    
    let removeButton = document.createElement("button");
    newCell3.appendChild(removeButton);
    removeButton.setAttribute("onclick","Remove(this)");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("delete");
    HideAddArtistUI();
};

function AddArtist(){
    AddToTable();
};

function Remove(e){
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}