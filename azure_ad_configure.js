Template.configureLoginServiceDialogForAzureAd.helpers({
  siteUrl() {
    return Meteor.absoluteUrl();
  },
});

Template.configureLoginServiceDialogForAzureAd.fields = function() {
  return [
    { property: 'clientId', label: 'Client ID' },
    { property: 'secret', label: 'Client Secret' },
    { property: 'tennantId', label: 'Tennant Id' },
  ];
};
