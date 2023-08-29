import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['level1', 'level2', 'level3', /* ... Add other level columns ... */ 'action'];

  dataSource = [
    { level1: 'Level 1 Data', level2: 'Level 2 Data', level3: 'Level 3 Data' /* ... Add other level data ... */ },
    { level1: 'Level 1 Data', level2: 'Level 2 Data', level3: 'Level 3 Data' /* ... Add other level data ... */ },
    { level1: 'Level 1 Data', level2: 'Level 2 Data', level3: 'Level 3 Data' /* ... Add other level data ... */ },
    { level1: 'Level 1 Data', level2: 'Level 2 Data', level3: 'Level 3 Data' /* ... Add other level data ... */ },
    { level1: 'Level 1 Data', level2: 'Level 2 Data', level3: 'Level 3 Data' /* ... Add other level data ... */ },
    { level1: 'Level 1 Data', level2: 'Level 2 Data', level3: 'Level 3 Data' /* ... Add other level data ... */ },
    /* ... Add more data rows ... */
  ];
}
