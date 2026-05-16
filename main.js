const header = document.querySelector('header');
header.style = 'width: 100%; height: 100px; background: url(header.jpg) no-repeat center / 100% 100%';
const nav = document.querySelector('nav');
nav.style = 'width: 65%; height: 100px; display: flex; justify-content: center; align-items: center;';
const menu = document.querySelector('.menu');
menu.style = 'list-style-type: none; display: flex; font: bold 25px menu; color: #9c7c32';
const slider = document.getElementsByClassName('slider')[0];
const prew = document.getElementsByClassName('prew')[0];
const next = document.getElementsByClassName('next')[0];
const radio = document.getElementsByTagName('input');
const item = document.querySelector('.item');
const items = document.querySelectorAll('.items');
const gif = document.querySelectorAll('.gif');
const image = ['3.jpg', '2.jpg', '4.jpg', '5.jpg', '1.avif'];
let current = 0;
next.onclick = () => {
    current++;
    if(current == image.length){
        current = 0;
    }
    slider.style.backgroundImage = `url(${image[current]})`;
    radio[current].checked = true;
}
prew.onclick = () => {
    current--;
    if(current < 0){
        current = image.length - 1;
    }
    slider.style.backgroundImage = `url(${image[current]})`;
    radio[current].checked = true;
}
for(let i = 0; i < radio.length; i++){
    radio[i].onchange = () => {
        current = i;
        slider.style.backgroundImage = `url(${image[current]})`
    }
}
for(let i = 0; i < items.length; i++){
    items[i].onmouseover = () => {
        items[i].style.width = '40%';
        gif[i].style.opacity = .5;
    }
    items[i].onmouseleave = () => {
        items[i].style.width = '10%';
        gif[i].style.opacity = 0;
    }
}

window.onload = () => {
    let langI = localStorage.getItem('langPage') || 0;
    h1.innerText = languageData[langI].h1;
    p1.innerText = languageData[langI].p1;
    s2h2.innerText = languageData[langI].s2h2;
    ft.innerText = languageData[langI].ft;
    serv.innerText = languageData[langI].serv;
    rent.innerText = languageData[langI].rent;
    sup.innerText = languageData[langI].sup;
    cont.innerText = languageData[langI].cont;
    num.innerText = languageData[langI].num;
    em.innerText = languageData[langI].em;
    res.innerText = languageData[langI].res;
    nm.innerText = languageData[langI].nm;
    ema.innerText = languageData[langI].ema;
    adr.innerText = languageData[langI].adr;
    innerLanguage(langI);
}

const langBtn = document.querySelectorAll('.lang button');

for(let i  = 0; i < langBtn.length; i++){
    langBtn[i].onclick = () => {
        h1.innerText = languageData[i].h1;
        p1.innerText = languageData[i].p1;
        s2h2.innerText = languageData[i].s2h2;
        ft.innerText = languageData[i].ft;
        serv.innerText = languageData[i].serv;
        rent.innerText = languageData[i].rent;
        sup.innerText = languageData[i].sup;
        cont.innerText = languageData[i].cont;
        num.innerText = languageData[i].num;
        em.innerText = languageData[i].em;
        res.innerText = languageData[i].res;
        nm.innerText = languageData[i].nm;
        ema.innerText = languageData[i].ema;
        adr.innerText = languageData[i].adr;
        innerLanguage(i);
        localStorage.setItem('langBg',i);
    }
}

const languageData = [
    {
        h1: 'Prestige Hotel',
        p1: `The hotel's interior is designed as a space of refined comfort, where every detail enhances the atmosphere of tranquility and high-level service. The understated luxury, soft lighting, and harmony of forms create a sense of coziness from the very first moments of your stay.
                The design is based on elegant minimalism, using natural materials such as marble, wood, high-quality textiles, and metallic accents in warm shades. The color palette combines beige, milky, and deep dark tones, infusing the space with warmth and visual balance.
                The lobby is designed as a stylish living room with designer furniture and art elements that create an atmosphere of privacy and relaxation. The rooms are thoughtfully designed, with spaciousness, comfortable beds, dim lighting, and modern technology that provide the perfect environment for relaxation and work.
                The hotel's interior is a harmonious blend of aesthetics and functionality, creating a sense of privacy, tranquility, and a premium level of comfort.`,
        s2h2: 'Exclusive Views of The Hotel',
        ft: 'The website was created in 2026 by the Elbakyan Educational Complex.',
        serv: 'Services',
        rent:  'Rent',
        sup: 'Support',
        cont: 'Contacts',
        num: 'Number',
        em: 'Email',
        restar: 'Restaurant',
        nm: 'Number: +374********',
        ema: 'Email: **********@gmail.com',
        adr: 'Address: ul. Askcam 34/4'
    },
    {
        h1: 'Отель Престиж',
        p1: `Интерьер отеля создан как пространство утончённого комфорта, где каждая деталь подчёркивает атмосферу спокойствия и высокого уровня сервиса. Сдержанная роскошь, мягкое освещение и гармония форм создают ощущение уюта уже с первых минут пребывания.
                Дизайн основан на элегантном минимализме с использованием натуральных материалов: мрамора, дерева, качественного текстиля и металлических акцентов в тёплых оттенках. Цветовая палитра сочетает бежевые, молочные и глубокие тёмные тона, наполняя пространство теплом и визуальным балансом.
                Лобби оформлено как стильная гостиная с дизайнерской мебелью и арт-элементами, создающими атмосферу приватности и расслабления. Номера продуманы до мелочей: простор, комфортные кровати, приглушённый свет и современные технологии обеспечивают идеальные условия для отдыха и работы.
                Интерьер отеля — это гармоничное сочетание эстетики и функциональности, создающее ощущение уединения, спокойствия и премиального уровня комфорта на протяжении всего пребывания.`,
        s2h2: 'Эксклюзивные Виды Отеля',
        ft: 'Сайт сделан 2026 году образовательный комплекс имени Эльбакяна.',
        serv: 'Сервисы',
        rent: 'Аренда',
        sup: 'Поддержка',
        cont: 'Контакты',
        num: 'Номер',
        em: 'Почта',
        restar: 'Ресторан',
        nm: 'Номер: +374********',
        ema: 'Эмаил: **********@gmail.com',
        adr: 'Адресс: ул. Аскцам 34/4'
    },
];