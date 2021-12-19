interface AttributeImageConfig_Base extends WebEntity {
  attributeimageconfigid?: string | null;
  attributelogicalname?: string | null;
  canstorefullimage?: boolean | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  parententitylogicalname?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface AttributeImageConfig_Relationships {
  attributeimageconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  attributeimageconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  attributeimageconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  attributeimageconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  attributeimageconfig_SyncErrors?: SyncError_Result[] | null;
  attributeimageconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface AttributeImageConfig extends AttributeImageConfig_Base, AttributeImageConfig_Relationships {
}
interface AttributeImageConfig_Create extends AttributeImageConfig {
}
interface AttributeImageConfig_Update extends AttributeImageConfig {
}
interface AttributeImageConfig_Select {
  attributeimageconfigid: WebAttribute<AttributeImageConfig_Select, { attributeimageconfigid: string | null }, {  }>;
  attributelogicalname: WebAttribute<AttributeImageConfig_Select, { attributelogicalname: string | null }, {  }>;
  canstorefullimage: WebAttribute<AttributeImageConfig_Select, { canstorefullimage: boolean | null }, {  }>;
  componentidunique: WebAttribute<AttributeImageConfig_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<AttributeImageConfig_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  ismanaged: WebAttribute<AttributeImageConfig_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<AttributeImageConfig_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parententitylogicalname: WebAttribute<AttributeImageConfig_Select, { parententitylogicalname: string | null }, {  }>;
  solutionid: WebAttribute<AttributeImageConfig_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<AttributeImageConfig_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<AttributeImageConfig_Select, { versionnumber: number | null }, {  }>;
}
interface AttributeImageConfig_Filter {
  attributeimageconfigid: XQW.Guid;
  attributelogicalname: string;
  canstorefullimage: boolean;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  ismanaged: boolean;
  overwritetime: Date;
  parententitylogicalname: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface AttributeImageConfig_Expand {
  attributeimageconfig_AsyncOperations: WebExpand<AttributeImageConfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { attributeimageconfig_AsyncOperations: AsyncOperation_Result[] }>;
  attributeimageconfig_BulkDeleteFailures: WebExpand<AttributeImageConfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { attributeimageconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  attributeimageconfig_MailboxTrackingFolders: WebExpand<AttributeImageConfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { attributeimageconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  attributeimageconfig_PrincipalObjectAttributeAccesses: WebExpand<AttributeImageConfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { attributeimageconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  attributeimageconfig_SyncErrors: WebExpand<AttributeImageConfig_Expand, SyncError_Select, SyncError_Filter, { attributeimageconfig_SyncErrors: SyncError_Result[] }>;
  attributeimageconfig_UserEntityInstanceDatas: WebExpand<AttributeImageConfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { attributeimageconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface AttributeImageConfig_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface AttributeImageConfig_Result extends AttributeImageConfig_Base, AttributeImageConfig_Relationships {
  "@odata.etag": string;
}
interface AttributeImageConfig_RelatedOne {
}
interface AttributeImageConfig_RelatedMany {
  attributeimageconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  attributeimageconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  attributeimageconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  attributeimageconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  attributeimageconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  attributeimageconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  attributeimageconfigs: WebMappingRetrieve<AttributeImageConfig_Select,AttributeImageConfig_Expand,AttributeImageConfig_Filter,AttributeImageConfig_Fixed,AttributeImageConfig_Result,AttributeImageConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  attributeimageconfigs: WebMappingRelated<AttributeImageConfig_RelatedOne,AttributeImageConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  attributeimageconfigs: WebMappingCUDA<AttributeImageConfig_Create,AttributeImageConfig_Update,AttributeImageConfig_Select>;
}
