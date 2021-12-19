interface msdyn_smsengagementctx_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_countrycode?: string | null;
  msdyn_customerphonenumber?: string | null;
  msdyn_name?: string | null;
  msdyn_orgphonenumber?: string | null;
  msdyn_smsengagementctxid?: string | null;
  msdyn_smsengagementid?: string | null;
  msdyn_smsprovider?: msdyn_smsprovider | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_smsengagementctx_statecode | null;
  statuscode?: msdyn_smsengagementctx_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_smsengagementctx_Relationships {
  msdyn_smsengagementctx_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_smsengagementctx_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_smsengagementctx_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_smsengagementctx_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_smsengagementctx_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_smsengagementctx_SyncErrors?: SyncError_Result[] | null;
  msdyn_smsengagementctx_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_smsengagementctx extends msdyn_smsengagementctx_Base, msdyn_smsengagementctx_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_smsengagementctx_Create extends msdyn_smsengagementctx {
}
interface msdyn_smsengagementctx_Update extends msdyn_smsengagementctx {
}
interface msdyn_smsengagementctx_Select {
  createdby_guid: WebAttribute<msdyn_smsengagementctx_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_smsengagementctx_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_smsengagementctx_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_smsengagementctx_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_smsengagementctx_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_smsengagementctx_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_smsengagementctx_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_countrycode: WebAttribute<msdyn_smsengagementctx_Select, { msdyn_countrycode: string | null }, {  }>;
  msdyn_customerphonenumber: WebAttribute<msdyn_smsengagementctx_Select, { msdyn_customerphonenumber: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_smsengagementctx_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_smsengagementctx_Select, { msdyn_name: string | null }, {  }>;
  msdyn_orgphonenumber: WebAttribute<msdyn_smsengagementctx_Select, { msdyn_orgphonenumber: string | null }, {  }>;
  msdyn_smsengagementctxid: WebAttribute<msdyn_smsengagementctx_Select, { msdyn_smsengagementctxid: string | null }, {  }>;
  msdyn_smsengagementid: WebAttribute<msdyn_smsengagementctx_Select, { msdyn_smsengagementid: string | null }, {  }>;
  msdyn_smsprovider: WebAttribute<msdyn_smsengagementctx_Select, { msdyn_smsprovider: msdyn_smsprovider | null }, { msdyn_smsprovider_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_smsengagementctx_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_smsengagementctx_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_smsengagementctx_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_smsengagementctx_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_smsengagementctx_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_smsengagementctx_Select, { statecode: msdyn_smsengagementctx_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_smsengagementctx_Select, { statuscode: msdyn_smsengagementctx_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_smsengagementctx_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_smsengagementctx_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_smsengagementctx_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_smsengagementctx_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_countrycode: string;
  msdyn_customerphonenumber: string;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_orgphonenumber: string;
  msdyn_smsengagementctxid: XQW.Guid;
  msdyn_smsengagementid: string;
  msdyn_smsprovider: msdyn_smsprovider;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_smsengagementctx_statecode;
  statuscode: msdyn_smsengagementctx_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_smsengagementctx_Expand {
  createdby: WebExpand<msdyn_smsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_smsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_smsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_smsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkitemid: WebExpand<msdyn_smsengagementctx_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_smsengagementctx_AsyncOperations: WebExpand<msdyn_smsengagementctx_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_smsengagementctx_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_smsengagementctx_BulkDeleteFailures: WebExpand<msdyn_smsengagementctx_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_smsengagementctx_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_smsengagementctx_MailboxTrackingFolders: WebExpand<msdyn_smsengagementctx_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_smsengagementctx_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_smsengagementctx_PrincipalObjectAttributeAccesses: WebExpand<msdyn_smsengagementctx_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_smsengagementctx_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_smsengagementctx_ProcessSession: WebExpand<msdyn_smsengagementctx_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_smsengagementctx_ProcessSession: ProcessSession_Result[] }>;
  msdyn_smsengagementctx_SyncErrors: WebExpand<msdyn_smsengagementctx_Expand, SyncError_Select, SyncError_Filter, { msdyn_smsengagementctx_SyncErrors: SyncError_Result[] }>;
  msdyn_smsengagementctx_UserEntityInstanceDatas: WebExpand<msdyn_smsengagementctx_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_smsengagementctx_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_smsengagementctx_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_smsengagementctx_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_smsengagementctx_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_smsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_smsengagementctx_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkitemid_formatted?: string;
  msdyn_smsprovider_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_smsengagementctx_Result extends msdyn_smsengagementctx_Base, msdyn_smsengagementctx_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_smsengagementctx_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_smsengagementctx_RelatedMany {
  msdyn_smsengagementctx_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_smsengagementctx_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_smsengagementctx_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_smsengagementctx_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_smsengagementctx_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_smsengagementctx_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_smsengagementctx_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_smsengagementctxes: WebMappingRetrieve<msdyn_smsengagementctx_Select,msdyn_smsengagementctx_Expand,msdyn_smsengagementctx_Filter,msdyn_smsengagementctx_Fixed,msdyn_smsengagementctx_Result,msdyn_smsengagementctx_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_smsengagementctxes: WebMappingRelated<msdyn_smsengagementctx_RelatedOne,msdyn_smsengagementctx_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_smsengagementctxes: WebMappingCUDA<msdyn_smsengagementctx_Create,msdyn_smsengagementctx_Update,msdyn_smsengagementctx_Select>;
}
