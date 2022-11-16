import { Request, Response } from 'express';
import {homedataDao} from '../dao/homedataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let homedata = new homedataDao();

export class homedataService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpDelete')
     let  homedataId = req.params.id;
     homedata.GpDelete(homedataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpGetAllValues')
     
     homedata.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpCreate')
     let  homedataData = req.body;
     homedata.GpCreate(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpUpdate')
     let  homedataData = req.body;
     homedata.GpUpdate(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpSearch')
     let  homedataData = req.query;
     homedata.GpSearch(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpSearchForUpdate')
     let  homedataData = req.body;
     homedata.GpSearchForUpdate(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpGetNounById')
     let  homedataId = req.params.id;
     homedata.GpGetNounById(homedataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpSearchRelationship')
     let  homedataData = req.query;
     homedata.GpSearchRelationship(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into homedataService.ts: GpGetNounCreatedBy')
     let  homedataData = { created_by: req.query.createdby };
     homedata.GpGetNounCreatedBy(homedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from homedataService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}