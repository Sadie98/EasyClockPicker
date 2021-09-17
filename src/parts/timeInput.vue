<template lang="pug">
  label.iec-label
    p.iec-input--title {{ title }}

    input.iec-input(
      :value="value"
      :placeholder="placeholder"
      @click="$emit('showClockModal')"
      @input="$emit('input', $event.target.value)"
      @keydown.enter="$emit('enter', $event.target.value)"
    )
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class timeInput extends Vue {
  @Prop() placeholder: string = '';
  @Prop() title: string = '';
  @Prop() value: string = '';
}
</script>

<style scoped>
.iec-label {
  width: 100%;
}
.iec-input {
  width: 260px;
  height: 35px;
  background: #d9dee3;
  color: #3d4044;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  transition: 0.5s;
}

.iec-input:active,
.iec-input:focus {
   outline: none;
   border: 1px solid #604CDF;
   background: #EDE6FE;
 }

.iec-input--title {
   font-size: 12px;
   color: #3D4044;
   margin-bottom: 5px;
 }

</style>
