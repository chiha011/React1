import { v4 as uuid} from "uuid";
import { IProduct } from "../interfaces";


export const productList:IProduct[]=
[
     
{id:uuid(),
    title: "Car:99",
    description:" L'automobile est un moyen de transport privé parmi les plus utilisés au monde et le plus utilisé en France5,6. Sa capacité est généralement de deux à cinq personnes, mais peut varier de une à neuf placesLusage limite l'emploi du terme automobile aux véhicules possédant quatre roues, ou plus rarement trois ou six roues, de dimensions inférieures à celle des autobus et des camions, mais englobe parfois les camionnettes. Bien qu'étant des « véhicules automobiles les motocyclettes ne sont pas habituellement classées dans cette catégorie ",
    imageURL :"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tractionfr02.jpg/1280px-Tractionfr02.jpg",
    price: "500000",
    colors:["#FF0032","#2563eb","#FF6E31"],
    category: {
        name:"Cars",
        imageURL :"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tractionfr02.jpg/1280px-Tractionfr02.jpg"
    },
},



{id:uuid(),
    title: "Pull col rond 100% coton",
    description:"Un vêtement est un article d’habillement servant à couvrir une partie du corps humain. Il est le plus souvent en tissu. Les vêtements portés, et les raisons pour le faire, varient fortement selon les cultures et le temps; elles sont individuelles (protection) et sociales (afficher un statut, ou une posture morale).",
    imageURL :"https://celio.tn/media/catalog/product/p/u/pull-col-rond-100-coton-noir-1103646-1-product_1_3.jpg",
    price: "45000",
    colors:["#FF0032","#2563eb","#FF6E31"],
    category: {
        name:"Pull",
        imageURL :"https://celio.tn/media/catalog/product/p/u/pull-col-rond-100-coton-noir-1103646-1-product_1_3.jpg"
    },
},


{id:uuid(),
    title: "Maison : a louer ",
    description:"Cette belle villa à louer se situe dans une des plus célèbres stations balnéaires espagnoles – Marbella. Son emplacement est presque stratégique puisqu’elle se trouve dans un nouveau lotissement sécurisé à seulement 5 min à pied de la plage et à 10 min à pied de la vielle ville.",
    imageURL :"https://www.barnes-cotebasque.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOHdRQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3087ca13a81bd7127b0ceefa0e7445652ff26ad5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2Q25OaGRtVnlld1k2REhGMVlXeHBkSGxwTFE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--219e57ae91f9183b6c38d81e8a46ec8a90285f73/1684494067f8a2d277597f47df640ce34e8b09e642.jpg",
    price: "5800000",
    colors:["#FF0032","#2563eb","#FF6E31"],
    category: {
        name:"Maison",
        imageURL :"https://www.barnes-cotebasque.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOHdRQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3087ca13a81bd7127b0ceefa0e7445652ff26ad5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2Q25OaGRtVnlld1k2REhGMVlXeHBkSGxwTFE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--219e57ae91f9183b6c38d81e8a46ec8a90285f73/1684494067f8a2d277597f47df640ce34e8b09e642.jpg"
    },
},



{id:uuid(),
    title: "2022 GEnesis Gv70:Nomie",
    description:"Mercedes-Benz (prononcé en allemand : /mɛʁˈtseːdəsˌbɛnts/) est une marque allemande d'automobiles (modèles premium, de sport et de luxe), de camions, d'autocars et d'autobus indépendante, fondée en 1926 par trois constructeurs : Daimler-Motoren-Gesellschaft, Mercedes et Benz & Cie. Mercedes-Benz est également établie depuis 2019 comme constructeur automobile à part entière sous la dénomination",
    imageURL :"https://media.gqmagazine.fr/photos/64a54c76102884bdbb5d2d86/4:3/w_1200,h_900,c_limit/Mercedes%20Benz%20Final%20Edition.png",
    price: "1000000",
    colors:["#FF0032","#2563eb","#FF6E31"],
    category: {
        name:"Mercedes",
        imageURL :"https://media.gqmagazine.fr/photos/64a54c76102884bdbb5d2d86/4:3/w_1200,h_900,c_limit/Mercedes%20Benz%20Final%20Edition.png"
    },
},



{id:uuid(),
    title: "bicyclette(de bicycle)",
    description:"La bicyclette actuelle est composée d'un cadre rigide supportant tous les organes de la machine et comportant, à l'avant, une fourche, actionnée par le guidon, qui soutient l'axe de la roue avant ; à l'arrière, une fourche horizontale dont les extrémités enserrent l'axe de la roue arrière",
    imageURL :"https://www.larousse.fr/encyclopedie/data/images/1012185-VTT.jpg",
    price: "1500",
    colors:["#FF0032","#2563eb","#FF6E31"],
    category: {
        name:"Bicyclette",
         imageURL :"https://www.larousse.fr/encyclopedie/data/images/1012185-VTT.jpg"
    },
},



{id:uuid(),
    title: "Chaussure Air Force 1 GS Nike ",
    description:"Chaussure Air Force 1 GS Nike , Achetez et commandez dès maintenant et payez en ligne ou à la livraison ☎70149859",
    imageURL :"https://supersport.tn/4600-large_default/nike-air-force-1-07.jpg",
    price: "18000",
    colors:["#FF0032","#2563eb","#FF6E31"],
    category: {
        name:"Chaussure",
        imageURL :"https://supersport.tn/4600-large_default/nike-air-force-1-07.jpg"
    }
},

{id:uuid(),
    title: "Montre Homme Slazenger",
    description:"Forme du cadran: Ronde, Largeur de boitier : 45 mm, Couleur de cadran : Bleu, Chronographe : Fonctionnel, Couleur de boitier: Bi-couleur/Rosé",
    imageURL :"https://citywatch.com.tn/28067-large_default/slazenger-sl092055202.jpg",
    price: "500000",
    colors:["#FF0032","#2563eb","#FF6E31"],
    category: {
        name:"Montre",
       imageURL :"https://citywatch.com.tn/28067-large_default/slazenger-sl092055202.jpg"
    }
},


{
    id:uuid(),
    title: "Pc portable HP",
    description:"PC Portable HP 15s-eq2047nf 15,6 AMD Ryzen 5 8 Go RAM 256 Go SSD Argent naturel",
    imageURL :"https://static.fnac-static.com/multimedia/Images/FR/MDM/13/9a/24/19175955/1541-2/tsp20240715143108/PC-Portable-HP-15s-eq2047nf-15-6-AMD-Ryzen-5-8-Go-RAM-256-Go-D-Argent-naturel.jpg",
    price: "85600",
    colors:["#FF0032","#2563eb","#FF6E31"],
    category: {
        name:"Pc",
        imageURL :"https://static.fnac-static.com/multimedia/Images/FR/MDM/13/9a/24/19175955/1541-2/tsp20240715143108/PC-Portable-HP-15s-eq2047nf-15-6-AMD-Ryzen-5-8-Go-RAM-256-Go-D-Argent-naturel.jpg"
    }
}

];



