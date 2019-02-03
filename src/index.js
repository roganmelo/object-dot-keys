const objectDotKeys = (obj, separator = '.') => {
  const invalidTypes = ['undefined', 'number', 'string'];
  const invalidValues = [null];
  const type = typeof obj;

  if(invalidTypes.includes(type) || invalidValues.includes(obj)) {
    throw new Error('You have to provide a valid first parameter.');
  }

  const keys = Object.keys(obj);

  return keys.reduce((prev, key) => {
    if(typeof obj[key] === 'object') {
      const fields = objectDotKeys(obj[key], separator)
        .map(item => `${key}${separator}${item}`);

      return [...prev, ...fields];
    }

    return [...prev, key];
  }, []);
};

export default objectDotKeys;
