<template>
    <span :title="name">
    <div class="relative ">
        <div 
    v-if="image"

        :class="{
            [sizeClass]:true,

        }"
    >
    <img 
    class="h-full w-full object-cover" 
    :class= "{[roundedClass]:true}"
    :src="image" 
    :alt="'${name}avatar'"/>
  </div>


  <div v-else
        :class="{
            [sizeClass]:true,
            [roundedClass]:true,
            [backgroundColorClass]:true,
            'inline-flex justify-center items-center text-black flex-shrink-0 select-none uppercase':true
            }"
        >
    {{ name[0] }}
  </div>
  <div
        v-if="isOnline"
            :class="{
            [onlineSizeClass]:true,
            

  }" class="rounded-full bg-green-500 border border-border absolute -top-0 -right-0">

  </div>
    </div>
</span>
</template>


<script>
export default{
    props: {
        size: {
            type: String,
            required: false,
            default: 'md',
            validator(value){
                return['sm', 'md', 'lg', 'xl', 'xxl','xxxl'].includes(value);
            },
        },

        name: {
            type: String,
            required: true
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
            validator(value){
                return['sm','md','lg','xl','full'].includes(value)
            },
        },

        isOnline:{
                type: Boolean,
                require: false,
                default: false,

        },
    },

    computed: {
        sizeClass(){
            return{
                sm: 'w-6 h-6 text-xs',
                md: 'w-8 h-8 text-base',
                lg: 'w-10 h-10 text-lg',
                xl: 'w-12 h-12 text-xl',
                xxl: 'w-16 h-16 text-2xl',
                xxxl: 'w-20 h-20 text-3xl',

            }[this.size];

        },
         onlineSizeClass(){
            return{
                sm: 'w-1.5 h-1.5',
                md: 'w-2 h-2',
                lg: 'w-2.5 h-2.5',
                xl: 'w-3 h-3',
                xxl: 'w-4 h-4',
                xxxl: 'w-5 h-5',

            }[this.size];

        },

        roundedClass(){
            return{
                sm: 'rounded-sm',
                md: 'rounded',
                lg: 'rounded-lg',
                full: 'rounded-full'
            }[this.rounded]
        },
        backgroundColorClass(){
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
