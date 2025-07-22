export class ResultAddModel {
  rid?: number;
  stid?: number;

  rbangla?: number;
  rmath?: number;
  renglish?: number;
  rislam?: number;
  rscience?: number; // fixed spelling
  rsocial?: number;

  rtotalmark?: number;
  ravg?: number;
  rgpa?: number;
  rgrade?: string;
  rpassFail?: string;
  rexamcatagory?: string;

  studentAddModel?: {
    sid?: number;
    batchId?: string;
    session?: string;
    stClass?: string;
    stRoll?: string;
    stfirstname?: string;
    stlastname?: string;
    stemail?: string;
    stfathersname?: string;
    stmothersname?: string;
    stpassword?: string;
    strole?: string;
    stdob?: string;
    staddress?: string;
    stgender?: string;
    stphone?: string;
    stPhoto?: any;
  };
}
