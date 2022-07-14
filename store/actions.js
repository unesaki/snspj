export default {
  async registration({ commit }, { name, email, password }) {
    try {
      if (email.includes("@") === false) {
        throw new Error("メールアドレスには＠が含まれている必要があります。")
      } else if (password.length <= 6) {
        throw new Error("パスワードは6文字以上で作成してください。")
      }
      let data = { name: name, email: email, password: password }
      commit("REGISTER_USER", data)
    } catch (e) {
      throw e
    }
  },

  async login({ commit }, { email, password }) {
    console.log(commit)
    try {
      if (email != authUser.email || password != authUser.password) {
        throw new Error("error!!!")
      }
      // 入力したメールアドレスとパスワードが
      // すでに登録されているメールアドレスとパスワードと一致した場合、変数dataに入力値が渡されます。
      let data = { email: email, password: password }
      // 変数dataのを次のmutations.jsにあるAUTHED_USERメソッドに渡します。
      commit("AUTHED_USER", data)
    } catch (e) {
      throw e
    }
  }
}