<template>
  <p v-if="info">
 <div class="modalInfo">
  

  Add Pages and make me rich...
 </div><div @click="info=false" class="modalBkg">BKG</div>
</p>

 <p v-if="info1">

 <div class="modalInfo1">

  More Languages, please...
 </div>
 <div @click="info1=false" class="modalBkg">BKG</div>
</p>

    <div>

<div class="container extras p-2 rounded-4 ">



  pages: {{ pgs }}  {{lang}} 

  
    <div >
   <p><label>Nº Pages </label> 
    <button class="btn btn-sm text-light bg-success m-1"  @click="P(1)">+</button>
   {{pgs}}
    <button class="btn btn-sm text-light bg-success m-1" @click="P(0)">-</button>

  <img @click="info=!info" src="../assets/info.svg">
   
  
  </p>
  </div>

  


    <div >
   <p><label>Nº Lang  </label> 
    <button class="btn btn-sm text-light bg-success m-1" 
    @click="L(1)">+</button>
    {{lang}} 
    <button class="btn btn-sm text-light bg-success m-1"  
    @click="L(0)">-</button>
  
    <img @click="info1=!info1" src="../assets/info.svg">
  
  </p>   total : {{total}}
    </div>
 

</div>
    </div>
</template>

<script>
import Modal from './Modal.vue'


    export default {
        name:'Extras',
        components:{Modal},
        data(){
          return{
            info:false,info1:false
          }
        },
    props:['total','pgs','lang'],
       
   
       methods:{
        P(n){
          if(n==1){
          this.$emit('addP')}
          else if((n==0)){
            this.$emit('restaP')
          }
        },
        L(n){
          if(n==1){
          this.$emit('addL')}
          else if((n==0)){
            this.$emit('restaL')
          }
        },
     
       }

    }


</script>

<style lang="css" scoped>


p{
    font-size: xx-small;
}
.extras{
    display:inline-block;
    text-align: right;
    margin:auto;
    padding:1em;
   width:80%;
   min-width: 150px;
    color:green;
    background-color: rgba(0, 255, 255, 0.423);
    align-content: center;
    border:solid 1px black;
}

.modalBkg{
  background-color: rgba(0, 0, 0, 0.69);
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
}
.modalInfo{
    background-color: rgba(0, 255, 255, 0.69);
    display: inline-block;
    border: solid 2px rgba(0, 0, 0, 0.512);
    border-radius: 50px;
    padding:20px;
    z-index: 10;
    position: absolute;
    margin-top: 120px;
}
.modalInfo1{
    background-color: rgba(0, 255, 123, 0.676);
    display: inline-block;
    border: solid 2px rgba(0, 0, 0, 0.512);
    border-radius: 50px;
    padding:20px;
    z-index: 500;
    position: fixed;
    margin-top: 20px;
}
.pictoInfo{
  
        font-family:'Bootstrap-icons';
        content:'\F120';
    
}

</style>