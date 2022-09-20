const clickImg = (inner) => {
  const setImg = document.getElementById("bigImg");
  const getImg = inner.src;
  setImg.src = getImg;
};
