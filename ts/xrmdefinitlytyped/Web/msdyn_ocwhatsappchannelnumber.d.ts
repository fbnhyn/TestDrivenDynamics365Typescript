interface msdyn_ocwhatsappchannelnumber_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_enablefileattachmentsforagents?: boolean | null;
  msdyn_enablefileattachmentsforcustomers?: boolean | null;
  msdyn_name?: string | null;
  msdyn_ocwhatsappchannelnumberid?: string | null;
  msdyn_organizationphonenumber?: string | null;
  msdyn_postconversationsurveyenable?: boolean | null;
  msdyn_postconversationsurveymessagetext?: string | null;
  msdyn_postconversationsurveymode?: msdyn_postconversationsurveymode | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocwhatsappchannelnumber_statecode | null;
  statuscode?: msdyn_ocwhatsappchannelnumber_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocwhatsappchannelnumber_Relationships {
  msdyn_PostConversationSurvey?: msfp_survey_Result | null;
  msdyn_ocwhatsappchannelnumber_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocwhatsappchannelnumber_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocwhatsappchannelnumber_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocwhatsappchannelnumber_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocwhatsappchannelnumber_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocwhatsappchannelnumber_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocwhatsappchannelnumber_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocwhatsappchannelnumber_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocwhatsappchannelnumber_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocwhatsappchannelnumber extends msdyn_ocwhatsappchannelnumber_Base, msdyn_ocwhatsappchannelnumber_Relationships {
  msdyn_PostConversationSurvey_bind$msfp_surveies?: string | null;
  msdyn_liveworkstreamid_bind$msdyn_liveworkstreams?: string | null;
  msdyn_ocwhatsappaccountid_bind$msdyn_ocwhatsappchannelaccounts?: string | null;
  msdyn_ocwidgetlanguage_bind$msdyn_oclanguages?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocwhatsappchannelnumber_Create extends msdyn_ocwhatsappchannelnumber {
}
interface msdyn_ocwhatsappchannelnumber_Update extends msdyn_ocwhatsappchannelnumber {
}
interface msdyn_ocwhatsappchannelnumber_Select {
  createdby_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_enablefileattachmentsforagents: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_enablefileattachmentsforagents: boolean | null }, {  }>;
  msdyn_enablefileattachmentsforcustomers: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_enablefileattachmentsforcustomers: boolean | null }, {  }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocwhatsappaccountid_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_ocwhatsappaccountid_guid: string | null }, { msdyn_ocwhatsappaccountid_formatted?: string }>;
  msdyn_ocwhatsappchannelnumberid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_ocwhatsappchannelnumberid: string | null }, {  }>;
  msdyn_ocwidgetlanguage_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_ocwidgetlanguage_guid: string | null }, { msdyn_ocwidgetlanguage_formatted?: string }>;
  msdyn_organizationphonenumber: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_organizationphonenumber: string | null }, {  }>;
  msdyn_postconversationsurvey_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_postconversationsurvey_guid: string | null }, { msdyn_postconversationsurvey_formatted?: string }>;
  msdyn_postconversationsurveyenable: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_postconversationsurveyenable: boolean | null }, {  }>;
  msdyn_postconversationsurveymessagetext: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_postconversationsurveymessagetext: string | null }, {  }>;
  msdyn_postconversationsurveymode: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { msdyn_postconversationsurveymode: msdyn_postconversationsurveymode | null }, { msdyn_postconversationsurveymode_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { statecode: msdyn_ocwhatsappchannelnumber_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { statuscode: msdyn_ocwhatsappchannelnumber_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocwhatsappchannelnumber_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocwhatsappchannelnumber_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_enablefileattachmentsforagents: boolean;
  msdyn_enablefileattachmentsforcustomers: boolean;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocwhatsappaccountid_guid: XQW.Guid;
  msdyn_ocwhatsappchannelnumberid: XQW.Guid;
  msdyn_ocwidgetlanguage_guid: XQW.Guid;
  msdyn_organizationphonenumber: string;
  msdyn_postconversationsurvey_guid: XQW.Guid;
  msdyn_postconversationsurveyenable: boolean;
  msdyn_postconversationsurveymessagetext: string;
  msdyn_postconversationsurveymode: msdyn_postconversationsurveymode;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocwhatsappchannelnumber_statecode;
  statuscode: msdyn_ocwhatsappchannelnumber_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocwhatsappchannelnumber_Expand {
  createdby: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PostConversationSurvey: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, msfp_survey_Select, msfp_survey_Filter, { msdyn_PostConversationSurvey: msfp_survey_Result }>;
  msdyn_liveworkstreamid: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstreamid: msdyn_liveworkstream_Result }>;
  msdyn_ocwhatsappaccountid: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, msdyn_ocwhatsappchannelaccount_Select, msdyn_ocwhatsappchannelaccount_Filter, { msdyn_ocwhatsappaccountid: msdyn_ocwhatsappchannelaccount_Result }>;
  msdyn_ocwhatsappchannelnumber_AsyncOperations: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocwhatsappchannelnumber_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocwhatsappchannelnumber_BulkDeleteFailures: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocwhatsappchannelnumber_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocwhatsappchannelnumber_DuplicateBaseRecord: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocwhatsappchannelnumber_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocwhatsappchannelnumber_DuplicateMatchingRecord: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocwhatsappchannelnumber_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocwhatsappchannelnumber_MailboxTrackingFolders: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocwhatsappchannelnumber_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocwhatsappchannelnumber_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocwhatsappchannelnumber_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocwhatsappchannelnumber_ProcessSession: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocwhatsappchannelnumber_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocwhatsappchannelnumber_SyncErrors: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocwhatsappchannelnumber_SyncErrors: SyncError_Result[] }>;
  msdyn_ocwhatsappchannelnumber_UserEntityInstanceDatas: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocwhatsappchannelnumber_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocwidgetlanguage: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_ocwidgetlanguage: msdyn_oclanguage_Result }>;
  ownerid: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocwhatsappchannelnumber_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocwhatsappchannelnumber_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  msdyn_ocwhatsappaccountid_formatted?: string;
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
interface msdyn_ocwhatsappchannelnumber_Result extends msdyn_ocwhatsappchannelnumber_Base, msdyn_ocwhatsappchannelnumber_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  msdyn_ocwhatsappaccountid_guid: string | null;
  msdyn_ocwidgetlanguage_guid: string | null;
  msdyn_postconversationsurvey_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocwhatsappchannelnumber_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PostConversationSurvey: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  msdyn_liveworkstreamid: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_ocwhatsappaccountid: WebMappingRetrieve<msdyn_ocwhatsappchannelaccount_Select,msdyn_ocwhatsappchannelaccount_Expand,msdyn_ocwhatsappchannelaccount_Filter,msdyn_ocwhatsappchannelaccount_Fixed,msdyn_ocwhatsappchannelaccount_Result,msdyn_ocwhatsappchannelaccount_FormattedResult>;
  msdyn_ocwidgetlanguage: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocwhatsappchannelnumber_RelatedMany {
  msdyn_ocwhatsappchannelnumber_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocwhatsappchannelnumber_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocwhatsappchannelnumber_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocwhatsappchannelnumber_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocwhatsappchannelnumber_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocwhatsappchannelnumber_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocwhatsappchannelnumber_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocwhatsappchannelnumber_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocwhatsappchannelnumber_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocwhatsappchannelnumbers: WebMappingRetrieve<msdyn_ocwhatsappchannelnumber_Select,msdyn_ocwhatsappchannelnumber_Expand,msdyn_ocwhatsappchannelnumber_Filter,msdyn_ocwhatsappchannelnumber_Fixed,msdyn_ocwhatsappchannelnumber_Result,msdyn_ocwhatsappchannelnumber_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocwhatsappchannelnumbers: WebMappingRelated<msdyn_ocwhatsappchannelnumber_RelatedOne,msdyn_ocwhatsappchannelnumber_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocwhatsappchannelnumbers: WebMappingCUDA<msdyn_ocwhatsappchannelnumber_Create,msdyn_ocwhatsappchannelnumber_Update,msdyn_ocwhatsappchannelnumber_Select>;
}
