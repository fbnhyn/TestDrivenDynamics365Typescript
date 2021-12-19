interface msdyn_applicationextension_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_appconfig_relationshipname?: string | null;
  msdyn_applicationextensionid?: string | null;
  msdyn_name?: string | null;
  msdyn_relationship_cardinality?: msdyn_relationship_cardinality | null;
  msdyn_type?: msdyn_extensiontype | null;
  msdyn_uniquename?: string | null;
  msdyn_webresource_url?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_applicationextension_statecode | null;
  statuscode?: msdyn_applicationextension_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_applicationextension_Relationships {
  msdyn_appconfiguration_applicationextension?: msdyn_appconfiguration_Result[] | null;
  msdyn_applicationextension_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_applicationextension_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_applicationextension_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_applicationextension_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_applicationextension_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_applicationextension_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_applicationextension_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_applicationextension_SyncErrors?: SyncError_Result[] | null;
  msdyn_applicationextension_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_applicationextension extends msdyn_applicationextension_Base, msdyn_applicationextension_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_applicationextension_Create extends msdyn_applicationextension {
}
interface msdyn_applicationextension_Update extends msdyn_applicationextension {
}
interface msdyn_applicationextension_Select {
  componentidunique: WebAttribute<msdyn_applicationextension_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_applicationextension_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_applicationextension_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_applicationextension_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_applicationextension_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_applicationextension_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_applicationextension_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_applicationextension_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_applicationextension_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_applicationextension_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_applicationextension_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_appconfig_relationshipname: WebAttribute<msdyn_applicationextension_Select, { msdyn_appconfig_relationshipname: string | null }, {  }>;
  msdyn_applicationextensionid: WebAttribute<msdyn_applicationextension_Select, { msdyn_applicationextensionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_applicationextension_Select, { msdyn_name: string | null }, {  }>;
  msdyn_relationship_cardinality: WebAttribute<msdyn_applicationextension_Select, { msdyn_relationship_cardinality: msdyn_relationship_cardinality | null }, { msdyn_relationship_cardinality_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_applicationextension_Select, { msdyn_type: msdyn_extensiontype | null }, { msdyn_type_formatted?: string }>;
  msdyn_uniquename: WebAttribute<msdyn_applicationextension_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_webresource_url: WebAttribute<msdyn_applicationextension_Select, { msdyn_webresource_url: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_applicationextension_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_applicationextension_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_applicationextension_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_applicationextension_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_applicationextension_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_applicationextension_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_applicationextension_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_applicationextension_Select, { statecode: msdyn_applicationextension_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_applicationextension_Select, { statuscode: msdyn_applicationextension_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_applicationextension_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_applicationextension_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_applicationextension_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_applicationextension_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_applicationextension_Filter {
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
  msdyn_appconfig_relationshipname: string;
  msdyn_applicationextensionid: XQW.Guid;
  msdyn_name: string;
  msdyn_relationship_cardinality: msdyn_relationship_cardinality;
  msdyn_type: msdyn_extensiontype;
  msdyn_uniquename: string;
  msdyn_webresource_url: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_applicationextension_statecode;
  statuscode: msdyn_applicationextension_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_applicationextension_Expand {
  createdby: WebExpand<msdyn_applicationextension_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_applicationextension_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_applicationextension_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_applicationextension_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_appconfiguration_applicationextension: WebExpand<msdyn_applicationextension_Expand, msdyn_appconfiguration_Select, msdyn_appconfiguration_Filter, { msdyn_appconfiguration_applicationextension: msdyn_appconfiguration_Result[] }>;
  msdyn_applicationextension_AsyncOperations: WebExpand<msdyn_applicationextension_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_applicationextension_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_applicationextension_BulkDeleteFailures: WebExpand<msdyn_applicationextension_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_applicationextension_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_applicationextension_DuplicateBaseRecord: WebExpand<msdyn_applicationextension_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_applicationextension_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_applicationextension_DuplicateMatchingRecord: WebExpand<msdyn_applicationextension_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_applicationextension_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_applicationextension_MailboxTrackingFolders: WebExpand<msdyn_applicationextension_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_applicationextension_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_applicationextension_PrincipalObjectAttributeAccesses: WebExpand<msdyn_applicationextension_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_applicationextension_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_applicationextension_ProcessSession: WebExpand<msdyn_applicationextension_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_applicationextension_ProcessSession: ProcessSession_Result[] }>;
  msdyn_applicationextension_SyncErrors: WebExpand<msdyn_applicationextension_Expand, SyncError_Select, SyncError_Filter, { msdyn_applicationextension_SyncErrors: SyncError_Result[] }>;
  msdyn_applicationextension_UserEntityInstanceDatas: WebExpand<msdyn_applicationextension_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_applicationextension_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_applicationextension_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_applicationextension_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_applicationextension_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_applicationextension_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_applicationextension_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_relationship_cardinality_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_applicationextension_Result extends msdyn_applicationextension_Base, msdyn_applicationextension_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_applicationextension_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_applicationextension_RelatedMany {
  msdyn_appconfiguration_applicationextension: WebMappingRetrieve<msdyn_appconfiguration_Select,msdyn_appconfiguration_Expand,msdyn_appconfiguration_Filter,msdyn_appconfiguration_Fixed,msdyn_appconfiguration_Result,msdyn_appconfiguration_FormattedResult>;
  msdyn_applicationextension_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_applicationextension_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_applicationextension_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_applicationextension_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_applicationextension_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_applicationextension_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_applicationextension_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_applicationextension_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_applicationextension_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_applicationextensions: WebMappingRetrieve<msdyn_applicationextension_Select,msdyn_applicationextension_Expand,msdyn_applicationextension_Filter,msdyn_applicationextension_Fixed,msdyn_applicationextension_Result,msdyn_applicationextension_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_applicationextensions: WebMappingRelated<msdyn_applicationextension_RelatedOne,msdyn_applicationextension_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_applicationextensions: WebMappingCUDA<msdyn_applicationextension_Create,msdyn_applicationextension_Update,msdyn_applicationextension_Select>;
}
