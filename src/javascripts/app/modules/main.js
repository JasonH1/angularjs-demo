/* istanbul ignore next */
define(function(require) {
  return {
    navbar: require('./navbar/navbar'),
    sidebar: require('./sidebar/sidebar'),
    footer: require('./footer/footer'),
    home: require('./home/home'),
    profile: require('./profile/profile'),
    login: require('./login/login')
  };
});