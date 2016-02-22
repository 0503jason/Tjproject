SuggestionBox.controller('addSuggestion', ['$scope','suggestions', function($scope,suggestions) {
    $scope.addSuggestion = function() {

        //if input empty, don't submit
        if(!$scope.title || $scope.title === "") {
            return;
        }

        //push suggestion posts in suggestions.js
        $scope.posts.push({
            title: $scope.title,
            upvotes: 0,
        });

        //after submit, clear input
        $scope.title = '';
    };
}]);