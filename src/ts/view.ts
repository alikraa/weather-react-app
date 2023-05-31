function setData(key: string, value: string | string[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getData(key: string) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function updateList(key: string, element: string) {
  const cities = getData(key);
  if (cities) {
    const filteredList = cities.filter((item: string) => item !== element);
    setData(key, filteredList);
  }
}

export { setData, getData, updateList };
