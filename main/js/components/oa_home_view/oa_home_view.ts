import * as angular from "angular"
declare var LANGUAGE: string

class HomeViewController{

  public constructor(){}

  public $onInit(): void{
  }

}

var app = angular.module('homeApp')
app.component('oaHomeView', {
  template: require('./oa_home_view.html'),
  controller: HomeViewController,
})
