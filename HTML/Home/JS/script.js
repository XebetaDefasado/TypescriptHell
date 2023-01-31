const pages = document.getElementsByClassName("nav-item");
const importantStrongs = document.getElementsByClassName("strongBinded");
for (let Element of pages) {
    for (let ElementLow of importantStrongs)
        if (Element.id.replace(/\u005F/g, '\u0020') === ElementLow.textContent) {
            ElementLow.addEventListener("mouseover", () => {
                Element.classList.add("stalked");
            });
            ElementLow.addEventListener("mouseout", () => {
                Element.classList.remove("stalked");
            });
        }
}
;
//# sourceMappingURL=script.js.map