import { Request, Response, NextFunction } from "express";
import { homedataController } from '../controller/homedataController';


export class Routes {
    private homedata: homedataController = new homedataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/homedata/:id').delete(this.homedata.GpDelete);
app.route('/homedata').get(this.homedata.GpGetAllValues);
app.route('/homedata').post(this.homedata.GpCreate);
app.route('/homedata').put(this.homedata.GpUpdate);
app.route('/homedata/get/search').get(this.homedata.GpSearch);
app.route('/homedata/get/update').put(this.homedata.GpSearchForUpdate);
app.route('/homedata/:id').get(this.homedata.GpGetNounById);
app.route('/homedata/get/searchrelationship').get(this.homedata.GpSearchRelationship);
app.route('/homedata/userid/created_by').get(this.homedata.GpGetNounCreatedBy);
     }

}