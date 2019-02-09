const fruitList = ['coconut', 'jackfruit', 'rambutan', 'guava', 'mangosteen'];

main(fruitList, document.getElementById('fruit-field'));
main(fruitList, document.getElementById('dance-field'));

function main(list, fieldElement) {
    // Create buttoms
    for(let i = 0; i < list.length; i++) {
        const listItem = list[i];
        makeButton(listItem, fieldElement);
        
        // Place fruit image on button
        const buttonElement = document.getElementsByTagName('button')[i];
        if(fieldElement.id === 'fruit-field') {
            insertIcon(buttonElement, listItem);
        }
        buttonElement.addEventListener('click', function() {
            switch(fieldElement.id) {
                case 'fruit-field':
                    addBody(listItem);
                    break;
                case 'dance-field':
                    dance(listItem);
                    break;
            }
            // buttonAction(fieldElement, listItem);
        });
    }
}

function makeButton(listItem, fieldElement) {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button', listItem);
    buttonElement.textContent = listItem;
    fieldElement.appendChild(buttonElement);
}
function insertIcon(buttonElement, listItem) {
    const buttonIcon = document.createElement('img');
    buttonIcon.src = './assets/' + listItem + '.jpg';
    buttonIcon.classList.add('fruit-image');
    buttonElement.textContent = '';
    buttonElement.appendChild(buttonIcon);
}

// function buttonAction(fieldElement, listItem) {            
//     switch(fieldElement.id) {
//         case 'fruit-field':
//             addBody(listItem);
//             break;
//         case 'dance-field':
//             dance(listItem);
//             break;
// }

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

// Reset Position by removing 'dance' class from all segments
function reset() {
    const allSegments = document.querySelectorAll('.dance');
    for(let i = 0; i < allSegments.length; i++) {
        allSegments[i].classList.remove('dance');
    }
}

// Add 'dance' class to selected segments to move them up
function move(fruit) {
    const selector = '.segment.' + fruit;
    const selectedSegments = document.querySelectorAll(selector);
    for(let i = 0; i < selectedSegments.length; i++) {
        selectedSegments[i].classList.add('dance');
    }
}