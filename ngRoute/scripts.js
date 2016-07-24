var scotchApp = angular.module('MyApp', ['ngRoute']);

scotchApp.config(function ($routeProvider){
    /*route for homepage*/
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'MainController'
    })
    
    /*route for about us page*/
    .when('/about', {
        templateUrl: 'pages/aboutus.html',
        controller: 'AboutController'
    })
    
    /*route for contact us page*/
    .when('/contact', {
        templateUrl: 'pages/contactus.html',
        controller: 'ContactController'
    })
    .when('/slogan', {
        templateUrl: 'pages/slogan.html',
        controller: 'SloganController'
    })
    
    /*route for any other*/
    .otherwise({
        templateUrl: 'pages/home.html',
        controller: 'MainController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('MainController',['$scope', function ($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
}]);

/*Contact us controller*/
scotchApp.controller('ContactController', ['$scope', function ($scope){
        $scope.contact = 'Call to contact us';
        $scope.tel='+01 123456789';
}]);

/*Aboutus controller*/
scotchApp.controller('AboutController', ['$scope', function ($scope){
        $scope.weAre = 'We are the controllers message';
        $scope.ourMessage='We respect you and we expect you respect us too!';
}]);

/*Home controller*/
scotchApp.controller('SloganController', ['$scope', function ($scope){
        $scope.message = 'Message from Home!';
        $scope.ourMessage='Why don\'t you put a banner that says "Don\'t come home!"?';
}]);

