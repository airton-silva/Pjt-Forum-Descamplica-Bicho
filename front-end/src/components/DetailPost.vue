<template>
    <div class="alert alert-info">JHjghjgjg</div>
</template>

<script>

export default {
  name: 'DetailPost',
  //props:['identify'],
  props: {
      identify:{
          type:String,
          default:null
      }
  },

  data() {
      return {
        id: this.identify,

      };
  },

}
</script>