const app = Vue.createApp({
  data() {
    return {
      word: "hello, world",
      showNum: 0,
      quiz1: "",
      quiz2: "",
      answer1: "プール",
      answer2: "教室",
      collectClassName1: "hide",
      wrongClassName1: "hide",
      isPush1: false,
      collectClassName2: "hide",
      wrongClassName2: "hide",
      isPush2: false,
    }
  },
  methods: {
    changeSection(num) {
      this.showNum = num;
    },
    checkAnswer1() {
      if (this.quiz1 == this.answer1) {
        this.collectClassName1 = "show";
        this.wrongClassName1 = "hide";
        this.isPush1 = true;
      } else {
        this.wrongClassName1 = "show";
      }
    },
    checkAnswer2() {
      if (this.quiz2 == this.answer2) {
        this.collectClassName2 = "show";
        this.wrongClassName2 = "hide";
        this.isPush2 = true;
      } else {
        this.wrongClassName2 = "show";
      }
    }
  },
})

app.mount("#app")