<script>
import { RouterLink } from 'vue-router'
import {state} from '@/api/users'
export default {
  data() {
    return {
      state
    }
  },
  methods: {

  },
  props: {
    select: String
  },
  mounted(){

  }

}
</script>

<template>
  <p style="position: absolute;font-size: 3px;">{{ state }}</p>
  <header>
    <div @click="this.$router.push('/login')" class="user neum neum-hover neum-active">
      
      <div v-if="state.data" style="font-size: 20px;width: 100%;word-wrap: break-word;line-height:normal;">{{ state.data?.name }}</div>
      <i v-else class="fa-solid fa-user"></i>
    </div>
    <div class="option">
      <div :class="{ active: this.select == 'main', btn: true }">
        <RouterLink to="/main">首页</RouterLink>
      </div>
      <div :class="{ active: this.select == 'blog', btn: true }">
        <RouterLink to="/blog">博客</RouterLink>
      </div>
      <div :class="{ active: this.select == 'about', btn: true }">
        <RouterLink to="/about">关于</RouterLink>
      </div>
    </div>

    

  </header>
</template>

<style scoped>
.option {
  height: 40px;
  border-radius: 50px;
  background: var(--color-background);
  box-shadow: 20px 20px 60px var(--btn-right-bottom-shadow),
    -20px -20px 60px var(--btn-left-top-shadow);

  margin: 40px 20px;
  /* margin-top: 0; */
  /* padding-top: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

/*   [博客]   [关于]   */
.btn {
  height: 100%;
  /* width: calc(); */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;

  padding: 0 10px;

  border-radius: 50px;
  background: var(--color-background);
  box-shadow: 20px 20px 60px #bebebe,
    -20px -20px 60px var(--btn-left-top-shadow);

  transition: all 0.2s ease-in-out;
}

.btn:hover {


  background-color: var(--btn-hover);
}

.btn a {
  color: var(--color-font);
  text-decoration: none;
  /* transition: all 0.2s; */
}

.btn:hover a {
  font-weight: bolder;
}

.btn.active {
  box-shadow: inset 2px 2px 6px var(--btn-hover),
    inset -2px -2px 6px var(--btn-left-top-shadow);

}

.btn:active {
  box-shadow: inset 2px 2px 6px var(--btn-hover),
    inset -2px -2px 6px var(--btn-left-top-shadow);
}
</style>
<style scoped>
header{
  position: relative;
}
.user{
  overflow: hidden;
  position: absolute;
  height: 70px;
  width: 70px;
  top: -50%;
  right: 10%;
  /* background-color: black; */
  border-radius: 20px;

  text-align: center;
  line-height: 70px;
  font-size: 30px;
}

.user:hover{
  font-size: 25px;
}

@media (max-width: 650px) {
  .user{
    height: 40px;
    width: 40px;
    top:0;
    font-size: 20px;
    line-height: 40px;
  }
}
</style>