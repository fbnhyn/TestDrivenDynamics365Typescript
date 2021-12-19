interface msdyn_dataflow_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_dataflowid?: string | null;
  msdyn_description?: string | null;
  msdyn_destinationadls?: string | null;
  msdyn_emailsettings?: string | null;
  msdyn_gatewayobjectid?: string | null;
  msdyn_internalversion?: string | null;
  msdyn_mashupdocument?: string | null;
  msdyn_mashupsettings?: string | null;
  msdyn_name?: string | null;
  msdyn_originaldataflowid?: string | null;
  msdyn_refreshhistory?: string | null;
  msdyn_refreshsettings?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_dataflow_statecode | null;
  statuscode?: msdyn_dataflow_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_dataflow_Relationships {
  msdyn_dataflow_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_dataflow_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_dataflow_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_dataflow_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_dataflow_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_dataflow_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_dataflow_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_dataflow_SyncErrors?: SyncError_Result[] | null;
  msdyn_dataflow_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_dataflow extends msdyn_dataflow_Base, msdyn_dataflow_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_dataflow_Create extends msdyn_dataflow {
}
interface msdyn_dataflow_Update extends msdyn_dataflow {
}
interface msdyn_dataflow_Select {
  componentidunique: WebAttribute<msdyn_dataflow_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_dataflow_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_dataflow_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_dataflow_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_dataflow_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_dataflow_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_dataflow_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_dataflow_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_dataflow_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_dataflow_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_dataflow_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_dataflowid: WebAttribute<msdyn_dataflow_Select, { msdyn_dataflowid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_dataflow_Select, { msdyn_description: string | null }, {  }>;
  msdyn_destinationadls: WebAttribute<msdyn_dataflow_Select, { msdyn_destinationadls: string | null }, {  }>;
  msdyn_emailsettings: WebAttribute<msdyn_dataflow_Select, { msdyn_emailsettings: string | null }, {  }>;
  msdyn_gatewayobjectid: WebAttribute<msdyn_dataflow_Select, { msdyn_gatewayobjectid: string | null }, {  }>;
  msdyn_internalversion: WebAttribute<msdyn_dataflow_Select, { msdyn_internalversion: string | null }, {  }>;
  msdyn_mashupdocument: WebAttribute<msdyn_dataflow_Select, { msdyn_mashupdocument: string | null }, {  }>;
  msdyn_mashupsettings: WebAttribute<msdyn_dataflow_Select, { msdyn_mashupsettings: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_dataflow_Select, { msdyn_name: string | null }, {  }>;
  msdyn_originaldataflowid: WebAttribute<msdyn_dataflow_Select, { msdyn_originaldataflowid: string | null }, {  }>;
  msdyn_refreshhistory: WebAttribute<msdyn_dataflow_Select, { msdyn_refreshhistory: string | null }, {  }>;
  msdyn_refreshsettings: WebAttribute<msdyn_dataflow_Select, { msdyn_refreshsettings: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_dataflow_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_dataflow_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_dataflow_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_dataflow_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_dataflow_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_dataflow_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_dataflow_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_dataflow_Select, { statecode: msdyn_dataflow_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_dataflow_Select, { statuscode: msdyn_dataflow_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_dataflow_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_dataflow_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_dataflow_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_dataflow_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_dataflow_Filter {
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
  msdyn_dataflowid: XQW.Guid;
  msdyn_description: string;
  msdyn_destinationadls: string;
  msdyn_emailsettings: string;
  msdyn_gatewayobjectid: string;
  msdyn_internalversion: string;
  msdyn_mashupdocument: string;
  msdyn_mashupsettings: string;
  msdyn_name: string;
  msdyn_originaldataflowid: string;
  msdyn_refreshhistory: string;
  msdyn_refreshsettings: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_dataflow_statecode;
  statuscode: msdyn_dataflow_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_dataflow_Expand {
  createdby: WebExpand<msdyn_dataflow_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_dataflow_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_dataflow_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_dataflow_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dataflow_AsyncOperations: WebExpand<msdyn_dataflow_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_dataflow_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_dataflow_BulkDeleteFailures: WebExpand<msdyn_dataflow_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_dataflow_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_dataflow_DuplicateBaseRecord: WebExpand<msdyn_dataflow_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_dataflow_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_dataflow_DuplicateMatchingRecord: WebExpand<msdyn_dataflow_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_dataflow_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_dataflow_MailboxTrackingFolders: WebExpand<msdyn_dataflow_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_dataflow_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_dataflow_PrincipalObjectAttributeAccesses: WebExpand<msdyn_dataflow_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_dataflow_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_dataflow_ProcessSession: WebExpand<msdyn_dataflow_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_dataflow_ProcessSession: ProcessSession_Result[] }>;
  msdyn_dataflow_SyncErrors: WebExpand<msdyn_dataflow_Expand, SyncError_Select, SyncError_Filter, { msdyn_dataflow_SyncErrors: SyncError_Result[] }>;
  msdyn_dataflow_UserEntityInstanceDatas: WebExpand<msdyn_dataflow_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_dataflow_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_dataflow_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_dataflow_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_dataflow_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_dataflow_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_dataflow_FormattedResult {
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
interface msdyn_dataflow_Result extends msdyn_dataflow_Base, msdyn_dataflow_Relationships {
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
interface msdyn_dataflow_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_dataflow_RelatedMany {
  msdyn_dataflow_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_dataflow_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_dataflow_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_dataflow_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_dataflow_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_dataflow_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_dataflow_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_dataflow_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_dataflow_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_dataflows: WebMappingRetrieve<msdyn_dataflow_Select,msdyn_dataflow_Expand,msdyn_dataflow_Filter,msdyn_dataflow_Fixed,msdyn_dataflow_Result,msdyn_dataflow_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_dataflows: WebMappingRelated<msdyn_dataflow_RelatedOne,msdyn_dataflow_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_dataflows: WebMappingCUDA<msdyn_dataflow_Create,msdyn_dataflow_Update,msdyn_dataflow_Select>;
}
