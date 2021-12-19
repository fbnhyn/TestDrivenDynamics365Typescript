interface solutioncomponentattributeconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  encodingformat?: solutioncomponentattributeconfiguration_encodingformat | null;
  fileextension?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  isenabledfordependencyextraction?: boolean | null;
  isexportdisabled?: boolean | null;
  isexportedasfile?: boolean | null;
  ismanaged?: boolean | null;
  isprefixedbytemplate?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutioncomponentattributeconfigurationid?: string | null;
  solutionid?: string | null;
  statecode?: solutioncomponentattributeconfiguration_statecode | null;
  statuscode?: solutioncomponentattributeconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface solutioncomponentattributeconfiguration_Relationships {
  AttributeId?: Attribute_Result | null;
  solutioncomponentattributeconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  solutioncomponentattributeconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  solutioncomponentattributeconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  solutioncomponentattributeconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  solutioncomponentattributeconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  solutioncomponentattributeconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  solutioncomponentattributeconfiguration_SyncErrors?: SyncError_Result[] | null;
  solutioncomponentattributeconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface solutioncomponentattributeconfiguration extends solutioncomponentattributeconfiguration_Base, solutioncomponentattributeconfiguration_Relationships {
}
interface solutioncomponentattributeconfiguration_Create extends solutioncomponentattributeconfiguration {
  AttributeId_bind$attributes?: string | null;
  solutioncomponentconfigurationid_bind$solutioncomponentconfigurations?: string | null;
}
interface solutioncomponentattributeconfiguration_Update extends solutioncomponentattributeconfiguration {
}
interface solutioncomponentattributeconfiguration_Select {
  attributeid_guid: WebAttribute<solutioncomponentattributeconfiguration_Select, { attributeid_guid: string | null }, { attributeid_formatted?: string }>;
  componentidunique: WebAttribute<solutioncomponentattributeconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<solutioncomponentattributeconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<solutioncomponentattributeconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<solutioncomponentattributeconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<solutioncomponentattributeconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  encodingformat: WebAttribute<solutioncomponentattributeconfiguration_Select, { encodingformat: solutioncomponentattributeconfiguration_encodingformat | null }, { encodingformat_formatted?: string }>;
  fileextension: WebAttribute<solutioncomponentattributeconfiguration_Select, { fileextension: string | null }, {  }>;
  importsequencenumber: WebAttribute<solutioncomponentattributeconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<solutioncomponentattributeconfiguration_Select, { iscustomizable: any | null }, {  }>;
  isenabledfordependencyextraction: WebAttribute<solutioncomponentattributeconfiguration_Select, { isenabledfordependencyextraction: boolean | null }, {  }>;
  isexportdisabled: WebAttribute<solutioncomponentattributeconfiguration_Select, { isexportdisabled: boolean | null }, {  }>;
  isexportedasfile: WebAttribute<solutioncomponentattributeconfiguration_Select, { isexportedasfile: boolean | null }, {  }>;
  ismanaged: WebAttribute<solutioncomponentattributeconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  isprefixedbytemplate: WebAttribute<solutioncomponentattributeconfiguration_Select, { isprefixedbytemplate: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<solutioncomponentattributeconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<solutioncomponentattributeconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<solutioncomponentattributeconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<solutioncomponentattributeconfiguration_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<solutioncomponentattributeconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<solutioncomponentattributeconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<solutioncomponentattributeconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutioncomponentattributeconfigurationid: WebAttribute<solutioncomponentattributeconfiguration_Select, { solutioncomponentattributeconfigurationid: string | null }, {  }>;
  solutioncomponentconfigurationid_guid: WebAttribute<solutioncomponentattributeconfiguration_Select, { solutioncomponentconfigurationid_guid: string | null }, { solutioncomponentconfigurationid_formatted?: string }>;
  solutionid: WebAttribute<solutioncomponentattributeconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<solutioncomponentattributeconfiguration_Select, { statecode: solutioncomponentattributeconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<solutioncomponentattributeconfiguration_Select, { statuscode: solutioncomponentattributeconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<solutioncomponentattributeconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<solutioncomponentattributeconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<solutioncomponentattributeconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<solutioncomponentattributeconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface solutioncomponentattributeconfiguration_Filter {
  attributeid_guid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  encodingformat: solutioncomponentattributeconfiguration_encodingformat;
  fileextension: string;
  importsequencenumber: number;
  iscustomizable: any;
  isenabledfordependencyextraction: boolean;
  isexportdisabled: boolean;
  isexportedasfile: boolean;
  ismanaged: boolean;
  isprefixedbytemplate: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutioncomponentattributeconfigurationid: XQW.Guid;
  solutioncomponentconfigurationid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: solutioncomponentattributeconfiguration_statecode;
  statuscode: solutioncomponentattributeconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface solutioncomponentattributeconfiguration_Expand {
  AttributeId: WebExpand<solutioncomponentattributeconfiguration_Expand, Attribute_Select, Attribute_Filter, { AttributeId: Attribute_Result }>;
  createdby: WebExpand<solutioncomponentattributeconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<solutioncomponentattributeconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<solutioncomponentattributeconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<solutioncomponentattributeconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<solutioncomponentattributeconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  solutioncomponentattributeconfiguration_AsyncOperations: WebExpand<solutioncomponentattributeconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { solutioncomponentattributeconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  solutioncomponentattributeconfiguration_BulkDeleteFailures: WebExpand<solutioncomponentattributeconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { solutioncomponentattributeconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  solutioncomponentattributeconfiguration_DuplicateBaseRecord: WebExpand<solutioncomponentattributeconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { solutioncomponentattributeconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  solutioncomponentattributeconfiguration_DuplicateMatchingRecord: WebExpand<solutioncomponentattributeconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { solutioncomponentattributeconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  solutioncomponentattributeconfiguration_MailboxTrackingFolders: WebExpand<solutioncomponentattributeconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { solutioncomponentattributeconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses: WebExpand<solutioncomponentattributeconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  solutioncomponentattributeconfiguration_ProcessSession: WebExpand<solutioncomponentattributeconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { solutioncomponentattributeconfiguration_ProcessSession: ProcessSession_Result[] }>;
  solutioncomponentattributeconfiguration_SyncErrors: WebExpand<solutioncomponentattributeconfiguration_Expand, SyncError_Select, SyncError_Filter, { solutioncomponentattributeconfiguration_SyncErrors: SyncError_Result[] }>;
  solutioncomponentattributeconfiguration_UserEntityInstanceDatas: WebExpand<solutioncomponentattributeconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { solutioncomponentattributeconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  solutioncomponentconfigurationid: WebExpand<solutioncomponentattributeconfiguration_Expand, solutioncomponentconfiguration_Select, solutioncomponentconfiguration_Filter, { solutioncomponentconfigurationid: solutioncomponentconfiguration_Result }>;
}
interface solutioncomponentattributeconfiguration_FormattedResult {
  attributeid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  encodingformat_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  solutioncomponentconfigurationid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface solutioncomponentattributeconfiguration_Result extends solutioncomponentattributeconfiguration_Base, solutioncomponentattributeconfiguration_Relationships {
  "@odata.etag": string;
  attributeid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  solutioncomponentconfigurationid_guid: string | null;
}
interface solutioncomponentattributeconfiguration_RelatedOne {
  AttributeId: WebMappingRetrieve<Attribute_Select,Attribute_Expand,Attribute_Filter,Attribute_Fixed,Attribute_Result,Attribute_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  solutioncomponentconfigurationid: WebMappingRetrieve<solutioncomponentconfiguration_Select,solutioncomponentconfiguration_Expand,solutioncomponentconfiguration_Filter,solutioncomponentconfiguration_Fixed,solutioncomponentconfiguration_Result,solutioncomponentconfiguration_FormattedResult>;
}
interface solutioncomponentattributeconfiguration_RelatedMany {
  solutioncomponentattributeconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  solutioncomponentattributeconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  solutioncomponentattributeconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  solutioncomponentattributeconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  solutioncomponentattributeconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  solutioncomponentattributeconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  solutioncomponentattributeconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  solutioncomponentattributeconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  solutioncomponentattributeconfigurations: WebMappingRetrieve<solutioncomponentattributeconfiguration_Select,solutioncomponentattributeconfiguration_Expand,solutioncomponentattributeconfiguration_Filter,solutioncomponentattributeconfiguration_Fixed,solutioncomponentattributeconfiguration_Result,solutioncomponentattributeconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  solutioncomponentattributeconfigurations: WebMappingRelated<solutioncomponentattributeconfiguration_RelatedOne,solutioncomponentattributeconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  solutioncomponentattributeconfigurations: WebMappingCUDA<solutioncomponentattributeconfiguration_Create,solutioncomponentattributeconfiguration_Update,solutioncomponentattributeconfiguration_Select>;
}
