import { imageToChange } from './form-handler.js';

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.img-upload__effect-level');

effectLevel.classList.add('hidden');

valueElement.value = 1;

const clearClasses = () => {
  imageToChange.classList.remove('effects__preview--chrome');
  imageToChange.classList.remove('effects__preview--sepia');
  imageToChange.classList.remove('effects__preview--marvin');
  imageToChange.classList.remove('effects__preview--phobos');
  imageToChange.classList.remove('effects__preview--heat');
};

const chromeEffect = document.querySelector('#effect-chrome');

chromeEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (sliderElement.noUiSlider) {
      sliderElement.noUiSlider.destroy();
    }
    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });

    effectLevel.classList.remove('hidden');

    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      clearClasses();
      imageToChange.classList.add('effects__preview--chrome');
      imageToChange.style.filter = 'none';
      imageToChange.style.filter = `grayscale(${valueElement.value})`;
    });
  }
});

const sepiaEffect = document.querySelector('#effect-sepia');

sepiaEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (sliderElement.noUiSlider) {
      sliderElement.noUiSlider.destroy();
    }
    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });

    effectLevel.classList.remove('hidden');

    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      clearClasses();
      imageToChange.classList.add('effects__preview--sepia');
      imageToChange.style.filter = 'none';
      imageToChange.style.filter = `sepia(${valueElement.value})`;
    });
  }
});

const marvinEffect = document.querySelector('#effect-marvin');

marvinEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (sliderElement.noUiSlider) {
      sliderElement.noUiSlider.destroy();
    }
    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    });

    effectLevel.classList.remove('hidden');

    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      clearClasses();
      imageToChange.classList.add('effects__preview--marvin');
      imageToChange.style.filter = 'none';
      imageToChange.style.filter = `invert(${valueElement.value}%)`;
    });
  }
});

const phobosEffect = document.querySelector('#effect-phobos');

phobosEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (sliderElement.noUiSlider) {
      sliderElement.noUiSlider.destroy();
    }
    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });

    effectLevel.classList.remove('hidden');

    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      clearClasses();
      imageToChange.classList.add('effects__preview--phobos');
      imageToChange.style.filter = 'none';
      imageToChange.style.filter = `blur(${valueElement.value}px)`;
    });
  }
});

const heatEffect = document.querySelector('#effect-heat');

heatEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (sliderElement.noUiSlider) {
      sliderElement.noUiSlider.destroy();
    }
    noUiSlider.create(sliderElement, {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });

    effectLevel.classList.remove('hidden');

    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      clearClasses();
      imageToChange.classList.add('effects__preview--heat');
      imageToChange.style.filter = 'none';
      imageToChange.style.filter = `brightness(${valueElement.value})`;
    });
  }
});

const effectNone = document.querySelector('#effect-none');

effectNone.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    if (sliderElement.noUiSlider) {
      sliderElement.noUiSlider.destroy();
    }

    effectLevel.classList.add('hidden');
    clearClasses();
    imageToChange.style.filter = 'none';
  }
});
