import { User } from "./user";

export class FarmerCrop {
      //   userId: number;
      farmer:User;
        cropId: number;
        cropName: string;
        public cropType:string;
        public fertilizer:string;
    public cropBasePrice:number;
    public cropSoldPrice:number;
    public cropSoldDate:string;
    public currentBid:number;
    public cropQuantity:number;
    public cropSoldStatus:string;
    public soilPH:number;
    public adminApproval:string;
}
