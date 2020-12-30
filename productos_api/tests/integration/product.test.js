const request = require('./integrationserver')

describe('GET /products', function() {

  it('should return list', async (done) => {
    const response = await request.get('/products')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(100)
    expect(response.body[0].name).toBe('A/C SENSOR TEMPERATURA CABLE')
    done()
  });

  it('should find detail', async (done) => {
    const response = await request.get('/products/1')
    expect(response.status).toBe(200)
    expect(response.body.name).toBe('A/C SENSOR TEMPERATURA CABLE')
    expect(response.body).toHaveProperty('brand')
    expect(response.body.brand.name).toBe('WEBASTO')
    expect(response.body).toHaveProperty('category')
    expect(response.body.category.name).toBe('CLIMATIZACION')
    expect(response.body).toHaveProperty('line')
    expect(response.body.line.name).toBe('AIRE ACONDICIONADO CLIMATIZACIÓN')
    expect(response.body).toHaveProperty('manufacturer_type')
    expect(response.body.manufacturer_type.name).toBe('OEM')
    expect(response.body).toHaveProperty('status')
    expect(response.body.status.name).toBe('Comercial')
    expect(response.body).toHaveProperty('uen')
    expect(response.body.uen.name).toBe('CARROCERIAS BUSES')
    expect(response.body).toHaveProperty('uom')
    expect(response.body.uom.code).toBe('UN')

    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/products/999999')
    expect(response.status).toBe(404)
    done()
  });

});
