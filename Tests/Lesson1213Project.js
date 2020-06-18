var Project12 = {}
var myArray = require('../codeAbstact/arrayLoanWizard')
module.exports = {
    beforeEach: browser => {
        Project12 = browser.page.homeLoanwizardPageobjects()
        Project12
            .navigate()
    },
    "Check searches": browser=>{
        myArray.forEach(test => {
            Project12
                .loanTestfun(Project12, test)
        })
    }
}