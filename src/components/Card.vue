<template>
    <div class="bg-slate-200 inline-block rounded-md m-4 p-4">
        <h1> {{ msg }}</h1>
    </div>
</template>




<script>

export default{
    name: 'CardComponent',
    props: {
        msg: String,
    }
}
</script>