interface msdyn_invoicefrequencydetail_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_dayofmonth?: msdyn_dayofmonth | null;
  msdyn_invoicefrequencydetailid?: string | null;
  msdyn_name?: string | null;
  msdyn_occurrenceofweekday?: msdyn_occurrenceofweekday | null;
  msdyn_weekday?: msdyn_weekday | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_invoicefrequencydetail_statecode | null;
  statuscode?: msdyn_invoicefrequencydetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_invoicefrequencydetail_Relationships {
  msdyn_invoicefrequencydetail_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_invoicefrequencydetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_invoicefrequencydetail_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_invoicefrequencydetail_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_invoicefrequencydetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_invoicefrequencydetail_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_invoicefrequencydetail_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_invoicefrequencydetail_SyncErrors?: SyncError_Result[] | null;
  msdyn_invoicefrequencydetail_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_invoicefrequencydetail extends msdyn_invoicefrequencydetail_Base, msdyn_invoicefrequencydetail_Relationships {
  msdyn_invoicefrequency_bind$msdyn_invoicefrequencies?: string | null;
}
interface msdyn_invoicefrequencydetail_Create extends msdyn_invoicefrequencydetail {
}
interface msdyn_invoicefrequencydetail_Update extends msdyn_invoicefrequencydetail {
}
interface msdyn_invoicefrequencydetail_Select {
  createdby_guid: WebAttribute<msdyn_invoicefrequencydetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_invoicefrequencydetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_invoicefrequencydetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_invoicefrequencydetail_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_invoicefrequencydetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_invoicefrequencydetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_invoicefrequencydetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_dayofmonth: WebAttribute<msdyn_invoicefrequencydetail_Select, { msdyn_dayofmonth: msdyn_dayofmonth | null }, { msdyn_dayofmonth_formatted?: string }>;
  msdyn_invoicefrequency_guid: WebAttribute<msdyn_invoicefrequencydetail_Select, { msdyn_invoicefrequency_guid: string | null }, { msdyn_invoicefrequency_formatted?: string }>;
  msdyn_invoicefrequencydetailid: WebAttribute<msdyn_invoicefrequencydetail_Select, { msdyn_invoicefrequencydetailid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_invoicefrequencydetail_Select, { msdyn_name: string | null }, {  }>;
  msdyn_occurrenceofweekday: WebAttribute<msdyn_invoicefrequencydetail_Select, { msdyn_occurrenceofweekday: msdyn_occurrenceofweekday | null }, { msdyn_occurrenceofweekday_formatted?: string }>;
  msdyn_weekday: WebAttribute<msdyn_invoicefrequencydetail_Select, { msdyn_weekday: msdyn_weekday | null }, { msdyn_weekday_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_invoicefrequencydetail_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_invoicefrequencydetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_invoicefrequencydetail_Select, { statecode: msdyn_invoicefrequencydetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_invoicefrequencydetail_Select, { statuscode: msdyn_invoicefrequencydetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_invoicefrequencydetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_invoicefrequencydetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_invoicefrequencydetail_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_invoicefrequencydetail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_dayofmonth: msdyn_dayofmonth;
  msdyn_invoicefrequency_guid: XQW.Guid;
  msdyn_invoicefrequencydetailid: XQW.Guid;
  msdyn_name: string;
  msdyn_occurrenceofweekday: msdyn_occurrenceofweekday;
  msdyn_weekday: msdyn_weekday;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_invoicefrequencydetail_statecode;
  statuscode: msdyn_invoicefrequencydetail_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_invoicefrequencydetail_Expand {
  createdby: WebExpand<msdyn_invoicefrequencydetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_invoicefrequencydetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_invoicefrequencydetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_invoicefrequencydetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_invoicefrequency: WebExpand<msdyn_invoicefrequencydetail_Expand, msdyn_invoicefrequency_Select, msdyn_invoicefrequency_Filter, { msdyn_invoicefrequency: msdyn_invoicefrequency_Result }>;
  msdyn_invoicefrequencydetail_AsyncOperations: WebExpand<msdyn_invoicefrequencydetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_invoicefrequencydetail_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_invoicefrequencydetail_BulkDeleteFailures: WebExpand<msdyn_invoicefrequencydetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_invoicefrequencydetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_invoicefrequencydetail_DuplicateBaseRecord: WebExpand<msdyn_invoicefrequencydetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_invoicefrequencydetail_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_invoicefrequencydetail_DuplicateMatchingRecord: WebExpand<msdyn_invoicefrequencydetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_invoicefrequencydetail_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_invoicefrequencydetail_MailboxTrackingFolders: WebExpand<msdyn_invoicefrequencydetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_invoicefrequencydetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_invoicefrequencydetail_PrincipalObjectAttributeAccesses: WebExpand<msdyn_invoicefrequencydetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_invoicefrequencydetail_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_invoicefrequencydetail_ProcessSession: WebExpand<msdyn_invoicefrequencydetail_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_invoicefrequencydetail_ProcessSession: ProcessSession_Result[] }>;
  msdyn_invoicefrequencydetail_SyncErrors: WebExpand<msdyn_invoicefrequencydetail_Expand, SyncError_Select, SyncError_Filter, { msdyn_invoicefrequencydetail_SyncErrors: SyncError_Result[] }>;
  msdyn_invoicefrequencydetail_UserEntityInstanceDatas: WebExpand<msdyn_invoicefrequencydetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_invoicefrequencydetail_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_invoicefrequencydetail_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_invoicefrequencydetail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_dayofmonth_formatted?: string;
  msdyn_invoicefrequency_formatted?: string;
  msdyn_occurrenceofweekday_formatted?: string;
  msdyn_weekday_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_invoicefrequencydetail_Result extends msdyn_invoicefrequencydetail_Base, msdyn_invoicefrequencydetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_invoicefrequency_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_invoicefrequencydetail_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_invoicefrequency: WebMappingRetrieve<msdyn_invoicefrequency_Select,msdyn_invoicefrequency_Expand,msdyn_invoicefrequency_Filter,msdyn_invoicefrequency_Fixed,msdyn_invoicefrequency_Result,msdyn_invoicefrequency_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_invoicefrequencydetail_RelatedMany {
  msdyn_invoicefrequencydetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_invoicefrequencydetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_invoicefrequencydetail_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_invoicefrequencydetail_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_invoicefrequencydetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_invoicefrequencydetail_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_invoicefrequencydetail_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_invoicefrequencydetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_invoicefrequencydetail_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_invoicefrequencydetails: WebMappingRetrieve<msdyn_invoicefrequencydetail_Select,msdyn_invoicefrequencydetail_Expand,msdyn_invoicefrequencydetail_Filter,msdyn_invoicefrequencydetail_Fixed,msdyn_invoicefrequencydetail_Result,msdyn_invoicefrequencydetail_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_invoicefrequencydetails: WebMappingRelated<msdyn_invoicefrequencydetail_RelatedOne,msdyn_invoicefrequencydetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_invoicefrequencydetails: WebMappingCUDA<msdyn_invoicefrequencydetail_Create,msdyn_invoicefrequencydetail_Update,msdyn_invoicefrequencydetail_Select>;
}
