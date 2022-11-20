<template>
    <div id="displayer">
       
  <!--:::::::::::   ADD USER   ::::::::::-->
                   
<input type="text" placeholder="Project Name" v-model="name" />
<input type="text" placeholder="Client Name" v-model="client"/>

<div>

     <!--:::::::::::   ADD USER   ::::::::::-->


    <p style="color:darkgreen;font-size:xx-small">
total : {{total}}$

pgs : {{ pgs }} lang : {{ lang }} </p></div>


<p style="background-color: black;color:aquamarine;width:100%" @click="www=!www">Share URL</p>
<div v-if="www">
<p style="background-color: black;color:aquamarine;width:100%">url: {{ this.$route }}</p>
</div>


        <div class="container">
            <div class="row">


 <!--:::::::::::  CHECKERS  COLUMN ::::::::::-->
                
                <div class="column1"><div class="menu rounded-2 m-1 mt-4">
    
    <p class="text-success">Choose your Contract:</p>

    <div><p><input class="checked m-2" type="checkbox" id="web" value="500" v-model="CHECKED" @click="showExtras" /> Pressupost d'una pàgina web (500 €).</p></div>

     <!--:::::::::::   PAGES PANEL ::::::::::-->

<p v-if="show">

<Extras 
:pgs="pgs"
:lang="lang"
:total="total" 


@addP="addPgs"
@addL="addLang"
@restaP="susPgs"
@restaL="susLang"
/>
</p>
<p v-else>
</p>
  <!--
  <p v-if="show">
        <Extras     
        
        @addP="addPgs"
        @restaP="susPgs"
        @addL="addLang"
        @restaL="susLang"
       
        :total="total"
        :pgs="pgs"
        :lang="lang"
        />
      </p>
      MODAL-->
    


<!--:::::::::::  CHECKERS  CONT ::::::::::-->

    <div><p><input input class="checked m-2" type="checkbox" id="seo" value="300" v-model="CHECKED"/> Fer una campanya SEO (300 €). </p></div>

    <div><p><input class="m-2 checked" type="checkbox" id="ads" value="200" v-model="CHECKED" /> Fer una campanya de publicitat (200 €).</p></div>



    <!--:::::::::::  BUTTONS CALCULATE &  SAVE  ::::::::::-->

    <div style="text-align:center">
    
    <button class="btn btn-sm btn-light text-success m-1" @click="clearIt">CLEAR</button>
    
        <button class="btn btn-sm btn-success text-light m-1" @click="calculate">CALCULATE</button>
    
    
    
        <button class="btn btn-sm btn-success text-light m-1" @click="saveBudget">SAVE</button>

</div>

   <!--::::::::::: RES=ULTS  ::::::::::-->



<span><p style="color:green">Checked:{{ CHECKED }} </p>  </span>
<hr>
<h4>TOTAL : {{ total }} $</h4>
<hr />
<div class="container d-block">
        <div class="row">
          <div class="col-6 col-sm-12"><p class="text-secondary">project:</p><p> {{ name }} </p> </div>
          <div class="col-6 col-sm-12"><p class="text-secondary">client:</p> <p> {{ client }} </p>  </div>
        </div>
        
       
        </div>
    
    
  
</div></div>


   <!--:::::::::::  LIST  COLUMN ::::::::::-->

                <div class="col-6">
                    <div class="listed rounded-2 m-1 mt-4">

 <label > <p style="margin-left: 20px; color:green">Order by :</p> </label>
                        <div style="text-align:center; display:center">
                           
<!--:::::::::::  BUTTONS SORT  ::::::::::-->

    <button class="btn btn-sm btn-success text-light m-1" @click="byPrice">Price</button>


    <button class="btn btn-sm btn-success text-light m-1" @click="byProject">Id</button>


    <button class="btn btn-sm btn-warning text-light m-1" @click="byClient">Client</button>

    
</div>

<label > <p style="margin-left: 20px; color:green">Find by :</p> </label>

<!--:::::::::::  BUTTONS FIND  ::::::::::-->

                        <div style="text-align:center; display:center">
                           
                            <div class="row m-4">
    <button class="btn btn-sm btn-success text-light" @click="findClient">Client Name</button><input type="text" placeholder="Enter Client..." id="clientData"/></div>

<p> result : </p><h6 id="resultClient"></h6>


    <div class="row m-4">
    <button class="btn btn-sm btn-success text-light" @click="findProject">Project Name</button><input type="text" placeholder="Enter Project..." id="projectData" /></div>

 
    
</div>

<!--:::::::::::   SORTED LIST  ::::::::::-->

    <ul>
        <li  v-for="item in CLIENTLIST" key="id"> <p style="background-color: aliceblue;" > 
            {{ item.id }} // {{ item.name }}  :{{ item.client }} {{ item.total }}$ </p></li>
    </ul>
    
   
    
  
    
  
</div>


                        
                     
                       
                       
                </div>
            </div>
        </div>




    </div>
</template>

<script>
import Extras from '../utilities/Extras.vue'
import NavBar from '../utilities/NavBar.vue'
import Modal from '../utilities/Modal.vue'






    export default {

        
        name:'Home',
        components:{NavBar, Extras, Modal},
      
      
       
           
           data() {
               return { show:false,www:false,CLIENTLIST,CHECKED:[],name:'',client:'',total:0,extra:0,pgs:1,lang:1}
            },
            watch:{
             "this.$route":{ immediate:true},
  
            },
            methods:{
                
                showExtras(){
                  
                  if(document.querySelector('#web').checked) {
                    this.CHECKED.unshift("500") ;
                  this.show=true;
                  
                  } else{
                    this.show=false;
                    this.CHECKED=[];
                  
                  }
                },
                clearIt(){
                    this.CHECKED=[];
                    this.total=0;
                    this.pgs=1;
                    this.lang=1;
                    this.client='';
                    this.name='';
                    this.clientData='';
                    this.nameData='';
                    document.getElementById('resultClient').innerHTML='';
                    this.show=false;
                  

                }
                ,
            calculate() {
              
                this.total=0;
                        //passa a number
                        const NUM = this.CHECKED.map(function(x){return parseInt(x)})
                        //es fa la suma de l'Array
                        this.total = NUM.reduce((partialSum, a) => partialSum + a, 0);
                       
                        
                        
                      


                        
                        // suma extras+total
                        this.total = this.total + (30*(this.pgs * this.lang));
            
                       
            },
                    saveBudget(){
                        if(this.name =='' || this.client=='' || this.total==0){alert('Enter missing Fields and press SAVE');
            }else{
                        const items = [0,0,0]
                        const newBudget = new Budget(
                            ((this.CLIENTLIST).length)+ 1,this.name,this.client,items,this.total,this.pgs,this.lang)

                            this.CLIENTLIST.push(newBudget);
                            this.clearIt();
                            document.querySelectorAll('checkers').checked=false;

                          
                            
                    }},
                    byPrice(){
                        console.log(this.CLIENTLIST)
                        return this.CLIENTLIST.sort((a, b) => b.total - a.total );
                        
                    },
                     byProject(){
                        return this.CLIENTLIST.sort((a, b) => a.id - b.id );
                        
                    },
                    byClient(){
                        console.log(this.CLIENTLIST)
                        return this.CLIENTLIST
                        .map((o)=>{o.client})
                        .sort(
                            (a,b)=>
                            (a.client>b.client)?1: 
                            ((b.client>b.client)?-1:0)
                        );
                        
                    },
                    addPgs(){
                      
                            this.pgs++;
                       
                    },
                    susPgs(){
                        if(this.pgs <= 1){
                            this.pgs==this.pgs;
                        }else{ 
                            this.pgs--;};
                    },
                    addLang(){
              
                            this.lang++;
                       
                    },
                    susLang(){
                        if(this.lang <= 1){
                            this.lang==this.lang;
                        }else{ 
                            this.lang--;};
                    },

                    findClient(){
                        document.getElementById('resultClient').innerHTML='';
                       let found= document.getElementById('clientData').value;
                       
                        const res = this.CLIENTLIST
                        .filter((o)=>o.client==found);

                        if(!res.length){
                            alert('Client not Found');
                        }else{
                        alert('Client found :'+' '+res[0].client)
                
                        document.getElementById('resultClient').innerHTML=//html 
                        `
                        <p style="color:green">id:${res[0].id}</p>
                       client: <h6>${res[0].client}</h6>
                        <p style="color:green">Project:${res[0].name}</p>
                        <p style="color:green">Total price:${res[0].total} $</p>
                        
                        
                        `
                    }},

                    findProject(){
                        document.getElementById('resultClient').innerHTML='';
                    let found= document.getElementById('projectData').value;
                    
                        const res = this.CLIENTLIST
                        .filter((o)=>o.name==found);

                        if(!res.length){
                            alert('Client not Found');
                        }else{
                        alert('Project found :'+' '+res[0].name)

                        document.getElementById('resultClient').innerHTML=//html 
                        `
                        <p style="color:green">id:${res[0].id}</p>
                    <p style="color:green">client: ${res[0].client}</p>
                    Project: <h6 >${res[0].name}</h6>
                        <p style="color:green">Total price:${res[0].total} $</p>
                        
                        
                        `
                    }}

                   
                    
                
        
        }


    }

    
</script>

<style lang="css" scoped>
.menu{
    border:solid 1px rgb(0, 192, 192);
    display:block;
    margin:2em;
    padding:1em;
    text-align: start
}
.listed{
    border:solid 1px rgb(0, 192, 38);
    background-color: rgba(183, 255, 255, 0.588);
    display:block;
    margin:2em;
    padding:0.02em;
    text-align: start
}

p{
    font-size: x-small;
}
h6{
    font-size: 8px;
}
</style>