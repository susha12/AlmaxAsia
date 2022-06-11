// header 
const btnTransportClose = document.querySelector(".btnTransport_close");
const TransportTextImgClose = document.querySelector(".Transport_textImg_close");
const header = document.querySelector("header");

btnTransportClose.onclick = ()=>{
    if(btnTransportClose.innerHTML == "Подробнее"){
        TransportTextImgClose.classList.add("active");
        header.classList.add("active");
        btnTransportClose.innerHTML = "Скрыть";
        TransportTextImgClose.classList.remove("close");
        header.classList.remove("close");
    }
    else if(btnTransportClose.innerHTML == "Скрыть"){
        TransportTextImgClose.classList.add("close");
        header.classList.add("close");
        btnTransportClose.innerHTML = "Подробнее";
        TransportTextImgClose.classList.remove("active");
        header.classList.remove("active");
    }
}



// animation two block
// Получаем нужный элемент
const element = document.querySelector('.Project_box__cheked');

let Visible = function (target) {
  // Все позиции элемента
  let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    console.clear();
    console.log('Вы видите элемент :)');
    element.classList.remove("close");
    element.classList.add("active");

  
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
    element.classList.remove("active");
    element.classList.add("close");

  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);

const elementTwo = document.querySelector('.transportation_section');

let VisibleTwo = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top &&
    targetPosition.top < windowPosition.bottom && 
    targetPosition.right > windowPosition.left && 
    targetPosition.left < windowPosition.right) { 
    elementTwo.classList.remove("close");
    elementTwo.classList.add("active");

  
  } else {

    elementTwo.classList.remove("active");
    elementTwo.classList.add("close");

  };
};

window.addEventListener('scroll', function() {
  VisibleTwo (elementTwo );
});

VisibleTwo (elementTwo );
