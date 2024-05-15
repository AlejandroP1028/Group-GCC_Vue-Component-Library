<template>
    <div class="p-4 m-4 text-sm text-zinc-100 rounded-lg bg-blue-600" role="alert">
        <span class="font-medium">Info alert!</span> {{ msg }}
    </div>

</template>


<script>
export default {
  name: 'alert_component',
  props: {
    msg: String,
    variant: String,
  }
}
</script>