export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const EFFECTS_STYLES = {
  NONE: '',
  GRAYSCALE: 'grayscale',
  SEPIA: 'sepia',
  INVERT: 'invert',
  BLUR: 'blur',
  BRIGHTNESS: 'brightness'
};

const UNITS = {
  PX: 'px',
  NONE: '',
  PS: '%'
};

export const EffectsSetting = {
  [EFFECTS.NONE]: {
    min: 0,
    max: 100,
    step: 1,
    style: EFFECTS_STYLES.NONE,
    units: UNITS.NONE
  },
  [EFFECTS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: EFFECTS_STYLES.GRAYSCALE,
    units: UNITS.NONE
  },
  [EFFECTS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: EFFECTS_STYLES.SEPIA,
    units: UNITS.NONE
  },
  [EFFECTS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: EFFECTS_STYLES.INVERT,
    units: UNITS.PS
  },
  [EFFECTS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: EFFECTS_STYLES.BLUR,
    units: UNITS.PX
  },
  [EFFECTS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: EFFECTS_STYLES.BRIGHTNESS,
    units: UNITS.NONE
  },
};

export const DEFAULT_EFFECT = EFFECTS.NONE;

export const POPUPS = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const SUBMIT_TEXTS = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const ACTIVE_BUTTON = 'img-filters__button--active';

export const MAX_SYMBOL = 140;
export const SPACE = /\s+/g;
export const HASHTAG_FORMULA = /^#[A-Za-zА-Яа-яёЁ0-9]{1,19}$/;
export const MAX_HASHTAGS = 5;
export const ONE_SPACE = ' ';
