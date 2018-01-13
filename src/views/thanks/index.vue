<template>
  <send-detail :is-edit='false'></send-detail>
</template>

<script>
import SendDetail from './components/SendDetail'

export default {
  name: 'sendForm',
  components: { SendDetail }
}
</script>
