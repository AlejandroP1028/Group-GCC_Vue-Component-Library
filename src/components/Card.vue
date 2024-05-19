<template>
    <a href="#" class="m-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ header }}</h5>
        <p class="font-normal text-gray-700">{{ body }}</p>
    </a>
</template>




<script>

export default{
    name: 'CardComponent',
    props: {
        header: String,
        body: String,
    }
}
</script>