<template>
  <div id="mainContent"  role="main">
    <action-header></action-header>
    <div id="pageContent">
      <h1 class="title_main is-bold">Home</h1>
      <div class="l-sec sec_totalCoin">
        <div class="l-content_sec">
          <p class="coin coin--total"><span class="num coin__num">{{peaceCoinAmoun}}</span><span class="unit coin__unit">coin</span></p>
          <!-- <a href="" class="btn btn--cl-1 btn--size-1"><span class="main">Send</span><span class="add"> Peace Coin</span></a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'

import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

import ActionHeader from '../../layout/components/ActionHeader'

// const lineChartData = {
//   balances: {
//     expectedData: [100, 120, 161, 134, 105, 160, 165],
//     actualData: [120, 82, 91, 154, 162, 140, 145]
//   },
//   messages: {
//     expectedData: [200, 192, 120, 144, 160, 130, 140],
//     actualData: [180, 160, 151, 106, 145, 150, 130]
//   },
//   purchases: {
//     expectedData: [80, 100, 121, 104, 105, 90, 100],
//     actualData: [120, 90, 100, 138, 142, 130, 130]
//   }
// }

export default {
  name: 'dashboard-admin',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard,
    ActionHeader
  },
  beforeCreate() {
    document.body.className = 'peaceWallet logined home drawer drawer--left'
  },
  data() {
    return {
      lineChartData: {
        expectedData: [],
        actualData: []
      },
      peaceCoinAmoun: 100
    }
  },
  created() {
    this.handlerUserData()
    // this.handleChartData()
  },
  methods: {
    handlerUserData(type) {
      this.loading = true
      this.$store.dispatch('GetUserInfo').then(res => {
        this.loading = false
        this.peaceCoinAmoun = res.data.balance
      }).catch((e) => {
        this.loading = false
        console.log(e)
      })
    },
    handleSetLineChartData(type) {
      this.handleChartData(type)
      // this.lineChartData = lineChartData[type]
    },
    handleChartData(type) {
      // TODO: change get data by type
      this.loading = true
      this.$store.dispatch('FetchUserBalanceList', {
        start_date: '2017-12-13',
        end_date: '2018-01-12'
      }).then((res) => {
        this.loading = false
        console.log(res.data)
        const dataValues = []
        res.data.forEach(function(item) {
          dataValues.push(item.balance)
        })
        this.lineChartData = {
          expectedData: dataValues,
          actualData: dataValues
        }
      }).catch((e) => {
        this.loading = false
        console.log(e)
      })
    }
  }
}
</script>
