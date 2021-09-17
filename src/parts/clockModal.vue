<template>
  <div class="iec-clock-modal" v-if="isShown">
    <div class="iec-clock-modal--overlay">
      <div class="iec-clock-modal--window">
        <div class="iec-clock-modal--result">
          <p @click="goToHoursSelect">{{ addLeadingZero(hours) }}:</p>
          <p @click="goToMinutesSelect">{{ addLeadingZero(minutes) }}</p>
        </div>
        <clock-face-hours v-if="isHoursSelecting" @selected="selectHours"/>
        <clock-face-minutes v-else @selected="selectMinutes" @minuteHovered="minuteHovered"/>
        <div class="iec-clock-modal--buttons">
          <div class="iec-clock-modal--button" @click="$emit('close')">CANCEL</div>
          <div class="iec-clock-modal--button" @click="save">SAVE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import ClockFaceHours from "@/parts/clockFaceHours.vue";
import ClockFaceMinutes from "@/parts/clockFaceMinutes.vue";

@Component({ components: { ClockFaceMinutes, ClockFaceHours }})
export default class clockModal extends Vue {
  @Prop() isShown: Boolean = false;
  @Prop() value: String = '';

  private hours = '0';
  private minutes = '0';
  private isHoursSelecting = true;

  @Watch('value')
  private onValueChange() {
    [this.hours, this.minutes] = this.value.split(':');
  }

  private selectHours(val: string) {
    this.hours = val;
    this.isHoursSelecting = false;
  }

  private selectMinutes(val: string) {
    this.minutes = val;
  }

  private goToHoursSelect() {
    this.isHoursSelecting = true;
  }

  private goToMinutesSelect() {
    this.isHoursSelecting = false;
  }

  private addLeadingZero(num: string) {
    return ('0' + num.toString()).slice(-2);
  }

  private save() {
    const timeVal = this.addLeadingZero(this.hours) + ':' + this.addLeadingZero(this.minutes);
    this.$emit('save', timeVal);
  }

  private minuteHovered(val: string) {
    this.minutes = val;
  }
}
</script>

<style scoped>
.iec-clock-modal--overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.iec-clock-modal--window {
  width: 250px;
  height: 400px;
  position: relative;
  transform: translateY(-50%);
  box-sizing: border-box;
  margin: 50vh auto 16px auto;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1051;
}

.iec-clock-modal--result {
  height: 100px;
  line-height: 100px;
  background-color: #604CDF;
  color: white;
  font-size: 45px;
  text-align: center;
}

.iec-clock-modal--buttons {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f3f2ff;
  font-size: 15px;
  color: #907eff;
}

.iec-clock-modal--button {
  cursor: pointer;
}

.iec-clock-modal--button:hover {
  color: #5c48d6
}

p {
  display: inline;
  user-select: none;
  cursor: pointer;
  margin: 0;
}
</style>
