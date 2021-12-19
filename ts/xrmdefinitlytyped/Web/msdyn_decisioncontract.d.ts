interface msdyn_decisioncontract_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_contractdefinition?: string | null;
  msdyn_decisioncontractid?: string | null;
  msdyn_name?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_decisioncontract_statecode | null;
  statuscode?: msdyn_decisioncontract_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_decisioncontract_Relationships {
  msdyn_decisioncontract_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_decisioncontract_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_decisioncontract_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_decisioncontract_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_decisioncontract_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_decisioncontract_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_decisioncontract_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_decisioncontract_SyncErrors?: SyncError_Result[] | null;
  msdyn_decisioncontract_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_decisioncontract_msdyn_decisionruleset_inputcontractId?: msdyn_decisionruleset_Result[] | null;
  msdyn_decisioncontract_msdyn_decisionruleset_outputcontractid?: msdyn_decisionruleset_Result[] | null;
  msdyn_liveworkstream_decisioncontractid?: msdyn_liveworkstream_Result[] | null;
  msdyn_queue_decisioncontractid?: Queue_Result[] | null;
}
interface msdyn_decisioncontract extends msdyn_decisioncontract_Base, msdyn_decisioncontract_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_decisioncontract_Create extends msdyn_decisioncontract {
}
interface msdyn_decisioncontract_Update extends msdyn_decisioncontract {
}
interface msdyn_decisioncontract_Select {
  componentidunique: WebAttribute<msdyn_decisioncontract_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_decisioncontract_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_decisioncontract_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_decisioncontract_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_decisioncontract_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_decisioncontract_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_decisioncontract_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_decisioncontract_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_decisioncontract_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_decisioncontract_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_decisioncontract_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_contractdefinition: WebAttribute<msdyn_decisioncontract_Select, { msdyn_contractdefinition: string | null }, {  }>;
  msdyn_decisioncontractid: WebAttribute<msdyn_decisioncontract_Select, { msdyn_decisioncontractid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_decisioncontract_Select, { msdyn_name: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_decisioncontract_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_decisioncontract_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_decisioncontract_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_decisioncontract_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_decisioncontract_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_decisioncontract_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_decisioncontract_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_decisioncontract_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_decisioncontract_Select, { statecode: msdyn_decisioncontract_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_decisioncontract_Select, { statuscode: msdyn_decisioncontract_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_decisioncontract_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_decisioncontract_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_decisioncontract_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_decisioncontract_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_decisioncontract_Filter {
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
  msdyn_contractdefinition: string;
  msdyn_decisioncontractid: XQW.Guid;
  msdyn_name: string;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_decisioncontract_statecode;
  statuscode: msdyn_decisioncontract_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_decisioncontract_Expand {
  createdby: WebExpand<msdyn_decisioncontract_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_decisioncontract_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_decisioncontract_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_decisioncontract_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_decisioncontract_AsyncOperations: WebExpand<msdyn_decisioncontract_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_decisioncontract_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_decisioncontract_BulkDeleteFailures: WebExpand<msdyn_decisioncontract_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_decisioncontract_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_decisioncontract_DuplicateBaseRecord: WebExpand<msdyn_decisioncontract_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_decisioncontract_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_decisioncontract_DuplicateMatchingRecord: WebExpand<msdyn_decisioncontract_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_decisioncontract_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_decisioncontract_MailboxTrackingFolders: WebExpand<msdyn_decisioncontract_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_decisioncontract_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_decisioncontract_PrincipalObjectAttributeAccesses: WebExpand<msdyn_decisioncontract_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_decisioncontract_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_decisioncontract_ProcessSession: WebExpand<msdyn_decisioncontract_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_decisioncontract_ProcessSession: ProcessSession_Result[] }>;
  msdyn_decisioncontract_SyncErrors: WebExpand<msdyn_decisioncontract_Expand, SyncError_Select, SyncError_Filter, { msdyn_decisioncontract_SyncErrors: SyncError_Result[] }>;
  msdyn_decisioncontract_UserEntityInstanceDatas: WebExpand<msdyn_decisioncontract_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_decisioncontract_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_decisioncontract_msdyn_decisionruleset_inputcontractId: WebExpand<msdyn_decisioncontract_Expand, msdyn_decisionruleset_Select, msdyn_decisionruleset_Filter, { msdyn_decisioncontract_msdyn_decisionruleset_inputcontractId: msdyn_decisionruleset_Result[] }>;
  msdyn_decisioncontract_msdyn_decisionruleset_outputcontractid: WebExpand<msdyn_decisioncontract_Expand, msdyn_decisionruleset_Select, msdyn_decisionruleset_Filter, { msdyn_decisioncontract_msdyn_decisionruleset_outputcontractid: msdyn_decisionruleset_Result[] }>;
  msdyn_liveworkstream_decisioncontractid: WebExpand<msdyn_decisioncontract_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstream_decisioncontractid: msdyn_liveworkstream_Result[] }>;
  msdyn_queue_decisioncontractid: WebExpand<msdyn_decisioncontract_Expand, Queue_Select, Queue_Filter, { msdyn_queue_decisioncontractid: Queue_Result[] }>;
  ownerid: WebExpand<msdyn_decisioncontract_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_decisioncontract_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_decisioncontract_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_decisioncontract_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_decisioncontract_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_decisioncontract_Result extends msdyn_decisioncontract_Base, msdyn_decisioncontract_Relationships {
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
interface msdyn_decisioncontract_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_decisioncontract_RelatedMany {
  msdyn_decisioncontract_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_decisioncontract_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_decisioncontract_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_decisioncontract_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_decisioncontract_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_decisioncontract_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_decisioncontract_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_decisioncontract_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_decisioncontract_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_decisioncontract_msdyn_decisionruleset_inputcontractId: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
  msdyn_decisioncontract_msdyn_decisionruleset_outputcontractid: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
  msdyn_liveworkstream_decisioncontractid: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_queue_decisioncontractid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_decisioncontracts: WebMappingRetrieve<msdyn_decisioncontract_Select,msdyn_decisioncontract_Expand,msdyn_decisioncontract_Filter,msdyn_decisioncontract_Fixed,msdyn_decisioncontract_Result,msdyn_decisioncontract_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_decisioncontracts: WebMappingRelated<msdyn_decisioncontract_RelatedOne,msdyn_decisioncontract_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_decisioncontracts: WebMappingCUDA<msdyn_decisioncontract_Create,msdyn_decisioncontract_Update,msdyn_decisioncontract_Select>;
}
