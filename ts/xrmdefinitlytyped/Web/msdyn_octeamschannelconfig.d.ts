interface msdyn_octeamschannelconfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_botid?: string | null;
  msdyn_enablefileattachmentsforagents?: boolean | null;
  msdyn_enablefileattachmentsforcustomers?: boolean | null;
  msdyn_name?: string | null;
  msdyn_octeamschannelconfigid?: string | null;
  msdyn_postconversationsurveyenable?: boolean | null;
  msdyn_postconversationsurveymessagetext?: string | null;
  msdyn_postconversationsurveymode?: msdyn_postconversationsurveymode | null;
  msdyn_teamsappname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_octeamschannelconfig_statecode | null;
  statuscode?: msdyn_octeamschannelconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_octeamschannelconfig_Relationships {
  msdyn_PostConversationSurvey?: msfp_survey_Result | null;
  msdyn_octeamschannelconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_octeamschannelconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_octeamschannelconfig_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_octeamschannelconfig_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_octeamschannelconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_octeamschannelconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_octeamschannelconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_octeamschannelconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid?: msdyn_ocbotchannelregistration_Result[] | null;
  msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid?: msdyn_ocprovisioningstate_Result[] | null;
}
interface msdyn_octeamschannelconfig extends msdyn_octeamschannelconfig_Base, msdyn_octeamschannelconfig_Relationships {
  msdyn_PostConversationSurvey_bind$msfp_surveies?: string | null;
  msdyn_liveworkstreamid_bind$msdyn_liveworkstreams?: string | null;
  msdyn_ocwidgetlanguage_bind$msdyn_oclanguages?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_octeamschannelconfig_Create extends msdyn_octeamschannelconfig {
}
interface msdyn_octeamschannelconfig_Update extends msdyn_octeamschannelconfig {
}
interface msdyn_octeamschannelconfig_Select {
  createdby_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_octeamschannelconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_octeamschannelconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_octeamschannelconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_botid: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_botid: string | null }, {  }>;
  msdyn_enablefileattachmentsforagents: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_enablefileattachmentsforagents: boolean | null }, {  }>;
  msdyn_enablefileattachmentsforcustomers: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_enablefileattachmentsforcustomers: boolean | null }, {  }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_name: string | null }, {  }>;
  msdyn_octeamschannelconfigid: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_octeamschannelconfigid: string | null }, {  }>;
  msdyn_ocwidgetlanguage_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_ocwidgetlanguage_guid: string | null }, { msdyn_ocwidgetlanguage_formatted?: string }>;
  msdyn_postconversationsurvey_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_postconversationsurvey_guid: string | null }, { msdyn_postconversationsurvey_formatted?: string }>;
  msdyn_postconversationsurveyenable: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_postconversationsurveyenable: boolean | null }, {  }>;
  msdyn_postconversationsurveymessagetext: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_postconversationsurveymessagetext: string | null }, {  }>;
  msdyn_postconversationsurveymode: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_postconversationsurveymode: msdyn_postconversationsurveymode | null }, { msdyn_postconversationsurveymode_formatted?: string }>;
  msdyn_teamsappname: WebAttribute<msdyn_octeamschannelconfig_Select, { msdyn_teamsappname: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_octeamschannelconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_octeamschannelconfig_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_octeamschannelconfig_Select, { statecode: msdyn_octeamschannelconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_octeamschannelconfig_Select, { statuscode: msdyn_octeamschannelconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_octeamschannelconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_octeamschannelconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_octeamschannelconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_octeamschannelconfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_botid: string;
  msdyn_enablefileattachmentsforagents: boolean;
  msdyn_enablefileattachmentsforcustomers: boolean;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_octeamschannelconfigid: XQW.Guid;
  msdyn_ocwidgetlanguage_guid: XQW.Guid;
  msdyn_postconversationsurvey_guid: XQW.Guid;
  msdyn_postconversationsurveyenable: boolean;
  msdyn_postconversationsurveymessagetext: string;
  msdyn_postconversationsurveymode: msdyn_postconversationsurveymode;
  msdyn_teamsappname: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_octeamschannelconfig_statecode;
  statuscode: msdyn_octeamschannelconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_octeamschannelconfig_Expand {
  createdby: WebExpand<msdyn_octeamschannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_octeamschannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_octeamschannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_octeamschannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PostConversationSurvey: WebExpand<msdyn_octeamschannelconfig_Expand, msfp_survey_Select, msfp_survey_Filter, { msdyn_PostConversationSurvey: msfp_survey_Result }>;
  msdyn_liveworkstreamid: WebExpand<msdyn_octeamschannelconfig_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstreamid: msdyn_liveworkstream_Result }>;
  msdyn_octeamschannelconfig_AsyncOperations: WebExpand<msdyn_octeamschannelconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_octeamschannelconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_octeamschannelconfig_BulkDeleteFailures: WebExpand<msdyn_octeamschannelconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_octeamschannelconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_octeamschannelconfig_DuplicateBaseRecord: WebExpand<msdyn_octeamschannelconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_octeamschannelconfig_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_octeamschannelconfig_DuplicateMatchingRecord: WebExpand<msdyn_octeamschannelconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_octeamschannelconfig_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_octeamschannelconfig_MailboxTrackingFolders: WebExpand<msdyn_octeamschannelconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_octeamschannelconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_octeamschannelconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_octeamschannelconfig_ProcessSession: WebExpand<msdyn_octeamschannelconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_octeamschannelconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_octeamschannelconfig_SyncErrors: WebExpand<msdyn_octeamschannelconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_octeamschannelconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_octeamschannelconfig_UserEntityInstanceDatas: WebExpand<msdyn_octeamschannelconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_octeamschannelconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid: WebExpand<msdyn_octeamschannelconfig_Expand, msdyn_ocbotchannelregistration_Select, msdyn_ocbotchannelregistration_Filter, { msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid: msdyn_ocbotchannelregistration_Result[] }>;
  msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid: WebExpand<msdyn_octeamschannelconfig_Expand, msdyn_ocprovisioningstate_Select, msdyn_ocprovisioningstate_Filter, { msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid: msdyn_ocprovisioningstate_Result[] }>;
  msdyn_ocwidgetlanguage: WebExpand<msdyn_octeamschannelconfig_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_ocwidgetlanguage: msdyn_oclanguage_Result }>;
  ownerid: WebExpand<msdyn_octeamschannelconfig_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_octeamschannelconfig_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_octeamschannelconfig_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_octeamschannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_octeamschannelconfig_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  msdyn_ocwidgetlanguage_formatted?: string;
  msdyn_postconversationsurvey_formatted?: string;
  msdyn_postconversationsurveymode_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_octeamschannelconfig_Result extends msdyn_octeamschannelconfig_Base, msdyn_octeamschannelconfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  msdyn_ocwidgetlanguage_guid: string | null;
  msdyn_postconversationsurvey_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_octeamschannelconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PostConversationSurvey: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  msdyn_liveworkstreamid: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_ocwidgetlanguage: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_octeamschannelconfig_RelatedMany {
  msdyn_octeamschannelconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_octeamschannelconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_octeamschannelconfig_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_octeamschannelconfig_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_octeamschannelconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_octeamschannelconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_octeamschannelconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_octeamschannelconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid: WebMappingRetrieve<msdyn_ocbotchannelregistration_Select,msdyn_ocbotchannelregistration_Expand,msdyn_ocbotchannelregistration_Filter,msdyn_ocbotchannelregistration_Fixed,msdyn_ocbotchannelregistration_Result,msdyn_ocbotchannelregistration_FormattedResult>;
  msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid: WebMappingRetrieve<msdyn_ocprovisioningstate_Select,msdyn_ocprovisioningstate_Expand,msdyn_ocprovisioningstate_Filter,msdyn_ocprovisioningstate_Fixed,msdyn_ocprovisioningstate_Result,msdyn_ocprovisioningstate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_octeamschannelconfigs: WebMappingRetrieve<msdyn_octeamschannelconfig_Select,msdyn_octeamschannelconfig_Expand,msdyn_octeamschannelconfig_Filter,msdyn_octeamschannelconfig_Fixed,msdyn_octeamschannelconfig_Result,msdyn_octeamschannelconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_octeamschannelconfigs: WebMappingRelated<msdyn_octeamschannelconfig_RelatedOne,msdyn_octeamschannelconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_octeamschannelconfigs: WebMappingCUDA<msdyn_octeamschannelconfig_Create,msdyn_octeamschannelconfig_Update,msdyn_octeamschannelconfig_Select>;
}
