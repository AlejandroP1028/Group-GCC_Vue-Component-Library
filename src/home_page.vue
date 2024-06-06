<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div :class="[{ 'dark': isDarkMode }, containerClasses]" class="overflow-auto h-screen w-screen flex flex-row scroll-smooth">
        <div class="flex flex-col justify-center items-center mx-auto px-56 space-y-8 text-center"> 
            <p class="text-6xl text-slate-900 dark:text-slate-100 font-bold">Create with ease using <br> GCC Component Library</p>
            <p class="text-xl text-slate-600 dark:text-gray-400"> Your ultimate toolkit for building modern, responsive web applications with ease. Explore our extensive range of components, from basic elements like buttons and toggles to advanced features like carousel and tables.</p>
            <Button color="sky"> 
                Get started
            </Button>
        </div>
        <div> 
            <Button @click="toggleDarkMode" color="blue" class="absolute bottom-4 right-4">
                <template #icon>
                    <i :class="[isDarkMode ? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl','text-blue-200']"></i>
                </template>
            </Button>
        </div>
    </div>
</template>

<script>
    import Button from './components/Button.vue';

    export default {
        name: 'home_page',
        components: {
            Button,
        },
        data() {
            return {
                isDarkMode: false,
            }
        },
        computed: {
            containerClasses() {
                return {
                    'bg-gradient-to-br from-cyan-100 via-blue-50 to-teal-100': !this.isDarkMode,
                    'bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700': this.isDarkMode,
                };
            },
        },
        methods: {
            toggleDarkMode() {
                this.isDarkMode = !this.isDarkMode;
            }
        }
    }
</script>
