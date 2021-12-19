interface listoperation_Base extends WebEntity {
  added?: number | null;
  batchinput?: string | null;
  createdon?: Date | null;
  errorcode?: number | null;
  errordescription?: string | null;
  importsequencenumber?: number | null;
  input?: string | null;
  listoperationid?: string | null;
  listoperationname?: string | null;
  listoperationprimaryname?: string | null;
  log?: string | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  processed?: number | null;
  statecode?: listoperation_statecode | null;
  statuscode?: listoperation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  type?: listoperation_type | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface listoperation_Relationships {
  ListId?: List_Result | null;
  listoperation_AsyncOperations?: AsyncOperation_Result[] | null;
  listoperation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  listoperation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  listoperation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  listoperation_ProcessSession?: ProcessSession_Result[] | null;
  listoperation_SyncErrors?: SyncError_Result[] | null;
  listoperation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface listoperation extends listoperation_Base, listoperation_Relationships {
  ListId_bind$lists?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface listoperation_Create extends listoperation {
}
interface listoperation_Update extends listoperation {
}
interface listoperation_Select {
  added: WebAttribute<listoperation_Select, { added: number | null }, {  }>;
  batchinput: WebAttribute<listoperation_Select, { batchinput: string | null }, {  }>;
  createdby_guid: WebAttribute<listoperation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<listoperation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<listoperation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  errorcode: WebAttribute<listoperation_Select, { errorcode: number | null }, {  }>;
  errordescription: WebAttribute<listoperation_Select, { errordescription: string | null }, {  }>;
  importsequencenumber: WebAttribute<listoperation_Select, { importsequencenumber: number | null }, {  }>;
  input: WebAttribute<listoperation_Select, { input: string | null }, {  }>;
  listid_guid: WebAttribute<listoperation_Select, { listid_guid: string | null }, { listid_formatted?: string }>;
  listoperationid: WebAttribute<listoperation_Select, { listoperationid: string | null }, {  }>;
  listoperationname: WebAttribute<listoperation_Select, { listoperationname: string | null }, {  }>;
  listoperationprimaryname: WebAttribute<listoperation_Select, { listoperationprimaryname: string | null }, {  }>;
  log: WebAttribute<listoperation_Select, { log: string | null }, {  }>;
  modifiedby_guid: WebAttribute<listoperation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<listoperation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<listoperation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<listoperation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<listoperation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<listoperation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<listoperation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<listoperation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processed: WebAttribute<listoperation_Select, { processed: number | null }, {  }>;
  statecode: WebAttribute<listoperation_Select, { statecode: listoperation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<listoperation_Select, { statuscode: listoperation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<listoperation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  type: WebAttribute<listoperation_Select, { type: listoperation_type | null }, { type_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<listoperation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<listoperation_Select, { versionnumber: number | null }, {  }>;
}
interface listoperation_Filter {
  added: number;
  batchinput: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  errorcode: number;
  errordescription: string;
  importsequencenumber: number;
  input: string;
  listid_guid: XQW.Guid;
  listoperationid: XQW.Guid;
  listoperationname: string;
  listoperationprimaryname: string;
  log: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processed: number;
  statecode: listoperation_statecode;
  statuscode: listoperation_statuscode;
  timezoneruleversionnumber: number;
  type: listoperation_type;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface listoperation_Expand {
  ListId: WebExpand<listoperation_Expand, List_Select, List_Filter, { ListId: List_Result }>;
  createdby: WebExpand<listoperation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<listoperation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  listoperation_AsyncOperations: WebExpand<listoperation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { listoperation_AsyncOperations: AsyncOperation_Result[] }>;
  listoperation_BulkDeleteFailures: WebExpand<listoperation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { listoperation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  listoperation_MailboxTrackingFolders: WebExpand<listoperation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { listoperation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  listoperation_PrincipalObjectAttributeAccesses: WebExpand<listoperation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { listoperation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  listoperation_ProcessSession: WebExpand<listoperation_Expand, ProcessSession_Select, ProcessSession_Filter, { listoperation_ProcessSession: ProcessSession_Result[] }>;
  listoperation_SyncErrors: WebExpand<listoperation_Expand, SyncError_Select, SyncError_Filter, { listoperation_SyncErrors: SyncError_Result[] }>;
  listoperation_UserEntityInstanceDatas: WebExpand<listoperation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { listoperation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<listoperation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<listoperation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<listoperation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<listoperation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<listoperation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<listoperation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface listoperation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  listid_formatted?: string;
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
  type_formatted?: string;
}
interface listoperation_Result extends listoperation_Base, listoperation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  listid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface listoperation_RelatedOne {
  ListId: WebMappingRetrieve<List_Select,List_Expand,List_Filter,List_Fixed,List_Result,List_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface listoperation_RelatedMany {
  listoperation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  listoperation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  listoperation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  listoperation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  listoperation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  listoperation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  listoperation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  listoperations: WebMappingRetrieve<listoperation_Select,listoperation_Expand,listoperation_Filter,listoperation_Fixed,listoperation_Result,listoperation_FormattedResult>;
}
interface WebEntitiesRelated {
  listoperations: WebMappingRelated<listoperation_RelatedOne,listoperation_RelatedMany>;
}
interface WebEntitiesCUDA {
  listoperations: WebMappingCUDA<listoperation_Create,listoperation_Update,listoperation_Select>;
}
