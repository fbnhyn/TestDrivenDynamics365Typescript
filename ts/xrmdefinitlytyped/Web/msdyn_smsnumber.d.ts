interface msdyn_smsnumber_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_enablefileattachmentsforagents?: boolean | null;
  msdyn_enablefileattachmentsforcustomers?: boolean | null;
  msdyn_formattedphonenumber?: string | null;
  msdyn_number?: string | null;
  msdyn_postconversationsurveyenable?: boolean | null;
  msdyn_postconversationsurveymessagetext?: string | null;
  msdyn_postconversationsurveymode?: msdyn_postconversationsurveymode | null;
  msdyn_provider?: msdyn_smsnumber_msdyn_provider | null;
  msdyn_smsnumberid?: string | null;
  msdyn_type?: msdyn_smsnumber_msdyn_type | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_smsnumber_statecode | null;
  statuscode?: msdyn_smsnumber_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_smsnumber_Relationships {
  msdyn_LiveWorkStreamId?: msdyn_liveworkstream_Result | null;
  msdyn_PhoneNumberId?: msdyn_ocphonenumber_Result | null;
  msdyn_PostConversationSurvey?: msfp_survey_Result | null;
  msdyn_smsnumber_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_smsnumber_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_smsnumber_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_smsnumber_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_smsnumber_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_smsnumber_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_smsnumber_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_smsnumber_SyncErrors?: SyncError_Result[] | null;
  msdyn_smsnumber_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_smsnumber extends msdyn_smsnumber_Base, msdyn_smsnumber_Relationships {
  msdyn_LiveWorkStreamId_bind$msdyn_liveworkstreams?: string | null;
  msdyn_PhoneNumberId_bind$msdyn_ocphonenumbers?: string | null;
  msdyn_PostConversationSurvey_bind$msfp_surveies?: string | null;
  msdyn_ocwidgetlanguage_bind$msdyn_oclanguages?: string | null;
  msdyn_operatinghourid_bind$msdyn_operatinghours?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_smsnumber_Create extends msdyn_smsnumber {
}
interface msdyn_smsnumber_Update extends msdyn_smsnumber {
}
interface msdyn_smsnumber_Select {
  createdby_guid: WebAttribute<msdyn_smsnumber_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_smsnumber_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_smsnumber_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_smsnumber_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_smsnumber_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_smsnumber_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_smsnumber_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_smsnumber_Select, { msdyn_description: string | null }, {  }>;
  msdyn_enablefileattachmentsforagents: WebAttribute<msdyn_smsnumber_Select, { msdyn_enablefileattachmentsforagents: boolean | null }, {  }>;
  msdyn_enablefileattachmentsforcustomers: WebAttribute<msdyn_smsnumber_Select, { msdyn_enablefileattachmentsforcustomers: boolean | null }, {  }>;
  msdyn_formattedphonenumber: WebAttribute<msdyn_smsnumber_Select, { msdyn_formattedphonenumber: string | null }, {  }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_smsnumber_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_number: WebAttribute<msdyn_smsnumber_Select, { msdyn_number: string | null }, {  }>;
  msdyn_ocwidgetlanguage_guid: WebAttribute<msdyn_smsnumber_Select, { msdyn_ocwidgetlanguage_guid: string | null }, { msdyn_ocwidgetlanguage_formatted?: string }>;
  msdyn_operatinghourid_guid: WebAttribute<msdyn_smsnumber_Select, { msdyn_operatinghourid_guid: string | null }, { msdyn_operatinghourid_formatted?: string }>;
  msdyn_phonenumberid_guid: WebAttribute<msdyn_smsnumber_Select, { msdyn_phonenumberid_guid: string | null }, { msdyn_phonenumberid_formatted?: string }>;
  msdyn_postconversationsurvey_guid: WebAttribute<msdyn_smsnumber_Select, { msdyn_postconversationsurvey_guid: string | null }, { msdyn_postconversationsurvey_formatted?: string }>;
  msdyn_postconversationsurveyenable: WebAttribute<msdyn_smsnumber_Select, { msdyn_postconversationsurveyenable: boolean | null }, {  }>;
  msdyn_postconversationsurveymessagetext: WebAttribute<msdyn_smsnumber_Select, { msdyn_postconversationsurveymessagetext: string | null }, {  }>;
  msdyn_postconversationsurveymode: WebAttribute<msdyn_smsnumber_Select, { msdyn_postconversationsurveymode: msdyn_postconversationsurveymode | null }, { msdyn_postconversationsurveymode_formatted?: string }>;
  msdyn_provider: WebAttribute<msdyn_smsnumber_Select, { msdyn_provider: msdyn_smsnumber_msdyn_provider | null }, { msdyn_provider_formatted?: string }>;
  msdyn_smsnumberid: WebAttribute<msdyn_smsnumber_Select, { msdyn_smsnumberid: string | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_smsnumber_Select, { msdyn_type: msdyn_smsnumber_msdyn_type | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_smsnumber_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_smsnumber_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_smsnumber_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_smsnumber_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_smsnumber_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_smsnumber_Select, { statecode: msdyn_smsnumber_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_smsnumber_Select, { statuscode: msdyn_smsnumber_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_smsnumber_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_smsnumber_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_smsnumber_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_smsnumber_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_enablefileattachmentsforagents: boolean;
  msdyn_enablefileattachmentsforcustomers: boolean;
  msdyn_formattedphonenumber: string;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_number: string;
  msdyn_ocwidgetlanguage_guid: XQW.Guid;
  msdyn_operatinghourid_guid: XQW.Guid;
  msdyn_phonenumberid_guid: XQW.Guid;
  msdyn_postconversationsurvey_guid: XQW.Guid;
  msdyn_postconversationsurveyenable: boolean;
  msdyn_postconversationsurveymessagetext: string;
  msdyn_postconversationsurveymode: msdyn_postconversationsurveymode;
  msdyn_provider: msdyn_smsnumber_msdyn_provider;
  msdyn_smsnumberid: XQW.Guid;
  msdyn_type: msdyn_smsnumber_msdyn_type;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_smsnumber_statecode;
  statuscode: msdyn_smsnumber_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_smsnumber_Expand {
  createdby: WebExpand<msdyn_smsnumber_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_smsnumber_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_smsnumber_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_smsnumber_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_LiveWorkStreamId: WebExpand<msdyn_smsnumber_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_LiveWorkStreamId: msdyn_liveworkstream_Result }>;
  msdyn_PhoneNumberId: WebExpand<msdyn_smsnumber_Expand, msdyn_ocphonenumber_Select, msdyn_ocphonenumber_Filter, { msdyn_PhoneNumberId: msdyn_ocphonenumber_Result }>;
  msdyn_PostConversationSurvey: WebExpand<msdyn_smsnumber_Expand, msfp_survey_Select, msfp_survey_Filter, { msdyn_PostConversationSurvey: msfp_survey_Result }>;
  msdyn_ocwidgetlanguage: WebExpand<msdyn_smsnumber_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_ocwidgetlanguage: msdyn_oclanguage_Result }>;
  msdyn_operatinghourid: WebExpand<msdyn_smsnumber_Expand, msdyn_operatinghour_Select, msdyn_operatinghour_Filter, { msdyn_operatinghourid: msdyn_operatinghour_Result }>;
  msdyn_smsnumber_AsyncOperations: WebExpand<msdyn_smsnumber_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_smsnumber_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_smsnumber_BulkDeleteFailures: WebExpand<msdyn_smsnumber_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_smsnumber_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_smsnumber_DuplicateBaseRecord: WebExpand<msdyn_smsnumber_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_smsnumber_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_smsnumber_DuplicateMatchingRecord: WebExpand<msdyn_smsnumber_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_smsnumber_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_smsnumber_MailboxTrackingFolders: WebExpand<msdyn_smsnumber_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_smsnumber_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_smsnumber_PrincipalObjectAttributeAccesses: WebExpand<msdyn_smsnumber_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_smsnumber_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_smsnumber_ProcessSession: WebExpand<msdyn_smsnumber_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_smsnumber_ProcessSession: ProcessSession_Result[] }>;
  msdyn_smsnumber_SyncErrors: WebExpand<msdyn_smsnumber_Expand, SyncError_Select, SyncError_Filter, { msdyn_smsnumber_SyncErrors: SyncError_Result[] }>;
  msdyn_smsnumber_UserEntityInstanceDatas: WebExpand<msdyn_smsnumber_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_smsnumber_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_smsnumber_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_smsnumber_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_smsnumber_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_smsnumber_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_smsnumber_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  msdyn_ocwidgetlanguage_formatted?: string;
  msdyn_operatinghourid_formatted?: string;
  msdyn_phonenumberid_formatted?: string;
  msdyn_postconversationsurvey_formatted?: string;
  msdyn_postconversationsurveymode_formatted?: string;
  msdyn_provider_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_smsnumber_Result extends msdyn_smsnumber_Base, msdyn_smsnumber_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  msdyn_ocwidgetlanguage_guid: string | null;
  msdyn_operatinghourid_guid: string | null;
  msdyn_phonenumberid_guid: string | null;
  msdyn_postconversationsurvey_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_smsnumber_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_LiveWorkStreamId: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_PhoneNumberId: WebMappingRetrieve<msdyn_ocphonenumber_Select,msdyn_ocphonenumber_Expand,msdyn_ocphonenumber_Filter,msdyn_ocphonenumber_Fixed,msdyn_ocphonenumber_Result,msdyn_ocphonenumber_FormattedResult>;
  msdyn_PostConversationSurvey: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  msdyn_ocwidgetlanguage: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
  msdyn_operatinghourid: WebMappingRetrieve<msdyn_operatinghour_Select,msdyn_operatinghour_Expand,msdyn_operatinghour_Filter,msdyn_operatinghour_Fixed,msdyn_operatinghour_Result,msdyn_operatinghour_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_smsnumber_RelatedMany {
  msdyn_smsnumber_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_smsnumber_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_smsnumber_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_smsnumber_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_smsnumber_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_smsnumber_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_smsnumber_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_smsnumber_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_smsnumber_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_smsnumbers: WebMappingRetrieve<msdyn_smsnumber_Select,msdyn_smsnumber_Expand,msdyn_smsnumber_Filter,msdyn_smsnumber_Fixed,msdyn_smsnumber_Result,msdyn_smsnumber_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_smsnumbers: WebMappingRelated<msdyn_smsnumber_RelatedOne,msdyn_smsnumber_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_smsnumbers: WebMappingCUDA<msdyn_smsnumber_Create,msdyn_smsnumber_Update,msdyn_smsnumber_Select>;
}
