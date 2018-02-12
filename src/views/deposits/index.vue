<template>
  <div id="mainContent"  role="main">
    <action-header></action-header>
    <div id="pageContent">
      <h1 class="title_main is-bold">Deposit History</h1>
      <div class="l-twoClumn">
        <div class="l-sec sec_thanksRate l-twoClumn__item l-twoClumn__item-l">
          <div class="l-titleSet_sec">
            <h2 class="title_sec">Bitcoin</h2>

          </div>
          <div class="l-content_sec">
            <p class="coin"><span class="num coin__num">{{totalBTC}}</span><span class="unit coin__unit">BTC</span></p>
          </div>
        </div>
        <div class="l-sec sec_messageRate l-twoClumn__item l-twoClumn__item-r">
          <div class="l-titleSet_sec">
            <h2 class="title_sec">Ethereum</h2>

          </div>
          <div class="l-content_sec">
            <p class="coin"><span class="num coin__num">{{totalETH}}</span><span class="unit coin__unit">ETH</span></p>
          </div>
        </div>
      </div>
      <div class="l-sec sec_list_transactionHistory">
        <ul class="list_transactionHistory">
          <li v-for="item in items" class="list_transactionHistory--item is-close">
            <div class="list_transactionHistory--header">
              <p class="date date--history date--cl-1 date--size-2">{{ item.deposited_at }}</p>
              <p class="coin coin--history coin--debit">
                <span class="symbol coin__symbol coin__symbol-history">+</span>
                <span class="num coin__num coin__num-history">{{ item.amount }}</span>
                <span class="unit coin__unit coin__unit-history">{{ item.currency_type }}</span>
              </p>
            </div>
          </li>
          <!-- <li class="list_transactionHistory--item is-close">
            <div class="list_transactionHistory--header">
              <p class="date date--history date--cl-1 date--size-2">2018/01/18</p>
              <p class="coin coin--history coin--debit"><span class="symbol coin__symbol coin__symbol-history">+</span><span class="num coin__num coin__num-history">2,200</span><span class="unit coin__unit coin__unit-history">BTC</span></p>
            </div>
          </li>

          <li class="list_transactionHistory--item is-close">
            <div class="list_transactionHistory--header">
              <p class="date date--history date--cl-1 date--size-2">2018/01/20</p>
              <p class="coin coin--history coin--debit"><span class="symbol coin__symbol coin__symbol-history">+</span><span class="num coin__num coin__num-history">4,200</span><span class="unit coin__unit coin__unit-history">ETH</span></p>
            </div>
          </li>
          <li class="list_transactionHistory--item is-close">
            <div class="list_transactionHistory--header">
              <p class="date date--history date--cl-1 date--size-2">2018/01/25</p>
              <p class="coin coin--history coin--debit"><span class="symbol coin__symbol coin__symbol-history">+</span><span class="num coin__num coin__num-history">1,800</span><span class="unit coin__unit coin__unit-history">BTC</span></p>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { fetchList } from '@/api/deposit'

import ActionHeader from '../layout/components/ActionHeader'

export default {
  name: 'deposits',
  components: {
    ActionHeader
  },
  data() {
    return {
      totalBTC: 0,
      totalETH: 0,
      items: null,
      total: null,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.items = response.data
        this.total = response.data.length
        for (const item of this.items) {
          if (item.currency_type === 'BTC') {
            this.totalBTC += item.amount
          }
          if (item.currency_type === 'ETH') this.totalETH += item.amount
        }
        this.listLoading = false
      })
    }
  }
}
</script>
