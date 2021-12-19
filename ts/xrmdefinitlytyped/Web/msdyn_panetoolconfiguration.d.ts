interface msdyn_panetoolconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_category?: msdyn_panetoolconfiguration_msdyn_category | null;
  msdyn_controlname?: string | null;
  msdyn_data?: string | null;
  msdyn_defaulticon?: string | null;
  msdyn_description?: string | null;
  msdyn_isconfigurable?: boolean | null;
  msdyn_learnmorelink?: string | null;
  msdyn_name?: string | null;
  msdyn_panetoolconfigurationid?: string | null;
  msdyn_toolconfigurationentity?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_panetoolconfiguration_statecode | null;
  statuscode?: msdyn_panetoolconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_panetoolconfiguration_Relationships {
  msdyn_msdyn_toolconfig_msdyn_tabconfig?: msdyn_panetabconfiguration_Result[] | null;
  msdyn_panetoolconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_panetoolconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_panetoolconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_panetoolconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_panetoolconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_panetoolconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_panetoolconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_panetoolconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_panetoolconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_panetoolconfiguration extends msdyn_panetoolconfiguration_Base, msdyn_panetoolconfiguration_Relationships {
}
interface msdyn_panetoolconfiguration_Create extends msdyn_panetoolconfiguration {
}
interface msdyn_panetoolconfiguration_Update extends msdyn_panetoolconfiguration {
}
interface msdyn_panetoolconfiguration_Select {
  componentidunique: WebAttribute<msdyn_panetoolconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_panetoolconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_panetoolconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_panetoolconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_panetoolconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_panetoolconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_panetoolconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_panetoolconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_panetoolconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_panetoolconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_panetoolconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_category: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_category: msdyn_panetoolconfiguration_msdyn_category | null }, { msdyn_category_formatted?: string }>;
  msdyn_controlname: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_controlname: string | null }, {  }>;
  msdyn_data: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_data: string | null }, {  }>;
  msdyn_defaulticon: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_defaulticon: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_description: string | null }, {  }>;
  msdyn_isconfigurable: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_isconfigurable: boolean | null }, {  }>;
  msdyn_learnmorelink: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_learnmorelink: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_panetoolconfigurationid: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_panetoolconfigurationid: string | null }, {  }>;
  msdyn_toolconfigurationentity: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_toolconfigurationentity: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_panetoolconfiguration_Select, { msdyn_uniquename: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_panetoolconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_panetoolconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_panetoolconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_panetoolconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_panetoolconfiguration_Select, { statecode: msdyn_panetoolconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_panetoolconfiguration_Select, { statuscode: msdyn_panetoolconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_panetoolconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_panetoolconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_panetoolconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_panetoolconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_panetoolconfiguration_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_category: msdyn_panetoolconfiguration_msdyn_category;
  msdyn_controlname: string;
  msdyn_data: string;
  msdyn_defaulticon: string;
  msdyn_description: string;
  msdyn_isconfigurable: boolean;
  msdyn_learnmorelink: string;
  msdyn_name: string;
  msdyn_panetoolconfigurationid: XQW.Guid;
  msdyn_toolconfigurationentity: string;
  msdyn_uniquename: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_panetoolconfiguration_statecode;
  statuscode: msdyn_panetoolconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_panetoolconfiguration_Expand {
  createdby: WebExpand<msdyn_panetoolconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_panetoolconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_panetoolconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_panetoolconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_toolconfig_msdyn_tabconfig: WebExpand<msdyn_panetoolconfiguration_Expand, msdyn_panetabconfiguration_Select, msdyn_panetabconfiguration_Filter, { msdyn_msdyn_toolconfig_msdyn_tabconfig: msdyn_panetabconfiguration_Result[] }>;
  msdyn_panetoolconfiguration_AsyncOperations: WebExpand<msdyn_panetoolconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_panetoolconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_panetoolconfiguration_BulkDeleteFailures: WebExpand<msdyn_panetoolconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_panetoolconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_panetoolconfiguration_DuplicateBaseRecord: WebExpand<msdyn_panetoolconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_panetoolconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_panetoolconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_panetoolconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_panetoolconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_panetoolconfiguration_MailboxTrackingFolders: WebExpand<msdyn_panetoolconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_panetoolconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_panetoolconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_panetoolconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_panetoolconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_panetoolconfiguration_ProcessSession: WebExpand<msdyn_panetoolconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_panetoolconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_panetoolconfiguration_SyncErrors: WebExpand<msdyn_panetoolconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_panetoolconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_panetoolconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_panetoolconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_panetoolconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_panetoolconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_panetoolconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_category_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_panetoolconfiguration_Result extends msdyn_panetoolconfiguration_Base, msdyn_panetoolconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_panetoolconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_panetoolconfiguration_RelatedMany {
  msdyn_msdyn_toolconfig_msdyn_tabconfig: WebMappingRetrieve<msdyn_panetabconfiguration_Select,msdyn_panetabconfiguration_Expand,msdyn_panetabconfiguration_Filter,msdyn_panetabconfiguration_Fixed,msdyn_panetabconfiguration_Result,msdyn_panetabconfiguration_FormattedResult>;
  msdyn_panetoolconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_panetoolconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_panetoolconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_panetoolconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_panetoolconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_panetoolconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_panetoolconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_panetoolconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_panetoolconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_panetoolconfigurations: WebMappingRetrieve<msdyn_panetoolconfiguration_Select,msdyn_panetoolconfiguration_Expand,msdyn_panetoolconfiguration_Filter,msdyn_panetoolconfiguration_Fixed,msdyn_panetoolconfiguration_Result,msdyn_panetoolconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_panetoolconfigurations: WebMappingRelated<msdyn_panetoolconfiguration_RelatedOne,msdyn_panetoolconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_panetoolconfigurations: WebMappingCUDA<msdyn_panetoolconfiguration_Create,msdyn_panetoolconfiguration_Update,msdyn_panetoolconfiguration_Select>;
}
