import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    edit(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('admin');
    },
    delete(article) {
      article.destroyRecord();
      this.transitionTo('admin');
    },
    saveArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    },
    deleteComment(comment) {
      comment.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
