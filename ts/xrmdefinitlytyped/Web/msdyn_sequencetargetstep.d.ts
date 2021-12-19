interface msdyn_sequencetargetstep_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_completedon?: Date | null;
  msdyn_convertedtomanualfrom?: msdyn_sequencestep_type | null;
  msdyn_description?: string | null;
  msdyn_duetime?: Date | null;
  msdyn_errorstate?: msdyn_sequencestep_errorstate | null;
  msdyn_linkedactivityid?: string | null;
  msdyn_name?: string | null;
  msdyn_operationparameter?: string | null;
  msdyn_sequenceduetime?: Date | null;
  msdyn_sequencestepid?: string | null;
  msdyn_sequencetargetstepid?: string | null;
  msdyn_subtype?: msdyn_sequencestep_subtype | null;
  msdyn_type?: msdyn_sequencestep_type | null;
  msdyn_waitstate?: msdyn_sequencestep_waitstate | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sequencetargetstep_statecode | null;
  statuscode?: msdyn_sequencetargetstep_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sequencetargetstep_Relationships {
  msdyn_sequencetargetstep_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sequencetargetstep_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sequencetargetstep_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sequencetargetstep_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sequencetargetstep_SyncErrors?: SyncError_Result[] | null;
  msdyn_sequencetargetstep_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_sequencetargetstep extends msdyn_sequencetargetstep_Base, msdyn_sequencetargetstep_Relationships {
  msdyn_sequencetarget_bind$msdyn_sequencetargets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_sequencetargetstep_Create extends msdyn_sequencetargetstep {
}
interface msdyn_sequencetargetstep_Update extends msdyn_sequencetargetstep {
}
interface msdyn_sequencetargetstep_Select {
  createdby_guid: WebAttribute<msdyn_sequencetargetstep_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sequencetargetstep_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sequencetargetstep_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sequencetargetstep_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sequencetargetstep_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sequencetargetstep_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sequencetargetstep_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_completedon: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_completedon: Date | null }, { msdyn_completedon_formatted?: string }>;
  msdyn_convertedtomanualfrom: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_convertedtomanualfrom: msdyn_sequencestep_type | null }, { msdyn_convertedtomanualfrom_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_description: string | null }, {  }>;
  msdyn_duetime: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_duetime: Date | null }, { msdyn_duetime_formatted?: string }>;
  msdyn_errorstate: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_errorstate: msdyn_sequencestep_errorstate | null }, { msdyn_errorstate_formatted?: string }>;
  msdyn_linkedactivityid: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_linkedactivityid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_name: string | null }, {  }>;
  msdyn_operationparameter: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_operationparameter: string | null }, {  }>;
  msdyn_sequenceduetime: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_sequenceduetime: Date | null }, { msdyn_sequenceduetime_formatted?: string }>;
  msdyn_sequencestepid: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_sequencestepid: string | null }, {  }>;
  msdyn_sequencetarget_guid: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_sequencetarget_guid: string | null }, { msdyn_sequencetarget_formatted?: string }>;
  msdyn_sequencetargetstepid: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_sequencetargetstepid: string | null }, {  }>;
  msdyn_subtype: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_subtype: msdyn_sequencestep_subtype | null }, { msdyn_subtype_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_type: msdyn_sequencestep_type | null }, { msdyn_type_formatted?: string }>;
  msdyn_waitstate: WebAttribute<msdyn_sequencetargetstep_Select, { msdyn_waitstate: msdyn_sequencestep_waitstate | null }, { msdyn_waitstate_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_sequencetargetstep_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_sequencetargetstep_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_sequencetargetstep_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_sequencetargetstep_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_sequencetargetstep_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_sequencetargetstep_Select, { statecode: msdyn_sequencetargetstep_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sequencetargetstep_Select, { statuscode: msdyn_sequencetargetstep_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sequencetargetstep_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sequencetargetstep_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sequencetargetstep_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sequencetargetstep_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_completedon: Date;
  msdyn_convertedtomanualfrom: msdyn_sequencestep_type;
  msdyn_description: string;
  msdyn_duetime: Date;
  msdyn_errorstate: msdyn_sequencestep_errorstate;
  msdyn_linkedactivityid: XQW.Guid;
  msdyn_name: string;
  msdyn_operationparameter: string;
  msdyn_sequenceduetime: Date;
  msdyn_sequencestepid: XQW.Guid;
  msdyn_sequencetarget_guid: XQW.Guid;
  msdyn_sequencetargetstepid: XQW.Guid;
  msdyn_subtype: msdyn_sequencestep_subtype;
  msdyn_type: msdyn_sequencestep_type;
  msdyn_waitstate: msdyn_sequencestep_waitstate;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_sequencetargetstep_statecode;
  statuscode: msdyn_sequencetargetstep_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sequencetargetstep_Expand {
  createdby: WebExpand<msdyn_sequencetargetstep_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sequencetargetstep_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sequencetargetstep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sequencetargetstep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_sequencetarget: WebExpand<msdyn_sequencetargetstep_Expand, msdyn_sequencetarget_Select, msdyn_sequencetarget_Filter, { msdyn_sequencetarget: msdyn_sequencetarget_Result }>;
  msdyn_sequencetargetstep_AsyncOperations: WebExpand<msdyn_sequencetargetstep_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sequencetargetstep_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sequencetargetstep_BulkDeleteFailures: WebExpand<msdyn_sequencetargetstep_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sequencetargetstep_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sequencetargetstep_MailboxTrackingFolders: WebExpand<msdyn_sequencetargetstep_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sequencetargetstep_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sequencetargetstep_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sequencetargetstep_ProcessSession: WebExpand<msdyn_sequencetargetstep_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sequencetargetstep_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sequencetargetstep_SyncErrors: WebExpand<msdyn_sequencetargetstep_Expand, SyncError_Select, SyncError_Filter, { msdyn_sequencetargetstep_SyncErrors: SyncError_Result[] }>;
  msdyn_sequencetargetstep_UserEntityInstanceDatas: WebExpand<msdyn_sequencetargetstep_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sequencetargetstep_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_sequencetargetstep_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_sequencetargetstep_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_sequencetargetstep_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_sequencetargetstep_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_sequencetargetstep_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_completedon_formatted?: string;
  msdyn_convertedtomanualfrom_formatted?: string;
  msdyn_duetime_formatted?: string;
  msdyn_errorstate_formatted?: string;
  msdyn_sequenceduetime_formatted?: string;
  msdyn_sequencetarget_formatted?: string;
  msdyn_subtype_formatted?: string;
  msdyn_type_formatted?: string;
  msdyn_waitstate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_sequencetargetstep_Result extends msdyn_sequencetargetstep_Base, msdyn_sequencetargetstep_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_sequencetarget_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_sequencetargetstep_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_sequencetarget: WebMappingRetrieve<msdyn_sequencetarget_Select,msdyn_sequencetarget_Expand,msdyn_sequencetarget_Filter,msdyn_sequencetarget_Fixed,msdyn_sequencetarget_Result,msdyn_sequencetarget_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_sequencetargetstep_RelatedMany {
  msdyn_sequencetargetstep_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sequencetargetstep_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sequencetargetstep_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sequencetargetstep_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sequencetargetstep_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sequencetargetstep_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sequencetargetsteps: WebMappingRetrieve<msdyn_sequencetargetstep_Select,msdyn_sequencetargetstep_Expand,msdyn_sequencetargetstep_Filter,msdyn_sequencetargetstep_Fixed,msdyn_sequencetargetstep_Result,msdyn_sequencetargetstep_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sequencetargetsteps: WebMappingRelated<msdyn_sequencetargetstep_RelatedOne,msdyn_sequencetargetstep_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sequencetargetsteps: WebMappingCUDA<msdyn_sequencetargetstep_Create,msdyn_sequencetargetstep_Update,msdyn_sequencetargetstep_Select>;
}
