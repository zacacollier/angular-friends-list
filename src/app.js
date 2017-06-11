(function() {
  // eslint-disable-next-line
  const app = angular.module('FriendsList', []);
  let myFriends = [{
    id: 1,
    name: 'Jerry Seinfeld',
    occupation: 'Comedian',
    info: {
      description: 'Kind of an asshole',
      trivia: 'Once dated a supermodel',
      nemesis: 'Newman'
    }
  }];
  app.controller('FriendsController', function () {
    this.friends = myFriends;
  });
  app.controller('PanelController', function() {
    this.info = 'description';
    this.selectInfo = function(selected) {
      // eslint-disable-next-line
      console.log(this.info);
      this.info = selected;
      // return myFriends[0].info[selected];
    };
    this.isSelected = function(selected) {
      return this.info === selected;
    };
  });
  app.controller('SearchController', function () {
    return;
  });
})();
