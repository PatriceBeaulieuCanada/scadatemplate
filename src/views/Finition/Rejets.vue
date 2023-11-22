<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UseCallApi } from "../../service/UseCallApi";

const startDate = ref(new Date());
const endDate = ref(new Date());
const dt1 = ref();
const dataRejet = ref();

const chartData = ref();
const chartOptions = ref();
const chartData2 = ref();
const chartOptions2 = ref();
const chartData3 = ref();
const chartOptions3 = ref();

const param = { action: "", date1: new Date(), date2: new Date() };
let data = [];

const handleClick = async () => {
  param.action = "GetFinitionRejet";
  data = await UseCallApi(param);
  dataRejet.value = data;
  //console.log(dataStandard);
};

const exportCSV1 = () => {
  dt1.value.exportCSV();
};

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
  chartData2.value = setChartData2();
  chartOptions2.value = setChartOptions2();
  chartData3.value = setChartData3();
  chartOptions3.value = setChartOptions3();
});

const setChartData = () => {
  return {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Sales",
        data: [540, 325, 702, 620],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};

const setChartData2 = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: [
          documentStyle.getPropertyValue("--blue-500"),
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--green-500"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--blue-400"),
          documentStyle.getPropertyValue("--yellow-400"),
          documentStyle.getPropertyValue("--green-400"),
        ],
      },
    ],
  };
};

const setChartOptions2 = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");

  return {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: textColor,
        },
      },
    },
  };
};

const setChartData3 = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: documentStyle.getPropertyValue("--blue-500"),
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        data: [50, 25, 12, 48, 56, 76, 42],
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: documentStyle.getPropertyValue("--green-500"),
        data: [21, 84, 24, 75, 37, 65, 34],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };
};
const setChartOptions3 = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>

<template>
  <div class="rejetContainer">
    <label>Rapport des rejets</label>
    <div class="rejetHeader">
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
    <div class="rejetBody">
      <div class="grid1">
        <lable>0.46</lable>
      </div>
      <div class="grid2">
        <Chart
          class="chartCSS2"
          type="bar"
          :data="chartData"
          :options="chartOptions"
        />
      </div>
      <div class="grid3">
        <Chart
          class="chartCSS3"
          type="pie"
          :data="chartData2"
          :options="chartOptions2"
        />        
      </div>
      <div class="grid4">
        <Chart
          class="chartCSS4"
          type="bar"
          :data="chartData3"
          :options="chartOptions3"
        />
      </div>
      <div class="grid5">
        <DataTable
          class="gridCSS"
          :value="dataRejet"
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
          <Column field="costSum" header="Somme des costs($)">
            <template #body="{ data }">{{
              parseFloat(data.mtrPerHours).toFixed(2)
            }}</template>
          </Column>
          <Column field="family" header="Famille" />
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rejetContainer {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-content: center;
  /* justify-content: center; */
  flex-direction: column;
}

.rejetContainer label {
  margin-top: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.rejetHeader {
  width: 100%;
  height: 8%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;
  padding: 5px;
}

.rejetHeader label {
  margin: 0 10px;
}

.rejetHeader .bntCSS {
  margin: 0 10px;
}

.rejetBody {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: 50% 50%;
  row-gap: 3px;
}

.grid1 {
  border: 1px solid black;
  border-radius: 5px;
  grid-column: 1/3;
  grid-row: 1/2;
}

.grid2 {
  border: 1px solid black;
  border-radius: 5px;
  grid-column: 3/7;
  grid-row: 1/2;
}

.grid2 .chartCSS2 {
  height: 100%;
  width: 100%;
}

.grid3 {
  border: 1px solid black;
  border-radius: 5px;
  grid-column: 7/11;
  grid-row: 1/2;
}

.grid3 .chartCSS3 {
  max-height: 100%;
  max-width: 100%;
}

.grid4 {
  border: 1px solid black;
  border-radius: 5px;
  grid-column: 1/7;
  grid-row: 2/3;
}

.grid4 .chartCSS4 {
  height: 100%;
  width: 100%;
}

.grid5 {
  border: 1px solid black;
  border-radius: 5px;
  grid-column: 7/11;
  grid-row: 2/3;
}
</style>