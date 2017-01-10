import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  headline: DS.attr(),
  text: DS.attr(),
  image: DS.attr()
});
