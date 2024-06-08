<template>
    <span :title="name">
        <div class="relative">
            <div v-if="image" :class="[sizeClass, borderClass, roundedClass, borderColorClass, { 'border': bordered }]">
                <img 
                    class="h-full w-full object-cover" 
                    :class="roundedClass" 
                    :src="image" 
                    :alt="`${name} avatar`"/>
            </div>
            <div v-else :class="[sizeClass, roundedClass, backgroundColorClass, borderClass, borderColorClass, { 'border': bordered, 'inline-flex justify-center items-center text-black flex-shrink-0 select-none uppercase': true }]">
                {{ name[0] }}
            </div>
            <div v-if="isOnline" :class="[onlineSizeClass, 'rounded-full bg-green-500 border border-border absolute top-0 right-0']"></div>
        </div>
    </span>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            required: false,
            default: 'md',
            validator(value) {
                return ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(value);
            },
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
            default: '',
        },
        rounded: {
            type: String,
            required: false,
            default: 'md',
            validator(value) {
                return ['sm', 'md', 'lg', 'xl', 'full'].includes(value);
            },
        },
        isOnline: {
            type: Boolean,
            required: false,
            default: false,
        },
        bordered: {
            type: Boolean,
            required: false,
            default: false,
        },
        borderColor: {
            type: String,
            required: false,
            default: 'default',
            validator(value) {
                return ['default', 'primary', 'secondary', 'sky', 'cyan', 'teal'].includes(value);
            },
        },
        borderWeight: {
            type: String,
            required: false,
            default: 'md',
            validator(value) {
                return ['thin', 'md', 'thick', 'extra-thick'].includes(value);
            },
        },
    },
    computed: {
        sizeClass() {
            return {
                sm: 'w-6 h-6 text-xs',
                md: 'w-8 h-8 text-base',
                lg: 'w-10 h-10 text-lg',
                xl: 'w-12 h-12 text-xl',
                xxl: 'w-16 h-16 text-2xl',
                xxxl: 'w-20 h-20 text-3xl',
            }[this.size];
        },
        onlineSizeClass() {
            return {
                sm: 'w-1.5 h-1.5',
                md: 'w-2 h-2',
                lg: 'w-2.5 h-2.5',
                xl: 'w-3 h-3',
                xxl: 'w-4 h-4',
                xxxl: 'w-5 h-5',
            }[this.size];
        },
        roundedClass() {
            return {
                sm: 'rounded-sm',
                md: 'rounded',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                full: 'rounded-full',
            }[this.rounded];
        },
        borderClass() {
            return {
                thin: 'border-1',
                md: 'border-2',
                thick: 'border-3',
                'extra-thick': 'border-4',
            }[this.borderWeight];
        },
        borderColorClass() {
            return {
                default: '',
                primary: 'border-blue-500',
                secondary: 'border-red-500',
                sky: 'border-sky-500',
                cyan: 'border-cyan-500',
                teal: 'border-teal-500',
            }[this.borderColor];
        },
        backgroundColorClass() {
            const backgroundColorClasslist = [
                'bg-green-400',
                'bg-yellow-400',
                'bg-pink-400',
                'bg-blue-400',
                'bg-indigo-400',
                'bg-red-400',
            ];

            const charIndex = this.name.charCodeAt(0);
            const colorIndex = charIndex % backgroundColorClasslist.length;

            return backgroundColorClasslist[colorIndex];
        },
    },
}
</script>

<style scoped>
.border-1 {
    border-width: 1px;
}
.border-2 {
    border-width: 2px;
}
.border-3 {
    border-width: 3px;
}
.border-4 {
    border-width: 4px;
}
.border-blue-500 {
    border-color: #3b82f6;
}
.border-red-500 {
    border-color: #ef4444;
}
.border-sky-500 {
    border-color: #0ea5e9;
}
.border-cyan-500 {
    border-color: #06b6d4;
}
.border-teal-500 {
    border-color: #14b8a6;
}
</style>
