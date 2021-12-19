interface msdyn_dimensionfieldname_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_dimensionfieldnameid?: string | null;
  msdyn_entitylogicalname?: string | null;
  msdyn_fieldname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_dimensionfieldname_statecode | null;
  statuscode?: msdyn_dimensionfieldname_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_dimensionfieldname_Relationships {
  msdyn_DimensionId?: msdyn_dimension_Result | null;
  msdyn_dimensionfieldname_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_dimensionfieldname_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_dimensionfieldname_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_dimensionfieldname_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_dimensionfieldname_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_dimensionfieldname_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_dimensionfieldname_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_dimensionfieldname_SyncErrors?: SyncError_Result[] | null;
  msdyn_dimensionfieldname_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_dimensionfieldname extends msdyn_dimensionfieldname_Base, msdyn_dimensionfieldname_Relationships {
}
interface msdyn_dimensionfieldname_Create extends msdyn_dimensionfieldname {
  msdyn_DimensionId_bind$msdyn_dimensions?: string | null;
}
interface msdyn_dimensionfieldname_Update extends msdyn_dimensionfieldname {
}
interface msdyn_dimensionfieldname_Select {
  createdby_guid: WebAttribute<msdyn_dimensionfieldname_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_dimensionfieldname_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_dimensionfieldname_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_dimensionfieldname_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_dimensionfieldname_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_dimensionfieldname_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_dimensionfieldname_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_dimensionfieldname_Select, { msdyn_description: string | null }, {  }>;
  msdyn_dimensionfieldnameid: WebAttribute<msdyn_dimensionfieldname_Select, { msdyn_dimensionfieldnameid: string | null }, {  }>;
  msdyn_dimensionid_guid: WebAttribute<msdyn_dimensionfieldname_Select, { msdyn_dimensionid_guid: string | null }, { msdyn_dimensionid_formatted?: string }>;
  msdyn_entitylogicalname: WebAttribute<msdyn_dimensionfieldname_Select, { msdyn_entitylogicalname: string | null }, {  }>;
  msdyn_fieldname: WebAttribute<msdyn_dimensionfieldname_Select, { msdyn_fieldname: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_dimensionfieldname_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_dimensionfieldname_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_dimensionfieldname_Select, { statecode: msdyn_dimensionfieldname_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_dimensionfieldname_Select, { statuscode: msdyn_dimensionfieldname_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_dimensionfieldname_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_dimensionfieldname_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_dimensionfieldname_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_dimensionfieldname_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_dimensionfieldnameid: XQW.Guid;
  msdyn_dimensionid_guid: XQW.Guid;
  msdyn_entitylogicalname: string;
  msdyn_fieldname: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_dimensionfieldname_statecode;
  statuscode: msdyn_dimensionfieldname_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_dimensionfieldname_Expand {
  createdby: WebExpand<msdyn_dimensionfieldname_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_dimensionfieldname_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_dimensionfieldname_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_dimensionfieldname_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_DimensionId: WebExpand<msdyn_dimensionfieldname_Expand, msdyn_dimension_Select, msdyn_dimension_Filter, { msdyn_DimensionId: msdyn_dimension_Result }>;
  msdyn_dimensionfieldname_AsyncOperations: WebExpand<msdyn_dimensionfieldname_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_dimensionfieldname_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_dimensionfieldname_BulkDeleteFailures: WebExpand<msdyn_dimensionfieldname_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_dimensionfieldname_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_dimensionfieldname_DuplicateBaseRecord: WebExpand<msdyn_dimensionfieldname_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_dimensionfieldname_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_dimensionfieldname_DuplicateMatchingRecord: WebExpand<msdyn_dimensionfieldname_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_dimensionfieldname_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_dimensionfieldname_MailboxTrackingFolders: WebExpand<msdyn_dimensionfieldname_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_dimensionfieldname_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_dimensionfieldname_PrincipalObjectAttributeAccesses: WebExpand<msdyn_dimensionfieldname_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_dimensionfieldname_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_dimensionfieldname_ProcessSession: WebExpand<msdyn_dimensionfieldname_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_dimensionfieldname_ProcessSession: ProcessSession_Result[] }>;
  msdyn_dimensionfieldname_SyncErrors: WebExpand<msdyn_dimensionfieldname_Expand, SyncError_Select, SyncError_Filter, { msdyn_dimensionfieldname_SyncErrors: SyncError_Result[] }>;
  msdyn_dimensionfieldname_UserEntityInstanceDatas: WebExpand<msdyn_dimensionfieldname_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_dimensionfieldname_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_dimensionfieldname_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_dimensionfieldname_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_dimensionid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_dimensionfieldname_Result extends msdyn_dimensionfieldname_Base, msdyn_dimensionfieldname_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_dimensionid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_dimensionfieldname_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_DimensionId: WebMappingRetrieve<msdyn_dimension_Select,msdyn_dimension_Expand,msdyn_dimension_Filter,msdyn_dimension_Fixed,msdyn_dimension_Result,msdyn_dimension_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_dimensionfieldname_RelatedMany {
  msdyn_dimensionfieldname_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_dimensionfieldname_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_dimensionfieldname_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_dimensionfieldname_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_dimensionfieldname_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_dimensionfieldname_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_dimensionfieldname_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_dimensionfieldname_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_dimensionfieldname_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_dimensionfieldnames: WebMappingRetrieve<msdyn_dimensionfieldname_Select,msdyn_dimensionfieldname_Expand,msdyn_dimensionfieldname_Filter,msdyn_dimensionfieldname_Fixed,msdyn_dimensionfieldname_Result,msdyn_dimensionfieldname_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_dimensionfieldnames: WebMappingRelated<msdyn_dimensionfieldname_RelatedOne,msdyn_dimensionfieldname_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_dimensionfieldnames: WebMappingCUDA<msdyn_dimensionfieldname_Create,msdyn_dimensionfieldname_Update,msdyn_dimensionfieldname_Select>;
}
