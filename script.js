// ========== loader-clip ==========

gsap.from(".clip-top, .clip-bottom", 2, {
	delay: 1,
	height: "50vh",
	ease: "power4.inOut",
});

gsap.to(".clip-top", 2.2, {
	delay: 4,
	clipPath: "inset(0 0 100% 0)",
	ease: "power2.inOut",
});

gsap.to(".clip-bottom", 2.2, {
	delay: 4,
	clipPath: "inset(100% 0 0 0)",
	ease: "power2.inOut",
});


gsap.to(".title, .sub-title, .left-btn, .right-btn", 0, { opacity: 0 });

gsap.to(".title", 3.5, {
	delay: 2,
	opacity: 1,
	ease: "power3.inOut",
});

gsap.to(".sub-title", { y: "-200%" });
gsap.to(".sub-title", 2, {
	delay: 5.5,
	y: 0,
	opacity: 1,
	ease: "none.inOut",
});
 
gsap.set(".left-btn", { x: "-200%" });
gsap.to(".left-btn", 1.5, {
  delay: 6,
  x: 0,
  opacity: 1,
  ease: "none.inOut"
});

gsap.set(".right-btn", { x: "+200%" });
gsap.to(".right-btn", 1.5, {
  delay: 6,
  x: 0,
  opacity: 1,
  ease: "none.inOut",
});

// ========== hide all sections, except for the specified one, with a smooth transition ==========

const sections = document.querySelectorAll("section");

function showSection(id) {
		const targetSection = document.getElementById(id);

		gsap.set(sections, { display: "none" }); 
		targetSection.style.display = "flex";

		gsap.fromTo(
				targetSection,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5 }
		);

		sections.forEach(section => {
				if (section.id !== id) {
						gsap.to(section, { opacity: 0, duration: 0.5 }).then(() => {
								section.style.display = "none";
					});
				}
		});
}

showSection("hero-content");

function toggleSection(sectionId) {
		showSection(sectionId);
}

// ========== Swiper ==========

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,

	pagination: {
	el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
	speed: 800,
});

// ========== Language ==========

function toggleLanguage() {
	const langSwitch = document.getElementById("langSwitch");
	const currentLang = langSwitch.textContent;

	if (currentLang === "EN") {
		langSwitch.textContent = "RU";
		langSwitch.setAttribute("href", "index_ru.html");
	} else {
		langSwitch.textContent = "EN";
		langSwitch.setAttribute("href", "index.html");
	}
}


