interface msdyn_pmrecording_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_iterationid?: string | null;
  msdyn_lasterrors?: string | null;
  msdyn_name?: string | null;
  msdyn_normalizedrecording?: string | null;
  msdyn_pmrecordingid?: string | null;
  msdyn_publishingstatus?: msdyn_pmrecording_msdyn_publishingstatus | null;
  msdyn_type?: msdyn_pmrecording_msdyn_type | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_pmrecording_statecode | null;
  statuscode?: msdyn_pmrecording_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_pmrecording_Relationships {
  msdyn_pmrecording_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_pmrecording_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_pmrecording_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_pmrecording_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_pmrecording_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_pmrecording_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_pmrecording_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_pmrecording_SyncErrors?: SyncError_Result[] | null;
  msdyn_pmrecording_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_pmrecording extends msdyn_pmrecording_Base, msdyn_pmrecording_Relationships {
  msdyn_parenttask_bind$msdyn_pminferredtasks?: string | null;
  msdyn_sourceworkflow_bind$workflows?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_pmrecording_Create extends msdyn_pmrecording {
}
interface msdyn_pmrecording_Update extends msdyn_pmrecording {
}
interface msdyn_pmrecording_Select {
  componentidunique: WebAttribute<msdyn_pmrecording_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_pmrecording_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_pmrecording_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_pmrecording_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_pmrecording_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_pmrecording_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_pmrecording_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_pmrecording_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_pmrecording_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_pmrecording_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_pmrecording_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_iterationid: WebAttribute<msdyn_pmrecording_Select, { msdyn_iterationid: string | null }, {  }>;
  msdyn_lasterrors: WebAttribute<msdyn_pmrecording_Select, { msdyn_lasterrors: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_pmrecording_Select, { msdyn_name: string | null }, {  }>;
  msdyn_normalizedrecording: WebAttribute<msdyn_pmrecording_Select, { msdyn_normalizedrecording: string | null }, {  }>;
  msdyn_parenttask_guid: WebAttribute<msdyn_pmrecording_Select, { msdyn_parenttask_guid: string | null }, { msdyn_parenttask_formatted?: string }>;
  msdyn_pmrecordingid: WebAttribute<msdyn_pmrecording_Select, { msdyn_pmrecordingid: string | null }, {  }>;
  msdyn_publishingstatus: WebAttribute<msdyn_pmrecording_Select, { msdyn_publishingstatus: msdyn_pmrecording_msdyn_publishingstatus | null }, { msdyn_publishingstatus_formatted?: string }>;
  msdyn_sourceworkflow_guid: WebAttribute<msdyn_pmrecording_Select, { msdyn_sourceworkflow_guid: string | null }, { msdyn_sourceworkflow_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_pmrecording_Select, { msdyn_type: msdyn_pmrecording_msdyn_type | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_pmrecording_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_pmrecording_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_pmrecording_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_pmrecording_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_pmrecording_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_pmrecording_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_pmrecording_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_pmrecording_Select, { statecode: msdyn_pmrecording_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_pmrecording_Select, { statuscode: msdyn_pmrecording_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_pmrecording_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_pmrecording_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_pmrecording_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_pmrecording_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_pmrecording_Filter {
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
  msdyn_iterationid: string;
  msdyn_lasterrors: string;
  msdyn_name: string;
  msdyn_normalizedrecording: string;
  msdyn_parenttask_guid: XQW.Guid;
  msdyn_pmrecordingid: XQW.Guid;
  msdyn_publishingstatus: msdyn_pmrecording_msdyn_publishingstatus;
  msdyn_sourceworkflow_guid: XQW.Guid;
  msdyn_type: msdyn_pmrecording_msdyn_type;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_pmrecording_statecode;
  statuscode: msdyn_pmrecording_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_pmrecording_Expand {
  createdby: WebExpand<msdyn_pmrecording_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_pmrecording_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_pmrecording_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_pmrecording_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_parenttask: WebExpand<msdyn_pmrecording_Expand, msdyn_pminferredtask_Select, msdyn_pminferredtask_Filter, { msdyn_parenttask: msdyn_pminferredtask_Result }>;
  msdyn_pmrecording_AsyncOperations: WebExpand<msdyn_pmrecording_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_pmrecording_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_pmrecording_BulkDeleteFailures: WebExpand<msdyn_pmrecording_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_pmrecording_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_pmrecording_DuplicateBaseRecord: WebExpand<msdyn_pmrecording_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_pmrecording_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_pmrecording_DuplicateMatchingRecord: WebExpand<msdyn_pmrecording_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_pmrecording_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_pmrecording_MailboxTrackingFolders: WebExpand<msdyn_pmrecording_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_pmrecording_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_pmrecording_PrincipalObjectAttributeAccesses: WebExpand<msdyn_pmrecording_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_pmrecording_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_pmrecording_ProcessSession: WebExpand<msdyn_pmrecording_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_pmrecording_ProcessSession: ProcessSession_Result[] }>;
  msdyn_pmrecording_SyncErrors: WebExpand<msdyn_pmrecording_Expand, SyncError_Select, SyncError_Filter, { msdyn_pmrecording_SyncErrors: SyncError_Result[] }>;
  msdyn_pmrecording_UserEntityInstanceDatas: WebExpand<msdyn_pmrecording_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_pmrecording_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_sourceworkflow: WebExpand<msdyn_pmrecording_Expand, Workflow_Select, Workflow_Filter, { msdyn_sourceworkflow: Workflow_Result }>;
  ownerid: WebExpand<msdyn_pmrecording_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_pmrecording_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_pmrecording_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_pmrecording_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_pmrecording_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_parenttask_formatted?: string;
  msdyn_publishingstatus_formatted?: string;
  msdyn_sourceworkflow_formatted?: string;
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
interface msdyn_pmrecording_Result extends msdyn_pmrecording_Base, msdyn_pmrecording_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_parenttask_guid: string | null;
  msdyn_sourceworkflow_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_pmrecording_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_parenttask: WebMappingRetrieve<msdyn_pminferredtask_Select,msdyn_pminferredtask_Expand,msdyn_pminferredtask_Filter,msdyn_pminferredtask_Fixed,msdyn_pminferredtask_Result,msdyn_pminferredtask_FormattedResult>;
  msdyn_sourceworkflow: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_pmrecording_RelatedMany {
  msdyn_pmrecording_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_pmrecording_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_pmrecording_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_pmrecording_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_pmrecording_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_pmrecording_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_pmrecording_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_pmrecording_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_pmrecording_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_pmrecordings: WebMappingRetrieve<msdyn_pmrecording_Select,msdyn_pmrecording_Expand,msdyn_pmrecording_Filter,msdyn_pmrecording_Fixed,msdyn_pmrecording_Result,msdyn_pmrecording_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_pmrecordings: WebMappingRelated<msdyn_pmrecording_RelatedOne,msdyn_pmrecording_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_pmrecordings: WebMappingCUDA<msdyn_pmrecording_Create,msdyn_pmrecording_Update,msdyn_pmrecording_Select>;
}
