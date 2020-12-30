const request = require('./integrationserver')

describe('GET /categories', function() {

  it('should return list', async (done) => {
    const response = await request.get('/categories')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(24)
    expect(response.body[0].name).toBe('CLIMATIZACION')
    done()
  });

  it('should find detail', async (done) => {
    const response = await request.get('/categories/5637148330')
    expect(response.status).toBe(200)
    expect(response.body.name).toBe('CLIMATIZACION')
    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/categories/999999')
    expect(response.status).toBe(404)
    done()
  });

});
