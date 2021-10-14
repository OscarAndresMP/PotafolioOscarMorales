
$.AutumnLeafStart({
	leavesfolder: "Animacion/",
	howmanyimgsare: 5,
	initialleaves: 4,
	maxyposition: -10,
	multiplyclick: true,
	multiplynumber: 2,
	infinite: true,
	fallingsequence: 4000
});






(function() {
  "use strict";

//Funcion del meno
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el);
    }
  }

//Evento del menu
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  }


//menu Hamburguesa cuando cambia a dispositivo movil
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });


//se hace scrool del menu cuando ocurra el click
on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash);
    if (section) {
      e.preventDefault();

      let navbar = select('#navbar');
      let header = select('#header');
      let sections = select('section', true);
      let navlinks = select('#navbar .nav-link', true);

      navlinks.forEach((item) => {
        item.classList.remove('active');
      })

      this.classList.add('active');

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top');
        sections.forEach((item) => {
          item.classList.remove('section-show');
        });
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top');
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show');
          })
          section.classList.add('section-show');

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show');
        })
        section.classList.add('section-show');
      }

      scrollto(this.hash);
    }
  }, true);






//animacion Tecnologias
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }




})();