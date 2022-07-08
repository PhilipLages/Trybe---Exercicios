const createNewTag = (parent, tag, attribute, value) => {         
  const createTag = document.createElement(tag);
  attribute ? createTag.setAttribute(attribute, value) : undefined;
  parent.appendChild(createTag);  
}

const createList = (data) => {
  const container = document.querySelector('.container');
  createNewTag(container, 'ul', 'id', 'list')
  const list = document.querySelector('#list');
  data.forEach((crypto) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${crypto.id} (${crypto.symbol}): ${parseFloat(crypto.priceUsd).toFixed(2)};`;
    list.appendChild(listItem);
  });
  
  // const list = '<ul>' + data.reduce((html, crypto) => {    
  //   html += `<li>${crypto.id} (${crypto.symbol}): US$ ${parseFloat(crypto.priceUsd).toFixed(2)};</li>`;
  //   return html;
  // }, ' ') + '</ul>';
  // container.innerHTML = list;
}

const getCurrencies = async () => {
  try {
    const url = 'https://api.coincap.io/v2/assets';
    const response = await fetch(url);
    const { data } = await response.json();
    createList(data.slice(0, 10));
  } catch (error) {
    console.log(error);
  }
}

getCurrencies();
