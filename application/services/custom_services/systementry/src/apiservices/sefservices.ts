import { SystemEntryService } from '../config/SystemEntryService';
import * as fetch from 'node-fetch';

export class SefServices {

    public async GpSEF(UserFeatureId, UserMailId) {
        let sefscreen = {
            user: '',
            homedata: '',
        }
        await fetch(`${SystemEntryService.apiGatewayURL}/web/getuser/${UserFeatureId}`)
            .then(res => res.json().then(data => ({data})))
            .then( async(obj) => 
                sefscreen.user = obj.data
            );
        await fetch(`${SystemEntryService.apiGatewayURL}/web/homedata/userid/created_by?createdby=${UserMailId}`)
        .then(res => res.json().then(data => ({data})))
        .then(obj => 
            sefscreen.homedata = obj.data
        );
        return sefscreen;
    }
}