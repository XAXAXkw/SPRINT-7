<template>
    <div>
        
<router-link to="/Home"> HOME | </router-link>
<router-link to="/Splash"> Splash  </router-link>
    </div>
</template>

<script>
    export default {
        name:'NavBar'
    }
</script>

<style lang="css" scoped>
div{
    background: linear-gradient(217deg, rgba(4, 206, 129, 0.901), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);

            color:rgb(30, 111, 50);
}

</style>