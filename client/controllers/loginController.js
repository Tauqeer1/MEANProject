/**
 * Created by Tauqeer Ahmed on 4/29/2016.
 */

angular.module('app')
    .controller('loginController', ['authService', '$state', function (authService, $state) {

        var _self = this;
        _self.userData = {};


        _self.login = function () {

            authService.login(_self.userData)
                .then(function(data){
                    console.log('data login ',data);
                });
        };

        _self.signup = function () {
            $state.go('signup');
        };


    }]);