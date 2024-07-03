// Header에 페이지 아래로 스크롤시 다크 스타일링 적용

// window.document.querySelector(); window:cloval 객체
const header = document.querySelector('.header');
// console.log(header);
const headerHeight = header.getBoundingClientRect().height;
// document.addEventListener('scroll', function () {})
document.addEventListener('scroll', () => {
    // 스크롤되는 Y좌표가 headerHeight보다 크다면 다른 스타일링!
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
})

// Home 섹셩을 아래로 스크롤시 투명하게 처리함

// const home = document.getElementById("home");
// const homeHeight = home.getBoundingClientRect().height;
// document.addEventListener('scroll', () =>{
//     home.style.opacity = 1-window.scrollY/homeHeight;
// })
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1-window.scrollY/homeHeight;
    console.log(home.style.opacity);
})
