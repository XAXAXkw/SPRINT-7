<template>
    <div>
      <router-link to="/Home"> <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" /> </router-link>

    <h6>Welcome to</h6> <h4>Sprint VII</h4> 
    <p>Version 7.0988.2 Millenium 500/x6</p>
    </div>
</template>

<script>
    export default {
        name:'Splash',
    }
</script>

<style lang="css" scoped>
div{
  width:100%;
  min-height:800px;
}

.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #fbff85aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em greenyellow);
}
h4{

  color:rgb(0, 85, 25);
  text-shadow:0 0 1em greenyellow;
}
h6{
  color:green;
  filter: drop-shadow(0 0 2em greenyellow);
}
p{
  color:rgb(0, 85, 25);
  font-size: 6px;
}
</style>