function init(_value, {name, addInitializer}) {
  addInitializer(function () {
    console.log(name, typeof this);
  });
}
class C {
  @init static accessor staticAcc;
  @init protoMethod() {}
}
console.log('=== Instantiation ===');
const inst = new C();
