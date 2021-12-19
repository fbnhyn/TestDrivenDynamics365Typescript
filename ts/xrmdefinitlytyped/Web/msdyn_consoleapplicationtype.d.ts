interface msdyn_consoleapplicationtype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_consoleapplicationtypeid?: string | null;
  msdyn_displayname?: string | null;
  msdyn_name?: string | null;
  msdyn_renderingorder?: number | null;
  msdyn_templateparameters?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_consoleapplicationtype_statecode | null;
  statuscode?: msdyn_consoleapplicationtype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_consoleapplicationtype_Relationships {
  msdyn_consoleapplicationtype_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_consoleapplicationtype_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_consoleapplicationtype_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationtype_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationtype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_consoleapplicationtype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_consoleapplicationtype_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_consoleapplicationtype_SyncErrors?: SyncError_Result[] | null;
  msdyn_consoleapplicationtype_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_consoleapplicationtype_msdyn_consol?: msdyn_consoleappparameterdefinition_Result[] | null;
  msdyn_msdyn_consoleapplicationtype_msdyn_consoleapplicationtemplate_PageType?: msdyn_consoleapplicationtemplate_Result[] | null;
}
interface msdyn_consoleapplicationtype extends msdyn_consoleapplicationtype_Base, msdyn_consoleapplicationtype_Relationships {
}
interface msdyn_consoleapplicationtype_Create extends msdyn_consoleapplicationtype {
}
interface msdyn_consoleapplicationtype_Update extends msdyn_consoleapplicationtype {
}
interface msdyn_consoleapplicationtype_Select {
  createdby_guid: WebAttribute<msdyn_consoleapplicationtype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_consoleapplicationtype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_consoleapplicationtype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_consoleapplicationtype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_consoleapplicationtype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_consoleapplicationtype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_consoleapplicationtype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_consoleapplicationtypeid: WebAttribute<msdyn_consoleapplicationtype_Select, { msdyn_consoleapplicationtypeid: string | null }, {  }>;
  msdyn_displayname: WebAttribute<msdyn_consoleapplicationtype_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_consoleapplicationtype_Select, { msdyn_name: string | null }, {  }>;
  msdyn_renderingorder: WebAttribute<msdyn_consoleapplicationtype_Select, { msdyn_renderingorder: number | null }, {  }>;
  msdyn_templateparameters: WebAttribute<msdyn_consoleapplicationtype_Select, { msdyn_templateparameters: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_consoleapplicationtype_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_consoleapplicationtype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_consoleapplicationtype_Select, { statecode: msdyn_consoleapplicationtype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_consoleapplicationtype_Select, { statuscode: msdyn_consoleapplicationtype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_consoleapplicationtype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_consoleapplicationtype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_consoleapplicationtype_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_consoleapplicationtype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_consoleapplicationtypeid: XQW.Guid;
  msdyn_displayname: string;
  msdyn_name: string;
  msdyn_renderingorder: number;
  msdyn_templateparameters: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_consoleapplicationtype_statecode;
  statuscode: msdyn_consoleapplicationtype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_consoleapplicationtype_Expand {
  createdby: WebExpand<msdyn_consoleapplicationtype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_consoleapplicationtype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_consoleapplicationtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_consoleapplicationtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_consoleapplicationtype_AsyncOperations: WebExpand<msdyn_consoleapplicationtype_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_consoleapplicationtype_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_consoleapplicationtype_BulkDeleteFailures: WebExpand<msdyn_consoleapplicationtype_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_consoleapplicationtype_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_consoleapplicationtype_DuplicateBaseRecord: WebExpand<msdyn_consoleapplicationtype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationtype_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationtype_DuplicateMatchingRecord: WebExpand<msdyn_consoleapplicationtype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationtype_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationtype_MailboxTrackingFolders: WebExpand<msdyn_consoleapplicationtype_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_consoleapplicationtype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_consoleapplicationtype_PrincipalObjectAttributeAccesses: WebExpand<msdyn_consoleapplicationtype_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_consoleapplicationtype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_consoleapplicationtype_ProcessSession: WebExpand<msdyn_consoleapplicationtype_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_consoleapplicationtype_ProcessSession: ProcessSession_Result[] }>;
  msdyn_consoleapplicationtype_SyncErrors: WebExpand<msdyn_consoleapplicationtype_Expand, SyncError_Select, SyncError_Filter, { msdyn_consoleapplicationtype_SyncErrors: SyncError_Result[] }>;
  msdyn_consoleapplicationtype_UserEntityInstanceDatas: WebExpand<msdyn_consoleapplicationtype_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_consoleapplicationtype_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_consoleapplicationtype_msdyn_consol: WebExpand<msdyn_consoleapplicationtype_Expand, msdyn_consoleappparameterdefinition_Select, msdyn_consoleappparameterdefinition_Filter, { msdyn_msdyn_consoleapplicationtype_msdyn_consol: msdyn_consoleappparameterdefinition_Result[] }>;
  msdyn_msdyn_consoleapplicationtype_msdyn_consoleapplicationtemplate_PageType: WebExpand<msdyn_consoleapplicationtype_Expand, msdyn_consoleapplicationtemplate_Select, msdyn_consoleapplicationtemplate_Filter, { msdyn_msdyn_consoleapplicationtype_msdyn_consoleapplicationtemplate_PageType: msdyn_consoleapplicationtemplate_Result[] }>;
  organizationid: WebExpand<msdyn_consoleapplicationtype_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_consoleapplicationtype_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_consoleapplicationtype_Result extends msdyn_consoleapplicationtype_Base, msdyn_consoleapplicationtype_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_consoleapplicationtype_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_consoleapplicationtype_RelatedMany {
  msdyn_consoleapplicationtype_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_consoleapplicationtype_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_consoleapplicationtype_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationtype_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationtype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_consoleapplicationtype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_consoleapplicationtype_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_consoleapplicationtype_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_consoleapplicationtype_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_consoleapplicationtype_msdyn_consol: WebMappingRetrieve<msdyn_consoleappparameterdefinition_Select,msdyn_consoleappparameterdefinition_Expand,msdyn_consoleappparameterdefinition_Filter,msdyn_consoleappparameterdefinition_Fixed,msdyn_consoleappparameterdefinition_Result,msdyn_consoleappparameterdefinition_FormattedResult>;
  msdyn_msdyn_consoleapplicationtype_msdyn_consoleapplicationtemplate_PageType: WebMappingRetrieve<msdyn_consoleapplicationtemplate_Select,msdyn_consoleapplicationtemplate_Expand,msdyn_consoleapplicationtemplate_Filter,msdyn_consoleapplicationtemplate_Fixed,msdyn_consoleapplicationtemplate_Result,msdyn_consoleapplicationtemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_consoleapplicationtypes: WebMappingRetrieve<msdyn_consoleapplicationtype_Select,msdyn_consoleapplicationtype_Expand,msdyn_consoleapplicationtype_Filter,msdyn_consoleapplicationtype_Fixed,msdyn_consoleapplicationtype_Result,msdyn_consoleapplicationtype_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_consoleapplicationtypes: WebMappingRelated<msdyn_consoleapplicationtype_RelatedOne,msdyn_consoleapplicationtype_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_consoleapplicationtypes: WebMappingCUDA<msdyn_consoleapplicationtype_Create,msdyn_consoleapplicationtype_Update,msdyn_consoleapplicationtype_Select>;
}
