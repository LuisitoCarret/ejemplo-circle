const assert = require('assert');

describe('Prueba Hola Mundo', function() {
  it('El script se ejecuta sin errores', function() {
    require('./app');
    assert.ok(true);
  });
});
