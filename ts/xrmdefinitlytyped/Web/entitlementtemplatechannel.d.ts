interface EntitlementTemplateChannel_Base extends WebEntity {
  channel?: incident_caseorigincode | null;
  createdon?: Date | null;
  entitlementtemplatechannelid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  totalterms?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface EntitlementTemplateChannel_Relationships {
  entitlementtemplatechannel_AsyncOperations?: AsyncOperation_Result[] | null;
  entitlementtemplatechannel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entitlementtemplatechannel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entitlementtemplatechannel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entitlementtemplatechannel_SyncErrors?: SyncError_Result[] | null;
  entitlementtemplatechannel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  entitlementtemplatechannel_connections1?: Connection_Result[] | null;
  entitlementtemplatechannel_connections2?: Connection_Result[] | null;
}
interface EntitlementTemplateChannel extends EntitlementTemplateChannel_Base, EntitlementTemplateChannel_Relationships {
  entitlementtemplateid_bind$entitlementtemplates?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface EntitlementTemplateChannel_Create extends EntitlementTemplateChannel {
}
interface EntitlementTemplateChannel_Update extends EntitlementTemplateChannel {
}
interface EntitlementTemplateChannel_Select {
  channel: WebAttribute<EntitlementTemplateChannel_Select, { channel: incident_caseorigincode | null }, { channel_formatted?: string }>;
  createdby_guid: WebAttribute<EntitlementTemplateChannel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<EntitlementTemplateChannel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<EntitlementTemplateChannel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entitlementtemplatechannelid: WebAttribute<EntitlementTemplateChannel_Select, { entitlementtemplatechannelid: string | null }, {  }>;
  entitlementtemplateid_guid: WebAttribute<EntitlementTemplateChannel_Select, { entitlementtemplateid_guid: string | null }, { entitlementtemplateid_formatted?: string }>;
  exchangerate: WebAttribute<EntitlementTemplateChannel_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<EntitlementTemplateChannel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<EntitlementTemplateChannel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<EntitlementTemplateChannel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<EntitlementTemplateChannel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<EntitlementTemplateChannel_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<EntitlementTemplateChannel_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<EntitlementTemplateChannel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<EntitlementTemplateChannel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  totalterms: WebAttribute<EntitlementTemplateChannel_Select, { totalterms: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<EntitlementTemplateChannel_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<EntitlementTemplateChannel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<EntitlementTemplateChannel_Select, { versionnumber: number | null }, {  }>;
}
interface EntitlementTemplateChannel_Filter {
  channel: incident_caseorigincode;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entitlementtemplatechannelid: XQW.Guid;
  entitlementtemplateid_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  totalterms: any;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface EntitlementTemplateChannel_Expand {
  createdby: WebExpand<EntitlementTemplateChannel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<EntitlementTemplateChannel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entitlementtemplatechannel_AsyncOperations: WebExpand<EntitlementTemplateChannel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entitlementtemplatechannel_AsyncOperations: AsyncOperation_Result[] }>;
  entitlementtemplatechannel_BulkDeleteFailures: WebExpand<EntitlementTemplateChannel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entitlementtemplatechannel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entitlementtemplatechannel_MailboxTrackingFolders: WebExpand<EntitlementTemplateChannel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entitlementtemplatechannel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entitlementtemplatechannel_PrincipalObjectAttributeAccesses: WebExpand<EntitlementTemplateChannel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entitlementtemplatechannel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entitlementtemplatechannel_SyncErrors: WebExpand<EntitlementTemplateChannel_Expand, SyncError_Select, SyncError_Filter, { entitlementtemplatechannel_SyncErrors: SyncError_Result[] }>;
  entitlementtemplatechannel_UserEntityInstanceDatas: WebExpand<EntitlementTemplateChannel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entitlementtemplatechannel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  entitlementtemplatechannel_connections1: WebExpand<EntitlementTemplateChannel_Expand, Connection_Select, Connection_Filter, { entitlementtemplatechannel_connections1: Connection_Result[] }>;
  entitlementtemplatechannel_connections2: WebExpand<EntitlementTemplateChannel_Expand, Connection_Select, Connection_Filter, { entitlementtemplatechannel_connections2: Connection_Result[] }>;
  entitlementtemplateid: WebExpand<EntitlementTemplateChannel_Expand, EntitlementTemplate_Select, EntitlementTemplate_Filter, { entitlementtemplateid: EntitlementTemplate_Result }>;
  modifiedby: WebExpand<EntitlementTemplateChannel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<EntitlementTemplateChannel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<EntitlementTemplateChannel_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<EntitlementTemplateChannel_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface EntitlementTemplateChannel_FormattedResult {
  channel_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entitlementtemplateid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface EntitlementTemplateChannel_Result extends EntitlementTemplateChannel_Base, EntitlementTemplateChannel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  entitlementtemplateid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface EntitlementTemplateChannel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entitlementtemplateid: WebMappingRetrieve<EntitlementTemplate_Select,EntitlementTemplate_Expand,EntitlementTemplate_Filter,EntitlementTemplate_Fixed,EntitlementTemplate_Result,EntitlementTemplate_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface EntitlementTemplateChannel_RelatedMany {
  entitlementtemplatechannel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entitlementtemplatechannel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entitlementtemplatechannel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entitlementtemplatechannel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entitlementtemplatechannel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  entitlementtemplatechannel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  entitlementtemplatechannel_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  entitlementtemplatechannel_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitlementtemplatechannels: WebMappingRetrieve<EntitlementTemplateChannel_Select,EntitlementTemplateChannel_Expand,EntitlementTemplateChannel_Filter,EntitlementTemplateChannel_Fixed,EntitlementTemplateChannel_Result,EntitlementTemplateChannel_FormattedResult>;
}
interface WebEntitiesRelated {
  entitlementtemplatechannels: WebMappingRelated<EntitlementTemplateChannel_RelatedOne,EntitlementTemplateChannel_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitlementtemplatechannels: WebMappingCUDA<EntitlementTemplateChannel_Create,EntitlementTemplateChannel_Update,EntitlementTemplateChannel_Select>;
}
