interface msdyn_analyticsadminsettings_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_analyticsadminsettingsid?: string | null;
  msdyn_enableanalytics?: boolean | null;
  msdyn_name?: string | null;
  msdyn_reportgroup?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_analyticsadminsettings_statecode | null;
  statuscode?: msdyn_analyticsadminsettings_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_analyticsadminsettings_Relationships {
  msdyn_analyticsadminsettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_analyticsadminsettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_analyticsadminsettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_analyticsadminsettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_analyticsadminsettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_analyticsadminsettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_analyticsadminsettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_analyticsadminsettings extends msdyn_analyticsadminsettings_Base, msdyn_analyticsadminsettings_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_analyticsadminsettings_Create extends msdyn_analyticsadminsettings {
}
interface msdyn_analyticsadminsettings_Update extends msdyn_analyticsadminsettings {
}
interface msdyn_analyticsadminsettings_Select {
  componentidunique: WebAttribute<msdyn_analyticsadminsettings_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_analyticsadminsettings_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_analyticsadminsettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_analyticsadminsettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_analyticsadminsettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_analyticsadminsettings_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_analyticsadminsettings_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_analyticsadminsettings_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_analyticsadminsettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_analyticsadminsettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_analyticsadminsettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analyticsadminsettingsid: WebAttribute<msdyn_analyticsadminsettings_Select, { msdyn_analyticsadminsettingsid: string | null }, {  }>;
  msdyn_enableanalytics: WebAttribute<msdyn_analyticsadminsettings_Select, { msdyn_enableanalytics: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_analyticsadminsettings_Select, { msdyn_name: string | null }, {  }>;
  msdyn_reportgroup: WebAttribute<msdyn_analyticsadminsettings_Select, { msdyn_reportgroup: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_analyticsadminsettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_analyticsadminsettings_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_analyticsadminsettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_analyticsadminsettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_analyticsadminsettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_analyticsadminsettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_analyticsadminsettings_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_analyticsadminsettings_Select, { statecode: msdyn_analyticsadminsettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_analyticsadminsettings_Select, { statuscode: msdyn_analyticsadminsettings_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_analyticsadminsettings_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_analyticsadminsettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_analyticsadminsettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_analyticsadminsettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_analyticsadminsettings_Filter {
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
  msdyn_analyticsadminsettingsid: XQW.Guid;
  msdyn_enableanalytics: boolean;
  msdyn_name: string;
  msdyn_reportgroup: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_analyticsadminsettings_statecode;
  statuscode: msdyn_analyticsadminsettings_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_analyticsadminsettings_Expand {
  createdby: WebExpand<msdyn_analyticsadminsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_analyticsadminsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_analyticsadminsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_analyticsadminsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_analyticsadminsettings_AsyncOperations: WebExpand<msdyn_analyticsadminsettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_analyticsadminsettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_analyticsadminsettings_BulkDeleteFailures: WebExpand<msdyn_analyticsadminsettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_analyticsadminsettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_analyticsadminsettings_MailboxTrackingFolders: WebExpand<msdyn_analyticsadminsettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_analyticsadminsettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_analyticsadminsettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_analyticsadminsettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_analyticsadminsettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_analyticsadminsettings_ProcessSession: WebExpand<msdyn_analyticsadminsettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_analyticsadminsettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_analyticsadminsettings_SyncErrors: WebExpand<msdyn_analyticsadminsettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_analyticsadminsettings_SyncErrors: SyncError_Result[] }>;
  msdyn_analyticsadminsettings_UserEntityInstanceDatas: WebExpand<msdyn_analyticsadminsettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_analyticsadminsettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_analyticsadminsettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_analyticsadminsettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_analyticsadminsettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_analyticsadminsettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_analyticsadminsettings_FormattedResult {
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
interface msdyn_analyticsadminsettings_Result extends msdyn_analyticsadminsettings_Base, msdyn_analyticsadminsettings_Relationships {
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
interface msdyn_analyticsadminsettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_analyticsadminsettings_RelatedMany {
  msdyn_analyticsadminsettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_analyticsadminsettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_analyticsadminsettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_analyticsadminsettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_analyticsadminsettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_analyticsadminsettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_analyticsadminsettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_analyticsadminsettings: WebMappingRetrieve<msdyn_analyticsadminsettings_Select,msdyn_analyticsadminsettings_Expand,msdyn_analyticsadminsettings_Filter,msdyn_analyticsadminsettings_Fixed,msdyn_analyticsadminsettings_Result,msdyn_analyticsadminsettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_analyticsadminsettings: WebMappingRelated<msdyn_analyticsadminsettings_RelatedOne,msdyn_analyticsadminsettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_analyticsadminsettings: WebMappingCUDA<msdyn_analyticsadminsettings_Create,msdyn_analyticsadminsettings_Update,msdyn_analyticsadminsettings_Select>;
}
