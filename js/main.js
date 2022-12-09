let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


const renderHTML=(data)=>{
    let content="";
    data.forEach((glass) => {
        content+=`
        <a href="#" style="display:flex;width:120px;margin-left:25px;margin-bottom:30px" class="glass" onclick="tryGlasses('${glass.virtualImg}','${glass.name}','${glass.brand}','${glass.color}','${glass.price}','${glass.description}')">
            <img src="${glass.src}" style="width:100%;">
        </a>`;     
    
    });   
    document.getElementById("vglassesList").innerHTML=content;
}
renderHTML(dataGlasses);
const tryGlasses=(vImage,name,brand,color,price,desc)=>{     
    let image=`<img class="glassimage" src="${vImage}">`;
    let text=`
    <h3>${name}-${brand} (${color})</h3>
    <p class="price">${price}$</p> <span>Stocking</span>
    <p>${desc}</p>
    `;    
    document.getElementById("avatar").innerHTML=image;
    document.getElementById("glassesInfo").innerHTML=text;
    document.getElementById("glassesInfo").style.display="block";
}
const removeGlasses=(isRemove)=>{
    if(isRemove){
        document.getElementsByClassName("glassimage")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("glassimage")[0].style.display="block";
    }
}

window.tryGlasses=tryGlasses;
window.removeGlasses=removeGlasses;



