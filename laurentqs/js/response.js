    // METTRE EN ROUTE ANGULAR 

    var myApp = angular.module('myApp',[]);
    myApp.controller('responseController', ['$scope', '$http', function($scope, $http) {

    // ENVOI DES MAILS  

    $scope.valider = function() {

        if (questionnaireJson.presence_event == "Non") {
            $http.post('php/mailgun.php', {prenom: questionnaireJson.prenom, nom: questionnaireJson.nom}, {})
            .then(function (resp) {
            }
            ,function (resp) {
            }); 
        } else {
            // $http.post('php/email.php', {emailemprunteur:questionnaireJson.question57, statut: "valide", iddossier: response.resp.simulation.id_dossier})
            // .then(function (resp) {
            // }
            // ,function (resp) {
            // }); 
        }
    }

  }]);

