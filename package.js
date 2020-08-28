Package.describe({
  summary: 'Azure Active Directory OAuth flow',
  version: '1.2.0-beta.1',
  name: 'sornii:azure-active-directory',
  git: 'https://github.com/Sornii/azure-active-directory',
});

Package.onUse(api => {
  api.use('oauth2@1.2.0', ['client', 'server']);
  api.use('oauth@1.2.1', ['client', 'server']);
  api.use('http@1.3.0', ['server']);
  api.use('service-configuration@1.0.11', ['client', 'server']);
  api.use('random@1.0.10', 'client');
  api.use('accounts-base@1.4.2', ['client', 'server']);

  api.export('AzureAd');

  api.addFiles(['lib/azureAd.js']);
  api.addFiles(
    ['lib/resources.js', 'lib/serverHttp.js', 'resources/graph.js'],
    'server'
  );
  api.addFiles('azure_ad_server.js', 'server');
  api.addFiles('azure_ad_client.js', 'client');
});
