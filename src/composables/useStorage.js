import { ref } from 'vue';
import { watch } from 'vue';

// key: 저장소 키 이름 (예: 'todos', 'settings')
// initialValue: 초기값 (예: [], null)
export const useStorage = (key, initialValue) => {
  // 초기값 불러오기 (Read)
  const storedValue = localStorage.getItem(key);
  const data = ref(storedValue ? JSON.parse(storedValue) : initialValue);

  // 변경사항 자동 저장 (Write)
  // watch는 ref가 바뀔 때마다 실행됨
  watch(
    data,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    // 객체나 배열 내부 변경 감지
    { deep: true }
  );

  // 반응형 변수 반환
  // 이제 이 함수르 쓰는 쪽에서는 data를 자기 변수처럼 사용 가능
  return data;
};
