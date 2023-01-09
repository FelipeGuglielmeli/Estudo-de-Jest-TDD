test('Devo conhecer as principais assertivas do Jest', () => {
  let number = null
  expect(number).toBeNull()
  number = 10
  expect(number).not.toBeNull()
  expect(number).toBe(10)
  expect(number).toEqual(10)
  expect(number).toBeGreaterThan(9)
  expect(number).toBeLessThan(11)
})

test('Devo saber trabalhar com objetos', () => {
  const objeto = { name: 'John', mail: 'john@mail.com' }
  expect(objeto).toHaveProperty('name')
  expect(objeto).toHaveProperty('name', 'John')
  expect(objeto.name).toBe('John')

  const objeto2 = { name: 'John', mail: 'john@mail.com' }
  expect(objeto).toEqual(objeto2) // Somente compara se os objetos tem as mesmas propriedades com o mesmo valor
  expect(objeto).toBe(objeto)
})
