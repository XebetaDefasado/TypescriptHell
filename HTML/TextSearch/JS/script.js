function main() {
    const modifyAndOptions = document.getElementById("modifyAndOptions");
    const modifyText = document.getElementById("modifyText");
    const modifyDiv = document.getElementById("modifyDiv");
    const submitText = document.getElementById("submitText");
    const optionsList = document.getElementById("optionsList");
    const listItems = optionsList.getElementsByTagName("li");
    const checkmarks = document.getElementsByTagName("span");
    let vw = window.innerWidth / 100;
    let vh = window.innerHeight / 100;
    if (((vh * vw) / 5) <= 13.125) {
        modifyText.style.width = `${(vh * vw) / 5}em`;
        modifyText.style.height = modifyText.style.width;
    }
    else {
        modifyText.style.width = `13.125em`;
        modifyText.style.height = `13.125em`;
    }
    modifyText.style.fontSize = `${(vh * vw) / 70}em`;
    modifyDiv.style.width = `${(vh * vw) / 3}em`;
    modifyDiv.style.height = `${(vh * vw) / 3}em`;
    optionsList.style.width = `fit-content`;
    if (((vh * vw) / 70) <= 0.75) {
        optionsList.style.fontSize = `${(vh * vw) / 70}em`;
    }
    else {
        optionsList.style.fontSize = `0.75em`;
    }
    ;
    for (let e of listItems) {
        e.style.width = `${(3 * (vh * vw) / 8) / 2}em`;
        e.style.height = `${((3 * (vh * vw) / 10) / 2) * 0.35}em`;
    }
    ;
    for (let e of checkmarks) {
        e.style.height = `${optionsList.style.fontSize}`;
        e.style.width = e.style.height;
    }
    window.addEventListener("resize", () => {
        vw = window.innerWidth / 100;
        vh = window.innerHeight / 100;
        if (1 == 1) {
            if (((vh * vw) / 5) <= 13.125) {
                modifyText.style.width = `${(vh * vw) / 5}em`;
                modifyText.style.height = modifyText.style.width;
            }
            modifyText.style.fontSize = `${(vh * vw) / 70}em`;
            modifyDiv.style.width = `${(vh * vw) / 3}em`;
            modifyDiv.style.height = `${(vh * vw) / 3}em`;
            optionsList.style.width = `fit-content`;
            if (((vh * vw) / 70) <= 0.75) {
                optionsList.style.fontSize = `${(vh * vw) / 70}em`;
            }
            ;
            for (let e of listItems) {
                e.style.width = `${(3 * (vh * vw) / 8) / 2}em`;
                e.style.height = `${((3 * (vh * vw) / 10) / 2) * 0.35}em`;
            }
            ;
            for (let e of checkmarks) {
                e.style.height = `${optionsList.style.fontSize}`;
                e.style.width = e.style.height;
            }
        }
    });
    return;
}
main(); //Sorry, I like functions
//# sourceMappingURL=script.js.map