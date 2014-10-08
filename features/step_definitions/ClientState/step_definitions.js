var should = require('chai').should();


function stepDefinitions() {

    var clientMicroService, clientModel;

    this.Given(/^I have requested information from the Client Microservice$/, function (callback) {
        clientMicroService = {};
        callback();
    });

    this.Given(/^the Client Microservice ClientId is (.*)$/, function (clientId, callback) {
        clientMicroService.clientId = clientId === "NULL" ? null : clientId;
        callback();
    });

    this.Given(/^the Client Microservice Skin is (.*)$/, function (skin, callback) {
        clientMicroService.skin = skin === "NULL" ? null : skin;
        callback();
    });

    this.Given(/^the Client Microservice APIKey is (.*)$/, function (apiKey, callback) {
        clientMicroService.apiKey = apiKey === "NULL" ? null : apiKey;
        callback();
    });

    this.Given(/^the Client Microservice Client Name is (.*)$/, function (clientName, callback) {
        clientMicroService.clientName = clientName === "NULL" ? null : clientName;
        callback();
    });

    this.When(/^I access the Client State$/, function (callback) {
        var ClientState = require('../../../src/server/resources/ClientState/resource.js');
        var mockedClientMicroservice = function () {
            this.get = function (clientId) {
                if (clientId == clientMicroService.clientId) {
                    return clientMicroService;
                } else {
                    return {};
                }
            };
        };
        var clientState = new ClientState(mockedClientMicroservice);
        clientModel = clientState.get(clientMicroService.clientId);
        callback();
    });

    this.Then(/^the Client Model Validity should be (.*)$/, function (isValidText, callback) {
        if (isValidText === 'TRUE') {
            clientModel.isValid.should.equal(true);
        } else {
            should.not.exist(clientModel.isValid);
        }
        callback();
    });

    this.Given(/^the Client Model ClientId should be (.*)$/, function (modelClientId, callback) {

        console.log('Client Model', clientModel);
        console.log('Client Microservice', clientMicroService);
        if (modelClientId === "NULL") {
            should.not.exist(clientModel.clientId);
        } else {
            clientModel.clientId.should.equal(modelClientId);
        }
        callback();
    });

    this.Given(/^the Client Model Skin should be (.*)$/, function (modelSkin, callback) {
        if (modelSkin === "NULL") {
            should.not.exist(clientModel.skin);
        } else {
            clientModel.skin.should.equal(modelSkin);
        }
        callback();
    });

    this.Given(/^the Client Model APIKey should be (.*)$/, function (modelAPIKey, callback) {
        if (modelAPIKey === "NULL") {
            should.not.exist(clientModel.apiKey);
        } else {
            clientModel.apiKey.should.equal(modelAPIKey);
        }
        callback();
    });

    this.Given(/^the Client Model ClientName should be (.*)$/, function (modelClientName, callback) {
        if (modelClientName === "NULL") {
            should.not.exist(clientModel.clientName);
        } else {
            clientModel.clientName.should.equal(modelClientName);
        }
        callback();
    });

}

module.exports = stepDefinitions;
