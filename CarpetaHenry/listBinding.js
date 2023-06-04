//This small program works calling this class and its methods directly from the browser's built in console
//ALL the content on this was explained in https://www.youtube.com/watch?v=2ZphE5HcQPQ&ab_channel=freeCodeCamp.org
class ListBinding{
    constructor(listElement){
        this.listElement = listElement;
        this.textList = ['n','a','c'];
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

    /* Adds given text to the <li> , then updates */
    add(text){
        this.textList.push(text);
        this.update();
    }
    /* Removes the item using its index starting from [0], then updates */
    remove(index){
        this.textList.splice(index, 1);
        this.update();
    }

}