
export default class HotelstoreService {

  static data = [
    {
      id: 1,
      title: 'Rosa tree1',
      price: 111,
      listImage: './img/Room1.png',
      coverImage: '../img/Room1.png',
      type: 'lux',
      BooksDays: 0},
    {
      id: 2,
      title: 'Rosa tree2',
      price: 222,
      listImage: './img/Room2.png',
      coverImage: '../img/Room2.png',
      type: 'lux',
      BooksDays: 20},
    {
      id: 3,
      title: 'Rosa tree3',
      price: 333,
      listImage: './img/Room3.png',
      coverImage: '../img/Room3.png',
      type: 'lux',
      BooksDays: 0},
    {
      id: 4,
      title: 'Rosa tree4',
      price: 444,
      listImage: './img/Room2.png',
      coverImage: '../img/Room2.png',
      type: 'lux',
      BooksDays: 4},
    {
      id: 5,
      title: 'Rosa tree5',
      price: 555,
      listImage: './img/Room1.png',
      coverImage: '../img/Room1.png',
      type: 'lux',
      BooksDays: 0},


      {
      id: 6,
      title: 'Rosa tree6',
      price: 666,
      listImage: './img/Room2.png',
      coverImage: '../img/Room2.png',
      type: 'two',
      BooksDays: 0},
      {
      id: 7,
      title: 'Rosa tree7',
      price: 777,
      listImage: './img/Room3.png',
      coverImage: '../img/Room3.png',
      type: 'two',
      BooksDays: 10},
      {
      id: 8,
      title: 'Rosa tree8',
      price: 888,
      listImage: './img/Room1.png',
      coverImage: '../img/Room1.png',
      type: 'two',
      BooksDays: 0},
      {
      id: 9,
      title: 'Rosa tree9',
      price: 999,
      listImage: './img/Room2.png',
      coverImage: '../img/Room2.png',
      type: 'two',
      BooksDays: 0},
      {
      id: 10,
      title: 'Rosa tree10',
      price: 1000,
      listImage: './img/Room3.png',
      coverImage: '../img/Room3.png',
      type: 'two',
      BooksDays: 60},


      {
      id: 11,
      title: 'Rosa tree11',
      price: 1111,
      listImage: './img/Room1.png',
      coverImage: '../img/Room1.png',
      type: 'three',
      BooksDays: 0},
      {
      id: 12,
      title: 'Rosa tree12',
      price: 1122,
      listImage: './img/Room3.png',
      coverImage: '../img/Room3.png',
      type: 'three',
      BooksDays: 0},
      {
      id: 13,
      title: 'Rosa tree13',
      price: 1133,
      listImage: './img/Room3.png',
      coverImage: '../img/Room3.png',
      type: 'three',
      BooksDays: 2},
      {
      id: 14,
      title: 'Rosa tree14',
      price: 1144,
      listImage: './img/Room2.png',
      coverImage: '../img/Room2.png',
      type: 'three',
      BooksDays: 0},
      {
      id: 15,
      title: 'Rosa tree15',
      price: 1155,
      listImage: './img/Room1.png',
      coverImage: '../img/Room1.png',
      type: 'three',
      BooksDays: 0},



      {
      id: 16,
      title: 'Rosa tree16',
      price: 1166,
      listImage: './img/Room2.png',
      coverImage: '../img/Room2.png',
      type: 'one',
      BooksDays: 3},
      {
      id: 17,
      title: 'Rosa tree17',
      price: 1177,
      listImage: './img/Room1.png',
      coverImage: '../img/Room1.png',
      type: 'one',
      BooksDays: 0},
      {
      id: 18,
      title: 'Rosa tree18',
      price: 1188,
      listImage: './img/Room3.png',
      coverImage: '../img/Room3.png',
      type: 'one',
      BooksDays: 0},
      {
      id: 19,
      title: 'Rosa tree19',
      price: 1199,
      listImage: './img/Room2.png',
      coverImage: '../img/Room2.png',
      type: 'one',
      BooksDays: 3},
      {
      id: 20,
      title: 'Rosa tree20',
      price: 1200,
      listImage: './img/Room1.png',
      coverImage: '../img/Room1.png',
      type: 'one',
      BooksDays: 0},         
  ];

    

  // getRoom(id) {

  //   let room = HotelstoreService.data.find(item => item.id === id);

  //   // return new Promise((resolve, reject) => {
  //   //       resolve(room);
  //   //       reject("Не удалось получить комнату");
  //   // });
  //   return room;
  // }  

  // getRooms() {
  //   return new Promise((resolve, reject) => {

  //     resolve(this.data);

  //     // setTimeout(() => { 
  //     //     resolve(this.data);
  //     // }, 700);
  //   });
  // }
}