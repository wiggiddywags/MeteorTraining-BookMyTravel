Router.configure({
  notFoundTemplate: 'notFound', //template with name notFound
  loadingTemplate: 'loading' //template with name loading
});

Router.onBeforeAction('loading'); //before every action call show loading template
