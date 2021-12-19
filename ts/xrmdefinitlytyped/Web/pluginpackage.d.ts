interface pluginpackage_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  encodedcontents?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  pluginpackageid?: string | null;
  solutionid?: string | null;
  statecode?: pluginpackage_statecode | null;
  statuscode?: pluginpackage_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface pluginpackage_Relationships {
  contents?: FileAttachment_Result | null;
  pluginpackage_AsyncOperations?: AsyncOperation_Result[] | null;
  pluginpackage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  pluginpackage_FileAttachments?: FileAttachment_Result[] | null;
  pluginpackage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pluginpackage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  pluginpackage_SyncErrors?: SyncError_Result[] | null;
  pluginpackage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  pluginpackage_pluginassembly?: PluginAssembly_Result[] | null;
}
interface pluginpackage extends pluginpackage_Base, pluginpackage_Relationships {
}
interface pluginpackage_Create extends pluginpackage {
}
interface pluginpackage_Update extends pluginpackage {
}
interface pluginpackage_Select {
  componentidunique: WebAttribute<pluginpackage_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<pluginpackage_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<pluginpackage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<pluginpackage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<pluginpackage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  encodedcontents: WebAttribute<pluginpackage_Select, { encodedcontents: string | null }, {  }>;
  importsequencenumber: WebAttribute<pluginpackage_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<pluginpackage_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<pluginpackage_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<pluginpackage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<pluginpackage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<pluginpackage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<pluginpackage_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<pluginpackage_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<pluginpackage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<pluginpackage_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  pluginpackageid: WebAttribute<pluginpackage_Select, { pluginpackageid: string | null }, {  }>;
  solutionid: WebAttribute<pluginpackage_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<pluginpackage_Select, { statecode: pluginpackage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<pluginpackage_Select, { statuscode: pluginpackage_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<pluginpackage_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<pluginpackage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquename: WebAttribute<pluginpackage_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<pluginpackage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<pluginpackage_Select, { versionnumber: number | null }, {  }>;
}
interface pluginpackage_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  encodedcontents: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  pluginpackageid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: pluginpackage_statecode;
  statuscode: pluginpackage_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface pluginpackage_Expand {
  contents: WebExpand<pluginpackage_Expand, FileAttachment_Select, FileAttachment_Filter, { contents: FileAttachment_Result }>;
  createdby: WebExpand<pluginpackage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<pluginpackage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<pluginpackage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<pluginpackage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<pluginpackage_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  pluginpackage_AsyncOperations: WebExpand<pluginpackage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { pluginpackage_AsyncOperations: AsyncOperation_Result[] }>;
  pluginpackage_BulkDeleteFailures: WebExpand<pluginpackage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { pluginpackage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  pluginpackage_FileAttachments: WebExpand<pluginpackage_Expand, FileAttachment_Select, FileAttachment_Filter, { pluginpackage_FileAttachments: FileAttachment_Result[] }>;
  pluginpackage_MailboxTrackingFolders: WebExpand<pluginpackage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pluginpackage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pluginpackage_PrincipalObjectAttributeAccesses: WebExpand<pluginpackage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pluginpackage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  pluginpackage_SyncErrors: WebExpand<pluginpackage_Expand, SyncError_Select, SyncError_Filter, { pluginpackage_SyncErrors: SyncError_Result[] }>;
  pluginpackage_UserEntityInstanceDatas: WebExpand<pluginpackage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { pluginpackage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  pluginpackage_pluginassembly: WebExpand<pluginpackage_Expand, PluginAssembly_Select, PluginAssembly_Filter, { pluginpackage_pluginassembly: PluginAssembly_Result[] }>;
}
interface pluginpackage_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface pluginpackage_Result extends pluginpackage_Base, pluginpackage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface pluginpackage_RelatedOne {
  contents: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface pluginpackage_RelatedMany {
  pluginpackage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  pluginpackage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  pluginpackage_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  pluginpackage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pluginpackage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  pluginpackage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  pluginpackage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  pluginpackage_pluginassembly: WebMappingRetrieve<PluginAssembly_Select,PluginAssembly_Expand,PluginAssembly_Filter,PluginAssembly_Fixed,PluginAssembly_Result,PluginAssembly_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pluginpackages: WebMappingRetrieve<pluginpackage_Select,pluginpackage_Expand,pluginpackage_Filter,pluginpackage_Fixed,pluginpackage_Result,pluginpackage_FormattedResult>;
}
interface WebEntitiesRelated {
  pluginpackages: WebMappingRelated<pluginpackage_RelatedOne,pluginpackage_RelatedMany>;
}
interface WebEntitiesCUDA {
  pluginpackages: WebMappingCUDA<pluginpackage_Create,pluginpackage_Update,pluginpackage_Select>;
}
