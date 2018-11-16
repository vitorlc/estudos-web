<template>
  <div id="app">
    <div class="container">
      <div class=row>
        <img src="./assets/logoVue.png">
        <img src="./assets/mysql-logo.png">
        <img src="./assets/bootstrap-stack.png">
      </div>
      <h1 style="text-align: center">Crud Utilizando Vuejs, Mysql, Bootstrap</h1>
    </div>
    <br>
    <pessoa></pessoa>
  </div>
</template>

<script>
import Pessoa from '@/components/Pessoa'

export default {
  name: 'App',
  components: {
    'pessoa': Pessoa
  }
}
</script>

<style lang="scss">
img {
    margin: auto;
    width: 200px;
    height: 50%;
    padding: 25px;
}
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
</style>
