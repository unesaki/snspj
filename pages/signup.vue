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
      <div class="signup__form">
        <form @submit.prevent="registration">
          <p class="form__title">新規登録</p>
          <p class="error" v-if="error">{{ error }}</p>
          <p><input type="text" v-model="name" placeholder="氏名" name="name"></p>
          <p><input type="text" v-model="email" placeholder="メールアドレス" name="email"></p>
          <p><input type="text" v-model="password" placeholder="パスワード" name="password"></p>
          <div class="signup__btn">
            <button type="submit">新規登録</button>
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
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    async registration() {
      try {
        await this.$store.dispatch("registration", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.$router.path("/")
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
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

.signup__form {
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
  
  .signup__btn button {
    border-radius: 30px;
    background-color: rgb(107, 34, 235);
    color: #fff;
    font-size: 10px;
    padding: 8px 20px;
    margin-bottom: 20px;
  }
</style>