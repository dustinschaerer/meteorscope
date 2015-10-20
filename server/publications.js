Meteor.publish('posts', function() {
  return Posts.find({}, {fields: {
    url: false
  }});
});