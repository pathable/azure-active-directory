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
    "tennantId": "tenant_id",
})
```
