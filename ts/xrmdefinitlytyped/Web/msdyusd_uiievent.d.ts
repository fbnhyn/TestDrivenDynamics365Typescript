interface msdyusd_uiievent_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_name?: string | null;
  msdyusd_uiieventid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_uiievent_statecode | null;
  statuscode?: msdyusd_uiievent_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_uiievent_Relationships {
  msdyusd_HostedApplicationId?: UII_hostedapplication_Result | null;
  msdyusd_configuration_event?: msdyusd_configuration_Result[] | null;
  msdyusd_uiievent_Annotations?: Annotation_Result[] | null;
  msdyusd_uiievent_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_uiievent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_uiievent_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_uiievent_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_uiievent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_uiievent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_uiievent_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_uiievent_SyncErrors?: SyncError_Result[] | null;
  msdyusd_uiievent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_uiievent_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
}
interface msdyusd_uiievent extends msdyusd_uiievent_Base, msdyusd_uiievent_Relationships {
  msdyusd_HostedApplicationId_bind$uii_hostedapplications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_uiievent_Create extends msdyusd_uiievent {
}
interface msdyusd_uiievent_Update extends msdyusd_uiievent {
}
interface msdyusd_uiievent_Select {
  createdby_guid: WebAttribute<msdyusd_uiievent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_uiievent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_uiievent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_uiievent_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_uiievent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_uiievent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_uiievent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_hostedapplicationid_guid: WebAttribute<msdyusd_uiievent_Select, { msdyusd_hostedapplicationid_guid: string | null }, { msdyusd_hostedapplicationid_formatted?: string }>;
  msdyusd_name: WebAttribute<msdyusd_uiievent_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_uiieventid: WebAttribute<msdyusd_uiievent_Select, { msdyusd_uiieventid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_uiievent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_uiievent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_uiievent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_uiievent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_uiievent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_uiievent_Select, { statecode: msdyusd_uiievent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_uiievent_Select, { statuscode: msdyusd_uiievent_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_uiievent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_uiievent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_uiievent_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_uiievent_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_hostedapplicationid_guid: XQW.Guid;
  msdyusd_name: string;
  msdyusd_uiieventid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_uiievent_statecode;
  statuscode: msdyusd_uiievent_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_uiievent_Expand {
  createdby: WebExpand<msdyusd_uiievent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_uiievent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_uiievent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_uiievent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_HostedApplicationId: WebExpand<msdyusd_uiievent_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_HostedApplicationId: UII_hostedapplication_Result }>;
  msdyusd_configuration_event: WebExpand<msdyusd_uiievent_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_event: msdyusd_configuration_Result[] }>;
  msdyusd_uiievent_Annotations: WebExpand<msdyusd_uiievent_Expand, Annotation_Select, Annotation_Filter, { msdyusd_uiievent_Annotations: Annotation_Result[] }>;
  msdyusd_uiievent_AsyncOperations: WebExpand<msdyusd_uiievent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_uiievent_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_uiievent_BulkDeleteFailures: WebExpand<msdyusd_uiievent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_uiievent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_uiievent_DuplicateBaseRecord: WebExpand<msdyusd_uiievent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_uiievent_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_uiievent_DuplicateMatchingRecord: WebExpand<msdyusd_uiievent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_uiievent_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_uiievent_MailboxTrackingFolders: WebExpand<msdyusd_uiievent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_uiievent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_uiievent_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_uiievent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_uiievent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_uiievent_ProcessSession: WebExpand<msdyusd_uiievent_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_uiievent_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_uiievent_SyncErrors: WebExpand<msdyusd_uiievent_Expand, SyncError_Select, SyncError_Filter, { msdyusd_uiievent_SyncErrors: SyncError_Result[] }>;
  msdyusd_uiievent_UserEntityInstanceDatas: WebExpand<msdyusd_uiievent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_uiievent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_uiievent_agentscriptaction: WebExpand<msdyusd_uiievent_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_uiievent_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
  ownerid: WebExpand<msdyusd_uiievent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_uiievent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_uiievent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_uiievent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_uiievent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_hostedapplicationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_uiievent_Result extends msdyusd_uiievent_Base, msdyusd_uiievent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_hostedapplicationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_uiievent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_HostedApplicationId: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_uiievent_RelatedMany {
  msdyusd_configuration_event: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_uiievent_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_uiievent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_uiievent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_uiievent_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_uiievent_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_uiievent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_uiievent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_uiievent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_uiievent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_uiievent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_uiievent_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_uiievents: WebMappingRetrieve<msdyusd_uiievent_Select,msdyusd_uiievent_Expand,msdyusd_uiievent_Filter,msdyusd_uiievent_Fixed,msdyusd_uiievent_Result,msdyusd_uiievent_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_uiievents: WebMappingRelated<msdyusd_uiievent_RelatedOne,msdyusd_uiievent_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_uiievents: WebMappingCUDA<msdyusd_uiievent_Create,msdyusd_uiievent_Update,msdyusd_uiievent_Select>;
}
