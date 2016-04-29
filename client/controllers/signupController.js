/**
 * Created by Tauqeer Ahmed on 4/29/2016.
 */
angular.module('app')
    .controller('signupController', ['signupService',function (signupService) {
        var _self = this;
        _self.signupData = {};
        _self.signup = function () {
            signupService.signup(_self.signupData)
                .then(function(data){
                    console.log('data',data);
                })
        };
    }]);