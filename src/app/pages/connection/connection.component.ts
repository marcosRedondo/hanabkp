// ANGULAR
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';

// PRIMENG
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

// MRM
import { Database } from '@interfaces/database';
import { HanaService } from '@app/services/hana.service';

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [
    // ANGULAR
    CommonModule,
    FormsModule,
    //PRIME NG
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    ButtonModule],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {

  private hanaService = inject(HanaService);

  // Variables
  public database: Database = { host: '', password: '', port: 0, username: '' };

  public export(): void {
    this.hanaService.export(this.database).subscribe((data: any)=>{
      debugger;
    });
  }

}
