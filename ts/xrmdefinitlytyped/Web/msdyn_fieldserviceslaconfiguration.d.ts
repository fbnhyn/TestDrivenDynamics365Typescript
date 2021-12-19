interface msdyn_fieldserviceslaconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_fieldserviceslaconfigurationid?: string | null;
  msdyn_slakpiname?: string | null;
  msdyn_slatype?: msdyn_slatype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_fieldserviceslaconfiguration_statecode | null;
  statuscode?: msdyn_fieldserviceslaconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_fieldserviceslaconfiguration_Relationships {
  msdyn_fieldserviceslaconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_fieldserviceslaconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_fieldserviceslaconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_fieldserviceslaconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_fieldserviceslaconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_fieldserviceslaconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_fieldserviceslaconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_fieldserviceslaconfiguration extends msdyn_fieldserviceslaconfiguration_Base, msdyn_fieldserviceslaconfiguration_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_fieldserviceslaconfiguration_Create extends msdyn_fieldserviceslaconfiguration {
}
interface msdyn_fieldserviceslaconfiguration_Update extends msdyn_fieldserviceslaconfiguration {
}
interface msdyn_fieldserviceslaconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_fieldserviceslaconfigurationid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { msdyn_fieldserviceslaconfigurationid: string | null }, {  }>;
  msdyn_slakpiname: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { msdyn_slakpiname: string | null }, {  }>;
  msdyn_slatype: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { msdyn_slatype: msdyn_slatype | null }, { msdyn_slatype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { statecode: msdyn_fieldserviceslaconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { statuscode: msdyn_fieldserviceslaconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_fieldserviceslaconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_fieldserviceslaconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_fieldserviceslaconfigurationid: XQW.Guid;
  msdyn_slakpiname: string;
  msdyn_slatype: msdyn_slatype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_fieldserviceslaconfiguration_statecode;
  statuscode: msdyn_fieldserviceslaconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_fieldserviceslaconfiguration_Expand {
  createdby: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_fieldserviceslaconfiguration_AsyncOperations: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_fieldserviceslaconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_fieldserviceslaconfiguration_BulkDeleteFailures: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_fieldserviceslaconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_fieldserviceslaconfiguration_MailboxTrackingFolders: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_fieldserviceslaconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_fieldserviceslaconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_fieldserviceslaconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_fieldserviceslaconfiguration_ProcessSession: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_fieldserviceslaconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_fieldserviceslaconfiguration_SyncErrors: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_fieldserviceslaconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_fieldserviceslaconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_fieldserviceslaconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_fieldserviceslaconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_fieldserviceslaconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_slatype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_fieldserviceslaconfiguration_Result extends msdyn_fieldserviceslaconfiguration_Base, msdyn_fieldserviceslaconfiguration_Relationships {
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
interface msdyn_fieldserviceslaconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_fieldserviceslaconfiguration_RelatedMany {
  msdyn_fieldserviceslaconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_fieldserviceslaconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_fieldserviceslaconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_fieldserviceslaconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_fieldserviceslaconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_fieldserviceslaconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_fieldserviceslaconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_fieldserviceslaconfigurations: WebMappingRetrieve<msdyn_fieldserviceslaconfiguration_Select,msdyn_fieldserviceslaconfiguration_Expand,msdyn_fieldserviceslaconfiguration_Filter,msdyn_fieldserviceslaconfiguration_Fixed,msdyn_fieldserviceslaconfiguration_Result,msdyn_fieldserviceslaconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_fieldserviceslaconfigurations: WebMappingRelated<msdyn_fieldserviceslaconfiguration_RelatedOne,msdyn_fieldserviceslaconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_fieldserviceslaconfigurations: WebMappingCUDA<msdyn_fieldserviceslaconfiguration_Create,msdyn_fieldserviceslaconfiguration_Update,msdyn_fieldserviceslaconfiguration_Select>;
}
