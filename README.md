# lecture-vue-trello

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
# 트렐로 개발로 배우는 Vuejs, Vuex, Vue-Router 프론트엔드 실전 기술

https://www.inflearn.com/course/vuejs/dashboard

## 1. 시작하기

### 강의 소개

* 요구사항 분석
* 관련 기술조사
* 기능 구현

#### 강의 특징

* 실무 환경으로 구성

#### 사용 라이브러리

* vuex: 상태 관리
* vue-router: 라우팅
* axios: API 통신
* dracula: 드래그 앤 드롭

### 요구사항 분석 01

https://trello.com/en

아래 일련의 과정을 경험해본다.

로그인 → 보드 만들어서 사용해보기 → 로그아웃

### 요구사항 분석 02

* 인증: 로그인, 로그아웃
  |      | 로그인 | 로그아웃 |
  | ---- | ------ | -------- |
  | 인증 | ○      | ○        |

* 보드 작업

  |        | 생성 | 조회 | 수정             | 이동 | 삭제 |
  | ------ | ---- | ---- | ---------------- | ---- | ---- |
  | 보드   | ○    | ○    | ○ (타이틀, 색상) | ✕    | ○    |
  | 리스트 | ○    | ✕    | ○ (타이틀)       | ○    | ○    |
  | 카드   | ○    | ○    | ○ (타이틀, 설명) | ○    | ○    |

* 기본 플로우

  * 홈페이지 접속
  * 로그인 페이지
  * 홈페이지 리다이렉트
  * 보드 목록조회
  * 보드 생성
  * 보드 조회: Todo, Doing, Done
  * 카드 생성
  * 카드 상세조회
  * 카드 수정
  * 카드 이동
  * 카드 삭제
  * 보드 세팅: 색상 설정
  * 보드 삭제 (→ 홈으로 이동)

* 추가 기능
  * 보드 수정: 색상 변경, 타이틀 변경
  * 리스트 생성
  * 리스트 수정: 타이틀 변경
  * 리스트 이동
  * 리스트 삭제

### 코드 스캐폴딩

Vue CLI를 만들어서 코드 스캐폴딩을 만들어 본다.

* 코드 스캐폴딩: 개발을 쉽게 시작할 수 있도록 기본 구조를 미리 짜놓는 것
* Vue CLI: Weppack을 이용하여 개발환경을 미리 만들어주는 도구

Vue CLI 설치

```bash
➜  ~ npm install -g vue-cli
```

Vue CLI를 이용하여 webpack-simple이라는 템플릿의 스캐폴딩을 만든다.

```bash
➜  ~ cd Desktop/Projects
➜  Projects mkdir lecture-vue-trello
➜  Projects cd lecture-vue-trello
➜  lecture-vue-trello
➜  lecture-vue-trello vue init webpack-simple

? Generate project in current directory? Yes
? Project name lecture-vue-trello
? Project description A Vue.js project
? Author
? License MIT
? Use sass? No

   vue-cli · Generated "lecture-vue-trello".

   To get started:

     npm install
     npm run dev
```

npm install 로 개발환경에 필요한 라이브러리들을 다운받는다.

```bash
➜  lecture-vue-trello npm install
```

개발 서버를 실행한다.

```bash
➜  lecture-vue-trello npm run dev
```

## 2. 라우팅

### 라우터의 필요성

라우팅?

> 데이터 통신에서의 라우팅(*Routing*)*이란* 
> 네트워크상에서 주소를 이용하여 목적지까지 메시지를 전달하는 방법을 체계적으로 결정하는 경로선택 과정

* 서버 라우팅
  * 매번 주소를 요청할 때 마다 화면이 갱신된다.
  * 예: 구글 검색, 네이버 검색 (검색을 할 때마다 페이지가 변경됨)
* 브라우저 라우팅
  * 주소를 매번 요청하더라도 화면이 갱신되지 않는다. 
  * 대신 화면에 필요한 데이터만 서버에 요청하여 화면을 갱신하는 방법을 사용한다.
  * 따라서, 서버 라우팅에 비해 좀 더 효율적으로 화면을 갱신할 수 있다.
  * 예: Gmail, Trello (페이지를 변경하지 않고 데이터 변경 처리가 이루어짐)

### vue-router

라우터를 만들기 위한 Vue의 라이브러리.

아래와 같이 설치한다.

```bash
➜  lecture-vue-trello git:(main) ✗ npm install vue-router
```

### 라우터 인스턴스

https://v3.router.vuejs.org/kr/guide/#javascript

이와 같이 만든다. 별다른 필기 없이 실습 후 [커밋](https://github.com/wonderminah/lecture-vue-trello/commit/04ee5d59502a4954de36976605704b799b7aa669).

### 라우터 뷰

https://v3.router.vuejs.org/kr/api/#router-view

주어진 라우트에 대해 일치하는 컴포넌트를 <router-view></router-view> 안에 렌더링 한다. [실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/c04040518feeaf18d5db75b53acea0acb6bfef65)

### 라우터 링크

https://v3.router.vuejs.org/kr/api/#router-link

기존의 <a>태그와 달리, 페이지 전환 없이 화면을 전환시키도록 한다. [실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/00bed1cfc7f680670f0bfc82a9d6ffa9fbd48c68)

### 동적 라우트 매칭

```js
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/board/:bid', component: Board },
  ]
})
```

url 주소의 파라미터 `:bid`는 컴포넌트에서 아래와 같이 쓰인다.

```html
<template>
    <div>
        Board
        <div>bid: {{ bid }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0 // 0은 왜 있는거야?
        }
    },
    created() {
        this.bid = this.$route.params.bid
    }
}
</script>
```

[실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/5cb0f82654ca1e78f25b436a4be53bb7d286c599)

### 중첩 라우트

```js
    { path: '/board/:bid', component: Board, children: [
        { path: 'card/:cid', component: Card }
    ] },
```

예를 들어, url의 /board/1 뒤에 /card/1이라는 url이 오면, Card 컴포넌트를 불러오게끔 하는 것이다. 

그리고 Card 컴포넌트는 Board.vue의 <router-view></router-view>에서 표시되게 된다.

```html
    <div>
        Board
        <div>bid: {{ bid }}</div>
        <router-link :to="`/board/${bid}/card/1`">Card 1</router-link>
        <router-link :to="`/board/${bid}/card/2`">Card 2</router-link>
        <hr />
        <router-view></router-view> <!-- Card 컴포넌트는 여기에서 불린다. -->
    </div>
```

[실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/d8b1003998c720270644d1aabe86732cc5e7480d)

### 데이터 불러오기

[실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/1d1083d4129498bae37630ea7641b749f2a32698)

## 3. API 통신

### 백엔드 API 살펴보기

커밋 딱히 없음. 로컬에 lecture-vue-trello-server clone해서 npm install, npm run dev 해서 백엔드 서버 띄운거 말고는.

### Ajax - XMLHttpRequest 객체

[실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/e226e820d17ae7881e5560989588f97149ddea02)

### Axios

[실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/86ae9f476b2a99ac0d7c8fd4302d87cb8381e46b)

### 보드 조회 API 연동

[실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/a082ffc344b5593ad45639717c553e6f0da245d9)

### Axios 실전에서 사용하기

[실습내용 커밋](https://github.com/wonderminah/lecture-vue-trello/commit/d34bcd4c28c0156e15a8556356eaa9e037781b1b)

## 4. 인증

### 인증 API

백엔드 API에 curl로 POST 요청을 날려 토큰을 받는다.

```bash
➜  lecture-vue-trello git:(main) curl -X POST localhost:3000/login -d 'email=test@test.com&password=123123'

{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc0NDAzNDUyLCJleHAiOjE3MDU5Mzk0NTJ9.FL5HyI9XJ1vqNC2uDa2SL_fDqEni0L6iiNoQEdbMY68","user":{"id":1,"email":"test@test.com","password":"123123","name":"Chris","createdAt":"2023-01-17T14:31:25.738Z","updatedAt":"2023-01-17T14:31:25.738Z"}}%
```

위에서 받은 토큰을 넣고 /boards에 curl을 날리면, 원래 401이었던 응답이 200이 되어 정상적으로 날아온다.

```bash
➜  lecture-vue-trello git:(main) ✗ curl -vs localhost:3000/boards -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc0NDAzNDUyLCJleHAiOjE3MDU5Mzk0NTJ9.FL5HyI9XJ1vqNC2uDa2SL_fDqEni0L6iiNoQEdbMY68'

{"list":[{"id":1,"title":"Sample Board","bgColor":"rgb(0, 121, 191)","createdAt":"2023-01-17T14:31:25.744Z","updatedAt":"2023-01-17T14:31:25.744Z","userId":1}]}%
```

### 네비게이션 가드

