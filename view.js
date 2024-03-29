export const renderItems = (data) => {
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  // template sugerido en punto 4 

  // <dl itemscope itemtype="Lenguajes de programacion">
  //   <img src="" />
  //   <dt>Nombre:</dt><dd itemprop="name">Phyton</dd>
    //   <dt>short Descripción:</dt><dd itemprop="short description">Pionera de la informática, fue la primera programadora.</dd>
  //   <dt>Descripción:</dt><dd itemprop="description">Pionera de la informática, fue la primera programadora.</dd>
  //   <dt>Año de creacion:</dt><dd itemprop="yearOfBirth">1843</dd>
  //   <dt>Creador:</dt><dd itemprop="creator">London, England</dd>
  //   <dt>Comanpanias que lo usan:</dt><dd itemprop="companieUsingIt">Computer Science</dd>
  // </dl>

  // seria DL

  const container = document.createElement("div");
  console.log(data);

  data.forEach(languaje => {
    // seria elemento dl
    const languajeContainer = document.createElement("dl");

    // crea elemento para el Nombre
    const titleElement = document.createElement("dt");
    titleElement.textContent = languaje.name;

    // crea elemento para shortDescription   
    const shortDescription = document.createElement("li");
    shortDescription.textContent = languaje.description;

    // crea elemento para Creador
    const creator = document.createElement("dt");
    creator.textContent = languaje.creator;

    // crea elemento para imagen
    //<img src="pic_trulli.jpg"/>
    const image = document.createElement("img");
    image.src = "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg";

     //image.path = "image/python.jpg"
    // image.setAttribute textContent = languaje.creator;
    
    //Crear elemento para companias que lo usan
    const companieUsingit =document.createElement("dt");
    companieUsingit.textContent = languaje.companieUsingit;



    // agrega los elementos creados
    languajeContainer.appendChild(titleElement);
    languajeContainer.appendChild(shortDescription);
    languajeContainer.appendChild(creator);
    languajeContainer.appendChild(image);

    container.appendChild(languajeContainer);
  });

  // ubica elemtno root
  const rootElement = document.getElementById("root");
  rootElement.appendChild(container);

  return 'example';
};



const container = document.createElement("div");

data.forEach(language => {
    const languageContainer = document.createElement("dl");
    languageContainer.setAttribute("itemscope", "");
    languageContainer.setAttribute("itemtype", "WomenInTech");

    // Crear elemento para la imagen
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", language.imageUrl);
    imageElement.setAttribute("alt", language.name);

    // Crear elementos <dt> y <dd> para cada propiedad
    const nameTitle = createDTElement("Nombre:");
    const nameValue = createDDElement(language.name);
    const descriptionTitle = createDTElement("Descripción:");
    const descriptionValue = createDDElement(language.description);
    const birthYearTitle = createDTElement("Año de nacimiento:");
    const birthYearValue = createDDElement(language.yearOfBirth);
    const birthPlaceTitle = createDTElement("Lugar de nacimiento:");
    const birthPlaceValue = createDDElement(language.placeOfBirth);
    const fieldTitle = createDTElement("Campo de desempeño:");
    const fieldValue = createDDElement(language.mainField);

    // Agregar elementos al contenedor del lenguaje
    languageContainer.appendChild(imageElement);
    languageContainer.appendChild(nameTitle);
    languageContainer.appendChild(nameValue);
    languageContainer.appendChild(descriptionTitle);
    languageContainer.appendChild(descriptionValue);
    languageContainer.appendChild(birthYearTitle);
    languageContainer.appendChild(birthYearValue);
    languageContainer.appendChild(birthPlaceTitle);
    languageContainer.appendChild(birthPlaceValue);
    languageContainer.appendChild(fieldTitle);
    languageContainer.appendChild(fieldValue);

    // Agregar contenedor del lenguaje al contenedor principal
    container.appendChild(languageContainer);
});

// Agregar contenedor principal al elemento root en el HTML
const rootElement = document.getElementById("root");
rootElement.appendChild(container);

// Función para crear elementos <dt>
function createDTElement(text) {
    const dt = document.createElement("dt");
    dt.textContent = text;
    return dt;
}

// Función para crear elementos <dd>
function createDDElement(text) {
    const dd = document.createElement("dd");
    dd.setAttribute("itemprop", text.toLowerCase().replace(/\s/g, ''));
    dd.textContent = text;
    return dd;
}
