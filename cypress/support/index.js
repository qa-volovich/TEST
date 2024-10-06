Cypress.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('setup is not a function')) {
        return false
    }

    return true
});
