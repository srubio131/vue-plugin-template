<!-- <p align="center">
  <img alt="DOM Injector Logo" width="100" height="100" src="https://i.ibb.co/tCvZccx/Dom-injector-logo.png">
</p> -->

<p align="center">
  <a href="https://www.npmjs.com/package/vue-plugin-template">
    <img src="https://img.shields.io/npm/dt/vue-plugin-template.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vue-plugin-template">
    <img src="https://img.shields.io/npm/dm/vue-plugin-template.svg" alt="Downloads">
  </a>
  <br>
  <a href="https://github.com/srubio131/vue-plugin-template/actions?query=workflow%3ACI">
    <img src="https://github.com/srubio131/vue-plugin-template/workflows/CI/badge.svg?branch=main&event=push" alt="CI badge">
  </a>
  <a href="https://codecov.io/gh/srubio131/vue-plugin-template">
    <img src="https://codecov.io/gh/srubio131/vue-plugin-template/branch/main/graph/badge.svg?token=JQ2KZOILI4"/>
  </a>
  <a href="https://github.com/srubio131/vue-plugin-template/blob/main/LICENSE.md">
    <img src="https://img.shields.io/npm/l/vue-plugin-template.svg" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/vue-plugin-template">
    <img src="https://img.shields.io/npm/v/vue-plugin-template.svg" alt="Version">
  </a>
</p>

<br>
<br>

## Introduction

**Vue Plugin Template** is a library to inject ...

Useful for ...

> **Warning**:

## Demo
<a href="https://vue-plugin-template.stackblitz.io" target="__blank">https://vue-plugin-template.stackblitz.io</a>

You can see the demo code
<a href="https://stackblitz.com/edit/vue-plugin-template?file=src/App.vue" target="_blank">here</a>

## Install

  ``` bash
  npm install vue-plugin-template --save
  ```
  or
  ``` bash
  yarn add vue-plugin-template
  ```

## Add as a plugin to Vue
You can add VuePluginTemplate inside main.js file or as a standalone plugin in your /plugins folder

  ``` js
  import VuePluginTemplate from 'vue-plugin-template'

  Vue.use(VuePluginTemplate)
  // Or you can specify any other name
  Vue.use(VuePluginTemplate, {
    name: 'myName'   // Then you can use like: this.$myName...
  })
  ```

## Usage

  > WARNING!

  ### Inject Script Node

  ```js
  ```

## Props

| Method              | Prop                | Description                                                            | Type                                            | Default        |
| ------------------- | ------------------- | ---------------------------------------------------------------------- | ----------------------------------------------- | -------------- |
| name                | -                   | new tag in string format **_(required)_**                              | `string`                                        | -              |
|                     | prop1               | description of prop1                                                   | `string`                                        | 'head'         |
|                     | prop2               | description of prop2                                                   | `boolean`                                       | true           |

## License
  MIT Licensed | Copyright © 2021-present srubio131