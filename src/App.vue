<script setup lang="ts">
import "./assets/app.css";
import { ref } from "vue";


const items = ref([
    {
        label: 'Touffetage',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Efficacité',
                icon: 'pi pi-fw pi-plus',
                url: "/efficiency"
            },
            {
                label: 'Performance',
                icon: 'pi pi-fw pi-plus',
                url: "/performance"
            },
            {
                label: 'Standard',
                icon: 'pi pi-fw pi-plus',
                url: "/standard"
            },
            {
                label: 'Tableau',
                icon: 'pi pi-fw pi-trash',
                url: "/graphdb"
            }            
        ]
    },
    {
        label: 'Beaming',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Efficacité',
                icon: 'pi pi-fw pi-plus'
            },
            {
                label: 'Temps arrêt',
                icon: 'pi pi-fw pi-trash',
                url: "/usersingleview"
            }            
        ]
    },
    {
        label: 'Finition',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Efficacité',
                icon: 'pi pi-fw pi-plus'
            },
            {
                label: 'Temps arrêt',
                icon: 'pi pi-fw pi-trash',
                url: "/usersingleview"
            }            
        ]
    },   
   
]);
</script>

<template>  
    <div class="mainContainer">
      <div class="appMenu">        
          <Menubar :model="items" class="p-menubar"/>         
      </div>
      <div class="viewContainer">
        <router-view />
      </div>
    </div>  
</template>

<style scoped>

.mainContainer {
  display: block;
    background-color: #f1f1f1;
    height: 98%;
    width: 99%;
    position: absolute;
    margin: 0px;
    padding: 0px; 
     
}
.appMenu {
  height: 6%;
  width: 100%;
  min-width: 150px; 
  background-color: #fff;
}

.viewContainer{
  height: 94%;
  width: 100%;  
  padding: 10px;  
}

.p-menubar {
    background-color: #fff;
    padding: 0px;
    height: 100%;
    font-weight: bolder !important;
    font-size: 20px !important;          
}

</style>
