<template>
    <div>
<p> hellooooooooooooooooooooooooooooooooooooooo {{ hero.firstName}}</p>
    </div>
</template>

<script>
    export default {
        name: 'HeroDetail',

        props: {
          hero: {
                type: Object,
                default: () => {}
            },
        },
    }
</script>
<style scoped>

</style>

