<template>
  <div class="dashboard-editor-container">
    <github-corner></github-corner>

    <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"></line-chart>
    </el-row>

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
    BoxCard
  },
  data() {
    return {
      // lineChartData: lineChartData.balances
      lineChartData: {
        expectedData: [],
        actualData: []
      }
    }
  },
  created() {
    this.handleChartData()
  },
  methods: {
    handleSetLineChartData(type) {
      this.handleChartData(type)
      // this.lineChartData = lineChartData[type]
    },
    handleChartData(type) {
      // TODO: change get data by type
      this.loading = true
      this.$store.dispatch('FetchUserBalanceList', {
        starting_date: '2017-12-13',
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

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
