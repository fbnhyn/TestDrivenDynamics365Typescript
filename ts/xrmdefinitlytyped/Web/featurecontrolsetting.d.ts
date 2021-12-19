interface featurecontrolsetting_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  content?: string | null;
  countoffcs?: number | null;
  createdon?: Date | null;
  featurecontrolsettingid?: string | null;
  fullname?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  publickeytoken?: string | null;
  solutionid?: string | null;
  statecode?: featurecontrolsetting_statecode | null;
  statuscode?: featurecontrolsetting_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface featurecontrolsetting_Relationships {
  featurecontrolsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  featurecontrolsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  featurecontrolsetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  featurecontrolsetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  featurecontrolsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  featurecontrolsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  featurecontrolsetting_ProcessSession?: ProcessSession_Result[] | null;
  featurecontrolsetting_SyncErrors?: SyncError_Result[] | null;
  featurecontrolsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface featurecontrolsetting extends featurecontrolsetting_Base, featurecontrolsetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface featurecontrolsetting_Create extends featurecontrolsetting {
}
interface featurecontrolsetting_Update extends featurecontrolsetting {
}
interface featurecontrolsetting_Select {
  componentidunique: WebAttribute<featurecontrolsetting_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<featurecontrolsetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  content: WebAttribute<featurecontrolsetting_Select, { content: string | null }, {  }>;
  countoffcs: WebAttribute<featurecontrolsetting_Select, { countoffcs: number | null }, {  }>;
  createdby_guid: WebAttribute<featurecontrolsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<featurecontrolsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<featurecontrolsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  featurecontrolsettingid: WebAttribute<featurecontrolsetting_Select, { featurecontrolsettingid: string | null }, {  }>;
  fullname: WebAttribute<featurecontrolsetting_Select, { fullname: string | null }, {  }>;
  importsequencenumber: WebAttribute<featurecontrolsetting_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<featurecontrolsetting_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<featurecontrolsetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<featurecontrolsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<featurecontrolsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<featurecontrolsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<featurecontrolsetting_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<featurecontrolsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<featurecontrolsetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<featurecontrolsetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<featurecontrolsetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<featurecontrolsetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<featurecontrolsetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  publickeytoken: WebAttribute<featurecontrolsetting_Select, { publickeytoken: string | null }, {  }>;
  solutionid: WebAttribute<featurecontrolsetting_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<featurecontrolsetting_Select, { statecode: featurecontrolsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<featurecontrolsetting_Select, { statuscode: featurecontrolsetting_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<featurecontrolsetting_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<featurecontrolsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquename: WebAttribute<featurecontrolsetting_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<featurecontrolsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<featurecontrolsetting_Select, { versionnumber: number | null }, {  }>;
}
interface featurecontrolsetting_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  content: string;
  countoffcs: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  featurecontrolsettingid: XQW.Guid;
  fullname: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  publickeytoken: string;
  solutionid: XQW.Guid;
  statecode: featurecontrolsetting_statecode;
  statuscode: featurecontrolsetting_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface featurecontrolsetting_Expand {
  createdby: WebExpand<featurecontrolsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<featurecontrolsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  featurecontrolsetting_AsyncOperations: WebExpand<featurecontrolsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { featurecontrolsetting_AsyncOperations: AsyncOperation_Result[] }>;
  featurecontrolsetting_BulkDeleteFailures: WebExpand<featurecontrolsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { featurecontrolsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  featurecontrolsetting_DuplicateBaseRecord: WebExpand<featurecontrolsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { featurecontrolsetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  featurecontrolsetting_DuplicateMatchingRecord: WebExpand<featurecontrolsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { featurecontrolsetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  featurecontrolsetting_MailboxTrackingFolders: WebExpand<featurecontrolsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { featurecontrolsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  featurecontrolsetting_PrincipalObjectAttributeAccesses: WebExpand<featurecontrolsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { featurecontrolsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  featurecontrolsetting_ProcessSession: WebExpand<featurecontrolsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { featurecontrolsetting_ProcessSession: ProcessSession_Result[] }>;
  featurecontrolsetting_SyncErrors: WebExpand<featurecontrolsetting_Expand, SyncError_Select, SyncError_Filter, { featurecontrolsetting_SyncErrors: SyncError_Result[] }>;
  featurecontrolsetting_UserEntityInstanceDatas: WebExpand<featurecontrolsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { featurecontrolsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<featurecontrolsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<featurecontrolsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<featurecontrolsetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<featurecontrolsetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<featurecontrolsetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<featurecontrolsetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface featurecontrolsetting_FormattedResult {
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
interface featurecontrolsetting_Result extends featurecontrolsetting_Base, featurecontrolsetting_Relationships {
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
interface featurecontrolsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface featurecontrolsetting_RelatedMany {
  featurecontrolsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  featurecontrolsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  featurecontrolsetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  featurecontrolsetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  featurecontrolsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  featurecontrolsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  featurecontrolsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  featurecontrolsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  featurecontrolsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  featurecontrolsettings: WebMappingRetrieve<featurecontrolsetting_Select,featurecontrolsetting_Expand,featurecontrolsetting_Filter,featurecontrolsetting_Fixed,featurecontrolsetting_Result,featurecontrolsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  featurecontrolsettings: WebMappingRelated<featurecontrolsetting_RelatedOne,featurecontrolsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  featurecontrolsettings: WebMappingCUDA<featurecontrolsetting_Create,featurecontrolsetting_Update,featurecontrolsetting_Select>;
}
