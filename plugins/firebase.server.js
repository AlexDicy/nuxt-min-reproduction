import {initializeApp, getApps} from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX",
  appId: "XXX",
  measurementId: "XXX"
};
const apps = getApps();
let firebaseApp = apps.length ? apps[0] : initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const testCollection = collection(db, "XXX");

export default {db, testCollection};
