# Webview 빈 화면 디버깅

## Extension Development Host 창에서 실행할 명령어들

### 1. 개발자 도구 열기
`Cmd+Shift+P` → `Developer: Toggle Developer Tools` 입력

### 2. 확인할 사항들

#### Console 탭
- 빨간색 에러 메시지 확인
- 특히 다음과 같은 에러 찾기:
  - `Failed to load resource`
  - `Refused to load`
  - `Content Security Policy`
  - `CORS error`
  - JavaScript 에러

#### Network 탭
- Failed (빨간색) 상태인 요청 확인
- 특히 `index.js`, `index.css` 로드 실패 여부

#### Sources 탭
- `webpack://` 또는 파일들이 제대로 로드되었는지 확인

### 3. Output 패널 확인
View → Output → 드롭다운에서 선택:
- "Cline"
- "Extension Host"
- "Log (Extension Host)"

### 4. 확인할 로그
- webview 초기화 메시지
- HTML 로드 에러
- 리소스 경로 에러
