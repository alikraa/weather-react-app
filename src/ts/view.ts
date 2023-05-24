function setData(key: string, value: string | string[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getData(key: string) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export { setData, getData };
