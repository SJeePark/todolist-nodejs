# To-do List 만들기

## 정리
1. 할일 추가 CREATE    /tasks post
2. 추가된 할일 리스트에서 확인 READ /task get
3. 할일 달성 체크 표시 UPDATE   /task/:id put
4. 할일 삭제 기능 DELETE    /task/:id delete

## 백엔드 준비
1. 기본 세팅: npm, express, mongoose, app 리스너
2. 라우터 주소 정의
3. 데이터베이스 스키마 정의
4. 기능 정의: CRUD
5. 테스트: 포스트맨

## 프론트엔드 준비
1. 깃클론
2. 기능 만들기
3. 테스트

### npm 사용 라이브러리
- body-parser: body 부분을 객체 형태로 전환해준다. 
=> but 최신 node는 알잘딱깔센으로 parser가 실행되기 때문에 따로 불러와주지 않아도 됨. node:14972 나지만 실행하는데에는 문제 없을 무
- nodemon: 코드 바꿀 때마다 다시 실행하기 매우 귀찮잖아요?> 그래서 만들어진 nodemon. 
- cors: 
- dotenv: 
- bcryptjs: 암호화

<br>
설치해주면 알아서 재실행해줌 굉장히 편리하도다<br>

### Mongoose 메서드
- findByIdAndUpdate(id, updateObj, options)	ID로 찾고 수정
- findByIdAndDelete(id)	ID로 찾고 삭제
- findById(id)	ID로 찾기만 함
- findOneAndDelete(filter)	조건으로 삭제
- deleteOne(filter)	조건에 맞는 문서 하나 삭제
- deleteMany(filter)	조건에 맞는 문서 여러 개 삭제
