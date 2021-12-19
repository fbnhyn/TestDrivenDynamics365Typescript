interface msdyn_ocsitdimportconfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_cdsdataloadconfig?: string | null;
  msdyn_importconfigtype?: msdyn_importconfigtype | null;
  msdyn_loadstatus?: msdyn_ocsitdimportconfig_loadstatus | null;
  msdyn_name?: string | null;
  msdyn_ocsitdimportconfigid?: string | null;
  msdyn_recordsimported?: number | null;
  msdyn_recordsskipped?: number | null;
  msdyn_totalrecordstoimport?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsitdimportconfig_statecode | null;
  statuscode?: msdyn_ocsitdimportconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsitdimportconfig_Relationships {
  msdyn_ocsitdimportconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsitdimportconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsitdimportconfig_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsitdimportconfig_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsitdimportconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsitdimportconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsitdimportconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsitdimportconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_ocsitrainingdata_ocsitdimportconfig?: msdyn_ocsitrainingdata_Result[] | null;
}
interface msdyn_ocsitdimportconfig extends msdyn_ocsitdimportconfig_Base, msdyn_ocsitdimportconfig_Relationships {
  msdyn_ocskillidentmlmodelid_bind$msdyn_ocskillidentmlmodels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsitdimportconfig_Create extends msdyn_ocsitdimportconfig {
}
interface msdyn_ocsitdimportconfig_Update extends msdyn_ocsitdimportconfig {
}
interface msdyn_ocsitdimportconfig_Select {
  createdby_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsitdimportconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsitdimportconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsitdimportconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_cdsdataloadconfig: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_cdsdataloadconfig: string | null }, {  }>;
  msdyn_importconfigtype: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_importconfigtype: msdyn_importconfigtype | null }, { msdyn_importconfigtype_formatted?: string }>;
  msdyn_loadstatus: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_loadstatus: msdyn_ocsitdimportconfig_loadstatus | null }, { msdyn_loadstatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsitdimportconfigid: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_ocsitdimportconfigid: string | null }, {  }>;
  msdyn_ocskillidentmlmodelid_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_ocskillidentmlmodelid_guid: string | null }, { msdyn_ocskillidentmlmodelid_formatted?: string }>;
  msdyn_recordsimported: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_recordsimported: number | null }, {  }>;
  msdyn_recordsskipped: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_recordsskipped: number | null }, {  }>;
  msdyn_totalrecordstoimport: WebAttribute<msdyn_ocsitdimportconfig_Select, { msdyn_totalrecordstoimport: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocsitdimportconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsitdimportconfig_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsitdimportconfig_Select, { statecode: msdyn_ocsitdimportconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsitdimportconfig_Select, { statuscode: msdyn_ocsitdimportconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsitdimportconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsitdimportconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsitdimportconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsitdimportconfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_cdsdataloadconfig: string;
  msdyn_importconfigtype: msdyn_importconfigtype;
  msdyn_loadstatus: msdyn_ocsitdimportconfig_loadstatus;
  msdyn_name: string;
  msdyn_ocsitdimportconfigid: XQW.Guid;
  msdyn_ocskillidentmlmodelid_guid: XQW.Guid;
  msdyn_recordsimported: number;
  msdyn_recordsskipped: number;
  msdyn_totalrecordstoimport: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsitdimportconfig_statecode;
  statuscode: msdyn_ocsitdimportconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsitdimportconfig_Expand {
  createdby: WebExpand<msdyn_ocsitdimportconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsitdimportconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsitdimportconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsitdimportconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocsitdimportconfig_AsyncOperations: WebExpand<msdyn_ocsitdimportconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsitdimportconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsitdimportconfig_BulkDeleteFailures: WebExpand<msdyn_ocsitdimportconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsitdimportconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsitdimportconfig_DuplicateBaseRecord: WebExpand<msdyn_ocsitdimportconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsitdimportconfig_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsitdimportconfig_DuplicateMatchingRecord: WebExpand<msdyn_ocsitdimportconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsitdimportconfig_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsitdimportconfig_MailboxTrackingFolders: WebExpand<msdyn_ocsitdimportconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsitdimportconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsitdimportconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsitdimportconfig_ProcessSession: WebExpand<msdyn_ocsitdimportconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsitdimportconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsitdimportconfig_SyncErrors: WebExpand<msdyn_ocsitdimportconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsitdimportconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsitdimportconfig_UserEntityInstanceDatas: WebExpand<msdyn_ocsitdimportconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsitdimportconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocsitrainingdata_ocsitdimportconfig: WebExpand<msdyn_ocsitdimportconfig_Expand, msdyn_ocsitrainingdata_Select, msdyn_ocsitrainingdata_Filter, { msdyn_ocsitrainingdata_ocsitdimportconfig: msdyn_ocsitrainingdata_Result[] }>;
  msdyn_ocskillidentmlmodelid: WebExpand<msdyn_ocsitdimportconfig_Expand, msdyn_ocskillidentmlmodel_Select, msdyn_ocskillidentmlmodel_Filter, { msdyn_ocskillidentmlmodelid: msdyn_ocskillidentmlmodel_Result }>;
  ownerid: WebExpand<msdyn_ocsitdimportconfig_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsitdimportconfig_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsitdimportconfig_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsitdimportconfig_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsitdimportconfig_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_importconfigtype_formatted?: string;
  msdyn_loadstatus_formatted?: string;
  msdyn_ocskillidentmlmodelid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsitdimportconfig_Result extends msdyn_ocsitdimportconfig_Base, msdyn_ocsitdimportconfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_ocskillidentmlmodelid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocsitdimportconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ocskillidentmlmodelid: WebMappingRetrieve<msdyn_ocskillidentmlmodel_Select,msdyn_ocskillidentmlmodel_Expand,msdyn_ocskillidentmlmodel_Filter,msdyn_ocskillidentmlmodel_Fixed,msdyn_ocskillidentmlmodel_Result,msdyn_ocskillidentmlmodel_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsitdimportconfig_RelatedMany {
  msdyn_ocsitdimportconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsitdimportconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsitdimportconfig_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsitdimportconfig_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsitdimportconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsitdimportconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsitdimportconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsitdimportconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_ocsitrainingdata_ocsitdimportconfig: WebMappingRetrieve<msdyn_ocsitrainingdata_Select,msdyn_ocsitrainingdata_Expand,msdyn_ocsitrainingdata_Filter,msdyn_ocsitrainingdata_Fixed,msdyn_ocsitrainingdata_Result,msdyn_ocsitrainingdata_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsitdimportconfigs: WebMappingRetrieve<msdyn_ocsitdimportconfig_Select,msdyn_ocsitdimportconfig_Expand,msdyn_ocsitdimportconfig_Filter,msdyn_ocsitdimportconfig_Fixed,msdyn_ocsitdimportconfig_Result,msdyn_ocsitdimportconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsitdimportconfigs: WebMappingRelated<msdyn_ocsitdimportconfig_RelatedOne,msdyn_ocsitdimportconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsitdimportconfigs: WebMappingCUDA<msdyn_ocsitdimportconfig_Create,msdyn_ocsitdimportconfig_Update,msdyn_ocsitdimportconfig_Select>;
}
