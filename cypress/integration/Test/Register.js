describe('Check the site', function() {
    beforeEach(function () {
        cy.task('log', `Starting test: ${this.currentTest.title}`);
    });

    describe('Check the site', function() {
        it('test B on B', function() {
            cy.visit('https://www.bedonboat.ch/de/user/register')
                .wait(5000)
                .then(() => {
                    cy.url().then((url) => {
                        cy.task('log', `Current URL: ${url}`);
                    });
                });
            cy.get('.decline-button').should('be.visible').click()
                .wait(2000);

            cy.get('.page-title').should('contain.text', 'Neues Benutzerkonto erstellen');
            // tab1
            cy.get('.tabs--primary > li.active > .active')
                .should('exist')
                .should('contain.text', 'Neues Benutzerkonto erstellen');
            cy.get('.form-item-name > .control-label')
                .should('exist')
                .should('contain.text', 'Benutzername');
            cy.get('.form-item-mail > .control-label')
                .should('exist')
                .should('contain.text', 'E-Mail-Adresse');
            cy.get('.form-item-mail > .help-block').should('contain.text', 'Eine gültige E-Mail-Adresse. Alle E-Mails der Website werden an diese Adresse geschickt. Die Adresse wird nicht veröffentlicht und wird nur verwendet, wenn Sie ein neues Passwort anfordern oder wenn Sie einstellen, bestimmte Informationen oder Benachrichtigungen per E-Mail zu erhalten.')
                .wait(2000);
            cy.get('#edit-autoassignrole-user > .panel-heading > .panel-title')
                .should('exist')
                .should('contain.text', 'Benutzer-Eigenschaft');
            cy.get('[for="edit-user-roles"]')
                .should('exist')
                .should('contain.text', 'als wen melden Sie sich an ?');
            cy.get('#edit-user-roles > :nth-child(1) > .control-label')
                .should('exist')
                .should('contain.text', 'Schiffs-Besitzer');
            cy.get('#edit-user-roles > :nth-child(2) > .control-label')
                .should('exist')
                .should('contain.text', 'Reiseagentur');
            cy.get(':nth-child(3) > .control-label')
                .should('exist')
                .should('contain.text', 'Reisender');
            cy.get('.help-block > :nth-child(1)')
                .should('exist')
                .should('contain.text', 'wählen Sie das Zutreffende aus');
            cy.get('#edit-profile-main > .panel-heading > .panel-title')
                .should('exist')
                .should('contain.text', 'Hauptprofil');
            cy.get('#profile-main-field-firstname-add-more-wrapper > .form-item > .control-label')
                .should('exist')
                .should('contain.text', 'Vorname');
            cy.get('#profile-main-field-lastname-add-more-wrapper > .form-item > .control-label')
                .should('exist')
                .should('contain.text', 'Nachname');
            cy.get('#edit-legal > .panel-heading > .panel-title').scrollIntoView()
                .should('exist')
                .should('contain.text', 'Allgemeine Geschäftsbedingungen');
            cy.get('#edit-legal-body > .form-item > .control-label')
                .should('exist')
                .should('contain.text', 'Ich bin einverstanden mit den Allgemeinen Geschäftsbedingungen');
            cy.get('.control-label > a')
                .should('contain.html', 'Allgemeinen Geschäftsbedingungen');
            cy.get('#edit-submit')
                .should('be.visible')
                .should('contain.text', 'Neues Benutzerkonto erstellen');

            // tab2
            cy.get('.tabs--primary > :nth-child(2) > a').scrollIntoView()
                .should('exist')
                .should('contain.text', 'Anmelden').click()
                .wait(2000);
            cy.get('.form-item-name > .control-label')
                .should('contain.text', 'Benutzername oder E-Mail-Adresse');
            cy.get('.form-item-pass > .control-label')
                .should('contain.text', 'Passwort');
            cy.get('#edit-submit')
                .should('exist')
                .should('contain.text', 'Anmelden');

            // tab3
            cy.get('.tabs--primary > :nth-child(3) > a')
                .should('exist')
                .should('contain.text', 'Neues Passwort anfordern')
                .click();
            cy.get(':nth-child(1) > .form-item > .control-label')
                .should('contain.text', 'Benutzername oder E-Mail-Adresse');
            cy.get('#edit-submit')
                .should('exist')
                .should('contain.text', 'Neues Passwort per E-Mail zuschicken')
                .then(() => {
                    // Log the result of the last step
                    cy.task('log', 'Last step completed successfully');
                });
        });
    });
});





