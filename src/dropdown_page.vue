<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div :class="{ 'dark': isDarkMode }" class=" overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
      <div class="relative w-auto mb-16">
        <PageHeader 
          :class="'flex-none'"
          header="GCC Dropdown" 
          body="Create interactive dropdown menus for better navigation in your application using Tailwind CSS."/>
        
        <Section body="The GCC dropdown component can be used to enhance user interactions by providing a clean and organized way to display additional options or actions, allowing users to navigate or select items seamlessly within your application."/>
  
        <Section
        header="Dropdown Color Types" 
          @sectioncreated="addLink"
          body="The GCC dropdown component is supported in 4 different colors: blue, sky, teal, and cyan.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    size="m" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Cyan Dropdown"
                    type="cyan" 
                    size="m" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="right"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    size="m" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    size="m" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="right"
                    />
                </div>

              </div>
            </div>
          </template>
        </Section>
  
        <Section
        header="Dropdown Size" 
          @sectioncreated="addLink"
          body="The GCC dropdown component has four size options: extra small (w), small (s), medium (m), and large (l).">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                <Button color="blue" :class="'w-9/10'" @click="changeSize('w')">Extra Small</Button>
                <Button color="cyan" :class="'w-9/10'" @click="changeSize('s')">Small Size</Button>
                <Button color="sky" :class="'w-9/10'" @click="changeSize('m')">Medium Size</Button>
                <Button color="teal" :class="'w-9/10'" @click="changeSize('l')">Large Size</Button>
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    :size="size" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Cyan Dropdown"
                    type="cyan" 
                    :size="size" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="right"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    :size="size" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    :size="size" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="right"
                    />
                </div>

              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Border" 
          @sectioncreated="addLink"
          body="The GCC dropdown component has bordered option.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                <Button color="sky" :class="'w-9/10'" @click="toggleB()">Toggle Border</Button>
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    size="m" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="left"
                    :bordered="this.bordered"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Cyan Dropdown"
                    type="cyan" 
                    size="m" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="right"
                    :bordered="this.bordered"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    size="m" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="left"
                    :bordered="this.bordered"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    size="m" 
                    :menuItems="defaultItems" 
                    menuWidth="full" 
                    menuAlignment="right"
                    :bordered="this.bordered"
                    />
                </div>

              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Menu Width" 
          @sectioncreated="addLink"
          body="The GCC dropdown component has four menu width options: auto, full, w-48, and w-64">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                <Button color="blue" :class="'w-9/10'" @click="changeWidth('auto')">Auto Width</Button>
                <Button color="cyan" :class="'w-9/10'" @click="changeWidth('full')">Full Width</Button>
                <Button color="sky" :class="'w-9/10'" @click="changeWidth('w-48')">w-48 Width</Button>
                <Button color="teal" :class="'w-9/10'" @click="changeWidth('w-64')">w-64 Width</Button>
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    size="m" 
                    :menuItems="defaultItems" 
                    :menuWidth="width" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Cyan Dropdown"
                    type="cyan" 
                    size="m" 
                    :menuItems="defaultItems" 
                    :menuWidth="width" 
                    menuAlignment="right"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    size="m" 
                    :menuItems="defaultItems" 
                    :menuWidth="width" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    size="m" 
                    :menuItems="defaultItems" 
                    :menuWidth="width" 
                    menuAlignment="right"
                    />
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Alignment" 
          @sectioncreated="addLink"
          body="The GCC dropdown component has three menu alignment options: left, center, and right.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                <Button color="blue" :class="'w-9/10'" @click="changeAlignment('left')">Left Alignment</Button>
                <Button color="cyan" :class="'w-9/10'" @click="changeAlignment('center')">Center Alignment</Button>
                <Button color="sky" :class="'w-9/10'" @click="changeAlignment('right')">Right Alignment</Button>
                <Button color="teal" :class="'w-9/10'" @click="changeAlignment('')">Reset</Button>
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    size="m"
                    :bordered="true" 
                    :menuItems="defaultItems" 
                    menuWidth="w-64" 
                    :menuAlignment="this.menuAlignment === '' ? 'left' : this.menuAlignment"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Cyan Dropdown"
                    type="cyan" 
                    size="m"
                    :bordered="true" 
                    :menuItems="defaultItems" 
                    menuWidth="w-64" 
                    :menuAlignment="this.menuAlignment === '' ? 'right' : this.menuAlignment"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    size="m"
                    :bordered="true" 
                    :menuItems="defaultItems" 
                    menuWidth="w-64" 
                    :menuAlignment="this.menuAlignment === '' ? 'left' : this.menuAlignment"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    size="m" 
                    :bordered="true"
                    :menuItems="defaultItems" 
                    menuWidth="w-64" 
                    :menuAlignment="this.menuAlignment === '' ? 'right' : this.menuAlignment"
                    />
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Disabled Property" 
          @sectioncreated="addLink"
          body="The GCC dropdown component has a disable option for both the dropdown button and each items in the dropdown.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                <Dropdown
                    buttonText="Disable Dropdown/Item"
                    type="cyan" 
                    size="s"
                    :menuItems="disabledDropdown" 
                    menuWidth="full" 
                    menuAlignment="center"
                    :bordered="true"
                    @toggle-change="handleToggleChange"
                    />
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    size="m"
                    :disabled="dropdownDisabled" 
                    :menuItems="disabledItems" 
                    menuWidth="full" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="cyan" 
                    size="m"
                    :disabled="dropdownDisabled" 
                    :menuItems="disabledItems" 
                    menuWidth="full" 
                    menuAlignment="right"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    size="m" 
                    :disabled="dropdownDisabled"
                    :menuItems="disabledItems" 
                    menuWidth="full" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    size="m" 
                    :disabled="dropdownDisabled"
                    :menuItems="disabledItems" 
                    menuWidth="full" 
                    menuAlignment="right"
                    />
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Custom Text" 
          @sectioncreated="addLink"
          body="The GCC dropdown component supports customized text for the dropdown button.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                    <input v-model="dropdownTextInput" placeholder="Enter text..." class="placeholder:italic placeholder:text-gray-600 dark:placeholder:text-gray-400 border rounded-lg border-gray-800 bg-gray-200 dark:bg-gray-600 dark:border dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-lg p-2" type="text" id="dropdownText">
                    <Button color="blue" :class="'w-9/10'" @click="changeText('dummy')">Set Dropdown Text</Button>
                    <Button color="cyan" :class="'w-9/10'" @click="changeText('')">Reset</Button>
                </div><br>
                <div class="flex flex-row space-x-4">
                <Button color="blue" :class="'w-9/10'" @click="changeItemText(0)">Set Item 1</Button>
                <Button color="cyan" :class="'w-9/10'" @click="changeItemText(1)">Set Item 2</Button>
                <Button color="sky" :class="'w-9/10'" @click="changeItemText(2)">Set Item 3</Button>
                <Button color="teal" :class="'w-9/10'" @click="changeItemText(3)">Set Item 4</Button>
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    :buttonText="this.dropdownText === '' ? 'Blue Dropdown' : this.dropdownText"
                    type="default" 
                    size="m"
                    :menuItems="customText" 
                    menuWidth="full" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    :buttonText="this.dropdownText === '' ? 'Cyan Dropdown' : this.dropdownText"
                    type="cyan" 
                    size="m"
                    :menuItems="customText" 
                    menuWidth="full" 
                    menuAlignment="right"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    :buttonText="this.dropdownText === '' ? 'Sky Dropdown' : this.dropdownText"
                    type="sky" 
                    size="m" 
                    :menuItems="customText" 
                    menuWidth="full" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    :buttonText="this.dropdownText === '' ? 'Teal Dropdown' : this.dropdownText"
                    type="teal" 
                    size="m" 
                    :menuItems="customText" 
                    menuWidth="full" 
                    menuAlignment="right"
                    />
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Divider" 
          @sectioncreated="addLink"
          body="The GCC dropdown component has divider option for all or selected items in the dropdown list.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                <Dropdown
                    buttonText="Dropdown Divider"
                    type="sky" 
                    size="s"
                    :menuItems="dividerDropdown" 
                    menuWidth="full" 
                    menuAlignment="center"
                    :bordered="true"
                    @toggle-change="handleToggleChange"
                    />
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    size="m" 
                    :divider="divider"
                    :bordered="true"
                    :menuItems="dividerItems" 
                    menuWidth="w-64" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Cyan Dropdown"
                    type="cyan" 
                    size="m"
                    :divider="divider"
                    :bordered="true" 
                    :menuItems="dividerItems" 
                    menuWidth="w-64" 
                    menuAlignment="right"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    size="m"
                    :divider="divider"
                    :bordered="true" 
                    :menuItems="dividerItems" 
                    menuWidth="w-64" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    size="m"
                    :divider="divider"
                    :bordered="true" 
                    :menuItems="dividerItems" 
                    menuWidth="w-64" 
                    menuAlignment="right"
                    />
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Divider Margin" 
          @sectioncreated="addLink"
          body="The GCC dropdown component has three divider margin options: 0.5, 1, and 2.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                    <Button color="blue" :class="'w-9/10'" @click="changeMargin('0.5')">0.5 Margin</Button>
                    <Button color="cyan" :class="'w-9/10'" @click="changeMargin('1')">1 Margin</Button>
                    <Button color="sky" :class="'w-9/10'" @click="changeMargin('2')">2 Margin</Button>
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    size="m" 
                    :divider="true"
                    :bordered="true"
                    :menuItems="marginItems" 
                    menuWidth="w-64" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Cyan Dropdown"
                    type="cyan" 
                    size="m"
                    :divider="true"
                    :bordered="true" 
                    :menuItems="marginItems" 
                    menuWidth="w-64" 
                    menuAlignment="right"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    size="m"
                    :divider="true"
                    :bordered="true" 
                    :menuItems="marginItems" 
                    menuWidth="w-64" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    size="m"
                    :divider="true"
                    :bordered="true" 
                    :menuItems="marginItems" 
                    menuWidth="w-64" 
                    menuAlignment="right"
                    />
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Item Type" 
          @sectioncreated="addLink"
          body="The GCC dropdown component has three dropdown list type options: item list, checkbox list, and toggle list.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
                <div class="flex flex-row space-x-4">
                    <Button color="blue" :class="'w-9/10'" @click="changeType('default')">Item List</Button>
                    <Button color="cyan" :class="'w-9/10'" @click="changeType('checkbox')">Checkbox List</Button>
                    <Button color="sky" :class="'w-9/10'" @click="changeType('toggle')">Toggle List</Button>
                </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Dropdown in Top Left Corner -->
                <div class="absolute top-10 left-10">
                    <Dropdown
                    buttonText="Blue Dropdown"
                    type="default" 
                    size="m" 
                    :divider="true"
                    :bordered="true"
                    :menuItems="typeItems" 
                    menuWidth="w-64" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Top Right Corner -->
                <div class="absolute top-10 right-10">
                    <Dropdown
                    buttonText="Cyan Dropdown"
                    type="cyan" 
                    size="m"
                    :divider="true"
                    :bordered="true" 
                    :menuItems="typeItems" 
                    menuWidth="w-64" 
                    menuAlignment="right"
                    />
                </div>

                <!-- Dropdown in Bottom Left Corner -->
                <div class="absolute bottom-10 left-10">
                    <Dropdown
                    buttonText="Sky Dropdown"
                    type="sky" 
                    size="m"
                    :divider="true"
                    :bordered="true" 
                    :menuItems="typeItems" 
                    menuWidth="w-64" 
                    menuAlignment="left"
                    />
                </div>

                <!-- Dropdown in Bottom Right Corner -->
                <div class="absolute bottom-10 right-10">
                    <Dropdown
                    buttonText="Teal Dropdown"
                    type="teal" 
                    size="m"
                    :divider="true"
                    :bordered="true" 
                    :menuItems="typeItems" 
                    menuWidth="w-64" 
                    menuAlignment="right"
                    />
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section
        header="Dropdown Playground" 
          @sectioncreated="addLink"
          body="The user can customize their own GCC dropdown component in here.">
          <template #content>
            <div class="flex flex-col mt-4 h-full">
              <div class="flex flex-row justify-center space-x-4">
              <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h4 class="text-md font-semibold text-gray-900 dark:text-gray-200">Colors</h4>
                <Radio 
                :items="[
                          {value: 'default' ,label: 'Blue'},
                          {value: 'cyan' ,label: 'Cyan'},
                          {value: 'sky' ,label: 'Sky'},
                          {value: 'teal' ,label: 'Teal'},
                        ]"
                @input="changeCustomColor"/>
              </div>
              <div>

              </div>
              <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h4 class="text-md font-semibold text-gray-900 dark:text-gray-200">Sizes</h4>
                <Radio 
                :items="[
                          {value: 'w' ,label: 'xSmall'},
                          {value: 's' ,label: 'Small'},
                          {value: 'm' ,label: 'Medium'},
                          {value: 'l' ,label: 'Large'},
                        ]"
                @input="changeCustomSize"/>
              </div>
              <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h4 class="text-md font-semibold text-gray-900 dark:text-gray-200">Divider Margin</h4>
                <Radio 
                :items="[
                          {value: '0.5' ,label: '0.5'},
                          {value: '1' ,label: '1'},
                          {value: '2' ,label: '2'},
                        ]"
                @input="changeCustomMargin"/>
              </div>
              
            </div><br>
            <div class="flex flex-row space-x-4 justify-center">
              <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h4 class="text-md font-semibold text-gray-900 dark:text-gray-200">Menu Width</h4>
                <Radio 
                :items="[
                          {value: 'auto' ,label: 'Auto'},
                          {value: 'full' ,label: 'Full'},
                          {value: 'w-48' ,label: 'w48'},
                          {value: 'w-64' ,label: 'w64'},
                        ]"
                @input="changeCustomWidth"/>
              </div>
              <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h4 class="text-md font-semibold text-gray-900 dark:text-gray-200">Menu Item Type</h4>
                <Radio 
                :items="[
                          {value: 'default' ,label: 'List'},
                          {value: 'checkbox' ,label: 'Checkbox'},
                          {value: 'toggle' ,label: 'Toggle'},
                        ]"
                @input="changeCustomItemType"/>
              </div>
              <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h4 class="text-md font-semibold text-gray-900 dark:text-gray-200">Menu Alignment</h4>
                <Radio 
                :items="[
                          {value: 'left' ,label: 'Left'},
                          {value: 'center' ,label: 'Center'},
                          {value: 'right' ,label: 'Right'},
                        ]"
                @input="changeCustomAlignment"/>
              </div>
            </div><br>
            <div class="flex flex-row justify-center space-x-4">
                <input v-model="customTextInput" placeholder="Enter text..." class="placeholder:italic placeholder:text-gray-600 dark:placeholder:text-gray-400 border rounded-lg border-gray-800 bg-gray-200 dark:bg-gray-600 dark:border dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-lg p-2" type="text" id="dropdownText">
                <Button color="blue" :class="'w-9/10'" @click="changeCustomText('')">Reset</Button>
                <Button color="blue" :class="'w-9/10'" @click="changeCustomText('dummy')">Set Dropdown Text</Button>
            </div><br>
            <div class="flex flex-row justify-center space-x-4">
                <Button color="blue" :class="'w-9/10'" @click="changeCustomItemText(0)">Set Item 1</Button>
                <Button color="blue" :class="'w-9/10'" @click="changeCustomItemText(1)">Set Item 2</Button>
                
                <Button color="blue" :class="'w-9/10'" @click="changeCustomItemText(2)">Set Item 3</Button>
                <Button color="blue" :class="'w-9/10'" @click="changeCustomItemText(3)">Set Item 4</Button>
                <Dropdown
                    buttonText="Click Me!"
                    type="default" 
                    size="s"
                    :menuItems="dropdownCustomizations" 
                    menuWidth="w-64" 
                    menuAlignment="center"
                    :bordered="true"
                    @toggle-change="handleToggleChange"
                    />
            </div>
                
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                <div class="absolute top-50">
                    <Dropdown
                    :buttonText="this.customDropdownText === '' ? 'Custom Dropdown' : this.customDropdownText"
                    :type="customType" 
                    :size="customSize" 
                    :divider="customDivider"
                    :bordered="customBordered"
                    :menuItems="customDropdown" 
                    :menuWidth="customWidth" 
                    :menuAlignment="customAlignment"
                    :disabled="customDisabled"
                    />
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section 
        header="Summary"
        @sectioncreated="addLink"
        >
        <template #content>
        <div class="flex mr-24 absolute pb-44 text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md mb-4">
            The GCC Dropdown component supports customizable dropdown elements based on Tailwind CSS, including various color types like default, sky, cyan, and teal. It offers different sizes, bordered options, adjustable menu widths, and alignments. The component also includes features for disabling the dropdown, custom button text, dividers with custom margins, and item types, providing extensive flexibility and design options.
        </div>
        </template>
        </Section>

        <br>
      </div>
  
      
      <div class="sticky top-8 w-3/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
        <hr class="h-0.5 bg-blue-600 border-none rounded-full">
        <span class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
        <PageLinks v-for="link in links" 
          :key="link.label"
          :label="link.label"/>
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
  import Button from './components/Button.vue';
  import Section from './components/Section.vue';
  import PageHeader from './components/pageHeader.vue';
  import PageLinks from './components/pageLinks.vue'; 
  import Radio from './components/radio.vue'
  import Dropdown from './components/Dropdown.vue'
  export default {
    name: 'App',
    components: {
      Button,
      Section,
      PageHeader,
      PageLinks,
       Radio,
       Dropdown,
    },
    data() {
      return {
        dropdownDisabled: false,
        dropdownText: '',
        dropdownTextInput: '',
        size: 'm',
        font: 'bold',
        width: 'auto',
        menuAlignment: '',
        icon: false,
        bordered: false,
        divider: false,
        links: [],
        isDarkMode: false,
        defaultDark: false,
        defaultItems: [
            { label: 'Item 1', disabled: false, type: 'default' },
            { label: 'Item 2', disabled: false, type: 'default' },
            { label: 'Item 3', disabled: false, type: 'default' },
            { label: 'Item 4', disabled: false, type: 'default' }
        ],
        disabledItems: [
            { label: 'Item 1', disabled: false, type: 'default' },
            { label: 'Item 2', disabled: false, type: 'default' },
            { label: 'Item 3', disabled: false, type: 'default' },
            { label: 'Item 4', disabled: false, type: 'default' }
        ],
        disabledDropdown: [
            { label: 'Item 1', disabled: false, type: 'toggle', toggleHandler: 'toggleItemDisabled(0)' },
            { label: 'Item 2', disabled: false, type: 'toggle', toggleHandler: 'toggleItemDisabled(1)' },
            { label: 'Item 3', disabled: false, type: 'toggle', toggleHandler: 'toggleItemDisabled(2)' },
            { label: 'Item 4', disabled: false, type: 'toggle', toggleHandler: 'toggleItemDisabled(3)', divider: true },
            { label: 'Dropdown', disabled: false, type: 'toggle', toggleHandler: 'toggleDisabled()' }
        ],
        dividerDropdown: [
            { label: 'Item 1', disabled: false, type: 'toggle', toggleHandler: 'toggleItemDivider(0)' },
            { label: 'Item 2', disabled: false, type: 'toggle', toggleHandler: 'toggleItemDivider(1)' },
            { label: 'Item 3', disabled: false, type: 'toggle', toggleHandler: 'toggleItemDivider(2)', divider: true },
            { label: 'All Items', disabled: false, type: 'toggle', toggleHandler: 'toggleDivider()' }
        ],
        dividerItems: [
            { label: 'Item 1', disabled: false, type: 'default' },
            { label: 'Item 2', disabled: false, type: 'default' },
            { label: 'Item 3', disabled: false, type: 'default' },
            { label: 'Item 4', disabled: false, type: 'default' }
        ],
        marginItems: [
            { label: 'Item 1', disabled: false, type: 'default' },
            { label: 'Item 2', disabled: false, type: 'default' },
            { label: 'Item 3', disabled: false, type: 'default' },
            { label: 'Item 4', disabled: false, type: 'default' }
        ],
        typeItems: [
            { label: 'Item 1', disabled: false, type: 'default' },
            { label: 'Item 2', disabled: false, type: 'default' },
            { label: 'Item 3', disabled: false, type: 'default' },
            { label: 'Item 4', disabled: false, type: 'default' }
        ],
        customDropdown: [
            { label: 'Item 1', disabled: false, type: 'default' },
            { label: 'Item 2', disabled: false, type: 'default' },
            { label: 'Item 3', disabled: false, type: 'default' },
            { label: 'Item 4', disabled: false, type: 'default' }
        ],
        customText: [
            { label: 'Item 1', disabled: false, type: 'default' },
            { label: 'Item 2', disabled: false, type: 'default' },
            { label: 'Item 3', disabled: false, type: 'default' },
            { label: 'Item 4', disabled: false, type: 'default' }
        ],
        dropdownCustomizations: [
            { label: 'Toggle Border', disabled: false, type: 'toggle', divider: true, toggleHandler: 'toggleCustomBordered()' },
            { label: 'Disable Dropdown', disabled: false, type: 'toggle', toggleHandler: 'toggleCustomDisabled()' },
            { label: 'Disable Item 1', disabled: false, type: 'toggle', toggleHandler: 'toggleCustomItemDisabled(0)' },
            { label: 'Disable Item 2', disabled: false, type: 'toggle', toggleHandler: 'toggleCustomItemDisabled(1)' },
            { label: 'Disable Item 3', disabled: false, type: 'toggle', toggleHandler: 'toggleCustomItemDisabled(2)' },
            { label: 'Disable Item 4', disabled: false, type: 'toggle', divider: true, toggleHandler: 'toggleCustomItemDisabled(3)' },
            { label: 'Item 1 Divider', disabled: false, type: 'toggle', toggleHandler: 'toggleCustomItemDivider(0)' },
            { label: 'Item 2 Divider', disabled: false, type: 'toggle', toggleHandler: 'toggleCustomItemDivider(1)' },
            { label: 'Item 3 Divider', disabled: false, type: 'toggle', toggleHandler: 'toggleCustomItemDivider(2)' },
            { label: 'All-Item Divider', disabled: false, type: 'toggle', toggleHandler: 'toggleCustomDivider()' },
        ],
        customType: 'default',
        customSize: 's',
        customMargin: '0.5',
        customWidth: 'full',
        customItemType: 'default',
        customAlignment: 'left',
        customDropdownText: '',
        customBordered: false,
        customDisabled: false,
        customDivider: false,
      };
    },
    methods: {
      changeSize(val){
        this.size = val
      },
      changeWidth(val){
        this.width = val
      },
      changeText(val){
        this.dropdownText = this.dropdownTextInput
        if(val === ''){
            this.dropdownText = ''
            for(let i=0; i < this.customText.length; i++){
              let key = i + 1
              this.customText[i].label = 'Item ' + key
            }
        }
      },
      changeItemText(val){
        this.customText[val].label = this.dropdownTextInput
      },
      changeAlignment(val){
        this.menuAlignment = val
      },
      changeMargin(val){
        for (let i = 0; i < this.marginItems.length - 1; i++){
            this.marginItems[i].customMargin = val
        }
      },
      changeType(val){
        for (let i = 0; i < this.typeItems.length; i++){
            this.typeItems[i].type = val
        }
      },
      toggleB(){
        this.bordered = !this.bordered
      },
      toggleDisabled(){
        this.dropdownDisabled = !this.dropdownDisabled
        this.toggleItemChecked(4)
      },
      toggleDivider(){
        this.divider = !this.divider;
        this.dividerDropdown[3].checked = !this.dividerDropdown[3].checked
        for (let i = 0; i < this.dividerDropdown.length - 1; i++) {
            this.dividerDropdown[i].checked = false;
            this.dividerDropdown[i].disabled = !this.dividerDropdown[i].disabled;
            this.dividerItems[i].divider = false;
        }
      },
      addLink(header) {
        this.links.push({ label: header });
      },
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        this.$emit('toggleDarkMode()');
      },
      toggleItemDisabled(index){
        this.disabledItems[index].disabled = !this.disabledItems[index].disabled;
        this.toggleItemChecked(index);
      },
      toggleItemDivider(index){
        this.dividerItems[index].divider = !this.dividerItems[index].divider;
        this.toggleDividerChecked(index);
      },
      toggleItemChecked(index){
        this.disabledDropdown[index].checked = !this.disabledDropdown[index].checked
      },
      toggleDividerChecked(index){
        this.dividerDropdown[index].checked = !this.dividerDropdown[index].checked
      },
      toggleDropdownCustomizations(index){
        this.dropdownCustomizations[index].checked = !this.dropdownCustomizations[index].checked
      },
      changeCustomColor(val){
        this.customType = val
      },
      changeCustomSize(val){
        this.customSize = val
      },
      toggleCustomBordered(){
        this.customBordered = !this.customBordered
      },
      toggleCustomDisabled(){
        this.customDisabled = !this.customDisabled
      },
      toggleCustomItemDisabled(index){
        this.customDropdown[index].disabled = !this.customDropdown[index].disabled;
      },
      toggleCustomDivider(){
        this.customDivider = !this.customDivider;
        this.dropdownCustomizations[9].checked = !this.dropdownCustomizations[9].checked
        for (let i = 6; i < this.dropdownCustomizations.length - 1; i++) {
            this.dropdownCustomizations[i].checked = false;
            this.dropdownCustomizations[i].disabled = !this.dropdownCustomizations[i].disabled;
            this.customDropdown[i-6].divider = false;
        }
      },
      toggleCustomItemDivider(index){
        this.customDropdown[index].divider = !this.customDropdown[index].divider;
        this.toggleCustomDividerChecked(index);
      },
      toggleCustomDividerChecked(index){
        let i = index + 6
        this.dropdownCustomizations[i].checked = !this.dropdownCustomizations[i].checked
      },
      changeCustomMargin(val){
        for (let i = 0; i < this.customDropdown.length - 1; i++){
            this.customDropdown[i].customMargin = val
        }
      },
      changeCustomItemType(val){
        for (let i = 0; i < this.customDropdown.length; i++){
            this.customDropdown[i].type = val
        }
      },
      changeCustomText(val){
        this.customDropdownText = this.customTextInput
        if(val === ''){
            this.customDropdownText = ''
            for (let i = 0; i < this.customDropdown.length; i++){
              let key = i + 1
              this.customDropdown[i].label = 'Item ' + key
          }
        }
      },
      changeCustomItemText(val){
        this.customDropdown[val].label = this.customTextInput
      },
      changeCustomWidth(val){
        this.customWidth = val
      },
      changeCustomAlignment(val){
        this.customAlignment = val
      },
      handleToggleChange(item){
        if(item.toggleHandler === 'toggleItemDisabled(0)'){
            this.toggleItemDisabled(0);
        }
        if(item.toggleHandler === 'toggleItemDisabled(1)'){
            this.toggleItemDisabled(1);
        }
        if(item.toggleHandler === 'toggleItemDisabled(2)'){
            this.toggleItemDisabled(2);
        }
        if(item.toggleHandler === 'toggleItemDisabled(3)'){
            this.toggleItemDisabled(3);
        }
        if(item.toggleHandler === 'toggleDisabled()'){
            this.toggleDisabled();
        }
        if(item.toggleHandler === 'toggleItemDivider(0)'){
            this.toggleItemDivider(0);
        }
        if(item.toggleHandler === 'toggleItemDivider(1)'){
            this.toggleItemDivider(1);
        }
        if(item.toggleHandler === 'toggleItemDivider(2)'){
            this.toggleItemDivider(2);
        }
        if(item.toggleHandler === 'toggleDivider()'){
            this.toggleDivider();
        }
        if(item.toggleHandler === 'toggleCustomBordered()'){
            this.toggleCustomBordered();
            this.toggleDropdownCustomizations(0)
        }
        if(item.toggleHandler === 'toggleCustomDisabled()'){
            this.toggleCustomDisabled();
            this.toggleDropdownCustomizations(1)
        }
        if(item.toggleHandler === 'toggleCustomItemDisabled(0)'){
            this.toggleCustomItemDisabled(0);
            this.toggleDropdownCustomizations(2)
        }
        if(item.toggleHandler === 'toggleCustomItemDisabled(1)'){
            this.toggleCustomItemDisabled(1);
            this.toggleDropdownCustomizations(3)
        }
        if(item.toggleHandler === 'toggleCustomItemDisabled(2)'){
            this.toggleCustomItemDisabled(2);
            this.toggleDropdownCustomizations(4)
        }
        if(item.toggleHandler === 'toggleCustomItemDisabled(3)'){
            this.toggleCustomItemDisabled(3);
            this.toggleDropdownCustomizations(5)
        }
        if(item.toggleHandler === 'toggleCustomDivider()'){
            this.toggleCustomDivider()
        }
        if(item.toggleHandler === 'toggleCustomItemDivider(0)'){
            this.toggleCustomItemDivider(0)
        }
        if(item.toggleHandler === 'toggleCustomItemDivider(1)'){
            this.toggleCustomItemDivider(1)
        }
        if(item.toggleHandler === 'toggleCustomItemDivider(2)'){
            this.toggleCustomItemDivider(2)
        }
      }
    },
  };
  </script>