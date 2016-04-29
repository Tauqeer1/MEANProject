/**
 * Created by Tauqeer Ahmed on 4/29/2016.
 */
angular.module('app')
    .service('authService', ['$http','$q', function ($http,$q) {


        this.login = function(loginData){
            var deferred = $q.defer();
            $http.post('/api/signin',loginData)
                .success(function(data){
                    console.log('login service ',data);
                    deferred.resolve(loginData);
                })
                .error(function(error){
                    console.log('login service ',error);
                    deferred.reject(error);
                })
            return deferred.promise;
        };


    }]);