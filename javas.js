let miniwall1 = document.getElementById('miniwall1')
let miniwall2 = document.getElementById('miniwall2')

console.log(miniwall2)
miniwall1.addEventListener('mouseover',function(){
    console.log('hello')
    let backgrundwall = document.getElementById('wall')
    backgrundwall.style.backgroundImage = "url('img/ded3.png')"
})

miniwall2.addEventListener('mouseover',function(){
    console.log('hello')
    let backgrundwall = document.getElementById('wall')
    backgrundwall.style.backgroundImage = "url('img/2.png')"
})

window.addEventListener('scroll', function() {

    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 300) {
        document.getElementById('footer').style.display = 'inline'; // نمایش پیام
    } else {
        document.getElementById('footer').style.display = 'none'; // مخفی کردن پیام
    }
});