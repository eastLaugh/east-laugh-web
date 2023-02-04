<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      activeButton: null,
      btns: [
        { to: "/", content: "首页" },
        { to: "/blog", content: "博客" },
        { to: "/about", content: "关于" }
      ]
    }
  },
  methods: {
    click(i) {

    }
  },
}
</script>

<template>
  <header>
    <!-- {{ activeButton }} -->
    <template v-for="(item, index) in btns">
      <div class="btn" :class="{ active: activeButton === index }">
        <RouterLink :to="item.to" @click="activeButton = index">{{ item.content }}
        </RouterLink>
      </div>
    </template>
    <!-- <div class="btn">
      <RouterLink to="/" @click="click(this)" ></RouterLink>
    </div>
    <div class="btn">
      <RouterLink to="/blog" @click="click(1)">博客</RouterLink>
    </div>
    <div class="btn">
      <RouterLink to="/about" @click="click(2)">关于</RouterLink>
    </div> -->

  </header>
</template>

<style scoped>
header {
  height: 40px;

  border-radius: 50px;
  background: var(--color-background);
  box-shadow: 20px 20px 60px var(--btn-right-bottom-shadow),
    -20px -20px 60px var(--btn-left-top-shadow);

  margin: 40px 20px;
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
  

  background-color: #bebebe;
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

.btn:active{
  box-shadow: inset 2px 2px 6px var(--btn-hover),
    inset -2px -2px 6px var(--btn-left-top-shadow);
}
</style>
