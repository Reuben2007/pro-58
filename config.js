import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAG3KPuMhRSxodswiGfuwO7kRE8Jw_XaJo',
  authDomain: 'project-57-add56.firebaseapp.com',
  databaseURL: 'https://project-57-add56-default-rtdb.firebaseio.com',
  projectId: 'project-57-add56',
  storageBucket: 'project-57-add56.appspot.com',
  messagingSenderId: '96869059423',
  appId: '1:96869059423:web:be264118c48a708c0904ea',
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
