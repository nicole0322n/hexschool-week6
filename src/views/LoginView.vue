<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <!-- 登入帳號加上 v-model -->
            <input
              v-model="user.username"
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <!-- 登入密碼加上 v-model -->
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <!-- type 改 button，點擊後觸發 axios -->
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted text-center">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>
<script>
import axios from 'axios'
const { VITE_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 按下登入，axios 驗證 帳密資料 -> 確認無誤跳轉至商品頁面
    login () {
      axios
        .post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data // 取出 token(登入驗證), expired(時間戳記)
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/` // 將取出來的 token, expired 存到 cookie
          this.$router.push('/admin/products')
          // window.location = 'products.html' // 跳轉頁面至 products.html
        })
        .catch(() => {
          alert('登入失敗')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
