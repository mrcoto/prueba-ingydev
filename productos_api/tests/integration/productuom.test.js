const request = require('./integrationserver')

describe('GET /uoms', function() {

  it('should return list', async (done) => {
    const response = await request.get('/uoms')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(4)
    expect(response.body[0].code).toBe('UN')
    done()
  });

  it('should find detail', async (done) => {
    const response = await request.get('/uoms/1')
    expect(response.status).toBe(200)
    expect(response.body.code).toBe('UN')
    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/uoms/999999')
    expect(response.status).toBe(404)
    done()
  });

});
