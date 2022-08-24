function checkWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

checkWebP(function (support) {
    if (support) {
        //Do what you whant =)
        document.querySelector('body').classList.add('webp');
    } else {
        //Do what you whant =)
        document.querySelector('body').classList.add('no-webp');
    }

});

const chapterButton = document.querySelector('.chapter__button');
const sectionWrapper = document.querySelector('.new-section__wrapper');
const sectionCross = document.querySelector('.new-section__cross-btn');
const sectionButtons = document.querySelector('.section__buttons');
const informationWrapper = document.querySelector('.information__wrapper');

function openModalNewSection() {
    sectionButtons.style.display = 'block';
    informationWrapper.style.display = 'block';
    sectionWrapper.classList.add('active-flex');
}
chapterButton.addEventListener('click', openModalNewSection);

function closeModalNewSection() {
    sectionWrapper.classList.remove('active-flex');
}
sectionCross.addEventListener('click', closeModalNewSection);

const sectionGroup = document.querySelector('.new-section__group');
function closeModalGroup(){
    sectionGroup.style.display = 'none';
}

function openModalGroup(){
    const informationBtn = document.querySelector('.information__btn');
    const sectionGroup = document.querySelector('.new-section__group');
    
    informationBtn.addEventListener('click', () => {
        sectionGroup.style.display = 'flex';
    });
}

const newSectionForm = document.querySelector('.new-section__form');
const sectionInput = document.querySelector('.new-section__input-add');
const sectionBtnAdd = document.querySelector('.new-section__btn-add');
const informationContent = document.querySelector('.information__content');
const sectioGroupForm = document.querySelector('.new-section__group-form');

newSectionForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //add section
    let inputValue = sectionInput.value;

    let div = document.createElement('div');
    div.classList.add('information__inner');

    div.insertAdjacentHTML('beforeend', `
            <ul class="information__list">
                <span class="information__title">${inputValue}</span>
            </ul>
            <button class="information__btn">
                <span class="icon-plus information__btn-plus"></span>
                <span class="information__btn-name">Добавить группу</span>
            </button>
        `);
    informationContent.append(div);

    openModalGroup();
    closeModalNewSection();
    newSectionForm.reset();

    //add group
    const sectionGroupForm = document.querySelector('.new-section__group-form');
    const sectionGroupInput = document.querySelector('.new-section__group-input');
    const informationList = document.querySelector('.information__list');

    function addGroup(){
        
        sectionGroupForm.addEventListener('submit', (e) =>{
            e.preventDefault();
        
            let inputValueGroup = sectionGroupInput.value;
        
            informationList.insertAdjacentHTML('beforeend', `
            <li class="information__item">
                <div class="information__item-top">
                    <p class="information__item-name">${inputValueGroup}</p>
                    <p class="information__item_btn-del">-</p>
                </div>
                <div class="information__item-add">
                    <div class="information__item-add_btn">
                        <span class="icon-plus"></span>
                    </div>
                    <button class="information__item-text">Добавить пункт</button>
                </div>
            </li>
                `);
        
            sectioGroupForm.reset();
            closeModalGroup();
        });
    }
    addGroup();
   
});

