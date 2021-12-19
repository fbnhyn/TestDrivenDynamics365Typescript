interface msdyn_playbookactivity_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_activityLogicalName?: string | null;
  msdyn_activityType?: msdyn_playbookactivity_optionset | null;
  msdyn_playbookactivity_json?: string | null;
  msdyn_playbookactivityid?: string | null;
  msdyn_subject?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_playbookactivity_statecode | null;
  statuscode?: msdyn_playbookactivity_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_playbookactivity_Relationships {
  msdyn_playbookactivity_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_playbookactivity_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_playbookactivity_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_playbookactivity_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_playbookactivity_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_playbookactivity_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_playbookactivity_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_playbookactivity_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_playbookactivity_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_playbookactivity_SyncErrors?: SyncError_Result[] | null;
  msdyn_playbookactivity_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_playbookactivity_msdyn_playbookactivityattribute?: msdyn_playbookactivityattribute_Result[] | null;
}
interface msdyn_playbookactivity extends msdyn_playbookactivity_Base, msdyn_playbookactivity_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_playbookactivity_Create extends msdyn_playbookactivity {
  msdyn_playbooktemplateid_bind$msdyn_playbooktemplates?: string | null;
}
interface msdyn_playbookactivity_Update extends msdyn_playbookactivity {
}
interface msdyn_playbookactivity_Select {
  createdby_guid: WebAttribute<msdyn_playbookactivity_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_playbookactivity_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_playbookactivity_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_playbookactivity_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_playbookactivity_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_playbookactivity_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_playbookactivity_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_activityLogicalName: WebAttribute<msdyn_playbookactivity_Select, { msdyn_activityLogicalName: string | null }, {  }>;
  msdyn_activityType: WebAttribute<msdyn_playbookactivity_Select, { msdyn_activityType: msdyn_playbookactivity_optionset | null }, { msdyn_activityType_formatted?: string }>;
  msdyn_playbookactivity_json: WebAttribute<msdyn_playbookactivity_Select, { msdyn_playbookactivity_json: string | null }, {  }>;
  msdyn_playbookactivityid: WebAttribute<msdyn_playbookactivity_Select, { msdyn_playbookactivityid: string | null }, {  }>;
  msdyn_playbooktemplateid_guid: WebAttribute<msdyn_playbookactivity_Select, { msdyn_playbooktemplateid_guid: string | null }, { msdyn_playbooktemplateid_formatted?: string }>;
  msdyn_subject: WebAttribute<msdyn_playbookactivity_Select, { msdyn_subject: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_playbookactivity_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_playbookactivity_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_playbookactivity_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_playbookactivity_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_playbookactivity_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_playbookactivity_Select, { statecode: msdyn_playbookactivity_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_playbookactivity_Select, { statuscode: msdyn_playbookactivity_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_playbookactivity_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_playbookactivity_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_playbookactivity_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_playbookactivity_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_activityLogicalName: string;
  msdyn_activityType: msdyn_playbookactivity_optionset;
  msdyn_playbookactivity_json: string;
  msdyn_playbookactivityid: XQW.Guid;
  msdyn_playbooktemplateid_guid: XQW.Guid;
  msdyn_subject: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_playbookactivity_statecode;
  statuscode: msdyn_playbookactivity_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_playbookactivity_Expand {
  createdby: WebExpand<msdyn_playbookactivity_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_playbookactivity_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_playbookactivity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_playbookactivity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_playbookactivity_AsyncOperations: WebExpand<msdyn_playbookactivity_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_playbookactivity_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_playbookactivity_BulkDeleteFailures: WebExpand<msdyn_playbookactivity_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_playbookactivity_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_playbookactivity_DuplicateBaseRecord: WebExpand<msdyn_playbookactivity_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_playbookactivity_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_playbookactivity_DuplicateMatchingRecord: WebExpand<msdyn_playbookactivity_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_playbookactivity_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_playbookactivity_MailboxTrackingFolders: WebExpand<msdyn_playbookactivity_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_playbookactivity_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_playbookactivity_PrincipalObjectAttributeAccesses: WebExpand<msdyn_playbookactivity_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_playbookactivity_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_playbookactivity_ProcessSession: WebExpand<msdyn_playbookactivity_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_playbookactivity_ProcessSession: ProcessSession_Result[] }>;
  msdyn_playbookactivity_SharePointDocumentLocations: WebExpand<msdyn_playbookactivity_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_playbookactivity_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_playbookactivity_SharePointDocuments: WebExpand<msdyn_playbookactivity_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_playbookactivity_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_playbookactivity_SyncErrors: WebExpand<msdyn_playbookactivity_Expand, SyncError_Select, SyncError_Filter, { msdyn_playbookactivity_SyncErrors: SyncError_Result[] }>;
  msdyn_playbookactivity_UserEntityInstanceDatas: WebExpand<msdyn_playbookactivity_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_playbookactivity_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_playbookactivity_msdyn_playbookactivityattribute: WebExpand<msdyn_playbookactivity_Expand, msdyn_playbookactivityattribute_Select, msdyn_playbookactivityattribute_Filter, { msdyn_playbookactivity_msdyn_playbookactivityattribute: msdyn_playbookactivityattribute_Result[] }>;
  msdyn_playbooktemplateid: WebExpand<msdyn_playbookactivity_Expand, msdyn_playbooktemplate_Select, msdyn_playbooktemplate_Filter, { msdyn_playbooktemplateid: msdyn_playbooktemplate_Result }>;
  ownerid: WebExpand<msdyn_playbookactivity_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_playbookactivity_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_playbookactivity_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_playbookactivity_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_playbookactivity_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_activityType_formatted?: string;
  msdyn_playbooktemplateid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_playbookactivity_Result extends msdyn_playbookactivity_Base, msdyn_playbookactivity_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_playbooktemplateid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_playbookactivity_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_playbooktemplateid: WebMappingRetrieve<msdyn_playbooktemplate_Select,msdyn_playbooktemplate_Expand,msdyn_playbooktemplate_Filter,msdyn_playbooktemplate_Fixed,msdyn_playbooktemplate_Result,msdyn_playbooktemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_playbookactivity_RelatedMany {
  msdyn_playbookactivity_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_playbookactivity_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_playbookactivity_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_playbookactivity_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_playbookactivity_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_playbookactivity_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_playbookactivity_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_playbookactivity_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_playbookactivity_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_playbookactivity_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_playbookactivity_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_playbookactivity_msdyn_playbookactivityattribute: WebMappingRetrieve<msdyn_playbookactivityattribute_Select,msdyn_playbookactivityattribute_Expand,msdyn_playbookactivityattribute_Filter,msdyn_playbookactivityattribute_Fixed,msdyn_playbookactivityattribute_Result,msdyn_playbookactivityattribute_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_playbookactivities: WebMappingRetrieve<msdyn_playbookactivity_Select,msdyn_playbookactivity_Expand,msdyn_playbookactivity_Filter,msdyn_playbookactivity_Fixed,msdyn_playbookactivity_Result,msdyn_playbookactivity_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_playbookactivities: WebMappingRelated<msdyn_playbookactivity_RelatedOne,msdyn_playbookactivity_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_playbookactivities: WebMappingCUDA<msdyn_playbookactivity_Create,msdyn_playbookactivity_Update,msdyn_playbookactivity_Select>;
}
