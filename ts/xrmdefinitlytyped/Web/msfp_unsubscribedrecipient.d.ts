interface msfp_unsubscribedrecipient_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_emailaddress?: string | null;
  msfp_name?: string | null;
  msfp_unsubscribedrecipientid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_unsubscribedrecipient_statecode | null;
  statuscode?: msfp_unsubscribedrecipient_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_unsubscribedrecipient_Relationships {
  msfp_msfp_unsubscribedrecipient_msfp_surveyinvite?: msfp_surveyinvite_Result[] | null;
  msfp_unsubscribedrecipient_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_unsubscribedrecipient_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_unsubscribedrecipient_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_unsubscribedrecipient_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_unsubscribedrecipient_ProcessSession?: ProcessSession_Result[] | null;
  msfp_unsubscribedrecipient_SyncErrors?: SyncError_Result[] | null;
  msfp_unsubscribedrecipient_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_unsubscribedrecipient extends msfp_unsubscribedrecipient_Base, msfp_unsubscribedrecipient_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_unsubscribedrecipient_Create extends msfp_unsubscribedrecipient {
}
interface msfp_unsubscribedrecipient_Update extends msfp_unsubscribedrecipient {
}
interface msfp_unsubscribedrecipient_Select {
  createdby_guid: WebAttribute<msfp_unsubscribedrecipient_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_unsubscribedrecipient_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_unsubscribedrecipient_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_unsubscribedrecipient_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_unsubscribedrecipient_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_unsubscribedrecipient_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_unsubscribedrecipient_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_emailaddress: WebAttribute<msfp_unsubscribedrecipient_Select, { msfp_emailaddress: string | null }, {  }>;
  msfp_name: WebAttribute<msfp_unsubscribedrecipient_Select, { msfp_name: string | null }, {  }>;
  msfp_unsubscribedrecipientid: WebAttribute<msfp_unsubscribedrecipient_Select, { msfp_unsubscribedrecipientid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msfp_unsubscribedrecipient_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_unsubscribedrecipient_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_unsubscribedrecipient_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_unsubscribedrecipient_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_unsubscribedrecipient_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_unsubscribedrecipient_Select, { statecode: msfp_unsubscribedrecipient_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_unsubscribedrecipient_Select, { statuscode: msfp_unsubscribedrecipient_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_unsubscribedrecipient_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_unsubscribedrecipient_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_unsubscribedrecipient_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_unsubscribedrecipient_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_emailaddress: string;
  msfp_name: string;
  msfp_unsubscribedrecipientid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_unsubscribedrecipient_statecode;
  statuscode: msfp_unsubscribedrecipient_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_unsubscribedrecipient_Expand {
  createdby: WebExpand<msfp_unsubscribedrecipient_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_unsubscribedrecipient_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_unsubscribedrecipient_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_unsubscribedrecipient_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_msfp_unsubscribedrecipient_msfp_surveyinvite: WebExpand<msfp_unsubscribedrecipient_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msfp_msfp_unsubscribedrecipient_msfp_surveyinvite: msfp_surveyinvite_Result[] }>;
  msfp_unsubscribedrecipient_AsyncOperations: WebExpand<msfp_unsubscribedrecipient_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_unsubscribedrecipient_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_unsubscribedrecipient_BulkDeleteFailures: WebExpand<msfp_unsubscribedrecipient_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_unsubscribedrecipient_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_unsubscribedrecipient_MailboxTrackingFolders: WebExpand<msfp_unsubscribedrecipient_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_unsubscribedrecipient_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_unsubscribedrecipient_PrincipalObjectAttributeAccesses: WebExpand<msfp_unsubscribedrecipient_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_unsubscribedrecipient_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_unsubscribedrecipient_ProcessSession: WebExpand<msfp_unsubscribedrecipient_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_unsubscribedrecipient_ProcessSession: ProcessSession_Result[] }>;
  msfp_unsubscribedrecipient_SyncErrors: WebExpand<msfp_unsubscribedrecipient_Expand, SyncError_Select, SyncError_Filter, { msfp_unsubscribedrecipient_SyncErrors: SyncError_Result[] }>;
  msfp_unsubscribedrecipient_UserEntityInstanceDatas: WebExpand<msfp_unsubscribedrecipient_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_unsubscribedrecipient_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msfp_unsubscribedrecipient_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_unsubscribedrecipient_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_unsubscribedrecipient_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_unsubscribedrecipient_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_unsubscribedrecipient_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_unsubscribedrecipient_Result extends msfp_unsubscribedrecipient_Base, msfp_unsubscribedrecipient_Relationships {
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
interface msfp_unsubscribedrecipient_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_unsubscribedrecipient_RelatedMany {
  msfp_msfp_unsubscribedrecipient_msfp_surveyinvite: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msfp_unsubscribedrecipient_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_unsubscribedrecipient_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_unsubscribedrecipient_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_unsubscribedrecipient_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_unsubscribedrecipient_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_unsubscribedrecipient_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_unsubscribedrecipient_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_unsubscribedrecipients: WebMappingRetrieve<msfp_unsubscribedrecipient_Select,msfp_unsubscribedrecipient_Expand,msfp_unsubscribedrecipient_Filter,msfp_unsubscribedrecipient_Fixed,msfp_unsubscribedrecipient_Result,msfp_unsubscribedrecipient_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_unsubscribedrecipients: WebMappingRelated<msfp_unsubscribedrecipient_RelatedOne,msfp_unsubscribedrecipient_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_unsubscribedrecipients: WebMappingCUDA<msfp_unsubscribedrecipient_Create,msfp_unsubscribedrecipient_Update,msfp_unsubscribedrecipient_Select>;
}
