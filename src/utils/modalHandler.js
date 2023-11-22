export default function modalHandler(prevState) {
  prevState === false
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return !prevState;
}
