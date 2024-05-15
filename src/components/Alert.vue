<template>
    <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span class="font-medium">Info alert!</span> {{ msg }}
    </div>

</template>


<script>
export default {
  name: 'alert_component',
  props: {
    msg: String
  }
}
</script>