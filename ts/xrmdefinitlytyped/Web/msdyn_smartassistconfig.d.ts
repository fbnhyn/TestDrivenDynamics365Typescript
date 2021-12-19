interface msdyn_smartassistconfig_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_iconurl?: string | null;
  msdyn_isdefault?: boolean | null;
  msdyn_maxsuggestioncount?: number | null;
  msdyn_name?: string | null;
  msdyn_order?: number | null;
  msdyn_smartassistconfigid?: string | null;
  msdyn_sourceentityname?: string | null;
  msdyn_suggestioncontainertitle?: string | null;
  msdyn_suggestioncontrolconfiguniquename?: string | null;
  msdyn_suggestioncontroltype?: msdyn_suggestioncontroltype | null;
  msdyn_suggestionprovider?: string | null;
  msdyn_suggestiontype?: msdyn_suggestiontype | null;
  msdyn_suggestionwebresourceurl?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_smartassistconfig_statecode | null;
  statuscode?: msdyn_smartassistconfig_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_smartassistconfig_Relationships {
  msdyn_smartassistconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_smartassistconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_smartassistconfig_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_smartassistconfig_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_smartassistconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_smartassistconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_smartassistconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_smartassistconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_smartassistconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_smartassistconfig_msdyn_appconfig?: msdyn_appconfiguration_Result[] | null;
}
interface msdyn_smartassistconfig extends msdyn_smartassistconfig_Base, msdyn_smartassistconfig_Relationships {
}
interface msdyn_smartassistconfig_Create extends msdyn_smartassistconfig {
}
interface msdyn_smartassistconfig_Update extends msdyn_smartassistconfig {
}
interface msdyn_smartassistconfig_Select {
  componentidunique: WebAttribute<msdyn_smartassistconfig_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_smartassistconfig_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_smartassistconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_smartassistconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_smartassistconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_smartassistconfig_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_smartassistconfig_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_smartassistconfig_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_smartassistconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_smartassistconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_smartassistconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_iconurl: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_iconurl: string | null }, {  }>;
  msdyn_isdefault: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_isdefault: boolean | null }, {  }>;
  msdyn_maxsuggestioncount: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_maxsuggestioncount: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_order: number | null }, {  }>;
  msdyn_smartassistconfigid: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_smartassistconfigid: string | null }, {  }>;
  msdyn_sourceentityname: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_sourceentityname: string | null }, {  }>;
  msdyn_suggestioncontainertitle: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_suggestioncontainertitle: string | null }, {  }>;
  msdyn_suggestioncontrolconfiguniquename: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_suggestioncontrolconfiguniquename: string | null }, {  }>;
  msdyn_suggestioncontroltype: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_suggestioncontroltype: msdyn_suggestioncontroltype | null }, { msdyn_suggestioncontroltype_formatted?: string }>;
  msdyn_suggestionprovider: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_suggestionprovider: string | null }, {  }>;
  msdyn_suggestiontype: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_suggestiontype: msdyn_suggestiontype | null }, { msdyn_suggestiontype_formatted?: string }>;
  msdyn_suggestionwebresourceurl: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_suggestionwebresourceurl: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_smartassistconfig_Select, { msdyn_uniquename: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_smartassistconfig_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_smartassistconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_smartassistconfig_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_smartassistconfig_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_smartassistconfig_Select, { statecode: msdyn_smartassistconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_smartassistconfig_Select, { statuscode: msdyn_smartassistconfig_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_smartassistconfig_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_smartassistconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_smartassistconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_smartassistconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_smartassistconfig_Filter {
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
  msdyn_iconurl: string;
  msdyn_isdefault: boolean;
  msdyn_maxsuggestioncount: number;
  msdyn_name: string;
  msdyn_order: number;
  msdyn_smartassistconfigid: XQW.Guid;
  msdyn_sourceentityname: string;
  msdyn_suggestioncontainertitle: string;
  msdyn_suggestioncontrolconfiguniquename: string;
  msdyn_suggestioncontroltype: msdyn_suggestioncontroltype;
  msdyn_suggestionprovider: string;
  msdyn_suggestiontype: msdyn_suggestiontype;
  msdyn_suggestionwebresourceurl: string;
  msdyn_uniquename: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_smartassistconfig_statecode;
  statuscode: msdyn_smartassistconfig_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_smartassistconfig_Expand {
  createdby: WebExpand<msdyn_smartassistconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_smartassistconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_smartassistconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_smartassistconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_smartassistconfig_AsyncOperations: WebExpand<msdyn_smartassistconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_smartassistconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_smartassistconfig_BulkDeleteFailures: WebExpand<msdyn_smartassistconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_smartassistconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_smartassistconfig_DuplicateBaseRecord: WebExpand<msdyn_smartassistconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_smartassistconfig_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_smartassistconfig_DuplicateMatchingRecord: WebExpand<msdyn_smartassistconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_smartassistconfig_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_smartassistconfig_MailboxTrackingFolders: WebExpand<msdyn_smartassistconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_smartassistconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_smartassistconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_smartassistconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_smartassistconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_smartassistconfig_ProcessSession: WebExpand<msdyn_smartassistconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_smartassistconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_smartassistconfig_SyncErrors: WebExpand<msdyn_smartassistconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_smartassistconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_smartassistconfig_UserEntityInstanceDatas: WebExpand<msdyn_smartassistconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_smartassistconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_smartassistconfig_msdyn_appconfig: WebExpand<msdyn_smartassistconfig_Expand, msdyn_appconfiguration_Select, msdyn_appconfiguration_Filter, { msdyn_smartassistconfig_msdyn_appconfig: msdyn_appconfiguration_Result[] }>;
  organizationid: WebExpand<msdyn_smartassistconfig_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_smartassistconfig_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_suggestioncontroltype_formatted?: string;
  msdyn_suggestiontype_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_smartassistconfig_Result extends msdyn_smartassistconfig_Base, msdyn_smartassistconfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_smartassistconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_smartassistconfig_RelatedMany {
  msdyn_smartassistconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_smartassistconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_smartassistconfig_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_smartassistconfig_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_smartassistconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_smartassistconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_smartassistconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_smartassistconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_smartassistconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_smartassistconfig_msdyn_appconfig: WebMappingRetrieve<msdyn_appconfiguration_Select,msdyn_appconfiguration_Expand,msdyn_appconfiguration_Filter,msdyn_appconfiguration_Fixed,msdyn_appconfiguration_Result,msdyn_appconfiguration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_smartassistconfigs: WebMappingRetrieve<msdyn_smartassistconfig_Select,msdyn_smartassistconfig_Expand,msdyn_smartassistconfig_Filter,msdyn_smartassistconfig_Fixed,msdyn_smartassistconfig_Result,msdyn_smartassistconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_smartassistconfigs: WebMappingRelated<msdyn_smartassistconfig_RelatedOne,msdyn_smartassistconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_smartassistconfigs: WebMappingCUDA<msdyn_smartassistconfig_Create,msdyn_smartassistconfig_Update,msdyn_smartassistconfig_Select>;
}
