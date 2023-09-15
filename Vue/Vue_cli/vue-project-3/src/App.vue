<template>
  <div id="app">
    <Categories :content_categories="content_categories"/>
  </div>
</template>

<script>
import Categories from './components/Categories.vue'

export default {
  name: 'App',
  components: {
    Categories
  },
  data() {
    return {
      content_categories: [
        { id: 1, titel: 'titel 1', categories: 'Bed Room', img: 'https://mydizajn.ru/wp-content/uploads/2016/11/Modern-Bedroom-3-1.jpg' },
        { id: 2, titel: 'titel 2', categories: 'Bathroom ', img: 'https://i.pinimg.com/originals/d4/f6/e5/d4f6e55a05c316be0ce5b79131c6b76b.jpg' },
        { id: 3, titel: 'titel 3', categories: 'Kitchan', img: 'https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/d/kuhnya_bombej.jpg' },
        { id: 4, titel: 'titel 4', categories: 'Living Area', img: 'https://i.pinimg.com/originals/ba/ff/ec/baffec8f993ff887545d926cba03798a.jpg' },
        { id: 5, titel: 'titel 5', categories: 'Bed Room', img: 'https://mydizajn.ru/wp-content/uploads/2016/11/Modern-Bedroom-3-1.jpg' },
        { id: 6, titel: 'titel 6', categories: 'Bathroom ', img: 'https://i.pinimg.com/originals/d4/f6/e5/d4f6e55a05c316be0ce5b79131c6b76b.jpg' },
        { id: 7, titel: 'titel 7', categories: 'Kitchan', img: 'https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/d/kuhnya_bombej.jpg' },
        { id: 8, titel: 'titel 8', categories: 'Living Area', img: 'https://i.pinimg.com/originals/ba/ff/ec/baffec8f993ff887545d926cba03798a.jpg' }
      ]
    }
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
