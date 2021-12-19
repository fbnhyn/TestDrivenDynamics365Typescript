interface msdyn_chatquestionnaireresponseitem_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_chatanswertext?: string | null;
  msdyn_chatquestionnaireresponseitemid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_chatquestionnaireresponseitem_statecode | null;
  statuscode?: msdyn_chatquestionnaireresponseitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_chatquestionnaireresponseitem_Relationships {
  msdyn_ChatQuestionnaireResponseId?: msdyn_chatquestionnaireresponse_Result | null;
  msdyn_chatquestionnaireresponseitem_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_chatquestionnaireresponseitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_chatquestionnaireresponseitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_chatquestionnaireresponseitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_chatquestionnaireresponseitem_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_chatquestionnaireresponseitem_SyncErrors?: SyncError_Result[] | null;
  msdyn_chatquestionnaireresponseitem_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_chatquestionnaireresponseitem extends msdyn_chatquestionnaireresponseitem_Base, msdyn_chatquestionnaireresponseitem_Relationships {
  msdyn_ChatQuestionnaireResponseId_bind$msdyn_chatquestionnaireresponses?: string | null;
  msdyn_chatansweroptionid_bind$msdyn_chatansweroptions?: string | null;
  msdyn_surveyquestionid_bind$msdyn_surveyquestions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_chatquestionnaireresponseitem_Create extends msdyn_chatquestionnaireresponseitem {
}
interface msdyn_chatquestionnaireresponseitem_Update extends msdyn_chatquestionnaireresponseitem {
}
interface msdyn_chatquestionnaireresponseitem_Select {
  createdby_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_chatansweroptionid_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { msdyn_chatansweroptionid_guid: string | null }, { msdyn_chatansweroptionid_formatted?: string }>;
  msdyn_chatanswertext: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { msdyn_chatanswertext: string | null }, {  }>;
  msdyn_chatquestionnaireresponseid_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { msdyn_chatquestionnaireresponseid_guid: string | null }, { msdyn_chatquestionnaireresponseid_formatted?: string }>;
  msdyn_chatquestionnaireresponseitemid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { msdyn_chatquestionnaireresponseitemid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { msdyn_name: string | null }, {  }>;
  msdyn_surveyquestionid_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { msdyn_surveyquestionid_guid: string | null }, { msdyn_surveyquestionid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { statecode: msdyn_chatquestionnaireresponseitem_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { statuscode: msdyn_chatquestionnaireresponseitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_chatquestionnaireresponseitem_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_chatquestionnaireresponseitem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_chatansweroptionid_guid: XQW.Guid;
  msdyn_chatanswertext: string;
  msdyn_chatquestionnaireresponseid_guid: XQW.Guid;
  msdyn_chatquestionnaireresponseitemid: XQW.Guid;
  msdyn_name: string;
  msdyn_surveyquestionid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_chatquestionnaireresponseitem_statecode;
  statuscode: msdyn_chatquestionnaireresponseitem_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_chatquestionnaireresponseitem_Expand {
  createdby: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ChatQuestionnaireResponseId: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, msdyn_chatquestionnaireresponse_Select, msdyn_chatquestionnaireresponse_Filter, { msdyn_ChatQuestionnaireResponseId: msdyn_chatquestionnaireresponse_Result }>;
  msdyn_chatansweroptionid: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, msdyn_chatansweroption_Select, msdyn_chatansweroption_Filter, { msdyn_chatansweroptionid: msdyn_chatansweroption_Result }>;
  msdyn_chatquestionnaireresponseitem_AsyncOperations: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_chatquestionnaireresponseitem_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_chatquestionnaireresponseitem_BulkDeleteFailures: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_chatquestionnaireresponseitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_chatquestionnaireresponseitem_MailboxTrackingFolders: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_chatquestionnaireresponseitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_chatquestionnaireresponseitem_PrincipalObjectAttributeAccesses: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_chatquestionnaireresponseitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_chatquestionnaireresponseitem_ProcessSession: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_chatquestionnaireresponseitem_ProcessSession: ProcessSession_Result[] }>;
  msdyn_chatquestionnaireresponseitem_SyncErrors: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, SyncError_Select, SyncError_Filter, { msdyn_chatquestionnaireresponseitem_SyncErrors: SyncError_Result[] }>;
  msdyn_chatquestionnaireresponseitem_UserEntityInstanceDatas: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_chatquestionnaireresponseitem_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_surveyquestionid: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, msdyn_surveyquestion_Select, msdyn_surveyquestion_Filter, { msdyn_surveyquestionid: msdyn_surveyquestion_Result }>;
  ownerid: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_chatquestionnaireresponseitem_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_chatquestionnaireresponseitem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_chatansweroptionid_formatted?: string;
  msdyn_chatquestionnaireresponseid_formatted?: string;
  msdyn_surveyquestionid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_chatquestionnaireresponseitem_Result extends msdyn_chatquestionnaireresponseitem_Base, msdyn_chatquestionnaireresponseitem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_chatansweroptionid_guid: string | null;
  msdyn_chatquestionnaireresponseid_guid: string | null;
  msdyn_surveyquestionid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_chatquestionnaireresponseitem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ChatQuestionnaireResponseId: WebMappingRetrieve<msdyn_chatquestionnaireresponse_Select,msdyn_chatquestionnaireresponse_Expand,msdyn_chatquestionnaireresponse_Filter,msdyn_chatquestionnaireresponse_Fixed,msdyn_chatquestionnaireresponse_Result,msdyn_chatquestionnaireresponse_FormattedResult>;
  msdyn_chatansweroptionid: WebMappingRetrieve<msdyn_chatansweroption_Select,msdyn_chatansweroption_Expand,msdyn_chatansweroption_Filter,msdyn_chatansweroption_Fixed,msdyn_chatansweroption_Result,msdyn_chatansweroption_FormattedResult>;
  msdyn_surveyquestionid: WebMappingRetrieve<msdyn_surveyquestion_Select,msdyn_surveyquestion_Expand,msdyn_surveyquestion_Filter,msdyn_surveyquestion_Fixed,msdyn_surveyquestion_Result,msdyn_surveyquestion_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_chatquestionnaireresponseitem_RelatedMany {
  msdyn_chatquestionnaireresponseitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_chatquestionnaireresponseitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_chatquestionnaireresponseitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_chatquestionnaireresponseitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_chatquestionnaireresponseitem_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_chatquestionnaireresponseitem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_chatquestionnaireresponseitem_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_chatquestionnaireresponseitems: WebMappingRetrieve<msdyn_chatquestionnaireresponseitem_Select,msdyn_chatquestionnaireresponseitem_Expand,msdyn_chatquestionnaireresponseitem_Filter,msdyn_chatquestionnaireresponseitem_Fixed,msdyn_chatquestionnaireresponseitem_Result,msdyn_chatquestionnaireresponseitem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_chatquestionnaireresponseitems: WebMappingRelated<msdyn_chatquestionnaireresponseitem_RelatedOne,msdyn_chatquestionnaireresponseitem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_chatquestionnaireresponseitems: WebMappingCUDA<msdyn_chatquestionnaireresponseitem_Create,msdyn_chatquestionnaireresponseitem_Update,msdyn_chatquestionnaireresponseitem_Select>;
}
