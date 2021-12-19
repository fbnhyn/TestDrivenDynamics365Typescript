interface msdyn_ocsmschannelsetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_enablefileattachmentforagents?: boolean | null;
  msdyn_enablefileattachmentforcustomers?: boolean | null;
  msdyn_inboundurl?: string | null;
  msdyn_name?: string | null;
  msdyn_ocsmschannelsettingid?: string | null;
  msdyn_postconversationsurveyenable?: boolean | null;
  msdyn_postconversationsurveymessagetext?: string | null;
  msdyn_postconversationsurveymode?: msdyn_postconversationsurveymode | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsmschannelsetting_statecode | null;
  statuscode?: msdyn_ocsmschannelsetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsmschannelsetting_Relationships {
  msdyn_PhoneNumberId?: msdyn_ocphonenumber_Result | null;
  msdyn_ocsmschannelsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsmschannelsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsmschannelsetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsmschannelsetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsmschannelsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsmschannelsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsmschannelsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsmschannelsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsmschannelsetting extends msdyn_ocsmschannelsetting_Base, msdyn_ocsmschannelsetting_Relationships {
  msdyn_PhoneNumberId_bind$msdyn_ocphonenumbers?: string | null;
  msdyn_language_bind$msdyn_oclanguages?: string | null;
  msdyn_liveworkstreamid_bind$msdyn_liveworkstreams?: string | null;
  msdyn_operatinghourid_bind$msdyn_operatinghours?: string | null;
  msdyn_postconversationsurvey_bind$msfp_surveies?: string | null;
}
interface msdyn_ocsmschannelsetting_Create extends msdyn_ocsmschannelsetting {
}
interface msdyn_ocsmschannelsetting_Update extends msdyn_ocsmschannelsetting {
}
interface msdyn_ocsmschannelsetting_Select {
  createdby_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsmschannelsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsmschannelsetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsmschannelsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_enablefileattachmentforagents: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_enablefileattachmentforagents: boolean | null }, {  }>;
  msdyn_enablefileattachmentforcustomers: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_enablefileattachmentforcustomers: boolean | null }, {  }>;
  msdyn_inboundurl: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_inboundurl: string | null }, {  }>;
  msdyn_language_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_language_guid: string | null }, { msdyn_language_formatted?: string }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsmschannelsettingid: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_ocsmschannelsettingid: string | null }, {  }>;
  msdyn_operatinghourid_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_operatinghourid_guid: string | null }, { msdyn_operatinghourid_formatted?: string }>;
  msdyn_phonenumberid_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_phonenumberid_guid: string | null }, { msdyn_phonenumberid_formatted?: string }>;
  msdyn_postconversationsurvey_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_postconversationsurvey_guid: string | null }, { msdyn_postconversationsurvey_formatted?: string }>;
  msdyn_postconversationsurveyenable: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_postconversationsurveyenable: boolean | null }, {  }>;
  msdyn_postconversationsurveymessagetext: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_postconversationsurveymessagetext: string | null }, {  }>;
  msdyn_postconversationsurveymode: WebAttribute<msdyn_ocsmschannelsetting_Select, { msdyn_postconversationsurveymode: msdyn_postconversationsurveymode | null }, { msdyn_postconversationsurveymode_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_ocsmschannelsetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocsmschannelsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsmschannelsetting_Select, { statecode: msdyn_ocsmschannelsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsmschannelsetting_Select, { statuscode: msdyn_ocsmschannelsetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsmschannelsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsmschannelsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsmschannelsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsmschannelsetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_enablefileattachmentforagents: boolean;
  msdyn_enablefileattachmentforcustomers: boolean;
  msdyn_inboundurl: string;
  msdyn_language_guid: XQW.Guid;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocsmschannelsettingid: XQW.Guid;
  msdyn_operatinghourid_guid: XQW.Guid;
  msdyn_phonenumberid_guid: XQW.Guid;
  msdyn_postconversationsurvey_guid: XQW.Guid;
  msdyn_postconversationsurveyenable: boolean;
  msdyn_postconversationsurveymessagetext: string;
  msdyn_postconversationsurveymode: msdyn_postconversationsurveymode;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_ocsmschannelsetting_statecode;
  statuscode: msdyn_ocsmschannelsetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsmschannelsetting_Expand {
  createdby: WebExpand<msdyn_ocsmschannelsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsmschannelsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsmschannelsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsmschannelsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PhoneNumberId: WebExpand<msdyn_ocsmschannelsetting_Expand, msdyn_ocphonenumber_Select, msdyn_ocphonenumber_Filter, { msdyn_PhoneNumberId: msdyn_ocphonenumber_Result }>;
  msdyn_language: WebExpand<msdyn_ocsmschannelsetting_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_language: msdyn_oclanguage_Result }>;
  msdyn_liveworkstreamid: WebExpand<msdyn_ocsmschannelsetting_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstreamid: msdyn_liveworkstream_Result }>;
  msdyn_ocsmschannelsetting_AsyncOperations: WebExpand<msdyn_ocsmschannelsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsmschannelsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsmschannelsetting_BulkDeleteFailures: WebExpand<msdyn_ocsmschannelsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsmschannelsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsmschannelsetting_DuplicateBaseRecord: WebExpand<msdyn_ocsmschannelsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsmschannelsetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsmschannelsetting_DuplicateMatchingRecord: WebExpand<msdyn_ocsmschannelsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsmschannelsetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsmschannelsetting_MailboxTrackingFolders: WebExpand<msdyn_ocsmschannelsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsmschannelsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsmschannelsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsmschannelsetting_ProcessSession: WebExpand<msdyn_ocsmschannelsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsmschannelsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsmschannelsetting_SyncErrors: WebExpand<msdyn_ocsmschannelsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsmschannelsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsmschannelsetting_UserEntityInstanceDatas: WebExpand<msdyn_ocsmschannelsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsmschannelsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_operatinghourid: WebExpand<msdyn_ocsmschannelsetting_Expand, msdyn_operatinghour_Select, msdyn_operatinghour_Filter, { msdyn_operatinghourid: msdyn_operatinghour_Result }>;
  msdyn_postconversationsurvey: WebExpand<msdyn_ocsmschannelsetting_Expand, msfp_survey_Select, msfp_survey_Filter, { msdyn_postconversationsurvey: msfp_survey_Result }>;
  organizationid: WebExpand<msdyn_ocsmschannelsetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_ocsmschannelsetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_language_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  msdyn_operatinghourid_formatted?: string;
  msdyn_phonenumberid_formatted?: string;
  msdyn_postconversationsurvey_formatted?: string;
  msdyn_postconversationsurveymode_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsmschannelsetting_Result extends msdyn_ocsmschannelsetting_Base, msdyn_ocsmschannelsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_language_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  msdyn_operatinghourid_guid: string | null;
  msdyn_phonenumberid_guid: string | null;
  msdyn_postconversationsurvey_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_ocsmschannelsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PhoneNumberId: WebMappingRetrieve<msdyn_ocphonenumber_Select,msdyn_ocphonenumber_Expand,msdyn_ocphonenumber_Filter,msdyn_ocphonenumber_Fixed,msdyn_ocphonenumber_Result,msdyn_ocphonenumber_FormattedResult>;
  msdyn_language: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
  msdyn_liveworkstreamid: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_operatinghourid: WebMappingRetrieve<msdyn_operatinghour_Select,msdyn_operatinghour_Expand,msdyn_operatinghour_Filter,msdyn_operatinghour_Fixed,msdyn_operatinghour_Result,msdyn_operatinghour_FormattedResult>;
  msdyn_postconversationsurvey: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_ocsmschannelsetting_RelatedMany {
  msdyn_ocsmschannelsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsmschannelsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsmschannelsetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsmschannelsetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsmschannelsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsmschannelsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsmschannelsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsmschannelsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsmschannelsettings: WebMappingRetrieve<msdyn_ocsmschannelsetting_Select,msdyn_ocsmschannelsetting_Expand,msdyn_ocsmschannelsetting_Filter,msdyn_ocsmschannelsetting_Fixed,msdyn_ocsmschannelsetting_Result,msdyn_ocsmschannelsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsmschannelsettings: WebMappingRelated<msdyn_ocsmschannelsetting_RelatedOne,msdyn_ocsmschannelsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsmschannelsettings: WebMappingCUDA<msdyn_ocsmschannelsetting_Create,msdyn_ocsmschannelsetting_Update,msdyn_ocsmschannelsetting_Select>;
}
