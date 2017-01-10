import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  article: DS.belongsTo('article', {async:true}),

});
