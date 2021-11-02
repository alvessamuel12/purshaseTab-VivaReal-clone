

const createCard = (info) => {
    const card = document.createElement('article');
    card.classList.add('card-container');
    const image = document.createElement('img');
    const container = document.createElement('div');
    container.classList.add('card-informations');
    const title = document.createElement('h2');
    const address = document.createElement('span');
    const description = document.createElement('span');
    let properties = document.createElement('ul');
    let amenities = document.createElement('ul');
    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add('values-contact-container');
    const pricesContainer = document.createElement('div');
    const buttons = document.createElement('div');
    const price = document.createElement('p');
    const condominio = document.createElement('p');
    
    
    image.src = info.medias[0].url;
    const addressInfo = info.listing.address;
    address.innerText = `${addressInfo.street}, ${addressInfo.streetNumber} - ${addressInfo.neighborhood}, ${addressInfo.city} - ${addressInfo.stateAcronym}`;
    description.innerText = info.link.name;
    propertiesList = formatProperties();
    properties = createOrderedList(propertiesList, properties);
    amenities = createOrderedList(info.listing.amenities, amenities);


    title.append(address, description);
    pricesContainer.append(price, condominio);
    bottomContainer.append(pricesContainer, buttons);
    container.append(title, properties, amenities, bottomContainer);
    card.append(image, container);

    return card;
}

const createOrderedList = (array, ul) => {
    array.forEach(e => {
        let li = document.createElement('li');
        li.textContent = e;
        ul.appendChild(li);
    });
    return ul;
}

const formatProperties = (properties) => {
    
}

export default createCard;