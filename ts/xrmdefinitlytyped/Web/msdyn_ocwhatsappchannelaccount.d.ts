interface msdyn_ocwhatsappchannelaccount_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_authenticationtoken?: string | null;
  msdyn_name?: string | null;
  msdyn_ocwhatsappchannelaccountid?: string | null;
  msdyn_provideraccountid?: string | null;
  msdyn_twilioinboundurl?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocwhatsappchannelaccount_statecode | null;
  statuscode?: msdyn_ocwhatsappchannelaccount_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocwhatsappchannelaccount_Relationships {
  msdyn_ocwhatsappchannelaccount_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocwhatsappchannelaccount_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocwhatsappchannelaccount_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocwhatsappchannelaccount_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocwhatsappchannelaccount_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocwhatsappchannelaccount_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocwhatsappchannelaccount_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocwhatsappchannelaccount_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocwhatsappchannelaccount_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_ocwhatsappchannelaccount_msdyn_ocprovisioningstate_msdyn_ocwhatsappchannelaccountId?: msdyn_ocprovisioningstate_Result[] | null;
  msdyn_ocwhatsappchannelaccount_msdyn_ocwhatsappchannelnumber_ocwhatsappaccountid?: msdyn_ocwhatsappchannelnumber_Result[] | null;
}
interface msdyn_ocwhatsappchannelaccount extends msdyn_ocwhatsappchannelaccount_Base, msdyn_ocwhatsappchannelaccount_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocwhatsappchannelaccount_Create extends msdyn_ocwhatsappchannelaccount {
}
interface msdyn_ocwhatsappchannelaccount_Update extends msdyn_ocwhatsappchannelaccount {
}
interface msdyn_ocwhatsappchannelaccount_Select {
  createdby_guid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_authenticationtoken: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { msdyn_authenticationtoken: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocwhatsappchannelaccountid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { msdyn_ocwhatsappchannelaccountid: string | null }, {  }>;
  msdyn_provideraccountid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { msdyn_provideraccountid: string | null }, {  }>;
  msdyn_twilioinboundurl: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { msdyn_twilioinboundurl: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { statecode: msdyn_ocwhatsappchannelaccount_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { statuscode: msdyn_ocwhatsappchannelaccount_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocwhatsappchannelaccount_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocwhatsappchannelaccount_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_authenticationtoken: string;
  msdyn_name: string;
  msdyn_ocwhatsappchannelaccountid: XQW.Guid;
  msdyn_provideraccountid: string;
  msdyn_twilioinboundurl: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocwhatsappchannelaccount_statecode;
  statuscode: msdyn_ocwhatsappchannelaccount_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocwhatsappchannelaccount_Expand {
  createdby: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocwhatsappchannelaccount_AsyncOperations: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocwhatsappchannelaccount_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocwhatsappchannelaccount_BulkDeleteFailures: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocwhatsappchannelaccount_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocwhatsappchannelaccount_DuplicateBaseRecord: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocwhatsappchannelaccount_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocwhatsappchannelaccount_DuplicateMatchingRecord: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocwhatsappchannelaccount_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocwhatsappchannelaccount_MailboxTrackingFolders: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocwhatsappchannelaccount_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocwhatsappchannelaccount_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocwhatsappchannelaccount_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocwhatsappchannelaccount_ProcessSession: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocwhatsappchannelaccount_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocwhatsappchannelaccount_SyncErrors: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocwhatsappchannelaccount_SyncErrors: SyncError_Result[] }>;
  msdyn_ocwhatsappchannelaccount_UserEntityInstanceDatas: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocwhatsappchannelaccount_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocwhatsappchannelaccount_msdyn_ocprovisioningstate_msdyn_ocwhatsappchannelaccountId: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, msdyn_ocprovisioningstate_Select, msdyn_ocprovisioningstate_Filter, { msdyn_ocwhatsappchannelaccount_msdyn_ocprovisioningstate_msdyn_ocwhatsappchannelaccountId: msdyn_ocprovisioningstate_Result[] }>;
  msdyn_ocwhatsappchannelaccount_msdyn_ocwhatsappchannelnumber_ocwhatsappaccountid: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, msdyn_ocwhatsappchannelnumber_Select, msdyn_ocwhatsappchannelnumber_Filter, { msdyn_ocwhatsappchannelaccount_msdyn_ocwhatsappchannelnumber_ocwhatsappaccountid: msdyn_ocwhatsappchannelnumber_Result[] }>;
  ownerid: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocwhatsappchannelaccount_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocwhatsappchannelaccount_FormattedResult {
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
interface msdyn_ocwhatsappchannelaccount_Result extends msdyn_ocwhatsappchannelaccount_Base, msdyn_ocwhatsappchannelaccount_Relationships {
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
interface msdyn_ocwhatsappchannelaccount_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocwhatsappchannelaccount_RelatedMany {
  msdyn_ocwhatsappchannelaccount_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_msdyn_ocprovisioningstate_msdyn_ocwhatsappchannelaccountId: WebMappingRetrieve<msdyn_ocprovisioningstate_Select,msdyn_ocprovisioningstate_Expand,msdyn_ocprovisioningstate_Filter,msdyn_ocprovisioningstate_Fixed,msdyn_ocprovisioningstate_Result,msdyn_ocprovisioningstate_FormattedResult>;
  msdyn_ocwhatsappchannelaccount_msdyn_ocwhatsappchannelnumber_ocwhatsappaccountid: WebMappingRetrieve<msdyn_ocwhatsappchannelnumber_Select,msdyn_ocwhatsappchannelnumber_Expand,msdyn_ocwhatsappchannelnumber_Filter,msdyn_ocwhatsappchannelnumber_Fixed,msdyn_ocwhatsappchannelnumber_Result,msdyn_ocwhatsappchannelnumber_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocwhatsappchannelaccounts: WebMappingRetrieve<msdyn_ocwhatsappchannelaccount_Select,msdyn_ocwhatsappchannelaccount_Expand,msdyn_ocwhatsappchannelaccount_Filter,msdyn_ocwhatsappchannelaccount_Fixed,msdyn_ocwhatsappchannelaccount_Result,msdyn_ocwhatsappchannelaccount_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocwhatsappchannelaccounts: WebMappingRelated<msdyn_ocwhatsappchannelaccount_RelatedOne,msdyn_ocwhatsappchannelaccount_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocwhatsappchannelaccounts: WebMappingCUDA<msdyn_ocwhatsappchannelaccount_Create,msdyn_ocwhatsappchannelaccount_Update,msdyn_ocwhatsappchannelaccount_Select>;
}
