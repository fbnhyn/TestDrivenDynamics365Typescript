interface msdyn_surveyquestion_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_answertype?: msdyn_chatanswertype | null;
  msdyn_name?: string | null;
  msdyn_placeholdertext?: string | null;
  msdyn_questiontext?: string | null;
  msdyn_ratingscale?: number | null;
  msdyn_surveyquestionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_surveyquestion_statecode | null;
  statuscode?: msdyn_surveyquestion_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_surveyquestion_Relationships {
  msdyn_LiveWorkStreamToChatQuestion?: msdyn_liveworkstream_Result | null;
  msdyn__surveyquestion_msdyn_localizedsurveyques?: msdyn_localizedsurveyquestion_Result[] | null;
  msdyn_msdyn_surveyquestion_msdyn_chatquestionnaireresponseitem?: msdyn_chatquestionnaireresponseitem_Result[] | null;
  msdyn_msdyn_surveyquestion_msdyn_questionsequence_SurveyQuestion?: msdyn_questionsequence_Result[] | null;
  msdyn_surveyquestion_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_surveyquestion_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_surveyquestion_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_surveyquestion_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_surveyquestion_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_surveyquestion_SyncErrors?: SyncError_Result[] | null;
  msdyn_surveyquestion_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_surveyquestion_msdyn_chatansweroption?: msdyn_chatansweroption_Result[] | null;
}
interface msdyn_surveyquestion extends msdyn_surveyquestion_Base, msdyn_surveyquestion_Relationships {
  msdyn_LiveWorkStreamToChatQuestion_bind$msdyn_liveworkstreams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_surveyquestion_Create extends msdyn_surveyquestion {
}
interface msdyn_surveyquestion_Update extends msdyn_surveyquestion {
}
interface msdyn_surveyquestion_Select {
  createdby_guid: WebAttribute<msdyn_surveyquestion_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_surveyquestion_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_surveyquestion_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_surveyquestion_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_surveyquestion_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_surveyquestion_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_surveyquestion_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_answertype: WebAttribute<msdyn_surveyquestion_Select, { msdyn_answertype: msdyn_chatanswertype | null }, { msdyn_answertype_formatted?: string }>;
  msdyn_liveworkstreamtochatquestion_guid: WebAttribute<msdyn_surveyquestion_Select, { msdyn_liveworkstreamtochatquestion_guid: string | null }, { msdyn_liveworkstreamtochatquestion_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_surveyquestion_Select, { msdyn_name: string | null }, {  }>;
  msdyn_placeholdertext: WebAttribute<msdyn_surveyquestion_Select, { msdyn_placeholdertext: string | null }, {  }>;
  msdyn_questiontext: WebAttribute<msdyn_surveyquestion_Select, { msdyn_questiontext: string | null }, {  }>;
  msdyn_ratingscale: WebAttribute<msdyn_surveyquestion_Select, { msdyn_ratingscale: number | null }, {  }>;
  msdyn_surveyquestionid: WebAttribute<msdyn_surveyquestion_Select, { msdyn_surveyquestionid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_surveyquestion_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_surveyquestion_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_surveyquestion_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_surveyquestion_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_surveyquestion_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_surveyquestion_Select, { statecode: msdyn_surveyquestion_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_surveyquestion_Select, { statuscode: msdyn_surveyquestion_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_surveyquestion_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_surveyquestion_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_surveyquestion_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_surveyquestion_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_answertype: msdyn_chatanswertype;
  msdyn_liveworkstreamtochatquestion_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_placeholdertext: string;
  msdyn_questiontext: string;
  msdyn_ratingscale: number;
  msdyn_surveyquestionid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_surveyquestion_statecode;
  statuscode: msdyn_surveyquestion_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_surveyquestion_Expand {
  createdby: WebExpand<msdyn_surveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_surveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_surveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_surveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_LiveWorkStreamToChatQuestion: WebExpand<msdyn_surveyquestion_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_LiveWorkStreamToChatQuestion: msdyn_liveworkstream_Result }>;
  msdyn__surveyquestion_msdyn_localizedsurveyques: WebExpand<msdyn_surveyquestion_Expand, msdyn_localizedsurveyquestion_Select, msdyn_localizedsurveyquestion_Filter, { msdyn__surveyquestion_msdyn_localizedsurveyques: msdyn_localizedsurveyquestion_Result[] }>;
  msdyn_msdyn_surveyquestion_msdyn_chatquestionnaireresponseitem: WebExpand<msdyn_surveyquestion_Expand, msdyn_chatquestionnaireresponseitem_Select, msdyn_chatquestionnaireresponseitem_Filter, { msdyn_msdyn_surveyquestion_msdyn_chatquestionnaireresponseitem: msdyn_chatquestionnaireresponseitem_Result[] }>;
  msdyn_msdyn_surveyquestion_msdyn_questionsequence_SurveyQuestion: WebExpand<msdyn_surveyquestion_Expand, msdyn_questionsequence_Select, msdyn_questionsequence_Filter, { msdyn_msdyn_surveyquestion_msdyn_questionsequence_SurveyQuestion: msdyn_questionsequence_Result[] }>;
  msdyn_surveyquestion_AsyncOperations: WebExpand<msdyn_surveyquestion_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_surveyquestion_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_surveyquestion_BulkDeleteFailures: WebExpand<msdyn_surveyquestion_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_surveyquestion_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_surveyquestion_MailboxTrackingFolders: WebExpand<msdyn_surveyquestion_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_surveyquestion_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_surveyquestion_PrincipalObjectAttributeAccesses: WebExpand<msdyn_surveyquestion_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_surveyquestion_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_surveyquestion_ProcessSession: WebExpand<msdyn_surveyquestion_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_surveyquestion_ProcessSession: ProcessSession_Result[] }>;
  msdyn_surveyquestion_SyncErrors: WebExpand<msdyn_surveyquestion_Expand, SyncError_Select, SyncError_Filter, { msdyn_surveyquestion_SyncErrors: SyncError_Result[] }>;
  msdyn_surveyquestion_UserEntityInstanceDatas: WebExpand<msdyn_surveyquestion_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_surveyquestion_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_surveyquestion_msdyn_chatansweroption: WebExpand<msdyn_surveyquestion_Expand, msdyn_chatansweroption_Select, msdyn_chatansweroption_Filter, { msdyn_surveyquestion_msdyn_chatansweroption: msdyn_chatansweroption_Result[] }>;
  ownerid: WebExpand<msdyn_surveyquestion_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_surveyquestion_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_surveyquestion_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_surveyquestion_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_surveyquestion_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_answertype_formatted?: string;
  msdyn_liveworkstreamtochatquestion_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_surveyquestion_Result extends msdyn_surveyquestion_Base, msdyn_surveyquestion_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkstreamtochatquestion_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_surveyquestion_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_LiveWorkStreamToChatQuestion: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_surveyquestion_RelatedMany {
  msdyn__surveyquestion_msdyn_localizedsurveyques: WebMappingRetrieve<msdyn_localizedsurveyquestion_Select,msdyn_localizedsurveyquestion_Expand,msdyn_localizedsurveyquestion_Filter,msdyn_localizedsurveyquestion_Fixed,msdyn_localizedsurveyquestion_Result,msdyn_localizedsurveyquestion_FormattedResult>;
  msdyn_msdyn_surveyquestion_msdyn_chatquestionnaireresponseitem: WebMappingRetrieve<msdyn_chatquestionnaireresponseitem_Select,msdyn_chatquestionnaireresponseitem_Expand,msdyn_chatquestionnaireresponseitem_Filter,msdyn_chatquestionnaireresponseitem_Fixed,msdyn_chatquestionnaireresponseitem_Result,msdyn_chatquestionnaireresponseitem_FormattedResult>;
  msdyn_msdyn_surveyquestion_msdyn_questionsequence_SurveyQuestion: WebMappingRetrieve<msdyn_questionsequence_Select,msdyn_questionsequence_Expand,msdyn_questionsequence_Filter,msdyn_questionsequence_Fixed,msdyn_questionsequence_Result,msdyn_questionsequence_FormattedResult>;
  msdyn_surveyquestion_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_surveyquestion_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_surveyquestion_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_surveyquestion_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_surveyquestion_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_surveyquestion_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_surveyquestion_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_surveyquestion_msdyn_chatansweroption: WebMappingRetrieve<msdyn_chatansweroption_Select,msdyn_chatansweroption_Expand,msdyn_chatansweroption_Filter,msdyn_chatansweroption_Fixed,msdyn_chatansweroption_Result,msdyn_chatansweroption_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_surveyquestions: WebMappingRetrieve<msdyn_surveyquestion_Select,msdyn_surveyquestion_Expand,msdyn_surveyquestion_Filter,msdyn_surveyquestion_Fixed,msdyn_surveyquestion_Result,msdyn_surveyquestion_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_surveyquestions: WebMappingRelated<msdyn_surveyquestion_RelatedOne,msdyn_surveyquestion_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_surveyquestions: WebMappingCUDA<msdyn_surveyquestion_Create,msdyn_surveyquestion_Update,msdyn_surveyquestion_Select>;
}
