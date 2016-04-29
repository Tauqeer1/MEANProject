/**
 * Created by Tauqeer Ahmed on 4/29/2016.
 */
angular.module('app')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginController',
                controllerAs: 'loginCtrl'
            })
            .state('signup', {
                url : '/signup',
                templateUrl : 'views/signup.html',
                controller : 'signupController',
                controllerAs : 'signupCtrl'
            })


        $urlRouterProvider.otherwise('/login');
    }]);