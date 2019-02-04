const objectDotKeys = (obj, customOptions) => {
  const invalidTypes = ['undefined', 'number', 'string'];
  const invalidValues = [null];
  const type = typeof obj;

  if(invalidTypes.includes(type) || invalidValues.includes(obj)) {
    throw new Error('You have to provide a valid first parameter.');
  }

  const defaultOptions = { separator: '.', array: true };
  const { array, separator } = { ...defaultOptions, ...customOptions };
  const keys = Object.keys(obj);

  return keys.reduce((prev, key) => {
    if(typeof obj[key] === 'object') {
      if(!array && Array.isArray(obj[key])) return [...prev, key];

      const fields = objectDotKeys(obj[key], { array, separator })
        .map(item => `${key}${separator}${item}`);

      return [...prev, ...fields];
    }

    return [...prev, key];
  }, []);
};

export default objectDotKeys;
