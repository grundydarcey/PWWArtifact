

const documentElement = document.querySelector('html');
const navIsOpen = () => documentElement.classList.contains('nav-is-open');
const searchIsOpen = () => documentElement.classList.contains('search-is-open');

const expandNav = () => {
  documentElement.classList.add('nav-is-open');
};

const closeNav = () => {
  documentElement.classList.remove('nav-is-open');
};

const toggleNav = () => {
  navIsOpen() ? closeNav() : expandNav();
};

const expandSearch = () => {
  documentElement.classList.add('search-is-open');
};

const closeSearch = () => {
  documentElement.classList.remove('search-is-open');
};

const toggleSearch = () => {
  searchIsOpen() ? closeSearch() : expandSearch();
};