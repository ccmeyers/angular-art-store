(function(){

  var app = angular.module('store', []);


  app.controller('StoreController', function(){
    this.products = [
      {
        name: 'Wheat Field with Cypresses - Vincent van Gogh',
        price: 5000000,
        image: 'images/vangogh.jpg',
        description: "Date: 1889, Medium: Oil on canvas",
        bids: [
          {
            bid: 5000000,
            by: "notavi@iswear.com"
          },
          {
            bid: 5000001,
            by: "arel@heistenburg.com"
          }
        ],
        reviews: [
          {
            stars: 5,
            body: "What a visionary!",
            author: "joe@joe.com"
          },
          {
            stars: 1,
            body: "Ever heard of a straight line???",
            author: "tim@hater.com"
          }
        ]
      },      
      {
        name: 'Two Young Girls at the Piano - Auguste Renoir',
        price: 3000000,
        image: 'images/renoir.jpg',
        description: "Date: 1892, Medium: Oil on canvas",
        bids: [
          {
            bid: 3000000,
            by: "notavi@iswear.com"
          },
          {
            bid: 3000001,
            by: "arel@heistenburg.com"
          }
        ],
        reviews: [
          {
            stars: 3,
            body: "Beautiful!",
            author: "joe@joe.com"
          },
          {
            stars: 1,
            body: "It's totally out of focus!",
            author: "tim@hater.com"
          }
        ]
      },      
      {
        name: 'George Washington - Gilbert Stuart',
        price: 6000000,
        image: 'images/washington.jpg',
        description: "Date: begun 1795, Medium: Oil on canvas",
        bids: [
          {
            bid: 6000000,
            by: "notavi@iswear.com"
          },
          {
            bid: 6000001,
            by: "arel@heistenburg.com"
          }
        ],
        reviews: [
          {
            stars: 4,
            body: "Do you know he had wooden teeth?",
            author: "joe@joe.com"
          },
          {
            stars: 1,
            body: "Who cares about some old dude?",
            author: "tim@hater.com"
          }
        ]
      },      
      {
        name: 'At the Lapin Agile - Pablo Picasso',
        price: 7000000,
        image: 'images/picasso.jpg',
        description: "Date: 1905, Medium: Oil on canvas",
        bids: [
          {
            bid: 7000000,
            by: "notavi@iswear.com"
          },
          {
            bid: 7000001,
            by: "arel@heistenburg.com"
          }
        ],
        reviews: [
          {
            stars: 5,
            body: "Groundbreaking!",
            author: "joe@joe.com"
          },
          {
            stars: 1,
            body: "That guy can't paint!",
            author: "tim@hater.com"
          }
        ]
      },
      {
        name: 'The Dance Class - Edgar Degas',
        price: 10000000,
        image: 'images/degas.jpg',
        description: "Date: 1873-76, Medium: Oil on canvas",
        bids: [
          {
            bid: 10000000,
            by: "notavi@iswear.com"
          },
          {
            bid: 10000001,
            by: "arel@heistenburg.com"
          }
        ],
        reviews: [
          {
            stars: 4,
            body: "Impressionism at its best!",
            author: "joe@joe.com"
          },
          {
            stars: 1,
            body: "They aren't even dancing.",
            author: "tim@hater.com"
          }
        ]
      },
      {
        name: 'The Piano Lesson - Henri Matisse',
        price: 6500000,
        image: 'images/matisse.jpg',
        description: "Date: 1916, Medium: Oil on canvas",
        bids: [
          {
            bid: 6500000,
            by: "notavi@iswear.com"
          },
          {
            bid: 6500001,
            by: "arel@heistenburg.com"
          }
        ],
        reviews: [
          {
            stars: 4,
            body: "This speaks to my soul.",
            author: "joe@joe.com"
          },
          {
            stars: 1,
            body: "My 8 year old could do this.",
            author: "tim@hater.com"
          }
        ]
      }
    ];
  });

  // app.controller("PanelController", function(){
  //   this.tab = 1;
  //   this.selectTab = function(setTab) {
  //     this.tab = setTab;
  //   };
  //   this.isSelected = function(checkTab) {
  //     return this.tab === checkTab;
  //   };
  // });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review); //pushes review into that product's reviews array
      this.review = {}; //clears form
    };
  });

  app.controller("BidController", function(){
    this.bid = {};

    this.addBid = function(product) {
      product.bids.push(this.bid);
      this.bid = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){
        this.tab = 1;
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    }
  });

})();