// === Fade-Up Premium (Estilo Framer Motion) ===

// Registrando plugin do GSAP
gsap.registerPlugin(ScrollTrigger);

// Fade-up elegante aplicado em cada .box
gsap.utils.toArray(".box").forEach((box) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 28,              // distância curta e elegante
    duration: 0.9,      // suave, não lento
    ease: "cubic-bezier(0.22, 1, 0.36, 1)", // easing premium estilo Framer
  });
});


// === Stagger Orgânico nas listas (.anim-list li) ===
gsap.utils.toArray(".anim-list li").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 92%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -18,            // deslize suave da esquerda
    duration: 0.55,
    delay: i * 0.08,   // stagger natural e elegante
    ease: "cubic-bezier(0.25, 0.8, 0.25, 1)" // ease orgânico
  });
});


// === Títulos ULTRA-PREMIUM ===
// Glow + Blur + Cinematic Underline Reveal
gsap.utils.toArray("h1, h2, h3, h4").forEach((title) => {

  // estado inicial
  gsap.set(title, {
    opacity: 0,
    y: 22,
    filter: "blur(8px)",
    textShadow: "0px 0px 0px rgba(107, 97, 200, 0.0)"
  });

  // animação principal do título
  gsap.to(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 92%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 0.9,
    filter: "blur(0px)",
    ease: "cubic-bezier(0.16, 1, 0.3, 1)", // Ultra premium (Framer)
    textShadow: "0px 0px 14px rgba(107, 97, 200, 0.25)", // glow psicologia
  });

  // cria underline
  const underline = document.createElement("div");
  underline.classList.add("title-underline-ultra");
  title.appendChild(underline);

  // animação cinematográfica da linha
  gsap.fromTo(underline,
    { width: 0 },
    {
      scrollTrigger: {
        trigger: title,
        start: "top 92%",
      },
      width: 62, // largura final premium
      duration: 0.85,
      delay: 0.18,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)" // estilo Apple
    }
  );
});



// === PACOTES — Mask Reveal Cinemático (Apple Style) ===
gsap.utils.toArray(".pacote").forEach((card) => {

  // Criar máscara interna
  const mask = document.createElement("div");
  mask.classList.add("pacote-mask");
  card.prepend(mask);

  // estado inicial
  gsap.set(card, {
    opacity: 0,
    filter: "blur(8px)"
  });

  gsap.set(mask, {
    width: "0%",
    left: 0
  });

  // animação cinematográfica
  gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top 88%",
      toggleActions: "play none none none"
    }
  })
  .to(mask, {
    width: "100%",
    duration: 0.9,
    ease: "power3.out"
  })
  .to(card, {
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.6") // sobrepõe para ficar mais suave
  .to(mask, {
    left: "100%",
    duration: 0.7,
    ease: "power2.inOut"
  });
});

