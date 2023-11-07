const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container > h1", scrollRevealOption);
  
  ScrollReveal().reveal(".header__container > h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container > .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

  // about
  ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);

  ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about__container .about__flexContainer", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  // discover Container
  ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".discover__card_content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
 

  // Blogs Section
  ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
  });

  // Journals Section
  ScrollReveal().reveal(".journals__card", {
    ...scrollRevealOption,
    interval: 400,
  });

  // Gallery section
  ScrollReveal().reveal(".gallery__card", {
    // duration: 500,
    ...scrollRevealOption,
    interval: 400,
  });

  // contact section
  ScrollReveal().reveal(".gallery__card", {
    // duration: 500,
    ...scrollRevealOption,
    interval: 400,
  });
