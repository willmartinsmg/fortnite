import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const fire = firebase.initializeApp({
  apiKey: 'AIzaSyB01O6-G3BdF_pFb_316py1FzSVveX5E9A',
  authDomain: 'fortnite-cb8de.firebaseapp.com',
  databaseURL: 'https://fortnite-cb8de.firebaseio.com',
  projectId: 'fortnite-cb8de',
  storageBucket: 'fortnite-cb8de.appspot.com',
  messagingSenderId: '820087125826',
  appId: '1:820087125826:web:881b5c54f7065ccf33fadb',
  measurementId: 'G-KR2WYH2ZDT',
});

export default fire;
