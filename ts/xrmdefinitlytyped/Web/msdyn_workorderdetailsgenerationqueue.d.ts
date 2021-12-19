interface msdyn_workorderdetailsgenerationqueue_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_booking?: string | null;
  msdyn_exceptionmessage?: string | null;
  msdyn_exceptiontrace?: string | null;
  msdyn_name?: string | null;
  msdyn_processed?: boolean | null;
  msdyn_schdateownerid?: string | null;
  msdyn_workorderdetails?: string | null;
  msdyn_workorderdetailsgenerationqueueid?: string | null;
  msdyn_workorderid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_workorderdetailsgenerationqueue_statecode | null;
  statuscode?: msdyn_workorderdetailsgenerationqueue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_workorderdetailsgenerationqueue_Relationships {
  msdyn_workorderdetailsgenerationqueue_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_workorderdetailsgenerationqueue_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_workorderdetailsgenerationqueue_SyncErrors?: SyncError_Result[] | null;
  msdyn_workorderdetailsgenerationqueue_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_workorderdetailsgenerationqueue extends msdyn_workorderdetailsgenerationqueue_Base, msdyn_workorderdetailsgenerationqueue_Relationships {
  msdyn_agreementbookingdate_bind$msdyn_agreementbookingdates?: string | null;
}
interface msdyn_workorderdetailsgenerationqueue_Create extends msdyn_workorderdetailsgenerationqueue {
}
interface msdyn_workorderdetailsgenerationqueue_Update extends msdyn_workorderdetailsgenerationqueue {
}
interface msdyn_workorderdetailsgenerationqueue_Select {
  createdby_guid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agreementbookingdate_guid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_agreementbookingdate_guid: string | null }, { msdyn_agreementbookingdate_formatted?: string }>;
  msdyn_booking: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_booking: string | null }, {  }>;
  msdyn_exceptionmessage: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_exceptionmessage: string | null }, {  }>;
  msdyn_exceptiontrace: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_exceptiontrace: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_name: string | null }, {  }>;
  msdyn_processed: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_processed: boolean | null }, {  }>;
  msdyn_schdateownerid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_schdateownerid: string | null }, {  }>;
  msdyn_workorderdetails: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_workorderdetails: string | null }, {  }>;
  msdyn_workorderdetailsgenerationqueueid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_workorderdetailsgenerationqueueid: string | null }, {  }>;
  msdyn_workorderid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { msdyn_workorderid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { statecode: msdyn_workorderdetailsgenerationqueue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { statuscode: msdyn_workorderdetailsgenerationqueue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_workorderdetailsgenerationqueue_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_workorderdetailsgenerationqueue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agreementbookingdate_guid: XQW.Guid;
  msdyn_booking: string;
  msdyn_exceptionmessage: string;
  msdyn_exceptiontrace: string;
  msdyn_name: string;
  msdyn_processed: boolean;
  msdyn_schdateownerid: string;
  msdyn_workorderdetails: string;
  msdyn_workorderdetailsgenerationqueueid: XQW.Guid;
  msdyn_workorderid: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_workorderdetailsgenerationqueue_statecode;
  statuscode: msdyn_workorderdetailsgenerationqueue_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_workorderdetailsgenerationqueue_Expand {
  createdby: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_agreementbookingdate: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, msdyn_agreementbookingdate_Select, msdyn_agreementbookingdate_Filter, { msdyn_agreementbookingdate: msdyn_agreementbookingdate_Result }>;
  msdyn_workorderdetailsgenerationqueue_AsyncOperations: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_workorderdetailsgenerationqueue_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_workorderdetailsgenerationqueue_ProcessSession: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_workorderdetailsgenerationqueue_ProcessSession: ProcessSession_Result[] }>;
  msdyn_workorderdetailsgenerationqueue_SyncErrors: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, SyncError_Select, SyncError_Filter, { msdyn_workorderdetailsgenerationqueue_SyncErrors: SyncError_Result[] }>;
  msdyn_workorderdetailsgenerationqueue_UserEntityInstanceDatas: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_workorderdetailsgenerationqueue_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_workorderdetailsgenerationqueue_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_workorderdetailsgenerationqueue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreementbookingdate_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_workorderdetailsgenerationqueue_Result extends msdyn_workorderdetailsgenerationqueue_Base, msdyn_workorderdetailsgenerationqueue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreementbookingdate_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_workorderdetailsgenerationqueue_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_agreementbookingdate: WebMappingRetrieve<msdyn_agreementbookingdate_Select,msdyn_agreementbookingdate_Expand,msdyn_agreementbookingdate_Filter,msdyn_agreementbookingdate_Fixed,msdyn_agreementbookingdate_Result,msdyn_agreementbookingdate_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_workorderdetailsgenerationqueue_RelatedMany {
  msdyn_workorderdetailsgenerationqueue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_workorderdetailsgenerationqueue_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_workorderdetailsgenerationqueue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_workorderdetailsgenerationqueue_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_workorderdetailsgenerationqueues: WebMappingRetrieve<msdyn_workorderdetailsgenerationqueue_Select,msdyn_workorderdetailsgenerationqueue_Expand,msdyn_workorderdetailsgenerationqueue_Filter,msdyn_workorderdetailsgenerationqueue_Fixed,msdyn_workorderdetailsgenerationqueue_Result,msdyn_workorderdetailsgenerationqueue_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workorderdetailsgenerationqueues: WebMappingRelated<msdyn_workorderdetailsgenerationqueue_RelatedOne,msdyn_workorderdetailsgenerationqueue_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workorderdetailsgenerationqueues: WebMappingCUDA<msdyn_workorderdetailsgenerationqueue_Create,msdyn_workorderdetailsgenerationqueue_Update,msdyn_workorderdetailsgenerationqueue_Select>;
}
