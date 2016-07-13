import { RouterConfig }       from '@angular/router';
import {AddTournament} from './../../container/tournament-profile/add-tournament/add-tournament.component';

export const tournamentRoutes: RouterConfig = [
  { path: 'add-tournament', component: AddTournament }
];