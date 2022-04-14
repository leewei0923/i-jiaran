export const GenRightNavData = (data, key) => {
  if (!(data instanceof Array)) {
    return 'the type of data should be Array!';
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].key === key) {
      return data[i].child;
    }
  }

  return 'key is not declaration!';
};
