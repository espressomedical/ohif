
window.config = {
  routerBasename: '/',
  showStudyList: false,
  studyListFunctionsEnabled: true,
  servers: {
    // This is an array, but we'll only use the first entry for now
    dicomWeb: [
      {
        name: 'Espresso Medical',
        wadoUriRoot: 'https://api.espressomedical.com/api/wado/%siteId',
        qidoRoot: 'https://api.espressomedical.com/api/dicomweb/%siteId',
        wadoRoot: 'https://api.espressomedical.com/api/dicomweb/%siteId',
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

      authority: 'https://www.espressomedical.com',
      // Authorization Server URL
      metadata: {
        authorization_endpoint: 'https://www.espressomedical.com/oauth2/authorize',
        token_endpoint: 'https://www.espressomedical.com/oauth2/access_token',
      },

      client_id: '6ba6027a-aef2-493f-b64d-93c77f1d8d95',
      redirect_uri: 'https://espressomedical.github.io/ohif/#/callback', // `OHIFStandaloneViewer.js`
      // "Authorization Code Flow"
      // Resource: https://medium.com/@darutk/diagrams-of-all-the-openid-connect-flows-6968e3990660
      response_type: 'code',
      scope: 'openid', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/logout-redirect.html',
    },
  ],
}
