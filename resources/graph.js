AzureAd.resources.graph = {};
AzureAd.resources.graph.friendlyName = "graph";
AzureAd.resources.graph.resourceUri = "https://graph.microsoft.com/";

AzureAd.resources.graph.getUser = function (accessToken) {
    var url = 'https://graph.microsoft.com/v1.0/me';
    
    return AzureAd.http.callAuthenticated("GET", url, accessToken);
};

if (Meteor.isServer){
    Meteor.startup(function(){
        AzureAd.resources.registerResource(AzureAd.resources.graph.friendlyName, AzureAd.resources.graph.resourceUri);
    });
}
