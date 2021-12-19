interface msdyn_localizedsurveyquestion_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_languagecode?: msdyn_languagecodes | null;
  msdyn_localizedquestiontext?: string | null;
  msdyn_localizedsurveyquestionid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_localizedsurveyquestion_statecode | null;
  statuscode?: msdyn_localizedsurveyquestion_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_localizedsurveyquestion_Relationships {
  msdyn_SurveyQuestionId?: msdyn_surveyquestion_Result | null;
  msdyn_localizedsurveyquestion_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_localizedsurveyquestion_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_localizedsurveyquestion_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_localizedsurveyquestion_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_localizedsurveyquestion_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_localizedsurveyquestion_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_localizedsurveyquestion_SyncErrors?: SyncError_Result[] | null;
  msdyn_localizedsurveyquestion_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_localizedsurveyquestion extends msdyn_localizedsurveyquestion_Base, msdyn_localizedsurveyquestion_Relationships {
  msdyn_SurveyQuestionId_bind$msdyn_surveyquestions?: string | null;
}
interface msdyn_localizedsurveyquestion_Create extends msdyn_localizedsurveyquestion {
}
interface msdyn_localizedsurveyquestion_Update extends msdyn_localizedsurveyquestion {
}
interface msdyn_localizedsurveyquestion_Select {
  createdby_guid: WebAttribute<msdyn_localizedsurveyquestion_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_localizedsurveyquestion_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_localizedsurveyquestion_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_localizedsurveyquestion_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_localizedsurveyquestion_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_localizedsurveyquestion_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_localizedsurveyquestion_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_localizedsurveyquestion_Select, { msdyn_description: string | null }, {  }>;
  msdyn_languagecode: WebAttribute<msdyn_localizedsurveyquestion_Select, { msdyn_languagecode: msdyn_languagecodes | null }, { msdyn_languagecode_formatted?: string }>;
  msdyn_localizedquestiontext: WebAttribute<msdyn_localizedsurveyquestion_Select, { msdyn_localizedquestiontext: string | null }, {  }>;
  msdyn_localizedsurveyquestionid: WebAttribute<msdyn_localizedsurveyquestion_Select, { msdyn_localizedsurveyquestionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_localizedsurveyquestion_Select, { msdyn_name: string | null }, {  }>;
  msdyn_surveyquestionid_guid: WebAttribute<msdyn_localizedsurveyquestion_Select, { msdyn_surveyquestionid_guid: string | null }, { msdyn_surveyquestionid_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_localizedsurveyquestion_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_localizedsurveyquestion_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_localizedsurveyquestion_Select, { statecode: msdyn_localizedsurveyquestion_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_localizedsurveyquestion_Select, { statuscode: msdyn_localizedsurveyquestion_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_localizedsurveyquestion_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_localizedsurveyquestion_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_localizedsurveyquestion_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_localizedsurveyquestion_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_languagecode: msdyn_languagecodes;
  msdyn_localizedquestiontext: string;
  msdyn_localizedsurveyquestionid: XQW.Guid;
  msdyn_name: string;
  msdyn_surveyquestionid_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_localizedsurveyquestion_statecode;
  statuscode: msdyn_localizedsurveyquestion_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_localizedsurveyquestion_Expand {
  createdby: WebExpand<msdyn_localizedsurveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_localizedsurveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_localizedsurveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_localizedsurveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_SurveyQuestionId: WebExpand<msdyn_localizedsurveyquestion_Expand, msdyn_surveyquestion_Select, msdyn_surveyquestion_Filter, { msdyn_SurveyQuestionId: msdyn_surveyquestion_Result }>;
  msdyn_localizedsurveyquestion_AsyncOperations: WebExpand<msdyn_localizedsurveyquestion_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_localizedsurveyquestion_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_localizedsurveyquestion_BulkDeleteFailures: WebExpand<msdyn_localizedsurveyquestion_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_localizedsurveyquestion_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_localizedsurveyquestion_DuplicateBaseRecord: WebExpand<msdyn_localizedsurveyquestion_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_localizedsurveyquestion_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_localizedsurveyquestion_DuplicateMatchingRecord: WebExpand<msdyn_localizedsurveyquestion_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_localizedsurveyquestion_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_localizedsurveyquestion_MailboxTrackingFolders: WebExpand<msdyn_localizedsurveyquestion_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_localizedsurveyquestion_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses: WebExpand<msdyn_localizedsurveyquestion_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_localizedsurveyquestion_ProcessSession: WebExpand<msdyn_localizedsurveyquestion_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_localizedsurveyquestion_ProcessSession: ProcessSession_Result[] }>;
  msdyn_localizedsurveyquestion_SyncErrors: WebExpand<msdyn_localizedsurveyquestion_Expand, SyncError_Select, SyncError_Filter, { msdyn_localizedsurveyquestion_SyncErrors: SyncError_Result[] }>;
  msdyn_localizedsurveyquestion_UserEntityInstanceDatas: WebExpand<msdyn_localizedsurveyquestion_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_localizedsurveyquestion_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_localizedsurveyquestion_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_localizedsurveyquestion_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_languagecode_formatted?: string;
  msdyn_surveyquestionid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_localizedsurveyquestion_Result extends msdyn_localizedsurveyquestion_Base, msdyn_localizedsurveyquestion_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_surveyquestionid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_localizedsurveyquestion_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_SurveyQuestionId: WebMappingRetrieve<msdyn_surveyquestion_Select,msdyn_surveyquestion_Expand,msdyn_surveyquestion_Filter,msdyn_surveyquestion_Fixed,msdyn_surveyquestion_Result,msdyn_surveyquestion_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_localizedsurveyquestion_RelatedMany {
  msdyn_localizedsurveyquestion_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_localizedsurveyquestion_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_localizedsurveyquestion_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_localizedsurveyquestion_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_localizedsurveyquestion_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_localizedsurveyquestion_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_localizedsurveyquestion_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_localizedsurveyquestion_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_localizedsurveyquestion_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_localizedsurveyquestions: WebMappingRetrieve<msdyn_localizedsurveyquestion_Select,msdyn_localizedsurveyquestion_Expand,msdyn_localizedsurveyquestion_Filter,msdyn_localizedsurveyquestion_Fixed,msdyn_localizedsurveyquestion_Result,msdyn_localizedsurveyquestion_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_localizedsurveyquestions: WebMappingRelated<msdyn_localizedsurveyquestion_RelatedOne,msdyn_localizedsurveyquestion_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_localizedsurveyquestions: WebMappingCUDA<msdyn_localizedsurveyquestion_Create,msdyn_localizedsurveyquestion_Update,msdyn_localizedsurveyquestion_Select>;
}
