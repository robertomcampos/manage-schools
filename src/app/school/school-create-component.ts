import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SchoolService } from './school-service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-school-create',
    templateUrl: './school-create.component.html',
    styleUrls: ['./school-create.component.css']
})

export class SchoolCreateComponent {
    constructor(
        private schoolService: SchoolService,
        private notificationService: NotificationService,
        private router: Router
    ) {}

    schoolForm = new FormGroup({
        name: new FormControl(''),
        address: new FormControl(''),
    });

    onSubmit() {
        const { name, address } = this.schoolForm.value;
        
        this.schoolService.create({ name, address })
        .subscribe((result) => {
            this.notificationService.showSuccess(`A Escola "${result.name}" foi criada com sucesso.`);
            this.router.navigateByUrl('/schools');
        });
    }
}
