<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
        <div class="relative w-auto mb-16">
            <PageHeader 
                :class="'flex-none'"
                header="GCC Breadcrumb" 
                body="Show navigational information to your users using breadcrumb elements based on Tailwind CSS"
                />

                <Section 
                    body="The GCC badge component is a navigational component that provides users with a trail of links that represent the path they have taken to arrive at their current location within a website or application."
                />

                <Section 
                    header="Default Breadcrumb"
                    @sectioncreated="addLink"
                    body="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                > 
                    <template #content>
                        <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                            <BreadcrumbComponent :items="breadcrumbItems" />
                        </div>
                    </template>
                </Section>

                <Section 
                    header="Breadcrumb with solid background"
                    @sectioncreated="addLink"
                    body="The GCC breadcrumb component is supported in 4 different solid background colors: blue, sky, teal, and cyan."
                > 
                    <template #content>
                        <div class="flex justify-center mt-5"> 
                            <label for="bgColor" class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md"> Select background color: </label>
                            <select id="bgColor" v-model="selectedColor" class="ml-2 rounded bg-white dark:bg-gray-800 dark:text-white">
                            <option value="cyan"> Cyan </option>
                            <option value="blue"> Blue </option>
                            <option value="teal"> Teal </option>
                            <option value="sky"> Sky </option>
                            </select>
                        </div>
                        <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                            <BreadcrumbComponent :items="breadcrumbItems" type="solidbg" divider="/" :bgColor="selectedColor"/>
                        </div>
                    </template>
                </Section>

                <Section 
                    header="Breadcrumb Dividers"
                    @sectioncreated="addLink"
                    body="Separator or divider of the GCC breadcrumb component can be customized."
                > 
                    <template #content> 
                        <div class="flex justify-center mt-5"> 
                            <label for="divider" class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md"> Choose divider: </label>
                            <select id="divider" v-model="selectedDivider" class="ml-2 rounded bg-white dark:bg-gray-800 dark:text-white">
                            <option value="greaterthan"> > </option>
                            <option value="backslash"> \ </option>
                            <option value="forwardslash"> / </option>
                            <option value="dot"> . </option>
                            <option value="arrow"> → </option>
                            <option value="hyphen"> - </option>
                            <option value="line"> | </option>
                            </select>
                        </div>
                        <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                            <BreadcrumbComponent type="solidbg" :items="breadcrumbItems" :divider="selectedDivider"/>
                        </div>
                    </template>
                </Section>

                <Section 
                    header="Summary"
                    @sectioncreated="addLink"
                    body="mama mo summary di pa tapos sandale"
                > 
                </Section>
        </div>

        <div class="sticky top-8 w-4/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
            <hr class="h-0.5 bg-blue-600 border-none rounded-full">
            <span class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
            <PageLinks v-for="link in links" 
                :key="link.label"
                :label="link.label"
            />
            <div class="flex justify-center">
                <Button @click="toggleDarkMode" color="blue">
                <template #icon>
                    <i :class="[isDarkMode ? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl','text-blue-200']"></i>
                </template>
                </Button>
            </div>
            <hr class="h-0.5 bg-blue-600 border-none rounded-full">
        </div>
    </div>
</template>

<script>
import Section from './components/Section.vue';
import PageHeader from './components/pageHeader.vue';
import PageLinks from './components/pageLinks.vue'; 
import Button from './components/Button.vue';
import BreadcrumbComponent from './components/BreadcrumbComponent.vue';

export default{
    name: 'breadcrumb_page',
    components: {
        PageHeader,
        PageLinks, 
        BreadcrumbComponent,
        Section,
        Button
    },
    data(){
        return{
            links: [],
            isDarkMode: false,
            selectedColor: 'sky',
            selectedDivider: 'greaterthan',
            breadcrumbItems: [
                { text: 'src', href: '#' },
                { text: 'components', href: '#' },
                { text: 'BreadcrumbComponent.vue' }
            ]
        }
    },
    methods: {
        addLink(header) {
            this.links.push({ label: header });
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        },
    },
}
</script>

<style scoped>
</style>