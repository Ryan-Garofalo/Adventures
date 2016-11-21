var app = angular.module("main", ['ngAnimate','angularMoment']);
app.controller("mainController", function($scope){
  $scope.view = {};
  $scope.sort = "-votes";
  $scope.view.votes = 0;
  $scope.show = false;
  $scope.commentsShow = false;
  $scope.commentForm = false;
  $scope.newComment = {};
  $scope.showForm = function(incoming) {
    $scope.show = !$scope.show
  }
  $scope.addComment = function(incoming) {
    var obj = {};
    var author = $scope.newComment.author;
    var comment = $scope.newComment.comment;
    obj.author = author;
    obj.comment = comment;
    incoming.comments.push(obj);
    console.log(obj);
    console.log(incoming.comments);
  }
  $scope.addPost = function() {
    $scope.newPost.votes=0;
    $scope.newPost.comments=0;
    $scope.newPost.date= moment().subtract(0, 'days').subtract(0, 'hours').calendar();
    $scope.view.posts.push($scope.newPost);
    $scope.show = !$scope.show;
  }
  $scope.showComments = function(incoming) {
    incoming.commentsShow = !incoming.commentsShow
  }
  $scope.showCommentForm = function(incoming) {
    incoming.commentForm= !incoming.commentForm
  }
  $scope.view.posts =[
  {
    votes:0,
    title:'Moab',
    author: 'Ryan Garofalo',
    commentsShow : false,
    commentForm : false,
    description:"Bike trip",
    comments:[
      {author:"Matt",
      comment:"I miss you Garf"},
      {author:"Nick",
      comment:"Can't wait to visit"},
      {author:"Bush",
      comment:"looks Awesome"},
    ],
    commentsShow : false,
    commentForm : false,
    image : "https://scontent-sjc2-1.xx.fbcdn.net/t31.0-8/12185036_10156274128410093_5206905875907718906_o.jpg",
    date: moment().subtract(2, 'days').subtract(5, 'hours').calendar(),
    commentCount: 5,
  },
  {
    votes:5,
    title:'Keystone',
    author: 'Ryan Garofalo',
    commentsShow : false,
    commentForm : false,
    description:"Skiing",
    comments:[
      {author:"Chelsea",
      comment:"I wish I didn't flake looks like a fun trip"},
      {author:"Alexis",
      comment:"Colorado looks awesome"},
      {author:"Eli",
      comment:"You guys never invite me"},
    ],
    image : "https://scontent-sjc2-1.xx.fbcdn.net/t31.0-8/12646660_1551339295177259_2501688924199248160_o.jpg",
    date:moment().subtract(3, 'days').subtract(2, 'hours').calendar(),
    commentCount: 10,

  },
  {
    votes:2,
    title:'National Sand Dunes',
    author: 'Ryan Garofalo',
    commentsShow : false,
    commentForm : false,
    description:"Camping Trip",
    comments:[
      {author:"Rick",
      comment:"Looks Awesome!!!"},
      {author:"Mike",
      comment:"I want to go there!"},
      {author:"Eli",
      comment:"Why didn't you invite me?"},
    ],
    image: 'https://scontent-sjc2-1.xx.fbcdn.net/t31.0-8/14196090_1648560528788468_4498452573718665730_o.jpg',
    date: moment().subtract(5, 'days').subtract(20, 'hours').calendar(),
    commentsCount: 3,
  }
  ]
})
