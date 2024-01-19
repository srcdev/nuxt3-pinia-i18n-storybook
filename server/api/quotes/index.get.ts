// https://dummyjson.com/docs/quotes

export default defineEventHandler((event) => {
  fetch("https://dummyjson.com/quotes")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
});
