interface msfp_emailtemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_candelete?: boolean | null;
  msfp_canedit?: boolean | null;
  msfp_canrename?: boolean | null;
  msfp_emailtemplatebody?: string | null;
  msfp_emailtemplateid?: string | null;
  msfp_emailtemplatesubject?: string | null;
  msfp_language?: string | null;
  msfp_name?: string | null;
  msfp_sourcesurveyidentifier?: string | null;
  msfp_tags?: string | null;
  msfp_templatetype?: msfp_emailtemplate_msfp_templatetype | null;
  msfp_version?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_emailtemplate_statecode | null;
  statuscode?: msfp_emailtemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_emailtemplate_Relationships {
  msfp_emailtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_emailtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_emailtemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_emailtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_emailtemplate_ProcessSession?: ProcessSession_Result[] | null;
  msfp_emailtemplate_SyncErrors?: SyncError_Result[] | null;
  msfp_emailtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msfp_msfp_emailtemplate_msfp_localizedemailtem?: msfp_localizedemailtemplate_Result[] | null;
  msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate?: msfp_surveyreminder_Result[] | null;
}
interface msfp_emailtemplate extends msfp_emailtemplate_Base, msfp_emailtemplate_Relationships {
  msfp_survey_bind$msfp_surveies?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_emailtemplate_Create extends msfp_emailtemplate {
}
interface msfp_emailtemplate_Update extends msfp_emailtemplate {
}
interface msfp_emailtemplate_Select {
  createdby_guid: WebAttribute<msfp_emailtemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_emailtemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_emailtemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_emailtemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_emailtemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_emailtemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_emailtemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_candelete: WebAttribute<msfp_emailtemplate_Select, { msfp_candelete: boolean | null }, {  }>;
  msfp_canedit: WebAttribute<msfp_emailtemplate_Select, { msfp_canedit: boolean | null }, {  }>;
  msfp_canrename: WebAttribute<msfp_emailtemplate_Select, { msfp_canrename: boolean | null }, {  }>;
  msfp_emailtemplatebody: WebAttribute<msfp_emailtemplate_Select, { msfp_emailtemplatebody: string | null }, {  }>;
  msfp_emailtemplateid: WebAttribute<msfp_emailtemplate_Select, { msfp_emailtemplateid: string | null }, {  }>;
  msfp_emailtemplatesubject: WebAttribute<msfp_emailtemplate_Select, { msfp_emailtemplatesubject: string | null }, {  }>;
  msfp_language: WebAttribute<msfp_emailtemplate_Select, { msfp_language: string | null }, {  }>;
  msfp_name: WebAttribute<msfp_emailtemplate_Select, { msfp_name: string | null }, {  }>;
  msfp_sourcesurveyidentifier: WebAttribute<msfp_emailtemplate_Select, { msfp_sourcesurveyidentifier: string | null }, {  }>;
  msfp_survey_guid: WebAttribute<msfp_emailtemplate_Select, { msfp_survey_guid: string | null }, { msfp_survey_formatted?: string }>;
  msfp_tags: WebAttribute<msfp_emailtemplate_Select, { msfp_tags: string | null }, {  }>;
  msfp_templatetype: WebAttribute<msfp_emailtemplate_Select, { msfp_templatetype: msfp_emailtemplate_msfp_templatetype | null }, { msfp_templatetype_formatted?: string }>;
  msfp_version: WebAttribute<msfp_emailtemplate_Select, { msfp_version: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msfp_emailtemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_emailtemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_emailtemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_emailtemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_emailtemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_emailtemplate_Select, { statecode: msfp_emailtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_emailtemplate_Select, { statuscode: msfp_emailtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_emailtemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_emailtemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_emailtemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_emailtemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_candelete: boolean;
  msfp_canedit: boolean;
  msfp_canrename: boolean;
  msfp_emailtemplatebody: string;
  msfp_emailtemplateid: XQW.Guid;
  msfp_emailtemplatesubject: string;
  msfp_language: string;
  msfp_name: string;
  msfp_sourcesurveyidentifier: string;
  msfp_survey_guid: XQW.Guid;
  msfp_tags: string;
  msfp_templatetype: msfp_emailtemplate_msfp_templatetype;
  msfp_version: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_emailtemplate_statecode;
  statuscode: msfp_emailtemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_emailtemplate_Expand {
  createdby: WebExpand<msfp_emailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_emailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_emailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_emailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_emailtemplate_AsyncOperations: WebExpand<msfp_emailtemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_emailtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_emailtemplate_BulkDeleteFailures: WebExpand<msfp_emailtemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_emailtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_emailtemplate_MailboxTrackingFolders: WebExpand<msfp_emailtemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_emailtemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_emailtemplate_PrincipalObjectAttributeAccesses: WebExpand<msfp_emailtemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_emailtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_emailtemplate_ProcessSession: WebExpand<msfp_emailtemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_emailtemplate_ProcessSession: ProcessSession_Result[] }>;
  msfp_emailtemplate_SyncErrors: WebExpand<msfp_emailtemplate_Expand, SyncError_Select, SyncError_Filter, { msfp_emailtemplate_SyncErrors: SyncError_Result[] }>;
  msfp_emailtemplate_UserEntityInstanceDatas: WebExpand<msfp_emailtemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_emailtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msfp_msfp_emailtemplate_msfp_localizedemailtem: WebExpand<msfp_emailtemplate_Expand, msfp_localizedemailtemplate_Select, msfp_localizedemailtemplate_Filter, { msfp_msfp_emailtemplate_msfp_localizedemailtem: msfp_localizedemailtemplate_Result[] }>;
  msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate: WebExpand<msfp_emailtemplate_Expand, msfp_surveyreminder_Select, msfp_surveyreminder_Filter, { msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate: msfp_surveyreminder_Result[] }>;
  msfp_survey: WebExpand<msfp_emailtemplate_Expand, msfp_survey_Select, msfp_survey_Filter, { msfp_survey: msfp_survey_Result }>;
  ownerid: WebExpand<msfp_emailtemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_emailtemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_emailtemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_emailtemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_emailtemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_survey_formatted?: string;
  msfp_templatetype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_emailtemplate_Result extends msfp_emailtemplate_Base, msfp_emailtemplate_Relationships {
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
interface msfp_emailtemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msfp_survey: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_emailtemplate_RelatedMany {
  msfp_emailtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_emailtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_emailtemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_emailtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_emailtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_emailtemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_emailtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msfp_msfp_emailtemplate_msfp_localizedemailtem: WebMappingRetrieve<msfp_localizedemailtemplate_Select,msfp_localizedemailtemplate_Expand,msfp_localizedemailtemplate_Filter,msfp_localizedemailtemplate_Fixed,msfp_localizedemailtemplate_Result,msfp_localizedemailtemplate_FormattedResult>;
  msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate: WebMappingRetrieve<msfp_surveyreminder_Select,msfp_surveyreminder_Expand,msfp_surveyreminder_Filter,msfp_surveyreminder_Fixed,msfp_surveyreminder_Result,msfp_surveyreminder_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_emailtemplates: WebMappingRetrieve<msfp_emailtemplate_Select,msfp_emailtemplate_Expand,msfp_emailtemplate_Filter,msfp_emailtemplate_Fixed,msfp_emailtemplate_Result,msfp_emailtemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_emailtemplates: WebMappingRelated<msfp_emailtemplate_RelatedOne,msfp_emailtemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_emailtemplates: WebMappingCUDA<msfp_emailtemplate_Create,msfp_emailtemplate_Update,msfp_emailtemplate_Select>;
}
