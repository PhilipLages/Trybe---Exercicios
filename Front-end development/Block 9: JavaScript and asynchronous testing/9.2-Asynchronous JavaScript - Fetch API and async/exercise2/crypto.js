const createNewTag = (parent, tag, attribute, value) => {         
  const createTag = document.createElement(tag);
  attribute ? createTag.setAttribute(attribute, value) : undefined;
  parent.appendChild(createTag);  
}

const getBrlCurrency = async () => {
  try {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`;
    const response = await fetch(url);
    const { usd: { brl } } = await response.json();
    return brl;
  } catch (error) {
    console.log(error);
  }
}

const createList = async (data) => {
  const container = document.querySelector('.container');
  createNewTag(container, 'ul', 'id', 'list')
  const list = document.querySelector('#list');
  const brl = await getBrlCurrency();
  data.forEach((crypto) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${crypto.id} (${crypto.symbol}): ${(parseFloat(crypto.priceUsd) * brl).toFixed(2)};`;
    list.appendChild(listItem);
  });
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

