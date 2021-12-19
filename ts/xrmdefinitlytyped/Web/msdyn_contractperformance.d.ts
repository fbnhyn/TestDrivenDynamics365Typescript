interface msdyn_contractperformance_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billedamount?: number | null;
  msdyn_billedamount_base?: number | null;
  msdyn_billingtypecode?: number | null;
  msdyn_billingtypename?: string | null;
  msdyn_contractperformanceid?: string | null;
  msdyn_contractvalue?: number | null;
  msdyn_contractvalue_base?: number | null;
  msdyn_costincurred?: number | null;
  msdyn_costincurred_base?: number | null;
  msdyn_estimatedcost?: number | null;
  msdyn_estimatedcost_base?: number | null;
  msdyn_expectedmargin?: number | null;
  msdyn_grossmargin?: number | null;
  msdyn_isproduct?: boolean | null;
  msdyn_name?: string | null;
  msdyn_transactionclassification?: string | null;
  msdyn_unit?: string | null;
  msdyn_unitprice?: number | null;
  msdyn_unitprice_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_contractperformance_statecode | null;
  statuscode?: msdyn_contractperformance_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_contractperformance_Relationships {
  msdyn_ContractLineId?: SalesOrderDetail_Result | null;
  msdyn_contractperformance_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_contractperformance_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_contractperformance_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_contractperformance_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_contractperformance_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_contractperformance_SyncErrors?: SyncError_Result[] | null;
  msdyn_contractperformance_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId?: msdyn_contractlinedetailperformance_Result[] | null;
}
interface msdyn_contractperformance extends msdyn_contractperformance_Base, msdyn_contractperformance_Relationships {
  msdyn_ContractLineId_bind$salesorderdetails?: string | null;
  msdyn_salesorderid_bind$salesorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_contractperformance_Create extends msdyn_contractperformance {
}
interface msdyn_contractperformance_Update extends msdyn_contractperformance {
}
interface msdyn_contractperformance_Select {
  createdby_guid: WebAttribute<msdyn_contractperformance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_contractperformance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_contractperformance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_contractperformance_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_contractperformance_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_contractperformance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_contractperformance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_contractperformance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billedamount: WebAttribute<msdyn_contractperformance_Select, { msdyn_billedamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_billedamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_billedamount_base: WebAttribute<msdyn_contractperformance_Select, { msdyn_billedamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_billedamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_billingtypecode: WebAttribute<msdyn_contractperformance_Select, { msdyn_billingtypecode: number | null }, {  }>;
  msdyn_billingtypename: WebAttribute<msdyn_contractperformance_Select, { msdyn_billingtypename: string | null }, {  }>;
  msdyn_contractlineid_guid: WebAttribute<msdyn_contractperformance_Select, { msdyn_contractlineid_guid: string | null }, { msdyn_contractlineid_formatted?: string }>;
  msdyn_contractperformanceid: WebAttribute<msdyn_contractperformance_Select, { msdyn_contractperformanceid: string | null }, {  }>;
  msdyn_contractvalue: WebAttribute<msdyn_contractperformance_Select, { msdyn_contractvalue: number | null; transactioncurrencyid_guid: string | null }, { msdyn_contractvalue_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_contractvalue_base: WebAttribute<msdyn_contractperformance_Select, { msdyn_contractvalue_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_contractvalue_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_costincurred: WebAttribute<msdyn_contractperformance_Select, { msdyn_costincurred: number | null; transactioncurrencyid_guid: string | null }, { msdyn_costincurred_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_costincurred_base: WebAttribute<msdyn_contractperformance_Select, { msdyn_costincurred_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_costincurred_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_estimatedcost: WebAttribute<msdyn_contractperformance_Select, { msdyn_estimatedcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_estimatedcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_estimatedcost_base: WebAttribute<msdyn_contractperformance_Select, { msdyn_estimatedcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_estimatedcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_expectedmargin: WebAttribute<msdyn_contractperformance_Select, { msdyn_expectedmargin: number | null }, {  }>;
  msdyn_grossmargin: WebAttribute<msdyn_contractperformance_Select, { msdyn_grossmargin: number | null }, {  }>;
  msdyn_isproduct: WebAttribute<msdyn_contractperformance_Select, { msdyn_isproduct: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_contractperformance_Select, { msdyn_name: string | null }, {  }>;
  msdyn_salesorderid_guid: WebAttribute<msdyn_contractperformance_Select, { msdyn_salesorderid_guid: string | null }, { msdyn_salesorderid_formatted?: string }>;
  msdyn_transactionclassification: WebAttribute<msdyn_contractperformance_Select, { msdyn_transactionclassification: string | null }, {  }>;
  msdyn_unit: WebAttribute<msdyn_contractperformance_Select, { msdyn_unit: string | null }, {  }>;
  msdyn_unitprice: WebAttribute<msdyn_contractperformance_Select, { msdyn_unitprice: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitprice_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitprice_base: WebAttribute<msdyn_contractperformance_Select, { msdyn_unitprice_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitprice_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_contractperformance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_contractperformance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_contractperformance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_contractperformance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_contractperformance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_contractperformance_Select, { statecode: msdyn_contractperformance_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_contractperformance_Select, { statuscode: msdyn_contractperformance_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_contractperformance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_contractperformance_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_contractperformance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_contractperformance_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_contractperformance_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billedamount: number;
  msdyn_billedamount_base: number;
  msdyn_billingtypecode: number;
  msdyn_billingtypename: string;
  msdyn_contractlineid_guid: XQW.Guid;
  msdyn_contractperformanceid: XQW.Guid;
  msdyn_contractvalue: number;
  msdyn_contractvalue_base: number;
  msdyn_costincurred: number;
  msdyn_costincurred_base: number;
  msdyn_estimatedcost: number;
  msdyn_estimatedcost_base: number;
  msdyn_expectedmargin: any;
  msdyn_grossmargin: any;
  msdyn_isproduct: boolean;
  msdyn_name: string;
  msdyn_salesorderid_guid: XQW.Guid;
  msdyn_transactionclassification: string;
  msdyn_unit: string;
  msdyn_unitprice: number;
  msdyn_unitprice_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_contractperformance_statecode;
  statuscode: msdyn_contractperformance_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_contractperformance_Expand {
  createdby: WebExpand<msdyn_contractperformance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_contractperformance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_contractperformance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_contractperformance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ContractLineId: WebExpand<msdyn_contractperformance_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { msdyn_ContractLineId: SalesOrderDetail_Result }>;
  msdyn_contractperformance_AsyncOperations: WebExpand<msdyn_contractperformance_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_contractperformance_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_contractperformance_BulkDeleteFailures: WebExpand<msdyn_contractperformance_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_contractperformance_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_contractperformance_MailboxTrackingFolders: WebExpand<msdyn_contractperformance_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_contractperformance_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_contractperformance_PrincipalObjectAttributeAccesses: WebExpand<msdyn_contractperformance_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_contractperformance_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_contractperformance_ProcessSession: WebExpand<msdyn_contractperformance_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_contractperformance_ProcessSession: ProcessSession_Result[] }>;
  msdyn_contractperformance_SyncErrors: WebExpand<msdyn_contractperformance_Expand, SyncError_Select, SyncError_Filter, { msdyn_contractperformance_SyncErrors: SyncError_Result[] }>;
  msdyn_contractperformance_UserEntityInstanceDatas: WebExpand<msdyn_contractperformance_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_contractperformance_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId: WebExpand<msdyn_contractperformance_Expand, msdyn_contractlinedetailperformance_Select, msdyn_contractlinedetailperformance_Filter, { msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId: msdyn_contractlinedetailperformance_Result[] }>;
  msdyn_salesorderid: WebExpand<msdyn_contractperformance_Expand, SalesOrder_Select, SalesOrder_Filter, { msdyn_salesorderid: SalesOrder_Result }>;
  ownerid: WebExpand<msdyn_contractperformance_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_contractperformance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_contractperformance_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_contractperformance_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_contractperformance_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_contractperformance_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billedamount_base_formatted?: string;
  msdyn_billedamount_formatted?: string;
  msdyn_contractlineid_formatted?: string;
  msdyn_contractvalue_base_formatted?: string;
  msdyn_contractvalue_formatted?: string;
  msdyn_costincurred_base_formatted?: string;
  msdyn_costincurred_formatted?: string;
  msdyn_estimatedcost_base_formatted?: string;
  msdyn_estimatedcost_formatted?: string;
  msdyn_salesorderid_formatted?: string;
  msdyn_unitprice_base_formatted?: string;
  msdyn_unitprice_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_contractperformance_Result extends msdyn_contractperformance_Base, msdyn_contractperformance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contractlineid_guid: string | null;
  msdyn_salesorderid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_contractperformance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ContractLineId: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  msdyn_salesorderid: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_contractperformance_RelatedMany {
  msdyn_contractperformance_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_contractperformance_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_contractperformance_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_contractperformance_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_contractperformance_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_contractperformance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_contractperformance_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId: WebMappingRetrieve<msdyn_contractlinedetailperformance_Select,msdyn_contractlinedetailperformance_Expand,msdyn_contractlinedetailperformance_Filter,msdyn_contractlinedetailperformance_Fixed,msdyn_contractlinedetailperformance_Result,msdyn_contractlinedetailperformance_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_contractperformances: WebMappingRetrieve<msdyn_contractperformance_Select,msdyn_contractperformance_Expand,msdyn_contractperformance_Filter,msdyn_contractperformance_Fixed,msdyn_contractperformance_Result,msdyn_contractperformance_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_contractperformances: WebMappingRelated<msdyn_contractperformance_RelatedOne,msdyn_contractperformance_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_contractperformances: WebMappingCUDA<msdyn_contractperformance_Create,msdyn_contractperformance_Update,msdyn_contractperformance_Select>;
}
