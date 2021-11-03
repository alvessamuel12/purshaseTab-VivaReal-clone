

const createCard = (info) => {
    const card = document.createElement('article');
    card.classList.add('card-container');
    const image = document.createElement('img');
    const container = document.createElement('div');
    container.classList.add('card-informations');
    const title = document.createElement('h2');
    const address = document.createElement('span');
    const description = document.createElement('span');
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

    const properties = formatProperties(info.listing);
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
        li.append(e);
        ul.appendChild(li);
    });
    return ul;
}

const formatProperties = (properties) => {
    let ul = document.createElement('ul');
    if (properties.totalAreas) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let sup = document.createElement('sup');
        span.innerText = properties.totalAreas[0];
        sup.innerText = 2;
        li.append(span, ' m', sup);
        ul.appendChild(li);
    }
    if (properties.bedrooms) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerText = properties.bedrooms[0];
        li.append(span, ' Quartos');
        ul.appendChild(li);
    }
    if (properties.bathrooms) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerText = properties.bathrooms[0];
        li.append(span, ' Banheiros');
        ul.appendChild(li);
    }
    if (properties.parkingSpaces) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerText = properties.bathrooms[0];
        li.append(span, (Number(span.innerText) > 1) ? ' Vagas': ' Vaga');
        ul.appendChild(li);
    }
    return ul;
}

export default createCard;