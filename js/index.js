var saeComponents = [];

function SaeComponent(id, elementType, initialValue) {
    this.id = id;
    this.elementType = elementType;
    this.element = document.createElement(elementType);
    this.element.setAttribute('id', this.id);
    switch (elementType) {
        case 'input':
            this.element.value = initialValue;
            break;
        default:
            this.element.innerHTML = initialValue;
    }
    this.attachedToParent = false;
}

SaeComponent.prototype.getElementValue = function() {
    if (this.elementType === 'input')  {
        return this.element.value;
    }

    return this.element.innerHtml;
}

SaeComponent.prototype.removeElement = function() {
    if (!this.attachedToParent) {
        return;
    }

    return this.element.parentNode.removeChild(this.element);
}

SaeComponent.prototype.cloneElement = function(deep) {
    return this.element.cloneNode(deep);
}

SaeComponent.prototype.appendToParent = function(parentElement) {
    this.attachedToParent = true;

    return parentElement.appendChild(this.element);
}

function toggleOptionsVisibility() {
    var options = document.getElementsByClassName('options');
    for (let option of options) {
        if (option.classList.contains('show')) {
            option.classList.remove('show');
        } else {
            option.classList.add('show');
        }
    }
}

function getSaeComponentById(id) {
    for (let saeComponent of saeComponents) {
        if (saeComponent.id === id) {
            return saeComponent;
        }
    }
}

function attachOptions(e) {
    var targetId = e.target.getAttribute('id');
    
    var parentSelector = document.getElementById('parent-select');
    var appendTo = document.getElementById('append-to-button');
    var removeElementButton = document.getElementById('remove-button');

    function add(e) {
        if (parentSelector.value == "") {
            alert("Please select a parent element to which this element should be appended to!");
            return;
        }
        var saeComponent = getSaeComponentById(targetId);

        var parentElement = document.getElementById(parentSelector.value);
        saeComponent.appendToParent(parentElement);
        toggleOptionsVisibility();

        appendTo.removeEventListener('click', add);
        removeElementButton.removeEventListener('click', remove);
    }

    function remove() {
        var saeComponent = getSaeComponentById(targetId);
        saeComponent.removeElement();
         
        toggleOptionsVisibility();

        appendTo.removeEventListener("click", add);
        removeElementButton.removeEventListener('click', remove);
    }

    toggleOptionsVisibility();    

    appendTo.addEventListener('click', add);
    removeElementButton.addEventListener('click', remove)
}

function triggerEventsRegistration() {
    var components = document.getElementsByClassName('component');
    for (let component of components) {
        component.removeEventListener('click', attachOptions);
        component.addEventListener('click', attachOptions);
    }    
}

var newComponentButton = document.getElementById('new-component-button');

newComponentButton.addEventListener('click', function() {
    var type = document.getElementById('type-selector').value;
    var id = document.getElementById('new-component-id').value;
    var initialValue = document.getElementById('new-component-value').value;
    var newComponent = new SaeComponent(id, type, initialValue);
    saeComponents.push(newComponent);
    var componentsCarousel = document.getElementById('components');
    componentsCarousel.innerHTML = '';
    for (let saeComponent of saeComponents) {
        componentsCarousel.innerHTML += `<div class="component" id="${saeComponent.id}">${saeComponent.id}</div>`;
    }
    triggerEventsRegistration();
});

var componentsCarousel = document.getElementById('components');
