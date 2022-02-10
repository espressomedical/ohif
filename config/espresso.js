
window.config = {
  routerBasename: '/',
  showStudyList: false,
  studyListFunctionsEnabled: true,
  servers: {
    // This is an array, but we'll only use the first entry for now
    dicomWeb: [
      {
        name: 'Espresso Medical',
        wadoUriRoot: 'http://jenkinsubuntu1604/api/wado/%siteId',
        qidoRoot: 'http://jenkinsubuntu1604/api/dicomweb/%siteId',
        wadoRoot: 'http://jenkinsubuntu1604/api/dicomweb/%siteId',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadouri',
        thumbnailRendering: 'wadouri',
        // REQUIRED TAG:
        // https://github.com/OHIF/ohif-core/blob/59e1e04b92be24aee5d4402445cb3dcedb746995/src/studies/retrieveStudyMetadata.js#L54
        // TODO: Remove tag after https://github.com/OHIF/ohif-core/pull/19 is merged and we bump version
        requestOptions: {
          // undefined to use JWT + Bearer auth
          // auth: 'orthanc:orthanc',
          requestFromBrowser: true,
        },
      },
    ],
  },
  // This is an array, but we'll only use the first entry for now
  oidc: [
    {
      // ~ REQUIRED

      authority: 'http://jenkinsubuntu1604',
      // Authorization Server URL
      metadata: {
        authorization_endpoint: 'http://jenkinsubuntu1604/oauth2/authorize',
        token_endpoint: 'http://jenkinsubuntu1604/oauth2/access_token',
      },

      client_id: '0970b7c7-058d-464c-b3b4-96b2a842b40b',
      redirect_uri: 'http://localhost:3000/callback', // `OHIFStandaloneViewer.js`
      // "Authorization Code Flow"
      // Resource: https://medium.com/@darutk/diagrams-of-all-the-openid-connect-flows-6968e3990660
      response_type: 'code',
      scope: 'openid', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/logout-redirect.html',
    },
  ],
}
