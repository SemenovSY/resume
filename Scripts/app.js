var aboutBlockRotated = false;
var aboutMeBlockFront = document.getElementById("aboutme-content-front");
var aboutMeBlockBack = document.getElementById("aboutme-content-back");

var h1tag = document.getElementsByClassName("h1tag");
var h1closetag = document.getElementsByClassName("h1closetag");
var h2tag = document.getElementsByClassName("h2tag");
var h2closetag = document.getElementsByClassName("h2closetag");

for (let i = 0; i < h2tag.length; i++) {
    h2tag[i].innerHTML = "&lt;h2&gt;"
    h2closetag[i].innerHTML = "&lt;/h2&gt;"
}

for (let i = 0; i < h1tag.length; i++) {
    h1tag[i].innerHTML = "&lt;h1&gt;"
    h1closetag[i].innerHTML = "&lt;/h1&gt;"
}

function rotateAbout() {
    if (!aboutBlockRotated) {
        aboutMeBlockBack.style.transform = "rotateX(360deg)";
        aboutMeBlockBack.style.webkittransform = "rotateX(360deg)";
        aboutMeBlockFront.style.transform = "rotateX(180deg)";
        aboutMeBlockFront.style.webkittransform = "rotateX(180deg)";
        aboutMeBlockFront.style.boxShadow = "0";
        aboutMeBlockFront.style.boxShadow = "rgba(0, 0, 0, 0.1) 4px -4px";
        aboutBlockRotated = true;
        let setlink = document.getElementById("set-link");
        setlink.innerHTML = "&lt;link&gt;"
    } else {
        aboutMeBlockFront.style.transform = "rotateX(360deg)";
        aboutMeBlockFront.style.webkittransform = "rotateX(360deg)";
        aboutMeBlockBack.style.transform = "rotateX(180deg)";
        aboutMeBlockBack.style.webkittransform = "rotateX(180deg)";
        aboutMeBlockFront.style.boxShadow = "0";
        aboutMeBlockFront.style.boxShadow = "rgba(0, 0, 0, 0.1) 4px 4px";
        aboutBlockRotated = false;
    }
    
}

var selectButtons = document.getElementById("selectButtons");
selectButtons.addEventListener("click", selectButtonPressed);

const urls = {
    "pOne": "https://semenovsy.github.io/SortingVisualizer/",
    "pTwo": "https://semenovsy.github.io/SpectrumVisualizer/",
    "pThree1": "https://github.com/SemenovSY/Invictus-project",
    "pFour1": "https://semenovsy.github.io/books/",
}

function selectButtonPressed(event) {
    let projectType = event.target.id;
    let demoBlock = document.getElementById("demo-img");
    let demoTopBlock = document.getElementById("demo-top");
    let descriptionBlock = document.getElementById("description");
    let hint = document.getElementById("hint");
    

    projUrl = urls[projectType];

    demoTopBlock.style.zIndex = "-1"
    demoBlock.src = `./Style/${projectType + '.png'}`;
    demoBlock.style.marginTop = "0";

    if (projectType === "pThree1" || projectType === "pFour1") {
        hint.style.transform = "translate(0, 210%)";

        if (projectType === "pThree1") {
            demoBlock.style.padding = "0 60px 0 60px";
        } else {
            demoBlock.style.padding = "0";
        }

    } else {
        demoBlock.style.padding = "0";
        hint.style.transform = "translate(0, -100%)";
    }

    descriptionBlock.innerHTML = projectDescription[projectType];
}

function goToProj() {
    if (projUrl) {
        window.open(projUrl, "_blank")
    }
}

function setSecondImg() {
    let demoBlock = document.getElementById("demo-img");

    if (demoBlock.src.includes("Three")) {
        if (demoBlock.src.includes("Three1")) {
            demoBlock.src = "./Style/pThree2.png";
            demoBlock.style.marginTop = "10px";
        } else {
            demoBlock.src = "./Style/pThree1.png";
            demoBlock.style.marginTop = "0";
        }
    }

    if (demoBlock.src.includes("Four")) {
        if (demoBlock.src.includes("Four1")) {
            demoBlock.src = "./Style/pFour2.png";
        } else if (demoBlock.src.includes("Four2")) {
            demoBlock.src = "./Style/pFour3.png";
        } else if (demoBlock.src.includes("Four3")) {
            demoBlock.src = "./Style/pFour4.png";
        } else {
            demoBlock.src = "./Style/pFour1.png";
        }
    }

}

const projectDescription = {
    'pOne' : `<h3>Визуализация алгоритмов сортировки</h3><br/>
            Добро пожаловать в Визуализатор сортировки!
            Я вдохновился видео, которые наглядно демонстрируют работу алгоритмов сортировки,
            и захотел реализовать подобное приложение сам. Я надеюсь, что вам понравится играть с этим инструментом визуализации так же,
            как мне понравилось его создавать.<br/><br/>
            Разработка велась с использованием React.js`,
    'pTwo' : `<h3>Визуализация частотного спектра звука</h3><br/>
            Люблю рабоать под музыку! И именно во время работы над предыдущим проектом пришла идея для этого.
            Целью было сделать 3D визуализацию звукового спектра для прослушиваемых аудио.
            В приложении можно загрузить .mp3 файл с Вашего ПК или выбрать один из двух сэмплов, чтобы увидеть пример работы.<br/><br/>
            Разработка велась на стандартном стеке HTML/CSS/JS с использованием библиотеки p5.js. `,
    'pThree1' : `<h3>Решение кейса с инженерного чемпионата Case-IN 2021</h3><br/>
            Я со своей командой принимал участие по направлению Цифровой Атом. Тема кейса - дистанционная адаптация нового сотрудника в компании.
            Этот проект я считаю одним из самых сложных в виду крайне сжатых сроков на его реализацию. На решение было отведено 5 дней.<br/><br/>
            Требование: реализация рабочего прототипа цифровой системы для погружения новых сотрудников в рабочую, коммуникационную и культурную среду организации. Приложение должно быть с адаптивной версткой.<br/><br/>
            Нами было принято решение реализовать веб-портал. Разработка клиентской части велась с использованием стандартного стека HTML/CSS/JS.
            В итоге моей команде удалось занять призовое место. Это был интересный опыт.
            Получены навыки создания, оформления и администрирования веб-сайтов, веб-приложений.
            А также улучшены навыки создания презентаций и демонстрации своего продукта.`,
    'pFour1' : `<h3>Поисковик книг с адаптивной версткой, разработанный по техническому заданию:</h3><br/>
            Описание: Приложение должно состоять из поисковой строки, куда вводится название книги, 
            рядом должна быть кнопка поиска. Под строкой поиска должен выводиться список сниппетов найденных книг, 
            состоящих из изображения с обложкой, названия книги и автора. При клике на сниппет книги 
            в модальном окне должна выводиться более подробная информация: 
            увеличенное изображение с обложкой, название книги, автор, дата публикации, издатель, ISBN книги.<br/><br/>
            Требования: Приложение должно быть одностраничным.
            Спустя секунду после ввода последнего символа текста в поисковую строку автоматически должен начаться поиск книг. 
            Если в течении секунды пользователь вводит что-то дополнительно, таймер должен сбрасываться.
            Верстка должна быть «тянущейся» от мобильных экранов до больших мониторов.
            Все запросы должны идти с клиента в API Open Library<br/><br/>
            Разработка велась с использованием React.js`
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);

    return Math.round(rand);
}

const socialNetworks = {
    'vk' : "https://vk.com/s.semenovv",
    'tg' : "https://t.me/semenov921",
    'inst' : "https://www.instagram.com/semenov.921/",
    'github' : "https://github.com/SemenovSY",
    'gmail' : "serega.semenovv@gmail.com"
}

let icons = document.getElementById("icons");
icons.addEventListener("mouseover", getLink)
function getLink(event) {
    console.log(event.target.tagname)
    if (event.target.tagName === "IMG"){
        let el = event.target.id;
        let setlink = document.getElementById("set-link");
        setlink.innerHTML = socialNetworks[el];
    }
    
}

function smoothScrolling(targetId) {
    let target = document.getElementById(targetId);
    const topOffset = document.querySelector('.scrollto').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

