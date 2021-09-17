<template>
  <div class="iec-clock-hours" ref="hoursSquare">
    <div
      v-for="hourCoordinates in hoursCoordinates"
      class="iec-clock-hour"
      :style="{ top: hourCoordinates.top, left: hourCoordinates.left }"
      @click="$emit('selected', hourCoordinates.val )"
    >
      {{ hourCoordinates.val }}
    </div>
    <div class="iec-clock-hours_center"/>
  </div>
</template>

<script>
import { hoursCoordinates } from "@/constants/hoursCoordinates";

export default {
  name: "clockFaceHours",
  data() {
    return {
      hoursCoordinates: hoursCoordinates,
    }
  },
}
</script>

<style scoped>
.iec-clock-hours {
  height: 200px;
  width: 200px;
  margin: 25px;
  position: relative;
}
.iec-clock-hour {
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
.iec-clock-hour:hover {
  background-color: #EDE6FE;
  color: white;
}
.iec-clock-hours_center {
  width: 4px;
  height: 4px;
  background-color: #604CDF;
  border-radius: 2px;
  top: calc(50% - 2px);
  left: calc(50% - 2px);
  position: relative;
}
</style>
