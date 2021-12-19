interface msfp_surveyreminder_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_description?: string | null;
  msfp_name?: string | null;
  msfp_properties?: string | null;
  msfp_scheduleddate?: Date | null;
  msfp_status?: msfp_surveyreminder_msfp_status | null;
  msfp_surveyreminderid?: string | null;
  msfp_type?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_surveyreminder_statecode | null;
  statuscode?: msfp_surveyreminder_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_surveyreminder_Relationships {
  msfp_surveyreminder_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_surveyreminder_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_surveyreminder_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msfp_surveyreminder_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msfp_surveyreminder_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_surveyreminder_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_surveyreminder_ProcessSession?: ProcessSession_Result[] | null;
  msfp_surveyreminder_SyncErrors?: SyncError_Result[] | null;
  msfp_surveyreminder_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_surveyreminder extends msfp_surveyreminder_Base, msfp_surveyreminder_Relationships {
  msfp_emailtemplate_bind$msfp_emailtemplates?: string | null;
  msfp_survey_bind$msfp_surveies?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_surveyreminder_Create extends msfp_surveyreminder {
}
interface msfp_surveyreminder_Update extends msfp_surveyreminder {
}
interface msfp_surveyreminder_Select {
  createdby_guid: WebAttribute<msfp_surveyreminder_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_surveyreminder_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_surveyreminder_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_surveyreminder_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_surveyreminder_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_surveyreminder_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_surveyreminder_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_description: WebAttribute<msfp_surveyreminder_Select, { msfp_description: string | null }, {  }>;
  msfp_emailtemplate_guid: WebAttribute<msfp_surveyreminder_Select, { msfp_emailtemplate_guid: string | null }, { msfp_emailtemplate_formatted?: string }>;
  msfp_name: WebAttribute<msfp_surveyreminder_Select, { msfp_name: string | null }, {  }>;
  msfp_properties: WebAttribute<msfp_surveyreminder_Select, { msfp_properties: string | null }, {  }>;
  msfp_scheduleddate: WebAttribute<msfp_surveyreminder_Select, { msfp_scheduleddate: Date | null }, { msfp_scheduleddate_formatted?: string }>;
  msfp_status: WebAttribute<msfp_surveyreminder_Select, { msfp_status: msfp_surveyreminder_msfp_status | null }, { msfp_status_formatted?: string }>;
  msfp_survey_guid: WebAttribute<msfp_surveyreminder_Select, { msfp_survey_guid: string | null }, { msfp_survey_formatted?: string }>;
  msfp_surveyreminderid: WebAttribute<msfp_surveyreminder_Select, { msfp_surveyreminderid: string | null }, {  }>;
  msfp_type: WebAttribute<msfp_surveyreminder_Select, { msfp_type: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msfp_surveyreminder_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_surveyreminder_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_surveyreminder_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_surveyreminder_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_surveyreminder_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_surveyreminder_Select, { statecode: msfp_surveyreminder_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_surveyreminder_Select, { statuscode: msfp_surveyreminder_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_surveyreminder_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_surveyreminder_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_surveyreminder_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_surveyreminder_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_description: string;
  msfp_emailtemplate_guid: XQW.Guid;
  msfp_name: string;
  msfp_properties: string;
  msfp_scheduleddate: Date;
  msfp_status: msfp_surveyreminder_msfp_status;
  msfp_survey_guid: XQW.Guid;
  msfp_surveyreminderid: XQW.Guid;
  msfp_type: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_surveyreminder_statecode;
  statuscode: msfp_surveyreminder_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_surveyreminder_Expand {
  createdby: WebExpand<msfp_surveyreminder_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_surveyreminder_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_surveyreminder_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_surveyreminder_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_emailtemplate: WebExpand<msfp_surveyreminder_Expand, msfp_emailtemplate_Select, msfp_emailtemplate_Filter, { msfp_emailtemplate: msfp_emailtemplate_Result }>;
  msfp_survey: WebExpand<msfp_surveyreminder_Expand, msfp_survey_Select, msfp_survey_Filter, { msfp_survey: msfp_survey_Result }>;
  msfp_surveyreminder_AsyncOperations: WebExpand<msfp_surveyreminder_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_surveyreminder_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_surveyreminder_BulkDeleteFailures: WebExpand<msfp_surveyreminder_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_surveyreminder_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_surveyreminder_DuplicateBaseRecord: WebExpand<msfp_surveyreminder_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msfp_surveyreminder_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msfp_surveyreminder_DuplicateMatchingRecord: WebExpand<msfp_surveyreminder_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msfp_surveyreminder_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msfp_surveyreminder_MailboxTrackingFolders: WebExpand<msfp_surveyreminder_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_surveyreminder_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_surveyreminder_PrincipalObjectAttributeAccesses: WebExpand<msfp_surveyreminder_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_surveyreminder_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_surveyreminder_ProcessSession: WebExpand<msfp_surveyreminder_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_surveyreminder_ProcessSession: ProcessSession_Result[] }>;
  msfp_surveyreminder_SyncErrors: WebExpand<msfp_surveyreminder_Expand, SyncError_Select, SyncError_Filter, { msfp_surveyreminder_SyncErrors: SyncError_Result[] }>;
  msfp_surveyreminder_UserEntityInstanceDatas: WebExpand<msfp_surveyreminder_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_surveyreminder_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msfp_surveyreminder_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_surveyreminder_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_surveyreminder_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_surveyreminder_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_surveyreminder_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_emailtemplate_formatted?: string;
  msfp_scheduleddate_formatted?: string;
  msfp_status_formatted?: string;
  msfp_survey_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_surveyreminder_Result extends msfp_surveyreminder_Base, msfp_surveyreminder_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msfp_emailtemplate_guid: string | null;
  msfp_survey_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msfp_surveyreminder_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msfp_emailtemplate: WebMappingRetrieve<msfp_emailtemplate_Select,msfp_emailtemplate_Expand,msfp_emailtemplate_Filter,msfp_emailtemplate_Fixed,msfp_emailtemplate_Result,msfp_emailtemplate_FormattedResult>;
  msfp_survey: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_surveyreminder_RelatedMany {
  msfp_surveyreminder_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_surveyreminder_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_surveyreminder_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msfp_surveyreminder_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msfp_surveyreminder_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_surveyreminder_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_surveyreminder_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_surveyreminder_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_surveyreminder_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_surveyreminders: WebMappingRetrieve<msfp_surveyreminder_Select,msfp_surveyreminder_Expand,msfp_surveyreminder_Filter,msfp_surveyreminder_Fixed,msfp_surveyreminder_Result,msfp_surveyreminder_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_surveyreminders: WebMappingRelated<msfp_surveyreminder_RelatedOne,msfp_surveyreminder_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_surveyreminders: WebMappingCUDA<msfp_surveyreminder_Create,msfp_surveyreminder_Update,msfp_surveyreminder_Select>;
}
