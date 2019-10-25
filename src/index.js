'use strict';

let images = [{
        title: 'Plains',
        desc: 'Magic: The Gathering - Plains for M19 Set - AD: Cynthia Sheppard',
        file: '01.jpg'
    },
    {
        title: 'Forest',
        desc: 'Magic: The Gathering - Forest for M19 Set - AD: Cynthia Sheppard',
        file: '02.jpg'
    },
    {
        title: 'Mountain',
        desc: 'Magic: The Gathering - Mountain for M19 Set - AD: Cynthia Sheppard',
        file: '03.jpg'
    },
    {
        title: 'Island',
        desc: 'Magic: The Gathering - Island for M19 Set - AD: Cynthia Sheppard',
        file: '04.jpg'
    },
    {
        title: 'Swamp',
        desc: 'Magic: The Gathering - Swamp for M19 Set - AD: Cynthia Sheppard',
        file: '05.jpg'
    }
];

// getting placeholders to display main image and descriptions
let imageIndex = 0;
let mainImage = document.querySelector('.image');
let descriptionTitle = document.querySelector('.image h1');
let descriptionText = document.querySelector('.image p');

// getting placeholders to display thumbnails
let thumbnails = document.querySelector('.thumbnails');

// getting placeholders to display navigations
let navigationLeft = document.querySelector('.gallery .left');
let navigationRight = document.querySelector('.gallery .right');


//functions
let displayImage = function(index) {
    let img = images[index];
    mainImage.style.backgroundImage = 'url(src/images/' + img.file + ')';
    descriptionTitle.innerText = img.title;
    descriptionText.innerText = img.desc;
};

let generateArrows = function() {
    let arrow1 = document.createElement('div');
    arrow1.style.backgroundImage = 'url(src/arrow.svg)';
    let arrow2 = document.createElement('div');
    arrow2.setAttribute('class', 'right-arrow');
    arrow2.style.backgroundImage = 'url(src/arrow.svg)';
    navigationLeft.appendChild(arrow1);
    navigationRight.appendChild(arrow2);
};

let generateThumbnails = function() {
    images.forEach(function(image) {
        let thumbs = document.createElement('div');
        thumbs.style.backgroundImage = 'url(src/images/' + image.file + ')';
        thumbnails.appendChild(thumbs);
    });
};

let navigateLeft = function() {
    imageIndex = (imageIndex == 0) ? images.length - 1 : --imageIndex;
    displayImage(imageIndex);
};

let navigateRight = function() {
    imageIndex = (imageIndex < images.length - 1) ? ++imageIndex : 0;
    displayImage(imageIndex);
};

let addEvents = function() {
    navigationLeft.addEventListener('click', navigateLeft.bind(this));
    navigationRight.addEventListener('click', navigateRight.bind(this));

    let thumbs = document.querySelectorAll('.thumbnails div');

    thumbs.forEach(function(thumb, index) {
        thumb.addEventListener('click', function() {
            displayImage(index);
        }.bind(this));
    });

    window.addEventListener('resize', function() {
        console.log(window.innerWidth);
    });
};

//helpers
let loadGallery = function() {
    generateThumbnails();
    displayImage(imageIndex);
    addEvents();
    generateArrows();
};

//linitialise galery
loadGallery();