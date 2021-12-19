interface msdyn_businessclosure_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_businessclosureid?: string | null;
  msdyn_duration?: number | null;
  msdyn_endtime?: Date | null;
  msdyn_isalldayevent?: boolean | null;
  msdyn_name?: string | null;
  msdyn_selectedyear?: number | null;
  msdyn_starttime?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_businessclosure_statecode | null;
  statuscode?: msdyn_businessclosure_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_businessclosure_Relationships {
  msdyn_businessclosure_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_businessclosure_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_businessclosure_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_businessclosure_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_businessclosure_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_businessclosure_SyncErrors?: SyncError_Result[] | null;
  msdyn_businessclosure_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_businessclosure extends msdyn_businessclosure_Base, msdyn_businessclosure_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_businessclosure_Create extends msdyn_businessclosure {
}
interface msdyn_businessclosure_Update extends msdyn_businessclosure {
}
interface msdyn_businessclosure_Select {
  createdby_guid: WebAttribute<msdyn_businessclosure_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_businessclosure_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_businessclosure_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_businessclosure_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_businessclosure_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_businessclosure_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_businessclosure_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_businessclosureid: WebAttribute<msdyn_businessclosure_Select, { msdyn_businessclosureid: string | null }, {  }>;
  msdyn_duration: WebAttribute<msdyn_businessclosure_Select, { msdyn_duration: number | null }, {  }>;
  msdyn_endtime: WebAttribute<msdyn_businessclosure_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_isalldayevent: WebAttribute<msdyn_businessclosure_Select, { msdyn_isalldayevent: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_businessclosure_Select, { msdyn_name: string | null }, {  }>;
  msdyn_selectedyear: WebAttribute<msdyn_businessclosure_Select, { msdyn_selectedyear: number | null }, {  }>;
  msdyn_starttime: WebAttribute<msdyn_businessclosure_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_businessclosure_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_businessclosure_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_businessclosure_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_businessclosure_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_businessclosure_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_businessclosure_Select, { statecode: msdyn_businessclosure_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_businessclosure_Select, { statuscode: msdyn_businessclosure_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_businessclosure_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_businessclosure_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_businessclosure_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_businessclosure_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_businessclosureid: XQW.Guid;
  msdyn_duration: number;
  msdyn_endtime: Date;
  msdyn_isalldayevent: boolean;
  msdyn_name: string;
  msdyn_selectedyear: number;
  msdyn_starttime: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_businessclosure_statecode;
  statuscode: msdyn_businessclosure_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_businessclosure_Expand {
  createdby: WebExpand<msdyn_businessclosure_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_businessclosure_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_businessclosure_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_businessclosure_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_businessclosure_AsyncOperations: WebExpand<msdyn_businessclosure_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_businessclosure_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_businessclosure_BulkDeleteFailures: WebExpand<msdyn_businessclosure_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_businessclosure_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_businessclosure_MailboxTrackingFolders: WebExpand<msdyn_businessclosure_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_businessclosure_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_businessclosure_PrincipalObjectAttributeAccesses: WebExpand<msdyn_businessclosure_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_businessclosure_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_businessclosure_ProcessSession: WebExpand<msdyn_businessclosure_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_businessclosure_ProcessSession: ProcessSession_Result[] }>;
  msdyn_businessclosure_SyncErrors: WebExpand<msdyn_businessclosure_Expand, SyncError_Select, SyncError_Filter, { msdyn_businessclosure_SyncErrors: SyncError_Result[] }>;
  msdyn_businessclosure_UserEntityInstanceDatas: WebExpand<msdyn_businessclosure_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_businessclosure_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_businessclosure_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_businessclosure_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_businessclosure_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_businessclosure_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_businessclosure_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_starttime_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_businessclosure_Result extends msdyn_businessclosure_Base, msdyn_businessclosure_Relationships {
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
interface msdyn_businessclosure_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_businessclosure_RelatedMany {
  msdyn_businessclosure_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_businessclosure_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_businessclosure_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_businessclosure_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_businessclosure_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_businessclosure_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_businessclosure_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_businessclosures: WebMappingRetrieve<msdyn_businessclosure_Select,msdyn_businessclosure_Expand,msdyn_businessclosure_Filter,msdyn_businessclosure_Fixed,msdyn_businessclosure_Result,msdyn_businessclosure_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_businessclosures: WebMappingRelated<msdyn_businessclosure_RelatedOne,msdyn_businessclosure_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_businessclosures: WebMappingCUDA<msdyn_businessclosure_Create,msdyn_businessclosure_Update,msdyn_businessclosure_Select>;
}
