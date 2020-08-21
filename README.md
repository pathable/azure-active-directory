# azure-active-directory

An implementation of the Azure Active Directory OAuth 2.0 flow.

This package is forked from the original djluck/azure-active-directory.

## Setting Service Configuration

```
db.meteor_accounts_loginServiceConfiguration.insert({
    "_id": "Jjwjg6gouWLXhMGKW",
    "service": "azureAd",
    "clientId": "client_id",
    "secret": "secret_key",
    "tenantId": "tenant_id",
    // MUST be "popup" - currently Azure AD does not allow for url parameters in redirect URI's. If a null popup style is assigned, then
    // the url parameter "close" is appended and authentication will fail.
    "loginStyle": "popup",
})
```
