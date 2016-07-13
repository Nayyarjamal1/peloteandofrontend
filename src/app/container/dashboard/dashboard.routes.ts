import { RouterConfig }       from '@angular/router';
import {TournamentProfile} from './../../container/tournament-details/tournament-details.component';
// import {tournamentRoutes} from './../../container/tournament-profile/tournament.routes'
// import {AddTournament} from './../../container/tournament-profile/add-tournament/add-tournament.component';

export const dashboardRoutes: RouterConfig = [
    // ...tournamentRoutes,
  { path: 'tournaments', component: TournamentProfile}
  
];

