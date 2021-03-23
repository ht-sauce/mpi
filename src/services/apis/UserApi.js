const UserApi = (request, SERVIVE) => {
  return {
    login: {
      pictureVerify: (sessionId) => {
        return `/${SERVIVE.userApi}/pictureVerify?sessionId=${sessionId}`
      },
      in: (opt, sessionId) =>
        request({
          ...opt,
          url: `/singleSignOn?sessionId=${sessionId}`,
          method: 'post',
        }),
      out: (opt) =>
        request({
          ...opt,
          url: `/${opt.orgid}/logout`,
          method: 'post',
        }),
      pollingAuth: (opt) => {
        return request({
          ...opt,
          url: `/auth/permission`,
          method: 'get',
        })
      },
    },
  }
}

export default UserApi
