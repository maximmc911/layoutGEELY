const parentDiv = document.querySelector(".series");
const seriesAuto = [
  `Atlas`,
  `Coolray`,
  `Emgrand`,
  `Tugella`,
  `Atlas  Pro`,
  `Belgee x50`,
  `Okavango`,
  `Monjaro`,
  `Monjaro`,
  `Coolray 2023`,
];

export const MakeSeriesCard = () => {
  parentDiv.innerHTML = seriesAuto
    .map(
      (e, index) => `
      <div class="series_card" key=${index}>
      <p>${e}</p>
      </div>
      
      `
    )
    .join(``);
};
