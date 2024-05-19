<template>
    <div id="main_container">
        <p id="title"> Badge </p>
        <p id="description"> A component used to provide information on new updates and notifications. It is used with other components and cannot be used alone. </p>
        <div id="app">
          <h1 id="heading">
              Example of a badge in a heading
              <BadgeComponent> New </BadgeComponent>
          </h1>
        </div>
        <p id="types"> Types of badge in a button </p>
        <div id="badge-container">
          <button class="badge-button"> Dot Badge <BadgeComponent type="dot"> </BadgeComponent> </button>
          <button class="badge-button"> Number Badge <BadgeComponent type="number"> 7 </BadgeComponent> </button>
          <button class="badge-button"> Icon Badge <BadgeComponent type="icon"> <i class="fas fa-envelope"> </i> </BadgeComponent> </button>
        </div>
    </div>
</template>
  
  <script>
  import BadgeComponent from './components/BadgeComponent.vue';
  
  export default {
    name: 'App',
    components: {
      BadgeComponent
    }
  }
  </script>
  
  <style>
  #main_container {
    margin: 100px;
    text-align: left;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: black;
    margin-top: 10px;
  }
  #heading, #badge-container {
    display: flex;
    align-items: center;
    color: black;
    font-size: larger;
    background-color: #E3F2FD;
    padding: 20px;
    margin-bottom: 20px;
  }
  #title {
    font-weight: bold;
    font-size: 50px;
  }
  #description {
    color: black;
    font-size: larger;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  #types {
    color: black;
    font-size: x-large;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .badge-button {
    display: inline-block;
    padding: 0.5em 1em;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #42A5F5;
    color: white;
    cursor: pointer;
    margin-right: 10px; 
  }

  .badge-button:hover {
    background-color: #0056b3; 
  }

  .badge-container {
    margin-top: 20px;
  }
  </style>
  