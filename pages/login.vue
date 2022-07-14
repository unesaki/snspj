<template>
  <div>
    <div class="container">
      <header class="header flex__item">
        <div class="header__logo">
          <img src="/img/img/logo.png" alt="">
        </div>
        <nav class="header__nav">
          <ul class="flex__item">
            <li><nuxt-link :to="/signup">新規登録</nuxt-link></li>
            <li><nuxt-link :to="/login">ログイン</nuxt-link></li>
          </ul>
        </nav>
      </header>
      <div class="login__form">
        <form @submit.prevent="login"> //送信ボタンを押されたとき、画面遷移ではなく切り替えを行う
          // methodsのloginが読まれる
          <p class="form__title">ログイン</p>
          <p class="error" v-if="error">{{error}}</p>
          <p><input type="text" v-model="email" placeholder="メールアドレス" name="email"></p>
          <p><input type="text" v-model="password" placeholder="パスワード" name="password"></p>
          <div class="login__btn">
            <button type="submit">ログイン</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
  data() {
    return {
      error: null,
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log(this.registerd_user);
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
          authData: this.$store.state.registeredUser
        });
        this.$router.path("/");
      }
      catch (e) {
        this.error = e.massage;
      }
    }
  },
  components: { Heder, Heder1 }
};
</script>

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

.login__form {
  width: 40%;
  margin: 30px auto;
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
}

.form__title {
  padding-top: 15px;
  font-weight: bold;
}

input {
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #000;
}

.login__btn button {
  border-radius: 30px;
  background-color: rgb(107, 34, 235);
  color: #fff;
  font-size: 10px;
  padding: 8px 20px;
  margin-bottom: 20px;
}
</style>

