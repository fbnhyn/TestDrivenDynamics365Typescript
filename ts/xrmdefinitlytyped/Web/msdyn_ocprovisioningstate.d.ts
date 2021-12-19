interface msdyn_ocprovisioningstate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_errormessage?: string | null;
  msdyn_exceptiondetails?: string | null;
  msdyn_name?: string | null;
  msdyn_ocprovisioningstateid?: string | null;
  msdyn_provisioningresponse?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocprovisioningstate_statecode | null;
  statuscode?: msdyn_ocprovisioningstate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocprovisioningstate_Relationships {
  msdyn_ocprovisioningstate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocprovisioningstate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocprovisioningstate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocprovisioningstate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocprovisioningstate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocprovisioningstate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocprovisioningstate_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocprovisioningstate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_ocwhatsappchannelaccountId?: msdyn_ocwhatsappchannelaccount_Result | null;
}
interface msdyn_ocprovisioningstate extends msdyn_ocprovisioningstate_Base, msdyn_ocprovisioningstate_Relationships {
  msdyn_communicationprovidersettingid_bind$msdyn_occommunicationprovidersettings?: string | null;
  msdyn_ocfbapplicationid_bind$msdyn_ocfbapplications?: string | null;
  msdyn_ocfbpageid_bind$msdyn_ocfbpages?: string | null;
  msdyn_oclinechannelconfigid_bind$msdyn_oclinechannelconfigs?: string | null;
  msdyn_octeamschannelconfigid_bind$msdyn_octeamschannelconfigs?: string | null;
  msdyn_ocwhatsappchannelaccountId_bind$msdyn_ocwhatsappchannelaccounts?: string | null;
  msdyn_phonenumberid_bind$msdyn_ocphonenumbers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocprovisioningstate_Create extends msdyn_ocprovisioningstate {
}
interface msdyn_ocprovisioningstate_Update extends msdyn_ocprovisioningstate {
}
interface msdyn_ocprovisioningstate_Select {
  createdby_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocprovisioningstate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocprovisioningstate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocprovisioningstate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_communicationprovidersettingid_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_communicationprovidersettingid_guid: string | null }, { msdyn_communicationprovidersettingid_formatted?: string }>;
  msdyn_errormessage: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_errormessage: string | null }, {  }>;
  msdyn_exceptiondetails: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_exceptiondetails: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocfbapplicationid_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_ocfbapplicationid_guid: string | null }, { msdyn_ocfbapplicationid_formatted?: string }>;
  msdyn_ocfbpageid_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_ocfbpageid_guid: string | null }, { msdyn_ocfbpageid_formatted?: string }>;
  msdyn_oclinechannelconfigid_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_oclinechannelconfigid_guid: string | null }, { msdyn_oclinechannelconfigid_formatted?: string }>;
  msdyn_ocprovisioningstateid: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_ocprovisioningstateid: string | null }, {  }>;
  msdyn_octeamschannelconfigid_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_octeamschannelconfigid_guid: string | null }, { msdyn_octeamschannelconfigid_formatted?: string }>;
  msdyn_ocwhatsappchannelaccountid_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_ocwhatsappchannelaccountid_guid: string | null }, { msdyn_ocwhatsappchannelaccountid_formatted?: string }>;
  msdyn_phonenumberid_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_phonenumberid_guid: string | null }, { msdyn_phonenumberid_formatted?: string }>;
  msdyn_provisioningresponse: WebAttribute<msdyn_ocprovisioningstate_Select, { msdyn_provisioningresponse: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocprovisioningstate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocprovisioningstate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocprovisioningstate_Select, { statecode: msdyn_ocprovisioningstate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocprovisioningstate_Select, { statuscode: msdyn_ocprovisioningstate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocprovisioningstate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocprovisioningstate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocprovisioningstate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocprovisioningstate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_communicationprovidersettingid_guid: XQW.Guid;
  msdyn_errormessage: string;
  msdyn_exceptiondetails: string;
  msdyn_name: string;
  msdyn_ocfbapplicationid_guid: XQW.Guid;
  msdyn_ocfbpageid_guid: XQW.Guid;
  msdyn_oclinechannelconfigid_guid: XQW.Guid;
  msdyn_ocprovisioningstateid: XQW.Guid;
  msdyn_octeamschannelconfigid_guid: XQW.Guid;
  msdyn_ocwhatsappchannelaccountid_guid: XQW.Guid;
  msdyn_phonenumberid_guid: XQW.Guid;
  msdyn_provisioningresponse: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocprovisioningstate_statecode;
  statuscode: msdyn_ocprovisioningstate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocprovisioningstate_Expand {
  createdby: WebExpand<msdyn_ocprovisioningstate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocprovisioningstate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocprovisioningstate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocprovisioningstate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_communicationprovidersettingid: WebExpand<msdyn_ocprovisioningstate_Expand, msdyn_occommunicationprovidersetting_Select, msdyn_occommunicationprovidersetting_Filter, { msdyn_communicationprovidersettingid: msdyn_occommunicationprovidersetting_Result }>;
  msdyn_ocfbapplicationid: WebExpand<msdyn_ocprovisioningstate_Expand, msdyn_ocfbapplication_Select, msdyn_ocfbapplication_Filter, { msdyn_ocfbapplicationid: msdyn_ocfbapplication_Result }>;
  msdyn_ocfbpageid: WebExpand<msdyn_ocprovisioningstate_Expand, msdyn_ocfbpage_Select, msdyn_ocfbpage_Filter, { msdyn_ocfbpageid: msdyn_ocfbpage_Result }>;
  msdyn_oclinechannelconfigid: WebExpand<msdyn_ocprovisioningstate_Expand, msdyn_oclinechannelconfig_Select, msdyn_oclinechannelconfig_Filter, { msdyn_oclinechannelconfigid: msdyn_oclinechannelconfig_Result }>;
  msdyn_ocprovisioningstate_AsyncOperations: WebExpand<msdyn_ocprovisioningstate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocprovisioningstate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocprovisioningstate_BulkDeleteFailures: WebExpand<msdyn_ocprovisioningstate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocprovisioningstate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocprovisioningstate_DuplicateBaseRecord: WebExpand<msdyn_ocprovisioningstate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocprovisioningstate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocprovisioningstate_DuplicateMatchingRecord: WebExpand<msdyn_ocprovisioningstate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocprovisioningstate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocprovisioningstate_MailboxTrackingFolders: WebExpand<msdyn_ocprovisioningstate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocprovisioningstate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocprovisioningstate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocprovisioningstate_ProcessSession: WebExpand<msdyn_ocprovisioningstate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocprovisioningstate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocprovisioningstate_SyncErrors: WebExpand<msdyn_ocprovisioningstate_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocprovisioningstate_SyncErrors: SyncError_Result[] }>;
  msdyn_ocprovisioningstate_UserEntityInstanceDatas: WebExpand<msdyn_ocprovisioningstate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocprovisioningstate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_octeamschannelconfigid: WebExpand<msdyn_ocprovisioningstate_Expand, msdyn_octeamschannelconfig_Select, msdyn_octeamschannelconfig_Filter, { msdyn_octeamschannelconfigid: msdyn_octeamschannelconfig_Result }>;
  msdyn_ocwhatsappchannelaccountId: WebExpand<msdyn_ocprovisioningstate_Expand, msdyn_ocwhatsappchannelaccount_Select, msdyn_ocwhatsappchannelaccount_Filter, { msdyn_ocwhatsappchannelaccountId: msdyn_ocwhatsappchannelaccount_Result }>;
  msdyn_phonenumberid: WebExpand<msdyn_ocprovisioningstate_Expand, msdyn_ocphonenumber_Select, msdyn_ocphonenumber_Filter, { msdyn_phonenumberid: msdyn_ocphonenumber_Result }>;
  ownerid: WebExpand<msdyn_ocprovisioningstate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocprovisioningstate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocprovisioningstate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocprovisioningstate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocprovisioningstate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_communicationprovidersettingid_formatted?: string;
  msdyn_ocfbapplicationid_formatted?: string;
  msdyn_ocfbpageid_formatted?: string;
  msdyn_oclinechannelconfigid_formatted?: string;
  msdyn_octeamschannelconfigid_formatted?: string;
  msdyn_ocwhatsappchannelaccountid_formatted?: string;
  msdyn_phonenumberid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocprovisioningstate_Result extends msdyn_ocprovisioningstate_Base, msdyn_ocprovisioningstate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_communicationprovidersettingid_guid: string | null;
  msdyn_ocfbapplicationid_guid: string | null;
  msdyn_ocfbpageid_guid: string | null;
  msdyn_oclinechannelconfigid_guid: string | null;
  msdyn_octeamschannelconfigid_guid: string | null;
  msdyn_ocwhatsappchannelaccountid_guid: string | null;
  msdyn_phonenumberid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocprovisioningstate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_communicationprovidersettingid: WebMappingRetrieve<msdyn_occommunicationprovidersetting_Select,msdyn_occommunicationprovidersetting_Expand,msdyn_occommunicationprovidersetting_Filter,msdyn_occommunicationprovidersetting_Fixed,msdyn_occommunicationprovidersetting_Result,msdyn_occommunicationprovidersetting_FormattedResult>;
  msdyn_ocfbapplicationid: WebMappingRetrieve<msdyn_ocfbapplication_Select,msdyn_ocfbapplication_Expand,msdyn_ocfbapplication_Filter,msdyn_ocfbapplication_Fixed,msdyn_ocfbapplication_Result,msdyn_ocfbapplication_FormattedResult>;
  msdyn_ocfbpageid: WebMappingRetrieve<msdyn_ocfbpage_Select,msdyn_ocfbpage_Expand,msdyn_ocfbpage_Filter,msdyn_ocfbpage_Fixed,msdyn_ocfbpage_Result,msdyn_ocfbpage_FormattedResult>;
  msdyn_oclinechannelconfigid: WebMappingRetrieve<msdyn_oclinechannelconfig_Select,msdyn_oclinechannelconfig_Expand,msdyn_oclinechannelconfig_Filter,msdyn_oclinechannelconfig_Fixed,msdyn_oclinechannelconfig_Result,msdyn_oclinechannelconfig_FormattedResult>;
  msdyn_octeamschannelconfigid: WebMappingRetrieve<msdyn_octeamschannelconfig_Select,msdyn_octeamschannelconfig_Expand,msdyn_octeamschannelconfig_Filter,msdyn_octeamschannelconfig_Fixed,msdyn_octeamschannelconfig_Result,msdyn_octeamschannelconfig_FormattedResult>;
  msdyn_ocwhatsappchannelaccountId: WebMappingRetrieve<msdyn_ocwhatsappchannelaccount_Select,msdyn_ocwhatsappchannelaccount_Expand,msdyn_ocwhatsappchannelaccount_Filter,msdyn_ocwhatsappchannelaccount_Fixed,msdyn_ocwhatsappchannelaccount_Result,msdyn_ocwhatsappchannelaccount_FormattedResult>;
  msdyn_phonenumberid: WebMappingRetrieve<msdyn_ocphonenumber_Select,msdyn_ocphonenumber_Expand,msdyn_ocphonenumber_Filter,msdyn_ocphonenumber_Fixed,msdyn_ocphonenumber_Result,msdyn_ocphonenumber_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocprovisioningstate_RelatedMany {
  msdyn_ocprovisioningstate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocprovisioningstate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocprovisioningstate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocprovisioningstate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocprovisioningstate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocprovisioningstate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocprovisioningstate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocprovisioningstate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocprovisioningstates: WebMappingRetrieve<msdyn_ocprovisioningstate_Select,msdyn_ocprovisioningstate_Expand,msdyn_ocprovisioningstate_Filter,msdyn_ocprovisioningstate_Fixed,msdyn_ocprovisioningstate_Result,msdyn_ocprovisioningstate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocprovisioningstates: WebMappingRelated<msdyn_ocprovisioningstate_RelatedOne,msdyn_ocprovisioningstate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocprovisioningstates: WebMappingCUDA<msdyn_ocprovisioningstate_Create,msdyn_ocprovisioningstate_Update,msdyn_ocprovisioningstate_Select>;
}
