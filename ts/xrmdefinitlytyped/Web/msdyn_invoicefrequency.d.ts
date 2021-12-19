interface msdyn_invoicefrequency_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_daysofrun?: msdyn_daysofrun | null;
  msdyn_invoicefrequencyid?: string | null;
  msdyn_name?: string | null;
  msdyn_period?: msdyn_frequency | null;
  msdyn_runspermonth?: msdyn_invoicefrequency_msdyn_runspermonth | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_invoicefrequency_statecode | null;
  statuscode?: msdyn_invoicefrequency_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_invoicefrequency_Relationships {
  msdyn_invoicefrequency_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_invoicefrequency_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_invoicefrequency_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_invoicefrequency_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_invoicefrequency_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_invoicefrequency_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_invoicefrequency_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_invoicefrequency_SyncErrors?: SyncError_Result[] | null;
  msdyn_invoicefrequency_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency?: msdyn_invoicefrequencydetail_Result[] | null;
  msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency?: msdyn_projectparameter_Result[] | null;
  msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency?: QuoteDetail_Result[] | null;
  msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency?: SalesOrderDetail_Result[] | null;
}
interface msdyn_invoicefrequency extends msdyn_invoicefrequency_Base, msdyn_invoicefrequency_Relationships {
}
interface msdyn_invoicefrequency_Create extends msdyn_invoicefrequency {
}
interface msdyn_invoicefrequency_Update extends msdyn_invoicefrequency {
}
interface msdyn_invoicefrequency_Select {
  createdby_guid: WebAttribute<msdyn_invoicefrequency_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_invoicefrequency_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_invoicefrequency_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_invoicefrequency_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_invoicefrequency_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_invoicefrequency_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_invoicefrequency_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_daysofrun: WebAttribute<msdyn_invoicefrequency_Select, { msdyn_daysofrun: msdyn_daysofrun | null }, { msdyn_daysofrun_formatted?: string }>;
  msdyn_invoicefrequencyid: WebAttribute<msdyn_invoicefrequency_Select, { msdyn_invoicefrequencyid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_invoicefrequency_Select, { msdyn_name: string | null }, {  }>;
  msdyn_period: WebAttribute<msdyn_invoicefrequency_Select, { msdyn_period: msdyn_frequency | null }, { msdyn_period_formatted?: string }>;
  msdyn_runspermonth: WebAttribute<msdyn_invoicefrequency_Select, { msdyn_runspermonth: msdyn_invoicefrequency_msdyn_runspermonth | null }, { msdyn_runspermonth_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_invoicefrequency_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_invoicefrequency_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_invoicefrequency_Select, { statecode: msdyn_invoicefrequency_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_invoicefrequency_Select, { statuscode: msdyn_invoicefrequency_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_invoicefrequency_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_invoicefrequency_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_invoicefrequency_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_invoicefrequency_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_daysofrun: msdyn_daysofrun;
  msdyn_invoicefrequencyid: XQW.Guid;
  msdyn_name: string;
  msdyn_period: msdyn_frequency;
  msdyn_runspermonth: msdyn_invoicefrequency_msdyn_runspermonth;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_invoicefrequency_statecode;
  statuscode: msdyn_invoicefrequency_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_invoicefrequency_Expand {
  createdby: WebExpand<msdyn_invoicefrequency_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_invoicefrequency_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_invoicefrequency_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_invoicefrequency_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_invoicefrequency_AsyncOperations: WebExpand<msdyn_invoicefrequency_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_invoicefrequency_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_invoicefrequency_BulkDeleteFailures: WebExpand<msdyn_invoicefrequency_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_invoicefrequency_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_invoicefrequency_DuplicateBaseRecord: WebExpand<msdyn_invoicefrequency_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_invoicefrequency_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_invoicefrequency_DuplicateMatchingRecord: WebExpand<msdyn_invoicefrequency_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_invoicefrequency_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_invoicefrequency_MailboxTrackingFolders: WebExpand<msdyn_invoicefrequency_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_invoicefrequency_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_invoicefrequency_PrincipalObjectAttributeAccesses: WebExpand<msdyn_invoicefrequency_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_invoicefrequency_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_invoicefrequency_ProcessSession: WebExpand<msdyn_invoicefrequency_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_invoicefrequency_ProcessSession: ProcessSession_Result[] }>;
  msdyn_invoicefrequency_SyncErrors: WebExpand<msdyn_invoicefrequency_Expand, SyncError_Select, SyncError_Filter, { msdyn_invoicefrequency_SyncErrors: SyncError_Result[] }>;
  msdyn_invoicefrequency_UserEntityInstanceDatas: WebExpand<msdyn_invoicefrequency_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_invoicefrequency_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency: WebExpand<msdyn_invoicefrequency_Expand, msdyn_invoicefrequencydetail_Select, msdyn_invoicefrequencydetail_Filter, { msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency: msdyn_invoicefrequencydetail_Result[] }>;
  msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency: WebExpand<msdyn_invoicefrequency_Expand, msdyn_projectparameter_Select, msdyn_projectparameter_Filter, { msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency: msdyn_projectparameter_Result[] }>;
  msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency: WebExpand<msdyn_invoicefrequency_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency: QuoteDetail_Result[] }>;
  msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency: WebExpand<msdyn_invoicefrequency_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency: SalesOrderDetail_Result[] }>;
  organizationid: WebExpand<msdyn_invoicefrequency_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_invoicefrequency_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_daysofrun_formatted?: string;
  msdyn_period_formatted?: string;
  msdyn_runspermonth_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_invoicefrequency_Result extends msdyn_invoicefrequency_Base, msdyn_invoicefrequency_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_invoicefrequency_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_invoicefrequency_RelatedMany {
  msdyn_invoicefrequency_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_invoicefrequency_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_invoicefrequency_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_invoicefrequency_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_invoicefrequency_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_invoicefrequency_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_invoicefrequency_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_invoicefrequency_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_invoicefrequency_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency: WebMappingRetrieve<msdyn_invoicefrequencydetail_Select,msdyn_invoicefrequencydetail_Expand,msdyn_invoicefrequencydetail_Filter,msdyn_invoicefrequencydetail_Fixed,msdyn_invoicefrequencydetail_Result,msdyn_invoicefrequencydetail_FormattedResult>;
  msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency: WebMappingRetrieve<msdyn_projectparameter_Select,msdyn_projectparameter_Expand,msdyn_projectparameter_Filter,msdyn_projectparameter_Fixed,msdyn_projectparameter_Result,msdyn_projectparameter_FormattedResult>;
  msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_invoicefrequencies: WebMappingRetrieve<msdyn_invoicefrequency_Select,msdyn_invoicefrequency_Expand,msdyn_invoicefrequency_Filter,msdyn_invoicefrequency_Fixed,msdyn_invoicefrequency_Result,msdyn_invoicefrequency_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_invoicefrequencies: WebMappingRelated<msdyn_invoicefrequency_RelatedOne,msdyn_invoicefrequency_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_invoicefrequencies: WebMappingCUDA<msdyn_invoicefrequency_Create,msdyn_invoicefrequency_Update,msdyn_invoicefrequency_Select>;
}
