general-forum(자유게시판)
==================
Frontend
==================
- HTML
- CSS
- JavaScript

Backend
==================
- JavaScript
- jQuery
- NodeJs

Database
==================
- MySql

## day 1
web을 공부하는 중에 request, response에 대한 개념이 헷갈려서 간단하게 정리를 합니다.<br>
**request** : 클라이언트로부터 받는 데이터<br>
**response** : 클라이언트에게 전달할 데이터<br>

cookie를 설정하는 방법을 배워서 적어봅니다.<br>
web server가 cookie를 생성하지 않으면 client인 web browser는 cookie에 대한 정보를 받을 수 없습니다.<br>
web server에서 cookie를 생성하는 방법은 아래와 같습니다. 그리고 여러개의 cookie를 web browser로 보낼려면 아래 코드와 같이 배열을 사용합니다.<br>
**nodejs**
```javascript
response.writeHead(200, {
    'Set-Cookie':['cookie=choco', 'cool-cookie=nice_guy']
});
```
------------------


개념
==================
**request** : 클라이언트로부터 받는 데이터<br>
**response** : 클라이언트에게 전달할 데이터<br>
**cookie** :<br>
&nbsp;&nbsp;&nbsp;&nbsp;서버측에서 클라이언트 측에 상태 정보를 저장하고 추출할 수 있는 메커니즘<br>
&nbsp;&nbsp;&nbsp;&nbsp;클라이언트의 매 요청마다 웹 브라우저로부터 서버에게 전송되는 정보패킷의 일종<br>
&nbsp;&nbsp;&nbsp;&nbsp;HTTP에서 클라이언트의 상태 정보를 클라이언트의 사드 디스크에 저장했다가 필요시 정보를 참조하거 재사용 가능<br>
&nbsp;&nbsp;&nbsp;&nbsp;WEB 상에서 사용자 식별, 사용자 정보 유지에 도움<br>
&nbsp;&nbsp;&nbsp;&nbsp;세션 유지에 사용<br>

참고
==================
### markdown
- [MD 사용법](https://heropy.blog/2017/09/30/markdown/)
- [MD indent](https://stackoverflow.com/questions/6046263/how-to-indent-a-few-lines-in-markdown-markup)

### nodejs
- [생활코딩-cookie](https://www.youtube.com/watch?v=i51xW3eh-T4&list=PLuHgQVnccGMDo8561VLWTZox8Zs3K7K_m&index=1)

### cookie 정보
- [cookie](https://soul0.tistory.com/106)
