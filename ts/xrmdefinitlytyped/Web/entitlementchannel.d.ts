interface EntitlementChannel_Base extends WebEntity {
  channel?: incident_caseorigincode | null;
  createdon?: Date | null;
  entitlementchannelid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  remainingterms?: number | null;
  timezoneruleversionnumber?: number | null;
  totalterms?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface EntitlementChannel_Relationships {
  entitlementchannel_Annotations?: Annotation_Result[] | null;
  entitlementchannel_AsyncOperations?: AsyncOperation_Result[] | null;
  entitlementchannel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entitlementchannel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  entitlementchannel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  entitlementchannel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entitlementchannel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entitlementchannel_ProcessSession?: ProcessSession_Result[] | null;
  entitlementchannel_SyncErrors?: SyncError_Result[] | null;
  entitlementchannel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  entitlementchannel_connections1?: Connection_Result[] | null;
  entitlementchannel_connections2?: Connection_Result[] | null;
}
interface EntitlementChannel extends EntitlementChannel_Base, EntitlementChannel_Relationships {
  entitlementid_bind$entitlements?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface EntitlementChannel_Create extends EntitlementChannel {
}
interface EntitlementChannel_Update extends EntitlementChannel {
}
interface EntitlementChannel_Select {
  channel: WebAttribute<EntitlementChannel_Select, { channel: incident_caseorigincode | null }, { channel_formatted?: string }>;
  createdby_guid: WebAttribute<EntitlementChannel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<EntitlementChannel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<EntitlementChannel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entitlementchannelid: WebAttribute<EntitlementChannel_Select, { entitlementchannelid: string | null }, {  }>;
  entitlementid_guid: WebAttribute<EntitlementChannel_Select, { entitlementid_guid: string | null }, { entitlementid_formatted?: string }>;
  exchangerate: WebAttribute<EntitlementChannel_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<EntitlementChannel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<EntitlementChannel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<EntitlementChannel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<EntitlementChannel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<EntitlementChannel_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<EntitlementChannel_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<EntitlementChannel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<EntitlementChannel_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<EntitlementChannel_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<EntitlementChannel_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<EntitlementChannel_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  remainingterms: WebAttribute<EntitlementChannel_Select, { remainingterms: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<EntitlementChannel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  totalterms: WebAttribute<EntitlementChannel_Select, { totalterms: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<EntitlementChannel_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<EntitlementChannel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<EntitlementChannel_Select, { versionnumber: number | null }, {  }>;
}
interface EntitlementChannel_Filter {
  channel: incident_caseorigincode;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entitlementchannelid: XQW.Guid;
  entitlementid_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  remainingterms: any;
  timezoneruleversionnumber: number;
  totalterms: any;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface EntitlementChannel_Expand {
  createdby: WebExpand<EntitlementChannel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<EntitlementChannel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entitlementchannel_Annotations: WebExpand<EntitlementChannel_Expand, Annotation_Select, Annotation_Filter, { entitlementchannel_Annotations: Annotation_Result[] }>;
  entitlementchannel_AsyncOperations: WebExpand<EntitlementChannel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entitlementchannel_AsyncOperations: AsyncOperation_Result[] }>;
  entitlementchannel_BulkDeleteFailures: WebExpand<EntitlementChannel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entitlementchannel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entitlementchannel_DuplicateBaseRecord: WebExpand<EntitlementChannel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { entitlementchannel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  entitlementchannel_DuplicateMatchingRecord: WebExpand<EntitlementChannel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { entitlementchannel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  entitlementchannel_MailboxTrackingFolders: WebExpand<EntitlementChannel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entitlementchannel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entitlementchannel_PrincipalObjectAttributeAccesses: WebExpand<EntitlementChannel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entitlementchannel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entitlementchannel_ProcessSession: WebExpand<EntitlementChannel_Expand, ProcessSession_Select, ProcessSession_Filter, { entitlementchannel_ProcessSession: ProcessSession_Result[] }>;
  entitlementchannel_SyncErrors: WebExpand<EntitlementChannel_Expand, SyncError_Select, SyncError_Filter, { entitlementchannel_SyncErrors: SyncError_Result[] }>;
  entitlementchannel_UserEntityInstanceDatas: WebExpand<EntitlementChannel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entitlementchannel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  entitlementchannel_connections1: WebExpand<EntitlementChannel_Expand, Connection_Select, Connection_Filter, { entitlementchannel_connections1: Connection_Result[] }>;
  entitlementchannel_connections2: WebExpand<EntitlementChannel_Expand, Connection_Select, Connection_Filter, { entitlementchannel_connections2: Connection_Result[] }>;
  entitlementid: WebExpand<EntitlementChannel_Expand, Entitlement_Select, Entitlement_Filter, { entitlementid: Entitlement_Result }>;
  modifiedby: WebExpand<EntitlementChannel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<EntitlementChannel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<EntitlementChannel_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  owningteam: WebExpand<EntitlementChannel_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<EntitlementChannel_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<EntitlementChannel_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface EntitlementChannel_FormattedResult {
  channel_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entitlementid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface EntitlementChannel_Result extends EntitlementChannel_Base, EntitlementChannel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  entitlementid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface EntitlementChannel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entitlementid: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface EntitlementChannel_RelatedMany {
  entitlementchannel_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  entitlementchannel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entitlementchannel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entitlementchannel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  entitlementchannel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  entitlementchannel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entitlementchannel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entitlementchannel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  entitlementchannel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  entitlementchannel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  entitlementchannel_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  entitlementchannel_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitlementchannels: WebMappingRetrieve<EntitlementChannel_Select,EntitlementChannel_Expand,EntitlementChannel_Filter,EntitlementChannel_Fixed,EntitlementChannel_Result,EntitlementChannel_FormattedResult>;
}
interface WebEntitiesRelated {
  entitlementchannels: WebMappingRelated<EntitlementChannel_RelatedOne,EntitlementChannel_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitlementchannels: WebMappingCUDA<EntitlementChannel_Create,EntitlementChannel_Update,EntitlementChannel_Select>;
}
