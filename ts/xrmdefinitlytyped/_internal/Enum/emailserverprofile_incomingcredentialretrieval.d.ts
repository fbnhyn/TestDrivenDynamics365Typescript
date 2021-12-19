declare const enum emailserverprofile_incomingcredentialretrieval {
  CredentialsSpecifiedbyaUserorQueue = 0,
  CredentialsSpecifiedinEmailServerProfile = 1,
  ServertoServerAuthentication = 2,
  WindowsIntegratedAuthentication = 3,
  WithoutCredentialsAnonymous = 4,
  GmailOAuth = 5,
  ExchangeHybridModernAuthHMA = 6,
  AzureActiveDirectoryOAuth = 7,
}
