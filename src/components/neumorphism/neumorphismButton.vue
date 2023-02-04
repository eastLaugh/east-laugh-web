<script>

</script>


<template>
    <span class="btn-container">
        <p><slot></slot></p>
    </span>

</template>

<style scoped>
.btn-container {
    display: inline-block;
    line-height: 50px;
    height: 50px;
    margin-right: 7px;

    color: var(--color-font);

    padding: 0 10px;
    border-radius: 50px;
    background: var(--color-background);
    box-shadow: 20px 20px 60px var(--btn-right-bottom-shadow),
        -20px -20px 60px var(--btn-left-top-shadow);

    transition: all 0.2s ease-in-out;


    cursor: pointer;
    user-select: none;
}

.btn-container:hover {
    background: var(--btn-hover);
    /* font-weight: bold; */
}

.btn-container:active{
    box-shadow: inset 2px 2px 6px var(--btn-hover),
    inset -2px -2px 6px var(--btn-left-top-shadow);
}

.btn-container:hover p{
    /* font-weight: bolder; */
}
</style>