const request = require('./integrationserver')

describe('GET /brands', function() {

  it('should return list', async (done) => {
    const response = await request.get('/brands')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(25)
    expect(response.body[0].name).toBe('WEBASTO')
    done()
  });

  it('should find detail', async (done) => {
    const response = await request.get('/brands/1')
    expect(response.status).toBe(200)
    expect(response.body.name).toBe('WEBASTO')
    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/brands/999999')
    expect(response.status).toBe(404)
    done()
  });

});
