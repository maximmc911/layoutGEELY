import { formatCurrency } from "./features.js";
const parentDiv = document.querySelector(".catalog");

const car_catalogs = [
  {
    name: `GeeLY MONJARO`,
    price: {
      oldPrice: 2217900,
      newPrice: 1217900,
      monthlyPayment: 12307,
    },
    quote: [
      {
        image: `./image/Frame3336611.svg`,
        title: `КАСКО или комплект шин в подарок`,
      },
      {
        image: `./image/Frame3336612.svg`,
        title: `Первоначальный взнос от 0 ₽`,
      },

      {
        image: `./image/Frame3336613.svg`,
        title: `Бонус по трейд-ин до 300 000 ₽`,
      },
      {
        image: `./image/Frame3336614.svg`,
        title: `Гарантия 5 лет или 150 000 км`,
      },
    ],
    car_photo: [
      "./image/image532.png",
      "./image/image_533.png",
      "./image/image534.png",
      "./image/image535.png",
    ],
    color_item: [
      `background: rgba(52, 127, 147, 1);`,
      "background: rgba(114, 121, 124, 1);",
      "background: rgba(217, 217, 217, 1);",
      "background: rgba(11, 11, 11, 1);",
    ],
    bg_photo: "./image/image_529.png",
    car_mainPhoto: "./image/image_530.png",
  },
];

export const makeCatalog = (e) => {
  for (let index = 1; index < e; index++) {
    car_catalogs.push(car_catalogs[0]);
  }
  console.log(car_catalogs);

  parentDiv.innerHTML = car_catalogs
    .map(
      (e) => `
<div class="catalog_card" key=${e}>
<div>
  <h1>${e.name}</h1>
  <div class="card_price">
    <h2>${formatCurrency(e.price.oldPrice)} руб.</h2>
    <h1>от ${formatCurrency(e.price.newPrice)} руб.</h1>
    <p>Платеж от ${formatCurrency(e.price.monthlyPayment)} руб./мес.</p>
    <div class="card_price_btn">
      <button class="btn_get">Получить предложение</button>
      <button class="btn_buy">Купить в кредит</button>
    </div>
  </div>
</div>
<div>

    <div class="card_quote">
    ${e.quote
      .map(
        (e, index) => `
        <div class="quote_item" key=${index}>
        <img src=${e.image} alt="" class='quote_photo'>
        <p>${e.title}</p>
    </div>

`
      )
      .join(``)}
   
    </div>
    <div class="card_image">
        <img src=${e.bg_photo} alt=""  class="card_bg" >
        <img src=${e.car_mainPhoto} alt="" class="card_image_auto">
      </div>
      <div class="car_colors_photo_style">
          <div class="car_colors" >
          ${e.color_item
            .map(
              (
                e,
                index
              ) => `   <div class="color_item" style='${e}' key=${index}></div>
            `
            )
            .join(``)}
             
             <div class="color_item_w" ></div>
            </div>
            <div class="car_photo">
            ${e.car_photo
              .map(
                (e, index) =>
                  `  <img src="${e}" alt="" class="photo_item" key=${index}>`
              )
              .join(``)}

            </div>
      </div>
</div>
</div>
`
    )
    .join(``);
};
