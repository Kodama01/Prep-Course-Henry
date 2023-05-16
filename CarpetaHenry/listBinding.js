class ListBinding{
    constructor(listElement){
        this.listElement = listElement;
        this.textList = [];
    }
    /* Makes an <li>text</li> element/tag */
    static createListItem (text){
        let li = document.createElement('li')
        li.textContent = text;
        return li;
    }
    update(){
        /* Remove all existing <li> elements/tags */
        while (this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);
        }
        /* Fill <ul>/<ol> tag with <li> */
        for (let text of this.textList){
            this.listElement.appendChild(ListBinding.createListItem(text))
        }
    }

    add(text){
        this.textList.push(text);
        this.update();
    }
    remove(index){
        this.textList.splice(index, 1);
        this.update();
    }

}