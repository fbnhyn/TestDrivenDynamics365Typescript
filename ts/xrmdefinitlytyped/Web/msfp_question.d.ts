interface msfp_question_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_choicetype?: msfp_question_msfp_choicetype | null;
  msfp_correctanswer?: string | null;
  msfp_imageproperties?: string | null;
  msfp_maximumrating?: number | null;
  msfp_multiline?: boolean | null;
  msfp_name?: string | null;
  msfp_order?: number | null;
  msfp_otherproperties?: string | null;
  msfp_permanentid?: string | null;
  msfp_questionchoices?: string | null;
  msfp_questionid?: string | null;
  msfp_questiontext?: string | null;
  msfp_questiontype?: msfp_question_msfp_questiontype | null;
  msfp_responserequired?: boolean | null;
  msfp_sequence?: number | null;
  msfp_sourceparentquestionidentifier?: string | null;
  msfp_sourcequestionidentifier?: string | null;
  msfp_sourcesurveyidentifier?: string | null;
  msfp_subtitle?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_question_statecode | null;
  statuscode?: msfp_question_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_question_Relationships {
  msfp_Survey?: msfp_survey_Result | null;
  msfp_msfp_question_msfp_fileresponse_question?: msfp_fileresponse_Result[] | null;
  msfp_msfp_question_msfp_questionresponse_questionid?: msfp_questionresponse_Result[] | null;
  msfp_question_Annotations?: Annotation_Result[] | null;
  msfp_question_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_question_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_question_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_question_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_question_ProcessSession?: ProcessSession_Result[] | null;
  msfp_question_SyncErrors?: SyncError_Result[] | null;
  msfp_question_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_question extends msfp_question_Base, msfp_question_Relationships {
  msfp_Survey_bind$msfp_surveies?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_question_Create extends msfp_question {
}
interface msfp_question_Update extends msfp_question {
}
interface msfp_question_Select {
  createdby_guid: WebAttribute<msfp_question_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_question_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_question_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_question_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_question_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_question_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_question_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_choicetype: WebAttribute<msfp_question_Select, { msfp_choicetype: msfp_question_msfp_choicetype | null }, { msfp_choicetype_formatted?: string }>;
  msfp_correctanswer: WebAttribute<msfp_question_Select, { msfp_correctanswer: string | null }, {  }>;
  msfp_imageproperties: WebAttribute<msfp_question_Select, { msfp_imageproperties: string | null }, {  }>;
  msfp_maximumrating: WebAttribute<msfp_question_Select, { msfp_maximumrating: number | null }, {  }>;
  msfp_multiline: WebAttribute<msfp_question_Select, { msfp_multiline: boolean | null }, {  }>;
  msfp_name: WebAttribute<msfp_question_Select, { msfp_name: string | null }, {  }>;
  msfp_order: WebAttribute<msfp_question_Select, { msfp_order: number | null }, {  }>;
  msfp_otherproperties: WebAttribute<msfp_question_Select, { msfp_otherproperties: string | null }, {  }>;
  msfp_permanentid: WebAttribute<msfp_question_Select, { msfp_permanentid: string | null }, {  }>;
  msfp_questionchoices: WebAttribute<msfp_question_Select, { msfp_questionchoices: string | null }, {  }>;
  msfp_questionid: WebAttribute<msfp_question_Select, { msfp_questionid: string | null }, {  }>;
  msfp_questiontext: WebAttribute<msfp_question_Select, { msfp_questiontext: string | null }, {  }>;
  msfp_questiontype: WebAttribute<msfp_question_Select, { msfp_questiontype: msfp_question_msfp_questiontype | null }, { msfp_questiontype_formatted?: string }>;
  msfp_responserequired: WebAttribute<msfp_question_Select, { msfp_responserequired: boolean | null }, {  }>;
  msfp_sequence: WebAttribute<msfp_question_Select, { msfp_sequence: number | null }, {  }>;
  msfp_sourceparentquestionidentifier: WebAttribute<msfp_question_Select, { msfp_sourceparentquestionidentifier: string | null }, {  }>;
  msfp_sourcequestionidentifier: WebAttribute<msfp_question_Select, { msfp_sourcequestionidentifier: string | null }, {  }>;
  msfp_sourcesurveyidentifier: WebAttribute<msfp_question_Select, { msfp_sourcesurveyidentifier: string | null }, {  }>;
  msfp_subtitle: WebAttribute<msfp_question_Select, { msfp_subtitle: string | null }, {  }>;
  msfp_survey_guid: WebAttribute<msfp_question_Select, { msfp_survey_guid: string | null }, { msfp_survey_formatted?: string }>;
  overriddencreatedon: WebAttribute<msfp_question_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_question_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_question_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_question_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_question_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_question_Select, { statecode: msfp_question_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_question_Select, { statuscode: msfp_question_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_question_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_question_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_question_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_question_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_choicetype: msfp_question_msfp_choicetype;
  msfp_correctanswer: string;
  msfp_imageproperties: string;
  msfp_maximumrating: number;
  msfp_multiline: boolean;
  msfp_name: string;
  msfp_order: any;
  msfp_otherproperties: string;
  msfp_permanentid: string;
  msfp_questionchoices: string;
  msfp_questionid: XQW.Guid;
  msfp_questiontext: string;
  msfp_questiontype: msfp_question_msfp_questiontype;
  msfp_responserequired: boolean;
  msfp_sequence: number;
  msfp_sourceparentquestionidentifier: string;
  msfp_sourcequestionidentifier: string;
  msfp_sourcesurveyidentifier: string;
  msfp_subtitle: string;
  msfp_survey_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_question_statecode;
  statuscode: msfp_question_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_question_Expand {
  createdby: WebExpand<msfp_question_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_question_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_question_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_question_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_Survey: WebExpand<msfp_question_Expand, msfp_survey_Select, msfp_survey_Filter, { msfp_Survey: msfp_survey_Result }>;
  msfp_msfp_question_msfp_fileresponse_question: WebExpand<msfp_question_Expand, msfp_fileresponse_Select, msfp_fileresponse_Filter, { msfp_msfp_question_msfp_fileresponse_question: msfp_fileresponse_Result[] }>;
  msfp_msfp_question_msfp_questionresponse_questionid: WebExpand<msfp_question_Expand, msfp_questionresponse_Select, msfp_questionresponse_Filter, { msfp_msfp_question_msfp_questionresponse_questionid: msfp_questionresponse_Result[] }>;
  msfp_question_Annotations: WebExpand<msfp_question_Expand, Annotation_Select, Annotation_Filter, { msfp_question_Annotations: Annotation_Result[] }>;
  msfp_question_AsyncOperations: WebExpand<msfp_question_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_question_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_question_BulkDeleteFailures: WebExpand<msfp_question_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_question_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_question_MailboxTrackingFolders: WebExpand<msfp_question_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_question_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_question_PrincipalObjectAttributeAccesses: WebExpand<msfp_question_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_question_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_question_ProcessSession: WebExpand<msfp_question_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_question_ProcessSession: ProcessSession_Result[] }>;
  msfp_question_SyncErrors: WebExpand<msfp_question_Expand, SyncError_Select, SyncError_Filter, { msfp_question_SyncErrors: SyncError_Result[] }>;
  msfp_question_UserEntityInstanceDatas: WebExpand<msfp_question_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_question_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msfp_question_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_question_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_question_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_question_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_question_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_choicetype_formatted?: string;
  msfp_questiontype_formatted?: string;
  msfp_survey_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_question_Result extends msfp_question_Base, msfp_question_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msfp_survey_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msfp_question_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msfp_Survey: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_question_RelatedMany {
  msfp_msfp_question_msfp_fileresponse_question: WebMappingRetrieve<msfp_fileresponse_Select,msfp_fileresponse_Expand,msfp_fileresponse_Filter,msfp_fileresponse_Fixed,msfp_fileresponse_Result,msfp_fileresponse_FormattedResult>;
  msfp_msfp_question_msfp_questionresponse_questionid: WebMappingRetrieve<msfp_questionresponse_Select,msfp_questionresponse_Expand,msfp_questionresponse_Filter,msfp_questionresponse_Fixed,msfp_questionresponse_Result,msfp_questionresponse_FormattedResult>;
  msfp_question_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msfp_question_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_question_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_question_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_question_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_question_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_question_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_question_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_questions: WebMappingRetrieve<msfp_question_Select,msfp_question_Expand,msfp_question_Filter,msfp_question_Fixed,msfp_question_Result,msfp_question_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_questions: WebMappingRelated<msfp_question_RelatedOne,msfp_question_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_questions: WebMappingCUDA<msfp_question_Create,msfp_question_Update,msfp_question_Select>;
}
