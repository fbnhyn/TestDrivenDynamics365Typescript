interface organizationdatasyncsubscriptionentity_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  inheritsfromotc?: number | null;
  isactivity?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  objecttypecode?: number | null;
  organizationdatasyncsubscriptionentityid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: organizationdatasyncsubscriptionentity_statecode | null;
  statuscode?: organizationdatasyncsubscriptionentity_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface organizationdatasyncsubscriptionentity_Relationships {
  organizationdatasyncsubscriptionId?: organizationdatasyncsubscription_Result | null;
  organizationdatasyncsubscriptionentity_AsyncOperations?: AsyncOperation_Result[] | null;
  organizationdatasyncsubscriptionentity_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  organizationdatasyncsubscriptionentity_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  organizationdatasyncsubscriptionentity_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  organizationdatasyncsubscriptionentity_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  organizationdatasyncsubscriptionentity_ProcessSession?: ProcessSession_Result[] | null;
  organizationdatasyncsubscriptionentity_SyncErrors?: SyncError_Result[] | null;
  organizationdatasyncsubscriptionentity_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface organizationdatasyncsubscriptionentity extends organizationdatasyncsubscriptionentity_Base, organizationdatasyncsubscriptionentity_Relationships {
  organizationdatasyncsubscriptionId_bind$organizationdatasyncsubscriptions?: string | null;
}
interface organizationdatasyncsubscriptionentity_Create extends organizationdatasyncsubscriptionentity {
}
interface organizationdatasyncsubscriptionentity_Update extends organizationdatasyncsubscriptionentity {
}
interface organizationdatasyncsubscriptionentity_Select {
  createdby_guid: WebAttribute<organizationdatasyncsubscriptionentity_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<organizationdatasyncsubscriptionentity_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<organizationdatasyncsubscriptionentity_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<organizationdatasyncsubscriptionentity_Select, { importsequencenumber: number | null }, {  }>;
  inheritsfromotc: WebAttribute<organizationdatasyncsubscriptionentity_Select, { inheritsfromotc: number | null }, {  }>;
  isactivity: WebAttribute<organizationdatasyncsubscriptionentity_Select, { isactivity: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<organizationdatasyncsubscriptionentity_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<organizationdatasyncsubscriptionentity_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<organizationdatasyncsubscriptionentity_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<organizationdatasyncsubscriptionentity_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<organizationdatasyncsubscriptionentity_Select, { objecttypecode: number | null }, {  }>;
  organizationdatasyncsubscriptioid_guid: WebAttribute<organizationdatasyncsubscriptionentity_Select, { organizationdatasyncsubscriptioid_guid: string | null }, { organizationdatasyncsubscriptioid_formatted?: string }>;
  organizationdatasyncsubscriptionentityid: WebAttribute<organizationdatasyncsubscriptionentity_Select, { organizationdatasyncsubscriptionentityid: string | null }, {  }>;
  organizationid_guid: WebAttribute<organizationdatasyncsubscriptionentity_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<organizationdatasyncsubscriptionentity_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<organizationdatasyncsubscriptionentity_Select, { statecode: organizationdatasyncsubscriptionentity_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<organizationdatasyncsubscriptionentity_Select, { statuscode: organizationdatasyncsubscriptionentity_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<organizationdatasyncsubscriptionentity_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<organizationdatasyncsubscriptionentity_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<organizationdatasyncsubscriptionentity_Select, { versionnumber: number | null }, {  }>;
}
interface organizationdatasyncsubscriptionentity_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  inheritsfromotc: number;
  isactivity: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  objecttypecode: number;
  organizationdatasyncsubscriptioid_guid: XQW.Guid;
  organizationdatasyncsubscriptionentityid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: organizationdatasyncsubscriptionentity_statecode;
  statuscode: organizationdatasyncsubscriptionentity_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface organizationdatasyncsubscriptionentity_Expand {
  createdby: WebExpand<organizationdatasyncsubscriptionentity_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<organizationdatasyncsubscriptionentity_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<organizationdatasyncsubscriptionentity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<organizationdatasyncsubscriptionentity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationdatasyncsubscriptionId: WebExpand<organizationdatasyncsubscriptionentity_Expand, organizationdatasyncsubscription_Select, organizationdatasyncsubscription_Filter, { organizationdatasyncsubscriptionId: organizationdatasyncsubscription_Result }>;
  organizationdatasyncsubscriptionentity_AsyncOperations: WebExpand<organizationdatasyncsubscriptionentity_Expand, AsyncOperation_Select, AsyncOperation_Filter, { organizationdatasyncsubscriptionentity_AsyncOperations: AsyncOperation_Result[] }>;
  organizationdatasyncsubscriptionentity_BulkDeleteFailures: WebExpand<organizationdatasyncsubscriptionentity_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { organizationdatasyncsubscriptionentity_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  organizationdatasyncsubscriptionentity_DuplicateBaseRecord: WebExpand<organizationdatasyncsubscriptionentity_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { organizationdatasyncsubscriptionentity_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  organizationdatasyncsubscriptionentity_DuplicateMatchingRecord: WebExpand<organizationdatasyncsubscriptionentity_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { organizationdatasyncsubscriptionentity_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  organizationdatasyncsubscriptionentity_MailboxTrackingFolders: WebExpand<organizationdatasyncsubscriptionentity_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { organizationdatasyncsubscriptionentity_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses: WebExpand<organizationdatasyncsubscriptionentity_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  organizationdatasyncsubscriptionentity_ProcessSession: WebExpand<organizationdatasyncsubscriptionentity_Expand, ProcessSession_Select, ProcessSession_Filter, { organizationdatasyncsubscriptionentity_ProcessSession: ProcessSession_Result[] }>;
  organizationdatasyncsubscriptionentity_SyncErrors: WebExpand<organizationdatasyncsubscriptionentity_Expand, SyncError_Select, SyncError_Filter, { organizationdatasyncsubscriptionentity_SyncErrors: SyncError_Result[] }>;
  organizationdatasyncsubscriptionentity_UserEntityInstanceDatas: WebExpand<organizationdatasyncsubscriptionentity_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { organizationdatasyncsubscriptionentity_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<organizationdatasyncsubscriptionentity_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface organizationdatasyncsubscriptionentity_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationdatasyncsubscriptioid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface organizationdatasyncsubscriptionentity_Result extends organizationdatasyncsubscriptionentity_Base, organizationdatasyncsubscriptionentity_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationdatasyncsubscriptioid_guid: string | null;
  organizationid_guid: string | null;
}
interface organizationdatasyncsubscriptionentity_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationdatasyncsubscriptionId: WebMappingRetrieve<organizationdatasyncsubscription_Select,organizationdatasyncsubscription_Expand,organizationdatasyncsubscription_Filter,organizationdatasyncsubscription_Fixed,organizationdatasyncsubscription_Result,organizationdatasyncsubscription_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface organizationdatasyncsubscriptionentity_RelatedMany {
  organizationdatasyncsubscriptionentity_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  organizationdatasyncsubscriptionentity_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  organizationdatasyncsubscriptionentity_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  organizationdatasyncsubscriptionentity_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  organizationdatasyncsubscriptionentity_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  organizationdatasyncsubscriptionentity_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  organizationdatasyncsubscriptionentity_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  organizationdatasyncsubscriptionentity_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  organizationdatasyncsubscriptionentities: WebMappingRetrieve<organizationdatasyncsubscriptionentity_Select,organizationdatasyncsubscriptionentity_Expand,organizationdatasyncsubscriptionentity_Filter,organizationdatasyncsubscriptionentity_Fixed,organizationdatasyncsubscriptionentity_Result,organizationdatasyncsubscriptionentity_FormattedResult>;
}
interface WebEntitiesRelated {
  organizationdatasyncsubscriptionentities: WebMappingRelated<organizationdatasyncsubscriptionentity_RelatedOne,organizationdatasyncsubscriptionentity_RelatedMany>;
}
interface WebEntitiesCUDA {
  organizationdatasyncsubscriptionentities: WebMappingCUDA<organizationdatasyncsubscriptionentity_Create,organizationdatasyncsubscriptionentity_Update,organizationdatasyncsubscriptionentity_Select>;
}
