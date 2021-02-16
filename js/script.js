import ScrollSuave from './modules/scroll-suave.js';
import initAnimaScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/faq-accordion.js';
import initTabNav from './modules/tabNav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBTC from './modules/fetch-btc.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimaScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBTC();
