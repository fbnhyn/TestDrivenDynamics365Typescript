interface solutioncomponentconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  fileformat?: solutioncomponentconfiguration_fileformat | null;
  filescope?: solutioncomponentconfiguration_filescope | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  isdisplayable?: boolean | null;
  ismanaged?: boolean | null;
  issoftdeleteenabled?: boolean | null;
  keepactivecustomizationafterconversion?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutioncomponentconfigurationid?: string | null;
  solutionid?: string | null;
  statecode?: solutioncomponentconfiguration_statecode | null;
  statuscode?: solutioncomponentconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface solutioncomponentconfiguration_Relationships {
  EntityId?: Entity_Result | null;
  solutioncomponentconfig_solutioncomponentattrconfig?: solutioncomponentattributeconfiguration_Result[] | null;
  solutioncomponentconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  solutioncomponentconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  solutioncomponentconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  solutioncomponentconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  solutioncomponentconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  solutioncomponentconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  solutioncomponentconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  solutioncomponentconfiguration_SyncErrors?: SyncError_Result[] | null;
  solutioncomponentconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface solutioncomponentconfiguration extends solutioncomponentconfiguration_Base, solutioncomponentconfiguration_Relationships {
}
interface solutioncomponentconfiguration_Create extends solutioncomponentconfiguration {
  EntityId_bind$entities?: string | null;
}
interface solutioncomponentconfiguration_Update extends solutioncomponentconfiguration {
}
interface solutioncomponentconfiguration_Select {
  componentidunique: WebAttribute<solutioncomponentconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<solutioncomponentconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<solutioncomponentconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<solutioncomponentconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<solutioncomponentconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entityid_guid: WebAttribute<solutioncomponentconfiguration_Select, { entityid_guid: string | null }, { entityid_formatted?: string }>;
  fileformat: WebAttribute<solutioncomponentconfiguration_Select, { fileformat: solutioncomponentconfiguration_fileformat | null }, { fileformat_formatted?: string }>;
  filescope: WebAttribute<solutioncomponentconfiguration_Select, { filescope: solutioncomponentconfiguration_filescope | null }, { filescope_formatted?: string }>;
  importsequencenumber: WebAttribute<solutioncomponentconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<solutioncomponentconfiguration_Select, { iscustomizable: any | null }, {  }>;
  isdisplayable: WebAttribute<solutioncomponentconfiguration_Select, { isdisplayable: boolean | null }, {  }>;
  ismanaged: WebAttribute<solutioncomponentconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  issoftdeleteenabled: WebAttribute<solutioncomponentconfiguration_Select, { issoftdeleteenabled: boolean | null }, {  }>;
  keepactivecustomizationafterconversion: WebAttribute<solutioncomponentconfiguration_Select, { keepactivecustomizationafterconversion: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<solutioncomponentconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<solutioncomponentconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<solutioncomponentconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<solutioncomponentconfiguration_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<solutioncomponentconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<solutioncomponentconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<solutioncomponentconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutioncomponentconfigurationid: WebAttribute<solutioncomponentconfiguration_Select, { solutioncomponentconfigurationid: string | null }, {  }>;
  solutionid: WebAttribute<solutioncomponentconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<solutioncomponentconfiguration_Select, { statecode: solutioncomponentconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<solutioncomponentconfiguration_Select, { statuscode: solutioncomponentconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<solutioncomponentconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<solutioncomponentconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<solutioncomponentconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<solutioncomponentconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface solutioncomponentconfiguration_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entityid_guid: XQW.Guid;
  fileformat: solutioncomponentconfiguration_fileformat;
  filescope: solutioncomponentconfiguration_filescope;
  importsequencenumber: number;
  iscustomizable: any;
  isdisplayable: boolean;
  ismanaged: boolean;
  issoftdeleteenabled: boolean;
  keepactivecustomizationafterconversion: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutioncomponentconfigurationid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: solutioncomponentconfiguration_statecode;
  statuscode: solutioncomponentconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface solutioncomponentconfiguration_Expand {
  EntityId: WebExpand<solutioncomponentconfiguration_Expand, Entity_Select, Entity_Filter, { EntityId: Entity_Result }>;
  createdby: WebExpand<solutioncomponentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<solutioncomponentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<solutioncomponentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<solutioncomponentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<solutioncomponentconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  solutioncomponentconfig_solutioncomponentattrconfig: WebExpand<solutioncomponentconfiguration_Expand, solutioncomponentattributeconfiguration_Select, solutioncomponentattributeconfiguration_Filter, { solutioncomponentconfig_solutioncomponentattrconfig: solutioncomponentattributeconfiguration_Result[] }>;
  solutioncomponentconfiguration_AsyncOperations: WebExpand<solutioncomponentconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { solutioncomponentconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  solutioncomponentconfiguration_BulkDeleteFailures: WebExpand<solutioncomponentconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { solutioncomponentconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  solutioncomponentconfiguration_DuplicateBaseRecord: WebExpand<solutioncomponentconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { solutioncomponentconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  solutioncomponentconfiguration_DuplicateMatchingRecord: WebExpand<solutioncomponentconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { solutioncomponentconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  solutioncomponentconfiguration_MailboxTrackingFolders: WebExpand<solutioncomponentconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { solutioncomponentconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  solutioncomponentconfiguration_PrincipalObjectAttributeAccesses: WebExpand<solutioncomponentconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { solutioncomponentconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  solutioncomponentconfiguration_ProcessSession: WebExpand<solutioncomponentconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { solutioncomponentconfiguration_ProcessSession: ProcessSession_Result[] }>;
  solutioncomponentconfiguration_SyncErrors: WebExpand<solutioncomponentconfiguration_Expand, SyncError_Select, SyncError_Filter, { solutioncomponentconfiguration_SyncErrors: SyncError_Result[] }>;
  solutioncomponentconfiguration_UserEntityInstanceDatas: WebExpand<solutioncomponentconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { solutioncomponentconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface solutioncomponentconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entityid_formatted?: string;
  fileformat_formatted?: string;
  filescope_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface solutioncomponentconfiguration_Result extends solutioncomponentconfiguration_Base, solutioncomponentconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  entityid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface solutioncomponentconfiguration_RelatedOne {
  EntityId: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface solutioncomponentconfiguration_RelatedMany {
  solutioncomponentconfig_solutioncomponentattrconfig: WebMappingRetrieve<solutioncomponentattributeconfiguration_Select,solutioncomponentattributeconfiguration_Expand,solutioncomponentattributeconfiguration_Filter,solutioncomponentattributeconfiguration_Fixed,solutioncomponentattributeconfiguration_Result,solutioncomponentattributeconfiguration_FormattedResult>;
  solutioncomponentconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  solutioncomponentconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  solutioncomponentconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  solutioncomponentconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  solutioncomponentconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  solutioncomponentconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  solutioncomponentconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  solutioncomponentconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  solutioncomponentconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  solutioncomponentconfigurations: WebMappingRetrieve<solutioncomponentconfiguration_Select,solutioncomponentconfiguration_Expand,solutioncomponentconfiguration_Filter,solutioncomponentconfiguration_Fixed,solutioncomponentconfiguration_Result,solutioncomponentconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  solutioncomponentconfigurations: WebMappingRelated<solutioncomponentconfiguration_RelatedOne,solutioncomponentconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  solutioncomponentconfigurations: WebMappingCUDA<solutioncomponentconfiguration_Create,solutioncomponentconfiguration_Update,solutioncomponentconfiguration_Select>;
}
