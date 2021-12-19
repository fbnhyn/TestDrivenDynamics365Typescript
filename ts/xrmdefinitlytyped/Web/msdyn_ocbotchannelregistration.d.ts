interface msdyn_ocbotchannelregistration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_iscustommessagingbcr?: boolean | null;
  msdyn_iscustommessagingcreated?: boolean | null;
  msdyn_lastvalidateddate?: Date | null;
  msdyn_messagingendpoint?: string | null;
  msdyn_msappid?: string | null;
  msdyn_msappsecret?: string | null;
  msdyn_name?: string | null;
  msdyn_ocbotchannelregistrationid?: string | null;
  msdyn_validationstatus?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocbotchannelregistration_statecode | null;
  statuscode?: msdyn_ocbotchannelregistration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocbotchannelregistration_Relationships {
  msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration?: msdyn_occustommessagingchannel_Result[] | null;
  msdyn_ocbotchannelregistration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocbotchannelregistration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocbotchannelregistration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocbotchannelregistration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocbotchannelregistration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocbotchannelregistration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocbotchannelregistration_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocbotchannelregistration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocbotchannelregistration extends msdyn_ocbotchannelregistration_Base, msdyn_ocbotchannelregistration_Relationships {
  msdyn_communicationprovidersettingid_bind$msdyn_occommunicationprovidersettings?: string | null;
  msdyn_ocfbapplicationid_bind$msdyn_ocfbapplications?: string | null;
  msdyn_oclinechannelconfigid_bind$msdyn_oclinechannelconfigs?: string | null;
  msdyn_octeamschannelconfigid_bind$msdyn_octeamschannelconfigs?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocbotchannelregistration_Create extends msdyn_ocbotchannelregistration {
}
interface msdyn_ocbotchannelregistration_Update extends msdyn_ocbotchannelregistration {
}
interface msdyn_ocbotchannelregistration_Select {
  createdby_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocbotchannelregistration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocbotchannelregistration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocbotchannelregistration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_communicationprovidersettingid_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_communicationprovidersettingid_guid: string | null }, { msdyn_communicationprovidersettingid_formatted?: string }>;
  msdyn_iscustommessagingbcr: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_iscustommessagingbcr: boolean | null }, {  }>;
  msdyn_iscustommessagingcreated: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_iscustommessagingcreated: boolean | null }, {  }>;
  msdyn_lastvalidateddate: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_lastvalidateddate: Date | null }, { msdyn_lastvalidateddate_formatted?: string }>;
  msdyn_messagingendpoint: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_messagingendpoint: string | null }, {  }>;
  msdyn_msappid: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_msappid: string | null }, {  }>;
  msdyn_msappsecret: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_msappsecret: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocbotchannelregistrationid: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_ocbotchannelregistrationid: string | null }, {  }>;
  msdyn_ocfbapplicationid_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_ocfbapplicationid_guid: string | null }, { msdyn_ocfbapplicationid_formatted?: string }>;
  msdyn_oclinechannelconfigid_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_oclinechannelconfigid_guid: string | null }, { msdyn_oclinechannelconfigid_formatted?: string }>;
  msdyn_octeamschannelconfigid_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_octeamschannelconfigid_guid: string | null }, { msdyn_octeamschannelconfigid_formatted?: string }>;
  msdyn_validationstatus: WebAttribute<msdyn_ocbotchannelregistration_Select, { msdyn_validationstatus: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocbotchannelregistration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocbotchannelregistration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocbotchannelregistration_Select, { statecode: msdyn_ocbotchannelregistration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocbotchannelregistration_Select, { statuscode: msdyn_ocbotchannelregistration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocbotchannelregistration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocbotchannelregistration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocbotchannelregistration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocbotchannelregistration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_communicationprovidersettingid_guid: XQW.Guid;
  msdyn_iscustommessagingbcr: boolean;
  msdyn_iscustommessagingcreated: boolean;
  msdyn_lastvalidateddate: Date;
  msdyn_messagingendpoint: string;
  msdyn_msappid: string;
  msdyn_msappsecret: string;
  msdyn_name: string;
  msdyn_ocbotchannelregistrationid: XQW.Guid;
  msdyn_ocfbapplicationid_guid: XQW.Guid;
  msdyn_oclinechannelconfigid_guid: XQW.Guid;
  msdyn_octeamschannelconfigid_guid: XQW.Guid;
  msdyn_validationstatus: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocbotchannelregistration_statecode;
  statuscode: msdyn_ocbotchannelregistration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocbotchannelregistration_Expand {
  createdby: WebExpand<msdyn_ocbotchannelregistration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocbotchannelregistration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocbotchannelregistration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocbotchannelregistration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_communicationprovidersettingid: WebExpand<msdyn_ocbotchannelregistration_Expand, msdyn_occommunicationprovidersetting_Select, msdyn_occommunicationprovidersetting_Filter, { msdyn_communicationprovidersettingid: msdyn_occommunicationprovidersetting_Result }>;
  msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration: WebExpand<msdyn_ocbotchannelregistration_Expand, msdyn_occustommessagingchannel_Select, msdyn_occustommessagingchannel_Filter, { msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration: msdyn_occustommessagingchannel_Result[] }>;
  msdyn_ocbotchannelregistration_AsyncOperations: WebExpand<msdyn_ocbotchannelregistration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocbotchannelregistration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocbotchannelregistration_BulkDeleteFailures: WebExpand<msdyn_ocbotchannelregistration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocbotchannelregistration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocbotchannelregistration_DuplicateBaseRecord: WebExpand<msdyn_ocbotchannelregistration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocbotchannelregistration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocbotchannelregistration_DuplicateMatchingRecord: WebExpand<msdyn_ocbotchannelregistration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocbotchannelregistration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocbotchannelregistration_MailboxTrackingFolders: WebExpand<msdyn_ocbotchannelregistration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocbotchannelregistration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocbotchannelregistration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocbotchannelregistration_ProcessSession: WebExpand<msdyn_ocbotchannelregistration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocbotchannelregistration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocbotchannelregistration_SyncErrors: WebExpand<msdyn_ocbotchannelregistration_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocbotchannelregistration_SyncErrors: SyncError_Result[] }>;
  msdyn_ocbotchannelregistration_UserEntityInstanceDatas: WebExpand<msdyn_ocbotchannelregistration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocbotchannelregistration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocfbapplicationid: WebExpand<msdyn_ocbotchannelregistration_Expand, msdyn_ocfbapplication_Select, msdyn_ocfbapplication_Filter, { msdyn_ocfbapplicationid: msdyn_ocfbapplication_Result }>;
  msdyn_oclinechannelconfigid: WebExpand<msdyn_ocbotchannelregistration_Expand, msdyn_oclinechannelconfig_Select, msdyn_oclinechannelconfig_Filter, { msdyn_oclinechannelconfigid: msdyn_oclinechannelconfig_Result }>;
  msdyn_octeamschannelconfigid: WebExpand<msdyn_ocbotchannelregistration_Expand, msdyn_octeamschannelconfig_Select, msdyn_octeamschannelconfig_Filter, { msdyn_octeamschannelconfigid: msdyn_octeamschannelconfig_Result }>;
  ownerid: WebExpand<msdyn_ocbotchannelregistration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocbotchannelregistration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocbotchannelregistration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocbotchannelregistration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocbotchannelregistration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_communicationprovidersettingid_formatted?: string;
  msdyn_lastvalidateddate_formatted?: string;
  msdyn_ocfbapplicationid_formatted?: string;
  msdyn_oclinechannelconfigid_formatted?: string;
  msdyn_octeamschannelconfigid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocbotchannelregistration_Result extends msdyn_ocbotchannelregistration_Base, msdyn_ocbotchannelregistration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_communicationprovidersettingid_guid: string | null;
  msdyn_ocfbapplicationid_guid: string | null;
  msdyn_oclinechannelconfigid_guid: string | null;
  msdyn_octeamschannelconfigid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocbotchannelregistration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_communicationprovidersettingid: WebMappingRetrieve<msdyn_occommunicationprovidersetting_Select,msdyn_occommunicationprovidersetting_Expand,msdyn_occommunicationprovidersetting_Filter,msdyn_occommunicationprovidersetting_Fixed,msdyn_occommunicationprovidersetting_Result,msdyn_occommunicationprovidersetting_FormattedResult>;
  msdyn_ocfbapplicationid: WebMappingRetrieve<msdyn_ocfbapplication_Select,msdyn_ocfbapplication_Expand,msdyn_ocfbapplication_Filter,msdyn_ocfbapplication_Fixed,msdyn_ocfbapplication_Result,msdyn_ocfbapplication_FormattedResult>;
  msdyn_oclinechannelconfigid: WebMappingRetrieve<msdyn_oclinechannelconfig_Select,msdyn_oclinechannelconfig_Expand,msdyn_oclinechannelconfig_Filter,msdyn_oclinechannelconfig_Fixed,msdyn_oclinechannelconfig_Result,msdyn_oclinechannelconfig_FormattedResult>;
  msdyn_octeamschannelconfigid: WebMappingRetrieve<msdyn_octeamschannelconfig_Select,msdyn_octeamschannelconfig_Expand,msdyn_octeamschannelconfig_Filter,msdyn_octeamschannelconfig_Fixed,msdyn_octeamschannelconfig_Result,msdyn_octeamschannelconfig_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocbotchannelregistration_RelatedMany {
  msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration: WebMappingRetrieve<msdyn_occustommessagingchannel_Select,msdyn_occustommessagingchannel_Expand,msdyn_occustommessagingchannel_Filter,msdyn_occustommessagingchannel_Fixed,msdyn_occustommessagingchannel_Result,msdyn_occustommessagingchannel_FormattedResult>;
  msdyn_ocbotchannelregistration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocbotchannelregistration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocbotchannelregistration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocbotchannelregistration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocbotchannelregistration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocbotchannelregistration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocbotchannelregistration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocbotchannelregistration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocbotchannelregistrations: WebMappingRetrieve<msdyn_ocbotchannelregistration_Select,msdyn_ocbotchannelregistration_Expand,msdyn_ocbotchannelregistration_Filter,msdyn_ocbotchannelregistration_Fixed,msdyn_ocbotchannelregistration_Result,msdyn_ocbotchannelregistration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocbotchannelregistrations: WebMappingRelated<msdyn_ocbotchannelregistration_RelatedOne,msdyn_ocbotchannelregistration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocbotchannelregistrations: WebMappingCUDA<msdyn_ocbotchannelregistration_Create,msdyn_ocbotchannelregistration_Update,msdyn_ocbotchannelregistration_Select>;
}
