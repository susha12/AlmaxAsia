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