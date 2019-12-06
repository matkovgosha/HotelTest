
export default class HotelstoreService {

  data = [
    {
      id: 1,
      title: 'Rosa tree',
      price: 111,
      coverImage: 'img/Room1.png',
      type: 'lux'},
    {
      id: 2,
      title: 'Rosa tree',
      price: 222,
      coverImage: 'img/Room2.png',
      type: 'lux'},
    {
      id: 3,
      title: 'Rosa tree',
      price: 333,
      coverImage: 'img/Room3.png',
      type: 'lux'},
    {
      id: 4,
      title: 'Rosa tree',
      price: 444,
      coverImage: 'img/Room2.png',
      type: 'lux'},
    {
      id: 5,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room1.png',
      type: 'lux'},


      {
      id: 6,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room2.png',
      type: 'two'},
      {
      id: 7,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room3.png',
      type: 'two'},
      {
      id: 8,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room1.png',
      type: 'two'},
      {
      id: 9,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room2.png',
      type: 'two'},
      {
      id: 10,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room3.png',
      type: 'two'},


      {
      id: 11,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room1.png',
      type: 'three'},
      {
      id: 12,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room3.png',
      type: 'three'},
      {
      id: 13,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room3.png',
      type: 'three'},
      {
      id: 14,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room2.png',
      type: 'three'},
      {
      id: 15,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room1.png',
      type: 'three'},



      {
      id: 16,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room2.png',
      type: 'one'},
      {
      id: 17,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room1.png',
      type: 'one'},
      {
      id: 18,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room3.png',
      type: 'one'},
      {
      id: 19,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room2.png',
      type: 'one'},
      {
      id: 20,
      title: 'Rosa tree',
      price: 555,
      coverImage: 'img/Room1.png',
      type: 'one'},           
  ];

  getRooms() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
          resolve(this.data);
      }, 700);
    });
  }
}