interface msdyn_ciprovider_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_appselector?: string | null;
  msdyn_cifsolversion?: string | null;
  msdyn_ciproviderapiversion?: msdyn_ciproviderapiversion | null;
  msdyn_ciproviderid?: string | null;
  msdyn_clicktoact?: boolean | null;
  msdyn_customparams?: string | null;
  msdyn_enableanalytics?: boolean | null;
  msdyn_label?: string | null;
  msdyn_landingurl?: string | null;
  msdyn_name?: string | null;
  msdyn_roleselector?: string | null;
  msdyn_sortorder?: number | null;
  msdyn_trusteddomain?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ciprovider_statecode | null;
  statuscode?: msdyn_ciprovider_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ciprovider_Relationships {
  msdyn_ciprovider_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ciprovider_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ciprovider_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ciprovider_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ciprovider_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ciprovider_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ciprovider_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ciprovider_SyncErrors?: SyncError_Result[] | null;
  msdyn_ciprovider_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_ciprovider_systemuser_membership?: SystemUser_Result[] | null;
  msdyn_msdyn_ciprovider_msdyn_channel?: msdyn_channel_Result[] | null;
}
interface msdyn_ciprovider extends msdyn_ciprovider_Base, msdyn_ciprovider_Relationships {
}
interface msdyn_ciprovider_Create extends msdyn_ciprovider {
}
interface msdyn_ciprovider_Update extends msdyn_ciprovider {
}
interface msdyn_ciprovider_Select {
  createdby_guid: WebAttribute<msdyn_ciprovider_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ciprovider_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ciprovider_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ciprovider_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ciprovider_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ciprovider_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ciprovider_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_appselector: WebAttribute<msdyn_ciprovider_Select, { msdyn_appselector: string | null }, {  }>;
  msdyn_cifsolversion: WebAttribute<msdyn_ciprovider_Select, { msdyn_cifsolversion: string | null }, {  }>;
  msdyn_ciproviderapiversion: WebAttribute<msdyn_ciprovider_Select, { msdyn_ciproviderapiversion: msdyn_ciproviderapiversion | null }, { msdyn_ciproviderapiversion_formatted?: string }>;
  msdyn_ciproviderid: WebAttribute<msdyn_ciprovider_Select, { msdyn_ciproviderid: string | null }, {  }>;
  msdyn_clicktoact: WebAttribute<msdyn_ciprovider_Select, { msdyn_clicktoact: boolean | null }, {  }>;
  msdyn_customparams: WebAttribute<msdyn_ciprovider_Select, { msdyn_customparams: string | null }, {  }>;
  msdyn_enableanalytics: WebAttribute<msdyn_ciprovider_Select, { msdyn_enableanalytics: boolean | null }, {  }>;
  msdyn_label: WebAttribute<msdyn_ciprovider_Select, { msdyn_label: string | null }, {  }>;
  msdyn_landingurl: WebAttribute<msdyn_ciprovider_Select, { msdyn_landingurl: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ciprovider_Select, { msdyn_name: string | null }, {  }>;
  msdyn_roleselector: WebAttribute<msdyn_ciprovider_Select, { msdyn_roleselector: string | null }, {  }>;
  msdyn_sortorder: WebAttribute<msdyn_ciprovider_Select, { msdyn_sortorder: number | null }, {  }>;
  msdyn_trusteddomain: WebAttribute<msdyn_ciprovider_Select, { msdyn_trusteddomain: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_ciprovider_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ciprovider_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_ciprovider_Select, { statecode: msdyn_ciprovider_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ciprovider_Select, { statuscode: msdyn_ciprovider_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ciprovider_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ciprovider_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ciprovider_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ciprovider_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_appselector: string;
  msdyn_cifsolversion: string;
  msdyn_ciproviderapiversion: msdyn_ciproviderapiversion;
  msdyn_ciproviderid: XQW.Guid;
  msdyn_clicktoact: boolean;
  msdyn_customparams: string;
  msdyn_enableanalytics: boolean;
  msdyn_label: string;
  msdyn_landingurl: string;
  msdyn_name: string;
  msdyn_roleselector: string;
  msdyn_sortorder: number;
  msdyn_trusteddomain: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_ciprovider_statecode;
  statuscode: msdyn_ciprovider_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ciprovider_Expand {
  createdby: WebExpand<msdyn_ciprovider_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ciprovider_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ciprovider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ciprovider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ciprovider_AsyncOperations: WebExpand<msdyn_ciprovider_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ciprovider_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ciprovider_BulkDeleteFailures: WebExpand<msdyn_ciprovider_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ciprovider_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ciprovider_DuplicateBaseRecord: WebExpand<msdyn_ciprovider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ciprovider_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ciprovider_DuplicateMatchingRecord: WebExpand<msdyn_ciprovider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ciprovider_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ciprovider_MailboxTrackingFolders: WebExpand<msdyn_ciprovider_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ciprovider_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ciprovider_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ciprovider_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ciprovider_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ciprovider_ProcessSession: WebExpand<msdyn_ciprovider_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ciprovider_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ciprovider_SyncErrors: WebExpand<msdyn_ciprovider_Expand, SyncError_Select, SyncError_Filter, { msdyn_ciprovider_SyncErrors: SyncError_Result[] }>;
  msdyn_ciprovider_UserEntityInstanceDatas: WebExpand<msdyn_ciprovider_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ciprovider_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ciprovider_systemuser_membership: WebExpand<msdyn_ciprovider_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_ciprovider_systemuser_membership: SystemUser_Result[] }>;
  msdyn_msdyn_ciprovider_msdyn_channel: WebExpand<msdyn_ciprovider_Expand, msdyn_channel_Select, msdyn_channel_Filter, { msdyn_msdyn_ciprovider_msdyn_channel: msdyn_channel_Result[] }>;
  organizationid: WebExpand<msdyn_ciprovider_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_ciprovider_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_ciproviderapiversion_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ciprovider_Result extends msdyn_ciprovider_Base, msdyn_ciprovider_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_ciprovider_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_ciprovider_RelatedMany {
  msdyn_ciprovider_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ciprovider_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ciprovider_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ciprovider_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ciprovider_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ciprovider_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ciprovider_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ciprovider_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ciprovider_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_ciprovider_systemuser_membership: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_msdyn_ciprovider_msdyn_channel: WebMappingRetrieve<msdyn_channel_Select,msdyn_channel_Expand,msdyn_channel_Filter,msdyn_channel_Fixed,msdyn_channel_Result,msdyn_channel_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ciproviders: WebMappingRetrieve<msdyn_ciprovider_Select,msdyn_ciprovider_Expand,msdyn_ciprovider_Filter,msdyn_ciprovider_Fixed,msdyn_ciprovider_Result,msdyn_ciprovider_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ciproviders: WebMappingRelated<msdyn_ciprovider_RelatedOne,msdyn_ciprovider_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ciproviders: WebMappingCUDA<msdyn_ciprovider_Create,msdyn_ciprovider_Update,msdyn_ciprovider_Select>;
}
