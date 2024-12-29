import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    {path: 'child', component: ChildComponent},
    {path: 'parent', component: ParentComponent}
];
