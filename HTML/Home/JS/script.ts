const pages = document.getElementsByClassName("nav-item");
const importantStrongs: HTMLCollectionOf<Element> = document.getElementsByClassName("strongBinded");
const listItems: HTMLCollectionOf<Element> = document.getElementsByTagName("li");
const ul: HTMLElement = document.getElementById("ul")

for (let Element of pages) {
    for (let ElementLow of importantStrongs)
        if (Element.id.replace(/\u005F/g, '\u0020') === ElementLow.textContent) {
            ElementLow.addEventListener("mouseover", () => {
                Element.classList.add("stalked")
            })
            ElementLow.addEventListener("mouseout", () => {
                Element.classList.remove("stalked")
            })
        }
};

function listVerifier() {
    for (let Element of listItems) {
        if (listItems[listItems.length - 1] === Element) {
            if (Element.childNodes[Element.childNodes.length - 1].nodeValue.match(/\w/) === null) {
                Element.childNodes[Element.childNodes.length - 1].nodeValue = "."
            }
            else {
                let content: ChildNode = Element.childNodes[Element.childNodes.length - 1]
                let newContent: string = content.textContent.replace(/\n/g, "")
                newContent = newContent.replace(/\s(?!\w)/g, "")
                newContent = newContent.replace(/\s*$/g, "").concat(".")
                content.textContent = newContent
            }
        }
        else {
            if (Element.childNodes[Element.childNodes.length - 1].nodeValue.match(/\w/) === null) {
                let content: ChildNode = Element.childNodes[Element.childNodes.length - 1]
                content.nodeValue = ";"
            }
            else {
                let content: ChildNode = Element.childNodes[Element.childNodes.length - 1]
                let newContent: string = content.textContent.replace(/\n/g, "")
                newContent = newContent.replace(/\s(?!\w)/g, "")
                newContent = newContent.replace(/\s*$/g, "").concat(";")
                content.textContent = newContent
            }
        }
    }
    return
}
listVerifier();

