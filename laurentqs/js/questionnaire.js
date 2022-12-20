
Survey.StylesManager.applyTheme("defaultV2");

var surveyEvent = {
        "locale": "fr",
        "title": {

        // CHANGER LE TITRE DU QUESTIONNAIRE
         "default": "Gala de charité 2023",

        },

        // CHANGER LA DESCRIPTION SOUS LE TITRE DU QUESTIONNAIRE
        "description": {
         "fr": "Un événement présidé et organisé par Laurent HAUMAN."
        },

        // CHANGER LA POSITION DU LOGO (right or left)
        "logoPosition": "right",

        "pages": [
         {
          "name": "Questionnaire",
          "elements": [
           {
            "type": "text",
            "name": "Prénom",
            "title": {
             "fr": "Prénom"
            },
            "isRequired": true
           },
           {
            "type": "text",
            "name": "Nom",
            "title": {
             "fr": "Nom"
            },
            "isRequired": true
           },
           {
            "type": "radiogroup",
            "name": "presence_event",
            "title": {
             "fr": "Je serai présent à  l'événement "
            },
            "isRequired": true,
            "choices": [
             {
              "value": "Oui",
              "text": {
               "fr": "Oui"
              }
             },
             {
              "value": "Non",
              "text": {
               "fr": "Non"
              }
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "est_accompagne",
            "visibleIf": "{presence_event} = 'Oui'",
            "title": {
             "fr": "Je viendrai accompagné"
            },
            "isRequired": true,
            "choices": [
             {
              "value": "Oui",
              "text": {
               "fr": "Oui"
              }
             },
             {
              "value": "Non",
              "text": {
               "fr": "Non"
              }
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "personne_supp",
            "visibleIf": "{est_accompagne} = 'Oui' and {presence_event} = 'Oui'",
            "title": {
             "fr": "..."
            },
            "isRequired": true,
            "choices": [
             {
              "value": "+1",
              "text": {
               "fr": "d'une personne supplémentaire"
              }
             },
             {
              "value": "+2",
              "text": {
               "fr": "de deux personnes supplémentaires"
              }
             },
             {
              "value": "+3",
              "text": {
               "fr": "de trois personnes supplémentaires"
              }
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "possede_allergie",
            "visibleIf": "{presence_event} = 'Oui'",
            "title": {
             "fr": "J'ai des allergies alimentaires"
            },
            "isRequired": true,
            "choices": [
             {
              "value": "Oui",
              "text": {
               "fr": "Oui"
              }
             },
             {
              "value": "Non",
              "text": {
               "fr": "Non"
              }
             }
            ]
           },
           {
            "type": "text",
            "name": "precise_allergie",
            "visibleIf": "{possede_allergie} = 'Oui' and {presence_event} = 'Oui'",
            "title": {
             "fr": "Je précise mes allergies"
            },
            "isRequired": true
           },
           {
            "type": "radiogroup",
            "name": "rappel_event",
            "visibleIf": "{possede_allergie} notempty and {presence_event} = 'Oui' and {est_accompagne} notempty",
            "title": {
             "fr": "Je veux recevoir un email de rappel pour l'événement"
            },
            "isRequired": true,
            "choices": [
             "Oui",
             "Non"
            ]
           },
           {
            "type": "checkbox",
            "name": "rappel_horaire",
            "visibleIf": "{presence_event} = 'Oui' and {rappel_event} = 'Oui'",
            "title": {
             "fr": "je veux recevoir un email..."
            },
            "isRequired": true,
            "choices": [
             "1 semaine avant",
             "2 jours avant",
             "2 heures avant"
            ],
           },
           {
            "type": "text",
            "name": "adresse_mail",
            "visibleIf": "{presence_event} = 'Oui' and {rappel_event} = 'Oui'",
            "title": {
             "fr": "Adresse mail"
            },
            "isRequired": true
           },
           {
            "type": "html",
            "name": "lieu_de_rdv",
            "visibleIf": "{possede_allergie} notempty and {presence_event} = 'Oui' and {est_accompagne} notempty",
            "html": {
             "fr": "<span style='font-weight: 600; font-size: 16px;'>Lieu de l'événement :</span><br></br>\n<div style=\"width: 100%\"><iframe width=\"100%\" height=\"600\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=N%C5%AB%20Restaurant,%2093%20Av.%20le%20Corbusier,%2059000%20Lille+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"><a href=\"https://www.maps.ie/distance-area-calculator.html\">distance maps</a></iframe></div>"
            }
           }
      ]
     }
    ],
    showCompletedPage: true
   }

   var survey = new Survey.Model(surveyEvent);

   // CHANGER LE BOUTON DE VALIDATION DU QUESTIONNAIRE
   survey.completeText = "Valider";

   // CHANGER LE MOT AFFICHER SUR LA PAGE DE VALIDATION
   survey.completedHtml = "<h2>Merci de ta réponse !</h2>";

survey
    .onComplete
    .add(function (result) {
        $("#valider").trigger("click");
        questionnaireJson = result.data;
        console.log(result.data);
    });



 