var expect = require('chai').expect
  , base   = require('./')

describe('base', function() {
  describe('when partially applied', function() {
    var o = { green: 'apples', yellow: 'bananas' }
      , partial = base(o)

    it('should return another function', function() {
      expect(partial).to.be.a('function')
    })

    describe('and when fully applied', function() {
      it('should resolve value', function() {
        expect(partial('green')).to.equal('apples')
      })
    })

  })
})