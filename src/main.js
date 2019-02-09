// giant iffe
(() => {
    const fruitList = [
        'coconut',
        'jackfruit',
        'rambutan',
        'guava',
        'mangosteen'
    ];
    
    main(fruitList, document.getElementById('fruit-field'));
    main(fruitList, document.getElementById('dance-field'));
    
    function main(list, element) {
        // Create buttoms
        // the forEach array method takes each of it's elements and passes it through the callback function
        // could also look like this v
        // array.forEach(function(element) {
        //     /* do stuff with each element here */
        // })
        list.forEach(listItem => {
            const button = makeButton(element, listItem);
    
            // Place fruit image on button
            if(element.id === 'fruit-field') insertIcon(button, listItem);
    
            // Button functionality
            button.addEventListener('click', buttonAction(element, listItem));
        });
    }
    
    function makeButton(element, listItem) {
        const button = document.createElement('button');
        button.classList.add('button', listItem);
        button.textContent = listItem;
        element.appendChild(button);
        return button;
    }
    
    function insertIcon(button, listItem) {
        const buttonIcon = document.createElement('img');
        buttonIcon.src = './assets/' + listItem + '.jpg';
        buttonIcon.classList.add('fruit-image');
        button.textContent = '';
        button.appendChild(buttonIcon);
    }
    
    function buttonAction(element, listItem) {
        // returns a function that is called when the event fires
        // if the element.id is 'fruit-field' it executes addBody(), otherwise, dance()
        return () => (element.id === 'fruit-field') ? addBody(listItem) : dance(listItem);
    }
    
    // Add body segment on caterpillar
    function addBody(fruit) {
        const segment = document.createElement('span');
        segment.classList.add('segment', fruit);
        document.getElementById('caterpillar-body').appendChild(segment);
    }
    
    function dance(fruit) {
        reset();
        move(fruit);
    }
    
    const setDanceClass = (selection, remove) => {
        const action = remove ? 'remove' : 'add';
        selection.forEach(segment => segment.classList[action]('dance'));
    };
    
    // Reset Position by removing 'dance' class from all segments
    function reset() {
        const allSegments = document.querySelectorAll('.dance');
        setDanceClass(allSegments, true);
    }
    
    // Add 'dance' class to selected segments to move them up
    function move(fruit) {
        const selector = '.segment.' + fruit;
        const selectedSegments = document.querySelectorAll(selector);
        setDanceClass(selectedSegments);
    }
})();