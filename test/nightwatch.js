module.exports = {
  'load up example' : (client) => {
    client
      .url('http://localhost:8080/example/')
      .waitForElementVisible('body', 1000)
  },

  'each subcomponent is rendered': (client) => {
      client
        .assert.elementPresent('.ReactTags')
        .assert.elementPresent('.ReactTags__selected')
        .assert.elementPresent('.ReactTags__tagInput')
  },

  'provides search suggestions': (client) => {
      client
        .setValue('.ReactTags__tagInput input', 'uni')
        .waitForElementVisible('.ReactTags__suggestions', 300)
        .elements('css selector', '.ReactTags__suggestions li', function (result) {
          this.assert.ok(result.state)
          this.assert.equal(result.value.length, 3)
        })
  },

  'appends tags to selected state': ()

  'finish up': (client) => {
    client.end()
  }
}
