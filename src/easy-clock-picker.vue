<template>
  <div class="easy-clock-picker">
    <time-input
        :placeholder="placeholder"
        @showClockModal="showClockModal"
        :value="valueLocal"
    />
    <clock-modal
        :isShown="isShownClockModal"
        @close="hideClockModal"
        @save="save"
        :value="valueLocal"
    />
  </div>
</template>

<script lang="ts">

import TimeInput from "@/parts/timeInput";
import ClockModal from "@/parts/clockModal";
import {Component, Vue, Prop, Watch} from "vue-property-decorator";

@Component({components: {ClockModal, TimeInput}})
export default class EasyClockPicker extends Vue {
  @Prop() placeholder: string = '';
  @Prop() value: string = '';

  private isShownClockModal: boolean = false;
  private valueLocal: string = '';

  @Watch('value')
  private onValueChange() {
    this.valueLocal = this.value;
  }

  private showClockModal() {
    this.isShownClockModal = true;
  }

  private hideClockModal() {
    this.isShownClockModal = false;
  }

  save(val: string) {
    this.valueLocal = val;
    this.hideClockModal();
    this.$emit('save', val);
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
  url(./fonts/Roboto-Regular.ttf) format("truetype");
}

* {
  font-family: Roboto;
}

.easy-clock-picker p {
  margin: 0 0 1em;
}
</style>
