interface msfp_localizedemailtemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_emailtemplatebody?: string | null;
  msfp_emailtemplatesubject?: string | null;
  msfp_language?: string | null;
  msfp_localizedemailtemplateid?: string | null;
  msfp_name?: string | null;
  msfp_version?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_localizedemailtemplate_statecode | null;
  statuscode?: msfp_localizedemailtemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_localizedemailtemplate_Relationships {
  msfp_localizedemailtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_localizedemailtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_localizedemailtemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_localizedemailtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_localizedemailtemplate_ProcessSession?: ProcessSession_Result[] | null;
  msfp_localizedemailtemplate_SyncErrors?: SyncError_Result[] | null;
  msfp_localizedemailtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_localizedemailtemplate extends msfp_localizedemailtemplate_Base, msfp_localizedemailtemplate_Relationships {
  msfp_emailtemplateid_bind$msfp_emailtemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_localizedemailtemplate_Create extends msfp_localizedemailtemplate {
}
interface msfp_localizedemailtemplate_Update extends msfp_localizedemailtemplate {
}
interface msfp_localizedemailtemplate_Select {
  createdby_guid: WebAttribute<msfp_localizedemailtemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_localizedemailtemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_localizedemailtemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_localizedemailtemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_localizedemailtemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_localizedemailtemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_localizedemailtemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_emailtemplatebody: WebAttribute<msfp_localizedemailtemplate_Select, { msfp_emailtemplatebody: string | null }, {  }>;
  msfp_emailtemplateid_guid: WebAttribute<msfp_localizedemailtemplate_Select, { msfp_emailtemplateid_guid: string | null }, { msfp_emailtemplateid_formatted?: string }>;
  msfp_emailtemplatesubject: WebAttribute<msfp_localizedemailtemplate_Select, { msfp_emailtemplatesubject: string | null }, {  }>;
  msfp_language: WebAttribute<msfp_localizedemailtemplate_Select, { msfp_language: string | null }, {  }>;
  msfp_localizedemailtemplateid: WebAttribute<msfp_localizedemailtemplate_Select, { msfp_localizedemailtemplateid: string | null }, {  }>;
  msfp_name: WebAttribute<msfp_localizedemailtemplate_Select, { msfp_name: string | null }, {  }>;
  msfp_version: WebAttribute<msfp_localizedemailtemplate_Select, { msfp_version: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msfp_localizedemailtemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_localizedemailtemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_localizedemailtemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_localizedemailtemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_localizedemailtemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_localizedemailtemplate_Select, { statecode: msfp_localizedemailtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_localizedemailtemplate_Select, { statuscode: msfp_localizedemailtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_localizedemailtemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_localizedemailtemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_localizedemailtemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_localizedemailtemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_emailtemplatebody: string;
  msfp_emailtemplateid_guid: XQW.Guid;
  msfp_emailtemplatesubject: string;
  msfp_language: string;
  msfp_localizedemailtemplateid: XQW.Guid;
  msfp_name: string;
  msfp_version: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_localizedemailtemplate_statecode;
  statuscode: msfp_localizedemailtemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_localizedemailtemplate_Expand {
  createdby: WebExpand<msfp_localizedemailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_localizedemailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_localizedemailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_localizedemailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_emailtemplateid: WebExpand<msfp_localizedemailtemplate_Expand, msfp_emailtemplate_Select, msfp_emailtemplate_Filter, { msfp_emailtemplateid: msfp_emailtemplate_Result }>;
  msfp_localizedemailtemplate_AsyncOperations: WebExpand<msfp_localizedemailtemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_localizedemailtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_localizedemailtemplate_BulkDeleteFailures: WebExpand<msfp_localizedemailtemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_localizedemailtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_localizedemailtemplate_MailboxTrackingFolders: WebExpand<msfp_localizedemailtemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_localizedemailtemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_localizedemailtemplate_PrincipalObjectAttributeAccesses: WebExpand<msfp_localizedemailtemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_localizedemailtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_localizedemailtemplate_ProcessSession: WebExpand<msfp_localizedemailtemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_localizedemailtemplate_ProcessSession: ProcessSession_Result[] }>;
  msfp_localizedemailtemplate_SyncErrors: WebExpand<msfp_localizedemailtemplate_Expand, SyncError_Select, SyncError_Filter, { msfp_localizedemailtemplate_SyncErrors: SyncError_Result[] }>;
  msfp_localizedemailtemplate_UserEntityInstanceDatas: WebExpand<msfp_localizedemailtemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_localizedemailtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msfp_localizedemailtemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_localizedemailtemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_localizedemailtemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_localizedemailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_localizedemailtemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_emailtemplateid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_localizedemailtemplate_Result extends msfp_localizedemailtemplate_Base, msfp_localizedemailtemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msfp_emailtemplateid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msfp_localizedemailtemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msfp_emailtemplateid: WebMappingRetrieve<msfp_emailtemplate_Select,msfp_emailtemplate_Expand,msfp_emailtemplate_Filter,msfp_emailtemplate_Fixed,msfp_emailtemplate_Result,msfp_emailtemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_localizedemailtemplate_RelatedMany {
  msfp_localizedemailtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_localizedemailtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_localizedemailtemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_localizedemailtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_localizedemailtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_localizedemailtemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_localizedemailtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_localizedemailtemplates: WebMappingRetrieve<msfp_localizedemailtemplate_Select,msfp_localizedemailtemplate_Expand,msfp_localizedemailtemplate_Filter,msfp_localizedemailtemplate_Fixed,msfp_localizedemailtemplate_Result,msfp_localizedemailtemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_localizedemailtemplates: WebMappingRelated<msfp_localizedemailtemplate_RelatedOne,msfp_localizedemailtemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_localizedemailtemplates: WebMappingCUDA<msfp_localizedemailtemplate_Create,msfp_localizedemailtemplate_Update,msfp_localizedemailtemplate_Select>;
}
