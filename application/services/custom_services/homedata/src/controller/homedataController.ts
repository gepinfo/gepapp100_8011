import { Request, Response } from 'express';
import { homedataService } from '../service/homedataService';
import { CustomLogger } from '../config/Logger'
let homedata = new homedataService();

export class homedataController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpDelete');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpSearchForUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpGetNounById');
    })}
public GpSearchRelationship(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpSearchRelationship(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpSearchRelationship');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpSearchRelationship');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    homedata.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into homedataController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from homedataController.ts: GpGetNounCreatedBy');
    })}


}