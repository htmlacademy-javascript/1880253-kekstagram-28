import { shuffleArray, copyArray, removeArrayElement, removeElementsFromContainer } from './util.js';
import { placePictures } from './render-pictures.js';
import { debounce } from './debounce.js';

const filterContainerSection = document.querySelector('.img-filters');
const picturesContainer = document.querySelector('.pictures');
const PICTURES_TO_SHOW = 10;


const removePictures = () => {
  removeElementsFromContainer(picturesContainer, '.picture');
};

const filterRandom = (photos, count = PICTURES_TO_SHOW) => {
  const shuffledPhotos = shuffleArray(copyArray(photos));
  let uniqueLinks = shuffledPhotos.reduce((acc, photo) => {
    if (acc.includes(photo.url)) {
      return acc;
    }
    return [...acc, photo.url];
  }, []);

  const uniquePhotosCount = uniqueLinks.length >= count ? count : uniqueLinks.length;
  const uniquePhotos = [];

  for (let i = 0; i < uniquePhotosCount; i++) {
    const link = shuffledPhotos[i].url;

    if (uniqueLinks.includes(link)) {
      uniquePhotos.push(shuffledPhotos[i]);
      uniqueLinks = removeArrayElement(uniqueLinks, link);
    } else {
      i--;
    }
  }
  return uniquePhotos;
};

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
