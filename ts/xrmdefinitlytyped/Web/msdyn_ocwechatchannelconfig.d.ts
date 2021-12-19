interface msdyn_ocwechatchannelconfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_applicationid?: string | null;
  msdyn_applicationsecret?: string | null;
  msdyn_callbackurl?: string | null;
  msdyn_enablefileattachmentsforagents?: boolean | null;
  msdyn_enablefileattachmentsforcustomers?: boolean | null;
  msdyn_encodingaeskey?: string | null;
  msdyn_ipaddresses?: string | null;
  msdyn_name?: string | null;
  msdyn_ocwechatchannelconfigid?: string | null;
  msdyn_postconversationsurveyenable?: boolean | null;
  msdyn_postconversationsurveymessagetext?: string | null;
  msdyn_postconversationsurveymode?: msdyn_postconversationsurveymode | null;
  msdyn_serviceaccount?: string | null;
  msdyn_token?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocwechatchannelconfig_statecode | null;
  statuscode?: msdyn_ocwechatchannelconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocwechatchannelconfig_Relationships {
  msdyn_PostConversationSurvey?: msfp_survey_Result | null;
  msdyn_ocwechatchannelconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocwechatchannelconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocwechatchannelconfig_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocwechatchannelconfig_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocwechatchannelconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocwechatchannelconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocwechatchannelconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocwechatchannelconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocwechatchannelconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocwechatchannelconfig extends msdyn_ocwechatchannelconfig_Base, msdyn_ocwechatchannelconfig_Relationships {
  msdyn_PostConversationSurvey_bind$msfp_surveies?: string | null;
  msdyn_liveworkstreamid_bind$msdyn_liveworkstreams?: string | null;
  msdyn_ocwidgetlanguage_bind$msdyn_oclanguages?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocwechatchannelconfig_Create extends msdyn_ocwechatchannelconfig {
}
interface msdyn_ocwechatchannelconfig_Update extends msdyn_ocwechatchannelconfig {
}
interface msdyn_ocwechatchannelconfig_Select {
  createdby_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocwechatchannelconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocwechatchannelconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocwechatchannelconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_applicationid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_applicationid: string | null }, {  }>;
  msdyn_applicationsecret: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_applicationsecret: string | null }, {  }>;
  msdyn_callbackurl: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_callbackurl: string | null }, {  }>;
  msdyn_enablefileattachmentsforagents: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_enablefileattachmentsforagents: boolean | null }, {  }>;
  msdyn_enablefileattachmentsforcustomers: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_enablefileattachmentsforcustomers: boolean | null }, {  }>;
  msdyn_encodingaeskey: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_encodingaeskey: string | null }, {  }>;
  msdyn_ipaddresses: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_ipaddresses: string | null }, {  }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocwechatchannelconfigid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_ocwechatchannelconfigid: string | null }, {  }>;
  msdyn_ocwidgetlanguage_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_ocwidgetlanguage_guid: string | null }, { msdyn_ocwidgetlanguage_formatted?: string }>;
  msdyn_postconversationsurvey_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_postconversationsurvey_guid: string | null }, { msdyn_postconversationsurvey_formatted?: string }>;
  msdyn_postconversationsurveyenable: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_postconversationsurveyenable: boolean | null }, {  }>;
  msdyn_postconversationsurveymessagetext: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_postconversationsurveymessagetext: string | null }, {  }>;
  msdyn_postconversationsurveymode: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_postconversationsurveymode: msdyn_postconversationsurveymode | null }, { msdyn_postconversationsurveymode_formatted?: string }>;
  msdyn_serviceaccount: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_serviceaccount: string | null }, {  }>;
  msdyn_token: WebAttribute<msdyn_ocwechatchannelconfig_Select, { msdyn_token: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocwechatchannelconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocwechatchannelconfig_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocwechatchannelconfig_Select, { statecode: msdyn_ocwechatchannelconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocwechatchannelconfig_Select, { statuscode: msdyn_ocwechatchannelconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocwechatchannelconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocwechatchannelconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocwechatchannelconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocwechatchannelconfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_applicationid: string;
  msdyn_applicationsecret: string;
  msdyn_callbackurl: string;
  msdyn_enablefileattachmentsforagents: boolean;
  msdyn_enablefileattachmentsforcustomers: boolean;
  msdyn_encodingaeskey: string;
  msdyn_ipaddresses: string;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocwechatchannelconfigid: XQW.Guid;
  msdyn_ocwidgetlanguage_guid: XQW.Guid;
  msdyn_postconversationsurvey_guid: XQW.Guid;
  msdyn_postconversationsurveyenable: boolean;
  msdyn_postconversationsurveymessagetext: string;
  msdyn_postconversationsurveymode: msdyn_postconversationsurveymode;
  msdyn_serviceaccount: string;
  msdyn_token: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocwechatchannelconfig_statecode;
  statuscode: msdyn_ocwechatchannelconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocwechatchannelconfig_Expand {
  createdby: WebExpand<msdyn_ocwechatchannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocwechatchannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocwechatchannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocwechatchannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PostConversationSurvey: WebExpand<msdyn_ocwechatchannelconfig_Expand, msfp_survey_Select, msfp_survey_Filter, { msdyn_PostConversationSurvey: msfp_survey_Result }>;
  msdyn_liveworkstreamid: WebExpand<msdyn_ocwechatchannelconfig_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstreamid: msdyn_liveworkstream_Result }>;
  msdyn_ocwechatchannelconfig_AsyncOperations: WebExpand<msdyn_ocwechatchannelconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocwechatchannelconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocwechatchannelconfig_BulkDeleteFailures: WebExpand<msdyn_ocwechatchannelconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocwechatchannelconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocwechatchannelconfig_DuplicateBaseRecord: WebExpand<msdyn_ocwechatchannelconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocwechatchannelconfig_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocwechatchannelconfig_DuplicateMatchingRecord: WebExpand<msdyn_ocwechatchannelconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocwechatchannelconfig_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocwechatchannelconfig_MailboxTrackingFolders: WebExpand<msdyn_ocwechatchannelconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocwechatchannelconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocwechatchannelconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocwechatchannelconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocwechatchannelconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocwechatchannelconfig_ProcessSession: WebExpand<msdyn_ocwechatchannelconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocwechatchannelconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocwechatchannelconfig_SyncErrors: WebExpand<msdyn_ocwechatchannelconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocwechatchannelconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_ocwechatchannelconfig_UserEntityInstanceDatas: WebExpand<msdyn_ocwechatchannelconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocwechatchannelconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocwidgetlanguage: WebExpand<msdyn_ocwechatchannelconfig_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_ocwidgetlanguage: msdyn_oclanguage_Result }>;
  ownerid: WebExpand<msdyn_ocwechatchannelconfig_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocwechatchannelconfig_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocwechatchannelconfig_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocwechatchannelconfig_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocwechatchannelconfig_FormattedResult {
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
interface msdyn_ocwechatchannelconfig_Result extends msdyn_ocwechatchannelconfig_Base, msdyn_ocwechatchannelconfig_Relationships {
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
interface msdyn_ocwechatchannelconfig_RelatedOne {
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
interface msdyn_ocwechatchannelconfig_RelatedMany {
  msdyn_ocwechatchannelconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocwechatchannelconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocwechatchannelconfig_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocwechatchannelconfig_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocwechatchannelconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocwechatchannelconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocwechatchannelconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocwechatchannelconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocwechatchannelconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocwechatchannelconfigs: WebMappingRetrieve<msdyn_ocwechatchannelconfig_Select,msdyn_ocwechatchannelconfig_Expand,msdyn_ocwechatchannelconfig_Filter,msdyn_ocwechatchannelconfig_Fixed,msdyn_ocwechatchannelconfig_Result,msdyn_ocwechatchannelconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocwechatchannelconfigs: WebMappingRelated<msdyn_ocwechatchannelconfig_RelatedOne,msdyn_ocwechatchannelconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocwechatchannelconfigs: WebMappingCUDA<msdyn_ocwechatchannelconfig_Create,msdyn_ocwechatchannelconfig_Update,msdyn_ocwechatchannelconfig_Select>;
}
