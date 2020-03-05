import Counter from "../../modules/Counter/Counter.vue";
export default {
  name: 'TheHeader',
  components: {
    Counter
  },
  methods: {
    count: (counter) => console.log('counter',counter)
  }
}