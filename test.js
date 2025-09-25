const assert = require('assert');

describe('Prueba Hola Mundo', function() {
  it('El script se ejecuto sin errores', function() {
    require('./app');
    assert.ok(true);
  });
});
