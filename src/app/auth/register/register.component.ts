import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  groupOptions = [
    { id: 1, name: 'PREMIER FOODS' },
    { id: 2, name: 'TRUE LEAF' },
    { id: 3, name: 'abc' },
    { id: 4, name: 'sys' },
    { id: 5, name: 'softax' },
    { id: 6, name: 'pu' },
    // Add more options as needed
  ];

  selectedGroup: any;

  showUserManagementForm = false;
  showContentAboveForm = true;

  // ... rest of your code ...
  
  toggleUserManagementForm() {
    this.showUserManagementForm = !this.showUserManagementForm;
    this.showContentAboveForm = !this.showUserManagementForm;
  }

  toggleContentAboveForm() {
    this.showContentAboveForm = true;
    this.showUserManagementForm = false;
  }

}
