let dict = Object.create(null, {
  toString: {
    value: function() {
      return Object.keys(this).join(',');
    }
  }
});

dict.apple = 'apple';
dict.__proto__ = 'test';

console.log(dict.toString());
