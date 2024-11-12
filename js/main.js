const COUNT_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const DESCRIPTIONS = ['Пляж', 'Вечер', 'Котик'];
const COUNT_COMMENTS = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USERS_NAME = [
  'Адександр',
  'Борис',
  'Олег',
  'Артем',
  'Анна',
  'Юлия'];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));;
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getPhoto = (i) => {
  return {
    id: i,
    url: `photos/ ${i}.jpg`,
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments:
    {
      id: generatePhotoId(),
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
      name: USERS_NAME[getRandomInteger(0, USERS_NAME.length - 1)],
    }
  }
}


const getData = () => {
  const data = [];
  for (let i = 1; i <= COUNT_PHOTOS; i++) {
    data.pushgetPhoto(i);
  }
  return data;
}

const getComments = () => {
  const comments = [];
  const countComments = getRandomInteger(0, COUNT_COMMENTS);
  for (let i = 0; i <= countComments; i++) {
    comments.push({
      id: generatePhotoId(),
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
      name: USERS_NAME[getRandomInteger(0, USERS_NAME.length - 1)],
    })
  }
}

const getDescriptionPhoto = () => {
  const descriptionPhoto = [];
  for (let i = 1; i <= COUNT_PHOTOS; i++) {
    descriptionPhoto.push(getPhoto(i))
  }
  return descriptionPhoto;
}
