interface datalakeworkspace_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  containerendpoint?: string | null;
  createdon?: Date | null;
  datalakeworkspace_uniquename?: string | null;
  datalakeworkspaceid?: string | null;
  importsequencenumber?: number | null;
  iscustomercapacity?: boolean | null;
  iscustomizable?: any | null;
  isdeepcopyenabled?: boolean | null;
  ismanaged?: boolean | null;
  isprivate?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  owningappid?: string | null;
  path?: string | null;
  solutionid?: string | null;
  statecode?: datalakeworkspace_statecode | null;
  statuscode?: datalakeworkspace_statuscode | null;
  supportingsolutionid?: string | null;
  tenantid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  whitelistedappid?: string | null;
}
interface datalakeworkspace_Relationships {
  datalakeworkspace_AsyncOperations?: AsyncOperation_Result[] | null;
  datalakeworkspace_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  datalakeworkspace_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  datalakeworkspace_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  datalakeworkspace_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  datalakeworkspace_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  datalakeworkspace_ProcessSession?: ProcessSession_Result[] | null;
  datalakeworkspace_SyncErrors?: SyncError_Result[] | null;
  datalakeworkspace_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  datalakeworkspace_workspacepermission?: datalakeworkspacepermission_Result[] | null;
}
interface datalakeworkspace extends datalakeworkspace_Base, datalakeworkspace_Relationships {
}
interface datalakeworkspace_Create extends datalakeworkspace {
}
interface datalakeworkspace_Update extends datalakeworkspace {
}
interface datalakeworkspace_Select {
  componentidunique: WebAttribute<datalakeworkspace_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<datalakeworkspace_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  containerendpoint: WebAttribute<datalakeworkspace_Select, { containerendpoint: string | null }, {  }>;
  createdby_guid: WebAttribute<datalakeworkspace_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<datalakeworkspace_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<datalakeworkspace_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datalakeworkspace_uniquename: WebAttribute<datalakeworkspace_Select, { datalakeworkspace_uniquename: string | null }, {  }>;
  datalakeworkspaceid: WebAttribute<datalakeworkspace_Select, { datalakeworkspaceid: string | null }, {  }>;
  importsequencenumber: WebAttribute<datalakeworkspace_Select, { importsequencenumber: number | null }, {  }>;
  iscustomercapacity: WebAttribute<datalakeworkspace_Select, { iscustomercapacity: boolean | null }, {  }>;
  iscustomizable: WebAttribute<datalakeworkspace_Select, { iscustomizable: any | null }, {  }>;
  isdeepcopyenabled: WebAttribute<datalakeworkspace_Select, { isdeepcopyenabled: boolean | null }, {  }>;
  ismanaged: WebAttribute<datalakeworkspace_Select, { ismanaged: boolean | null }, {  }>;
  isprivate: WebAttribute<datalakeworkspace_Select, { isprivate: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<datalakeworkspace_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<datalakeworkspace_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<datalakeworkspace_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<datalakeworkspace_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<datalakeworkspace_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<datalakeworkspace_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<datalakeworkspace_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  owningappid: WebAttribute<datalakeworkspace_Select, { owningappid: string | null }, {  }>;
  path: WebAttribute<datalakeworkspace_Select, { path: string | null }, {  }>;
  solutionid: WebAttribute<datalakeworkspace_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<datalakeworkspace_Select, { statecode: datalakeworkspace_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<datalakeworkspace_Select, { statuscode: datalakeworkspace_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<datalakeworkspace_Select, { supportingsolutionid: string | null }, {  }>;
  tenantid: WebAttribute<datalakeworkspace_Select, { tenantid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<datalakeworkspace_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<datalakeworkspace_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<datalakeworkspace_Select, { versionnumber: number | null }, {  }>;
  whitelistedappid: WebAttribute<datalakeworkspace_Select, { whitelistedappid: string | null }, {  }>;
}
interface datalakeworkspace_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  containerendpoint: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datalakeworkspace_uniquename: string;
  datalakeworkspaceid: XQW.Guid;
  importsequencenumber: number;
  iscustomercapacity: boolean;
  iscustomizable: any;
  isdeepcopyenabled: boolean;
  ismanaged: boolean;
  isprivate: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  owningappid: XQW.Guid;
  path: string;
  solutionid: XQW.Guid;
  statecode: datalakeworkspace_statecode;
  statuscode: datalakeworkspace_statuscode;
  supportingsolutionid: XQW.Guid;
  tenantid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
  whitelistedappid: XQW.Guid;
}
interface datalakeworkspace_Expand {
  createdby: WebExpand<datalakeworkspace_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<datalakeworkspace_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  datalakeworkspace_AsyncOperations: WebExpand<datalakeworkspace_Expand, AsyncOperation_Select, AsyncOperation_Filter, { datalakeworkspace_AsyncOperations: AsyncOperation_Result[] }>;
  datalakeworkspace_BulkDeleteFailures: WebExpand<datalakeworkspace_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { datalakeworkspace_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  datalakeworkspace_DuplicateBaseRecord: WebExpand<datalakeworkspace_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { datalakeworkspace_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  datalakeworkspace_DuplicateMatchingRecord: WebExpand<datalakeworkspace_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { datalakeworkspace_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  datalakeworkspace_MailboxTrackingFolders: WebExpand<datalakeworkspace_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { datalakeworkspace_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  datalakeworkspace_PrincipalObjectAttributeAccesses: WebExpand<datalakeworkspace_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { datalakeworkspace_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  datalakeworkspace_ProcessSession: WebExpand<datalakeworkspace_Expand, ProcessSession_Select, ProcessSession_Filter, { datalakeworkspace_ProcessSession: ProcessSession_Result[] }>;
  datalakeworkspace_SyncErrors: WebExpand<datalakeworkspace_Expand, SyncError_Select, SyncError_Filter, { datalakeworkspace_SyncErrors: SyncError_Result[] }>;
  datalakeworkspace_UserEntityInstanceDatas: WebExpand<datalakeworkspace_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { datalakeworkspace_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  datalakeworkspace_workspacepermission: WebExpand<datalakeworkspace_Expand, datalakeworkspacepermission_Select, datalakeworkspacepermission_Filter, { datalakeworkspace_workspacepermission: datalakeworkspacepermission_Result[] }>;
  modifiedby: WebExpand<datalakeworkspace_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<datalakeworkspace_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<datalakeworkspace_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface datalakeworkspace_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface datalakeworkspace_Result extends datalakeworkspace_Base, datalakeworkspace_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface datalakeworkspace_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface datalakeworkspace_RelatedMany {
  datalakeworkspace_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  datalakeworkspace_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  datalakeworkspace_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  datalakeworkspace_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  datalakeworkspace_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  datalakeworkspace_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  datalakeworkspace_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  datalakeworkspace_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  datalakeworkspace_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  datalakeworkspace_workspacepermission: WebMappingRetrieve<datalakeworkspacepermission_Select,datalakeworkspacepermission_Expand,datalakeworkspacepermission_Filter,datalakeworkspacepermission_Fixed,datalakeworkspacepermission_Result,datalakeworkspacepermission_FormattedResult>;
}
interface WebEntitiesRetrieve {
  datalakeworkspaces: WebMappingRetrieve<datalakeworkspace_Select,datalakeworkspace_Expand,datalakeworkspace_Filter,datalakeworkspace_Fixed,datalakeworkspace_Result,datalakeworkspace_FormattedResult>;
}
interface WebEntitiesRelated {
  datalakeworkspaces: WebMappingRelated<datalakeworkspace_RelatedOne,datalakeworkspace_RelatedMany>;
}
interface WebEntitiesCUDA {
  datalakeworkspaces: WebMappingCUDA<datalakeworkspace_Create,datalakeworkspace_Update,datalakeworkspace_Select>;
}
