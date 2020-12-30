const request = require('./integrationserver')

describe('GET /product_statuses', function() {

  it('should return list', async (done) => {
    const response = await request.get('/product_statuses')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(3)
    expect(response.body[0].name).toBe('Comercial')
    done()
  });

  it('should find detail', async (done) => {
    const response = await request.get('/product_statuses/1')
    expect(response.status).toBe(200)
    expect(response.body.name).toBe('Comercial')
    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/product_statuses/999999')
    expect(response.status).toBe(404)
    done()
  });

});
