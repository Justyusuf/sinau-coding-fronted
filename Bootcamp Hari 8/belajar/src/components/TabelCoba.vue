<template>

  <div class="jumbotron">
    <img alt="Vue logo" src="../assets/Coding.jpg" style="width:200px; margin:left"/>
    <router-link to="/" style="padding: 15px 20px">Home</router-link>
     <router-link to="/hai">Data</router-link>
  </div>

</template>

<script>
export default {
  name: "xxx"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .jumbotron {
    background-color: rgba(82, 159, 189, 0.7);
    padding: 0.5rem 0rem;
    margin-bottom: 0;
    text-align: left;
  }
</style>
 