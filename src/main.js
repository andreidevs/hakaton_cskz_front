import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/css/main.scss'
import "ant-design-vue/dist/antd.css";
import moment from 'moment'

import axios from '@/config/axios'

// VueAnt
import {
  Empty,
  Popconfirm,
  Descriptions,
  Drawer,
  Button,
  message,
  Layout,
  Menu,
  Timeline,
  Collapse,
  notification,
  Result,
  Icon,
  Tooltip,
  Table,
  Tag,
  Rate,
  Tabs,
  Spin,
  Divider,
  Dropdown,
  Radio,
  Avatar,
  Badge,
  Select,
  DatePicker,
  Popover,
  Input,
  Modal,
  Form,
  FormModel,
  Upload,
  TreeSelect,
  Card,
  Alert,
  Switch,
  Calendar,
  Row,
  Col,
  Pagination,
  TimePicker,
  Skeleton,
  Checkbox,
  ConfigProvider,
  InputNumber,
  Carousel,
  Progress,
  Transfer,
  AutoComplete,
  List,
  Tree,
  Breadcrumb
} from 'ant-design-vue'

Vue.use(Breadcrumb)
Vue.use(Tree)
Vue.use(Row)
Vue.use(Col)
Vue.use(Timeline)
Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Collapse)
Vue.use(Icon)
Vue.use(Table)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(Dropdown)
Vue.use(Avatar)
Vue.use(Badge)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Popover)
Vue.use(Input)
Vue.use(Modal)
Vue.use(Form)
Vue.use(FormModel)
Vue.use(Upload)
Vue.use(TreeSelect)
Vue.use(Alert)
Vue.use(Switch)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(Radio)
Vue.use(Spin)
Vue.use(Tooltip)
Vue.use(Rate)
Vue.use(Pagination)
Vue.use(TimePicker)
Vue.use(Checkbox)
Vue.use(InputNumber)
Vue.use(Drawer)
Vue.use(Descriptions)
Vue.use(Popconfirm)
Vue.use(Empty)
Vue.use(Carousel)
Vue.use(Skeleton)
Vue.use(Calendar)
Vue.use(Transfer)
Vue.use(ConfigProvider)
Vue.use(Progress)
Vue.use(AutoComplete)
Vue.use(List)
Vue.use(Result)
Vue.prototype.$moment = moment
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$error = Modal.error
Vue.prototype.$confirm = Modal.confirm
Vue.config.productionTip = false
Vue.prototype.$http = axios


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
