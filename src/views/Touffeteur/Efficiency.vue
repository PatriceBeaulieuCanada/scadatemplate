<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UseCallApi } from "../../service/UseCallApi";

const startDate = ref(new Date());
const endDate = ref(new Date());
const dt1 = ref();
const dataEfficiency = ref();
const param = { action: "", date1: new Date(), date2: new Date(), tufter: "" };
let data = [];

const handleClick = async () => {
  param.date1 = new Intl.DateTimeFormat("en-US").format(startDate.value) as any;
  param.date2 = new Intl.DateTimeFormat("en-US").format(endDate.value) as any;
  param.action = "GetTufftingEfficiencies";
  data = await UseCallApi(param);
  dataEfficiency.value = data;
  //console.log(dataEfficiency);
};

const exportCSV1 = () => {
  dt1.value.exportCSV();
};
</script>

<template>
  <div class="effContainer">
    <label>Éfficacité par employés</label>
    <div class="effHeader">
      <div class="item">
        <label>Date Début : </label>
        <Calendar v-model="startDate" dateFormat="yy/mm/dd" showIcon />
      </div>
      <div class="item">
        <label>Date fin : </label>
        <Calendar v-model="endDate" dateFormat="yy/mm/dd" showIcon />
      </div>
      <Button
        class="bntCSS"
        label=" Validez"
        @click="handleClick"
        icon="pi pi-chart-bar"
      ></Button>
    </div>
    <div class="effGrid">
      <DataTable
        class="gridCSS"
        :value="dataEfficiency"
        tableStyle="min-width: 50rem"
        scrollable
        scrollHeight="95%"
        showGridlines
        ref="dt1"
      >
        <template #header>
          <div style="text-align: left">
            <Button
              id="grid1"
              icon="pi pi-external-link"
              label="Export"
              @click="exportCSV1()"
            />
          </div>
        </template>
        <Column
          field="operator"
          header="Opérateur"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="tuffter"
          header="Touffeteur"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="style"
          header="Style"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="lenght"
          header="Qty fait (Mètres)"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column field="nbr28po" header="Nbr 28 pouces" />
        <Column field="nbrGluePerBeam" header="Nbr attache par colle" />
        <Column field="nbrAirPerBeam" header="Nbr attache par air" />
        <Column field="nbrKnots" header="Noeuds" width="10%" />
        <Column field="nbrFloor" header="Plancher" />
        <Column field="nbrBringChariot" header="Nbr apporter Chariot" />
        <Column field="nbrRemoveChariot" header="Nbr enlever Chariot" />
        <Column field="nbrBacking" header="Nbr endos" />
      </DataTable>
    </div>
  </div>
</template>

<style scoped>
.effContainer {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-content: center;
  /* justify-content: center; */
  flex-direction: column;
}

.effContainer label {
  margin-top: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.effHeader {
  width: 100%;
  height: 8%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;
  padding: 5px;
}

.effHeader label {
  margin: 0 10px;
}

.effHeader .bntCSS {
  margin: 0 10px;
}
</style>