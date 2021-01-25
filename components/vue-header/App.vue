<template>
<div>

  <!-- Header -->
  <section class="fms-s-header">
    <div class="fms-body">

      <!-- Logo -->
      <figure class="header-logo">

          <svg xmlns="http://www.w3.org/2000/svg" id="i-activetalents-filled" viewBox="0 0 24 24"><path d="M10.1 2L.5 16.4c-.6.9-.6 2.1 0 3l2.3 3.4c.2.3.6.3.7 0L15.8 4.6 14.1 2c-.9-1.4-3-1.4-4 0zM14.9 17.1c-.1-.2-.4-.3-.6-.3h-6L4.1 23h6.8l4-5.9zM15.8 15.7l3.7-5.6-3.3-5-3.8 5.5zM18.2 21.9l-3-4.3-3.6 5.4h6c.6 0 .9-.6.6-1.1zM19.5 21.2l3.7-5.5-3.3-5.1-3.7 5.6zM20.1 22c.4.6 1.2.6 1.6 0l1.9-2.8c.6-.9.6-2.1 0-3l-3.7 5.5.2.3z"></path></svg>


        <h1 class="logo-text">Frontend Micro Services
          <span>Singel SPA - Design system - Themes</span></h1>
      </figure>

      <!-- Themes / Skins -->
      <nav class="header-nav-skins">

        <div class="-mode-default" v-if="mode !== 'init'">
          <div class="fms-c-btn -small fms-reset" v-on:click="handleReset()">  Reset
          </div>
        </div>
       
        
        <div class="-mode-dark">
          <div class="fms-c-btn -small -round" :class="[{'-active' : this.mode === 'dark'}]" v-on:click="handleChangeMode('dark')"></div>
        </div>
        <div class="-mode-light">
          <div class="fms-c-btn -small -round" :class="[{'-active' : this.mode === 'light'}]" v-on:click="handleChangeMode('light')"></div>
        </div>


        <div class="-mode-svelte">
          <div class="fms-c-btn -small -round" :class="[{'-active' : this.mode === 'svelte'}]" v-on:click="handleChangeMode('svelte')"></div>
        </div>
        <div class="-mode-react">
          <div class="fms-c-btn -small -round" :class="[{'-active' : this.mode === 'react'}]" v-on:click="handleChangeMode('react')"></div>
        </div>
        <div class="-mode-vue">
          <div class="fms-c-btn -small -round" :class="[{'-active' : this.mode === 'vue'}]" v-on:click="handleChangeMode('vue')"></div>
        </div>
      </nav>   

    </div>
  </section>

  <!-- Hero -->
  <section class="fms-s-hero">
    <div class="fms-body">
      <h1 class="hero-msg"><span :class="['-mode-' + this.msgFrom]">MSG</span>{{msg}} </h1>
    </div>
  </section>

</div>

</template>

<script>
export default {
  name: 'app',
  data: () => ({
    msg: window.fms.msg,
    msgFrom: window.fms.msgFrom,
    mode: window.fms.mode,
  }),
  mounted() {
    window.addEventListener('onChangeMsg', () => {
      this.msg = window.fms.msg;
    });
    window.addEventListener('onChangeMode', () => {
      this.mode = window.fms.mode;
      document.querySelector("body").className = "fms -mode-" + window.fms.mode;
    });
    window.addEventListener('onChangeMsgFrom', () => {
      this.msgFrom = window.fms.msgFrom;
    });
  },
  methods: {
    handleChangeMsg : (newMsg) => {
      window.fms.changeMsg(newMsg);
    },
    handleChangeMode : (newMode) => {
      window.fms.changeMode(newMode);
    },
    handleReset : () => {
      window.fms.changeMsg('Welcome to this POC!')
      window.fms.changeMsgFrom('default');
      window.fms.changeMode('init');
    }
  }
}
</script>