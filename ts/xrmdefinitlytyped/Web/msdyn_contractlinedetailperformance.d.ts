interface msdyn_contractlinedetailperformance_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billedamount?: number | null;
  msdyn_billedamount_base?: number | null;
  msdyn_billedquantity?: number | null;
  msdyn_category?: string | null;
  msdyn_contractid?: string | null;
  msdyn_contractlinedetailperformanceid?: string | null;
  msdyn_contractlineid?: string | null;
  msdyn_costincurred?: number | null;
  msdyn_costincurred_base?: number | null;
  msdyn_loggedhours?: number | null;
  msdyn_loggedquantity?: number | null;
  msdyn_name?: string | null;
  msdyn_role?: string | null;
  msdyn_transactionclass?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_contractlinedetailperformance_statecode | null;
  statuscode?: msdyn_contractlinedetailperformance_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_contractlinedetailperformance_Relationships {
  msdyn_ContractPerformanceId?: msdyn_contractperformance_Result | null;
  msdyn_contractlinedetailperformance_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_contractlinedetailperformance_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_contractlinedetailperformance_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_contractlinedetailperformance_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_contractlinedetailperformance_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_contractlinedetailperformance_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_contractlinedetailperformance_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_contractlinedetailperformance_SyncErrors?: SyncError_Result[] | null;
  msdyn_contractlinedetailperformance_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_contractlinedetailperformance extends msdyn_contractlinedetailperformance_Base, msdyn_contractlinedetailperformance_Relationships {
  msdyn_ContractPerformanceId_bind$msdyn_contractperformances?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_contractlinedetailperformance_Create extends msdyn_contractlinedetailperformance {
}
interface msdyn_contractlinedetailperformance_Update extends msdyn_contractlinedetailperformance {
}
interface msdyn_contractlinedetailperformance_Select {
  createdby_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_contractlinedetailperformance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_contractlinedetailperformance_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_contractlinedetailperformance_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_contractlinedetailperformance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billedamount: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_billedamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_billedamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_billedamount_base: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_billedamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_billedamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_billedquantity: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_billedquantity: number | null }, {  }>;
  msdyn_category: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_category: string | null }, {  }>;
  msdyn_contractid: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_contractid: string | null }, {  }>;
  msdyn_contractlinedetailperformanceid: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_contractlinedetailperformanceid: string | null }, {  }>;
  msdyn_contractlineid: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_contractlineid: string | null }, {  }>;
  msdyn_contractperformanceid_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_contractperformanceid_guid: string | null }, { msdyn_contractperformanceid_formatted?: string }>;
  msdyn_costincurred: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_costincurred: number | null; transactioncurrencyid_guid: string | null }, { msdyn_costincurred_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_costincurred_base: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_costincurred_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_costincurred_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_loggedhours: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_loggedhours: number | null }, {  }>;
  msdyn_loggedquantity: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_loggedquantity: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_name: string | null }, {  }>;
  msdyn_role: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_role: string | null }, {  }>;
  msdyn_transactionclass: WebAttribute<msdyn_contractlinedetailperformance_Select, { msdyn_transactionclass: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_contractlinedetailperformance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_contractlinedetailperformance_Select, { statecode: msdyn_contractlinedetailperformance_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_contractlinedetailperformance_Select, { statuscode: msdyn_contractlinedetailperformance_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_contractlinedetailperformance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_contractlinedetailperformance_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_contractlinedetailperformance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_contractlinedetailperformance_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_contractlinedetailperformance_Filter {
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
  msdyn_billedquantity: any;
  msdyn_category: string;
  msdyn_contractid: XQW.Guid;
  msdyn_contractlinedetailperformanceid: XQW.Guid;
  msdyn_contractlineid: XQW.Guid;
  msdyn_contractperformanceid_guid: XQW.Guid;
  msdyn_costincurred: number;
  msdyn_costincurred_base: number;
  msdyn_loggedhours: any;
  msdyn_loggedquantity: any;
  msdyn_name: string;
  msdyn_role: string;
  msdyn_transactionclass: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_contractlinedetailperformance_statecode;
  statuscode: msdyn_contractlinedetailperformance_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_contractlinedetailperformance_Expand {
  createdby: WebExpand<msdyn_contractlinedetailperformance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_contractlinedetailperformance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_contractlinedetailperformance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_contractlinedetailperformance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ContractPerformanceId: WebExpand<msdyn_contractlinedetailperformance_Expand, msdyn_contractperformance_Select, msdyn_contractperformance_Filter, { msdyn_ContractPerformanceId: msdyn_contractperformance_Result }>;
  msdyn_contractlinedetailperformance_AsyncOperations: WebExpand<msdyn_contractlinedetailperformance_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_contractlinedetailperformance_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_contractlinedetailperformance_BulkDeleteFailures: WebExpand<msdyn_contractlinedetailperformance_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_contractlinedetailperformance_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_contractlinedetailperformance_DuplicateBaseRecord: WebExpand<msdyn_contractlinedetailperformance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_contractlinedetailperformance_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_contractlinedetailperformance_DuplicateMatchingRecord: WebExpand<msdyn_contractlinedetailperformance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_contractlinedetailperformance_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_contractlinedetailperformance_MailboxTrackingFolders: WebExpand<msdyn_contractlinedetailperformance_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_contractlinedetailperformance_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_contractlinedetailperformance_PrincipalObjectAttributeAccesses: WebExpand<msdyn_contractlinedetailperformance_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_contractlinedetailperformance_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_contractlinedetailperformance_ProcessSession: WebExpand<msdyn_contractlinedetailperformance_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_contractlinedetailperformance_ProcessSession: ProcessSession_Result[] }>;
  msdyn_contractlinedetailperformance_SyncErrors: WebExpand<msdyn_contractlinedetailperformance_Expand, SyncError_Select, SyncError_Filter, { msdyn_contractlinedetailperformance_SyncErrors: SyncError_Result[] }>;
  msdyn_contractlinedetailperformance_UserEntityInstanceDatas: WebExpand<msdyn_contractlinedetailperformance_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_contractlinedetailperformance_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_contractlinedetailperformance_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_contractlinedetailperformance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_contractlinedetailperformance_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_contractlinedetailperformance_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_contractlinedetailperformance_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_contractlinedetailperformance_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billedamount_base_formatted?: string;
  msdyn_billedamount_formatted?: string;
  msdyn_contractperformanceid_formatted?: string;
  msdyn_costincurred_base_formatted?: string;
  msdyn_costincurred_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_contractlinedetailperformance_Result extends msdyn_contractlinedetailperformance_Base, msdyn_contractlinedetailperformance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contractperformanceid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_contractlinedetailperformance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ContractPerformanceId: WebMappingRetrieve<msdyn_contractperformance_Select,msdyn_contractperformance_Expand,msdyn_contractperformance_Filter,msdyn_contractperformance_Fixed,msdyn_contractperformance_Result,msdyn_contractperformance_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_contractlinedetailperformance_RelatedMany {
  msdyn_contractlinedetailperformance_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_contractlinedetailperformance_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_contractlinedetailperformance_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_contractlinedetailperformance_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_contractlinedetailperformance_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_contractlinedetailperformance_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_contractlinedetailperformance_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_contractlinedetailperformance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_contractlinedetailperformance_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_contractlinedetailperformances: WebMappingRetrieve<msdyn_contractlinedetailperformance_Select,msdyn_contractlinedetailperformance_Expand,msdyn_contractlinedetailperformance_Filter,msdyn_contractlinedetailperformance_Fixed,msdyn_contractlinedetailperformance_Result,msdyn_contractlinedetailperformance_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_contractlinedetailperformances: WebMappingRelated<msdyn_contractlinedetailperformance_RelatedOne,msdyn_contractlinedetailperformance_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_contractlinedetailperformances: WebMappingCUDA<msdyn_contractlinedetailperformance_Create,msdyn_contractlinedetailperformance_Update,msdyn_contractlinedetailperformance_Select>;
}
