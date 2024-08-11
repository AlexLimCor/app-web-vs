export const validationForm = (data) => {
  for (const value of Object.values(data)) {
    if (typeof value === 'string') {
      const newValue = value.replace(/\s+/g, ' ').trim();
      if (newValue.length === 0) {
        return false;
      }
    } else if (!value && value !== 0 && value !== false) {
      return false;
    }
  }
  return true;
};
