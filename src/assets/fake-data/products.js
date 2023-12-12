// all images imported from images directory
// import product_01_image_01 from "../images/product_01.jpg";
// import product_01_image_02 from "../images/product_01.1.jpg";
// import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

// import product_05_image_01 from "../images/product_04.jpg";
// import product_05_image_02 from "../images/product_08.jpg";
// import product_05_image_03 from "../images/product_09.jpg";

// import product_06_image_01 from "../images/bread(1).png";
// import product_06_image_02 from "../images/bread(2).png";
// import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "02",
    title: "Pizza Vegetariana",
    price: 66,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",
    desc: "Uma deliciosa pizza vegetariana feita com ingredientes frescos e saudáveis. Desfrute desta combinação única de legumes frescos e queijo derretido em uma crosta crocante. Perfeita para os amantes de pizza que procuram uma opção vegetariana deliciosa.",
  },
  {
    id: "03",
    title: "Margherita de Queijo Duplo",
    price: 39.90 ,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",
    desc: "Uma clássica margherita de queijo duplo com uma generosa camada de queijo derretido sobre uma base de tomate e manjericão fresco. Esta pizza é uma explosão de sabor para os amantes de queijo. Desfrute da combinação perfeita de ingredientes frescos e sabores intensos.",
  },
  {
    id: "04",
    title: "Onda Verde Mexicana",
    price: 39.90,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
    desc: "Uma pizza mexicana com uma explosão de sabores frescos e picantes. Desfrute da combinação de pimentões verdes, cebolas, tomates e queijo derretido em uma base de molho de tomate temperado. Esta pizza é perfeita para aqueles que gostam de um toque de tempero em sua pizza.",
  },
  {
    id: "07",
    title: "Pizza de Frutos do Mar",
    price: 49,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",
    desc: "Uma pizza de frutos do mar que vai te transportar para o litoral. Delicie-se com uma variedade de frutos do mar frescos, como camarão, lula e mexilhões, cobertos com queijo derretido e temperos especiais. Esta pizza é perfeita para os amantes de frutos do mar que desejam uma experiência culinária única.",
  },
  {
    id: "08",
    title: "Pizza Fina de Queijo",
    price: 54.90,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",
    desc: "Uma pizza fina e crocante com uma generosa camada de queijo derretido. Esta pizza combina a textura crocante da massa fina com a cremosidade do queijo derretido, criando uma experiência gastronômica deliciosa. Perfeita para aqueles que apreciam uma pizza leve e saborosa.",
  },
  {
    id: "09",
    title: "Pizza com Cogumelos",
    price: 39.90,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",
    desc: "Uma pizza deliciosa coberta com uma variedade de cogumelos frescos. Desfrute da combinação de cogumelos suculentos, queijo derretido e temperos aromáticos, tudo sobre uma base de massa perfeitamente assada. Esta pizza é um prato saboroso e satisfatório para os amantes de cogumelos.",
  },
];

export default products;
