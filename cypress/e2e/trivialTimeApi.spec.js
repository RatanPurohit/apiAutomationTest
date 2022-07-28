describe('Trivial UnixTime Api test scenarios', () => {


  it('verify UnixTime should convert successfully to human readable date format', () => {
    
    cy.request({
      url: '/UnixTime/fromunixtimestamp?unixtimestamp=1549892288',
      methos: 'GET',
    }).then(response => {
      expect(response.body.Datetime).to.equal('2019-02-11 13:38:08')
      expect(response.status).to.equal(200)
    })
  })

  
  it('verify UnixTime api should give valid error msg with to large unixtimestamp value', () => {
    cy.request({
      url: '/UnixTime/fromunixtimestamp?unixtimestamp=1549892288888888888888',
      failOnStatusCode: false,
      methos: 'GET',
    }).then(response => {
      expect(response.body).to.contain('Value was either too large or too small for an Int32')
      expect(response.status).to.equal(400)
    })
  })

  
  it('verify UnixTime api should give valid error msg with null unixtimestamp value', () => {
    cy.request({
      url: '/UnixTime/fromunixtimestamp?unixtimestamp=',
      failOnStatusCode: false,
      methos: 'GET',
    }).then(response => {
      expect(response.body).to.contain("Value cannot be null. (Parameter 's') (Parameter 's')")
      expect(response.status).to.equal(400)
    })
  })

  it('verify UnixTime api should give valid error msg with incorrect format of unixtimestamp', () => {
    cy.request({
      url: '/UnixTime/fromunixtimestamp?unixtimestamp=!@$#$$$',
      failOnStatusCode: false,
      methos: 'GET',
    }).then(response => {
      expect(response.body).to.contain("Input string was not in a correct format")
      expect(response.status).to.equal(400)
    })
  })

})

