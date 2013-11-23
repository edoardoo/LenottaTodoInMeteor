Lists = {name: String}
Lists = new Meteor.Collection("lists");



// Publish complete set of lists to all clients.
Meteor.publish('lists', function () {
  return Lists.find();
});



// Todos -- {text: String,
//           done: Boolean,
//           tags: [String, ...],
//           list_id: String,
//           timestamp: Number}
Todos = new Meteor.Collection("todos");

Lists.allow({
    insert: function(userId, lists){
        return true;
    },
    update: function(userId, lists){
        return true;
    },
    remove: function(userId, lists){
        return true;
    }
});

Todos.allow({

    insert: function(userId, todos){
        return true;
    },
    
    update: function(userId, todos){
        return true;
    },
    remove: function(userId, todos){
        return true;
    }
});
// Publish all items for requested list_id.

Meteor.publish('todos', function (list_id) {
  check(list_id, String);
  return Todos.find({list_id: list_id});
});
Accounts.validateNewUser(function (user) {
  throw new Meteor.Error(403, "New users are not allowed.");
});
