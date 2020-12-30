const request = require('./integrationserver')

describe('GET /uens', function() {

  it('should return list', async (done) => {
    const response = await request.get('/uens')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(9)
    expect(response.body[0].name).toBe('CARROCERIAS BUSES')
    done()
  });

  it('should find detail', async (done) => {
    const response = await request.get('/uens/1')
    expect(response.status).toBe(200)
    expect(response.body.name).toBe('CARROCERIAS BUSES')
    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/uens/999999')
    expect(response.status).toBe(404)
    done()
  });

});
