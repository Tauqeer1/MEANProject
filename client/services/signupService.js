/**
 * Created by Tauqeer Ahmed on 4/29/2016.
 */
angular.module('app')
    .service('signupService', ['$http','$q',function ($http,$q) {
        this.signup = function(signupData){
            var deferred = $q.defer();
            $http.post('/api/signup',signupData)
                .success(function(data){
                    console.log('sign up data',data);
                    deferred.resolve(data);
                })
                .error(function(error){
                    console.log('sign up data',data);
                    deferred.reject(error);
                });
            return deferred.promise;
        };

    }]);