import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
// import spareReducer from "./reducers/spareReducer";

const firebaseConfig = {
  apiKey: "AIzaSyB4IQWqrVplR4KGGEr_WALyjOMrk17k1Nw",
  authDomain: "printingspare.firebaseapp.com",
  databaseURL: "https://printingspare.firebaseio.com",
  projectId: "printingspare",
  storageBucket: "printingspare.appspot.com",
  messagingSenderId: "418233261861"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const initialState = {};

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
