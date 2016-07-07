Router.configure({
  notFoundTemplate: 'notFound', //template with name notFound
  loadingTemplate: 'loading' //template with name loading
});

Router.onBeforeAction('loading'); //before every action call show loading template

Router.route("/", {
  //name is "home"
  name: "home",
  //on route / the layout template will be the template named "homeLayout"
  layoutTemplate: "homeLayout",
  //on route / template named "home" will be rendered
  template: "home",
  //render template travelSearch to search section of the layout template.
  yieldRegions: {
    travelSearch: {to: "search"}
  }
});
