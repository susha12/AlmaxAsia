@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
html{
    scroll-behavior: smooth;
}
body {
    width: 100%;
    background-color: #000608;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

/* вес саит  */
.main_content {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;
}

/* форма отправки */
.Contact_section{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000000;
    display: none;
}
.box_Contact{
    height: 400px;
    max-width: 800px;
    width: 100%;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(40px);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 20px;
}
.close_btn{
    position: absolute;
    top: 41px;
    right: 41px;
    cursor: pointer;
    z-index: 10000000;
}
.box_Contact__content{
    max-height: 307px;
    width: 736px;
    margin: 0 20px;
}
.writhe_contents{
    margin: 0 20px;
}
.box_Contact__title{
    height: 61px;
    width: 442px;
    font-size: 50px;
    font-weight: 700;
    line-height: 61px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(43, 43, 43, 1);
}
.box_Contact__text{
    height: 78px;
    width: 578px;
    font-size: 32px;
    font-weight: 500;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(43, 43, 43, 1);
    margin: 10px 0 35px;
}
.box_Contact__inputs{
    display: flex;
    justify-content: space-between;
    position: relative;
}
.inputs>form{
    width: 356px;
    height: 113px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
#fname{
    height: 44px;
    width: 356px;
    left: 95px;
    top: 333px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(43, 43, 43, 1);
    padding: 7px 14px;
    border: none;
}
#lname{
    height: 44px;
    width: 356px;
    left: 95px;
    top: 333px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(43, 43, 43, 1);
    padding: 7px 14px;
    border: none;
}
.btn_send{
    height: 44px;
    width: 261px;
    border-radius: 10px;
    background: rgba(203, 57, 57, 1);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    bottom: 0px;
}

.send_contents{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
}
.send_content__title{
    height: 61px;
    width: 384px;
    font-size: 50px;
    font-weight: 700;
    line-height: 61px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(43, 43, 43, 1);
}
.send_content_text{
    height: 39px;
    width: 580px;
    font-size: 32px;
    font-weight: 500;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(43, 43, 43, 1);
    margin: 20px 0 35px;

}
.send_content_btnHome{
    height: 44px;
    width: 261px;
    border-radius: 10px;
    border: 2px solid rgba(203, 57, 57, 1);
    min-height: 22px;
    min-width: 216px;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(203, 57, 57, 1);
    cursor: pointer;
}

/* шапка сайта */
header {
    min-height: 971px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    padding-top: 121px;
}

header.active {
    animation: header 1s forwards;
}

@keyframes header {
    from {
        min-height: 971px;
    }

    to {
        min-height: 1182px;
    }
}

header.close {
    animation: headerClose 1s forwards;
}

@keyframes headerClose {
    from {
        min-height: 1182px;
    }

    to {
        min-height: 971px;
    }
}

.header_background {
    position: absolute;
    left: 0;
    top: 0;
    width: 1440px;
    min-height: 1220px;
    z-index: -100;
}


.header_box {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background-color: black;
}

.nav_bar {
    width: 100%;
    max-width: 1440px;
    padding: 0 15px;
    /* height: 121px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background: black;
    z-index: 100000;
    animation: startMenuClose 0.5s forwards;
}
.nav_bar:hover{

animation: startMenu 0.5s forwards;
}

@keyframes startMenu {
    from {
        height: 80px;
    }

    to {
        height: 121px;
    }
}
@keyframes startMenuClose {
    from {
        height: 121px;
    }

    to {
        height: 80px;
    }
}


.logo {
    width: 129px;
}

.nav_list {
    height: 44px;
    width: calc(100% - 166px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 37px;
}

.nav_list>li {
    list-style-type: none;
    max-width: 153px;
    padding: 2px 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
}

.nav_list>li>a {
    color: white;
    text-decoration: none;
}

.li_btn {
    background: rgba(203, 57, 57, 1);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    justify-content: center;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    height: 44px;
    min-width: 166px;
    border-radius: 10px;
}

.nav_burger {
    display: none;
}

/* header_title */
.header_title {
    top: 241px;
    height: 226px;
    width: 100%;
    position: absolute;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}

h1 {
    height: 122px;
    width: 809px;
    font-size: 50px;
    font-weight: 700;
    line-height: 61px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
}

.header_title__btns {
    display: flex;
}

.header_btn__one {
    text-decoration: none;
    height: 44px;
    width: 166px;
    border-radius: 10px;
    background: rgba(203, 57, 57, 1);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 12px;
    cursor: pointer;
}

.header_btn__two {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgba(203, 57, 57, 1);
    height: 44px;
    width: 166px;
    margin: 0 12px;
    cursor: pointer;
    text-decoration: none;
}

/* Transport and services */
.Transport_box {
    top: 661px;
    height: 305px;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
}

.Transport_services {
    height: 100%;
    width: 100%;
    max-width: 1148px;
    padding: 0 20px;
}

.Transport_services__title {
    height: 46px;
    width: 408px;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 30px;
}

.Transport_text__one {
    height: 54px;
    width: 451px;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
}

.Transport_textImg_close {
    display: flex;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    overflow: hidden;
    height: 0px;
}

.Transport_textImg_close.active {
    animation: headerBig 1s forwards;
}

@keyframes headerBig {
    from {
        height: 0px;
    }

    to {
        height: 200px;
    }
}

.Transport_textImg_close.close {
    animation: TransportTextImgClose 1s forwards;
}

@keyframes TransportTextImgClose {
    from {
        height: 200px;
    }

    to {
        height: 0px;
    }
}


.Transport_text__two {
    height: 192px;
    width: 446px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}

.Transport_img {
    height: 266px;
    width: 451px;
    border-radius: 20px;
}

.btnTransport_close {
    height: 44px;
    width: 166px;
    border-radius: 10px;
    border: 2px solid rgba(203, 57, 57, 1);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 30px;
}


/* Project logistics */
.box_Project__logistics {
    height: 1102px;
    max-width: 1440px;
    width: 100%;
    background: rgba(250, 251, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.Project_title {
    height: 46px;
    width: 449px;
    margin: 60px auto;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    color: rgba(43, 43, 43, 1);
}

.Project_box__cheked {
    height: 410px;
    width: 926px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
}

.Project_box__cheked.active {
    animation: ProjectCheked 2s forwards;
}

@keyframes ProjectCheked {
    from {
        top: 150px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

.Project_box__cheked.close {
    animation: ProjectChekedClose 2s forwards;
}

@keyframes ProjectChekedClose {
    from {
        top: 0px;
        opacity: 1;
    }

    to {
        top: 150px;
        opacity: 0;
    }
}

.box_cheked__one {
    display: flex;
    justify-content: start;
    align-items: center;
}

.box_cheked__img {
    height: 41.6px;
    width: 41.6px;
}

.box_cheked__text {
    height: 48px;
    width: 846px;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(43, 43, 43, 1);
    margin-left: 34.7px;
    display: flex;
    align-items: center;
}

/* box Transportation  */
.box_transportation {
    margin: 70px auto;
    height: 263px;
    max-width: 1116px;
    width: 100%;
}

.transportation_title {
    height: 46px;
    width: 227px;
    margin: 0px auto 63px;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    color: rgba(43, 43, 43, 1);
}

.transportation_section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
}

.transportation_section.active {
    animation: transportationSection 2s forwards;
}

@keyframes transportationSection {
    from {
        right: 150px;
        opacity: 0;
    }

    to {
        right: 0px;
        opacity: 1;
    }
}

.transportation_section.close {
    animation: transportationSectionClose 2s forwards;
}

@keyframes transportationSectionClose {
    from {
        right: 0px;
        opacity: 1;
    }

    to {
        right: 150px;
        opacity: 0;
    }
}

.transportation_section__one {
    height: 154px;
    width: 294px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.transportation_section__img.one {
    height: 70px;
    width: 100px;
}

.transportation_section__img.two {
    height: 88.8px;
    width: 100px;
}

.transportation_section__img.three {
    height: 100px;
    width: 87.5px;
}

.transportation_section__text {
    height: 34px;
    width: 294px;
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(43, 43, 43, 1);
}

.transportation_footer__title {
    height: 46px;
    width: 1003px;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(43, 43, 43, 1);
    margin: 80px auto 130px;
}

/* Industry Solutions box three */
.Industry_Solutions__box {
    max-width: 1440px;
    width: 100%;
    background: linear-gradient(180deg, #282828 0%, rgba(54, 53, 53, 0) 47.66%, rgba(63, 63, 63, 0.54) 100%);
    box-shadow: 0px 20px 40px 0px rgba(50, 50, 50, 0.25);
    position: relative;
    max-height: 563px;
    overflow: hidden;
}

.Industry_Solutions__box.active {
    animation: Industrysolutionsbox 1s forwards;
}

@keyframes Industrysolutionsbox {
    from {
        max-height: 563px;
    }

    to {
        max-height: 1537px;
    }
}

.Industry_Solutions__box.close {
    animation: IndustrysolutionsboxClose 1s forwards;
}

@keyframes IndustrysolutionsboxClose {
    from {
        min-height: 1537px;
    }

    to {
        min-height: 563px;
    }
}

.Solutions_box__background {
    position: relative;
    width: 1440px;
    max-height: 563px;

}

.Solutions_box__background.active {
    animation: SolutionsBoxBackground 1s forwards;
}

@keyframes SolutionsBoxBackground {
    from {
        max-height: 563px;
    }

    to {
        max-height: 1537px;
    }
}

.Solutions_box__background.close {
    animation: IndustrysolutionsboxClose 1s forwards;
}

@keyframes SolutionsBoxBackgroundClose {
    from {
        min-height: 1537px;
    }

    to {
        min-height: 563px;
    }
}

.Solutions_box__content {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    max-height: 563px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow: hidden;
}

.Solutions_box__content.active {
    animation: SolutionsBoxContent 1s forwards;
}

@keyframes SolutionsBoxContent {
    from {
        max-height: 563px;
    }

    to {
        max-height: 1537px;
    }
}

.Solutions_box__content.close {
    animation: SolutionsBoxContentClose 1s forwards;
}

@keyframes SolutionsBoxContentClose {
    from {
        min-height: 1537px;
    }

    to {
        min-height: 563px;
    }
}

.box_content__one {
    height: 300px;
    max-width: 1118px;
    width: 100%;
    margin: 131px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content_one__left {
    width: 451px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content_one__img {
    height: 300px;
    width: 451px;
    border-radius: 20px;
}

.content_one__right {
    height: 100%;
    width: 546px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: rgba(255, 255, 255, 1);
    margin-left: 20px;
}

.one_right__title {
    height: 46px;
    max-width: 454px;
    left: 735px;
    top: 153px;
    margin-top: 22px;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: left;
}

.one_right__text {
    height: 108px;
    max-width: 546px;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin: 30px 0;
}

.one_right__btn {
    height: 44px;
    width: 166px;
    border-radius: 10px;
    background: rgba(203, 57, 57, 1);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.one_right__btn.active {
    display: none;
}

.box_content__two {
    color: rgba(255, 255, 255, 1);
    display: flex;
    max-width: 1208px;
    padding: 0 55px;
    height: 800px;
    margin: 0px 25px;
    width: 100%;
    justify-content: space-between;
}

.content_two__left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.two_left__one {
    position: relative;
    width: 451px;
    height: auto;
}

.two_left__one.active {
    padding-top: 55px;
}

.two_left__one.activeone {
    padding-top: 49px;
}

.two_left__title {
    height: 34px;
    display: flex;
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    display: inline;
    width: 360px;
    position: relative;
    left: -25px;
}

.two_left__img {
    height: 34px;
    width: 71px;
    border-radius: 10px;
    display: inline;
    position: absolute;
    top: 0px;
    right: -20px;
}

.two_left__img.active {
    top: 50px;
}

.two_left__img.activeone {
    top: 47px;
}

.two_left__text {
    height: auto;
    width: 451px;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    margin-top: 20px;
}

.two_left__text::before {
    content: "";
    background: white;
    width: 4px;
    height: 4px;
    border-radius: 100px;
    position: absolute;
    left: -15px;
    top: 10px;
}

.content_two__right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
}

.btn_close_block {
    height: 44px;
    width: 166px;
    border-radius: 10px;
    border: 2px solid rgba(203, 57, 57, 1);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 29px;
}

/* .Test equipment box */
.Test_equipment {
    color: rgba(43, 43, 43, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 1440px;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 7px 18px 0px rgba(255, 255, 255, 0.25);
    height: 794px;
    background: #FAFBFF;
}

.Test_equipment__title {
    margin: 59px auto;
    min-height: 114px;
    width: 736px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.Test_equipment__titleOne {
    height: 46px;
    width: 633px;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: center;
}

.Test_equipment__text {
    color: rgba(42, 42, 42, 1);
    height: 48px;
    width: 736px;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
}

.Test_equipment__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1166px;
    width: 100%;
    height: 690px;
    padding: 0 25px;
    margin: 0 auto;
    position: relative;
}

.Test_equipment__container.active {
    animation: TestEquipmentContainer 2s forwards;
}

@keyframes TestEquipmentContainer {
    from {
        right: -150px;
        opacity: 0;
    }

    to {
        right: 0px;
        opacity: 1;
    }
}

.Test_equipment__container.close {
    animation: TestEquipmentContainerClose 2s forwards;
}

@keyframes TestEquipmentContainerClose {
    from {
        right: 0px;
        opacity: 1;
    }

    to {
        right: -150px;
        opacity: 0;
    }
}

.Test_equipment_colump {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 261px;
    height: 497px;
}

.equipment_colump__img {
    height: 173px;
    max-width: 261px;
    border-radius: 20px;
}

.quipment_colump__title {
    height: 102px;
    width: 254px;
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
}

.quipment_colump__text {
    height: 88px;
    width: 261px;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
}

.quipment_colump__btn {
    height: 44px;
    width: 166px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

/* footer box */
footer {
    color: white;
    height: 501px;
    max-width: 1440px;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.footer_background {
    height: 100%;
    max-width: 1440px;
}

.footer_container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.footer_container__absolute {
    max-width: 1179px;
    padding: 0 25px;
    width: 100%;
    height: 301px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 100px;
}

.footer_container__left {
    height: 301px;
    width: 288px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.footer_left__title {
    height: 61px;
    width: 262px;
    font-size: 50px;
    font-weight: 700;
    line-height: 61px;
    letter-spacing: 0em;
    text-align: left;
}

.footer_left__phoneOne {
    width: 246px;
    height: 27px;
}

.phoneOne {
    height: 24px;
    width: 24px;
    margin-right: 14px;
}

.phoneNumber {
    height: 27px;
    width: 186px;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    text-decoration: none;
}

.footer_left__location {
    display: flex;
}

.IconLocation {
    height: 25.3px;
    width: 21.3px;
    margin-right: 14px;
}

.location_text {
    height: 54px;
    width: 221px;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
}

.footer_left__mail {
    display: flex;
}

.mail {
    height: 21.3px;
    width: 26.6px;
    margin-right: 14px;
}

.mail_text>a {
    height: 27px;
    width: 246px;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    text-decoration: none;
}

.footer_container__right {
    width: 541px;
    height: 301px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
}

.footer_right__title {
    height: 61px;
    width: 541px;
    font-size: 50px;
    font-weight: 700;
    line-height: 61px;
    letter-spacing: 0em;
    text-align: start;
}

.footer_right__text {
    height: 27px;
    width: 451px;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin: 30px 0;
}

.footer_right__btn {
    height: 44px;
    width: 261px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: rgba(203, 57, 57, 1);
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
}

.footer__alux{
    position: absolute;
    width: 300px;
    height: 170px; 
    bottom: -90px;
    left: 35%;
    display: flex;
    display: flex;
    border-top: 1px solid rgba(87, 91, 111, 0.5);
    margin-top: 50px;
}
.footer__alux>p{
    margin: 10px;
    font-size: 15px;
    line-height: 17px;
}
.footer__alux>a>img{
    width: 150px;
}

@media only screen and (max-width: 1065px) {

    /* шапка сайта */
    header {
        min-height: 867px;
        padding-top: 121px;

    }

    @keyframes header {
        from {
            min-height: 867px;
        }

        to {
            min-height: 1052px;
        }
    }

    @keyframes headerClose {
        from {
            min-height: 1052px;
        }

        to {
            min-height: 867px;
        }
    }

    /* вес саит  */
    .main_content {
        max-width: 1065px;
    }

    .logo {
        width: 109px;
    }

    .nav_list>li {
        max-width: 103px;
        font-size: 14px;
        line-height: 18px;
    }

    .li_btn {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        min-width: 116px;
    }

    h1 {
        height: 112px;
        width: 609px;
        font-size: 40px;
        font-weight: 600;
        line-height: 41px;
    }

    .header_btn__one {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        max-width: 116px;
    }

    .header_btn__two {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        max-width: 116px;
    }

    /* Transport and services */
    .Transport_box {
        top: 561px;
    }

    .Transport_services {
        height: 100%;
        width: 100%;
        max-width: 1148px;
        padding: 0 20px;
    }

    .Transport_services__title {
        font-size: 30px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0em;
    }

    .Transport_text__one {
        height: 34px;
        width: 291px;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
    }

    .Transport_text__two {
        height: 152px;
        width: 306px;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
    }

    .Transport_img {
        width: 351px;
    }

    .btnTransport_close {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        max-width: 116px;
    }

    /* Project logistics */
    .box_Project__logistics {
        height: 1102px;
        max-width: 1440px;
        width: 100%;
        background: rgba(250, 251, 255, 1);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    .Project_title {
        width: 359px;
        margin: 40px auto;
        font-size: 30px;
        text-align: center;
        font-weight: 600;
    }

    .Project_box__cheked {
        width: 726px;
    }

    @keyframes ProjectCheked {
        from {
            top: 100px;
            opacity: 0;
        }

        to {
            top: 0px;
            opacity: 1;
        }
    }

    @keyframes ProjectChekedClose {
        from {
            top: 0px;
            opacity: 1;
        }

        to {
            top: 100px;
            opacity: 0;
        }
    }

    .box_cheked__img {
        height: 31.6px;
        width: 31.6px;
    }

    .box_cheked__one {
        height: 68px;
        max-width: 722px;
    }

    .box_cheked__text {
        padding: 0 10px;
        height: 68px;
        max-width: 846px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin-left: 18.7px;
    }

    /* Project logistics */
    .box_Project__logistics {
        height: 1002px;
    }

    /* box Transportation  */

    .box_transportation {
        margin: 50px auto;
        height: 263px;
        max-width: 1116px;
        width: 100%;
        padding: 5px 20px;
    }

    .transportation_title {
        height: 40px;
        width: 167px;
        margin: 0px auto 53px;
        font-size: 30px;
        font-weight: 600;
        line-height: 30px;
        text-align: center;
    }

    .transportation_section {
        padding: 0px 10px;
    }

    @keyframes transportationSection {
        from {
            right: 100px;
            opacity: 0;
        }

        to {
            right: 0px;
            opacity: 1;
        }
    }

    @keyframes transportationSectionClose {
        from {
            right: 0px;
            opacity: 1;
        }

        to {
            right: 100px;
            opacity: 0;
        }
    }


    .transportation_section__one {
        height: 124px;
        width: 204px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .transportation_section__img.one {
        height: 35px;
        width: 50px;
    }

    .transportation_section__img.two {
        height: 44.4px;
        width: 50px;
    }

    .transportation_section__img.three {
        height: 50px;
        width: 44px;
    }

    .transportation_section__text {
        height: 34px;
        width: 134px;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
    }

    .transportation_footer__title {
        height: 66px;
        max-width: 703px;
        width: 100%;
        font-size: 30px;
        font-weight: 600;
        line-height: 30px;
        text-align: center;
        margin: 60px auto 60px;
    }

    /* Industry Solutions box three */
    .Industry_Solutions__box {
        max-width: 1440px;
        width: 100%;
        max-height: 453px;
    }

    @keyframes Industrysolutionsbox {
        from {
            max-height: 453px;
        }

        to {
            max-height: 1150px;
        }
    }

    @keyframes IndustrysolutionsboxClose {
        from {
            min-height: 1150px;
        }

        to {
            min-height: 453px;
        }
    }

    .Solutions_box__background {
        position: relative;
        width: 1440px;
        max-height: 453px;
    }

    @keyframes SolutionsBoxBackground {
        from {
            max-height: 453px;
        }

        to {
            max-height: 1150px;
        }
    }

    @keyframes SolutionsBoxBackgroundClose {
        from {
            min-height: 1150px;
        }

        to {
            min-height: 453px;
        }
    }

    .Solutions_box__content {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        max-height: 453px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        overflow: hidden;
    }

    @keyframes SolutionsBoxContent {
        from {
            max-height: 563px;
        }

        to {
            max-height: 1150px;
        }
    }

    @keyframes SolutionsBoxContentClose {
        from {
            min-height: 1150px;
        }

        to {
            min-height: 563px;
        }
    }

    .box_content__one {
        height: 250px;
        margin: 101px 15px;
    }

    .content_one__left {
        max-width: 43%;
    }

    .content_one__img {
        height: 180px;
        max-width: 281px;
        width: 100%;
    }

    .content_one__right {
        max-width: 57%;
        color: rgba(255, 255, 255, 1);
        margin-left: 10px;
    }

    .one_right__title {
        margin-top: 52px;
        font-size: 30px;
        font-weight: 600;
        line-height: 30px;
    }

    .one_right__text {
        height: 108px;
        max-width: 446px;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        margin: 20px 0;
    }

    .one_right__btn {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        max-width: 116px;
    }

    .box_content__two {
        padding: 0 10px;
        height: 570px;
        margin: 0px 25px;
    }

    .content_two__left {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .two_left__one {
        position: relative;
        width: 351px;
        height: auto;
    }

    .two_left__one.active {
        padding-top: 40px;
    }

    .two_left__one.activeone {
        padding-top: 41px;
    }

    .two_left__title {
        height: 24px;
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
        width: 250px;
        left: -10px;
        margin-bottom: 20px;
    }

    .two_left__img {
        height: 30px;
        width: 41px;
        right: 0px;
    }

    .two_left__img.active {
        top: 40px;
    }

    .two_left__img.activeone {
        top: 43px;
    }

    .two_left__text {
        width: 351px;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        margin-top: 10px;
    }

    .two_left__text::before {
        left: -10px;
    }

    .content_two__right {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .btn_close_block {
        margin-top: 29px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        max-width: 116px;
    }

    /* .Test equipment box */
    .Test_equipment {
        height: 794px;
    }

    .Test_equipment__title {
        margin: 39px auto;
        min-height: 114px;
        width: 736px;
    }

    .Test_equipment__titleOne {
        height: 36px;
        width: 533px;
        font-size: 30px;
        font-weight: 600;
        line-height: 30px;
    }

    .Test_equipment__text {
        max-width: 606px;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
    }

    .Test_equipment__container {
        height: 450px;
    }

    @keyframes TestEquipmentContainer {
        from {
            right: -100px;
            opacity: 0;
        }

        to {
            right: 0px;
            opacity: 1;
        }
    }

    @keyframes TestEquipmentContainerClose {
        from {
            right: 0px;
            opacity: 1;
        }

        to {
            right: -100px;
            opacity: 0;
        }
    }

    .Test_equipment_colump {
        width: 201px;
        height: 427px;
    }

    .equipment_colump__img {
        height: auto;
        max-width: 201px;
    }

    .quipment_colump__title {
        height: 70px;
        width: 201px;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
    }

    .quipment_colump__text {
        height: 88px;
        width: 201px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }

    .quipment_colump__btn {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        max-width: 116px;
        background: rgba(203, 57, 57, 1);
    }

    /* footer box */
    footer {
        height: 381px;
    }

    .footer_container__absolute {
        padding: 0 15px;
        justify-content: space-around;
        margin-top: 50px;
    }

    .footer_container__left {
        height: 281px;
    }

    .footer_left__title {
        height: 61px;
        display: flex;
        align-items: center;
        width: 262px;
        font-size: 30px;
        font-weight: 600;
        line-height: 30px;
    }

    .footer_left__phoneOne {
        width: 206px;
        height: 27px;
    }

    .phoneOne {
        height: 19px;
        width: 19px;
        margin-right: 10px;
    }

    .phoneNumber {
        height: 20px;
        width: 186px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }

    .IconLocation {
        height: auto;
        width: 16.3px;
        margin-right: 14px;
    }

    .location_text {
        height: 24px;
        width: 221px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }

    .mail {
        height: auto;
        width: 25.6px;
    }

    .mail_text>a {
        height: 27px;
        width: 246px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }

    .footer_container__right {
        max-width: 335px;
        height: 201px;
    }

    .footer_right__title {
        height: 61px;
        width: 331px;
        font-size: 30px;
        font-weight: 600;
        line-height: 41px;
    }

    .footer_right__text {
        width: 251px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        margin: 20px 0;
    }

    .footer_right__btn {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        max-width: 155px;
        margin-top: 15px;
    }

    .footer__alux{
        /* bottom: -50px; */
    }
    .footer__alux>p{
        margin-right: 15px;
        font-size: 14px;
    }
}


@media only screen and (max-width: 802px) {

    /* вес саит  */
    .main_content {
        max-width: 390px;
        width: 100%;
    }
/* форма отправки */
.Contact_section{
    max-width: 390px;
    margin: 0 auto;
}
.box_Contact{
    height: 448px;
    max-width: 926px;
    width: 100%;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(40px);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
}
.close_btn{
    position: absolute;
    top: 25px;
    right: 25px;
}
.box_Contact__content{
    min-height: 307px;
    width: 100%;
    margin: 0 10px;
}
.writhe_contents{
    margin: 0;
}
.box_Contact__title{
    height: 31px;
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    line-height: 31px;
    text-align: center;
}
.box_Contact__text{
    height: 68px;
    width: 90%;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(43, 43, 43, 1);
    margin: 10px auto 25px;
}
.box_Contact__inputs{
    display: flex;
    justify-content: start;
    position: relative;
    height: 173px;
}
.inputs>form{
    width: 100%;
    height: 113px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
#fname{
    height: 40px;
    width: 306px;
    font-size: 14px;
    font-weight: 400;
}
#lname{
    height: 40px;
    width: 306px;
    font-size: 14px;
    font-weight: 400;
}
.btn_send{
    height: 40px;
    width: 201px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    right: 65px;
    bottom: 0px;
}

.send_contents{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
}
.send_content__title{
    height: 51px;
    width: 95%;
    font-size: 30px;
    font-weight: 600;
}
.send_content_text{
    height: 69px;
    width: 90%;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    margin: 20px 0 25px;
}
.send_content_btnHome{
    height: 40px;
    width: 201px;
    font-size: 14px;
    font-weight: 500;
}


    /* шапка сайта */
    header {
        min-height: 741px;
        padding-top: 80px;
    }
    @keyframes header {
        from {
            min-height: 741px;
        }

        to {
            min-height: 1052px;
        }
    }

    @keyframes headerClose {
        from {
            min-height: 1052px;
        }

        to {
            min-height: 741px;
        }
    }

    .header_background {
        width: auto;
        min-height: 1220px;
    }

    .nav_bar {
        max-width: 390px;
        width: 100%;
        padding: 0 10px;
        height: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        animation: startMenuClo 0.5s forwards;
}
.nav_bar:hover{

animation: startMe 0.5s forwards;
}
    .logo {
        z-index: 10000;
        width: 80px;
        position: absolute;
        top: 20px;
    }

    .nav_list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 0px;
        position: absolute;
        width: 100%;
        background-color: rgb(1, 0, 0);
        left: 0px;
        top: 0px;
        z-index: 1;
        color: black;
        display: flex;
        opacity: 0;
        height: 0;
        overflow: hidden;
    }

    .nav_list.active {
        animation: navList 1s forwards;
    }

    @keyframes navList {
        from {
            display: none;
            opacity: 0;
            height: 0;
        }

        to {
            display: flex;
            opacity: 1;
            height: 400px;
        }
    }

    .nav_list.close {
        animation: navListClose 1s forwards;
    }

    @keyframes navListClose {
        from {
            display: flex;
            opacity: 1;
            height: 400px;
        }

        to {
            display: none;
            opacity: 0;
            height: 0;
        }
    }

    /* nav burger */
    .nav_burger {
        display: flex;
        position: relative;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 15px;
    }

    .burger_img {
        display: flex;
        width: 40px;

    }

    .burger_img__close {
        position: absolute;
        display: flex;
        z-index: 100;
        display: none;
        left: -45px;
        top: 0px;
    }

    .nav_list>li {
        max-width: 223px;
        padding: 2px 5px;
        margin: 10px;
    }

    .nav_list>li>a {
        color: rgb(255, 255, 255);
        text-decoration: none;
    }

    .nav_list>li>a:hover {
        color: rgba(203, 57, 57, 1);
    }
    .li_btn>a.btn:hover{
        color: white;
    }

    /* header_title */
    .header_title {
        top: 201px;
        height: 186px;
        width: 100%;
    }

    h1 {
        height: 102px;
        width: 90%;
        font-size: 30px;
        font-weight: 600;
        line-height: 31px;
        color: rgba(255, 255, 255, 1);
    }

    /* Transport and services */
    .Transport_box {
        top: 461px;
        height: 305px;
        width: 100%;
    }

    .Transport_services {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
    }

    .Transport_services__title {
        height: 46px;
        width: 100%;
        font-size: 24px;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: 0em;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 30px;
    }

    .Transport_text__one {
        height: 54px;
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
    }

    .Transport_textImg_close {
        flex-direction: column;
        margin-top: 30px;
        width: 100%;
        max-height: 336px;
    }

    .Transport_textImg_close.active {
        animation: headerBig 1.3s forwards;
    }

    @keyframes headerBig {
        from {
            height: 0px;
        }

        to {
            height: 400px;
        }
    }

    .Transport_textImg_close.close {
        animation: TransportTextImgClose 0.8s forwards;
    }

    @keyframes TransportTextImgClose {
        from {
            height: 400px;
        }

        to {
            height: 0px;
        }
    }

    .Transport_text__two {
        min-height: 152px;
        width: 100%;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
    }

    .Transport_img {
        height: auto;
        width: 90%;
        border-radius: 20px;
        margin: 0 auto;
    }

    /* Project logistics */
    .box_Project__logistics {
        height: 1112px;
    }

    .Project_title {
        height: 30px;
        width: 100%;
        margin: 40px auto;
        font-size: 30px;
        font-weight: 600;
        line-height: 20px;
    }

    .Project_box__cheked {
        height: 450px;
        width: 100%;
        padding: 0 10px;
    }

    @keyframes ProjectCheked {
        from {
            top: 50px;
            opacity: 0;
        }

        to {
            top: 0px;
            opacity: 1;
        }
    }

    @keyframes ProjectChekedClose {
        from {
            top: 0px;
            opacity: 1;
        }

        to {
            top: 50px;
            opacity: 0;
        }
    }

    .box_cheked__one {
        width: 100%;
        height: 70px;
        margin: 10px 0;
        display: flex;
        align-items: flex-start;
    }

    .box_cheked__img {
        margin-top: 5px;
        height: 30.6px;
        width: 30.6px;
    }

    .box_cheked__text {
        height: 65px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        margin-left: 5.7px;
        justify-content: start;
        align-items: flex-start;
    }

    /* box Transportation  */
    .box_transportation {
        margin: 20px auto;
        height: 863px;
        width: 100%;
    }

    .transportation_title {
        height: 32px;
        width: 227px;
        margin: 0px auto 33px;
        font-size: 30px;
        font-weight: 600;
        line-height: 20px;
    }

    .transportation_section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    @keyframes transportationSection {
        from {
            right: 100px;
            opacity: 0;
        }

        to {
            right: 0px;
            opacity: 1;
        }
    }

    @keyframes transportationSectionClose {
        from {
            right: 0px;
            opacity: 1;
        }

        to {
            right: 100px;
            opacity: 0;
        }
    }

    .transportation_section__one {
        height: 104px;
        width: 204px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .transportation_section__img.one {
        height: auto;
        width: 50px;
    }

    .transportation_section__img.two {
        height: auto;
        width: 50px;
    }

    .transportation_section__img.three {
        height: auto;
        width: 50px;
    }

    .transportation_section__text {
        height: 24px;
        width: 194px;
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        color: rgba(43, 43, 43, 1);
    }

    .transportation_footer__title {
        height: 46px;
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: rgba(43, 43, 43, 1);
        margin: 30px auto 50px;
    }

    /* Industry Solutions box three */
    .Industry_Solutions__box {
        width: 100%;
        max-height: 388px;
    }

    @keyframes Industrysolutionsbox {
        from {
            max-height: 388px;
        }

        to {
            max-height: 1610px;
        }
    }

    @keyframes IndustrysolutionsboxClose {
        from {
            max-height: 1610px;
        }

        to {
            max-height: 388px;
        }
    }

    .Solutions_box__content {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        max-height: 563px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        overflow: hidden;
    }

    .Solutions_box__background {
        position: relative;
        width: 1440px;
        max-height: 388px;
    }

    @keyframes SolutionsBoxBackground {
        from {
            max-height: 388px;
        }

        to {
            max-height: 1610px;
        }
    }

    @keyframes SolutionsBoxBackgroundClose {
        from {
            max-height: 1610px;
        }

        to {
            max-height: 388px;
        }
    }

    .Solutions_box__content {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        max-height: 388px;
    }

    @keyframes SolutionsBoxContent {
        from {
            max-height: 388px;
        }

        to {
            max-height: 1610px;
        }
    }

    @keyframes SolutionsBoxContentClose {
        from {
            max-height: 1610px;
        }

        to {
            max-height: 388px;
        }
    }

    .box_content__one {
        height: 383px;
        min-width: 100%;
        margin: 0px 0px;
        flex-direction: column;
    }

    .content_one__left {
        min-width: 100%;
        height: 200px;
        margin: 0px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content_one__img {
        height: 150px;
        width: 250px;
    }

    .content_one__right {
        height: 180px;
        min-width: 100%;
    }

    .one_right__title {
        height: 36px;
        max-width: 100%;
        margin-top: 5px;
        font-size: 24px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        margin: 0 auto;
    }

    .one_right__text {
        height: 70px;
        max-width: 90%;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        margin: 15px auto;
    }

    .one_right__btn {
        margin: 10px auto;
        height: 44px;
        width: 166px;
    }

    .one_right__btn.active {
        display: none;
    }

    .box_content__two {
        flex-direction: column;
        padding: 0 5px;
        height: 1124px;
        margin: 10px 0px;
        width: 100%;
    }

    .content_two__left {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .two_left__one {
        position: relative;
        width: 100%;
        height: auto;
        margin: 10px;
    }

    .two_left__one.active {
        padding-top: 0px;
    }

    .two_left__one.activeone {
        padding-top: 0px;
    }

    .two_left__title {
        height: 24px;
        display: flex;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        width: 90%;
        position: relative;
        left: 0px;
    }

    .two_left__img {
        height: 24px;
        width: 41px;
        top: 0px;
        right: 20px;
    }

    .two_left__img.active {
        top: 0px;
    }

    .two_left__img.activeone {
        top: 0px;
    }

    .two_left__text {
        height: auto;
        width: 90%;
        margin-left: 15px;
        font-size: 12px;
        font-weight: 300;
        line-height: 16px;
        margin-top: 10px;
    }

    .two_left__text::before {
        content: "";
        background: white;
        width: 4px;
        height: 4px;
        border-radius: 100px;
        position: absolute;
        left: -15px;
        top: 10px;
    }

    .content_two__right {
        width: 100%;
        height: 50%;
        justify-content: flex-start;
        align-items: center;
        margin: 10px;
    }

    /* .Test equipment box */
    .Test_equipment {
        height: 1230px;
    }

    .Test_equipment__title {
        margin: 29px auto;
        min-height: 94px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }

    .Test_equipment__titleOne {
        height: 46px;
        width: 100%;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
    }

    .Test_equipment__text {
        color: rgba(42, 42, 42, 1);
        height: 58px;
        width: 90%;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }

    .Test_equipment__container {
        justify-content: space-between;
        align-items: center;
        max-width: 1166px;
        width: 100%;
        height: 1060px;
        flex-direction: column;
        padding: 0 15px;
    }

    @keyframes TestEquipmentContainer {
        from {
            right: -100px;
            opacity: 0;
        }

        to {
            right: 0px;
            opacity: 1;
        }
    }

    @keyframes TestEquipmentContainerClose {
        from {
            right: 0px;
            opacity: 1;
        }

        to {
            right: -100px;
            opacity: 0;
        }
    }

    .Test_equipment_colump {
        align-items: center;
        width: 261px;
        height: 327px;
        margin: 15px 0;
    }

    .equipment_colump__img {
        height: auto;
        max-width: 201px;
    }

    .quipment_colump__title {
        padding-top: 8px;
        height: 48px;
        width: 254px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
    }

    .quipment_colump__text {
        height: 68px;
        width: 261px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
        margin: 10px 0;
    }

    .quipment_colump__btn {
        min-height: 44px;
        min-width: 166px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    /* footer box */
    footer {
        height: 501px;
        width: 100%;
    }

    .footer_background {
        height: 100%;
    }

    .footer_container__absolute {
        padding: 0 15px;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        margin-top: 20px;
        flex-direction: column;
    }

    .footer_container__left {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .footer_left__title {
        height: 61px;
        width: 262px;
        font-size: 30px;
        font-weight: 600;
        line-height: 20px;
    }

    .footer_left__phoneOne {
        width: 146px;
        height: 27px;
        display: flex;
    }

    .phoneOne {
        height: 20px;
        width: 20px;
        margin-right: 10px;
    }

    .phoneNumber {
        height: 27px;
        width: 186px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        margin-bottom: 15px;
    }

    .footer_left__location {
        display: flex;
    }

    .IconLocation {
        height: 23px;
        width: 20px;
        margin-right: 10px;
    }

    .location_text {
        height: 20px;
        width: 221px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }

    .footer_left__mail {
        display: flex;
    }

    .mail {
        height: 17px;
        width: 20px;
        margin-right: 10px;
    }

    .mail_text>a {
        height: 27px;
        width: 246px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }

    .footer_container__right {
        width: 100%;
        height: 48%;
        padding-top: 20px;

    }

    .footer_right__title {
        height: 31px;
        width: 100%;
        font-size: 30px;
        font-weight: 600;
        line-height: 20px;
    }

    .footer_right__text {
        width: 100%;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        margin: 20px 0;
    }

    .footer_right__btn {
        min-height: 44px;
        min-width: 261px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: rgba(203, 57, 57, 1);
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        margin: 0 auto;
    }

    .btn_close_block {
        margin-top: -59px;
    }

    .footer__alux{
        height: 45px; 
        bottom: 0px;
        bottom: -5px;
        left: 10%;
    }
}







