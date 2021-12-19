interface msfp_survey_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_acceptanonymousresponses?: boolean | null;
  msfp_anonymousurl?: string | null;
  msfp_description?: string | null;
  msfp_embedcode?: string | null;
  msfp_enddate?: Date | null;
  msfp_friendlyname?: string | null;
  msfp_name?: string | null;
  msfp_otherproperties?: string | null;
  msfp_permanentid?: string | null;
  msfp_publishedon?: Date | null;
  msfp_sourcesurveyidentifier?: string | null;
  msfp_sourcesurveymodifieddate?: Date | null;
  msfp_sourcesurveyversion?: string | null;
  msfp_startdate?: Date | null;
  msfp_surveyid?: string | null;
  msfp_surveysource?: string | null;
  msfp_surveyurl?: string | null;
  msfp_variables?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_survey_statecode | null;
  statuscode?: msfp_survey_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_survey_Relationships {
  msdyn_Inspection?: msdyn_inspection_Result | null;
  msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey?: msdyn_livechatconfig_Result[] | null;
  msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey?: msdyn_occustommessagingchannel_Result[] | null;
  msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey?: msdyn_ocfbpage_Result[] | null;
  msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey?: msdyn_oclinechannelconfig_Result[] | null;
  msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey?: msdyn_ocsmschannelsetting_Result[] | null;
  msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey?: msdyn_octeamschannelconfig_Result[] | null;
  msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey?: msdyn_octwitterhandle_Result[] | null;
  msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey?: msdyn_ocwechatchannelconfig_Result[] | null;
  msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey?: msdyn_ocwhatsappchannelnumber_Result[] | null;
  msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey?: msdyn_smsnumber_Result[] | null;
  msfp_msfp_survey_msfp_alert_survey?: msfp_alert_Result[] | null;
  msfp_msfp_survey_msfp_emailtemplate_surveyid?: msfp_emailtemplate_Result[] | null;
  msfp_msfp_survey_msfp_fileresponse_survey?: msfp_fileresponse_Result[] | null;
  msfp_msfp_survey_msfp_question_Survey?: msfp_question_Result[] | null;
  msfp_msfp_survey_msfp_surveyinvite_surveyid?: msfp_surveyinvite_Result[] | null;
  msfp_msfp_survey_msfp_surveyreminder_survey?: msfp_surveyreminder_Result[] | null;
  msfp_msfp_survey_msfp_surveyresponse_surveyid?: msfp_surveyresponse_Result[] | null;
  msfp_survey_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_survey_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_survey_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_survey_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_survey_ProcessSession?: ProcessSession_Result[] | null;
  msfp_survey_SyncErrors?: SyncError_Result[] | null;
  msfp_survey_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_survey extends msfp_survey_Base, msfp_survey_Relationships {
  msdyn_Inspection_bind$msdyn_inspections?: string | null;
  msfp_project_bind$msfp_projects?: string | null;
  msfp_publishedby_bind$systemusers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_survey_Create extends msfp_survey {
}
interface msfp_survey_Update extends msfp_survey {
}
interface msfp_survey_Select {
  createdby_guid: WebAttribute<msfp_survey_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_survey_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_survey_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_survey_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_survey_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_survey_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_survey_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_inspection_guid: WebAttribute<msfp_survey_Select, { msdyn_inspection_guid: string | null }, { msdyn_inspection_formatted?: string }>;
  msfp_acceptanonymousresponses: WebAttribute<msfp_survey_Select, { msfp_acceptanonymousresponses: boolean | null }, {  }>;
  msfp_anonymousurl: WebAttribute<msfp_survey_Select, { msfp_anonymousurl: string | null }, {  }>;
  msfp_description: WebAttribute<msfp_survey_Select, { msfp_description: string | null }, {  }>;
  msfp_embedcode: WebAttribute<msfp_survey_Select, { msfp_embedcode: string | null }, {  }>;
  msfp_enddate: WebAttribute<msfp_survey_Select, { msfp_enddate: Date | null }, { msfp_enddate_formatted?: string }>;
  msfp_friendlyname: WebAttribute<msfp_survey_Select, { msfp_friendlyname: string | null }, {  }>;
  msfp_name: WebAttribute<msfp_survey_Select, { msfp_name: string | null }, {  }>;
  msfp_otherproperties: WebAttribute<msfp_survey_Select, { msfp_otherproperties: string | null }, {  }>;
  msfp_permanentid: WebAttribute<msfp_survey_Select, { msfp_permanentid: string | null }, {  }>;
  msfp_project_guid: WebAttribute<msfp_survey_Select, { msfp_project_guid: string | null }, { msfp_project_formatted?: string }>;
  msfp_publishedby_guid: WebAttribute<msfp_survey_Select, { msfp_publishedby_guid: string | null }, { msfp_publishedby_formatted?: string }>;
  msfp_publishedon: WebAttribute<msfp_survey_Select, { msfp_publishedon: Date | null }, { msfp_publishedon_formatted?: string }>;
  msfp_sourcesurveyidentifier: WebAttribute<msfp_survey_Select, { msfp_sourcesurveyidentifier: string | null }, {  }>;
  msfp_sourcesurveymodifieddate: WebAttribute<msfp_survey_Select, { msfp_sourcesurveymodifieddate: Date | null }, { msfp_sourcesurveymodifieddate_formatted?: string }>;
  msfp_sourcesurveyversion: WebAttribute<msfp_survey_Select, { msfp_sourcesurveyversion: string | null }, {  }>;
  msfp_startdate: WebAttribute<msfp_survey_Select, { msfp_startdate: Date | null }, { msfp_startdate_formatted?: string }>;
  msfp_surveyid: WebAttribute<msfp_survey_Select, { msfp_surveyid: string | null }, {  }>;
  msfp_surveysource: WebAttribute<msfp_survey_Select, { msfp_surveysource: string | null }, {  }>;
  msfp_surveyurl: WebAttribute<msfp_survey_Select, { msfp_surveyurl: string | null }, {  }>;
  msfp_variables: WebAttribute<msfp_survey_Select, { msfp_variables: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msfp_survey_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_survey_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_survey_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_survey_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_survey_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_survey_Select, { statecode: msfp_survey_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_survey_Select, { statuscode: msfp_survey_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_survey_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_survey_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_survey_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_survey_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_inspection_guid: XQW.Guid;
  msfp_acceptanonymousresponses: boolean;
  msfp_anonymousurl: string;
  msfp_description: string;
  msfp_embedcode: string;
  msfp_enddate: Date;
  msfp_friendlyname: string;
  msfp_name: string;
  msfp_otherproperties: string;
  msfp_permanentid: string;
  msfp_project_guid: XQW.Guid;
  msfp_publishedby_guid: XQW.Guid;
  msfp_publishedon: Date;
  msfp_sourcesurveyidentifier: string;
  msfp_sourcesurveymodifieddate: Date;
  msfp_sourcesurveyversion: string;
  msfp_startdate: Date;
  msfp_surveyid: XQW.Guid;
  msfp_surveysource: string;
  msfp_surveyurl: string;
  msfp_variables: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_survey_statecode;
  statuscode: msfp_survey_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_survey_Expand {
  createdby: WebExpand<msfp_survey_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_survey_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_survey_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_survey_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Inspection: WebExpand<msfp_survey_Expand, msdyn_inspection_Select, msdyn_inspection_Filter, { msdyn_Inspection: msdyn_inspection_Result }>;
  msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey: msdyn_livechatconfig_Result[] }>;
  msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_occustommessagingchannel_Select, msdyn_occustommessagingchannel_Filter, { msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey: msdyn_occustommessagingchannel_Result[] }>;
  msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_ocfbpage_Select, msdyn_ocfbpage_Filter, { msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey: msdyn_ocfbpage_Result[] }>;
  msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_oclinechannelconfig_Select, msdyn_oclinechannelconfig_Filter, { msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey: msdyn_oclinechannelconfig_Result[] }>;
  msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_ocsmschannelsetting_Select, msdyn_ocsmschannelsetting_Filter, { msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey: msdyn_ocsmschannelsetting_Result[] }>;
  msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_octeamschannelconfig_Select, msdyn_octeamschannelconfig_Filter, { msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey: msdyn_octeamschannelconfig_Result[] }>;
  msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_octwitterhandle_Select, msdyn_octwitterhandle_Filter, { msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey: msdyn_octwitterhandle_Result[] }>;
  msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_ocwechatchannelconfig_Select, msdyn_ocwechatchannelconfig_Filter, { msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey: msdyn_ocwechatchannelconfig_Result[] }>;
  msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_ocwhatsappchannelnumber_Select, msdyn_ocwhatsappchannelnumber_Filter, { msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey: msdyn_ocwhatsappchannelnumber_Result[] }>;
  msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey: WebExpand<msfp_survey_Expand, msdyn_smsnumber_Select, msdyn_smsnumber_Filter, { msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey: msdyn_smsnumber_Result[] }>;
  msfp_msfp_survey_msfp_alert_survey: WebExpand<msfp_survey_Expand, msfp_alert_Select, msfp_alert_Filter, { msfp_msfp_survey_msfp_alert_survey: msfp_alert_Result[] }>;
  msfp_msfp_survey_msfp_emailtemplate_surveyid: WebExpand<msfp_survey_Expand, msfp_emailtemplate_Select, msfp_emailtemplate_Filter, { msfp_msfp_survey_msfp_emailtemplate_surveyid: msfp_emailtemplate_Result[] }>;
  msfp_msfp_survey_msfp_fileresponse_survey: WebExpand<msfp_survey_Expand, msfp_fileresponse_Select, msfp_fileresponse_Filter, { msfp_msfp_survey_msfp_fileresponse_survey: msfp_fileresponse_Result[] }>;
  msfp_msfp_survey_msfp_question_Survey: WebExpand<msfp_survey_Expand, msfp_question_Select, msfp_question_Filter, { msfp_msfp_survey_msfp_question_Survey: msfp_question_Result[] }>;
  msfp_msfp_survey_msfp_surveyinvite_surveyid: WebExpand<msfp_survey_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msfp_msfp_survey_msfp_surveyinvite_surveyid: msfp_surveyinvite_Result[] }>;
  msfp_msfp_survey_msfp_surveyreminder_survey: WebExpand<msfp_survey_Expand, msfp_surveyreminder_Select, msfp_surveyreminder_Filter, { msfp_msfp_survey_msfp_surveyreminder_survey: msfp_surveyreminder_Result[] }>;
  msfp_msfp_survey_msfp_surveyresponse_surveyid: WebExpand<msfp_survey_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msfp_msfp_survey_msfp_surveyresponse_surveyid: msfp_surveyresponse_Result[] }>;
  msfp_project: WebExpand<msfp_survey_Expand, msfp_project_Select, msfp_project_Filter, { msfp_project: msfp_project_Result }>;
  msfp_publishedby: WebExpand<msfp_survey_Expand, SystemUser_Select, SystemUser_Filter, { msfp_publishedby: SystemUser_Result }>;
  msfp_survey_AsyncOperations: WebExpand<msfp_survey_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_survey_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_survey_BulkDeleteFailures: WebExpand<msfp_survey_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_survey_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_survey_MailboxTrackingFolders: WebExpand<msfp_survey_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_survey_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_survey_PrincipalObjectAttributeAccesses: WebExpand<msfp_survey_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_survey_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_survey_ProcessSession: WebExpand<msfp_survey_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_survey_ProcessSession: ProcessSession_Result[] }>;
  msfp_survey_SyncErrors: WebExpand<msfp_survey_Expand, SyncError_Select, SyncError_Filter, { msfp_survey_SyncErrors: SyncError_Result[] }>;
  msfp_survey_UserEntityInstanceDatas: WebExpand<msfp_survey_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_survey_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msfp_survey_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_survey_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_survey_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_survey_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_survey_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_inspection_formatted?: string;
  msfp_enddate_formatted?: string;
  msfp_project_formatted?: string;
  msfp_publishedby_formatted?: string;
  msfp_publishedon_formatted?: string;
  msfp_sourcesurveymodifieddate_formatted?: string;
  msfp_startdate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_survey_Result extends msfp_survey_Base, msfp_survey_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_inspection_guid: string | null;
  msfp_project_guid: string | null;
  msfp_publishedby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msfp_survey_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Inspection: WebMappingRetrieve<msdyn_inspection_Select,msdyn_inspection_Expand,msdyn_inspection_Filter,msdyn_inspection_Fixed,msdyn_inspection_Result,msdyn_inspection_FormattedResult>;
  msfp_project: WebMappingRetrieve<msfp_project_Select,msfp_project_Expand,msfp_project_Filter,msfp_project_Fixed,msfp_project_Result,msfp_project_FormattedResult>;
  msfp_publishedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_survey_RelatedMany {
  msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey: WebMappingRetrieve<msdyn_occustommessagingchannel_Select,msdyn_occustommessagingchannel_Expand,msdyn_occustommessagingchannel_Filter,msdyn_occustommessagingchannel_Fixed,msdyn_occustommessagingchannel_Result,msdyn_occustommessagingchannel_FormattedResult>;
  msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey: WebMappingRetrieve<msdyn_ocfbpage_Select,msdyn_ocfbpage_Expand,msdyn_ocfbpage_Filter,msdyn_ocfbpage_Fixed,msdyn_ocfbpage_Result,msdyn_ocfbpage_FormattedResult>;
  msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey: WebMappingRetrieve<msdyn_oclinechannelconfig_Select,msdyn_oclinechannelconfig_Expand,msdyn_oclinechannelconfig_Filter,msdyn_oclinechannelconfig_Fixed,msdyn_oclinechannelconfig_Result,msdyn_oclinechannelconfig_FormattedResult>;
  msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey: WebMappingRetrieve<msdyn_ocsmschannelsetting_Select,msdyn_ocsmschannelsetting_Expand,msdyn_ocsmschannelsetting_Filter,msdyn_ocsmschannelsetting_Fixed,msdyn_ocsmschannelsetting_Result,msdyn_ocsmschannelsetting_FormattedResult>;
  msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey: WebMappingRetrieve<msdyn_octeamschannelconfig_Select,msdyn_octeamschannelconfig_Expand,msdyn_octeamschannelconfig_Filter,msdyn_octeamschannelconfig_Fixed,msdyn_octeamschannelconfig_Result,msdyn_octeamschannelconfig_FormattedResult>;
  msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey: WebMappingRetrieve<msdyn_octwitterhandle_Select,msdyn_octwitterhandle_Expand,msdyn_octwitterhandle_Filter,msdyn_octwitterhandle_Fixed,msdyn_octwitterhandle_Result,msdyn_octwitterhandle_FormattedResult>;
  msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey: WebMappingRetrieve<msdyn_ocwechatchannelconfig_Select,msdyn_ocwechatchannelconfig_Expand,msdyn_ocwechatchannelconfig_Filter,msdyn_ocwechatchannelconfig_Fixed,msdyn_ocwechatchannelconfig_Result,msdyn_ocwechatchannelconfig_FormattedResult>;
  msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey: WebMappingRetrieve<msdyn_ocwhatsappchannelnumber_Select,msdyn_ocwhatsappchannelnumber_Expand,msdyn_ocwhatsappchannelnumber_Filter,msdyn_ocwhatsappchannelnumber_Fixed,msdyn_ocwhatsappchannelnumber_Result,msdyn_ocwhatsappchannelnumber_FormattedResult>;
  msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey: WebMappingRetrieve<msdyn_smsnumber_Select,msdyn_smsnumber_Expand,msdyn_smsnumber_Filter,msdyn_smsnumber_Fixed,msdyn_smsnumber_Result,msdyn_smsnumber_FormattedResult>;
  msfp_msfp_survey_msfp_alert_survey: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msfp_msfp_survey_msfp_emailtemplate_surveyid: WebMappingRetrieve<msfp_emailtemplate_Select,msfp_emailtemplate_Expand,msfp_emailtemplate_Filter,msfp_emailtemplate_Fixed,msfp_emailtemplate_Result,msfp_emailtemplate_FormattedResult>;
  msfp_msfp_survey_msfp_fileresponse_survey: WebMappingRetrieve<msfp_fileresponse_Select,msfp_fileresponse_Expand,msfp_fileresponse_Filter,msfp_fileresponse_Fixed,msfp_fileresponse_Result,msfp_fileresponse_FormattedResult>;
  msfp_msfp_survey_msfp_question_Survey: WebMappingRetrieve<msfp_question_Select,msfp_question_Expand,msfp_question_Filter,msfp_question_Fixed,msfp_question_Result,msfp_question_FormattedResult>;
  msfp_msfp_survey_msfp_surveyinvite_surveyid: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msfp_msfp_survey_msfp_surveyreminder_survey: WebMappingRetrieve<msfp_surveyreminder_Select,msfp_surveyreminder_Expand,msfp_surveyreminder_Filter,msfp_surveyreminder_Fixed,msfp_surveyreminder_Result,msfp_surveyreminder_FormattedResult>;
  msfp_msfp_survey_msfp_surveyresponse_surveyid: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msfp_survey_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_survey_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_survey_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_survey_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_survey_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_survey_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_survey_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_surveies: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_surveies: WebMappingRelated<msfp_survey_RelatedOne,msfp_survey_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_surveies: WebMappingCUDA<msfp_survey_Create,msfp_survey_Update,msfp_survey_Select>;
}
