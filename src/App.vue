<template>
  <main>
      <px-header  :links="links" />
      <router-view class="containter px-5 sm:px-20 py-20 flex justify-center" />

  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader'


//export default es parte de modulos de ecmacscript  y el objeto es el mismo de components
export default {
  name: 'app',
  data(){

    return{
      links:[
        {

          title:'BTC',

          to: {name:'coin-detail', params: {id:'bitcoin'} }

        },

        {
          title:'ETH',
          to: { name:'coin-detail', params:{ id:'ethereum'} }
        },

        {
          title:'XRP',
          to:{ name:'coin-detail', params:{ id:'ripple'}}
        }
      ]
    }

  },

  components: {
    PxHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
