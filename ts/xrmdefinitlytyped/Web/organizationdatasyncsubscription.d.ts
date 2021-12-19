interface organizationdatasyncsubscription_Base extends WebEntity {
  aadapplicationid?: string | null;
  blobpartitionby?: organizationdatasyncsubscription_blobpartitionby | null;
  cansyncallmetadata?: boolean | null;
  createdon?: Date | null;
  dataendpointpostingtype?: organizationdatasyncsubscription_dataendpointpostingtype | null;
  dataprocessingtype?: organizationdatasyncsubscription_dataprocessingtype | null;
  endpointsettings?: string | null;
  entityfilters?: string | null;
  importsequencenumber?: number | null;
  isoutofboxsubscription?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  needcopyattachmentstoblob?: boolean | null;
  organizationdatasyncsubscriptionid?: string | null;
  overriddencreatedon?: Date | null;
  partnerprefix?: string | null;
  statecode?: organizationdatasyncsubscription_statecode | null;
  statuscode?: organizationdatasyncsubscription_statuscode | null;
  subscriptionendpointstatus?: number | null;
  subscriptionentities?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface organizationdatasyncsubscription_Relationships {
  organizationdatasyncsubscription_AsyncOperations?: AsyncOperation_Result[] | null;
  organizationdatasyncsubscription_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  organizationdatasyncsubscription_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  organizationdatasyncsubscription_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  organizationdatasyncsubscription_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  organizationdatasyncsubscription_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  organizationdatasyncsubscription_ProcessSession?: ProcessSession_Result[] | null;
  organizationdatasyncsubscription_SyncErrors?: SyncError_Result[] | null;
  organizationdatasyncsubscription_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  subscription_subscriptionentity?: organizationdatasyncsubscriptionentity_Result[] | null;
}
interface organizationdatasyncsubscription extends organizationdatasyncsubscription_Base, organizationdatasyncsubscription_Relationships {
}
interface organizationdatasyncsubscription_Create extends organizationdatasyncsubscription {
}
interface organizationdatasyncsubscription_Update extends organizationdatasyncsubscription {
}
interface organizationdatasyncsubscription_Select {
  aadapplicationid: WebAttribute<organizationdatasyncsubscription_Select, { aadapplicationid: string | null }, {  }>;
  blobpartitionby: WebAttribute<organizationdatasyncsubscription_Select, { blobpartitionby: organizationdatasyncsubscription_blobpartitionby | null }, { blobpartitionby_formatted?: string }>;
  cansyncallmetadata: WebAttribute<organizationdatasyncsubscription_Select, { cansyncallmetadata: boolean | null }, {  }>;
  createdby_guid: WebAttribute<organizationdatasyncsubscription_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<organizationdatasyncsubscription_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<organizationdatasyncsubscription_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dataendpointpostingtype: WebAttribute<organizationdatasyncsubscription_Select, { dataendpointpostingtype: organizationdatasyncsubscription_dataendpointpostingtype | null }, { dataendpointpostingtype_formatted?: string }>;
  dataprocessingtype: WebAttribute<organizationdatasyncsubscription_Select, { dataprocessingtype: organizationdatasyncsubscription_dataprocessingtype | null }, { dataprocessingtype_formatted?: string }>;
  endpointsettings: WebAttribute<organizationdatasyncsubscription_Select, { endpointsettings: string | null }, {  }>;
  entityfilters: WebAttribute<organizationdatasyncsubscription_Select, { entityfilters: string | null }, {  }>;
  importsequencenumber: WebAttribute<organizationdatasyncsubscription_Select, { importsequencenumber: number | null }, {  }>;
  isoutofboxsubscription: WebAttribute<organizationdatasyncsubscription_Select, { isoutofboxsubscription: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<organizationdatasyncsubscription_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<organizationdatasyncsubscription_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<organizationdatasyncsubscription_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<organizationdatasyncsubscription_Select, { name: string | null }, {  }>;
  needcopyattachmentstoblob: WebAttribute<organizationdatasyncsubscription_Select, { needcopyattachmentstoblob: boolean | null }, {  }>;
  organizationdatasyncsubscriptionid: WebAttribute<organizationdatasyncsubscription_Select, { organizationdatasyncsubscriptionid: string | null }, {  }>;
  organizationid_guid: WebAttribute<organizationdatasyncsubscription_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<organizationdatasyncsubscription_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  partnerprefix: WebAttribute<organizationdatasyncsubscription_Select, { partnerprefix: string | null }, {  }>;
  statecode: WebAttribute<organizationdatasyncsubscription_Select, { statecode: organizationdatasyncsubscription_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<organizationdatasyncsubscription_Select, { statuscode: organizationdatasyncsubscription_statuscode | null }, { statuscode_formatted?: string }>;
  subscriptionendpointstatus: WebAttribute<organizationdatasyncsubscription_Select, { subscriptionendpointstatus: number | null }, {  }>;
  subscriptionentities: WebAttribute<organizationdatasyncsubscription_Select, { subscriptionentities: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<organizationdatasyncsubscription_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<organizationdatasyncsubscription_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<organizationdatasyncsubscription_Select, { versionnumber: number | null }, {  }>;
}
interface organizationdatasyncsubscription_Filter {
  aadapplicationid: string;
  blobpartitionby: organizationdatasyncsubscription_blobpartitionby;
  cansyncallmetadata: boolean;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dataendpointpostingtype: organizationdatasyncsubscription_dataendpointpostingtype;
  dataprocessingtype: organizationdatasyncsubscription_dataprocessingtype;
  endpointsettings: string;
  entityfilters: string;
  importsequencenumber: number;
  isoutofboxsubscription: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  needcopyattachmentstoblob: boolean;
  organizationdatasyncsubscriptionid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  partnerprefix: string;
  statecode: organizationdatasyncsubscription_statecode;
  statuscode: organizationdatasyncsubscription_statuscode;
  subscriptionendpointstatus: number;
  subscriptionentities: string;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface organizationdatasyncsubscription_Expand {
  createdby: WebExpand<organizationdatasyncsubscription_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<organizationdatasyncsubscription_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<organizationdatasyncsubscription_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<organizationdatasyncsubscription_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationdatasyncsubscription_AsyncOperations: WebExpand<organizationdatasyncsubscription_Expand, AsyncOperation_Select, AsyncOperation_Filter, { organizationdatasyncsubscription_AsyncOperations: AsyncOperation_Result[] }>;
  organizationdatasyncsubscription_BulkDeleteFailures: WebExpand<organizationdatasyncsubscription_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { organizationdatasyncsubscription_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  organizationdatasyncsubscription_DuplicateBaseRecord: WebExpand<organizationdatasyncsubscription_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { organizationdatasyncsubscription_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  organizationdatasyncsubscription_DuplicateMatchingRecord: WebExpand<organizationdatasyncsubscription_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { organizationdatasyncsubscription_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  organizationdatasyncsubscription_MailboxTrackingFolders: WebExpand<organizationdatasyncsubscription_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { organizationdatasyncsubscription_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  organizationdatasyncsubscription_PrincipalObjectAttributeAccesses: WebExpand<organizationdatasyncsubscription_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { organizationdatasyncsubscription_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  organizationdatasyncsubscription_ProcessSession: WebExpand<organizationdatasyncsubscription_Expand, ProcessSession_Select, ProcessSession_Filter, { organizationdatasyncsubscription_ProcessSession: ProcessSession_Result[] }>;
  organizationdatasyncsubscription_SyncErrors: WebExpand<organizationdatasyncsubscription_Expand, SyncError_Select, SyncError_Filter, { organizationdatasyncsubscription_SyncErrors: SyncError_Result[] }>;
  organizationdatasyncsubscription_UserEntityInstanceDatas: WebExpand<organizationdatasyncsubscription_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { organizationdatasyncsubscription_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<organizationdatasyncsubscription_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  subscription_subscriptionentity: WebExpand<organizationdatasyncsubscription_Expand, organizationdatasyncsubscriptionentity_Select, organizationdatasyncsubscriptionentity_Filter, { subscription_subscriptionentity: organizationdatasyncsubscriptionentity_Result[] }>;
}
interface organizationdatasyncsubscription_FormattedResult {
  blobpartitionby_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  dataendpointpostingtype_formatted?: string;
  dataprocessingtype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface organizationdatasyncsubscription_Result extends organizationdatasyncsubscription_Base, organizationdatasyncsubscription_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface organizationdatasyncsubscription_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface organizationdatasyncsubscription_RelatedMany {
  organizationdatasyncsubscription_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  organizationdatasyncsubscription_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  organizationdatasyncsubscription_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  organizationdatasyncsubscription_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  organizationdatasyncsubscription_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  organizationdatasyncsubscription_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  organizationdatasyncsubscription_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  organizationdatasyncsubscription_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  organizationdatasyncsubscription_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  subscription_subscriptionentity: WebMappingRetrieve<organizationdatasyncsubscriptionentity_Select,organizationdatasyncsubscriptionentity_Expand,organizationdatasyncsubscriptionentity_Filter,organizationdatasyncsubscriptionentity_Fixed,organizationdatasyncsubscriptionentity_Result,organizationdatasyncsubscriptionentity_FormattedResult>;
}
interface WebEntitiesRetrieve {
  organizationdatasyncsubscriptions: WebMappingRetrieve<organizationdatasyncsubscription_Select,organizationdatasyncsubscription_Expand,organizationdatasyncsubscription_Filter,organizationdatasyncsubscription_Fixed,organizationdatasyncsubscription_Result,organizationdatasyncsubscription_FormattedResult>;
}
interface WebEntitiesRelated {
  organizationdatasyncsubscriptions: WebMappingRelated<organizationdatasyncsubscription_RelatedOne,organizationdatasyncsubscription_RelatedMany>;
}
interface WebEntitiesCUDA {
  organizationdatasyncsubscriptions: WebMappingCUDA<organizationdatasyncsubscription_Create,organizationdatasyncsubscription_Update,organizationdatasyncsubscription_Select>;
}
