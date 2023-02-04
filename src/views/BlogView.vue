<script setup>
import passage from '/src/components/blog/passage.vue';
import neumorphismButton from '/src/components/neumorphism/neumorphismButton.vue';
</script>

<template>
  <div class="blog-view">
    <div class="main-container">
      <template v-for="( item,index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
        <passage :title="item" :index="index"></passage>
      </template>

    </div>
    <div class="float-container">
      测试测试<neumorphismButton>hello world</neumorphismButton>
    </div>
  </div>
</template>

<style scoped>
.blog-view {
  display: flex;
  justify-content: center;

  padding: 0 5%;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 65%;
}

.float-container {
  width: 35%;
  height: 600px;

  border-radius: var(--radius-border);
  background: var(--color-background);
  box-shadow: 20px 20px 60px var(--btn-hover),
    -20px -20px 60px var(--btn-left-top-shadow);
  margin-left: 30px;

  animation: 0.75s ease-out 0s fly-in forwards;
  transform: translateX(100%);
}


</style>
