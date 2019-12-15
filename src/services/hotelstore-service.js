
export default class HotelstoreService {

  data = [
    {
      id: 1,
      title: 'Rosa tree1',
      price: 111,
      coverImage: 'img/Room1.png',
      type: 'lux'},
    {
      id: 2,
      title: 'Rosa tree2',
      price: 222,
      coverImage: 'img/Room2.png',
      type: 'lux'},
    {
      id: 3,
      title: 'Rosa tree3',
      price: 333,
      coverImage: 'img/Room3.png',
      type: 'lux'},
    {
      id: 4,
      title: 'Rosa tree4',
      price: 444,
      coverImage: 'img/Room2.png',
      type: 'lux'},
    {
      id: 5,
      title: 'Rosa tree5',
      price: 555,
      coverImage: 'img/Room1.png',
      type: 'lux'},


      {
      id: 6,
      title: 'Rosa tree6',
      price: 666,
      coverImage: 'img/Room2.png',
      type: 'two'},
      {
      id: 7,
      title: 'Rosa tree7',
      price: 777,
      coverImage: 'img/Room3.png',
      type: 'two'},
      {
      id: 8,
      title: 'Rosa tree8',
      price: 888,
      coverImage: 'img/Room1.png',
      type: 'two'},
      {
      id: 9,
      title: 'Rosa tree9',
      price: 999,
      coverImage: 'img/Room2.png',
      type: 'two'},
      {
      id: 10,
      title: 'Rosa tree10',
      price: 1000,
      coverImage: 'img/Room3.png',
      type: 'two'},


      {
      id: 11,
      title: 'Rosa tree11',
      price: 1111,
      coverImage: 'img/Room1.png',
      type: 'three'},
      {
      id: 12,
      title: 'Rosa tree12',
      price: 1122,
      coverImage: 'img/Room3.png',
      type: 'three'},
      {
      id: 13,
      title: 'Rosa tree13',
      price: 1133,
      coverImage: 'img/Room3.png',
      type: 'three'},
      {
      id: 14,
      title: 'Rosa tree14',
      price: 1144,
      coverImage: 'img/Room2.png',
      type: 'three'},
      {
      id: 15,
      title: 'Rosa tree15',
      price: 1155,
      coverImage: 'img/Room1.png',
      type: 'three'},



      {
      id: 16,
      title: 'Rosa tree16',
      price: 1166,
      coverImage: 'img/Room2.png',
      type: 'one'},
      {
      id: 17,
      title: 'Rosa tree17',
      price: 1177,
      coverImage: 'img/Room1.png',
      type: 'one'},
      {
      id: 18,
      title: 'Rosa tree18',
      price: 1188,
      coverImage: 'img/Room3.png',
      type: 'one'},
      {
      id: 19,
      title: 'Rosa tree19',
      price: 1199,
      coverImage: 'img/Room2.png',
      type: 'one'},
      {
      id: 20,
      title: 'Rosa tree20',
      price: 1200,
      coverImage: 'img/Room1.png',
      type: 'one'},         
  ];

    

  getRoom(id) {

    let room = this.data.find(item => item.id === id);

    // return new Promise((resolve, reject) => {
    //       resolve(room);
    //       reject("Не удалось получить комнату");
    // });
    return room;
  }  

  getRooms() {
    return new Promise((resolve, reject) => {

      resolve(this.data);

      // setTimeout(() => { 
      //     resolve(this.data);
      // }, 700);
    });
  }
}