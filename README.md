# react를 이용한 포트폴리오 사이트 만들기

## 작업순서

1. 리액트 설치
2. git에 업로드
3. [lenis 사이트] (https://github.com/studio-freight/lenis)


## 설치

1. react 설치 'npx create-react-app 프로젝트 이름 '
2. gsap 설치 'npm i gsap'
3. sass 설치 'npm i sass'
4. lenis 설치 'npm i @studio-freight/lenis'
5. react-router-dom 설치 'npm i react-router-dom'
6. fire base 설치 'npm install -g firebase-tools'


### GSAP

GSAP는 "GreenSock Animation Platform"의 약자로, 웹 애니메이션 및 상호 작용을 개발하기 위한 JavaScript 애니메이션 라이브러리입니다.
GSAP는 웹 개발자들이 웹 페이지 및 웹 애플리케이션에서 다양한 애니메이션 및 트랜지션 효과를 만들고 제어하는 데 사용됩니다.


### firebase

Firebase 는 BaaS(Backend-as-a-Service) 플랫폼으로 제공되는 포괄적인 도구 및 서비스 제품군으로, 개발자가 모바일 및 웹 애플리케이션을 모두 쉽게 생성, 실행 및 확장할 수 있도록 합니다. 실시간 데이터베이스, 인증, 스토리지, 호스팅 및 기타 기능을 제공하며 모두 단일 플랫폼에서 관리됩니다.
호스팅, 대용량 파일도 저장할 수 있는 클라우드 저장소로도 사용됩니다.
- 파일 bulid -> 설치 -> 'firebase login' -> 'firebase init' -> 선택사항 체크 *(What do you want to use as your public directory? build)
  -> 'firebase deploy' 배포해준다.


## 트러블 슈팅

<details>
<summary>whiespace 에러</summary>

해결방법
`git config --global core.autocrlf true // 시스템 전체에 적용`
`git config core.autocrlf true // 해당 프로젝트에만 적용`

</details>
