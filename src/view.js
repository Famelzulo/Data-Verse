export const renderItems = (data) => {
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites

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
 
  // creamos los elemntos

    data.forEach(language => {
      const languageContainer = document.createElement("dl");
  
      // Crea un elemento para la imagen del lenguaje
      const image = document.createElement("img");
      image.src = language.imageUrl;
  
      // Crea un elemento para el Nombre
      const titleTerm = document.createElement("dt");
      titleTerm.textContent = "Nombre:";
      const titleDefinition = document.createElement("dd");
      titleDefinition.textContent = language.name;
  
      // Crea un elemento para el Creador
      const creatorTerm = document.createElement("dt");
      creatorTerm.textContent = "Creador:";
      const creatorDefinition = document.createElement("dd");
      creatorDefinition.textContent = language.creator;
  
      // Crea un elemento para shortDescription
      const shortDescriptionTerm = document.createElement("dt");
      shortDescriptionTerm.textContent = "Descripción corta:";
      const shortDescriptionDefinition = document.createElement("dd");
      shortDescriptionDefinition.textContent = language.shortDescription;
  
      // Crea un elemento para la Descripción
      const descriptionTerm = document.createElement("dt");
      descriptionTerm.textContent = "Descripción:";
      const descriptionDefinition = document.createElement("dd");
      descriptionDefinition.textContent = language.description;
  
      // Crea un elemento para el Año de Creación
      const yearOfBirthTerm = document.createElement("dt");
      yearOfBirthTerm.textContent = "Año de creación:";
      const yearOfBirthDefinition = document.createElement("dd");
      yearOfBirthDefinition.textContent = language.yearOfBirth;
  
      // Agrega los elementos creados al contenedor del lenguaje
      languageContainer.appendChild(image);
      languageContainer.appendChild(titleTerm);
      languageContainer.appendChild(titleDefinition);
      languageContainer.appendChild(creatorTerm);
      languageContainer.appendChild(creatorDefinition);
      languageContainer.appendChild(shortDescriptionTerm);
      languageContainer.appendChild(shortDescriptionDefinition);
      languageContainer.appendChild(descriptionTerm);
      languageContainer.appendChild(descriptionDefinition);
      languageContainer.appendChild(yearOfBirthTerm);
      languageContainer.appendChild(yearOfBirthDefinition);
  
      container.appendChild(languageContainer);
    });
  
    const rootElement = document.getElementById("root");
    rootElement.appendChild(container);
  return 'example';
  };
  
 
 