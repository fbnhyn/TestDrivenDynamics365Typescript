interface msdyn_entityrankingrule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_enabled?: boolean | null;
  msdyn_entityname?: string | null;
  msdyn_entityrankingruleid?: string | null;
  msdyn_fetchxmlrule?: string | null;
  msdyn_name?: string | null;
  msdyn_objecttypecode?: number | null;
  msdyn_oobrule?: boolean | null;
  msdyn_overriddenrank?: number | null;
  msdyn_rulepriority?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_entityrankingrule_statecode | null;
  statuscode?: msdyn_entityrankingrule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_entityrankingrule_Relationships {
  msdyn_entityrankingrule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_entityrankingrule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_entityrankingrule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_entityrankingrule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_entityrankingrule_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_entityrankingrule_SyncErrors?: SyncError_Result[] | null;
  msdyn_entityrankingrule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_entityrankingrule extends msdyn_entityrankingrule_Base, msdyn_entityrankingrule_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_entityrankingrule_Create extends msdyn_entityrankingrule {
}
interface msdyn_entityrankingrule_Update extends msdyn_entityrankingrule {
}
interface msdyn_entityrankingrule_Select {
  createdby_guid: WebAttribute<msdyn_entityrankingrule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_entityrankingrule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_entityrankingrule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_entityrankingrule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_entityrankingrule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_entityrankingrule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_entityrankingrule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_enabled: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_enabled: boolean | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_entityrankingruleid: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_entityrankingruleid: string | null }, {  }>;
  msdyn_fetchxmlrule: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_fetchxmlrule: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_name: string | null }, {  }>;
  msdyn_objecttypecode: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_objecttypecode: number | null }, {  }>;
  msdyn_oobrule: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_oobrule: boolean | null }, {  }>;
  msdyn_overriddenrank: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_overriddenrank: number | null }, {  }>;
  msdyn_rulepriority: WebAttribute<msdyn_entityrankingrule_Select, { msdyn_rulepriority: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_entityrankingrule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_entityrankingrule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_entityrankingrule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_entityrankingrule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_entityrankingrule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_entityrankingrule_Select, { statecode: msdyn_entityrankingrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_entityrankingrule_Select, { statuscode: msdyn_entityrankingrule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_entityrankingrule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_entityrankingrule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_entityrankingrule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_entityrankingrule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_enabled: boolean;
  msdyn_entityname: string;
  msdyn_entityrankingruleid: XQW.Guid;
  msdyn_fetchxmlrule: string;
  msdyn_name: string;
  msdyn_objecttypecode: number;
  msdyn_oobrule: boolean;
  msdyn_overriddenrank: number;
  msdyn_rulepriority: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_entityrankingrule_statecode;
  statuscode: msdyn_entityrankingrule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_entityrankingrule_Expand {
  createdby: WebExpand<msdyn_entityrankingrule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_entityrankingrule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_entityrankingrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_entityrankingrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_entityrankingrule_AsyncOperations: WebExpand<msdyn_entityrankingrule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_entityrankingrule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_entityrankingrule_BulkDeleteFailures: WebExpand<msdyn_entityrankingrule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_entityrankingrule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_entityrankingrule_MailboxTrackingFolders: WebExpand<msdyn_entityrankingrule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_entityrankingrule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_entityrankingrule_PrincipalObjectAttributeAccesses: WebExpand<msdyn_entityrankingrule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_entityrankingrule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_entityrankingrule_ProcessSession: WebExpand<msdyn_entityrankingrule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_entityrankingrule_ProcessSession: ProcessSession_Result[] }>;
  msdyn_entityrankingrule_SyncErrors: WebExpand<msdyn_entityrankingrule_Expand, SyncError_Select, SyncError_Filter, { msdyn_entityrankingrule_SyncErrors: SyncError_Result[] }>;
  msdyn_entityrankingrule_UserEntityInstanceDatas: WebExpand<msdyn_entityrankingrule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_entityrankingrule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_entityrankingrule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_entityrankingrule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_entityrankingrule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_entityrankingrule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_entityrankingrule_FormattedResult {
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
interface msdyn_entityrankingrule_Result extends msdyn_entityrankingrule_Base, msdyn_entityrankingrule_Relationships {
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
interface msdyn_entityrankingrule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_entityrankingrule_RelatedMany {
  msdyn_entityrankingrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_entityrankingrule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_entityrankingrule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_entityrankingrule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_entityrankingrule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_entityrankingrule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_entityrankingrule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_entityrankingrules: WebMappingRetrieve<msdyn_entityrankingrule_Select,msdyn_entityrankingrule_Expand,msdyn_entityrankingrule_Filter,msdyn_entityrankingrule_Fixed,msdyn_entityrankingrule_Result,msdyn_entityrankingrule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_entityrankingrules: WebMappingRelated<msdyn_entityrankingrule_RelatedOne,msdyn_entityrankingrule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_entityrankingrules: WebMappingCUDA<msdyn_entityrankingrule_Create,msdyn_entityrankingrule_Update,msdyn_entityrankingrule_Select>;
}
