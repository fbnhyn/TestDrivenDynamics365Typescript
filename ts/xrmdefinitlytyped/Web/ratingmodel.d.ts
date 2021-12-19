interface RatingModel_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  maxratingvalue?: number | null;
  minratingvalue?: number | null;
  modifiedon?: Date | null;
  msdyn_ratableentity?: msdyn_ratingmodel_msdyn_ratableentity | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  ratingmodelid?: string | null;
  statecode?: ratingmodel_statecode | null;
  statuscode?: ratingmodel_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface RatingModel_Relationships {
  RatingModel_SyncErrors?: SyncError_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  ratingmodel_AsyncOperations?: AsyncOperation_Result[] | null;
  ratingmodel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ratingmodel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  ratingmodel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  ratingmodel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  ratingmodel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  ratingmodel_ProcessSession?: ProcessSession_Result[] | null;
  ratingmodel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  ratingmodel_ratingvalue_RatingModel?: RatingValue_Result[] | null;
}
interface RatingModel extends RatingModel_Base, RatingModel_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface RatingModel_Create extends RatingModel {
}
interface RatingModel_Update extends RatingModel {
}
interface RatingModel_Select {
  createdby_guid: WebAttribute<RatingModel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RatingModel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RatingModel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<RatingModel_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<RatingModel_Select, { importsequencenumber: number | null }, {  }>;
  maxratingvalue: WebAttribute<RatingModel_Select, { maxratingvalue: number | null }, {  }>;
  minratingvalue: WebAttribute<RatingModel_Select, { minratingvalue: number | null }, {  }>;
  modifiedby_guid: WebAttribute<RatingModel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RatingModel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RatingModel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_ratableentity: WebAttribute<RatingModel_Select, { msdyn_ratableentity: msdyn_ratingmodel_msdyn_ratableentity | null }, { msdyn_ratableentity_formatted?: string }>;
  name: WebAttribute<RatingModel_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<RatingModel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<RatingModel_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<RatingModel_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<RatingModel_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<RatingModel_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  ratingmodelid: WebAttribute<RatingModel_Select, { ratingmodelid: string | null }, {  }>;
  statecode: WebAttribute<RatingModel_Select, { statecode: ratingmodel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<RatingModel_Select, { statuscode: ratingmodel_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<RatingModel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<RatingModel_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<RatingModel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<RatingModel_Select, { versionnumber: number | null }, {  }>;
}
interface RatingModel_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  maxratingvalue: number;
  minratingvalue: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_ratableentity: msdyn_ratingmodel_msdyn_ratableentity;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  ratingmodelid: XQW.Guid;
  statecode: ratingmodel_statecode;
  statuscode: ratingmodel_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface RatingModel_Expand {
  RatingModel_SyncErrors: WebExpand<RatingModel_Expand, SyncError_Select, SyncError_Filter, { RatingModel_SyncErrors: SyncError_Result[] }>;
  createdbyname: WebExpand<RatingModel_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<RatingModel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<RatingModel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<RatingModel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  ownerid: WebExpand<RatingModel_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<RatingModel_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<RatingModel_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<RatingModel_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  ratingmodel_AsyncOperations: WebExpand<RatingModel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ratingmodel_AsyncOperations: AsyncOperation_Result[] }>;
  ratingmodel_BulkDeleteFailures: WebExpand<RatingModel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ratingmodel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ratingmodel_DuplicateBaseRecord: WebExpand<RatingModel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { ratingmodel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  ratingmodel_DuplicateMatchingRecord: WebExpand<RatingModel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { ratingmodel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  ratingmodel_MailboxTrackingFolders: WebExpand<RatingModel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { ratingmodel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  ratingmodel_PrincipalObjectAttributeAccesses: WebExpand<RatingModel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { ratingmodel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  ratingmodel_ProcessSession: WebExpand<RatingModel_Expand, ProcessSession_Select, ProcessSession_Filter, { ratingmodel_ProcessSession: ProcessSession_Result[] }>;
  ratingmodel_UserEntityInstanceDatas: WebExpand<RatingModel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { ratingmodel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ratingmodel_ratingvalue_RatingModel: WebExpand<RatingModel_Expand, RatingValue_Select, RatingValue_Filter, { ratingmodel_ratingvalue_RatingModel: RatingValue_Result[] }>;
  transactioncurrencyid: WebExpand<RatingModel_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface RatingModel_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_ratableentity_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface RatingModel_Result extends RatingModel_Base, RatingModel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface RatingModel_RelatedOne {
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface RatingModel_RelatedMany {
  RatingModel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  ratingmodel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ratingmodel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ratingmodel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  ratingmodel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  ratingmodel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  ratingmodel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  ratingmodel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ratingmodel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  ratingmodel_ratingvalue_RatingModel: WebMappingRetrieve<RatingValue_Select,RatingValue_Expand,RatingValue_Filter,RatingValue_Fixed,RatingValue_Result,RatingValue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ratingmodels: WebMappingRetrieve<RatingModel_Select,RatingModel_Expand,RatingModel_Filter,RatingModel_Fixed,RatingModel_Result,RatingModel_FormattedResult>;
}
interface WebEntitiesRelated {
  ratingmodels: WebMappingRelated<RatingModel_RelatedOne,RatingModel_RelatedMany>;
}
interface WebEntitiesCUDA {
  ratingmodels: WebMappingCUDA<RatingModel_Create,RatingModel_Update,RatingModel_Select>;
}
