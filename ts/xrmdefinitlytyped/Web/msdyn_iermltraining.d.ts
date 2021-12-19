interface msdyn_iermltraining_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_errordetails?: string | null;
  msdyn_iermltrainingid?: string | null;
  msdyn_mltrainingstatus?: msdyn_mltrainingstatus | null;
  msdyn_name?: string | null;
  msdyn_publishedon?: Date | null;
  msdyn_trainedon?: Date | null;
  msdyn_trainingdatacount?: number | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_iermltraining_statecode | null;
  statuscode?: msdyn_iermltraining_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iermltraining_Relationships {
  msdyn_iermltraining_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iermltraining_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iermltraining_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iermltraining_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iermltraining_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iermltraining_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iermltraining_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iermltraining_SyncErrors?: SyncError_Result[] | null;
  msdyn_iermltraining_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_iermltraining extends msdyn_iermltraining_Base, msdyn_iermltraining_Relationships {
  msdyn_iermlmodelid_bind$msdyn_iermlmodels?: string | null;
  msdyn_publishaiconfiguration_bind$msdyn_aiconfigurations?: string | null;
  msdyn_trainaiconfiguration_bind$msdyn_aiconfigurations?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iermltraining_Create extends msdyn_iermltraining {
}
interface msdyn_iermltraining_Update extends msdyn_iermltraining {
}
interface msdyn_iermltraining_Select {
  componentidunique: WebAttribute<msdyn_iermltraining_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_iermltraining_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_iermltraining_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iermltraining_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iermltraining_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iermltraining_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_iermltraining_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_iermltraining_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iermltraining_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iermltraining_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iermltraining_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_errordetails: WebAttribute<msdyn_iermltraining_Select, { msdyn_errordetails: string | null }, {  }>;
  msdyn_iermlmodelid_guid: WebAttribute<msdyn_iermltraining_Select, { msdyn_iermlmodelid_guid: string | null }, { msdyn_iermlmodelid_formatted?: string }>;
  msdyn_iermltrainingid: WebAttribute<msdyn_iermltraining_Select, { msdyn_iermltrainingid: string | null }, {  }>;
  msdyn_mltrainingstatus: WebAttribute<msdyn_iermltraining_Select, { msdyn_mltrainingstatus: msdyn_mltrainingstatus | null }, { msdyn_mltrainingstatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_iermltraining_Select, { msdyn_name: string | null }, {  }>;
  msdyn_publishaiconfiguration_guid: WebAttribute<msdyn_iermltraining_Select, { msdyn_publishaiconfiguration_guid: string | null }, { msdyn_publishaiconfiguration_formatted?: string }>;
  msdyn_publishedon: WebAttribute<msdyn_iermltraining_Select, { msdyn_publishedon: Date | null }, { msdyn_publishedon_formatted?: string }>;
  msdyn_trainaiconfiguration_guid: WebAttribute<msdyn_iermltraining_Select, { msdyn_trainaiconfiguration_guid: string | null }, { msdyn_trainaiconfiguration_formatted?: string }>;
  msdyn_trainedon: WebAttribute<msdyn_iermltraining_Select, { msdyn_trainedon: Date | null }, { msdyn_trainedon_formatted?: string }>;
  msdyn_trainingdatacount: WebAttribute<msdyn_iermltraining_Select, { msdyn_trainingdatacount: number | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_iermltraining_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iermltraining_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_iermltraining_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iermltraining_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iermltraining_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iermltraining_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iermltraining_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_iermltraining_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_iermltraining_Select, { statecode: msdyn_iermltraining_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iermltraining_Select, { statuscode: msdyn_iermltraining_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_iermltraining_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iermltraining_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iermltraining_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iermltraining_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iermltraining_Filter {
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
  msdyn_errordetails: string;
  msdyn_iermlmodelid_guid: XQW.Guid;
  msdyn_iermltrainingid: XQW.Guid;
  msdyn_mltrainingstatus: msdyn_mltrainingstatus;
  msdyn_name: string;
  msdyn_publishaiconfiguration_guid: XQW.Guid;
  msdyn_publishedon: Date;
  msdyn_trainaiconfiguration_guid: XQW.Guid;
  msdyn_trainedon: Date;
  msdyn_trainingdatacount: number;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_iermltraining_statecode;
  statuscode: msdyn_iermltraining_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iermltraining_Expand {
  createdby: WebExpand<msdyn_iermltraining_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iermltraining_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iermltraining_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iermltraining_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_iermlmodelid: WebExpand<msdyn_iermltraining_Expand, msdyn_iermlmodel_Select, msdyn_iermlmodel_Filter, { msdyn_iermlmodelid: msdyn_iermlmodel_Result }>;
  msdyn_iermltraining_AsyncOperations: WebExpand<msdyn_iermltraining_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iermltraining_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iermltraining_BulkDeleteFailures: WebExpand<msdyn_iermltraining_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iermltraining_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iermltraining_DuplicateBaseRecord: WebExpand<msdyn_iermltraining_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iermltraining_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iermltraining_DuplicateMatchingRecord: WebExpand<msdyn_iermltraining_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iermltraining_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iermltraining_MailboxTrackingFolders: WebExpand<msdyn_iermltraining_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iermltraining_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iermltraining_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iermltraining_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iermltraining_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iermltraining_ProcessSession: WebExpand<msdyn_iermltraining_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iermltraining_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iermltraining_SyncErrors: WebExpand<msdyn_iermltraining_Expand, SyncError_Select, SyncError_Filter, { msdyn_iermltraining_SyncErrors: SyncError_Result[] }>;
  msdyn_iermltraining_UserEntityInstanceDatas: WebExpand<msdyn_iermltraining_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iermltraining_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_publishaiconfiguration: WebExpand<msdyn_iermltraining_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_publishaiconfiguration: msdyn_AIConfiguration_Result }>;
  msdyn_trainaiconfiguration: WebExpand<msdyn_iermltraining_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_trainaiconfiguration: msdyn_AIConfiguration_Result }>;
  ownerid: WebExpand<msdyn_iermltraining_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iermltraining_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iermltraining_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iermltraining_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iermltraining_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_iermlmodelid_formatted?: string;
  msdyn_mltrainingstatus_formatted?: string;
  msdyn_publishaiconfiguration_formatted?: string;
  msdyn_publishedon_formatted?: string;
  msdyn_trainaiconfiguration_formatted?: string;
  msdyn_trainedon_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iermltraining_Result extends msdyn_iermltraining_Base, msdyn_iermltraining_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_iermlmodelid_guid: string | null;
  msdyn_publishaiconfiguration_guid: string | null;
  msdyn_trainaiconfiguration_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iermltraining_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_iermlmodelid: WebMappingRetrieve<msdyn_iermlmodel_Select,msdyn_iermlmodel_Expand,msdyn_iermlmodel_Filter,msdyn_iermlmodel_Fixed,msdyn_iermlmodel_Result,msdyn_iermlmodel_FormattedResult>;
  msdyn_publishaiconfiguration: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  msdyn_trainaiconfiguration: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iermltraining_RelatedMany {
  msdyn_iermltraining_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iermltraining_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iermltraining_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iermltraining_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iermltraining_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iermltraining_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iermltraining_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iermltraining_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iermltraining_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iermltrainings: WebMappingRetrieve<msdyn_iermltraining_Select,msdyn_iermltraining_Expand,msdyn_iermltraining_Filter,msdyn_iermltraining_Fixed,msdyn_iermltraining_Result,msdyn_iermltraining_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iermltrainings: WebMappingRelated<msdyn_iermltraining_RelatedOne,msdyn_iermltraining_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iermltrainings: WebMappingCUDA<msdyn_iermltraining_Create,msdyn_iermltraining_Update,msdyn_iermltraining_Select>;
}
