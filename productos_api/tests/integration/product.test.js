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
    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/products/999999')
    expect(response.status).toBe(404)
    done()
  });

});
