// Горизонтальная прокрутка меню в шапке сайта
;(function() {
	const headerNavigation = document.querySelector('.header__navigation');
	if (headerNavigation === null) {
		return;
	}
	const headerMenuSlider = new Swiper(".header__menu", {
		slidesPerView: "auto",
		spaceBetween: 18,
		allowTouchMove: true,
		navigation: {
			nextEl: ".header__menu-next",
			prevEl: ".header__menu-prev",
		},
		breakpoints: {
			993: {
				allowTouchMove: false,
				spaceBetween: 36,
			},
			577: {
				spaceBetween: 36,
			},
		}
	});
})();

// Выпадающий навбар в мобильной версии сайта
;(function() {
	const mobileNavigation = document.querySelector('.mobile-nav');
	if (mobileNavigation === null) {
		return;
	}
	
	// Открытие навбара, отключение скролла страницы при открытом навбаре
	const body = document.querySelector('.body');
	const mobileNav = document.querySelector('.mobile-nav');
	const burger = document.querySelector('.header__burger');
	const cross = document.querySelector('.mobile-nav__cross');
	burger.addEventListener('click', () => {
		body.classList.add('body_hide');
		mobileNav.classList.add('mobile-nav_open');
	});
	cross.addEventListener('click', () => {
		body.classList.remove('body_hide');
		mobileNav.classList.remove('mobile-nav_open');
	})

	// Выпадающее меню второго уровня в мобильной версии
	window.addEventListener('DOMContentLoaded', function() {
		const subMenuItems = document.querySelectorAll('.mobile-menu .mobile-submenu');
		const subMenuList = [];
		function createImg(target) {
			let element = document.createElement('div');
			element.classList.add('mobile-menu__check');
			target.append(element);
		}
		subMenuItems.forEach(element => {
			const parent = element.parentElement;
			subMenuList.push({
				el: element,
				parentEl: parent,
				subMenuHeight: element.getBoundingClientRect().height
			})
			element.classList.add('mobile-submenu_hidden');
			createImg(parent);
		})
		for (let i = 0; i < subMenuList.length; i++) {
			const item = subMenuList[i];
			const crossImg = item.parentEl.querySelector('.mobile-menu__check');
			crossImg.addEventListener('click', () => {
				const cross = item.el.nextElementSibling;
				if(item.el.classList.contains('mobile-submenu_hidden')) {
					cross.style.cssText = 'transform: rotate(90deg)';
					item.el.classList.remove('mobile-submenu_hidden');
					item.el.style.cssText = `height: ${item.subMenuHeight}px`;
				} else {
					cross.style.cssText = 'transform: rotate(0deg)';
					item.el.classList.add('mobile-submenu_hidden');
					item.el.style.cssText = `height: 0px`;
				}
			})
		}
	});

})();