interface msdyn_templateparameter_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_templateparameterid?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_templateparameter_statecode | null;
  statuscode?: msdyn_templateparameter_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_templateparameter_Relationships {
  msdyn_templateparameter_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_templateparameter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_templateparameter_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_templateparameter_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_templateparameter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_templateparameter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_templateparameter_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_templateparameter_SyncErrors?: SyncError_Result[] | null;
  msdyn_templateparameter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_templateparameter extends msdyn_templateparameter_Base, msdyn_templateparameter_Relationships {
  msdyn_applicationtabtemplateid_bind$msdyn_applicationtabtemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_templateparameter_Create extends msdyn_templateparameter {
}
interface msdyn_templateparameter_Update extends msdyn_templateparameter {
}
interface msdyn_templateparameter_Select {
  componentidunique: WebAttribute<msdyn_templateparameter_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_templateparameter_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_templateparameter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_templateparameter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_templateparameter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_templateparameter_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_templateparameter_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_templateparameter_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_templateparameter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_templateparameter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_templateparameter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_applicationtabtemplateid_guid: WebAttribute<msdyn_templateparameter_Select, { msdyn_applicationtabtemplateid_guid: string | null }, { msdyn_applicationtabtemplateid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_templateparameter_Select, { msdyn_name: string | null }, {  }>;
  msdyn_templateparameterid: WebAttribute<msdyn_templateparameter_Select, { msdyn_templateparameterid: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_templateparameter_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_value: WebAttribute<msdyn_templateparameter_Select, { msdyn_value: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_templateparameter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_templateparameter_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_templateparameter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_templateparameter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_templateparameter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_templateparameter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_templateparameter_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_templateparameter_Select, { statecode: msdyn_templateparameter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_templateparameter_Select, { statuscode: msdyn_templateparameter_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_templateparameter_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_templateparameter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_templateparameter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_templateparameter_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_templateparameter_Filter {
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
  msdyn_applicationtabtemplateid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_templateparameterid: XQW.Guid;
  msdyn_uniquename: string;
  msdyn_value: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_templateparameter_statecode;
  statuscode: msdyn_templateparameter_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_templateparameter_Expand {
  createdby: WebExpand<msdyn_templateparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_templateparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_templateparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_templateparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_applicationtabtemplateid: WebExpand<msdyn_templateparameter_Expand, msdyn_applicationtabtemplate_Select, msdyn_applicationtabtemplate_Filter, { msdyn_applicationtabtemplateid: msdyn_applicationtabtemplate_Result }>;
  msdyn_templateparameter_AsyncOperations: WebExpand<msdyn_templateparameter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_templateparameter_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_templateparameter_BulkDeleteFailures: WebExpand<msdyn_templateparameter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_templateparameter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_templateparameter_DuplicateBaseRecord: WebExpand<msdyn_templateparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_templateparameter_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_templateparameter_DuplicateMatchingRecord: WebExpand<msdyn_templateparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_templateparameter_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_templateparameter_MailboxTrackingFolders: WebExpand<msdyn_templateparameter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_templateparameter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_templateparameter_PrincipalObjectAttributeAccesses: WebExpand<msdyn_templateparameter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_templateparameter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_templateparameter_ProcessSession: WebExpand<msdyn_templateparameter_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_templateparameter_ProcessSession: ProcessSession_Result[] }>;
  msdyn_templateparameter_SyncErrors: WebExpand<msdyn_templateparameter_Expand, SyncError_Select, SyncError_Filter, { msdyn_templateparameter_SyncErrors: SyncError_Result[] }>;
  msdyn_templateparameter_UserEntityInstanceDatas: WebExpand<msdyn_templateparameter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_templateparameter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_templateparameter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_templateparameter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_templateparameter_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_templateparameter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_templateparameter_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_applicationtabtemplateid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_templateparameter_Result extends msdyn_templateparameter_Base, msdyn_templateparameter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_applicationtabtemplateid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_templateparameter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_applicationtabtemplateid: WebMappingRetrieve<msdyn_applicationtabtemplate_Select,msdyn_applicationtabtemplate_Expand,msdyn_applicationtabtemplate_Filter,msdyn_applicationtabtemplate_Fixed,msdyn_applicationtabtemplate_Result,msdyn_applicationtabtemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_templateparameter_RelatedMany {
  msdyn_templateparameter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_templateparameter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_templateparameter_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_templateparameter_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_templateparameter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_templateparameter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_templateparameter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_templateparameter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_templateparameter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_templateparameters: WebMappingRetrieve<msdyn_templateparameter_Select,msdyn_templateparameter_Expand,msdyn_templateparameter_Filter,msdyn_templateparameter_Fixed,msdyn_templateparameter_Result,msdyn_templateparameter_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_templateparameters: WebMappingRelated<msdyn_templateparameter_RelatedOne,msdyn_templateparameter_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_templateparameters: WebMappingCUDA<msdyn_templateparameter_Create,msdyn_templateparameter_Update,msdyn_templateparameter_Select>;
}
