# 빈 Webview 화면 디버깅 가이드

## 1단계: 개발 모드로 실행

1. VSCode에서 `F5` 키를 누르거나
2. Run → Start Debugging 선택
3. 새로운 VSCode 창이 열리면서 Extension Development Host 실행됨

## 2단계: 에러 확인

새 VSCode 창에서:
1. `Cmd+Shift+P` → "Developer: Toggle Developer Tools" 실행
2. Console 탭에서 에러 메시지 확인
3. Network 탭에서 실패한 리소스 로드 확인

## 3단계: 출력 패널 확인

1. View → Output
2. 드롭다운에서 "Cline" 또는 "Extension Host" 선택
3. 로그 메시지 확인

## 4단계: 빌드 파일 확인

설치된 확장의 위치에서 파일 확인:
```bash
# macOS 기준
cd ~/.vscode/extensions/saoudrizwan.cline-for-genos-3.35.1
ls -la webview-ui/build/assets/
```

## 5단계: 확장 재빌드 (필요시)

```bash
cd /Users/ttagu/Projects/cline-for-genos

# 클린 빌드
npm run clean:build

# 전체 빌드
npm run install:all
npm run package

# VSIX 재생성
npx vsce package --out cline-for-genos-debug.vsix

# 재설치
code --uninstall-extension saoudrizwan.cline-for-genos
code --install-extension cline-for-genos-debug.vsix
```
