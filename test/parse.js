import test from 'ava'
import sinon from 'sinon'
import q50 from '..'

test('toString is called', t => {
  const callback = sinon.spy()
  q50.parse({toString: callback})
  t.truthy(callback.called)
})

test('id', t => {
  const { id } = q50.parse('[3G*6105209800*0003*TKQ]')
  t.is(id, '6105209800')
})

test('command', t => {
  const { command: commandTKQ } = q50.parse('[3G*6105209800*0003*TKQ]')
  t.is(commandTKQ, 'TKQ')

  const { command: commandTKQ2 } = q50.parse('[3G*6105209800*0004*TKQ2]')
  t.is(commandTKQ2, 'TKQ2')

  const { command: commandUD2 } = q50.parse('[3G*6105209800*00D6*UD2,150118,104439,A,56.822683,N,60.6329067,E,4.42,189.1,0.0,7,100,98,967991,0,00000000,7,255,250,35,57201,2001,164,57201,16502,172,57201,2102,153,57201,16503,151,57201,2002,148,57201,2003,146,57201,17201,141,0,48.1]')
  t.is(commandUD2, 'UD2')
})

test('UD/UD2', t => {
  var { latitude, longitude } = q50.parse('[3G*6105209800*00D6*UD2,150118,104439,A,56.822683,N,60.6329067,E,4.42,189.1,0.0,7,100,98,967991,0,00000000,7,255,250,35,57201,2001,164,57201,16502,172,57201,2102,153,57201,16503,151,57201,2002,148,57201,2003,146,57201,17201,141,0,48.1]')
  t.is(latitude, '56.822683')
  t.is(longitude, '60.6329067')

  var { latitude, longitude } = q50.parse('[3G*6105209800*00D2*UD,150118,104843,V,56.822683,N,60.6329067,E,0.00,0.0,0.0,0,100,99,968502,0,00000000,7,1,250,35,57201,16502,158,57201,2003,155,57201,2001,152,57201,2102,150,57201,16503,144,57201,31502,143,57201,17203,133,0,48.1]')
  t.is(latitude, '56.822683')
  t.is(longitude, '60.6329067')

  var { latitude, longitude } = q50.parse('[3G*6105209800*00D5*UD,150118,121951,A,56.820028,N,60.6329033,E,4.40,199.7,0.0,6,100,93,969290,0,00000008,7,255,250,35,57201,2003,158,57201,16502,152,57201,2001,148,57201,31502,148,57201,16503,147,57201,2102,146,57201,2002,145,0,82.4]')
  t.is(latitude, '56.820028')
  t.is(longitude, '60.6329033')
})
