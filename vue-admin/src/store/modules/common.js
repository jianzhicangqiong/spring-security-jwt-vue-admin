const common = {
  state: {
    website: {
      upload: {
        image: '/upload/image',
        avatar: '/upload/avatar'
      },
      title: '利正源后台管理系统',
      logo: '/static/logo.png',
      info: {
        title: '利正源后台管理系统',
        list: [
          '是一个基于Spring Cloud、oAuth2.0开发基于Vue前后分离的开发平台',
          ' 是一个基于vue + vuex + vue-router 快速后台管理系统，采用token交互验证方式。',
          '最大程度上帮助企业节省时间成本和费用开支。 ',
          'QQ：932560435',
          '当前版本：v1.0'
        ]
      },
      dept: {
        alert: '请勿乱删除部门, 确实需要删除部门的时候, (1).请确定这个部门下面没有子部门, (2).请确定这个部门下面没有用户. 只有满足以上两种情况才可以删除部门成功!'
      },
      role: {
        alert: '请勿乱删除角色, 确实需要删除角色的时候, (1).请确定这个角色下面没有用户, (2).请确定这个角色没有分配权限. 只有满足以上两种情况才可以删除角色成功!'
      }
    }
  },
  actions: {},
  mutations: {

  }
}
export default common
