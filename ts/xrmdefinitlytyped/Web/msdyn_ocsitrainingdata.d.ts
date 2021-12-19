interface msdyn_ocsitrainingdata_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_approvedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocsitrainingdataid?: string | null;
  msdyn_ocsitrainingdatastatus?: msdyn_ocsitrainingdatastatus | null;
  msdyn_phrase?: string | null;
  msdyn_skillidscsv?: string | null;
  msdyn_skillscsv?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsitrainingdata_statecode | null;
  statuscode?: msdyn_ocsitrainingdata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsitrainingdata_Relationships {
  msdyn_ocsitdskill_ocsitrainingdataid?: msdyn_ocsitdskill_Result[] | null;
  msdyn_ocsitrainingdata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsitrainingdata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsitrainingdata_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsitrainingdata_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsitrainingdata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsitrainingdata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsitrainingdata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsitrainingdata_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsitrainingdata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsitrainingdata extends msdyn_ocsitrainingdata_Base, msdyn_ocsitrainingdata_Relationships {
  msdyn_approvedby_bind$systemusers?: string | null;
  msdyn_ocsitdimportconfigid_bind$msdyn_ocsitdimportconfigs?: string | null;
  msdyn_ocskillidentmlmodelid_bind$msdyn_ocskillidentmlmodels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsitrainingdata_Create extends msdyn_ocsitrainingdata {
}
interface msdyn_ocsitrainingdata_Update extends msdyn_ocsitrainingdata {
}
interface msdyn_ocsitrainingdata_Select {
  createdby_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsitrainingdata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsitrainingdata_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsitrainingdata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_approvedby_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_approvedby_guid: string | null }, { msdyn_approvedby_formatted?: string }>;
  msdyn_approvedon: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_approvedon: Date | null }, { msdyn_approvedon_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsitdimportconfigid_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_ocsitdimportconfigid_guid: string | null }, { msdyn_ocsitdimportconfigid_formatted?: string }>;
  msdyn_ocsitrainingdataid: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_ocsitrainingdataid: string | null }, {  }>;
  msdyn_ocsitrainingdatastatus: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_ocsitrainingdatastatus: msdyn_ocsitrainingdatastatus | null }, { msdyn_ocsitrainingdatastatus_formatted?: string }>;
  msdyn_ocskillidentmlmodelid_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_ocskillidentmlmodelid_guid: string | null }, { msdyn_ocskillidentmlmodelid_formatted?: string }>;
  msdyn_phrase: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_phrase: string | null }, {  }>;
  msdyn_skillidscsv: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_skillidscsv: string | null }, {  }>;
  msdyn_skillscsv: WebAttribute<msdyn_ocsitrainingdata_Select, { msdyn_skillscsv: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocsitrainingdata_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsitrainingdata_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsitrainingdata_Select, { statecode: msdyn_ocsitrainingdata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsitrainingdata_Select, { statuscode: msdyn_ocsitrainingdata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsitrainingdata_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsitrainingdata_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsitrainingdata_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsitrainingdata_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_approvedby_guid: XQW.Guid;
  msdyn_approvedon: Date;
  msdyn_name: string;
  msdyn_ocsitdimportconfigid_guid: XQW.Guid;
  msdyn_ocsitrainingdataid: XQW.Guid;
  msdyn_ocsitrainingdatastatus: msdyn_ocsitrainingdatastatus;
  msdyn_ocskillidentmlmodelid_guid: XQW.Guid;
  msdyn_phrase: string;
  msdyn_skillidscsv: string;
  msdyn_skillscsv: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsitrainingdata_statecode;
  statuscode: msdyn_ocsitrainingdata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsitrainingdata_Expand {
  createdby: WebExpand<msdyn_ocsitrainingdata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsitrainingdata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsitrainingdata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsitrainingdata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_approvedby: WebExpand<msdyn_ocsitrainingdata_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_approvedby: SystemUser_Result }>;
  msdyn_ocsitdimportconfigid: WebExpand<msdyn_ocsitrainingdata_Expand, msdyn_ocsitdimportconfig_Select, msdyn_ocsitdimportconfig_Filter, { msdyn_ocsitdimportconfigid: msdyn_ocsitdimportconfig_Result }>;
  msdyn_ocsitdskill_ocsitrainingdataid: WebExpand<msdyn_ocsitrainingdata_Expand, msdyn_ocsitdskill_Select, msdyn_ocsitdskill_Filter, { msdyn_ocsitdskill_ocsitrainingdataid: msdyn_ocsitdskill_Result[] }>;
  msdyn_ocsitrainingdata_AsyncOperations: WebExpand<msdyn_ocsitrainingdata_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsitrainingdata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsitrainingdata_BulkDeleteFailures: WebExpand<msdyn_ocsitrainingdata_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsitrainingdata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsitrainingdata_DuplicateBaseRecord: WebExpand<msdyn_ocsitrainingdata_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsitrainingdata_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsitrainingdata_DuplicateMatchingRecord: WebExpand<msdyn_ocsitrainingdata_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsitrainingdata_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsitrainingdata_MailboxTrackingFolders: WebExpand<msdyn_ocsitrainingdata_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsitrainingdata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsitrainingdata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsitrainingdata_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsitrainingdata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsitrainingdata_ProcessSession: WebExpand<msdyn_ocsitrainingdata_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsitrainingdata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsitrainingdata_SyncErrors: WebExpand<msdyn_ocsitrainingdata_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsitrainingdata_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsitrainingdata_UserEntityInstanceDatas: WebExpand<msdyn_ocsitrainingdata_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsitrainingdata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocskillidentmlmodelid: WebExpand<msdyn_ocsitrainingdata_Expand, msdyn_ocskillidentmlmodel_Select, msdyn_ocskillidentmlmodel_Filter, { msdyn_ocskillidentmlmodelid: msdyn_ocskillidentmlmodel_Result }>;
  ownerid: WebExpand<msdyn_ocsitrainingdata_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsitrainingdata_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsitrainingdata_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsitrainingdata_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsitrainingdata_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_approvedby_formatted?: string;
  msdyn_approvedon_formatted?: string;
  msdyn_ocsitdimportconfigid_formatted?: string;
  msdyn_ocsitrainingdatastatus_formatted?: string;
  msdyn_ocskillidentmlmodelid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsitrainingdata_Result extends msdyn_ocsitrainingdata_Base, msdyn_ocsitrainingdata_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_approvedby_guid: string | null;
  msdyn_ocsitdimportconfigid_guid: string | null;
  msdyn_ocskillidentmlmodelid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocsitrainingdata_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_approvedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ocsitdimportconfigid: WebMappingRetrieve<msdyn_ocsitdimportconfig_Select,msdyn_ocsitdimportconfig_Expand,msdyn_ocsitdimportconfig_Filter,msdyn_ocsitdimportconfig_Fixed,msdyn_ocsitdimportconfig_Result,msdyn_ocsitdimportconfig_FormattedResult>;
  msdyn_ocskillidentmlmodelid: WebMappingRetrieve<msdyn_ocskillidentmlmodel_Select,msdyn_ocskillidentmlmodel_Expand,msdyn_ocskillidentmlmodel_Filter,msdyn_ocskillidentmlmodel_Fixed,msdyn_ocskillidentmlmodel_Result,msdyn_ocskillidentmlmodel_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsitrainingdata_RelatedMany {
  msdyn_ocsitdskill_ocsitrainingdataid: WebMappingRetrieve<msdyn_ocsitdskill_Select,msdyn_ocsitdskill_Expand,msdyn_ocsitdskill_Filter,msdyn_ocsitdskill_Fixed,msdyn_ocsitdskill_Result,msdyn_ocsitdskill_FormattedResult>;
  msdyn_ocsitrainingdata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsitrainingdata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsitrainingdata_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsitrainingdata_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsitrainingdata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsitrainingdata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsitrainingdata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsitrainingdata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsitrainingdata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsitrainingdatas: WebMappingRetrieve<msdyn_ocsitrainingdata_Select,msdyn_ocsitrainingdata_Expand,msdyn_ocsitrainingdata_Filter,msdyn_ocsitrainingdata_Fixed,msdyn_ocsitrainingdata_Result,msdyn_ocsitrainingdata_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsitrainingdatas: WebMappingRelated<msdyn_ocsitrainingdata_RelatedOne,msdyn_ocsitrainingdata_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsitrainingdatas: WebMappingCUDA<msdyn_ocsitrainingdata_Create,msdyn_ocsitrainingdata_Update,msdyn_ocsitrainingdata_Select>;
}
