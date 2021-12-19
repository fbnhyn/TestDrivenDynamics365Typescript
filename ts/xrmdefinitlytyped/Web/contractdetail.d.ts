interface ContractDetail_Base extends WebEntity {
  activeon?: Date | null;
  allotmentsoverage?: number | null;
  allotmentsremaining?: number | null;
  allotmentsused?: number | null;
  contractdetailid?: string | null;
  contractstatecode?: contractdetail_contractstatecode | null;
  createdon?: Date | null;
  discount?: number | null;
  discount_base?: number | null;
  discountpercentage?: number | null;
  effectivitycalendar?: string | null;
  exchangerate?: number | null;
  expireson?: Date | null;
  importsequencenumber?: number | null;
  initialquantity?: number | null;
  lineitemorder?: number | null;
  modifiedon?: Date | null;
  net?: number | null;
  net_base?: number | null;
  overriddencreatedon?: Date | null;
  price?: number | null;
  price_base?: number | null;
  productserialnumber?: string | null;
  rate?: number | null;
  rate_base?: number | null;
  servicecontractunitscode?: contractdetail_servicecontractunitscode | null;
  statecode?: contractdetail_statecode | null;
  statuscode?: contractdetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  totalallotments?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ContractDetail_Relationships {
  ContractDetail_Annotation?: Annotation_Result[] | null;
  ContractDetail_AsyncOperations?: AsyncOperation_Result[] | null;
  ContractDetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ContractDetail_ProcessSessions?: ProcessSession_Result[] | null;
  ContractDetail_SyncErrors?: SyncError_Result[] | null;
  contract_detail_cases?: Incident_Result[] | null;
  contractdetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  contractdetail_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  customerid_account?: Account_Result | null;
  customerid_contact?: Contact_Result | null;
  userentityinstancedata_contractdetail?: UserEntityInstanceData_Result[] | null;
}
interface ContractDetail extends ContractDetail_Base, ContractDetail_Relationships {
  contractid_bind$contracts?: string | null;
  customerid_account_bind$accounts?: string | null;
  customerid_contact_bind$contacts?: string | null;
  productid_bind$products?: string | null;
  serviceaddress_bind$customeraddresses?: string | null;
  uomid_bind$uoms?: string | null;
  uomscheduleid_bind$uomschedules?: string | null;
}
interface ContractDetail_Create extends ContractDetail {
}
interface ContractDetail_Update extends ContractDetail {
}
interface ContractDetail_Select {
  accountid_guid: WebAttribute<ContractDetail_Select, { accountid_guid: string | null }, { accountid_formatted?: string }>;
  activeon: WebAttribute<ContractDetail_Select, { activeon: Date | null }, { activeon_formatted?: string }>;
  allotmentsoverage: WebAttribute<ContractDetail_Select, { allotmentsoverage: number | null }, {  }>;
  allotmentsremaining: WebAttribute<ContractDetail_Select, { allotmentsremaining: number | null }, {  }>;
  allotmentsused: WebAttribute<ContractDetail_Select, { allotmentsused: number | null }, {  }>;
  contactid_guid: WebAttribute<ContractDetail_Select, { contactid_guid: string | null }, { contactid_formatted?: string }>;
  contractdetailid: WebAttribute<ContractDetail_Select, { contractdetailid: string | null }, {  }>;
  contractid_guid: WebAttribute<ContractDetail_Select, { contractid_guid: string | null }, { contractid_formatted?: string }>;
  contractstatecode: WebAttribute<ContractDetail_Select, { contractstatecode: contractdetail_contractstatecode | null }, { contractstatecode_formatted?: string }>;
  createdby_guid: WebAttribute<ContractDetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ContractDetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ContractDetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customerid_guid: WebAttribute<ContractDetail_Select, { customerid_guid: string | null }, { customerid_formatted?: string }>;
  discount: WebAttribute<ContractDetail_Select, { discount: number | null; transactioncurrencyid_guid: string | null }, { discount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  discount_base: WebAttribute<ContractDetail_Select, { discount_base: number | null; transactioncurrencyid_guid: string | null }, { discount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  discountpercentage: WebAttribute<ContractDetail_Select, { discountpercentage: number | null }, {  }>;
  effectivitycalendar: WebAttribute<ContractDetail_Select, { effectivitycalendar: string | null }, {  }>;
  exchangerate: WebAttribute<ContractDetail_Select, { exchangerate: number | null }, {  }>;
  expireson: WebAttribute<ContractDetail_Select, { expireson: Date | null }, { expireson_formatted?: string }>;
  importsequencenumber: WebAttribute<ContractDetail_Select, { importsequencenumber: number | null }, {  }>;
  initialquantity: WebAttribute<ContractDetail_Select, { initialquantity: number | null }, {  }>;
  lineitemorder: WebAttribute<ContractDetail_Select, { lineitemorder: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ContractDetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ContractDetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ContractDetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  net: WebAttribute<ContractDetail_Select, { net: number | null; transactioncurrencyid_guid: string | null }, { net_formatted?: string; transactioncurrencyid_formatted?: string }>;
  net_base: WebAttribute<ContractDetail_Select, { net_base: number | null; transactioncurrencyid_guid: string | null }, { net_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ContractDetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ContractDetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ContractDetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ContractDetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ContractDetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  price: WebAttribute<ContractDetail_Select, { price: number | null; transactioncurrencyid_guid: string | null }, { price_formatted?: string; transactioncurrencyid_formatted?: string }>;
  price_base: WebAttribute<ContractDetail_Select, { price_base: number | null; transactioncurrencyid_guid: string | null }, { price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  productid_guid: WebAttribute<ContractDetail_Select, { productid_guid: string | null }, { productid_formatted?: string }>;
  productserialnumber: WebAttribute<ContractDetail_Select, { productserialnumber: string | null }, {  }>;
  rate: WebAttribute<ContractDetail_Select, { rate: number | null; transactioncurrencyid_guid: string | null }, { rate_formatted?: string; transactioncurrencyid_formatted?: string }>;
  rate_base: WebAttribute<ContractDetail_Select, { rate_base: number | null; transactioncurrencyid_guid: string | null }, { rate_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  serviceaddress_guid: WebAttribute<ContractDetail_Select, { serviceaddress_guid: string | null }, { serviceaddress_formatted?: string }>;
  servicecontractunitscode: WebAttribute<ContractDetail_Select, { servicecontractunitscode: contractdetail_servicecontractunitscode | null }, { servicecontractunitscode_formatted?: string }>;
  statecode: WebAttribute<ContractDetail_Select, { statecode: contractdetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ContractDetail_Select, { statuscode: contractdetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ContractDetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<ContractDetail_Select, { title: string | null }, {  }>;
  totalallotments: WebAttribute<ContractDetail_Select, { totalallotments: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ContractDetail_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  uomid_guid: WebAttribute<ContractDetail_Select, { uomid_guid: string | null }, { uomid_formatted?: string }>;
  uomscheduleid_guid: WebAttribute<ContractDetail_Select, { uomscheduleid_guid: string | null }, { uomscheduleid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ContractDetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ContractDetail_Select, { versionnumber: number | null }, {  }>;
}
interface ContractDetail_Filter {
  accountid_guid: XQW.Guid;
  activeon: Date;
  allotmentsoverage: number;
  allotmentsremaining: number;
  allotmentsused: number;
  contactid_guid: XQW.Guid;
  contractdetailid: XQW.Guid;
  contractid_guid: XQW.Guid;
  contractstatecode: contractdetail_contractstatecode;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customerid_guid: XQW.Guid;
  discount: number;
  discount_base: number;
  discountpercentage: any;
  effectivitycalendar: string;
  exchangerate: any;
  expireson: Date;
  importsequencenumber: number;
  initialquantity: number;
  lineitemorder: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  net: number;
  net_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  price: number;
  price_base: number;
  productid_guid: XQW.Guid;
  productserialnumber: string;
  rate: number;
  rate_base: number;
  serviceaddress_guid: XQW.Guid;
  servicecontractunitscode: contractdetail_servicecontractunitscode;
  statecode: contractdetail_statecode;
  statuscode: contractdetail_statuscode;
  timezoneruleversionnumber: number;
  title: string;
  totalallotments: number;
  transactioncurrencyid_guid: XQW.Guid;
  uomid_guid: XQW.Guid;
  uomscheduleid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ContractDetail_Expand {
  ContractDetail_Annotation: WebExpand<ContractDetail_Expand, Annotation_Select, Annotation_Filter, { ContractDetail_Annotation: Annotation_Result[] }>;
  ContractDetail_AsyncOperations: WebExpand<ContractDetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ContractDetail_AsyncOperations: AsyncOperation_Result[] }>;
  ContractDetail_BulkDeleteFailures: WebExpand<ContractDetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ContractDetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ContractDetail_ProcessSessions: WebExpand<ContractDetail_Expand, ProcessSession_Select, ProcessSession_Filter, { ContractDetail_ProcessSessions: ProcessSession_Result[] }>;
  ContractDetail_SyncErrors: WebExpand<ContractDetail_Expand, SyncError_Select, SyncError_Filter, { ContractDetail_SyncErrors: SyncError_Result[] }>;
  contract_detail_cases: WebExpand<ContractDetail_Expand, Incident_Select, Incident_Filter, { contract_detail_cases: Incident_Result[] }>;
  contractdetail_MailboxTrackingFolders: WebExpand<ContractDetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { contractdetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  contractdetail_principalobjectattributeaccess: WebExpand<ContractDetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { contractdetail_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  contractid: WebExpand<ContractDetail_Expand, Contract_Select, Contract_Filter, { contractid: Contract_Result }>;
  createdby: WebExpand<ContractDetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ContractDetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customerid_account: WebExpand<ContractDetail_Expand, Account_Select, Account_Filter, { customerid_account: Account_Result }>;
  customerid_contact: WebExpand<ContractDetail_Expand, Contact_Select, Contact_Filter, { customerid_contact: Contact_Result }>;
  modifiedby: WebExpand<ContractDetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ContractDetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  owningteam: WebExpand<ContractDetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ContractDetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  productid: WebExpand<ContractDetail_Expand, Product_Select, Product_Filter, { productid: Product_Result }>;
  serviceaddress: WebExpand<ContractDetail_Expand, CustomerAddress_Select, CustomerAddress_Filter, { serviceaddress: CustomerAddress_Result }>;
  transactioncurrencyid: WebExpand<ContractDetail_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  uomid: WebExpand<ContractDetail_Expand, UoM_Select, UoM_Filter, { uomid: UoM_Result }>;
  uomscheduleid: WebExpand<ContractDetail_Expand, UoMSchedule_Select, UoMSchedule_Filter, { uomscheduleid: UoMSchedule_Result }>;
  userentityinstancedata_contractdetail: WebExpand<ContractDetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_contractdetail: UserEntityInstanceData_Result[] }>;
}
interface ContractDetail_FormattedResult {
  accountid_formatted?: string;
  activeon_formatted?: string;
  contactid_formatted?: string;
  contractid_formatted?: string;
  contractstatecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customerid_formatted?: string;
  discount_base_formatted?: string;
  discount_formatted?: string;
  expireson_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  net_base_formatted?: string;
  net_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  price_base_formatted?: string;
  price_formatted?: string;
  productid_formatted?: string;
  rate_base_formatted?: string;
  rate_formatted?: string;
  serviceaddress_formatted?: string;
  servicecontractunitscode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  uomid_formatted?: string;
  uomscheduleid_formatted?: string;
}
interface ContractDetail_Result extends ContractDetail_Base, ContractDetail_Relationships {
  "@odata.etag": string;
  accountid_guid: string | null;
  contactid_guid: string | null;
  contractid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customerid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  productid_guid: string | null;
  serviceaddress_guid: string | null;
  transactioncurrencyid_guid: string | null;
  uomid_guid: string | null;
  uomscheduleid_guid: string | null;
}
interface ContractDetail_RelatedOne {
  contractid: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  customerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  customerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  productid: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  serviceaddress: WebMappingRetrieve<CustomerAddress_Select,CustomerAddress_Expand,CustomerAddress_Filter,CustomerAddress_Fixed,CustomerAddress_Result,CustomerAddress_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  uomid: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  uomscheduleid: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
}
interface ContractDetail_RelatedMany {
  ContractDetail_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  ContractDetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ContractDetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ContractDetail_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ContractDetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  contract_detail_cases: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  contractdetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  contractdetail_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_contractdetail: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contractdetails: WebMappingRetrieve<ContractDetail_Select,ContractDetail_Expand,ContractDetail_Filter,ContractDetail_Fixed,ContractDetail_Result,ContractDetail_FormattedResult>;
}
interface WebEntitiesRelated {
  contractdetails: WebMappingRelated<ContractDetail_RelatedOne,ContractDetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  contractdetails: WebMappingCUDA<ContractDetail_Create,ContractDetail_Update,ContractDetail_Select>;
}
