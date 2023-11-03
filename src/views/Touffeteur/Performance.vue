<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UseCallApi } from "../../service/UseCallApi";

const startDate = ref(new Date());
const endDate = ref(new Date());
const dt1 = ref();
const dataPerformance = ref();
const param = { action: "", date1: new Date(), date2: new Date(), tufter: "" };
let data = [];

const handleClick = async () => {
  param.date1 = new Intl.DateTimeFormat("en-US").format(startDate.value) as any;
  param.date2 = new Intl.DateTimeFormat("en-US").format(endDate.value) as any;
  param.action = "GetTufftingEfficiencies";
  data = await UseCallApi(param);
  dataPerformance.value = data;
  //console.log(dataEfficiency);
};

const exportCSV1 = () => {
  dt1.value.exportCSV();
};
</script>

<template>
  <div class="perContainer">
    <label>Performance par touffeteur</label>
    <div class="perHeader">
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
    <div class="perGrid">
      <DataTable
        class="gridCSS"
        :value="dataPerformance"
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
        <Column field="nbr28po" header="Vitesse" />
        <Column field="nbrGluePerBeam" header="Stitch" />
        <Column field="nbr28po" header="Temps Standard (heures)" />
        <Column field="nbrGluePerBeam" header="Temps scada (heures)" />
        <Column field="nbrAirPerBeam" header="Temps inscrit (heures)"/>
      </DataTable>
    </div>
  </div>
</template>

<style scoped>
.perContainer {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-content: center;
  /* justify-content: center; */
  flex-direction: column;
}

.perContainer label {
  margin-top: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.perHeader {
  width: 100%;
  height: 8%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;
  padding: 5px;
}

.perHeader label {
  margin: 0 10px;
}

.perHeader .bntCSS {
  margin: 0 10px;
}
</style>