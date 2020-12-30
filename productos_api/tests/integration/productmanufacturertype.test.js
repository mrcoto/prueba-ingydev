const request = require('./integrationserver')

describe('GET /manufacturer_types', function() {

  it('should return list', async (done) => {
    const response = await request.get('/manufacturer_types')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(4)
    expect(response.body[0].name).toBe('OEM')
    done()
  });

  it('should find detail', async (done) => {
    const response = await request.get('/manufacturer_types/1')
    expect(response.status).toBe(200)
    expect(response.body.name).toBe('OEM')
    done()
  });

  it('should return not found on detail', async (done) => {
    const response = await request.get('/manufacturer_types/999999')
    expect(response.status).toBe(404)
    done()
  });

});
