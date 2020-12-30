const request = require('./integrationserver')

describe('GET /product_lines', function() {

  it('should return list', async (done) => {
    const response = await request.get('/product_lines')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(36)
    expect(response.body[0].name).toBe('AIRE ACONDICIONADO CLIMATIZACIÓN')
    done()
  });

  it('should find detail', async (done) => {
    const response = await request.get('/product_lines/5637148441')
    expect(response.status).toBe(200)
    expect(response.body.name).toBe('AIRE ACONDICIONADO CLIMATIZACIÓN')
    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/product_lines/999999')
    expect(response.status).toBe(404)
    done()
  });

});
