module.exports = function (ClientMicroservice) {
    this.get = function (clientId) {
        var clientMicroservice = (new ClientMicroservice()).get(clientId);
        var isValid= clientMicroservice.apiKey!=null;
        if(isValid){
            return {
            isValid:true,
            clientId: clientMicroservice.clientId,
            skin: clientMicroservice.skin,
            apiKey: clientMicroservice.apiKey,
            clientName: clientMicroservice.clientName};
        }else{
            return {};
        }
    }

};