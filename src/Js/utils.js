export const zerofill = (num) => {
  return num < 10 ? ('0' + num) : num;
};

export const getDeepObjectData = (keyArr, dataObject) => {
  return keyArr.reduce(function (data, key) {
    return (data && data[key]) ? data[key] : null;
  }, dataObject);
};

export const setDeepObjectData = (keyArr, setValue, dataObject) => {

};
