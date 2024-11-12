export const generateUniqueKey = (prefix: string) =>
  `1111_${prefix}_${new Date().getTime()}`;
