export const renderItems = (data) => {
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  // template sugerido en punto 4 

  // <dl itemscope itemtype="WomenInTech">
  //   <img src="URL_DE_LA_IMAGEN_GENERADA" alt="Ada Lovelace" />
  //   <dt>Nombre:</dt><dd itemprop="name">Ada Lovelace</dd>
  //   <dt>Descripción:</dt><dd itemprop="description">Pionera de la informática, fue la primera programadora.</dd>
  //   <dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">1843</dd>
  //   <dt>Lugar de nacimiento:</dt><dd itemprop="placeOfBirth">London, England</dd>
  //   <dt>Campo de desempeño:</dt><dd itemprop="mainField">Computer Science</dd>
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

    // crea elemento para shortDescript   
    const shortDescription = document.createElement("li");
    shortDescription.textContent = languaje.description;

    // crea elemento para Creador
    const creator = document.createElement("dt");
    creator.textContent = languaje.creator;

    // crea elemento para imagen
    //<img src="pic_trulli.jpg"/>
    const image = document.createElement("img");
    image.src = "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg";

    // image.setAttribute textContent = languaje.creator;

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