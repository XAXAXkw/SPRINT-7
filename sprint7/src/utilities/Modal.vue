<template>
    <div class="under">
        <div class="over">
    <h6>
   {{ mssg }} </h6></div>
    </div>
</template>

<script>
    export default {
        name:'Modal',
        props:{mssg:String},
    }
</script>

<style lang="css" scoped>
.under{
    background-color: rgba(0, 0, 0, 0.594);
    z-index:1;
position:absolute;
border-radius: 35px;
    margin-top:150px;
    margin-left:150px;
    padding:0px;
}
.over{
    background-color: rgba(0, 255, 255, 0.608);
    display: inline-block;
    border: solid 2px rgb(0, 0, 0);
    border-radius: 50px;
    padding:20px;
    z-index: -1;
    position: relative;
}

</style>