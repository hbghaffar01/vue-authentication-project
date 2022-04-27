import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBHsNfiigVdSkBK-NiJdIK5nfJtwh8PtnE",
  authDomain: "vue-fire-auth-77e5b.firebaseapp.com",
  projectId: "vue-fire-auth-77e5b",
  storageBucket: "vue-fire-auth-77e5b.appspot.com",
  messagingSenderId: "663032539272",
  appId: "1:663032539272:web:5f041c03c76bca9910d73d"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }

