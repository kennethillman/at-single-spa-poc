<template>
  <div class="fms-m-card-app" 
      :class="[this.mode === 'init' || this.mode === 'vue' ? '-mode-vue' : '-mode-default']">
      <h2 class="card-header">Vue.js</h2>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" height="800" width="800" viewBox="-39.26295 -56.672 340.2789 340.032"><path fill="#41b883" d="M161.101 0l-30.224 52.35L100.652 0H0l130.877 226.688L261.753 0z"/><path fill="#34495e" d="M161.101 0l-30.224 52.35L100.652 0H52.351l78.526 136.01L209.403 0z"/></svg>
      </figure>
      <div class="fms-c-btn -small card-send" v-on:click="handleChangeMsg('Hej from Vue'),handleChangeMsgFrom('vue')">
        Send meassage
      </div>
      <div class="card-msg-mini">
        <span>MSG</span>{{msg}}
      </div>
      <div class="card-colors">
        <figure class="color-bg"></figure>
        <figure class="color-skin"></figure>
        <figure class="color-text"></figure>
      </div>
      <div class="fms-c-btn -xsmall -ghost card-theme" :class="[{'-disabled': this.isDisabled}]" v-on:click="handleChangeMode('vue')" >
        Apply theme
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    msg: window.fms.msg,
    msgFrom: window.fms.msgFrom,
    mode: window.fms.mode,
    isDisabled: false
  }),
  mounted() {
    window.addEventListener('onChangeMsg', () => {
      this.msg = window.fms.msg;
    });
    window.addEventListener('onChangeMode', () => {
      if(window.fms.mode !== 'vue'){
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
      this.mode = window.fms.mode;
    });
    window.addEventListener('onChangeMsgFrom', () => {
      this.msgFrom = window.fms.msgFrom;
    });
  },
  methods: {
    handleChangeMsg : (newMsg) => {
      window.fms.changeMsg(newMsg);
    },
    handleChangeMsgFrom : (newFrom) => {
      window.fms.changeMsgFrom(newFrom);
    },
    handleChangeMode : (newMode) => {
      window.fms.changeMode(newMode);
    }
  }
}
</script>