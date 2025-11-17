import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js';

//파이어베이스 API를 활용하여 웹 서비스를 제공받기 위한 초기화 작업

const firebaseConfig = {
  apiKey: "AIzaSyBlprvZgGI0UkycH_Y-tZy3g6m9kmnDPrY",
  authDomain: "kosmo251110-7cd10.firebaseapp.com",
  projectId: "kosmo251110-7cd10",
  storageBucket: "kosmo251110-7cd10.firebasestorage.app",
  messagingSenderId: "848589532417",
  appId: "1:848589532417:web:0709b8cb30cdebef0d3f00",
};

// Initialize Firebase
//변수(app) 앞에 export를 붙여서 외부(html, js)에서 사용 가능하도록 구현***
export const app = initializeApp(firebaseConfig);