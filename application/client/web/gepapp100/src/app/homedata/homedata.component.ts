import { Component, OnInit } from '@angular/core';
import { HomedataService } from './homedata.service';

@Component({
  selector: 'app-homedata',
  templateUrl: './homedata.component.html',
  styleUrls: ['./homedata.component.scss'],
})

export class HomedataComponent implements OnInit {
    public homedata:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private homedataService: HomedataService,
    ) { }

    ngOnInit() {
        this.homedata.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.homedataService.GpCreate(this.homedata).subscribe((data:any) => {
            this.homedata.name = ''
 	 	this.homedata.email = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}