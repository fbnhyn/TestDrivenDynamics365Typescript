interface solutioncomponentrelationshipconfiguration_Base extends WebEntity {
  addrelatedcomponents?: boolean | null;
  cascaderemovecomponents?: boolean | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  forceaddingmanagedrelatedcomponents?: boolean | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  primaryentitydependencytype?: solutioncomponentrelationshipconfiguration_primaryentitydependencytype | null;
  respectparentrootcomponentbehavior?: boolean | null;
  secondaryentitydependencytype?: solutioncomponentrelationshipconfiguration_secondaryentitydependencytype | null;
  solutioncomponentrelationshipconfigurationid?: string | null;
  solutionid?: string | null;
  statecode?: solutioncomponentrelationshipconfiguration_statecode | null;
  statuscode?: solutioncomponentrelationshipconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface solutioncomponentrelationshipconfiguration_Relationships {
  EntityRelationshipId?: EntityRelationship_Result | null;
  solutioncomponentrelationshipconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  solutioncomponentrelationshipconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  solutioncomponentrelationshipconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  solutioncomponentrelationshipconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  solutioncomponentrelationshipconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  solutioncomponentrelationshipconfiguration_SyncErrors?: SyncError_Result[] | null;
  solutioncomponentrelationshipconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface solutioncomponentrelationshipconfiguration extends solutioncomponentrelationshipconfiguration_Base, solutioncomponentrelationshipconfiguration_Relationships {
}
interface solutioncomponentrelationshipconfiguration_Create extends solutioncomponentrelationshipconfiguration {
  EntityRelationshipId_bind$entityrelationships?: string | null;
}
interface solutioncomponentrelationshipconfiguration_Update extends solutioncomponentrelationshipconfiguration {
}
interface solutioncomponentrelationshipconfiguration_Select {
  addrelatedcomponents: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { addrelatedcomponents: boolean | null }, {  }>;
  cascaderemovecomponents: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { cascaderemovecomponents: boolean | null }, {  }>;
  componentidunique: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entityrelationshipid_guid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { entityrelationshipid_guid: string | null }, { entityrelationshipid_formatted?: string }>;
  forceaddingmanagedrelatedcomponents: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { forceaddingmanagedrelatedcomponents: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  primaryentitydependencytype: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { primaryentitydependencytype: solutioncomponentrelationshipconfiguration_primaryentitydependencytype | null }, { primaryentitydependencytype_formatted?: string }>;
  respectparentrootcomponentbehavior: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { respectparentrootcomponentbehavior: boolean | null }, {  }>;
  secondaryentitydependencytype: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { secondaryentitydependencytype: solutioncomponentrelationshipconfiguration_secondaryentitydependencytype | null }, { secondaryentitydependencytype_formatted?: string }>;
  solutioncomponentrelationshipconfigurationid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { solutioncomponentrelationshipconfigurationid: string | null }, {  }>;
  solutionid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { statecode: solutioncomponentrelationshipconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { statuscode: solutioncomponentrelationshipconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<solutioncomponentrelationshipconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface solutioncomponentrelationshipconfiguration_Filter {
  addrelatedcomponents: boolean;
  cascaderemovecomponents: boolean;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entityrelationshipid_guid: XQW.Guid;
  forceaddingmanagedrelatedcomponents: boolean;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  primaryentitydependencytype: solutioncomponentrelationshipconfiguration_primaryentitydependencytype;
  respectparentrootcomponentbehavior: boolean;
  secondaryentitydependencytype: solutioncomponentrelationshipconfiguration_secondaryentitydependencytype;
  solutioncomponentrelationshipconfigurationid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: solutioncomponentrelationshipconfiguration_statecode;
  statuscode: solutioncomponentrelationshipconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface solutioncomponentrelationshipconfiguration_Expand {
  EntityRelationshipId: WebExpand<solutioncomponentrelationshipconfiguration_Expand, EntityRelationship_Select, EntityRelationship_Filter, { EntityRelationshipId: EntityRelationship_Result }>;
  createdby: WebExpand<solutioncomponentrelationshipconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<solutioncomponentrelationshipconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<solutioncomponentrelationshipconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<solutioncomponentrelationshipconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<solutioncomponentrelationshipconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  solutioncomponentrelationshipconfiguration_AsyncOperations: WebExpand<solutioncomponentrelationshipconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { solutioncomponentrelationshipconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  solutioncomponentrelationshipconfiguration_BulkDeleteFailures: WebExpand<solutioncomponentrelationshipconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { solutioncomponentrelationshipconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  solutioncomponentrelationshipconfiguration_DuplicateBaseRecord: WebExpand<solutioncomponentrelationshipconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { solutioncomponentrelationshipconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord: WebExpand<solutioncomponentrelationshipconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  solutioncomponentrelationshipconfiguration_MailboxTrackingFolders: WebExpand<solutioncomponentrelationshipconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { solutioncomponentrelationshipconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses: WebExpand<solutioncomponentrelationshipconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  solutioncomponentrelationshipconfiguration_ProcessSession: WebExpand<solutioncomponentrelationshipconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { solutioncomponentrelationshipconfiguration_ProcessSession: ProcessSession_Result[] }>;
  solutioncomponentrelationshipconfiguration_SyncErrors: WebExpand<solutioncomponentrelationshipconfiguration_Expand, SyncError_Select, SyncError_Filter, { solutioncomponentrelationshipconfiguration_SyncErrors: SyncError_Result[] }>;
  solutioncomponentrelationshipconfiguration_UserEntityInstanceDatas: WebExpand<solutioncomponentrelationshipconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { solutioncomponentrelationshipconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface solutioncomponentrelationshipconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entityrelationshipid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  primaryentitydependencytype_formatted?: string;
  secondaryentitydependencytype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface solutioncomponentrelationshipconfiguration_Result extends solutioncomponentrelationshipconfiguration_Base, solutioncomponentrelationshipconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  entityrelationshipid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface solutioncomponentrelationshipconfiguration_RelatedOne {
  EntityRelationshipId: WebMappingRetrieve<EntityRelationship_Select,EntityRelationship_Expand,EntityRelationship_Filter,EntityRelationship_Fixed,EntityRelationship_Result,EntityRelationship_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface solutioncomponentrelationshipconfiguration_RelatedMany {
  solutioncomponentrelationshipconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  solutioncomponentrelationshipconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  solutioncomponentrelationshipconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  solutioncomponentrelationshipconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  solutioncomponentrelationshipconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  solutioncomponentrelationshipconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  solutioncomponentrelationshipconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  solutioncomponentrelationshipconfigurations: WebMappingRetrieve<solutioncomponentrelationshipconfiguration_Select,solutioncomponentrelationshipconfiguration_Expand,solutioncomponentrelationshipconfiguration_Filter,solutioncomponentrelationshipconfiguration_Fixed,solutioncomponentrelationshipconfiguration_Result,solutioncomponentrelationshipconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  solutioncomponentrelationshipconfigurations: WebMappingRelated<solutioncomponentrelationshipconfiguration_RelatedOne,solutioncomponentrelationshipconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  solutioncomponentrelationshipconfigurations: WebMappingCUDA<solutioncomponentrelationshipconfiguration_Create,solutioncomponentrelationshipconfiguration_Update,solutioncomponentrelationshipconfiguration_Select>;
}
