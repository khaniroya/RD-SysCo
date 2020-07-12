<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <app-home></app-home>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./Components/Home";
export default {
  components: {
    appHome: Home
  }
};
</script>
