var liste = [
    {
        title: "miss-dior",
        date_de_production: "2022",
        genre: ["parfum pour les femmes"],
        stars: 5,
        price: 700,
        image: "image/21.jpg",
    },
    {
        title: "sacs-Dior ",
        date_de_production: "2019",
        genre: ["sacs pour les femmes"],
        stars: 4,
        price: 800,
        image: "image/5.jpg",
    },
    {
        title: "dior-sauvage",

        date_de_production: "2010",
        genre: ["parfum pour l'homme"],
        stars: 3,
        price: 1000,
        image: " image/6.jpg",
    },
    {
        title: "montre-deluxe",

        date_de_production: "2022",
        genre: ["parfum pour les femmes"],
        stars: 5,
        price: 700,
        image: "image/7.jpg",
    },
    {
        title: "chaussure-Dior2022",
        date_de_production: "2019",
        genre: ["parfum pour les femmes"],
        stars: 4,
        price: 800,
        image: "image/8.jpg",
    },
    {
        title: "Lunette-DIOR-2K23",

        date_de_production: "2010",
        genre: ["lunette de soleil"],
        stars: 3,
        price: 1000,
        image: " image/9.jpg",
    },
];

console.log(liste);

for (let i = 0; i < liste.length; i++) {
    console.log(liste[i]);
    var ciblehtml = document.getElementById("produit");

    var produit = liste[i];

    ciblehtml.innerHTML +=`<div class="livre">
            <img src=${produit.image} width='260px' height="80%" alt="">
            <h1>${produit.title}</h1>
 
            <h6>${produit.date_de_production}</h6>
  
            <h6>${produit.stars} étoiles</h6>
           
            <h3>${produit.price}.00 DA</h3>
            <button>Commander</button>
        </div>`;
}