interface msdyn_consoleapplicationtemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_consoleapplicationtemplateid?: string | null;
  msdyn_description?: string | null;
  msdyn_icon?: string | null;
  msdyn_isstale?: boolean | null;
  msdyn_name?: string | null;
  msdyn_pinned?: boolean | null;
  msdyn_templateparameters?: string | null;
  msdyn_title?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_consoleapplicationtemplate_statecode | null;
  statuscode?: msdyn_consoleapplicationtemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_consoleapplicationtemplate_Relationships {
  msdyn_PageType?: msdyn_consoleapplicationtype_Result | null;
  msdyn_consoleapplicationtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_consoleapplicationtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_consoleapplicationtemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationtemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationtemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_consoleapplicationtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_consoleapplicationtemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_consoleapplicationtemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_consoleapplicationtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_consoleapplicationsessiontemplate_m?: msdyn_consoleapplicationsessiontemplate_Result[] | null;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_co?: msdyn_consoleapplicationtemplateparameter_Result[] | null;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_consoleapplicationsessiontemplate_AnchorTab?: msdyn_consoleapplicationsessiontemplate_Result[] | null;
  msdyn_msdyn_consoleapplicationtemplate_tags?: msdyn_templatetags_Result[] | null;
}
interface msdyn_consoleapplicationtemplate extends msdyn_consoleapplicationtemplate_Base, msdyn_consoleapplicationtemplate_Relationships {
  msdyn_PageType_bind$msdyn_consoleapplicationtypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_consoleapplicationtemplate_Create extends msdyn_consoleapplicationtemplate {
}
interface msdyn_consoleapplicationtemplate_Update extends msdyn_consoleapplicationtemplate {
}
interface msdyn_consoleapplicationtemplate_Select {
  createdby_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_consoleapplicationtemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_consoleapplicationtemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_consoleapplicationtemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_consoleapplicationtemplateid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_consoleapplicationtemplateid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_description: string | null }, {  }>;
  msdyn_icon: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_icon: string | null }, {  }>;
  msdyn_isstale: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_isstale: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pagetype_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_pagetype_guid: string | null }, { msdyn_pagetype_formatted?: string }>;
  msdyn_pinned: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_pinned: boolean | null }, {  }>;
  msdyn_templateparameters: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_templateparameters: string | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_consoleapplicationtemplate_Select, { msdyn_title: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_consoleapplicationtemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_consoleapplicationtemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_consoleapplicationtemplate_Select, { statecode: msdyn_consoleapplicationtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_consoleapplicationtemplate_Select, { statuscode: msdyn_consoleapplicationtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_consoleapplicationtemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_consoleapplicationtemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_consoleapplicationtemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_consoleapplicationtemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_consoleapplicationtemplateid: XQW.Guid;
  msdyn_description: string;
  msdyn_icon: string;
  msdyn_isstale: boolean;
  msdyn_name: string;
  msdyn_pagetype_guid: XQW.Guid;
  msdyn_pinned: boolean;
  msdyn_templateparameters: string;
  msdyn_title: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_consoleapplicationtemplate_statecode;
  statuscode: msdyn_consoleapplicationtemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_consoleapplicationtemplate_Expand {
  createdby: WebExpand<msdyn_consoleapplicationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_consoleapplicationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_consoleapplicationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_consoleapplicationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PageType: WebExpand<msdyn_consoleapplicationtemplate_Expand, msdyn_consoleapplicationtype_Select, msdyn_consoleapplicationtype_Filter, { msdyn_PageType: msdyn_consoleapplicationtype_Result }>;
  msdyn_consoleapplicationtemplate_AsyncOperations: WebExpand<msdyn_consoleapplicationtemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_consoleapplicationtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_consoleapplicationtemplate_BulkDeleteFailures: WebExpand<msdyn_consoleapplicationtemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_consoleapplicationtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_consoleapplicationtemplate_DuplicateBaseRecord: WebExpand<msdyn_consoleapplicationtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationtemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationtemplate_DuplicateMatchingRecord: WebExpand<msdyn_consoleapplicationtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationtemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationtemplate_MailboxTrackingFolders: WebExpand<msdyn_consoleapplicationtemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_consoleapplicationtemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_consoleapplicationtemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_consoleapplicationtemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_consoleapplicationtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_consoleapplicationtemplate_ProcessSession: WebExpand<msdyn_consoleapplicationtemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_consoleapplicationtemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_consoleapplicationtemplate_SyncErrors: WebExpand<msdyn_consoleapplicationtemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_consoleapplicationtemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_consoleapplicationtemplate_UserEntityInstanceDatas: WebExpand<msdyn_consoleapplicationtemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_consoleapplicationtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_consoleapplicationsessiontemplate_m: WebExpand<msdyn_consoleapplicationtemplate_Expand, msdyn_consoleapplicationsessiontemplate_Select, msdyn_consoleapplicationsessiontemplate_Filter, { msdyn_msdyn_consoleapplicationsessiontemplate_m: msdyn_consoleapplicationsessiontemplate_Result[] }>;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_co: WebExpand<msdyn_consoleapplicationtemplate_Expand, msdyn_consoleapplicationtemplateparameter_Select, msdyn_consoleapplicationtemplateparameter_Filter, { msdyn_msdyn_consoleapplicationtemplate_msdyn_co: msdyn_consoleapplicationtemplateparameter_Result[] }>;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_consoleapplicationsessiontemplate_AnchorTab: WebExpand<msdyn_consoleapplicationtemplate_Expand, msdyn_consoleapplicationsessiontemplate_Select, msdyn_consoleapplicationsessiontemplate_Filter, { msdyn_msdyn_consoleapplicationtemplate_msdyn_consoleapplicationsessiontemplate_AnchorTab: msdyn_consoleapplicationsessiontemplate_Result[] }>;
  msdyn_msdyn_consoleapplicationtemplate_tags: WebExpand<msdyn_consoleapplicationtemplate_Expand, msdyn_templatetags_Select, msdyn_templatetags_Filter, { msdyn_msdyn_consoleapplicationtemplate_tags: msdyn_templatetags_Result[] }>;
  ownerid: WebExpand<msdyn_consoleapplicationtemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_consoleapplicationtemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_consoleapplicationtemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_consoleapplicationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_consoleapplicationtemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_pagetype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_consoleapplicationtemplate_Result extends msdyn_consoleapplicationtemplate_Base, msdyn_consoleapplicationtemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_pagetype_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_consoleapplicationtemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PageType: WebMappingRetrieve<msdyn_consoleapplicationtype_Select,msdyn_consoleapplicationtype_Expand,msdyn_consoleapplicationtype_Filter,msdyn_consoleapplicationtype_Fixed,msdyn_consoleapplicationtype_Result,msdyn_consoleapplicationtype_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_consoleapplicationtemplate_RelatedMany {
  msdyn_consoleapplicationtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_consoleapplicationtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_consoleapplicationtemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationtemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationtemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_consoleapplicationtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_consoleapplicationtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_consoleapplicationtemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_consoleapplicationtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_consoleapplicationsessiontemplate_m: WebMappingRetrieve<msdyn_consoleapplicationsessiontemplate_Select,msdyn_consoleapplicationsessiontemplate_Expand,msdyn_consoleapplicationsessiontemplate_Filter,msdyn_consoleapplicationsessiontemplate_Fixed,msdyn_consoleapplicationsessiontemplate_Result,msdyn_consoleapplicationsessiontemplate_FormattedResult>;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_co: WebMappingRetrieve<msdyn_consoleapplicationtemplateparameter_Select,msdyn_consoleapplicationtemplateparameter_Expand,msdyn_consoleapplicationtemplateparameter_Filter,msdyn_consoleapplicationtemplateparameter_Fixed,msdyn_consoleapplicationtemplateparameter_Result,msdyn_consoleapplicationtemplateparameter_FormattedResult>;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_consoleapplicationsessiontemplate_AnchorTab: WebMappingRetrieve<msdyn_consoleapplicationsessiontemplate_Select,msdyn_consoleapplicationsessiontemplate_Expand,msdyn_consoleapplicationsessiontemplate_Filter,msdyn_consoleapplicationsessiontemplate_Fixed,msdyn_consoleapplicationsessiontemplate_Result,msdyn_consoleapplicationsessiontemplate_FormattedResult>;
  msdyn_msdyn_consoleapplicationtemplate_tags: WebMappingRetrieve<msdyn_templatetags_Select,msdyn_templatetags_Expand,msdyn_templatetags_Filter,msdyn_templatetags_Fixed,msdyn_templatetags_Result,msdyn_templatetags_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_consoleapplicationtemplates: WebMappingRetrieve<msdyn_consoleapplicationtemplate_Select,msdyn_consoleapplicationtemplate_Expand,msdyn_consoleapplicationtemplate_Filter,msdyn_consoleapplicationtemplate_Fixed,msdyn_consoleapplicationtemplate_Result,msdyn_consoleapplicationtemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_consoleapplicationtemplates: WebMappingRelated<msdyn_consoleapplicationtemplate_RelatedOne,msdyn_consoleapplicationtemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_consoleapplicationtemplates: WebMappingCUDA<msdyn_consoleapplicationtemplate_Create,msdyn_consoleapplicationtemplate_Update,msdyn_consoleapplicationtemplate_Select>;
}
