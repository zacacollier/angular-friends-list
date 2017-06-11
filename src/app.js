(function() {
  // eslint-disable-next-line
  const app = angular.module('FriendsList', []);
  let myFriends = [
    {
      id: 1,
      name: 'Jerry Seinfeld',
      occupation: 'Comedian',
      info: {
        description: 'Kind of an asshole',
        trivia: 'Once dated a supermodel',
        nemesis: 'Newman'
      }
    },
    {
      id: 2,
      name: 'George Costanza',
      occupation: 'Architect',
      info: {
        description: 'Pathological Liar',
        trivia: 'Had a short-lived career as a hand model.',
        nemesis: 'His mother'
      }
    },
    {
      id: 3,
      name: 'Elaine Benes',
      occupation: 'Associate Editor',
      info: {
        description: 'Tragic Narcissist',
        trivia: 'Got drunk at a wedding in India once.',
        nemesis: 'Her neighbor\'s dog.'
      }
    },
    {
      id: 4,
      name: 'Cosmo Kramer',
      occupation: 'unknown',
      info: {
        description: 'Quintessential 90s Hipster',
        trivia: 'Prefers Jockeys',
        nemesis: 'The librarian.'
      }
    },
  ];
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
