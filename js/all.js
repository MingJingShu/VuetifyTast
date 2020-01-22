$(document).ready(function(){
    // console.log("hello This is {all.js}");
  


    const app3 = new Vue({
      el: '#app',
      vuetify: new Vuetify(),
      data: () => ({
        drawer: null

      })//data
    })//Vue
    
    Vue.use(Vuetify,{
      iconfont:'md',
      theme:{
        primary:'#9652ff',
        sucesss:'#3cd1c2',
        info:'#ffaa2c',
        error:'#f83e70'
      }
    })//VueUse

});//total
//el = element
//template 樣板
//data change content

// =>
// const array1 =[3,0,6,7,8];
// const map1 = array1.map(x => x * 2);
// console.log('map1 ='+map1);


// const materials = [
//   'Hydrogen',
//   'Helium',
//   'Lithium',
//   'Beryllium'
// ];

// console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]