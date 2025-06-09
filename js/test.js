const cat = {
  name: "meow",
  foo1: function () {
    console.log(this.name);
    const foo2 = function () {
      console.log(this.name);
    };
    foo2();
  },
};

cat.foo1();
