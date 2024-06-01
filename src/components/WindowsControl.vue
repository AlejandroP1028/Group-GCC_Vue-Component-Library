<template>
  <ul class="window-controls">
    <li class="window-control window-control--close"></li>
    <li class="window-control window-control--minimise"></li>
    <li class="window-control window-control--maximise"></li>
  </ul>
</template>

<style scoped>
.window-controls {
  display: flex;
  margin: 0;
  padding: 0 6px;
  list-style: none;
}

.window-control {
  --control-color: #fff;
  --control-size: 11px;
  border-radius: 100%;
  width: var(--control-size);
  height: var(--control-size);
  margin: 0 3px;
  background-color: var(--control-color);
}

.window-control--close {
  --control-color: #de5c41;
}

.window-control--minimise {
  --control-color: #eca745;
}

.window-control--maximise {
  --control-color: #92d04b;
}
</style>
