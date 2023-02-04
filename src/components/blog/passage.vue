<script>
import Checkbox from '../neumorphism/checkbox.vue';
export default {
    props: ["title", "index"],
    components: { Checkbox }
}

</script>

<template>
    <div class="container" :style="{
        transform:'translateX(-'+(index+1)+'00%)'
    }">
        {{ title }}
        <Checkbox></Checkbox>
    </div>
    
</template>

<style scoped>
/* 卡片最外层 */
.container {
    width: 100%;
    min-width: 160px;
    min-height: 120px;
    margin-bottom: 40px;

    padding: calc(var(--radius-border)*0.5);

    border-radius: var(--radius-border);
    background: var(--color-background);
    box-shadow: 20px 20px 60px var(--btn-hover),
        -20px -20px 60px var(--btn-left-top-shadow);

    transition: all 0.2s;


    /* 实现飞入效果 */
    position: relative;
    animation: fly-in 0.5s ease-out forwards;

}


.container:hover {
    background-color: var(--btn-hover);
}
</style>