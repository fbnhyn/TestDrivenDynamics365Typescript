interface msdyn_ocskillidentmlmodel_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocskillidentmlmodelid?: string | null;
  msdyn_ocskillidentmlmodelstatus?: msdyn_ocskillidentmlmodelstatus | null;
  msdyn_ocskillidentmlmodeltrainingstatus?: msdyn_ocskillidentmlmodeltrainingstatus | null;
  msdyn_trainingconfiguration?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_wizzarddata?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_ocskillidentmlmodel_statecode | null;
  statuscode?: msdyn_ocskillidentmlmodel_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocskillidentmlmodel_Relationships {
  msdyn_ocsimltraining_ocskillidentmlmodeli?: msdyn_ocsimltraining_Result[] | null;
  msdyn_ocsitdimportconfig_ocskillidentmlmo?: msdyn_ocsitdimportconfig_Result[] | null;
  msdyn_ocsitrainingdata_ocskillidentmlmode?: msdyn_ocsitrainingdata_Result[] | null;
  msdyn_ocskillidentmlmodel_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocskillidentmlmodel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocskillidentmlmodel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocskillidentmlmodel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocskillidentmlmodel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocskillidentmlmodel_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocskillidentmlmodel_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocskillidentmlmodel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocskillidentmlmodel extends msdyn_ocskillidentmlmodel_Base, msdyn_ocskillidentmlmodel_Relationships {
  msdyn_aimodelid_bind$msdyn_aimodels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocskillidentmlmodel_Create extends msdyn_ocskillidentmlmodel {
}
interface msdyn_ocskillidentmlmodel_Update extends msdyn_ocskillidentmlmodel {
}
interface msdyn_ocskillidentmlmodel_Select {
  componentidunique: WebAttribute<msdyn_ocskillidentmlmodel_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_ocskillidentmlmodel_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocskillidentmlmodel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocskillidentmlmodel_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_ocskillidentmlmodel_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_ocskillidentmlmodel_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocskillidentmlmodel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aimodelid_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { msdyn_aimodelid_guid: string | null }, { msdyn_aimodelid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocskillidentmlmodel_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocskillidentmlmodelid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { msdyn_ocskillidentmlmodelid: string | null }, {  }>;
  msdyn_ocskillidentmlmodelstatus: WebAttribute<msdyn_ocskillidentmlmodel_Select, { msdyn_ocskillidentmlmodelstatus: msdyn_ocskillidentmlmodelstatus | null }, { msdyn_ocskillidentmlmodelstatus_formatted?: string }>;
  msdyn_ocskillidentmlmodeltrainingstatus: WebAttribute<msdyn_ocskillidentmlmodel_Select, { msdyn_ocskillidentmlmodeltrainingstatus: msdyn_ocskillidentmlmodeltrainingstatus | null }, { msdyn_ocskillidentmlmodeltrainingstatus_formatted?: string }>;
  msdyn_trainingconfiguration: WebAttribute<msdyn_ocskillidentmlmodel_Select, { msdyn_trainingconfiguration: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_ocskillidentmlmodel_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_wizzarddata: WebAttribute<msdyn_ocskillidentmlmodel_Select, { msdyn_wizzarddata: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocskillidentmlmodel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_ocskillidentmlmodel_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_ocskillidentmlmodel_Select, { statecode: msdyn_ocskillidentmlmodel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocskillidentmlmodel_Select, { statuscode: msdyn_ocskillidentmlmodel_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_ocskillidentmlmodel_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocskillidentmlmodel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocskillidentmlmodel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocskillidentmlmodel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocskillidentmlmodel_Filter {
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
  msdyn_aimodelid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocskillidentmlmodelid: XQW.Guid;
  msdyn_ocskillidentmlmodelstatus: msdyn_ocskillidentmlmodelstatus;
  msdyn_ocskillidentmlmodeltrainingstatus: msdyn_ocskillidentmlmodeltrainingstatus;
  msdyn_trainingconfiguration: string;
  msdyn_uniquename: string;
  msdyn_wizzarddata: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_ocskillidentmlmodel_statecode;
  statuscode: msdyn_ocskillidentmlmodel_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocskillidentmlmodel_Expand {
  createdby: WebExpand<msdyn_ocskillidentmlmodel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocskillidentmlmodel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocskillidentmlmodel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocskillidentmlmodel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_aimodelid: WebExpand<msdyn_ocskillidentmlmodel_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_aimodelid: msdyn_AIModel_Result }>;
  msdyn_ocsimltraining_ocskillidentmlmodeli: WebExpand<msdyn_ocskillidentmlmodel_Expand, msdyn_ocsimltraining_Select, msdyn_ocsimltraining_Filter, { msdyn_ocsimltraining_ocskillidentmlmodeli: msdyn_ocsimltraining_Result[] }>;
  msdyn_ocsitdimportconfig_ocskillidentmlmo: WebExpand<msdyn_ocskillidentmlmodel_Expand, msdyn_ocsitdimportconfig_Select, msdyn_ocsitdimportconfig_Filter, { msdyn_ocsitdimportconfig_ocskillidentmlmo: msdyn_ocsitdimportconfig_Result[] }>;
  msdyn_ocsitrainingdata_ocskillidentmlmode: WebExpand<msdyn_ocskillidentmlmodel_Expand, msdyn_ocsitrainingdata_Select, msdyn_ocsitrainingdata_Filter, { msdyn_ocsitrainingdata_ocskillidentmlmode: msdyn_ocsitrainingdata_Result[] }>;
  msdyn_ocskillidentmlmodel_AsyncOperations: WebExpand<msdyn_ocskillidentmlmodel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocskillidentmlmodel_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocskillidentmlmodel_BulkDeleteFailures: WebExpand<msdyn_ocskillidentmlmodel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocskillidentmlmodel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocskillidentmlmodel_DuplicateBaseRecord: WebExpand<msdyn_ocskillidentmlmodel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocskillidentmlmodel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocskillidentmlmodel_DuplicateMatchingRecord: WebExpand<msdyn_ocskillidentmlmodel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocskillidentmlmodel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocskillidentmlmodel_MailboxTrackingFolders: WebExpand<msdyn_ocskillidentmlmodel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocskillidentmlmodel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocskillidentmlmodel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocskillidentmlmodel_ProcessSession: WebExpand<msdyn_ocskillidentmlmodel_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocskillidentmlmodel_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocskillidentmlmodel_SyncErrors: WebExpand<msdyn_ocskillidentmlmodel_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocskillidentmlmodel_SyncErrors: SyncError_Result[] }>;
  msdyn_ocskillidentmlmodel_UserEntityInstanceDatas: WebExpand<msdyn_ocskillidentmlmodel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocskillidentmlmodel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocskillidentmlmodel_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocskillidentmlmodel_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocskillidentmlmodel_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocskillidentmlmodel_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocskillidentmlmodel_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aimodelid_formatted?: string;
  msdyn_ocskillidentmlmodelstatus_formatted?: string;
  msdyn_ocskillidentmlmodeltrainingstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocskillidentmlmodel_Result extends msdyn_ocskillidentmlmodel_Base, msdyn_ocskillidentmlmodel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aimodelid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocskillidentmlmodel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_aimodelid: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocskillidentmlmodel_RelatedMany {
  msdyn_ocsimltraining_ocskillidentmlmodeli: WebMappingRetrieve<msdyn_ocsimltraining_Select,msdyn_ocsimltraining_Expand,msdyn_ocsimltraining_Filter,msdyn_ocsimltraining_Fixed,msdyn_ocsimltraining_Result,msdyn_ocsimltraining_FormattedResult>;
  msdyn_ocsitdimportconfig_ocskillidentmlmo: WebMappingRetrieve<msdyn_ocsitdimportconfig_Select,msdyn_ocsitdimportconfig_Expand,msdyn_ocsitdimportconfig_Filter,msdyn_ocsitdimportconfig_Fixed,msdyn_ocsitdimportconfig_Result,msdyn_ocsitdimportconfig_FormattedResult>;
  msdyn_ocsitrainingdata_ocskillidentmlmode: WebMappingRetrieve<msdyn_ocsitrainingdata_Select,msdyn_ocsitrainingdata_Expand,msdyn_ocsitrainingdata_Filter,msdyn_ocsitrainingdata_Fixed,msdyn_ocsitrainingdata_Result,msdyn_ocsitrainingdata_FormattedResult>;
  msdyn_ocskillidentmlmodel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocskillidentmlmodel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocskillidentmlmodel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocskillidentmlmodel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocskillidentmlmodel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocskillidentmlmodel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocskillidentmlmodel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocskillidentmlmodel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocskillidentmlmodels: WebMappingRetrieve<msdyn_ocskillidentmlmodel_Select,msdyn_ocskillidentmlmodel_Expand,msdyn_ocskillidentmlmodel_Filter,msdyn_ocskillidentmlmodel_Fixed,msdyn_ocskillidentmlmodel_Result,msdyn_ocskillidentmlmodel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocskillidentmlmodels: WebMappingRelated<msdyn_ocskillidentmlmodel_RelatedOne,msdyn_ocskillidentmlmodel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocskillidentmlmodels: WebMappingCUDA<msdyn_ocskillidentmlmodel_Create,msdyn_ocskillidentmlmodel_Update,msdyn_ocskillidentmlmodel_Select>;
}
