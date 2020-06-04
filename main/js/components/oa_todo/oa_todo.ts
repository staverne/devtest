import * as angular from "angular"

class TodoViewController{

  public constructor(){}

  public $onInit(): void{
  }

}

var app = angular.module('homeApp')
app.component('oaTodoView', {
  template: require('./oa_todo.html'),
  controller: TodoViewController,
})
