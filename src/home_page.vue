<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div :class="['bg-gradient-to-br from-cyan-100 via-blue-50 to-teal-100 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-900 dark:to-gray-700', containerClasses]" class="overflow-auto flex flex-col scroll-smooth">
        <div class="flex flex-col justify-center items-center text-center space-y-8 h-screen"> 
            <p class="text-6xl text-slate-900 dark:text-slate-100 font-bold">Create with ease using <br> GCC Component Library</p>
            <p class="text-xl text-slate-600 dark:text-gray-400"> Your ultimate toolkit for building modern, responsive web applications with ease. </p>
            <Button color="sky" @click="scrollToExploreComponents"> 
                Explore components
            </Button>
        </div>
        <div id="explore-components" class="bg-blue-50 dark:bg-gray-900 py-20 px-56 space-y-14 text-slate-900 dark:text-slate-100 font-bold border-t border-gray-200 dark:border-gray-800"> 
            <p class="text-xl text-slate-900 dark:text-slate-100 text-center"> Explore our extensive range of components,<br> from basic elements like buttons and toggles to advanced features like carousel and tables.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="relative bg-gray-100 dark:bg-gray-800 hover:bg-cyan-50 dark:hover:text-gray-800 transition-all duration-300 ease-in-out h-60 p-4 overflow-hidden rounded-lg shadow-lg">
                    <p> Badge </p>
                    <div class="flex items-center justify-center h-full"> 
                        <Button color="sky"> 
                            Messages
                            <BadgeComponent type="dot" color="blue" bordered class="ml-2"> 2 </BadgeComponent> 
                        </Button>
                    </div>
                </div>
                
                <div class="relative bg-gray-100 dark:bg-gray-800 hover:bg-cyan-50 dark:hover:text-gray-800 transition-all duration-300 ease-in-out h-60 p-4 overflow-hidden rounded-lg shadow-lg">
                    <p> Breadcrumb </p>
                    <div class="flex items-center justify-center h-full">
                        <BreadcrumbComponent :items="breadcrumbItems" type="solidbg" bgColor="sky"/>
                    </div>
                </div>
                <div class="relative bg-gray-100 dark:bg-gray-800 hover:bg-cyan-50 dark:hover:text-gray-800 transition-all duration-300 ease-in-out h-60 p-4 overflow-hidden rounded-lg shadow-lg">
                    <p> Button </p>
                    <div class="flex items-center justify-center h-full">
                        <Button color="sky"> Button </Button>
                    </div>
                </div>
                <div class="relative bg-gray-100 dark:bg-gray-800 hover:bg-cyan-50 dark:hover:text-gray-800 transition-all duration-300 ease-in-out h-60 p-4 overflow-hidden rounded-lg shadow-lg">
                    <p> Dropdown </p>
                    <div class="flex items-center justify-center h-full">
                        <Dropdown type="sky" :menuItems="menuItems"> </Dropdown>
                    </div>
                </div>
                <div class="relative bg-gray-100 dark:bg-gray-800 hover:bg-cyan-50 dark:hover:text-gray-800 transition-all duration-300 ease-in-out h-60 p-4 overflow-hidden rounded-lg shadow-lg">
                    <p> Toggle </p>
                    <div class="flex items-center justify-center h-full">
                        <ToggleComponent label="Toggle" type="sky"> 
                        </ToggleComponent>
                    </div>
                </div>
                <div class="relative bg-gray-100 dark:bg-gray-800 hover:bg-cyan-50 dark:hover:text-gray-800 transition-all duration-300 ease-in-out h-60 p-4 overflow-hidden rounded-lg shadow-lg flex items-center justify-center">
                    <p> See more...  </p>
                    <i class="fas fa-arrow-right ml-4"></i>
                </div>
            </div>
        </div>
        <div class="bg-blue-50 dark:bg-gray-900 py-24 px-56 space-y-5 text-slate-900 dark:text-slate-100 border-t border-gray-200 dark:border-gray-800"> 
            <p class="text-4xl text-slate-900 dark:text-slate-100 text-center font-bold"> Contributors </p>
            <p class="text-lg text-slate-900 dark:text-slate-100 text-center"> Join our community of developers and start building better web experiences today with the GCC Component Library. </p>
            <div class="flex flex-col space-y-4 items-center">
                <div class="flex flex-row justify-center space-x-8"> 
                    <UserAvatar 
                        name="France Angelo Alcantara"
                        :image="require('@/assets/prans.png')"
                        size="xxxl"
                        rounded="full"/> 
                    <UserAvatar 
                        name="Ma. Khlarence Arnau"
                        :image="require('@/assets/khla.png')"
                        size="xxxl"
                        rounded="full"/>
                    <UserAvatar 
                        name="Lovely Ann Baylon"
                        :image="require('@/assets/lab.png')"
                        size="xxxl"
                        rounded="full"/>
                    <UserAvatar 
                        name="Edelyn Carable"
                        :image="require('@/assets/ede.png')"
                        size="xxxl"
                        rounded="full"/>
                    <UserAvatar 
                        name="Gian Carlo Catalan"
                        :image="require('@/assets/gian.png')"
                        size="xxxl"
                        rounded="full"/>
                    </div>
                    <div class="flex flex-row justify-center space-x-8"> 
                    <UserAvatar 
                        name="Aaron De Leon"
                        :image="require('@/assets/prans.png')"
                        size="xxxl"
                        rounded="full"/>
                    <UserAvatar 
                        name="Ryan Celestino Intalan"
                        :image="require('@/assets/ry.png')"
                        size="xxxl"
                        rounded="full"/>
                    <UserAvatar 
                        name="Paul Vincent Javier"
                        :image="require('@/assets/pol.png')"
                        size="xxxl"
                        rounded="full"/>
                    <UserAvatar 
                        name="Jhermaine Parrucho"
                        :image="require('@/assets/maine.png')"
                        size="xxxl"
                        rounded="full"/>
                    <UserAvatar 
                        name="Alejandro Prado"
                        :image="require('@/assets/prado.png')"
                        size="xxxl"
                        rounded="full"/>
                </div>
                <a href="https://github.com/AlejandroP1028/Group-GCC_Vue-Component-Library" title="GCC Github Repository">
                <i class="fab fa-github text-3xl text-sky-400 hover:text-gray-400 mt-16 self-center"></i>
            </a>
            </div>
            
            
        </div>
        <div> 
        </div>
    </div>
</template>

<script>
    import Button from './components/Button.vue';
    import BadgeComponent from './components/BadgeComponent.vue';
    import BreadcrumbComponent from './components/BreadcrumbComponent.vue';
    import ToggleComponent from './components/ToggleComponent.vue';
    import UserAvatar from './components/UserAvatar.vue'
    import Dropdown from './components/Dropdown.vue';

    export default {
        name: 'home_page',
        components: {
            Button,
            BadgeComponent,
            BreadcrumbComponent,
            ToggleComponent,
            Dropdown,
            UserAvatar

        },
        data() {
            return {
                isDarkMode: false,
                breadcrumbItems: [
                    { text: 'homepage', href: '#' },
                    { text: 'components', href: '#' }
                ],
                menuItems: [
                    { label: 'Item 1', type: 'default'},
                    { label: 'Item 2', type: 'default'}
                ]
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
            },
            scrollToExploreComponents() {
                const target = document.getElementById('explore-components');
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
</script>
