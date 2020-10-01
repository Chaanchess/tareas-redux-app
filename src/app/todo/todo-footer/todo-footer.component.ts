import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../../todo/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { state } from '@angular/animations';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [],
})
export class TodoFooterComponent implements OnInit {

  filtroACtual: fromFiltro.filtrosValidos;
  filtrosValidos: string[] = ["Todas", "Activas","Completadas"];
  pendientes: number;

  constructor( private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state =>{
      this.contarPendientes(state.todos);
      this.filtroACtual = state.filtro;
    })
  }


  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos){

    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);

  }

  contarPendientes(todos: Todo[]){
    this.pendientes = todos.filter(tarea =>!tarea.completado).length;
  }

  borrarAllTodo(){
    const accion = new fromTodo.BorrarAllTodoAction;
    this.store.dispatch(accion);
  }
}
