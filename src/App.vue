<template>
  <div id="restaruant-forum">
    <NavbarCom />
    <main role="main" class="mt-5 bg-white">
      <router-view/>
    </main>
  </div>
</template>


<script>
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import NavbarCom from './components/NavbarCom.vue'

    export default {
      name: 'App',
      components: {
        NavbarCom,
      }
    }
</script>

