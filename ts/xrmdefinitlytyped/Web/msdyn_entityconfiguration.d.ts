interface msdyn_entityconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_copygeodatafromurs?: boolean | null;
  msdyn_datefilter1fieldname?: string | null;
  msdyn_datefilter1lastxday?: number | null;
  msdyn_datefilter1nextxday?: number | null;
  msdyn_datefilter2fieldname?: string | null;
  msdyn_datefilter2lastxday?: number | null;
  msdyn_datefilter2nextxday?: number | null;
  msdyn_enabledas?: msdyn_entityconfiguration_msdyn_enabledas | null;
  msdyn_enabletriggerfilters?: boolean | null;
  msdyn_entity?: string | null;
  msdyn_entityconfigurationid?: string | null;
  msdyn_entityprimarykey?: string | null;
  msdyn_latitudefieldname?: string | null;
  msdyn_longitudefieldname?: string | null;
  msdyn_name?: string | null;
  msdyn_radius?: number | null;
  msdyn_relationshipfieldname?: string | null;
  msdyn_timestampfieldname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_entityconfiguration_statecode | null;
  statuscode?: msdyn_entityconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_entityconfiguration_Relationships {
  msdyn_entityconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_entityconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_entityconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_entityconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_entityconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_entityconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_entityconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_entityconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_entityconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_entityconfiguration extends msdyn_entityconfiguration_Base, msdyn_entityconfiguration_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_entityconfiguration_Create extends msdyn_entityconfiguration {
}
interface msdyn_entityconfiguration_Update extends msdyn_entityconfiguration {
}
interface msdyn_entityconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_entityconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_entityconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_entityconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_entityconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_entityconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_entityconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_entityconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_copygeodatafromurs: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_copygeodatafromurs: boolean | null }, {  }>;
  msdyn_datefilter1fieldname: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_datefilter1fieldname: string | null }, {  }>;
  msdyn_datefilter1lastxday: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_datefilter1lastxday: number | null }, {  }>;
  msdyn_datefilter1nextxday: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_datefilter1nextxday: number | null }, {  }>;
  msdyn_datefilter2fieldname: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_datefilter2fieldname: string | null }, {  }>;
  msdyn_datefilter2lastxday: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_datefilter2lastxday: number | null }, {  }>;
  msdyn_datefilter2nextxday: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_datefilter2nextxday: number | null }, {  }>;
  msdyn_enabledas: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_enabledas: msdyn_entityconfiguration_msdyn_enabledas | null }, { msdyn_enabledas_formatted?: string }>;
  msdyn_enabletriggerfilters: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_enabletriggerfilters: boolean | null }, {  }>;
  msdyn_entity: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_entity: string | null }, {  }>;
  msdyn_entityconfigurationid: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_entityconfigurationid: string | null }, {  }>;
  msdyn_entityprimarykey: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_entityprimarykey: string | null }, {  }>;
  msdyn_latitudefieldname: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_latitudefieldname: string | null }, {  }>;
  msdyn_longitudefieldname: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_longitudefieldname: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_radius: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_radius: number | null }, {  }>;
  msdyn_relationshipfieldname: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_relationshipfieldname: string | null }, {  }>;
  msdyn_timestampfieldname: WebAttribute<msdyn_entityconfiguration_Select, { msdyn_timestampfieldname: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_entityconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_entityconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_entityconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_entityconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_entityconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_entityconfiguration_Select, { statecode: msdyn_entityconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_entityconfiguration_Select, { statuscode: msdyn_entityconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_entityconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_entityconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_entityconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_entityconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_copygeodatafromurs: boolean;
  msdyn_datefilter1fieldname: string;
  msdyn_datefilter1lastxday: number;
  msdyn_datefilter1nextxday: number;
  msdyn_datefilter2fieldname: string;
  msdyn_datefilter2lastxday: number;
  msdyn_datefilter2nextxday: number;
  msdyn_enabledas: msdyn_entityconfiguration_msdyn_enabledas;
  msdyn_enabletriggerfilters: boolean;
  msdyn_entity: string;
  msdyn_entityconfigurationid: XQW.Guid;
  msdyn_entityprimarykey: string;
  msdyn_latitudefieldname: string;
  msdyn_longitudefieldname: string;
  msdyn_name: string;
  msdyn_radius: number;
  msdyn_relationshipfieldname: string;
  msdyn_timestampfieldname: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_entityconfiguration_statecode;
  statuscode: msdyn_entityconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_entityconfiguration_Expand {
  createdby: WebExpand<msdyn_entityconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_entityconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_entityconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_entityconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_entityconfiguration_AsyncOperations: WebExpand<msdyn_entityconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_entityconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_entityconfiguration_BulkDeleteFailures: WebExpand<msdyn_entityconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_entityconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_entityconfiguration_DuplicateBaseRecord: WebExpand<msdyn_entityconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_entityconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_entityconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_entityconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_entityconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_entityconfiguration_MailboxTrackingFolders: WebExpand<msdyn_entityconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_entityconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_entityconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_entityconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_entityconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_entityconfiguration_ProcessSession: WebExpand<msdyn_entityconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_entityconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_entityconfiguration_SyncErrors: WebExpand<msdyn_entityconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_entityconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_entityconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_entityconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_entityconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_entityconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_entityconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_entityconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_entityconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_entityconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_enabledas_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_entityconfiguration_Result extends msdyn_entityconfiguration_Base, msdyn_entityconfiguration_Relationships {
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
interface msdyn_entityconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_entityconfiguration_RelatedMany {
  msdyn_entityconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_entityconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_entityconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_entityconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_entityconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_entityconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_entityconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_entityconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_entityconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_entityconfigurations: WebMappingRetrieve<msdyn_entityconfiguration_Select,msdyn_entityconfiguration_Expand,msdyn_entityconfiguration_Filter,msdyn_entityconfiguration_Fixed,msdyn_entityconfiguration_Result,msdyn_entityconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_entityconfigurations: WebMappingRelated<msdyn_entityconfiguration_RelatedOne,msdyn_entityconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_entityconfigurations: WebMappingCUDA<msdyn_entityconfiguration_Create,msdyn_entityconfiguration_Update,msdyn_entityconfiguration_Select>;
}
