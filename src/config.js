const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK, USE_INTERACTION_CODE } = process.env

let USE_INTERACTION_CODE_FLOW = true;
if (USE_INTERACTION_CODE === 'true') {
  USE_INTERACTION_CODE_FLOW = true;
}
console.log('use_interaction', USE_INTERACTION_CODE);
const BASENAME = process.env.NODE_ENV === 'production' ? '' : '';
const REDIRECT_URI = `${window.location.origin}${BASENAME}/login/callback`;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email', 'offline_access'],
    pkce: true,
    useInteractionCodeFlow: USE_INTERACTION_CODE_FLOW,
    testing: {
      disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  },
  app: {
    basename: BASENAME
  }
}
