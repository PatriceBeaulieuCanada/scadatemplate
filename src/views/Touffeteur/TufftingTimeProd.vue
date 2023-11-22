<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UseCallApi } from "../../service/UseCallApi";

const startDate = ref(new Date());
const endDate = ref(new Date());
const dt1 = ref();
const dataStandard = ref();
const param = { action: "", date1: new Date(), date2: new Date(), tufter: "" };
let data = [];

const handleClick = async () => {
  param.action = "GetTufftingTimeProd";
  param.date1 = new Intl.DateTimeFormat("en-US").format(startDate.value) as any;
  param.date2 = new Intl.DateTimeFormat("en-US").format(endDate.value) as any;
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
    <label>Temps de prod vs temps perdu</label>
    <div class="stdHeader">
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
          field="weekOfYear"
          header="Semaine"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="shift"
          header="Quart"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="tuffter"
          header="Touffeteur"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="employee"
          header="Opérateur"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="startDateAction"
          header="Date début"
          :style="{ textAlign: 'left' }"
        > <template #body="{ data }">{{
              new Date(data.startDateAction).toLocaleString()
            }}</template>
        </Column>
        <Column
          field="endDateAction"
          header="Date fin"
          :style="{ textAlign: 'left' }"
        > <template #body="{ data }">{{
              new Date(data.endDateAction).toLocaleString()
            }}</template>
        </Column>
        <Column
          field="elapsedTime"
          header="Duréé (minutes)"
          :style="{ textAlign: 'left' }"
        > 
        <template #body="{ data }">{{
              parseFloat(data.elapsedTime).toFixed(2)
            }}</template>
        </Column>
        <Column
          field="action"
          header="Action"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="histStopInfosEntity.stopReason"
          header="Raison d'arrêt"
          :style="{ textAlign: 'left' }"
        ></Column>
        <Column
          field="histStopInfosEntity.stopTime"
          header="Début arrêt"
          :style="{ textAlign: 'left' }"
        ><template #body="{ data }">{{
              new Date(data.histStopInfosEntity?.stopTime).toLocaleString()
            }}</template></Column>
            <Column
          field="histStopInfosEntity.restartTime"
          header="Fin arrêt"
          :style="{ textAlign: 'left' }"
        ><template #body="{ data }">{{
              new Date(data.histStopInfosEntity?.restartTime).toLocaleString()
            }}</template>
        </Column>
        <Column
          field="histStopInfosEntity.elapsedTime"
          header="Durée arrêt"
          :style="{ textAlign: 'left' }"
        ><template #body="{ data }">{{
              parseFloat(data.histStopInfosEntity?.elapsedTime).toFixed(2)
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