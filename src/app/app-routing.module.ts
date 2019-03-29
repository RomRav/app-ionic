import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'memory-game', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'animals', loadChildren: './pages/animals/animals.module#AnimalsPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'memory', loadChildren: './pages/memory/memory.module#MemoryPageModule' },
  { path: 'memory-game', loadChildren: './memory-game/memory-game.module#MemoryGamePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
