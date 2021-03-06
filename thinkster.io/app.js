var app = angular.module("flapperNews", []);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news');


app.controller('MainCtrl', ['$scope', function($scope){
    $scope.test =  'Hello World!';
    $scope.posts = [
    {title:'post 1', upvotes : 5},
    {title:'post 2', upvotes : 3},
    {title:'post 3', upvotes : 15},
    {title:'post 4', upvotes : 9},
    {title:'post 5', upvotes : 4}
    ];
    $scope.addPost =  function(){
        if (!$scope.title || $scope.title == '') {return;}

        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        });
        $scope.title =  "";
        $scope.link = "";
        $scope.incrementUpvotes = function(post){
        post.upvotes += 1;
        };
    };

}]);

app.factory('post', [function(){
           var o = {
            posts : []
            };
            return o; }]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.posts

)};