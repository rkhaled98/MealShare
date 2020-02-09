import firebase from 'firebase';

export function fetchCart(callback) {
  firebase.database().ref('cart').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

export function fetchNeeded(callback) {
  firebase.database().ref('needed').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

const config = {
  apiKey: 'AIzaSyBmEIxvW-U0pSlah_8v4GrlFAkDqNpyRzA',
  authDomain: 'mealshare-8d35b.firebaseapp.com',
  databaseURL: 'https://mealshare-8d35b.firebaseio.com',
  projectId: 'mealshare-8d35b',
  storageBucket: 'mealshare-8d35b.appspot.com',
  messagingSenderId: '138553609448',
  appId: '1:138553609448:web:ec8b7f091288d54006cd5d',
  measurementId: 'G-GXGRGG3SF9',
};
firebase.initializeApp(config);

const database = firebase.database();

export default database;
