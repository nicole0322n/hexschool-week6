import{a as r}from"./axios-G2rPRu76.js";import{_ as d,c as i,a as c,b as o,w as s,d as e,F as _,r as n,o as l}from"./index-J54FO6Kg.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"haru",BASE_URL:"/hexschool-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p}=h,m={data(){return{products:[],productDetail:{}}},methods:{checkAdmin(){r.post(`${p}/api/user/check`).then(t=>{alert("登入驗證成功！")}).catch(()=>{this.$router.push("/login")})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");r.defaults.headers.common.Authorization=t,this.checkAdmin()}},f=c("h2",null,"這是後台",-1);function k(t,V,x,R,$,E){const a=n("RouterLink"),u=n("RouterView");return l(),i(_,null,[f,c("nav",null,[o(a,{to:"/admin/products"},{default:s(()=>[e("產品列表")]),_:1}),e(" | "),o(a,{to:"/admin/order"},{default:s(()=>[e("訂單列表")]),_:1}),e(" | "),o(a,{to:"/"},{default:s(()=>[e("回到前台")]),_:1})]),o(u)],64)}const T=d(m,[["render",k]]);export{T as default};