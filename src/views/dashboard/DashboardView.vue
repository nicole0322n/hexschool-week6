<template>
    <h2>這是後台</h2>
    <nav>
        <RouterLink to="/admin/products">產品列表</RouterLink> |
        <RouterLink to="/admin/order">訂單列表</RouterLink> |
        <RouterLink to="/">回到前台</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>
<script>
import axios from 'axios'
const { VITE_URL } = import.meta.env
export default {
  data () {
    return {
      products: [], // 存放產品資料 空陣列
      productDetail: {} // 暫存產品明細資料 空物件
    }
  },
  methods: {
    // 1 確認是否登入
    checkAdmin () {
      axios
        .post(`${VITE_URL}/api/user/check`)
        .then((res) => {
          alert('登入驗證成功！')
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    // 從 cookie 裡取得 Token（Token 僅需要設定一次）
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 下次進到這個網站，會將 Ｔoken 裡的資料傳給 cookie，就不需要再回傳驗證一次
    axios.defaults.headers.common.Authorization = token

    this.checkAdmin()
  }
}
</script>
