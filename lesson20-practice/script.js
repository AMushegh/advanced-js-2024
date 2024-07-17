const rootElement = document.getElementById("root");

let countries = [];

const fetchCountries = async () => {
  const resp = await fetch("https://restcountries.com/v3.1/all");
  return await resp.json();
};

const getCountries = async () => {
  return await fetchCountries();
};

const createSingleCountryListItem = (country) => {
  const liElement = document.createElement("li");
  liElement.classList.add("country-item");
  // image start
  const imageElementWrapper = document.createElement("div");
  imageElementWrapper.classList.add("country-item-img-container");
  const imageElement = document.createElement("img");
  imageElement.src = country.flags.png;
  imageElement.alt = country.name.common + " flag";
  imageElementWrapper.appendChild(imageElement);
  // image end

  // name start
  const nameElementWrapper = document.createElement("div");
  nameElementWrapper.classList.add(
    "country-item-name-container",
    "container-element"
  );
  const nameELement = document.createElement("p");
  nameELement.innerText = country.name.common;
  nameElementWrapper.appendChild(nameELement);
  // name end

  // capital start
  const capitalElementWrapper = document.createElement("div");
  capitalElementWrapper.classList.add(
    "country-item-capital-container",
    "container-element"
  );
  const capitalELement = document.createElement("p");
  capitalELement.innerText = country.capital ? country.capital[0] : "N/A";
  capitalElementWrapper.appendChild(capitalELement);
  // capital end

  // region start
  const regionWrapperElement = document.createElement("div");
  regionWrapperElement.classList.add(
    "country-item-region-container",
    "container-element"
  );
  const regionElement = document.createElement("p");
  regionElement.innerText = country.region;
  regionWrapperElement.appendChild(regionElement);
  // region end

  // subregion start
  const subregionWrapperElement = document.createElement("div");
  subregionWrapperElement.classList.add(
    "country-item-subregion-container",
    "container-element"
  );
  const subregionElement = document.createElement("p");
  subregionElement.innerText = country.subregion;
  subregionWrapperElement.appendChild(subregionElement);
  // subregion end

  liElement.appendChild(imageElementWrapper);
  liElement.appendChild(nameElementWrapper);
  liElement.appendChild(capitalElementWrapper);
  liElement.appendChild(regionWrapperElement);
  liElement.appendChild(subregionWrapperElement);
  return liElement;
};

const renderCountries = async () => {
  const ulContainerElement = document.createElement("div");
  ulContainerElement.classList.add("countries-list-container");
  const ulElement = document.createElement("ul");
  ulElement.classList.add("countries-list");
  const countries = await getCountries();

  countries.forEach((country) => {
    const liElement = createSingleCountryListItem(country);
    ulElement.appendChild(liElement);
  });

  ulContainerElement.appendChild(ulElement);
  rootElement.appendChild(ulContainerElement);
};

const bootstrap = () => {
  renderCountries();
};

bootstrap();
