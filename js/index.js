var components = [];

function SaeComponent(id, elementType) {
    this.id = id;
    this.elementType = elementType;
    this.element = document.createElement(elementType);
    this.element.setAttribute('id', this.id);
}

SaeComponent.prototype.getElementValue = function() {
    if (this.elementType === 'input')  {
        return this.element.value;
    }

    return this.element.innerHtml;
}

SaeComponent.prototype.removeElement = function() {
    if (this.element.parentNode) {
        return;
    }

    return this.element.parentNode.removeChild(this.element);
}

SaeComponent.prototype.cloneElement = function(deep) {
    return this.element.cloneNode(deep);
}

SaeComponent.prototype.appendToParent = function(parentElement) {
    return parentElement.appendChild(this.element);
}

var newElementButton = document.getElementById('new-element-button');
newElementButton.addEventListener('click', function() {
    var type = document.getElementById('type-selector').value;
    var id = document.getElementById('new-element-id').value;
    var newComponent = new SaeComponent(id, type);
    components.push(newComponent);
    console.log(components);
    
})