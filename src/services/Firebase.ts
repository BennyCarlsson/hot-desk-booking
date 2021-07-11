// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

export const firebaseApp: firebase.app.App = app;

export const firebaseAuth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();

type NewDeskType = {
  id: string;
  coordinates: { x: number; y: number }[];
};
export const SaveNewDesk = (obj: NewDeskType) => {
  firestore
    .collection('rooms')
    .doc('U0l8eaqvUPXijUQprZ5v')
    .update({
      [`objects.${obj.id}`]: {
        type: 'desktop',
        coordinates: obj.coordinates
      }
    });
};

export type RoomType = {
  columnLength: number;
  rowLength: number;
  organizationId: string;
  objects: { [key: string]: { coordinates: { x: number; y: number }[]; type: string } };
};
export const fetchRooms = (callBack: (room: RoomType) => void) => {
  return firestore
    .collection('rooms')
    .where('organizationId', '==', 'o9VDDxHbVJollu3gOHMf')
    .onSnapshot((querySnapshot) => {
      let data;
      querySnapshot.forEach((doc) => {
        data = doc.data() as RoomType;
      });
      callBack(data as unknown as RoomType);
    });
};
export const organizationStore = firestore.collection('organizations');

export const fetchOrganization = async (id: string) => {
  return await organizationStore.doc(id).get();
};
