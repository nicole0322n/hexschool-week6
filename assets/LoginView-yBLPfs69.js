import{a as l}from"./axios-G2rPRu76.js";import{_ as p,c as u,a as e,g as d,v as c,o as m,p as _,h as f}from"./index-6QWESCpj.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"haru",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:w}=h,v={data(){return{user:{username:"",password:""}}},methods:{login(){l.post(`${w}/admin/signin`,this.user).then(o=>{const{token:s,expired:a}=o.data;document.cookie=`hexToken=${s}; expires=${new Date(a)}; path=/`,this.$router.push("/admin/products")}).catch(()=>{alert("登入失敗")})}}},n=o=>(_("data-v-319f2606"),o=o(),f(),o),x={class:"container"},g={class:"row justify-content-center"},b=n(()=>e("h1",{class:"h3 mb-3 font-weight-normal text-center"},"請先登入",-1)),E={class:"col-8"},V={id:"form",class:"form-signin"},I={class:"form-floating mb-3"},k=n(()=>e("label",{for:"username"},"Email address",-1)),S={class:"form-floating"},T=n(()=>e("label",{for:"password"},"Password",-1)),y=n(()=>e("p",{class:"mt-5 mb-3 text-muted text-center"},"© 2021~∞ - 六角學院",-1));function D(o,s,a,R,r,i){return m(),u("div",x,[e("div",g,[b,e("div",E,[e("form",V,[e("div",I,[d(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.user.username=t),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[c,r.user.username]]),k]),e("div",S,[d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>r.user.password=t),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[c,r.user.password]]),T]),e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"button",onClick:s[2]||(s[2]=(...t)=>i.login&&i.login(...t))}," 登入 ")])])]),y])}const L=p(v,[["render",D],["__scopeId","data-v-319f2606"]]);export{L as default};
