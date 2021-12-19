interface conversationtranscript_Base extends WebEntity {
  content?: string | null;
  conversationstarttime?: Date | null;
  conversationtranscriptid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  metadata?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  schematype?: string | null;
  schemaversion?: string | null;
  statecode?: conversationtranscript_statecode | null;
  statuscode?: conversationtranscript_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface conversationtranscript_Relationships {
  bot_conversationtranscriptId?: bot_Result | null;
  conversationtranscript_AsyncOperations?: AsyncOperation_Result[] | null;
  conversationtranscript_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  conversationtranscript_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  conversationtranscript_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  conversationtranscript_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  conversationtranscript_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  conversationtranscript_ProcessSession?: ProcessSession_Result[] | null;
  conversationtranscript_SyncErrors?: SyncError_Result[] | null;
  conversationtranscript_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface conversationtranscript extends conversationtranscript_Base, conversationtranscript_Relationships {
  bot_conversationtranscriptId_bind$bots?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface conversationtranscript_Create extends conversationtranscript {
}
interface conversationtranscript_Update extends conversationtranscript {
}
interface conversationtranscript_Select {
  bot_conversationtranscriptid_guid: WebAttribute<conversationtranscript_Select, { bot_conversationtranscriptid_guid: string | null }, { bot_conversationtranscriptid_formatted?: string }>;
  content: WebAttribute<conversationtranscript_Select, { content: string | null }, {  }>;
  conversationstarttime: WebAttribute<conversationtranscript_Select, { conversationstarttime: Date | null }, { conversationstarttime_formatted?: string }>;
  conversationtranscriptid: WebAttribute<conversationtranscript_Select, { conversationtranscriptid: string | null }, {  }>;
  createdby_guid: WebAttribute<conversationtranscript_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<conversationtranscript_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<conversationtranscript_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<conversationtranscript_Select, { importsequencenumber: number | null }, {  }>;
  metadata: WebAttribute<conversationtranscript_Select, { metadata: string | null }, {  }>;
  modifiedby_guid: WebAttribute<conversationtranscript_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<conversationtranscript_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<conversationtranscript_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<conversationtranscript_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<conversationtranscript_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<conversationtranscript_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<conversationtranscript_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<conversationtranscript_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<conversationtranscript_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  schematype: WebAttribute<conversationtranscript_Select, { schematype: string | null }, {  }>;
  schemaversion: WebAttribute<conversationtranscript_Select, { schemaversion: string | null }, {  }>;
  statecode: WebAttribute<conversationtranscript_Select, { statecode: conversationtranscript_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<conversationtranscript_Select, { statuscode: conversationtranscript_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<conversationtranscript_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<conversationtranscript_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<conversationtranscript_Select, { versionnumber: number | null }, {  }>;
}
interface conversationtranscript_Filter {
  bot_conversationtranscriptid_guid: XQW.Guid;
  content: string;
  conversationstarttime: Date;
  conversationtranscriptid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  metadata: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  schematype: string;
  schemaversion: string;
  statecode: conversationtranscript_statecode;
  statuscode: conversationtranscript_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface conversationtranscript_Expand {
  bot_conversationtranscriptId: WebExpand<conversationtranscript_Expand, bot_Select, bot_Filter, { bot_conversationtranscriptId: bot_Result }>;
  conversationtranscript_AsyncOperations: WebExpand<conversationtranscript_Expand, AsyncOperation_Select, AsyncOperation_Filter, { conversationtranscript_AsyncOperations: AsyncOperation_Result[] }>;
  conversationtranscript_BulkDeleteFailures: WebExpand<conversationtranscript_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { conversationtranscript_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  conversationtranscript_DuplicateBaseRecord: WebExpand<conversationtranscript_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { conversationtranscript_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  conversationtranscript_DuplicateMatchingRecord: WebExpand<conversationtranscript_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { conversationtranscript_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  conversationtranscript_MailboxTrackingFolders: WebExpand<conversationtranscript_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { conversationtranscript_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  conversationtranscript_PrincipalObjectAttributeAccesses: WebExpand<conversationtranscript_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { conversationtranscript_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  conversationtranscript_ProcessSession: WebExpand<conversationtranscript_Expand, ProcessSession_Select, ProcessSession_Filter, { conversationtranscript_ProcessSession: ProcessSession_Result[] }>;
  conversationtranscript_SyncErrors: WebExpand<conversationtranscript_Expand, SyncError_Select, SyncError_Filter, { conversationtranscript_SyncErrors: SyncError_Result[] }>;
  conversationtranscript_UserEntityInstanceDatas: WebExpand<conversationtranscript_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { conversationtranscript_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<conversationtranscript_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<conversationtranscript_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<conversationtranscript_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<conversationtranscript_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<conversationtranscript_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<conversationtranscript_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<conversationtranscript_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<conversationtranscript_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface conversationtranscript_FormattedResult {
  bot_conversationtranscriptid_formatted?: string;
  conversationstarttime_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface conversationtranscript_Result extends conversationtranscript_Base, conversationtranscript_Relationships {
  "@odata.etag": string;
  bot_conversationtranscriptid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface conversationtranscript_RelatedOne {
  bot_conversationtranscriptId: WebMappingRetrieve<bot_Select,bot_Expand,bot_Filter,bot_Fixed,bot_Result,bot_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface conversationtranscript_RelatedMany {
  conversationtranscript_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  conversationtranscript_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  conversationtranscript_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  conversationtranscript_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  conversationtranscript_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  conversationtranscript_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  conversationtranscript_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  conversationtranscript_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  conversationtranscript_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  conversationtranscripts: WebMappingRetrieve<conversationtranscript_Select,conversationtranscript_Expand,conversationtranscript_Filter,conversationtranscript_Fixed,conversationtranscript_Result,conversationtranscript_FormattedResult>;
}
interface WebEntitiesRelated {
  conversationtranscripts: WebMappingRelated<conversationtranscript_RelatedOne,conversationtranscript_RelatedMany>;
}
interface WebEntitiesCUDA {
  conversationtranscripts: WebMappingCUDA<conversationtranscript_Create,conversationtranscript_Update,conversationtranscript_Select>;
}
