import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { router } from './router/router'

import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import Toast from 'primevue/toast'
import Chart from 'primevue/chart';
import Menubar from "primevue/menubar";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css"


const app= createApp(App);
app.use(router)
app.use(PrimeVue);
app.use(ToastService);
app.component('Button',Button);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('Calendar',Calendar);
app.component('Dropdown',Dropdown);
app.component('Toast',Toast);
app.component('Chart',Chart);
app.component('Menubar',Menubar);
app.mount('#app')
