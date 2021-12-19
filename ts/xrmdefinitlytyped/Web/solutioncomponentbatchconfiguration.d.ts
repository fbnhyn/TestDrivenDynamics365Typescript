interface solutioncomponentbatchconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  operation?: solutioncomponentbatchconfiguration_operation | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutioncomponentbatchconfigurationid?: string | null;
  solutionid?: string | null;
  statecode?: solutioncomponentbatchconfiguration_statecode | null;
  statuscode?: solutioncomponentbatchconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface solutioncomponentbatchconfiguration_Relationships {
  PrimaryEntity?: Entity_Result | null;
  RelatedEntity?: Entity_Result | null;
  solutioncomponentbatchconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  solutioncomponentbatchconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  solutioncomponentbatchconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  solutioncomponentbatchconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  solutioncomponentbatchconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  solutioncomponentbatchconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  solutioncomponentbatchconfiguration_SyncErrors?: SyncError_Result[] | null;
  solutioncomponentbatchconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface solutioncomponentbatchconfiguration extends solutioncomponentbatchconfiguration_Base, solutioncomponentbatchconfiguration_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface solutioncomponentbatchconfiguration_Create extends solutioncomponentbatchconfiguration {
  PrimaryEntity_bind$entities?: string | null;
  RelatedEntity_bind$entities?: string | null;
}
interface solutioncomponentbatchconfiguration_Update extends solutioncomponentbatchconfiguration {
}
interface solutioncomponentbatchconfiguration_Select {
  componentidunique: WebAttribute<solutioncomponentbatchconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<solutioncomponentbatchconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<solutioncomponentbatchconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<solutioncomponentbatchconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<solutioncomponentbatchconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<solutioncomponentbatchconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<solutioncomponentbatchconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<solutioncomponentbatchconfiguration_Select, { name: string | null }, {  }>;
  operation: WebAttribute<solutioncomponentbatchconfiguration_Select, { operation: solutioncomponentbatchconfiguration_operation | null }, { operation_formatted?: string }>;
  overriddencreatedon: WebAttribute<solutioncomponentbatchconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<solutioncomponentbatchconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  primaryentity_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { primaryentity_guid: string | null }, { primaryentity_formatted?: string }>;
  relatedentity_guid: WebAttribute<solutioncomponentbatchconfiguration_Select, { relatedentity_guid: string | null }, { relatedentity_formatted?: string }>;
  solutioncomponentbatchconfigurationid: WebAttribute<solutioncomponentbatchconfiguration_Select, { solutioncomponentbatchconfigurationid: string | null }, {  }>;
  solutionid: WebAttribute<solutioncomponentbatchconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<solutioncomponentbatchconfiguration_Select, { statecode: solutioncomponentbatchconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<solutioncomponentbatchconfiguration_Select, { statuscode: solutioncomponentbatchconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<solutioncomponentbatchconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<solutioncomponentbatchconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<solutioncomponentbatchconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<solutioncomponentbatchconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface solutioncomponentbatchconfiguration_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  operation: solutioncomponentbatchconfiguration_operation;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  primaryentity_guid: XQW.Guid;
  relatedentity_guid: XQW.Guid;
  solutioncomponentbatchconfigurationid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: solutioncomponentbatchconfiguration_statecode;
  statuscode: solutioncomponentbatchconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface solutioncomponentbatchconfiguration_Expand {
  PrimaryEntity: WebExpand<solutioncomponentbatchconfiguration_Expand, Entity_Select, Entity_Filter, { PrimaryEntity: Entity_Result }>;
  RelatedEntity: WebExpand<solutioncomponentbatchconfiguration_Expand, Entity_Select, Entity_Filter, { RelatedEntity: Entity_Result }>;
  createdby: WebExpand<solutioncomponentbatchconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<solutioncomponentbatchconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<solutioncomponentbatchconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<solutioncomponentbatchconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<solutioncomponentbatchconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<solutioncomponentbatchconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<solutioncomponentbatchconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<solutioncomponentbatchconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  solutioncomponentbatchconfiguration_AsyncOperations: WebExpand<solutioncomponentbatchconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { solutioncomponentbatchconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  solutioncomponentbatchconfiguration_BulkDeleteFailures: WebExpand<solutioncomponentbatchconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { solutioncomponentbatchconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  solutioncomponentbatchconfiguration_DuplicateBaseRecord: WebExpand<solutioncomponentbatchconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { solutioncomponentbatchconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  solutioncomponentbatchconfiguration_DuplicateMatchingRecord: WebExpand<solutioncomponentbatchconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { solutioncomponentbatchconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  solutioncomponentbatchconfiguration_MailboxTrackingFolders: WebExpand<solutioncomponentbatchconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { solutioncomponentbatchconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses: WebExpand<solutioncomponentbatchconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  solutioncomponentbatchconfiguration_ProcessSession: WebExpand<solutioncomponentbatchconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { solutioncomponentbatchconfiguration_ProcessSession: ProcessSession_Result[] }>;
  solutioncomponentbatchconfiguration_SyncErrors: WebExpand<solutioncomponentbatchconfiguration_Expand, SyncError_Select, SyncError_Filter, { solutioncomponentbatchconfiguration_SyncErrors: SyncError_Result[] }>;
  solutioncomponentbatchconfiguration_UserEntityInstanceDatas: WebExpand<solutioncomponentbatchconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { solutioncomponentbatchconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface solutioncomponentbatchconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  operation_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  primaryentity_formatted?: string;
  relatedentity_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface solutioncomponentbatchconfiguration_Result extends solutioncomponentbatchconfiguration_Base, solutioncomponentbatchconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  primaryentity_guid: string | null;
  relatedentity_guid: string | null;
}
interface solutioncomponentbatchconfiguration_RelatedOne {
  PrimaryEntity: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
  RelatedEntity: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface solutioncomponentbatchconfiguration_RelatedMany {
  solutioncomponentbatchconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  solutioncomponentbatchconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  solutioncomponentbatchconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  solutioncomponentbatchconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  solutioncomponentbatchconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  solutioncomponentbatchconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  solutioncomponentbatchconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  solutioncomponentbatchconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  solutioncomponentbatchconfigurations: WebMappingRetrieve<solutioncomponentbatchconfiguration_Select,solutioncomponentbatchconfiguration_Expand,solutioncomponentbatchconfiguration_Filter,solutioncomponentbatchconfiguration_Fixed,solutioncomponentbatchconfiguration_Result,solutioncomponentbatchconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  solutioncomponentbatchconfigurations: WebMappingRelated<solutioncomponentbatchconfiguration_RelatedOne,solutioncomponentbatchconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  solutioncomponentbatchconfigurations: WebMappingCUDA<solutioncomponentbatchconfiguration_Create,solutioncomponentbatchconfiguration_Update,solutioncomponentbatchconfiguration_Select>;
}
