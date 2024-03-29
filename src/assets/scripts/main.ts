const tabs = document.querySelectorAll<HTMLDivElement>('.skills-tab');
const tabsContent = document.querySelectorAll<HTMLDivElement>('.skills-group');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector<HTMLDivElement>(
			tab.dataset.target ?? ''
		);

		tabsContent.forEach((tabContent) => {
			tabContent.classList.remove('skills-active');
		});

		target?.classList.add('skills-active');

		tabs.forEach((tab) => {
			tab.classList.remove('skills-active');
		});

		tab?.classList.add('skills-active');
	});
});

//#region Tags & Project Popup
/* const projectsContainer = document.querySelector<HTMLDivElement>(
	'.projects-container'
);

const shuffleInstance = new Shuffle(projectsContainer, {
	itemSelector: '.project-card',
	isCentered: true,
	filterMode: Shuffle.FilterMode.ALL,
});

const clearFilterButton = document.querySelector<HTMLDivElement>(
	'.projects-clear-filter'
);

const tagButtons = document.querySelectorAll<HTMLLIElement>(
	'.projects-tags-items li[data-filter]'
);

clearFilterButton?.addEventListener('click', () => {
	shuffleInstance.filter('all');
	tagButtons.forEach((tabContent) => {
		tabContent.classList.remove('active');
	});
});

const tagMap = new Map<string, boolean>();

tagButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		console.log(shuffleInstance.lastFilter);

		const key = btn.dataset.filter;

		if (key && !tagMap.get(key)) {
			tagMap.set(key, true);
			btn?.classList.add('active');
		} else if (key && tagMap.get(key)) {
			tagMap.set(key, false);
			btn?.classList.remove('active');
		}

		const tags: string[] = [];
		tagMap.forEach((val, key) => {
			if (val) tags.push(key);
		});

		shuffleInstance.filter(tags.length > 0 ? tags : 'all');
	});
});

const projectPopupOpenButtons = document.querySelectorAll<HTMLDivElement>(
	'.open-project-popup'
);

const projectPopupCloseButtons = document.querySelectorAll<HTMLDivElement>(
	'.project-popup-close'
);

const toggleProjectPopup = (selector: string = '.project-popup-container') =>
	document.querySelector<HTMLDivElement>(selector)?.classList.toggle('open');

projectPopupOpenButtons.forEach((btn) => {
	btn.addEventListener('click', () => toggleProjectPopup(btn.dataset.model));
});

projectPopupCloseButtons.forEach((btn) => {
	btn.addEventListener('click', () => toggleProjectPopup());
}); */
//#endregion

const navMenu = document.querySelector<HTMLDivElement>('.nav-menu');
const navToggle = document.querySelector<HTMLDivElement>('.nav-toggle');
const navClose = document.querySelector<HTMLDivElement>('.nav-close');

if (navToggle)
	navToggle.addEventListener('click', () => navMenu?.classList.add('show'));

if (navClose)
	navClose.addEventListener('click', () => navMenu?.classList.remove('show'));

const sections = document.querySelectorAll<HTMLElement>('section[id]');

//add event listener for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
	//get the current scroll position
	let scrollY = window.pageYOffset;

	//loop through all the sections and get the height, top and id of each section
	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 72;
		const sectionId = section.getAttribute('id');

		//if the scroll position is greater than the section top and less than the section height + top
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			//add the active class to the section
			document
				.querySelector<HTMLAnchorElement>(`a[href="#${sectionId}"]`)
				?.classList.add('active-link');
		} else {
			//remove the active class from the section
			document
				.querySelector<HTMLAnchorElement>(`a[href="#${sectionId}"]`)
				?.classList.remove('active-link');
		}
	});
}

function scrollHeader() {
	const header = document.querySelector<HTMLElement>('#header');
	if (this.scrollY >= 80) {
		header?.classList.add('header-scroll');
	} else {
		header?.classList.remove('header-scroll');
	}
}

window.addEventListener('scroll', scrollHeader);

const themeBtn = document.querySelector<HTMLElement>('#nav-theme-btn');
const themeCard = document.querySelector<HTMLDivElement>('.theme');

themeBtn?.addEventListener('click', () =>
	themeCard?.classList.add('theme-show')
);

themeCard?.addEventListener('click', (e) => {
	const classes = (e.target as HTMLElement).classList;
	if (classes.contains('theme')) themeCard?.classList.remove('theme-show');
});

const fontSizeSelectors = document.querySelectorAll<HTMLLIElement>(
	'.theme-font-size-slider li'
);

const deactivateFontSizeSelectors = () => {
	fontSizeSelectors.forEach((size) => size.classList.remove('active'));
};

const style = document.querySelector('html')?.style;
fontSizeSelectors.forEach((fontSizeSelector) => {
	fontSizeSelector.addEventListener('click', () => {
		deactivateFontSizeSelectors();
		fontSizeSelector.classList.add('active');
		if (style) style.fontSize = fontSizeSelector.dataset.size ?? '';
	});
});

const themeColorSelectors =
	document.querySelectorAll<HTMLLIElement>('.theme-color li');

const deactivateThemeColorSelectors = () => {
	themeColorSelectors.forEach((color) => color.classList.remove('active'));
};

themeColorSelectors.forEach((themeColorSelector) => {
	themeColorSelector.addEventListener('click', () => {
		deactivateThemeColorSelectors();
		themeColorSelector.classList.add('active');
		style?.setProperty(
			'--primary-color-hue',
			themeColorSelector.dataset.hue ?? ''
		);
	});
});

const themeBgSelectors = document.querySelectorAll<HTMLLIElement>(
	'.theme-background li'
);

const deactivateThemeBgSelectors = () => {
	themeBgSelectors.forEach((bg) => bg.classList.remove('active'));
};

themeBgSelectors.forEach((themeBgSelector) => {
	themeBgSelector.addEventListener('click', () => {
		deactivateThemeBgSelectors();
		themeBgSelector.classList.add('active');
		const lightness = themeBgSelector.dataset.lightness?.split(',');

		if (lightness) {
			style?.setProperty('--light-color-lightness', lightness[0]);
			style?.setProperty('--dark-color-lightness', lightness[1]);
			style?.setProperty('--white-color-lightness', lightness[2]);
		}
	});
});
