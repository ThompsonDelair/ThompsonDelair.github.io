let addArtist;
let addArtistUI;
let addButton;
let artistTable;
let toggle = false;
let firstNameField;
let aboutField;
let portraitField;
let searchButton;
let searchInput;

let addToggle = true;

let storage;

document.addEventListener("DOMContentLoaded",(event)=>{
    
    storage = window.localStorage;
    
    addArtist = document.getElementById("addArtist");
    addArtist.onclick = OpenAddArtist;
    
    addArtistUI = document.getElementById("addArtistUI");    
    
    artistTable = document.getElementById("artistTable");
    addButton = document.getElementById("add");
    addButton.onclick = AddArtist;
    
    searchButton = document.getElementById("search");
    searchButton.onclick = Search;
    
    searchInput = document.getElementById("searchInput");
    
    firstNameField = document.getElementById("firstname");
    aboutField = document.getElementById("about");
    portraitField = document.getElementById("url");
    
    HideAddArtistUI();
    AddFromStorage();
    
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

function AddArtist(){
    let firstName = firstNameField.value;
    let portrait = portraitField.value;
    let about = aboutField.value;
    
    AddToTable(portrait,firstName,about);
    storage.setItem(firstName,JSON.stringify([portrait,firstName,about]));
};

function AddToTable(portrait,firstName,about){
    let newRow = artistTable.insertRow(-1);
    newRow.classList.add("outlined");
    newRow.classList.add("hover");
    
    let newCell1 = newRow.insertCell(0);
    newCell1.classList.add("cell");
    
    let img = document.createElement("img");
    newCell1.appendChild(img);    

    img.src = portrait;
    img.classList.add("portrait");
    
    let newCell2 = newRow.insertCell(1);
    
    let div1 = document.createElement("div");    
    newCell2.appendChild(div1);
    div1.innerHTML = firstName;
    div1.classList.add("name");
    
    let p = document.createElement("p");
    newCell2.appendChild(p);
    p.innerHTML = about;    
    p.classList.add("about");
    
    let newCell3 = newRow.insertCell(2);
    
    let removeButton = document.createElement("button");
    newCell3.appendChild(removeButton);
    removeButton.setAttribute("onclick","Remove(this)");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("delete");
    HideAddArtistUI();   
    
};

function Remove(e){
    
    firstName = e.parentNode.parentNode.childNodes[1].firstChild.innerHTML;
    storage.removeItem(firstName);
    
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);    
}

function AddFromStorage(){
    for(let i = 0; i < storage.length;i++){
        let artist = JSON.parse(storage.getItem(storage.key(i)));
        AddToTable(artist[0],artist[1],artist[2])
    }
}

function Search(){
    let searchVal = searchInput.value;
    let artistTable = document.getElementById("artistTableBody");   
    
    for(let child = artistTable.childNodes[1]; child!==null;child = child.nextSibling){
        let name = child.childNodes[1].firstChild.innerHTML;
        child.style.display = "table-row";
        for(let j = 0; j < searchVal.length && j < name.length;j++){
            if(name.charAt(j) != searchVal.charAt(j)){
                child.style.display = "none";
                break;
            }
        }
    }
}