<template lang="pug">
  .iec-clock-minutes
    .iec-clock-minutes_numbers(v-for="minuteCoordinates in minutesCoordinates")
      .iec-clock-minute(
        :class="{'iec-clock-minute--tiny': minuteCoordinates.val % 5 !== 0, hovered: isNeedToBeHovered(minuteCoordinates.val)}"
        :style="{ top: minuteCoordinates.top, left: minuteCoordinates.left }"
        @click="minuteClicked(minuteCoordinates.val)"
        @mouseenter="minuteHovered(minuteCoordinates.val)"
      ) {{ minuteCoordinates.val % 5 === 0 ? minuteCoordinates.val : '' }}
      .iec-clock-minutes_arrow(
        :class="{hovered: isNeedToBeHovered(minuteCoordinates.val)}"
        :style="{ transform: `rotate(${180 + minuteCoordinates.val * 6}deg)` }"
        @mouseenter="minuteHovered( minuteCoordinates.val)"
        @click="minuteClicked(minuteCoordinates.val)"
      )
    .iec-clock-minutes_center
</template>

<script lang="ts">
import { minutesCoordinates } from "@/constants/minutesCoordinates";
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class clockFaceMinutes extends Vue {
   private minutesCoordinates = minutesCoordinates;
   private activeMinute = 0;
   private selectedMinute = -1;

    minuteHovered(val: number) {
      if (this.selectedMinute === -1){
        this.activeMinute = val;
        this.$emit('minuteHovered', val);
      }
    }

    minuteClicked(val: number){
      if (this.selectedMinute !== val){
        this.selectedMinute = val;
        this.$emit('minuteHovered', val);
      } else {
        this.selectedMinute = -1;
      }
    }

    isNeedToBeHovered(val: number){
      return (this.activeMinute === val && this.selectedMinute === -1) || (this.selectedMinute === val);
    }
}
</script>

<style scoped>
.iec-clock-minutes {
  height: 200px;
  width: 200px;
  margin: 25px;
  position: relative;
}

.iec-clock-minute {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  color: #3D4044;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
  font-size: 12px;
}

.iec-clock-minute--tiny {
  width: 5px;
  height: 5px;
  background-color: #EDE6FE;
  cursor: initial;
}
.iec-clock-minute--tiny.hovered {
  width: 7px;
  height: 7px;
}

.iec-clock-minute.hovered {
  background-color: #EDE6FE;
  color: white;
}

.iec-clock-minutes_center {
  width: 4px;
  height: 4px;
  background-color: #604CDF;
  border-radius: 2px;
  top: calc(50% - 1px);
  left: calc(50% - 1.5px);
  position: relative;
}

.iec-clock-minutes_arrow {
  width: 2px;
  height: calc(50% - 10px);
  background-color: #EDE6FE;
  border-radius: 2px;
  top: calc(50% + 1px);
  left: calc(50% - 1px);
  position: absolute;
  transform-origin: top;
  opacity: 0;
}
.iec-clock-minutes_arrow.hovered {
  opacity: 1;
}
</style>
