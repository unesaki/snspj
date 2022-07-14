<template>
  <div>
    <div class="container">
      <header class="header flex__item">
        <div class="header__logo">
          <img src="/img/img/logo.png" alt="">
        </div>
        <nav class="header__nav">
          <ul class="flex__item">
            <li>新規登録</li>
            <li>ログイン</li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<style>
.container {
  background-color: #000;
  height: 500px;
}
.header {
  height: 100px;
  color: #fff;
}
.header__logo {
  width: 140px;
  margin: 20px 0 0 20px;
}
.header__logo img {
  width: 100%;
}
.flex__item {
  display: flex;
  justify-content: space-between;
  }
  
  li {
    list-style: none;
    margin: 10px 40px 0 0;
  }
</style>