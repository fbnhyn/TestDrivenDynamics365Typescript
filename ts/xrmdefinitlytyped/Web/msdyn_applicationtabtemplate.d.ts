interface msdyn_applicationtabtemplate_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_applicationtabtemplateid?: string | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_pagetype?: msdyn_applicationtype | null;
  msdyn_pinned?: boolean | null;
  msdyn_templateparameters?: string | null;
  msdyn_title?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_applicationtabtemplate_statecode | null;
  statuscode?: msdyn_applicationtabtemplate_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_applicationtabtemplate_Relationships {
  msdyn_applicationtabtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_applicationtabtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_applicationtabtemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_applicationtabtemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_applicationtabtemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_applicationtabtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_applicationtabtemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_applicationtabtemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_applicationtabtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_applicationtabtemplate_sessiontemplate_anchortab?: msdyn_sessiontemplate_Result[] | null;
  msdyn_applicationtabtemplate_templateparameter?: msdyn_templateparameter_Result[] | null;
  msdyn_sessiontemplate_applicationtab?: msdyn_sessiontemplate_Result[] | null;
}
interface msdyn_applicationtabtemplate extends msdyn_applicationtabtemplate_Base, msdyn_applicationtabtemplate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_applicationtabtemplate_Create extends msdyn_applicationtabtemplate {
}
interface msdyn_applicationtabtemplate_Update extends msdyn_applicationtabtemplate {
}
interface msdyn_applicationtabtemplate_Select {
  componentidunique: WebAttribute<msdyn_applicationtabtemplate_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_applicationtabtemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_applicationtabtemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_applicationtabtemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_applicationtabtemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_applicationtabtemplate_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_applicationtabtemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_applicationtabtemplate_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_applicationtabtemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_applicationtabtemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_applicationtabtemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_applicationtabtemplateid: WebAttribute<msdyn_applicationtabtemplate_Select, { msdyn_applicationtabtemplateid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_applicationtabtemplate_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_applicationtabtemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pagetype: WebAttribute<msdyn_applicationtabtemplate_Select, { msdyn_pagetype: msdyn_applicationtype | null }, { msdyn_pagetype_formatted?: string }>;
  msdyn_pinned: WebAttribute<msdyn_applicationtabtemplate_Select, { msdyn_pinned: boolean | null }, {  }>;
  msdyn_templateparameters: WebAttribute<msdyn_applicationtabtemplate_Select, { msdyn_templateparameters: string | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_applicationtabtemplate_Select, { msdyn_title: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_applicationtabtemplate_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_applicationtabtemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_applicationtabtemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_applicationtabtemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_applicationtabtemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_applicationtabtemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_applicationtabtemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_applicationtabtemplate_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_applicationtabtemplate_Select, { statecode: msdyn_applicationtabtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_applicationtabtemplate_Select, { statuscode: msdyn_applicationtabtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_applicationtabtemplate_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_applicationtabtemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_applicationtabtemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_applicationtabtemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_applicationtabtemplate_Filter {
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
  msdyn_applicationtabtemplateid: XQW.Guid;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_pagetype: msdyn_applicationtype;
  msdyn_pinned: boolean;
  msdyn_templateparameters: string;
  msdyn_title: string;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_applicationtabtemplate_statecode;
  statuscode: msdyn_applicationtabtemplate_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_applicationtabtemplate_Expand {
  createdby: WebExpand<msdyn_applicationtabtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_applicationtabtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_applicationtabtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_applicationtabtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_applicationtabtemplate_AsyncOperations: WebExpand<msdyn_applicationtabtemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_applicationtabtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_applicationtabtemplate_BulkDeleteFailures: WebExpand<msdyn_applicationtabtemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_applicationtabtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_applicationtabtemplate_DuplicateBaseRecord: WebExpand<msdyn_applicationtabtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_applicationtabtemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_applicationtabtemplate_DuplicateMatchingRecord: WebExpand<msdyn_applicationtabtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_applicationtabtemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_applicationtabtemplate_MailboxTrackingFolders: WebExpand<msdyn_applicationtabtemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_applicationtabtemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_applicationtabtemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_applicationtabtemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_applicationtabtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_applicationtabtemplate_ProcessSession: WebExpand<msdyn_applicationtabtemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_applicationtabtemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_applicationtabtemplate_SyncErrors: WebExpand<msdyn_applicationtabtemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_applicationtabtemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_applicationtabtemplate_UserEntityInstanceDatas: WebExpand<msdyn_applicationtabtemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_applicationtabtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_applicationtabtemplate_sessiontemplate_anchortab: WebExpand<msdyn_applicationtabtemplate_Expand, msdyn_sessiontemplate_Select, msdyn_sessiontemplate_Filter, { msdyn_applicationtabtemplate_sessiontemplate_anchortab: msdyn_sessiontemplate_Result[] }>;
  msdyn_applicationtabtemplate_templateparameter: WebExpand<msdyn_applicationtabtemplate_Expand, msdyn_templateparameter_Select, msdyn_templateparameter_Filter, { msdyn_applicationtabtemplate_templateparameter: msdyn_templateparameter_Result[] }>;
  msdyn_sessiontemplate_applicationtab: WebExpand<msdyn_applicationtabtemplate_Expand, msdyn_sessiontemplate_Select, msdyn_sessiontemplate_Filter, { msdyn_sessiontemplate_applicationtab: msdyn_sessiontemplate_Result[] }>;
  ownerid: WebExpand<msdyn_applicationtabtemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_applicationtabtemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_applicationtabtemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_applicationtabtemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_applicationtabtemplate_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_pagetype_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_applicationtabtemplate_Result extends msdyn_applicationtabtemplate_Base, msdyn_applicationtabtemplate_Relationships {
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
interface msdyn_applicationtabtemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_applicationtabtemplate_RelatedMany {
  msdyn_applicationtabtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_applicationtabtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_applicationtabtemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_applicationtabtemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_applicationtabtemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_applicationtabtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_applicationtabtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_applicationtabtemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_applicationtabtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_applicationtabtemplate_sessiontemplate_anchortab: WebMappingRetrieve<msdyn_sessiontemplate_Select,msdyn_sessiontemplate_Expand,msdyn_sessiontemplate_Filter,msdyn_sessiontemplate_Fixed,msdyn_sessiontemplate_Result,msdyn_sessiontemplate_FormattedResult>;
  msdyn_applicationtabtemplate_templateparameter: WebMappingRetrieve<msdyn_templateparameter_Select,msdyn_templateparameter_Expand,msdyn_templateparameter_Filter,msdyn_templateparameter_Fixed,msdyn_templateparameter_Result,msdyn_templateparameter_FormattedResult>;
  msdyn_sessiontemplate_applicationtab: WebMappingRetrieve<msdyn_sessiontemplate_Select,msdyn_sessiontemplate_Expand,msdyn_sessiontemplate_Filter,msdyn_sessiontemplate_Fixed,msdyn_sessiontemplate_Result,msdyn_sessiontemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_applicationtabtemplates: WebMappingRetrieve<msdyn_applicationtabtemplate_Select,msdyn_applicationtabtemplate_Expand,msdyn_applicationtabtemplate_Filter,msdyn_applicationtabtemplate_Fixed,msdyn_applicationtabtemplate_Result,msdyn_applicationtabtemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_applicationtabtemplates: WebMappingRelated<msdyn_applicationtabtemplate_RelatedOne,msdyn_applicationtabtemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_applicationtabtemplates: WebMappingCUDA<msdyn_applicationtabtemplate_Create,msdyn_applicationtabtemplate_Update,msdyn_applicationtabtemplate_Select>;
}
