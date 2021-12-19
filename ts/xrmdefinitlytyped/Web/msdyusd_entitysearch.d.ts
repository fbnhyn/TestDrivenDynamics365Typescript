interface msdyusd_entitysearch_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_entitysearchid?: string | null;
  msdyusd_fetchxml?: string | null;
  msdyusd_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_entitysearch_statecode | null;
  statuscode?: msdyusd_entitysearch_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_entitysearch_Relationships {
  msdyusd_Entity?: msdyusd_entityassignment_Result | null;
  msdyusd_configuration_entitysearch?: msdyusd_configuration_Result[] | null;
  msdyusd_entitysearch_Annotations?: Annotation_Result[] | null;
  msdyusd_entitysearch_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_entitysearch_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_entitysearch_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_entitysearch_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_entitysearch_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_entitysearch_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_entitysearch_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_entitysearch_SyncErrors?: SyncError_Result[] | null;
  msdyusd_entitysearch_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_entitysearch_windowroute_EntitySearch?: msdyusd_windowroute_Result[] | null;
  msdyusd_entitysearch_windowroute_FromSearch?: msdyusd_windowroute_Result[] | null;
}
interface msdyusd_entitysearch extends msdyusd_entitysearch_Base, msdyusd_entitysearch_Relationships {
  msdyusd_Entity_bind$msdyusd_entityassignments?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_entitysearch_Create extends msdyusd_entitysearch {
}
interface msdyusd_entitysearch_Update extends msdyusd_entitysearch {
}
interface msdyusd_entitysearch_Select {
  createdby_guid: WebAttribute<msdyusd_entitysearch_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_entitysearch_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_entitysearch_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_entitysearch_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_entitysearch_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_entitysearch_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_entitysearch_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_entity_guid: WebAttribute<msdyusd_entitysearch_Select, { msdyusd_entity_guid: string | null }, { msdyusd_entity_formatted?: string }>;
  msdyusd_entitysearchid: WebAttribute<msdyusd_entitysearch_Select, { msdyusd_entitysearchid: string | null }, {  }>;
  msdyusd_fetchxml: WebAttribute<msdyusd_entitysearch_Select, { msdyusd_fetchxml: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_entitysearch_Select, { msdyusd_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_entitysearch_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_entitysearch_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_entitysearch_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_entitysearch_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_entitysearch_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_entitysearch_Select, { statecode: msdyusd_entitysearch_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_entitysearch_Select, { statuscode: msdyusd_entitysearch_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_entitysearch_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_entitysearch_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_entitysearch_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_entitysearch_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_entity_guid: XQW.Guid;
  msdyusd_entitysearchid: XQW.Guid;
  msdyusd_fetchxml: string;
  msdyusd_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_entitysearch_statecode;
  statuscode: msdyusd_entitysearch_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_entitysearch_Expand {
  createdby: WebExpand<msdyusd_entitysearch_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_entitysearch_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_entitysearch_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_entitysearch_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_Entity: WebExpand<msdyusd_entitysearch_Expand, msdyusd_entityassignment_Select, msdyusd_entityassignment_Filter, { msdyusd_Entity: msdyusd_entityassignment_Result }>;
  msdyusd_configuration_entitysearch: WebExpand<msdyusd_entitysearch_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_entitysearch: msdyusd_configuration_Result[] }>;
  msdyusd_entitysearch_Annotations: WebExpand<msdyusd_entitysearch_Expand, Annotation_Select, Annotation_Filter, { msdyusd_entitysearch_Annotations: Annotation_Result[] }>;
  msdyusd_entitysearch_AsyncOperations: WebExpand<msdyusd_entitysearch_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_entitysearch_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_entitysearch_BulkDeleteFailures: WebExpand<msdyusd_entitysearch_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_entitysearch_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_entitysearch_DuplicateBaseRecord: WebExpand<msdyusd_entitysearch_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_entitysearch_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_entitysearch_DuplicateMatchingRecord: WebExpand<msdyusd_entitysearch_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_entitysearch_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_entitysearch_MailboxTrackingFolders: WebExpand<msdyusd_entitysearch_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_entitysearch_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_entitysearch_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_entitysearch_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_entitysearch_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_entitysearch_ProcessSession: WebExpand<msdyusd_entitysearch_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_entitysearch_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_entitysearch_SyncErrors: WebExpand<msdyusd_entitysearch_Expand, SyncError_Select, SyncError_Filter, { msdyusd_entitysearch_SyncErrors: SyncError_Result[] }>;
  msdyusd_entitysearch_UserEntityInstanceDatas: WebExpand<msdyusd_entitysearch_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_entitysearch_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_entitysearch_windowroute_EntitySearch: WebExpand<msdyusd_entitysearch_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_entitysearch_windowroute_EntitySearch: msdyusd_windowroute_Result[] }>;
  msdyusd_entitysearch_windowroute_FromSearch: WebExpand<msdyusd_entitysearch_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_entitysearch_windowroute_FromSearch: msdyusd_windowroute_Result[] }>;
  ownerid: WebExpand<msdyusd_entitysearch_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_entitysearch_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_entitysearch_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_entitysearch_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_entitysearch_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_entity_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_entitysearch_Result extends msdyusd_entitysearch_Base, msdyusd_entitysearch_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_entity_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_entitysearch_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_Entity: WebMappingRetrieve<msdyusd_entityassignment_Select,msdyusd_entityassignment_Expand,msdyusd_entityassignment_Filter,msdyusd_entityassignment_Fixed,msdyusd_entityassignment_Result,msdyusd_entityassignment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_entitysearch_RelatedMany {
  msdyusd_configuration_entitysearch: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_entitysearch_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_entitysearch_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_entitysearch_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_entitysearch_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_entitysearch_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_entitysearch_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_entitysearch_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_entitysearch_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_entitysearch_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_entitysearch_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_entitysearch_windowroute_EntitySearch: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
  msdyusd_entitysearch_windowroute_FromSearch: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_entitysearchs: WebMappingRetrieve<msdyusd_entitysearch_Select,msdyusd_entitysearch_Expand,msdyusd_entitysearch_Filter,msdyusd_entitysearch_Fixed,msdyusd_entitysearch_Result,msdyusd_entitysearch_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_entitysearchs: WebMappingRelated<msdyusd_entitysearch_RelatedOne,msdyusd_entitysearch_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_entitysearchs: WebMappingCUDA<msdyusd_entitysearch_Create,msdyusd_entitysearch_Update,msdyusd_entitysearch_Select>;
}
