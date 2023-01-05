import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { StateKey, store } from "./store";
import 'element-plus/dist/index.css';

import {
    ElAffix,
    ElButton,
    ElCard,
    ElCascader,
    ElCol,
    ElDescriptions,
    ElDescriptionsItem,
    ElDialog,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElForm,
    ElFormItem,
    ElIcon,
    ElInput,
    ElLoading,
    ElMenu,
    ElMenuItem,
    ElMessage,
    ElMessageBox,
    ElOption,
    ElPagination,
    ElPopconfirm,
    ElProgress,
    ElRow,
    ElSelect,
    ElTable,
    ElTableColumn,
    ElTag,
    ElTimeline,
    ElTimelineItem,
    ElTooltip,
    ElTree,
    ElUpload,
} from 'element-plus';


const app = createApp(App)

const components = [
    ElAffix,
    ElButton,
    ElCard,
    ElCascader,
    ElCol,
    ElDescriptions,
    ElDescriptionsItem,
    ElDialog,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElForm,
    ElFormItem,
    ElIcon,
    ElInput,
    ElLoading,
    ElMenu,
    ElMenuItem,
    ElMessage,
    ElMessageBox,
    ElOption,
    ElPagination,
    ElPopconfirm,
    ElProgress,
    ElRow,
    ElSelect,
    ElTable,
    ElTableColumn,
    ElTag,
    ElTimeline,
    ElTimelineItem,
    ElTooltip,
    ElTree,
    ElUpload,
]

const plugins = [
    ElLoading,
    ElMessage,
    ElMessageBox,
]

components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})


app.use(router).use(store, StateKey).mount('#app')