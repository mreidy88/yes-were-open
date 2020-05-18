
const compareKey = (key) => (a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  };
    
  export const AZ = (arr) => arr.sort(compareKey('name'));
  export const ZA = (arr) => arr.sort(compareKey('name')).reverse();