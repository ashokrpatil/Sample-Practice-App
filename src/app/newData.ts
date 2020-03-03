export interface ICRMresponse {
    odatacontext: string;
    value: IContactRecord[];
  }
  
  export interface IContactRecord {
    odataetag: string;
    fullname: string;
    emailaddress1: string;
    telephone1: string;
    statecode: string;
    contactid: string;
    ownerid: string;
  }
  