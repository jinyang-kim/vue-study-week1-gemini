import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  // 연습용 API 주소
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 'api'라는 이름으로 어디서든 불러와 쓸 수 있음
export default api;
