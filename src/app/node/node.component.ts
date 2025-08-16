import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  // ================= Inputs =================
  @Input() node: any;        // এক node এর data (id, name, parent, child)
  @Input() level: number = 0; // কত লেভেল nested সেটা দেখানোর জন্য
  @Input() rootData: any;     // পুরো tree data (duplicate id check করার জন্য)

  // ================= State =================
  showPopup: boolean = false;    // Show popup খোলা আছে কিনা
  editPopup: boolean = false;    // Edit popup খোলা আছে কিনা
  editData: any = {};            // Edit popup এ temporary data
  idWarning: string = '';        // Duplicate ID warning

  // ================= Show Node =================
  openShow() { this.showPopup = true; }
  closeShow() { this.showPopup = false; }

  // ================= Edit Node =================
  openEdit() {
    this.editPopup = true;
    this.editData = { ...this.node }; // copy current node
    this.idWarning = '';
  }

  cancelEdit() {
    this.editPopup = false;
    this.idWarning = '';
  }

  saveEdit() {
    // 1. Collect all IDs
    const allIds: number[] = [];
    this.collectIds(this.rootData, allIds);

    // 2. নিজের ID বাদ দিন
    const index = allIds.indexOf(this.node.id);
    if (index !== -1) allIds.splice(index, 1);

    // 3. Check duplicate
    if (allIds.includes(Number(this.editData.id))) {
      this.idWarning = `ID ${this.editData.id} already exists!`;
      return;
    }

    // 4. Save data
    this.node.id = Number(this.editData.id);
    this.node.name = this.editData.name;
    this.node.parent = this.editData.parent === '' ? null : Number(this.editData.parent);
    this.editPopup = false;
  }

  // ================= Helper: Collect all IDs =================
  collectIds(node: any, ids: number[]) {
    if (!node) return;
    ids.push(node.id);
    if (node.child) {
      node.child.forEach((c: any) => this.collectIds(c, ids));
    }
  }
}
