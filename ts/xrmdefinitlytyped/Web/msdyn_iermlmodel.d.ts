interface msdyn_iermlmodel_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_iermlmodelid?: string | null;
  msdyn_iermlmodelstatus?: msdyn_iermlmodelstatus | null;
  msdyn_iermlmodeltrainingstatus?: msdyn_iermlmodeltrainingstatus | null;
  msdyn_name?: string | null;
  msdyn_trainingconfiguration?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_wizarddata?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_iermlmodel_statecode | null;
  statuscode?: msdyn_iermlmodel_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iermlmodel_Relationships {
  msdyn_iermlmodel_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iermlmodel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iermlmodel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iermlmodel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iermlmodel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iermlmodel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iermlmodel_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iermlmodel_SyncErrors?: SyncError_Result[] | null;
  msdyn_iermlmodel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_iermltraining_iermlmodel?: msdyn_iermltraining_Result[] | null;
}
interface msdyn_iermlmodel extends msdyn_iermlmodel_Base, msdyn_iermlmodel_Relationships {
  msdyn_aimodelid_bind$msdyn_aimodels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iermlmodel_Create extends msdyn_iermlmodel {
}
interface msdyn_iermlmodel_Update extends msdyn_iermlmodel {
}
interface msdyn_iermlmodel_Select {
  componentidunique: WebAttribute<msdyn_iermlmodel_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_iermlmodel_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_iermlmodel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iermlmodel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iermlmodel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iermlmodel_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_iermlmodel_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_iermlmodel_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iermlmodel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iermlmodel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iermlmodel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aimodelid_guid: WebAttribute<msdyn_iermlmodel_Select, { msdyn_aimodelid_guid: string | null }, { msdyn_aimodelid_formatted?: string }>;
  msdyn_iermlmodelid: WebAttribute<msdyn_iermlmodel_Select, { msdyn_iermlmodelid: string | null }, {  }>;
  msdyn_iermlmodelstatus: WebAttribute<msdyn_iermlmodel_Select, { msdyn_iermlmodelstatus: msdyn_iermlmodelstatus | null }, { msdyn_iermlmodelstatus_formatted?: string }>;
  msdyn_iermlmodeltrainingstatus: WebAttribute<msdyn_iermlmodel_Select, { msdyn_iermlmodeltrainingstatus: msdyn_iermlmodeltrainingstatus | null }, { msdyn_iermlmodeltrainingstatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_iermlmodel_Select, { msdyn_name: string | null }, {  }>;
  msdyn_trainingconfiguration: WebAttribute<msdyn_iermlmodel_Select, { msdyn_trainingconfiguration: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_iermlmodel_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_wizarddata: WebAttribute<msdyn_iermlmodel_Select, { msdyn_wizarddata: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iermlmodel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_iermlmodel_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iermlmodel_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iermlmodel_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iermlmodel_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iermlmodel_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_iermlmodel_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_iermlmodel_Select, { statecode: msdyn_iermlmodel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iermlmodel_Select, { statuscode: msdyn_iermlmodel_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_iermlmodel_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iermlmodel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iermlmodel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iermlmodel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iermlmodel_Filter {
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
  msdyn_iermlmodelid: XQW.Guid;
  msdyn_iermlmodelstatus: msdyn_iermlmodelstatus;
  msdyn_iermlmodeltrainingstatus: msdyn_iermlmodeltrainingstatus;
  msdyn_name: string;
  msdyn_trainingconfiguration: string;
  msdyn_uniquename: string;
  msdyn_wizarddata: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_iermlmodel_statecode;
  statuscode: msdyn_iermlmodel_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iermlmodel_Expand {
  createdby: WebExpand<msdyn_iermlmodel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iermlmodel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iermlmodel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iermlmodel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_aimodelid: WebExpand<msdyn_iermlmodel_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_aimodelid: msdyn_AIModel_Result }>;
  msdyn_iermlmodel_AsyncOperations: WebExpand<msdyn_iermlmodel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iermlmodel_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iermlmodel_BulkDeleteFailures: WebExpand<msdyn_iermlmodel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iermlmodel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iermlmodel_DuplicateBaseRecord: WebExpand<msdyn_iermlmodel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iermlmodel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iermlmodel_DuplicateMatchingRecord: WebExpand<msdyn_iermlmodel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iermlmodel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iermlmodel_MailboxTrackingFolders: WebExpand<msdyn_iermlmodel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iermlmodel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iermlmodel_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iermlmodel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iermlmodel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iermlmodel_ProcessSession: WebExpand<msdyn_iermlmodel_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iermlmodel_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iermlmodel_SyncErrors: WebExpand<msdyn_iermlmodel_Expand, SyncError_Select, SyncError_Filter, { msdyn_iermlmodel_SyncErrors: SyncError_Result[] }>;
  msdyn_iermlmodel_UserEntityInstanceDatas: WebExpand<msdyn_iermlmodel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iermlmodel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_iermltraining_iermlmodel: WebExpand<msdyn_iermlmodel_Expand, msdyn_iermltraining_Select, msdyn_iermltraining_Filter, { msdyn_iermltraining_iermlmodel: msdyn_iermltraining_Result[] }>;
  ownerid: WebExpand<msdyn_iermlmodel_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iermlmodel_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iermlmodel_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iermlmodel_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iermlmodel_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aimodelid_formatted?: string;
  msdyn_iermlmodelstatus_formatted?: string;
  msdyn_iermlmodeltrainingstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iermlmodel_Result extends msdyn_iermlmodel_Base, msdyn_iermlmodel_Relationships {
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
interface msdyn_iermlmodel_RelatedOne {
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
interface msdyn_iermlmodel_RelatedMany {
  msdyn_iermlmodel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iermlmodel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iermlmodel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iermlmodel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iermlmodel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iermlmodel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iermlmodel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iermlmodel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iermlmodel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_iermltraining_iermlmodel: WebMappingRetrieve<msdyn_iermltraining_Select,msdyn_iermltraining_Expand,msdyn_iermltraining_Filter,msdyn_iermltraining_Fixed,msdyn_iermltraining_Result,msdyn_iermltraining_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iermlmodels: WebMappingRetrieve<msdyn_iermlmodel_Select,msdyn_iermlmodel_Expand,msdyn_iermlmodel_Filter,msdyn_iermlmodel_Fixed,msdyn_iermlmodel_Result,msdyn_iermlmodel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iermlmodels: WebMappingRelated<msdyn_iermlmodel_RelatedOne,msdyn_iermlmodel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iermlmodels: WebMappingCUDA<msdyn_iermlmodel_Create,msdyn_iermlmodel_Update,msdyn_iermlmodel_Select>;
}
