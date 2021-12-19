interface SalesLiteratureItem_Base extends WebEntity {
  abstract?: string | null;
  attacheddocumenturl?: string | null;
  authorname?: string | null;
  createdon?: Date | null;
  documentbody?: string | null;
  filename?: string | null;
  filesize?: number | null;
  filetype?: number | null;
  filetypecode?: salesliteratureitem_filetypecode | null;
  importsequencenumber?: number | null;
  iscustomerviewable?: boolean | null;
  keywords?: string | null;
  mimetype?: string | null;
  mode?: string | null;
  modifiedon?: Date | null;
  organizationid?: string | null;
  overriddencreatedon?: Date | null;
  salesliteratureitemid?: string | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface SalesLiteratureItem_Relationships {
  SalesLiteratureItem_AsyncOperations?: AsyncOperation_Result[] | null;
  SalesLiteratureItem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  SalesLiteratureItem_ProcessSessions?: ProcessSession_Result[] | null;
  salesliteratureitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  salesliteratureitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  salesliteratureitem_SyncErrors?: SyncError_Result[] | null;
  userentityinstancedata_salesliteratureitem?: UserEntityInstanceData_Result[] | null;
}
interface SalesLiteratureItem extends SalesLiteratureItem_Base, SalesLiteratureItem_Relationships {
}
interface SalesLiteratureItem_Create extends SalesLiteratureItem {
  salesliteratureid_bind$salesliteratures?: string | null;
}
interface SalesLiteratureItem_Update extends SalesLiteratureItem {
}
interface SalesLiteratureItem_Select {
  abstract: WebAttribute<SalesLiteratureItem_Select, { abstract: string | null }, {  }>;
  attacheddocumenturl: WebAttribute<SalesLiteratureItem_Select, { attacheddocumenturl: string | null }, {  }>;
  authorname: WebAttribute<SalesLiteratureItem_Select, { authorname: string | null }, {  }>;
  createdby_guid: WebAttribute<SalesLiteratureItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SalesLiteratureItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SalesLiteratureItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  documentbody: WebAttribute<SalesLiteratureItem_Select, { documentbody: string | null }, {  }>;
  filename: WebAttribute<SalesLiteratureItem_Select, { filename: string | null }, {  }>;
  filesize: WebAttribute<SalesLiteratureItem_Select, { filesize: number | null }, {  }>;
  filetype: WebAttribute<SalesLiteratureItem_Select, { filetype: number | null }, {  }>;
  filetypecode: WebAttribute<SalesLiteratureItem_Select, { filetypecode: salesliteratureitem_filetypecode | null }, { filetypecode_formatted?: string }>;
  importsequencenumber: WebAttribute<SalesLiteratureItem_Select, { importsequencenumber: number | null }, {  }>;
  iscustomerviewable: WebAttribute<SalesLiteratureItem_Select, { iscustomerviewable: boolean | null }, {  }>;
  keywords: WebAttribute<SalesLiteratureItem_Select, { keywords: string | null }, {  }>;
  mimetype: WebAttribute<SalesLiteratureItem_Select, { mimetype: string | null }, {  }>;
  mode: WebAttribute<SalesLiteratureItem_Select, { mode: string | null }, {  }>;
  modifiedby_guid: WebAttribute<SalesLiteratureItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SalesLiteratureItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SalesLiteratureItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid: WebAttribute<SalesLiteratureItem_Select, { organizationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<SalesLiteratureItem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  salesliteratureid_guid: WebAttribute<SalesLiteratureItem_Select, { salesliteratureid_guid: string | null }, { salesliteratureid_formatted?: string }>;
  salesliteratureitemid: WebAttribute<SalesLiteratureItem_Select, { salesliteratureitemid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<SalesLiteratureItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<SalesLiteratureItem_Select, { title: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SalesLiteratureItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<SalesLiteratureItem_Select, { versionnumber: number | null }, {  }>;
}
interface SalesLiteratureItem_Filter {
  abstract: string;
  attacheddocumenturl: string;
  authorname: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  documentbody: string;
  filename: string;
  filesize: number;
  filetype: number;
  filetypecode: salesliteratureitem_filetypecode;
  importsequencenumber: number;
  iscustomerviewable: boolean;
  keywords: string;
  mimetype: string;
  mode: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid: XQW.Guid;
  overriddencreatedon: Date;
  salesliteratureid_guid: XQW.Guid;
  salesliteratureitemid: XQW.Guid;
  timezoneruleversionnumber: number;
  title: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface SalesLiteratureItem_Expand {
  SalesLiteratureItem_AsyncOperations: WebExpand<SalesLiteratureItem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { SalesLiteratureItem_AsyncOperations: AsyncOperation_Result[] }>;
  SalesLiteratureItem_BulkDeleteFailures: WebExpand<SalesLiteratureItem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { SalesLiteratureItem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  SalesLiteratureItem_ProcessSessions: WebExpand<SalesLiteratureItem_Expand, ProcessSession_Select, ProcessSession_Filter, { SalesLiteratureItem_ProcessSessions: ProcessSession_Result[] }>;
  createdby: WebExpand<SalesLiteratureItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SalesLiteratureItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SalesLiteratureItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SalesLiteratureItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  salesliteratureid: WebExpand<SalesLiteratureItem_Expand, SalesLiterature_Select, SalesLiterature_Filter, { salesliteratureid: SalesLiterature_Result }>;
  salesliteratureitem_MailboxTrackingFolders: WebExpand<SalesLiteratureItem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { salesliteratureitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  salesliteratureitem_PrincipalObjectAttributeAccesses: WebExpand<SalesLiteratureItem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { salesliteratureitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  salesliteratureitem_SyncErrors: WebExpand<SalesLiteratureItem_Expand, SyncError_Select, SyncError_Filter, { salesliteratureitem_SyncErrors: SyncError_Result[] }>;
  userentityinstancedata_salesliteratureitem: WebExpand<SalesLiteratureItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_salesliteratureitem: UserEntityInstanceData_Result[] }>;
}
interface SalesLiteratureItem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  filetypecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  salesliteratureid_formatted?: string;
}
interface SalesLiteratureItem_Result extends SalesLiteratureItem_Base, SalesLiteratureItem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  salesliteratureid_guid: string | null;
}
interface SalesLiteratureItem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  salesliteratureid: WebMappingRetrieve<SalesLiterature_Select,SalesLiterature_Expand,SalesLiterature_Filter,SalesLiterature_Fixed,SalesLiterature_Result,SalesLiterature_FormattedResult>;
}
interface SalesLiteratureItem_RelatedMany {
  SalesLiteratureItem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  SalesLiteratureItem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  SalesLiteratureItem_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  salesliteratureitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  salesliteratureitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  salesliteratureitem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_salesliteratureitem: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  salesliteratureitems: WebMappingRetrieve<SalesLiteratureItem_Select,SalesLiteratureItem_Expand,SalesLiteratureItem_Filter,SalesLiteratureItem_Fixed,SalesLiteratureItem_Result,SalesLiteratureItem_FormattedResult>;
}
interface WebEntitiesRelated {
  salesliteratureitems: WebMappingRelated<SalesLiteratureItem_RelatedOne,SalesLiteratureItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  salesliteratureitems: WebMappingCUDA<SalesLiteratureItem_Create,SalesLiteratureItem_Update,SalesLiteratureItem_Select>;
}
