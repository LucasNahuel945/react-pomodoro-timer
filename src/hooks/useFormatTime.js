export const useFormatTime = (number) => {
  return ('0' + number)
    .substr(('0' + number)
    .length - 2);
};
