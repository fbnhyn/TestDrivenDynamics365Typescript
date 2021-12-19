interface msdyusd_languagemodule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_languagecode?: string | null;
  msdyusd_languagemoduleid?: string | null;
  msdyusd_lcid?: string | null;
  msdyusd_location?: string | null;
  msdyusd_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_languagemodule_statecode | null;
  statuscode?: msdyusd_languagemodule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_languagemodule_Relationships {
  msdyusd_GlobalManagerId?: UII_hostedapplication_Result | null;
  msdyusd_languagemodule_Annotations?: Annotation_Result[] | null;
  msdyusd_languagemodule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_languagemodule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_languagemodule_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_languagemodule_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_languagemodule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_languagemodule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_languagemodule_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_languagemodule_SyncErrors?: SyncError_Result[] | null;
  msdyusd_languagemodule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyusd_languagemodule extends msdyusd_languagemodule_Base, msdyusd_languagemodule_Relationships {
  msdyusd_GlobalManagerId_bind$uii_hostedapplications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_languagemodule_Create extends msdyusd_languagemodule {
}
interface msdyusd_languagemodule_Update extends msdyusd_languagemodule {
}
interface msdyusd_languagemodule_Select {
  createdby_guid: WebAttribute<msdyusd_languagemodule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_languagemodule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_languagemodule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_languagemodule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_languagemodule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_languagemodule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_languagemodule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_globalmanagerid_guid: WebAttribute<msdyusd_languagemodule_Select, { msdyusd_globalmanagerid_guid: string | null }, { msdyusd_globalmanagerid_formatted?: string }>;
  msdyusd_languagecode: WebAttribute<msdyusd_languagemodule_Select, { msdyusd_languagecode: string | null }, {  }>;
  msdyusd_languagemoduleid: WebAttribute<msdyusd_languagemodule_Select, { msdyusd_languagemoduleid: string | null }, {  }>;
  msdyusd_lcid: WebAttribute<msdyusd_languagemodule_Select, { msdyusd_lcid: string | null }, {  }>;
  msdyusd_location: WebAttribute<msdyusd_languagemodule_Select, { msdyusd_location: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_languagemodule_Select, { msdyusd_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_languagemodule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_languagemodule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_languagemodule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_languagemodule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_languagemodule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_languagemodule_Select, { statecode: msdyusd_languagemodule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_languagemodule_Select, { statuscode: msdyusd_languagemodule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_languagemodule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_languagemodule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_languagemodule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_languagemodule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_globalmanagerid_guid: XQW.Guid;
  msdyusd_languagecode: string;
  msdyusd_languagemoduleid: XQW.Guid;
  msdyusd_lcid: string;
  msdyusd_location: string;
  msdyusd_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_languagemodule_statecode;
  statuscode: msdyusd_languagemodule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_languagemodule_Expand {
  createdby: WebExpand<msdyusd_languagemodule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_languagemodule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_languagemodule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_languagemodule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_GlobalManagerId: WebExpand<msdyusd_languagemodule_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_GlobalManagerId: UII_hostedapplication_Result }>;
  msdyusd_languagemodule_Annotations: WebExpand<msdyusd_languagemodule_Expand, Annotation_Select, Annotation_Filter, { msdyusd_languagemodule_Annotations: Annotation_Result[] }>;
  msdyusd_languagemodule_AsyncOperations: WebExpand<msdyusd_languagemodule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_languagemodule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_languagemodule_BulkDeleteFailures: WebExpand<msdyusd_languagemodule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_languagemodule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_languagemodule_DuplicateBaseRecord: WebExpand<msdyusd_languagemodule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_languagemodule_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_languagemodule_DuplicateMatchingRecord: WebExpand<msdyusd_languagemodule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_languagemodule_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_languagemodule_MailboxTrackingFolders: WebExpand<msdyusd_languagemodule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_languagemodule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_languagemodule_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_languagemodule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_languagemodule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_languagemodule_ProcessSession: WebExpand<msdyusd_languagemodule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_languagemodule_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_languagemodule_SyncErrors: WebExpand<msdyusd_languagemodule_Expand, SyncError_Select, SyncError_Filter, { msdyusd_languagemodule_SyncErrors: SyncError_Result[] }>;
  msdyusd_languagemodule_UserEntityInstanceDatas: WebExpand<msdyusd_languagemodule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_languagemodule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyusd_languagemodule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_languagemodule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_languagemodule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_languagemodule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_languagemodule_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_globalmanagerid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_languagemodule_Result extends msdyusd_languagemodule_Base, msdyusd_languagemodule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_globalmanagerid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_languagemodule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_GlobalManagerId: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_languagemodule_RelatedMany {
  msdyusd_languagemodule_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_languagemodule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_languagemodule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_languagemodule_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_languagemodule_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_languagemodule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_languagemodule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_languagemodule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_languagemodule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_languagemodule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_languagemodules: WebMappingRetrieve<msdyusd_languagemodule_Select,msdyusd_languagemodule_Expand,msdyusd_languagemodule_Filter,msdyusd_languagemodule_Fixed,msdyusd_languagemodule_Result,msdyusd_languagemodule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_languagemodules: WebMappingRelated<msdyusd_languagemodule_RelatedOne,msdyusd_languagemodule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_languagemodules: WebMappingCUDA<msdyusd_languagemodule_Create,msdyusd_languagemodule_Update,msdyusd_languagemodule_Select>;
}
