interface msdyusd_scriptlet_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_name?: string | null;
  msdyusd_scriptletid?: string | null;
  msdyusd_scripttext?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_scriptlet_statecode | null;
  statuscode?: msdyusd_scriptlet_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_scriptlet_Relationships {
  msdyusd_configuration_scriptlet?: msdyusd_configuration_Result[] | null;
  msdyusd_scriptlet_Annotations?: Annotation_Result[] | null;
  msdyusd_scriptlet_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_scriptlet_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_scriptlet_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_scriptlet_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_scriptlet_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_scriptlet_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_scriptlet_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_scriptlet_SyncErrors?: SyncError_Result[] | null;
  msdyusd_scriptlet_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyusd_scriptlet extends msdyusd_scriptlet_Base, msdyusd_scriptlet_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_scriptlet_Create extends msdyusd_scriptlet {
}
interface msdyusd_scriptlet_Update extends msdyusd_scriptlet {
}
interface msdyusd_scriptlet_Select {
  createdby_guid: WebAttribute<msdyusd_scriptlet_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_scriptlet_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_scriptlet_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_scriptlet_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_scriptlet_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_scriptlet_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_scriptlet_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_name: WebAttribute<msdyusd_scriptlet_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_scriptletid: WebAttribute<msdyusd_scriptlet_Select, { msdyusd_scriptletid: string | null }, {  }>;
  msdyusd_scripttext: WebAttribute<msdyusd_scriptlet_Select, { msdyusd_scripttext: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_scriptlet_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_scriptlet_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_scriptlet_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_scriptlet_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_scriptlet_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_scriptlet_Select, { statecode: msdyusd_scriptlet_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_scriptlet_Select, { statuscode: msdyusd_scriptlet_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_scriptlet_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_scriptlet_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_scriptlet_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_scriptlet_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_name: string;
  msdyusd_scriptletid: XQW.Guid;
  msdyusd_scripttext: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_scriptlet_statecode;
  statuscode: msdyusd_scriptlet_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_scriptlet_Expand {
  createdby: WebExpand<msdyusd_scriptlet_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_scriptlet_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_scriptlet_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_scriptlet_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_configuration_scriptlet: WebExpand<msdyusd_scriptlet_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_scriptlet: msdyusd_configuration_Result[] }>;
  msdyusd_scriptlet_Annotations: WebExpand<msdyusd_scriptlet_Expand, Annotation_Select, Annotation_Filter, { msdyusd_scriptlet_Annotations: Annotation_Result[] }>;
  msdyusd_scriptlet_AsyncOperations: WebExpand<msdyusd_scriptlet_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_scriptlet_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_scriptlet_BulkDeleteFailures: WebExpand<msdyusd_scriptlet_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_scriptlet_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_scriptlet_DuplicateBaseRecord: WebExpand<msdyusd_scriptlet_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_scriptlet_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_scriptlet_DuplicateMatchingRecord: WebExpand<msdyusd_scriptlet_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_scriptlet_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_scriptlet_MailboxTrackingFolders: WebExpand<msdyusd_scriptlet_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_scriptlet_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_scriptlet_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_scriptlet_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_scriptlet_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_scriptlet_ProcessSession: WebExpand<msdyusd_scriptlet_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_scriptlet_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_scriptlet_SyncErrors: WebExpand<msdyusd_scriptlet_Expand, SyncError_Select, SyncError_Filter, { msdyusd_scriptlet_SyncErrors: SyncError_Result[] }>;
  msdyusd_scriptlet_UserEntityInstanceDatas: WebExpand<msdyusd_scriptlet_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_scriptlet_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyusd_scriptlet_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_scriptlet_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_scriptlet_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_scriptlet_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_scriptlet_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_scriptlet_Result extends msdyusd_scriptlet_Base, msdyusd_scriptlet_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_scriptlet_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_scriptlet_RelatedMany {
  msdyusd_configuration_scriptlet: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_scriptlet_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_scriptlet_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_scriptlet_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_scriptlet_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_scriptlet_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_scriptlet_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_scriptlet_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_scriptlet_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_scriptlet_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_scriptlet_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_scriptlets: WebMappingRetrieve<msdyusd_scriptlet_Select,msdyusd_scriptlet_Expand,msdyusd_scriptlet_Filter,msdyusd_scriptlet_Fixed,msdyusd_scriptlet_Result,msdyusd_scriptlet_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_scriptlets: WebMappingRelated<msdyusd_scriptlet_RelatedOne,msdyusd_scriptlet_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_scriptlets: WebMappingCUDA<msdyusd_scriptlet_Create,msdyusd_scriptlet_Update,msdyusd_scriptlet_Select>;
}
