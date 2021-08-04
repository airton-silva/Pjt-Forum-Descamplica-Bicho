<template>
    <H1>Tests</H1>
</template>

<script>

export default {
  name: 'DetailPost',
  props: {
    msg : String
  },

  created(){
      console.log(this.msg)
  },

  data() {
      return {
        id: '',
      };
  },

}
</script>