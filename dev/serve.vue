<script lang="ts">
import Vue from 'vue';
import EasyClockPicker from '@/easy-clock-picker.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    EasyClockPicker
  }
});
</script>

<template>
  <div id="app">
    <easy-clock-picker />
  </div>
</template>
