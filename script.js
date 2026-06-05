window.addEventListener('load', function() {
    // Мобильное меню бургер
    var menuBtn = document.getElementById('menuBtn');
    var navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });

        var navLinks = navMenu.getElementsByTagName('a');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function() {
                navMenu.classList.remove('open');
            });
        }
    }

    // Инициализация Яндекс.Карт для Астрахани
    var myMap; 
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(function() {
            myMap = new ymaps.Map("my-yandex-map", {
                center: [46.3478, 48.0336], 
                zoom: 13,
                controls: ['zoomControl']
            });

            var mark1 = new ymaps.Placemark([46.3478, 48.0336], { balloonContent: 'Столовая СССР — ЦУМ' });
            myMap.geoObjects.add(mark1);
            var mark2 = new ymaps.Placemark([46.3392, 48.0242], { balloonContent: 'Столовая СССР — Привокзальный' });
            myMap.geoObjects.add(mark2);
            var mark3 = new ymaps.Placemark([46.3621, 48.0612], { balloonContent: 'Столовая СССР — Студенческий' });
            myMap.geoObjects.add(mark3);
        });
    }

    // Переключение филиалов на карте
    var card0 = document.getElementById('btn-point0');
    var card1 = document.getElementById('btn-point1');
    var card2 = document.getElementById('btn-point2');

    function clearActive() {
        card0.classList.remove('active');
        card1.classList.remove('active');
        card2.classList.remove('active');
    }

    if (card0) {
        card0.addEventListener('click', function() {
            clearActive(); card0.classList.add('active');
            if (myMap) { myMap.setCenter([46.3478, 48.0336], 15); }
        });
    }
    if (card1) {
        card1.addEventListener('click', function() {
            clearActive(); card1.classList.add('active');
            if (myMap) { myMap.setCenter([46.3392, 48.0242], 15); }
        });
    }
    if (card2) {
        card2.addEventListener('click', function() {
            clearActive(); card2.classList.add('active');
            if (myMap) { myMap.setCenter([46.3621, 48.0612], 15); }
        });
    }

    // Обработка отправки формы в книгу жалоб
    var form = document.getElementById('orderForm');
    var successBox = document.getElementById('successMessage');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var inputName = document.getElementById('userName').value;
            successBox.textContent = "Спасибо, товарищ " + inputName + "! Ваш рапорт успешно занесен в Книгу предложений.";
            successBox.classList.remove('hidden');
            form.reset();
        });
    }
});