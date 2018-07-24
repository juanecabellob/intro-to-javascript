function SaeComponent(id, elementType) {
    this.id = id;
    this.elementType = elementType;
    this.element = null;
}

SaeComponent.prototype.createElement = function() {
    this.element = document.createElement(element);
    this.element.setAttribute('id', this.id);
    return this.element;
}

SaeComponent.prototype.getElementValue = function() {
    if (this.elementType === 'input')  {
        return this.element.value;
    }

    return this.element.innerHtml;
}

SaeComponent.prototype.removeElement = function() {
    return this.element.parentNode.removeChild(this.element);
}

SaeComponent.prototype.cloneElement = function(deep) {
    return this.element.cloneNode(deep);
}

SaeComponent.prototype.appendToParent = function(parentElement) {
    return parentElement.appendChild(this.element);
}