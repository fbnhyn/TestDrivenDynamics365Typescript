interface VirtualEntityMetadata_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  ischangedfieldsenabledforupdateevent?: boolean | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  isonexternalcreatedenabled?: boolean | null;
  isonexternaldeletedenabled?: boolean | null;
  isonexternalupdatedenabled?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: virtualentitymetadata_statecode | null;
  statuscode?: virtualentitymetadata_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  virtualentitymetadataid?: string | null;
}
interface VirtualEntityMetadata_Relationships {
  virtualentitymetadata_AsyncOperations?: AsyncOperation_Result[] | null;
  virtualentitymetadata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  virtualentitymetadata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  virtualentitymetadata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  virtualentitymetadata_ProcessSession?: ProcessSession_Result[] | null;
  virtualentitymetadata_SyncErrors?: SyncError_Result[] | null;
  virtualentitymetadata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface VirtualEntityMetadata extends VirtualEntityMetadata_Base, VirtualEntityMetadata_Relationships {
}
interface VirtualEntityMetadata_Create extends VirtualEntityMetadata {
  extensionofrecordid_bind$entities?: string | null;
}
interface VirtualEntityMetadata_Update extends VirtualEntityMetadata {
}
interface VirtualEntityMetadata_Select {
  componentidunique: WebAttribute<VirtualEntityMetadata_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<VirtualEntityMetadata_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<VirtualEntityMetadata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<VirtualEntityMetadata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<VirtualEntityMetadata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  extensionofrecordid_guid: WebAttribute<VirtualEntityMetadata_Select, { extensionofrecordid_guid: string | null }, { extensionofrecordid_formatted?: string }>;
  importsequencenumber: WebAttribute<VirtualEntityMetadata_Select, { importsequencenumber: number | null }, {  }>;
  ischangedfieldsenabledforupdateevent: WebAttribute<VirtualEntityMetadata_Select, { ischangedfieldsenabledforupdateevent: boolean | null }, {  }>;
  iscustomizable: WebAttribute<VirtualEntityMetadata_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<VirtualEntityMetadata_Select, { ismanaged: boolean | null }, {  }>;
  isonexternalcreatedenabled: WebAttribute<VirtualEntityMetadata_Select, { isonexternalcreatedenabled: boolean | null }, {  }>;
  isonexternaldeletedenabled: WebAttribute<VirtualEntityMetadata_Select, { isonexternaldeletedenabled: boolean | null }, {  }>;
  isonexternalupdatedenabled: WebAttribute<VirtualEntityMetadata_Select, { isonexternalupdatedenabled: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<VirtualEntityMetadata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<VirtualEntityMetadata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<VirtualEntityMetadata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<VirtualEntityMetadata_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<VirtualEntityMetadata_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<VirtualEntityMetadata_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<VirtualEntityMetadata_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<VirtualEntityMetadata_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<VirtualEntityMetadata_Select, { statecode: virtualentitymetadata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<VirtualEntityMetadata_Select, { statuscode: virtualentitymetadata_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<VirtualEntityMetadata_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<VirtualEntityMetadata_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<VirtualEntityMetadata_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<VirtualEntityMetadata_Select, { versionnumber: number | null }, {  }>;
  virtualentitymetadataid: WebAttribute<VirtualEntityMetadata_Select, { virtualentitymetadataid: string | null }, {  }>;
}
interface VirtualEntityMetadata_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  extensionofrecordid_guid: XQW.Guid;
  importsequencenumber: number;
  ischangedfieldsenabledforupdateevent: boolean;
  iscustomizable: any;
  ismanaged: boolean;
  isonexternalcreatedenabled: boolean;
  isonexternaldeletedenabled: boolean;
  isonexternalupdatedenabled: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: virtualentitymetadata_statecode;
  statuscode: virtualentitymetadata_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
  virtualentitymetadataid: XQW.Guid;
}
interface VirtualEntityMetadata_Expand {
  createdby: WebExpand<VirtualEntityMetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<VirtualEntityMetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  extensionofrecordid: WebExpand<VirtualEntityMetadata_Expand, Entity_Select, Entity_Filter, { extensionofrecordid: Entity_Result }>;
  modifiedby: WebExpand<VirtualEntityMetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<VirtualEntityMetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<VirtualEntityMetadata_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  virtualentitymetadata_AsyncOperations: WebExpand<VirtualEntityMetadata_Expand, AsyncOperation_Select, AsyncOperation_Filter, { virtualentitymetadata_AsyncOperations: AsyncOperation_Result[] }>;
  virtualentitymetadata_BulkDeleteFailures: WebExpand<VirtualEntityMetadata_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { virtualentitymetadata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  virtualentitymetadata_MailboxTrackingFolders: WebExpand<VirtualEntityMetadata_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { virtualentitymetadata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  virtualentitymetadata_PrincipalObjectAttributeAccesses: WebExpand<VirtualEntityMetadata_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { virtualentitymetadata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  virtualentitymetadata_ProcessSession: WebExpand<VirtualEntityMetadata_Expand, ProcessSession_Select, ProcessSession_Filter, { virtualentitymetadata_ProcessSession: ProcessSession_Result[] }>;
  virtualentitymetadata_SyncErrors: WebExpand<VirtualEntityMetadata_Expand, SyncError_Select, SyncError_Filter, { virtualentitymetadata_SyncErrors: SyncError_Result[] }>;
  virtualentitymetadata_UserEntityInstanceDatas: WebExpand<VirtualEntityMetadata_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { virtualentitymetadata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface VirtualEntityMetadata_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  extensionofrecordid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface VirtualEntityMetadata_Result extends VirtualEntityMetadata_Base, VirtualEntityMetadata_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  extensionofrecordid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface VirtualEntityMetadata_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  extensionofrecordid: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface VirtualEntityMetadata_RelatedMany {
  virtualentitymetadata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  virtualentitymetadata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  virtualentitymetadata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  virtualentitymetadata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  virtualentitymetadata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  virtualentitymetadata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  virtualentitymetadata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  virtualentitymetadatas: WebMappingRetrieve<VirtualEntityMetadata_Select,VirtualEntityMetadata_Expand,VirtualEntityMetadata_Filter,VirtualEntityMetadata_Fixed,VirtualEntityMetadata_Result,VirtualEntityMetadata_FormattedResult>;
}
interface WebEntitiesRelated {
  virtualentitymetadatas: WebMappingRelated<VirtualEntityMetadata_RelatedOne,VirtualEntityMetadata_RelatedMany>;
}
interface WebEntitiesCUDA {
  virtualentitymetadatas: WebMappingCUDA<VirtualEntityMetadata_Create,VirtualEntityMetadata_Update,VirtualEntityMetadata_Select>;
}
