<template>
    <span class="badge bg-secondary">
      <slot></slot>
    </span>
  </template>
  
  <script>
  export default {
    name: 'BadgeComponent'
  }
  </script>
  
  <style scoped>
  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }
  
  .bg-secondary {
    background-color: #6c757d;
    color: white;
    margin-left: 5px;
  }
  .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
}

.number {
  background-color: #007bff;
  color: white;
}

.icon {
  background-color: #28a745;
  color: white;
  padding: 5px;
}

  </style>