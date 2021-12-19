interface package_Base extends WebEntity {
  appid?: string | null;
  applicationname?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  installedon?: Date | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  packageid?: string | null;
  packageinstanceid?: string | null;
  packageinstanceoperationid?: string | null;
  packageuniquename?: string | null;
  packageversion?: string | null;
  publisherid?: string | null;
  publishername?: string | null;
  statecode?: package_statecode | null;
  statuscode?: package_statuscode | null;
  timezoneruleversionnumber?: number | null;
  tpspackageid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface package_Relationships {
  package_AsyncOperations?: AsyncOperation_Result[] | null;
  package_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  package_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  package_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  package_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  package_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  package_ProcessSession?: ProcessSession_Result[] | null;
  package_SyncErrors?: SyncError_Result[] | null;
  package_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  package_solution?: Solution_Result[] | null;
}
interface package extends package_Base, package_Relationships {
}
interface package_Create extends package {
}
interface package_Update extends package {
}
interface package_Select {
  appid: WebAttribute<package_Select, { appid: string | null }, {  }>;
  applicationname: WebAttribute<package_Select, { applicationname: string | null }, {  }>;
  createdby_guid: WebAttribute<package_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<package_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<package_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<package_Select, { importsequencenumber: number | null }, {  }>;
  installedon: WebAttribute<package_Select, { installedon: Date | null }, { installedon_formatted?: string }>;
  modifiedby_guid: WebAttribute<package_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<package_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<package_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<package_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<package_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  packageid: WebAttribute<package_Select, { packageid: string | null }, {  }>;
  packageinstanceid: WebAttribute<package_Select, { packageinstanceid: string | null }, {  }>;
  packageinstanceoperationid: WebAttribute<package_Select, { packageinstanceoperationid: string | null }, {  }>;
  packageuniquename: WebAttribute<package_Select, { packageuniquename: string | null }, {  }>;
  packageversion: WebAttribute<package_Select, { packageversion: string | null }, {  }>;
  publisherid: WebAttribute<package_Select, { publisherid: string | null }, {  }>;
  publishername: WebAttribute<package_Select, { publishername: string | null }, {  }>;
  statecode: WebAttribute<package_Select, { statecode: package_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<package_Select, { statuscode: package_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<package_Select, { timezoneruleversionnumber: number | null }, {  }>;
  tpspackageid: WebAttribute<package_Select, { tpspackageid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<package_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<package_Select, { versionnumber: number | null }, {  }>;
}
interface package_Filter {
  appid: XQW.Guid;
  applicationname: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  installedon: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  packageid: XQW.Guid;
  packageinstanceid: XQW.Guid;
  packageinstanceoperationid: XQW.Guid;
  packageuniquename: string;
  packageversion: string;
  publisherid: XQW.Guid;
  publishername: string;
  statecode: package_statecode;
  statuscode: package_statuscode;
  timezoneruleversionnumber: number;
  tpspackageid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface package_Expand {
  createdby: WebExpand<package_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<package_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<package_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<package_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<package_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  package_AsyncOperations: WebExpand<package_Expand, AsyncOperation_Select, AsyncOperation_Filter, { package_AsyncOperations: AsyncOperation_Result[] }>;
  package_BulkDeleteFailures: WebExpand<package_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { package_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  package_DuplicateBaseRecord: WebExpand<package_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { package_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  package_DuplicateMatchingRecord: WebExpand<package_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { package_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  package_MailboxTrackingFolders: WebExpand<package_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { package_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  package_PrincipalObjectAttributeAccesses: WebExpand<package_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { package_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  package_ProcessSession: WebExpand<package_Expand, ProcessSession_Select, ProcessSession_Filter, { package_ProcessSession: ProcessSession_Result[] }>;
  package_SyncErrors: WebExpand<package_Expand, SyncError_Select, SyncError_Filter, { package_SyncErrors: SyncError_Result[] }>;
  package_UserEntityInstanceDatas: WebExpand<package_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { package_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  package_solution: WebExpand<package_Expand, Solution_Select, Solution_Filter, { package_solution: Solution_Result[] }>;
}
interface package_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  installedon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface package_Result extends package_Base, package_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface package_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface package_RelatedMany {
  package_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  package_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  package_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  package_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  package_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  package_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  package_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  package_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  package_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  package_solution: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface WebEntitiesRetrieve {
  packages: WebMappingRetrieve<package_Select,package_Expand,package_Filter,package_Fixed,package_Result,package_FormattedResult>;
}
interface WebEntitiesRelated {
  packages: WebMappingRelated<package_RelatedOne,package_RelatedMany>;
}
interface WebEntitiesCUDA {
  packages: WebMappingCUDA<package_Create,package_Update,package_Select>;
}
