import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    edit(article, params){
      this.sendAction('edit', article, params);
    },
    delete(article){
      if (confirm('Are you sure you want to delete this article?')) {
        this.sendAction('delete', article);
      }
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
