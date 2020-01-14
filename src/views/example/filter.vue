<template>
  <div id="filter">
    <h1>this is a filter page !</h1>
    {{ 1000000000 | toThousandFilter }}
    <br>
    {{ 1900.0201 | toThousandFilter }}
  </div>
</template>
