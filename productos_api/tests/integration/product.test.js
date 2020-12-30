const request = require('./integrationserver')

describe('GET /products', function() {

  it('should return paginated list', async (done) => {
    const response = await request.get('/products')
    expect(response.status).toBe(200)
    expect(response.body.data).toHaveLength(10)
    expect(response.body.data[0].name).toBe('A/C SENSOR TEMPERATURA CABLE')
    done()
  });

  it('should return paginated list filtered by size and page', async (done) => {
    const response = await request.get('/products?size=15&page=2')
    expect(response.status).toBe(200)
    expect(response.body.data).toHaveLength(15)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('HDPEMB0001')
    expect(response.body.data[0].name).toBe('RODAMIENTO EMPUJE VW 9-150 RODAMIENTO MEDIO')
    done()
  });

  it('should return paginated list filtered by search', async (done) => {
    const response = await request.get('/products?search=fusible')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('MARSAL0941')
    expect(response.body.data[0].name).toBe('A/C CAJA / SOPORTE / PARA FUSIBLE 125A')
    done()
  });

  it('should return paginated list filtered by brand', async (done) => {
    const response = await request.get('/products?brand=4,2')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('MARSAL1249')
    expect(response.body.data[0].name).toBe('A/C SENSOR TEMPERATURA CABLE')
    done()
  });

  it('should return paginated list filtered by category', async (done) => {
    const response = await request.get('/products?category=5637148345')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('SBUAIR0053')
    expect(response.body.data[0].name).toBe('MANGUERA ESPIRAL 1/2 ROJA')
    done()
  });

  it('should return paginated list filtered by line', async (done) => {
    const response = await request.get('/products?line=5637173830')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('BATFRE0006')
    expect(response.body.data[0].name).toBe('TAMBOR FRENO 6 HOYOS 128 X 325 MM. DEL / TRAS')
    done()
  });

  it('should return paginated list filtered by manufacturer_type', async (done) => {
    const response = await request.get('/products?manufacturer_type=2,3,4,5')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('MARSAL1249')
    expect(response.body.data[0].name).toBe('A/C SENSOR TEMPERATURA CABLE')
    done()
  });

  it('should return paginated list filtered by status', async (done) => {
    const response = await request.get('/products?status=2,3')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('MARSAL0907')
    expect(response.body.data[0].name).toBe('A/C MODULO DE CONTROL ELECTRONICO GLW-161')
    done()
  });

  it('should return paginated list filtered by uen', async (done) => {
    const response = await request.get('/products?uen=7,8')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('HDPACC0030')
    expect(response.body.data[0].name).toBe('SOPLADOR DE AIRE PARA CABINA')
    done()
  });

  it('should return paginated list filtered by uom', async (done) => {
    const response = await request.get('/products?uom=2')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('RHIVIA0001')
    expect(response.body.data[0].name).toBe('CINTA REFLECTANTE R/B BLACKSMITH - ROLLO')
    done()
  });

  it('should return paginated list filtered by sale price', async (done) => {
    const response = await request.get('/products?sale_price=50000,100000')
    expect(response.status).toBe(200)
    expect(response.body.data).not.toEqual([])
    expect(response.body.data[0].code).toBe('MG7FRT0033')
    expect(response.body.data[0].name).toBe('MASCARA SOBRE PARACHOQUES VIAGGIO 900 G7')
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
