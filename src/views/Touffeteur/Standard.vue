<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UseCallApi } from "../../service/UseCallApi";

const dt1 = ref();
const dataStandard = ref();
const param = { action: "", date1: new Date(), date2: new Date(), tufter: "" };
let data = [];

const handleClick = async () => {
  param.action = "GetTufftingStandard";
  data = await UseCallApi(param);
  dataStandard.value = data;
  console.log(dataStandard);
};

const exportCSV1 = () => {
  dt1.value.exportCSV();
};
</script>

<template>
  <div class="stdContainer">
    <label>Standard vitesse par touffeteur/style</label>
    <div class="stdHeader">
      <!-- <div class="item">
        <label>Date Début : </label>
        <Calendar v-model="startDate" dateFormat="yy/mm/dd" showIcon />
      </div>
      <div class="item">
        <label>Date fin : </label>
        <Calendar v-model="endDate" dateFormat="yy/mm/dd" showIcon />
      </div> -->
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
        :value="dataStandard"
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
          field="tufter"
          header="Touffeteur"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="style"
          header="Style"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="speed"
          header="Vitesse"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column field="stitch" header="Stitch" />
        <Column field="mtrPerHours" header="mètres/heures">
            <template #body="{ data }">{{
              parseFloat(data.mtrPerHours).toFixed(2)
            }}</template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<style scoped>
.stdContainer {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-content: center;
  /* justify-content: center; */
  flex-direction: column;
}

.stdContainer label {
  margin-top: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.stdHeader {
  width: 100%;
  height: 8%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;
  padding: 5px;
}

.stdHeader label {
  margin: 0 10px;
}

.stdHeader .bntCSS {
  margin: 0 10px;
}
</style>