//console.dir(document);

// ждем прогрузки страницы, если вдруг браузер не понимает атрибут defer:
document.addEventListener('DOMContentLoaded', () => {
    'use strict'; // включаем строгий режим

    const tabs = () => {

        const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElem = document.querySelector('.card-details__title');
        //const cardImageElems = document.querySelectorAll('.card__image');
        const cardImageItemElem = document.querySelector('.card__image_item');
        const cardDetailsPriceElem = document.querySelector('.card-details__price');
        const descriptionMemoryElem = document.querySelector('.description__memory');

        const data = [
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: '95990',
                memoryROM: '128',
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
                img: 'img/iPhone-silver.png',
                price: '120990',
                memoryROM: '256',
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: '99990',
                memoryROM: '128',
            },
        ];

        const deactiveAttributeActive = () => {
            cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
        };

        cardDetailChangeElems.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')) {
                    deactiveAttributeActive();
                    btn.classList.add('active');

                    cardDetailsTitleElem.textContent = data[i].name;
                    cardImageItemElem.src = data[i].img;
                    cardImageItemElem.alt = data[i].name;
                    cardDetailsPriceElem.textContent = `${data[i].price}₽`;
                    descriptionMemoryElem.textContent = `Встроенная память (ROM) ${data[i].memoryROM} ГБ`;
                }
            });
        });

        // const hideAll = () => {
        //     for (let i = 0; i < cardDetailChangeElems.length; i++) {
        //         cardDetailChangeElems[i].classList.remove('active');
        //         cardDetailsTitleElems[i].classList.remove('active');
        //         cardImageElems[i].classList.remove('active');
        //     }
        // };

        // for (let i = 0; i < cardDetailChangeElems.length; i++) {
        //     cardDetailChangeElems[i].addEventListener('click', () => {
        //         hideAll();
        //         cardDetailChangeElems[i].classList.add('active');
        //         cardDetailsTitleElems[i].classList.add('active');
        //         cardImageElems[i].classList.add('active');
        //     });
        // }
    };

    const accordion = () => {
        // const characteristicsTitle = document.querySelectorAll('.characteristics__title');
        // const characteristicsDescription = document.querySelectorAll('.characteristics__description');

        // characteristicsTitle.forEach((elem, i) => {
        //     elem.addEventListener('click', () => {
        //         elem.classList.toggle('active');
        //         characteristicsDescription[i].classList.toggle('active');
        //     });
        // });
        const characteristicsListElem = document.querySelector('.characteristics__list');
        const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

        const open = (button, dropDown) => {
            closeAllDrops(button, dropDown);
            dropDown.style.height = `${dropDown.scrollHeight}px`;
            button.classList.add('acnive');
            dropDown.classList.add('active');
        };

        const close = (button, dropDown) => {
            button.classList.remove('active');
            dropDown.classList.remove('active');
            dropDown.style.height = '';
        };

        const closeAllDrops = (button, dropDown) => {
            characteristicsItemElems.forEach((elem) => {
                if (elem.children[0] !== button && elem.children[1] !== dropDown) {
                    close(elem.children[0], elem.children[1]);
                }
            });
        };

        characteristicsListElem.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('characteristics__title')) {
                const parent = target.closest('.characteristics__item');
                const des = parent.querySelector('.characteristics__description');
                des.classList.contains('active') ? close(target, des) : open(target, des);
            }
        });

        // setTimeout(closeAllDrops, 5000); // закрывает через 5 сек раскрытые вкладки
        
    };

    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const modal = document.querySelector('.modal');

        cardDetailsButtonBuy.addEventListener('click', () => {
            modal.classList.add('open');
        });

        modal.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('modal__close')) {
                modal.classList.remove('open');
            }
        });
    };

    tabs();
    accordion();
    modal();
});