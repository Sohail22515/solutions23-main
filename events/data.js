const events = [
  // coding category id=0
  [["1","./images_arts/1.jpg"], ["2", "./images_arts/2.jpg"], ["POSTER", "./images_arts/3.jpeg"], ["FREESTYLE", "./images_arts/4.jpg"], ["FIND AND PAINT", "./images_arts/5.jpg"], ["FACE" ,"./images_arts/6.jpg"]],

  // robotics category id=1
  [
    ["CLASSICAL / SEMI CLASSICAL & FOLK", "bhdbh"],
    ["WESTERN / FREESTYLE"],
    ["GROUP"],
    ["STREET"],
    // ["DRONE DRAG"],
  ],

  // open category id=2
  [
    ["BASKETBALL"],
    ["CRICKET"],
    ["VOLLEYBALL"],
    ["CHESS"],
    ["BADMINTON"],
    ["TABLE TENNIS"],
    // ["HOW UNICORN"],
    // ["SOLID WORKS"],
  ],

  // machine learning category id=3
  [["INDIAN SOLO & DUET"], ["WESTERN SOLO & DUET"], ["GROUP SONG"], ["BATTLE OF BANDS"]],

  // game dev & cyber sec. category id=4
  [["MONOACT / DUET ACT"], ["CONVENTIONAL DRAMA"], ["NUKKAD NATAK"]],

  // gaming category id=5
  [["CREATIVE WRITING","./images_literary/3.JPG"], ["DEBATE","./images_literary/1.JPG"], ["CAPTION WRITING","./images_literary/2.JPG"], ["QUIZ-GENERAL",,"./images_literary/4.JPG"], ["QUIZ-ANIME","./images_literary/5.JPG"], ["MEME","./images_literary/6.JPG"], ["JAM","./images_literary/5.JPG"], ["OPEN MIC","./images_literary/6.JPG"], ["SHARK TANK","./images_literary/4.JPG"]],
];

const category_img = [
  // coding category id=0
  "./images/arts.svg",

  // robotics category id=1
  "./images/dance.svg",

  // open category id=2
  "./images/sports.svg",

  // machine learning category id=3
  "./images/music.svg",

  // game dev & cyber sec. category id=4
  "./images/drama.svg",

  // gaming category id=5
  "./images/literary.svg",
];

export { events, category_img };
