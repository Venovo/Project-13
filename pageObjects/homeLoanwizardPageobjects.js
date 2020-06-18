var Lesson12Commands = {
    loanTestfun: function (test) {
        this
        .click('@homeButton')
        .pause(1000)
        .click('@loanType')
        .click('@loanTypeoption')
        .click('@nextButton')
        .pause(1000)
        .click('@loanType')
        .pause(1000)
        .click('@loanTypeoption')
        .pause(1000)
        .click('@propertyTypes')
        .click('@propertyTypesoption')
        .pause(2000)
        .click('@nextButton')
        .pause(1000)
        .setValue('@city', test.city)
        .pause(1000)
        .click('@nextButton')
        .click('@primaryHome')
        .click('@yesButton')
        .click('@yesButton')
        .setValue('@price', test.price)
        .setValue('@downPayment', test.down)
        .click('@nextButton')
        .click('@creditScore')
        .click('@bankRupt')
        .setValue('@addressOne', test.addressOne)
        .setValue('@addressThree', test.city)
        .click('@nextButton')
        .setValue('@firstName', test.firstName)
        .setValue('@lastName', test.lastName)
        .setValue('@email', test.email)
        .click('@nextButton')
        .pause(5000)
        .click('@sendButton')
        .pause(1000)
        .verify.containsText('@confirmation', test.confirmation)
        .click('@returnHome')
    return this
    }
}
module.exports = {
    url: 'http://localhost:3000',
    commands: [Lesson12Commands],
    elements: {
        homeButton: 'button[class="home-btn"]',
        loanType: 'select[id="loanTypes"]',
        loanTypeoption: 'option[value="Home Purchase"]',
        propertyTypes: 'select[id="propertyTypes"]',
        propertyTypesoption: 'option[value="Single Family Home"]',
        city: 'input[name="city"]',
        primaryHome: 'button[value="Primary Home"]',
        yesButton: 'button[name="yesButton"]',
        price: 'input[name="price"]',
        downPayment: 'input[name="down"]',
        creditScore: 'button[value="excellent"]',
        bankRupt: 'button[value="Has never been in bankruptcy"]',
        addressOne: 'input[id="addressOne"]',
        addressThree: 'input[id="addressThree"]',
        firstName: 'input[id="first"]',
        lastName: 'input[id="last"]',
        email: 'input[id="email"]',
        sendButton: 'button[name="sendButton"]',
        confirmation: {
            selector: '//p[contains(text(),"Expect to hear from our corporate lending offices shortly at adrian.trilogy@gmail.com")]',
            locateStrategy: 'xpath'
        },
        returnHome: 'button[class="margin-btn"]',
        nextButton: 'button[name="nextButton"]',


    }
}