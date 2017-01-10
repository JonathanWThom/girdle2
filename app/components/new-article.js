import Ember from 'ember';

export default Ember.Component.extend({
  newArticleForm: false,
  actions: {
    showForm() {
      this.set('newArticleForm', true);
    },
    saveArticle() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image'),
      };
      this.set('newArticleForm', false);
      this.sendAction('saveArticle', params);
    }
  }
});
