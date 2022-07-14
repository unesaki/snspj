<template>
  <div>
    <div class="container">
      <div class="flex__box">
        <div class="sidebar">
          <div class="logo">
            <img src="/img/img/logo.png" alt="">
          </div>
          <div class="main">
            <p><img src="/img/img/home.png" alt="">ホーム</p>
            <p><img src="/img/img/logout.png" alt="">ログアウト</p>
          </div>
          <div class="post">
            <label for="post__box">
              <p>シェア</p>
            </label>
            <textarea name="post__box" cols="30" rows="7"></textarea>
          </div>
          <div class="login__btn">
            <button type="submit">シェアする</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.container {
  width: 250px;
}
.logo {
  width: 50%;
  padding: 20px 0 20px 20px;
}
.logo img {
  width: 100%;
}
p {
  color: #fff;
  font-weight: normal;
}
.main {
  margin-left: 20px;
}
.main img {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  vertical-align: middle;
}

.post p {
  margin-left: 20px;
}
textarea {
  width: 80%;
  margin: 0 20px 0 20px;
  border-radius: 10px;
  border: 1px solid #fff;
  background-color: #000;
}

.login__btn {
  margin: 20px 20px 0 auto;
  width: 100px;
}

.login__btn button {
  border-radius: 30px;
  background-color: rgb(107, 34, 235);
  color: #fff;
  font-size: 12px;
  padding: 6px 15px;
}
</style>