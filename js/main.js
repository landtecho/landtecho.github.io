$(function(){

  // top scroll

  var btn = $('.top-scroll');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('top-scroll__show');
    } else {
      btn.removeClass('top-scroll__show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '1000');
  });

// down scroll
  
$("body").on('click', '#downArrowsLink', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

// menu scroll

$("body").on('click', '.menu__list a', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$("body").on('click', '.fast-links__list a', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$("body").on('click', '#wrapperContentBtn', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


});

// cards modals

var designBtn    = document.getElementById('webDesignBtn'),
    htmlBtn      = document.getElementById('htmlBtn'),
    adaptiveBtn  = document.getElementById('adaptiveBtn'),
    wordpressBtn = document.getElementById('wordpressBtn'),
    landingBtn   = document.getElementById('landingBtn');

designBtn.onclick = function(e) {
  e.preventDefault();
  swal({
    title: "Веб Дизайн",
    text: "Веб-дизайн — отрасль веб-разработки и разновидность дизайна, в задачи которой входит проектирование пользовательских веб-интерфейсов для сайтов или веб-приложений. Солидное внешнее оформление и доступный способ подачи информации — залог того, что гость не закроет страницу после нескольких секунд посещения. Ведь в наши дни никто не хочет разбирать нечеткий шрифт и отделять интересные сведения от «информационного мусора». Люди избалованы хорошим качеством веб-ресурсов. Поэтому они быстро покидают не удовлетворяющие их представлениям сайты и ищут нужную информацию на адаптированных под их требования порталах. Грамотно выполненный дизайн и простая навигация вызывают у потенциального клиента положительные эмоции и доверие. Позитивный настрой пробуждает в человеке желание сотрудничать с компанией.",
    button: "Закрыть",
  });
};

htmlBtn.onclick = function(e) {
  e.preventDefault();
  swal({
    title: "HTML & CSS верстка",
    text: "Верстка сайта — это один из важнейших этапов разработки онлайн-ресурса, в результате которого нарисованный дизайнером макет превращается в HTML и CSS-код. Эта задача требует особых навыков. Чтобы качественно сверстать HTML-код, нужны глубокие знания особенностей работы браузеров, семантики веб-страниц, принципов позиционирования элементов. ",
    button: "Закрыть",
  });
};

adaptiveBtn.onclick = function(e) {
  e.preventDefault();
  swal({
    title: "Адаптивная верстка",
    text: "Адаптивной называется такая верстка, при которой сайт корректно отображается на различных устройствах благодаря тому, что элементы динамически подстраиваются под различные разрешения экрана. Сегодня уже не нужно искать исследования и статистику, чтобы доказать, как часто выходят в Интернет с планшетов и мобильных телефонов. Эта реальность окружает нас повсюду: в общественном транспорте, в кафе, в очередях — люди охотно заполняют время серфингом в Интернете, да и вы сами знаете, насколько это удобно. Чтобы выбрать и заказать пиццу, никто не поедет сначала домой добраться до компьютера, а быстренько зайдет на сайт с телефона, попутно делая другие дела. Когда приходит идея о покупке, проще всего сразу же выйти в сеть, сравнить предложения магазинов-конкурентов и, не откладывая в долгий ящик, оформить заказ товара. И таких примеров можно привести бесчисленное множество!",
    button: "Закрыть",
  });
};

wordpressBtn.onclick = function(e) {
  e.preventDefault();
  swal({
    title: "Натяжка на WordPress",
    text: "На сегодня WordPress самая популярная система управления контентом (Content Management System) в мире. WordPress лежит в основе более 30% сайтов по всему миру, и эта цифра постоянно растёт! С помощью движка WordPress вы без всяких проблем сможете изменять любую информацию на сайте при помощи административной парели.",
    button: "Закрыть",
  });
};

landingBtn.onclick = function(e) {
  e.preventDefault();
  swal({
    title: "Landing Page",
    text: "Целевая страница (англ. landing page, также «посадочная страница») — веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге. Переход на целевые страницы часто осуществляется из социальных медиа, email-рассылок и рекламных кампаний в поисковых системах. Главной задачей таких страниц является конвертация посетителя в покупателя или клиента компании, побуждение к целевому действию. Анализ действий пользователей на целевой странице позволяет маркетологам определить успешность рекламы. ",
    button: "Закрыть",
  });
};

$(function(){
  let filter = $("[data-filter]");

  filter.on("click", function(e) {
    e.preventDefault();
    
    let cat = $(this).data('filter');
  
    if(cat == 'all') {
      $("[data-groups").removeClass("hide");
    } else {
      $("[data-groups]").each(function() {
        let workCat = $(this).data('groups');
  
        if(workCat != cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
      
    }
  });

  var allLinks = $('.portfolio-filter__link');

  for( var i = 0; i < allLinks.length; i++){
  allLinks[i].onclick = function(){
    if(this.classList) {
      for (var j = 0; j < allLinks.length; j++) {
        allLinks[j].classList.remove('portfolio-filter__active');
      }
      this.classList.add('portfolio-filter__active');
    } else {
      this.active += ' ' + active;
    }
  }
}

// hamburger menu

let hamBtn     = $('.hamburger__link'),
    hamSection = $('.hamburger-menu__section');

hamBtn.on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('hamburger__effect');
  hamSection.toggleClass('hamburger-section__hide');
});

  $('a').on('click', function (e) {
    e.preventDefault();
  });

});



