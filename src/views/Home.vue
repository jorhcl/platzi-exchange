<template>
<div>
    <ring-loader :loading="isLoading" :color="'#68d391'" :size="100"></ring-loader>
    <px-assets-table v-if="!isLoading" :assets="assets" />
</div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'


export default {
    name: "Home",

    components:{ PxAssetsTable },

    //propiedad que almacena el retorno de api
    data(){
        return {
            assets :[],
            isLoading:false
        }
    },
    /// hook para hacer la interacion de api
    created(){
        this.isLoading=true,
        api.getAssets().then(assets=>(this.assets = assets)).finally(()=>this.isLoading=false)

    }
}
</script>