<script>
import Dropdown from './Dropdown.vue'

export default{
    name: 'nav-gcc',
    components:{
        Dropdown
    }
}
</script>

<template>
    <div class="flex flex-row w-full p-4 bg-blue-100 dark:bg-gray-800 justify-between items-center ">
        <h1 class="ml-12 text-3xl font-bold text-blue-600 dark:text-blue-400">GCC</h1>
        <Dropdown></Dropdown>
    </div>
</template>