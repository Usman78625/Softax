import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  
  expandedSections: string[] = [];

  toggleSubMenu(sectionName: string): void {
    if (this.isSubMenuExpanded(sectionName)) {
      this.expandedSections = this.expandedSections.filter(name => name !== sectionName);
    } else {
      this.expandedSections.push(sectionName);
    }
  }

  isSubMenuExpanded(sectionName: string): boolean {
    return this.expandedSections.includes(sectionName);
  }

}
