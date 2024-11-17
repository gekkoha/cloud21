// Данные для языкового переключения
const translations = {
    uk: {
      nav: {
        home: "Головна",
        catalog: "Асортимент",
        contact: "Контакти",
      },
      intro: {
        title: "Ласкаво просимо до Cloud21!",
        text: "Cloud21 — це ваш надійний постачальник якісної продукції для вейпінгу. Ми пропонуємо широкий вибір пристроїв, рідин та аксесуарів.",
      },
      catalog: {
        title: "Асортимент",
      },
      contact: {
        title: "Контакти",
        text: "Зв'яжіться з нами за номером:",
      },
      footer: "Всі права захищені.",
    },
    ru: {
      nav: {
        home: "Главная",
        catalog: "Ассортимент",
        contact: "Контакты",
      },
      intro: {
        title: "Добро пожаловать в Cloud21!",
        text: "Cloud21 — это ваш надежный поставщик качественной продукции для вейпинга. Мы предлагаем широкий выбор устройств, жидкостей и аксессуаров.",
      },
      catalog: {
        title: "Ассортимент",
      },
      contact: {
        title: "Контакты",
        text: "Свяжитесь с нами по номеру:",
      },
      footer: "Все права защищены.",
    },
    en: {
      nav: {
        home: "Home",
        catalog: "Catalog",
        contact: "Contact",
      },
      intro: {
        title: "Welcome to Cloud21!",
        text: "Cloud21 is your reliable provider of high-quality vaping products. We offer a wide range of devices, liquids, and accessories.",
      },
      catalog: {
        title: "Catalog",
      },
      contact: {
        title: "Contact",
        text: "Reach us at:",
      },
      footer: "All rights reserved.",
    },
  };
  
  // Переключение языка
  function changeLanguage(lang) {
    // Навигация
    document.getElementById("nav-home").textContent = translations[lang].nav.home;
    document.getElementById("nav-catalog").textContent = translations[lang].nav.catalog;
    document.getElementById("nav-contact").textContent = translations[lang].nav.contact;
  
    // Главная страница
    if (document.getElementById("intro-title")) {
      document.getElementById("intro-title").textContent = translations[lang].intro.title;
      document.getElementById("intro-text").textContent = translations[lang].intro.text;
    }
  
    // Страница ассортимента
    if (document.getElementById("catalog-title")) {
      document.getElementById("catalog-title").textContent = translations[lang].catalog.title;
    }
  
    // Страница контактов
    if (document.getElementById("contact-title")) {
      document.getElementById("contact-title").textContent = translations[lang].contact.title;
      document.getElementById("contact-text").textContent = translations[lang].contact.text;
    }
  
    // Подвал
    document.getElementById("footer-text").textContent = translations[lang].footer;
  }
  
  // Навешиваем события на кнопки переключения языка
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      changeLanguage(lang);
    });
  });
  