interface Territory_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  territoryid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Territory_Relationships {
  Territory_AsyncOperations?: AsyncOperation_Result[] | null;
  Territory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Territory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  Territory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  Territory_ProcessSessions?: ProcessSession_Result[] | null;
  Territory_SyncErrors?: SyncError_Result[] | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  msdyn_territory_account_ServiceTerritory?: Account_Result[] | null;
  msdyn_territory_msdyn_actual_ServiceTerritory?: msdyn_actual_Result[] | null;
  msdyn_territory_msdyn_agreement_ServiceTerritory?: msdyn_agreement_Result[] | null;
  msdyn_territory_msdyn_postalcode_ServiceTerritory?: msdyn_postalcode_Result[] | null;
  msdyn_territory_msdyn_resourcerequirement_Territory?: msdyn_resourcerequirement_Result[] | null;
  msdyn_territory_msdyn_resourceterritory_Territory?: msdyn_resourceterritory_Result[] | null;
  msdyn_territory_msdyn_workorder_ServiceTerritory?: msdyn_workorder_Result[] | null;
  msdyn_territory_quotedetail_ServiceTerritory?: QuoteDetail_Result[] | null;
  territory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  territory_accounts?: Account_Result[] | null;
  territory_connections1?: Connection_Result[] | null;
  territory_connections2?: Connection_Result[] | null;
  territory_parent_territory?: Territory_Result[] | null;
  territory_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  territory_system_users?: SystemUser_Result[] | null;
  userentityinstancedata_territory?: UserEntityInstanceData_Result[] | null;
}
interface Territory extends Territory_Base, Territory_Relationships {
  managerid_bind$systemusers?: string | null;
  parentterritoryid_bind$territories?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Territory_Create extends Territory {
}
interface Territory_Update extends Territory {
}
interface Territory_Select {
  createdby_guid: WebAttribute<Territory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Territory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Territory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Territory_Select, { description: string | null }, {  }>;
  entityimageid: WebAttribute<Territory_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Territory_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Territory_Select, { importsequencenumber: number | null }, {  }>;
  managerid_guid: WebAttribute<Territory_Select, { managerid_guid: string | null }, { managerid_formatted?: string }>;
  modifiedby_guid: WebAttribute<Territory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Territory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Territory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Territory_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<Territory_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Territory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  parentterritoryid_guid: WebAttribute<Territory_Select, { parentterritoryid_guid: string | null }, { parentterritoryid_formatted?: string }>;
  territoryid: WebAttribute<Territory_Select, { territoryid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Territory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Territory_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<Territory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Territory_Select, { versionnumber: number | null }, {  }>;
}
interface Territory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  managerid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  parentterritoryid_guid: XQW.Guid;
  territoryid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Territory_Expand {
  Territory_AsyncOperations: WebExpand<Territory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Territory_AsyncOperations: AsyncOperation_Result[] }>;
  Territory_BulkDeleteFailures: WebExpand<Territory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Territory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Territory_DuplicateBaseRecord: WebExpand<Territory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Territory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  Territory_DuplicateMatchingRecord: WebExpand<Territory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Territory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  Territory_ProcessSessions: WebExpand<Territory_Expand, ProcessSession_Select, ProcessSession_Filter, { Territory_ProcessSessions: ProcessSession_Result[] }>;
  Territory_SyncErrors: WebExpand<Territory_Expand, SyncError_Select, SyncError_Filter, { Territory_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Territory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Territory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entityimageid_imagedescriptor: WebExpand<Territory_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  managerid: WebExpand<Territory_Expand, SystemUser_Select, SystemUser_Filter, { managerid: SystemUser_Result }>;
  modifiedby: WebExpand<Territory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Territory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_territory_account_ServiceTerritory: WebExpand<Territory_Expand, Account_Select, Account_Filter, { msdyn_territory_account_ServiceTerritory: Account_Result[] }>;
  msdyn_territory_msdyn_actual_ServiceTerritory: WebExpand<Territory_Expand, msdyn_actual_Select, msdyn_actual_Filter, { msdyn_territory_msdyn_actual_ServiceTerritory: msdyn_actual_Result[] }>;
  msdyn_territory_msdyn_agreement_ServiceTerritory: WebExpand<Territory_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_territory_msdyn_agreement_ServiceTerritory: msdyn_agreement_Result[] }>;
  msdyn_territory_msdyn_postalcode_ServiceTerritory: WebExpand<Territory_Expand, msdyn_postalcode_Select, msdyn_postalcode_Filter, { msdyn_territory_msdyn_postalcode_ServiceTerritory: msdyn_postalcode_Result[] }>;
  msdyn_territory_msdyn_resourcerequirement_Territory: WebExpand<Territory_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_territory_msdyn_resourcerequirement_Territory: msdyn_resourcerequirement_Result[] }>;
  msdyn_territory_msdyn_resourceterritory_Territory: WebExpand<Territory_Expand, msdyn_resourceterritory_Select, msdyn_resourceterritory_Filter, { msdyn_territory_msdyn_resourceterritory_Territory: msdyn_resourceterritory_Result[] }>;
  msdyn_territory_msdyn_workorder_ServiceTerritory: WebExpand<Territory_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_territory_msdyn_workorder_ServiceTerritory: msdyn_workorder_Result[] }>;
  msdyn_territory_quotedetail_ServiceTerritory: WebExpand<Territory_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_territory_quotedetail_ServiceTerritory: QuoteDetail_Result[] }>;
  organizationid: WebExpand<Territory_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parentterritoryid: WebExpand<Territory_Expand, Territory_Select, Territory_Filter, { parentterritoryid: Territory_Result }>;
  territory_MailboxTrackingFolders: WebExpand<Territory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { territory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  territory_accounts: WebExpand<Territory_Expand, Account_Select, Account_Filter, { territory_accounts: Account_Result[] }>;
  territory_connections1: WebExpand<Territory_Expand, Connection_Select, Connection_Filter, { territory_connections1: Connection_Result[] }>;
  territory_connections2: WebExpand<Territory_Expand, Connection_Select, Connection_Filter, { territory_connections2: Connection_Result[] }>;
  territory_parent_territory: WebExpand<Territory_Expand, Territory_Select, Territory_Filter, { territory_parent_territory: Territory_Result[] }>;
  territory_principalobjectattributeaccess: WebExpand<Territory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { territory_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  territory_system_users: WebExpand<Territory_Expand, SystemUser_Select, SystemUser_Filter, { territory_system_users: SystemUser_Result[] }>;
  transactioncurrencyid: WebExpand<Territory_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_territory: WebExpand<Territory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_territory: UserEntityInstanceData_Result[] }>;
}
interface Territory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  managerid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  parentterritoryid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Territory_Result extends Territory_Base, Territory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  managerid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentterritoryid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Territory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  managerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentterritoryid: WebMappingRetrieve<Territory_Select,Territory_Expand,Territory_Filter,Territory_Fixed,Territory_Result,Territory_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Territory_RelatedMany {
  Territory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Territory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Territory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Territory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Territory_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Territory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_territory_account_ServiceTerritory: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_territory_msdyn_actual_ServiceTerritory: WebMappingRetrieve<msdyn_actual_Select,msdyn_actual_Expand,msdyn_actual_Filter,msdyn_actual_Fixed,msdyn_actual_Result,msdyn_actual_FormattedResult>;
  msdyn_territory_msdyn_agreement_ServiceTerritory: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  msdyn_territory_msdyn_postalcode_ServiceTerritory: WebMappingRetrieve<msdyn_postalcode_Select,msdyn_postalcode_Expand,msdyn_postalcode_Filter,msdyn_postalcode_Fixed,msdyn_postalcode_Result,msdyn_postalcode_FormattedResult>;
  msdyn_territory_msdyn_resourcerequirement_Territory: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  msdyn_territory_msdyn_resourceterritory_Territory: WebMappingRetrieve<msdyn_resourceterritory_Select,msdyn_resourceterritory_Expand,msdyn_resourceterritory_Filter,msdyn_resourceterritory_Fixed,msdyn_resourceterritory_Result,msdyn_resourceterritory_FormattedResult>;
  msdyn_territory_msdyn_workorder_ServiceTerritory: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_territory_quotedetail_ServiceTerritory: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  territory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  territory_accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  territory_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  territory_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  territory_parent_territory: WebMappingRetrieve<Territory_Select,Territory_Expand,Territory_Filter,Territory_Fixed,Territory_Result,Territory_FormattedResult>;
  territory_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  territory_system_users: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  userentityinstancedata_territory: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  territories: WebMappingRetrieve<Territory_Select,Territory_Expand,Territory_Filter,Territory_Fixed,Territory_Result,Territory_FormattedResult>;
}
interface WebEntitiesRelated {
  territories: WebMappingRelated<Territory_RelatedOne,Territory_RelatedMany>;
}
interface WebEntitiesCUDA {
  territories: WebMappingCUDA<Territory_Create,Territory_Update,Territory_Select>;
}
