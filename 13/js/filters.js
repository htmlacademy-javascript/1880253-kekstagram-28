import { shuffleArray, copyArray, removeElementsFromContainer } from './util.js';
import { placePictures } from './render-pictures.js';
import { debounce } from './debounce.js';

const filterContainerSection = document.querySelector('.img-filters');
const picturesContainer = document.querySelector('.pictures');
const PICTURES_TO_SHOW = 10;


const removePictures = () => {
  removeElementsFromContainer(picturesContainer, '.picture');
};

const filterRandom = (photos, count = PICTURES_TO_SHOW) => shuffleArray(copyArray(photos)).slice(0, count);

const filterDiscussed = (photos) => copyArray(photos).sort((a, b) => b.comments.length - a.comments.length);

const FILTERS = [
  {
    filterSelector: '#filter-default',
    filterFunction: (value) => value,
  },
  {
    filterSelector: '#filter-random',
    filterFunction: filterRandom,
  },
  {
    filterSelector: '#filter-discussed',
    filterFunction: filterDiscussed,
  },
];

const updateSelectedFilterToggle = (filtersContainer, filterToggle) => {
  const toggleActiveClass = 'img-filters__button--active';
  filtersContainer.querySelector(`.${toggleActiveClass}`).classList.remove(toggleActiveClass);
  filterToggle.classList.add(toggleActiveClass);
};

const createFiltersActions = (photos, filters, filtersContainer) => {
  filtersContainer.classList.remove('img-filters--inactive');

  filters.forEach((currentFilter) => {
    const { filterSelector, filterFunction } = currentFilter;
    const filterToggle = filtersContainer.querySelector(filterSelector);
    const updatePictures = debounce(() => {
      removePictures();
      placePictures(filterFunction(photos));
    });

    const applyFilter = (evt) => {
      evt.preventDefault();

      updatePictures();
      updateSelectedFilterToggle(filtersContainer, filterToggle);
    };

    filterToggle.addEventListener('click', applyFilter);
  });
};

const initializePhotos = (photos, filters = FILTERS, filtersContainer = filterContainerSection) => {
  placePictures(photos);
  createFiltersActions(photos, filters, filtersContainer);
};

export { initializePhotos };
