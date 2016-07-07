/**
 * Created by Ksu on 07.07.2016.
 */
    //forms about client
    //validation of name
$('#inputName').on('blur',function(){
    var inputName = $('#inputName').val();
    var regName = /^([A-Za-z\s]+)$/;
    var true_name = regName.test(inputName);
    if(true_name==false) {
        alert("It's not correct name!")
    }
});

//validation of telephone
$("#inputTelephone").mask("+38(999)999-99-99");

//valid of mail
$('#inputEmail3').on('blur',function(){
    var inputMail = $('#inputEmail3').val();
    var regMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.(ua|com|com\.ua)$/;
    var true_mail = regMail.test(inputMail);
    if(true_mail==false) {
        alert("It's not correct mail! Please enter again")
    }
});

//valid height
$('#inputHeight').on('blur',function(){
    var inputHeight = $('#inputHeight').val();
    var regHeight = /^(\d+)$/;
    var true_height = regHeight.test(inputHeight);
    if(true_height==false) {
        alert("It's not correct height! Please enter only number")
    }
})

//slider
var slider = {
    slides:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
    // текущий кадр для отбражения - индекс картинки из массива
    frame:0,
    // установка нужного фона слайдеру
    fon: function(image) {
        $("#scr").css('background', "url("+image+")");
        document.getElementById(image).checked = true;
    },
    // запуск слайдера с картинкой с нулевым индексом
    init: function() {
        this.fon(this.slides[this.frame]);
    },
    // крутим на один кадр влево
    left: function() {
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.fon(this.slides[this.frame]);
    },
    // крутим на один кадр вправо
    right: function() {
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.fon(this.slides[this.frame]);
    }
};
//установка первой картинки при загрузке страницы
window.onload = function() { // запуск слайдера после загрузки документа
    slider.init()
};
// запуск слайдера
var show = $("#butForShow");
var pause = $("#butForPause");
var t;
//main
t = setInterval(function() {
    slider.right();
},3000);
$('#main').mouseover( function(){
    clearInterval(t);
});
$('#main').mouseout( function(){
    console.log('ddd')
    t = setInterval(function() {
        slider.right();
    },3000);
});
//пролистывать слайдер с помощью радиобатонов
var form = document.forms.radios;
for(var j=0;j<form.length;j++){
    form.elements[j].onclick = function(){
        $("#scr").css('background', "url("+this.id+")");
    }
};
