import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => {
      console.log('routes -> loadChildren');
      return import ('./amodule/amodule.module').then(m => m.AmoduleModule)
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
