import{a as n}from"./axios-G2rPRu76.js";import{_ as u,c as i,a as c,b as t,w as s,d as e,F as _,r,o as l}from"./index-6QWESCpj.js";var p={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"haru",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h}=p,m={data(){return{products:[],productDetail:{}}},methods:{checkAdmin(){n.post(`${h}/api/user/check`).then(o=>{alert("登入驗證成功！")}).catch(()=>{this.$router.push("/login")})}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");n.defaults.headers.common.Authorization=o,this.checkAdmin()}},f=c("h2",null,"這是後台",-1);function k(o,V,R,$,x,E){const a=r("RouterLink"),d=r("RouterView");return l(),i(_,null,[f,c("nav",null,[t(a,{to:"/admin/products"},{default:s(()=>[e("產品列表")]),_:1}),e(" | "),t(a,{to:"/admin/order"},{default:s(()=>[e("訂單列表")]),_:1}),e(" | "),t(a,{to:"/"},{default:s(()=>[e("回到前台")]),_:1})]),t(d)],64)}const w=u(m,[["render",k]]);export{w as default};