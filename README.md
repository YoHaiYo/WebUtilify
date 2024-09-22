### 세팅목록

- navbar등 페이지 구조
- 테일윈드
- vercel 정적라우팅

### env 설정

route directory에 .env.local 파일만들고 다음과 같이 지정

```
VITE_SUPABASE_URL = ~
VITE_SUPABASE_ANON_KEY = ~
```

### vue에서 폰트어썸사용

https://fontawesome.com/search?o=r&m=free

```
  <font-awesome-icon icon="fa-user" />
  <font-awesome-icon icon="fa-solid fa-user" />
  <font-awesome-icon
    icon="fa-star"
    class="text-gray-400"
    style="font-size: 16"
  />
```
