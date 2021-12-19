interface ExternalPartyItem_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  externalpartyitemid?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  lastdisabledon?: Date | null;
  lastenabledon?: Date | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: externalpartyitem_state_code | null;
  statuscode?: externalpartyitem_status_code | null;
  versionnumber?: number | null;
}
interface ExternalPartyItem_Relationships {
  ExternalPartyItem_SyncErrors?: SyncError_Result[] | null;
  TransactionCurrencyId?: TransactionCurrency_Result | null;
  externalparty_entries?: ExternalParty_Result | null;
  externalpartyitem_associated_channelaccessprofile?: ChannelAccessProfile_Result | null;
  externalpartyitem_asyncoperations_externalpartyitem?: AsyncOperation_Result[] | null;
  externalpartyitem_bulkdeletefailures_externalpartyitem?: BulkDeleteFailure_Result[] | null;
  externalpartyitem_processsession_externalpartyitem?: ProcessSession_Result[] | null;
  lk_externalpartyitem_createdby?: SystemUser_Result | null;
  lk_externalpartyitem_modifiedby?: SystemUser_Result | null;
  lk_externalpartyitem_modifiedonbehalfby?: SystemUser_Result | null;
  regardingobjectid_contact?: Contact_Result | null;
  regardingobjectid_systemuser?: SystemUser_Result | null;
}
interface ExternalPartyItem extends ExternalPartyItem_Base, ExternalPartyItem_Relationships {
  TransactionCurrencyId_bind$transactioncurrencies?: string | null;
  externalparty_entries_bind$externalparties?: string | null;
  externalpartyitem_associated_channelaccessprofile_bind$channelaccessprofiles?: string | null;
  regardingobjectid_contact_bind$contacts?: string | null;
  regardingobjectid_systemuser_bind$systemusers?: string | null;
}
interface ExternalPartyItem_Create extends ExternalPartyItem {
}
interface ExternalPartyItem_Update extends ExternalPartyItem {
}
interface ExternalPartyItem_Select {
  channelaccessprofileid_guid: WebAttribute<ExternalPartyItem_Select, { channelaccessprofileid_guid: string | null }, { channelaccessprofileid_formatted?: string }>;
  createdby_guid: WebAttribute<ExternalPartyItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ExternalPartyItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ExternalPartyItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<ExternalPartyItem_Select, { exchangerate: number | null }, {  }>;
  externalpartyid_guid: WebAttribute<ExternalPartyItem_Select, { externalpartyid_guid: string | null }, { externalpartyid_formatted?: string }>;
  externalpartyitemid: WebAttribute<ExternalPartyItem_Select, { externalpartyitemid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ExternalPartyItem_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<ExternalPartyItem_Select, { introducedversion: string | null }, {  }>;
  lastdisabledon: WebAttribute<ExternalPartyItem_Select, { lastdisabledon: Date | null }, { lastdisabledon_formatted?: string }>;
  lastenabledon: WebAttribute<ExternalPartyItem_Select, { lastenabledon: Date | null }, { lastenabledon_formatted?: string }>;
  modifiedby_guid: WebAttribute<ExternalPartyItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ExternalPartyItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ExternalPartyItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ExternalPartyItem_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ExternalPartyItem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ExternalPartyItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ExternalPartyItem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<ExternalPartyItem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<ExternalPartyItem_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  statecode: WebAttribute<ExternalPartyItem_Select, { statecode: externalpartyitem_state_code | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ExternalPartyItem_Select, { statuscode: externalpartyitem_status_code | null }, { statuscode_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<ExternalPartyItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<ExternalPartyItem_Select, { versionnumber: number | null }, {  }>;
}
interface ExternalPartyItem_Filter {
  channelaccessprofileid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  externalpartyid_guid: XQW.Guid;
  externalpartyitemid: XQW.Guid;
  importsequencenumber: number;
  introducedversion: string;
  lastdisabledon: Date;
  lastenabledon: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  statecode: externalpartyitem_state_code;
  statuscode: externalpartyitem_status_code;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface ExternalPartyItem_Expand {
  ExternalPartyItem_SyncErrors: WebExpand<ExternalPartyItem_Expand, SyncError_Select, SyncError_Filter, { ExternalPartyItem_SyncErrors: SyncError_Result[] }>;
  TransactionCurrencyId: WebExpand<ExternalPartyItem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { TransactionCurrencyId: TransactionCurrency_Result }>;
  createdonbehalfby: WebExpand<ExternalPartyItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  externalparty_entries: WebExpand<ExternalPartyItem_Expand, ExternalParty_Select, ExternalParty_Filter, { externalparty_entries: ExternalParty_Result }>;
  externalpartyitem_associated_channelaccessprofile: WebExpand<ExternalPartyItem_Expand, ChannelAccessProfile_Select, ChannelAccessProfile_Filter, { externalpartyitem_associated_channelaccessprofile: ChannelAccessProfile_Result }>;
  externalpartyitem_asyncoperations_externalpartyitem: WebExpand<ExternalPartyItem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { externalpartyitem_asyncoperations_externalpartyitem: AsyncOperation_Result[] }>;
  externalpartyitem_bulkdeletefailures_externalpartyitem: WebExpand<ExternalPartyItem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { externalpartyitem_bulkdeletefailures_externalpartyitem: BulkDeleteFailure_Result[] }>;
  externalpartyitem_processsession_externalpartyitem: WebExpand<ExternalPartyItem_Expand, ProcessSession_Select, ProcessSession_Filter, { externalpartyitem_processsession_externalpartyitem: ProcessSession_Result[] }>;
  lk_externalpartyitem_createdby: WebExpand<ExternalPartyItem_Expand, SystemUser_Select, SystemUser_Filter, { lk_externalpartyitem_createdby: SystemUser_Result }>;
  lk_externalpartyitem_modifiedby: WebExpand<ExternalPartyItem_Expand, SystemUser_Select, SystemUser_Filter, { lk_externalpartyitem_modifiedby: SystemUser_Result }>;
  lk_externalpartyitem_modifiedonbehalfby: WebExpand<ExternalPartyItem_Expand, SystemUser_Select, SystemUser_Filter, { lk_externalpartyitem_modifiedonbehalfby: SystemUser_Result }>;
  regardingobjectid_contact: WebExpand<ExternalPartyItem_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact: Contact_Result }>;
  regardingobjectid_systemuser: WebExpand<ExternalPartyItem_Expand, SystemUser_Select, SystemUser_Filter, { regardingobjectid_systemuser: SystemUser_Result }>;
}
interface ExternalPartyItem_FormattedResult {
  channelaccessprofileid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  externalpartyid_formatted?: string;
  lastdisabledon_formatted?: string;
  lastenabledon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface ExternalPartyItem_Result extends ExternalPartyItem_Base, ExternalPartyItem_Relationships {
  "@odata.etag": string;
  channelaccessprofileid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  externalpartyid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ExternalPartyItem_RelatedOne {
  TransactionCurrencyId: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  externalparty_entries: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  externalpartyitem_associated_channelaccessprofile: WebMappingRetrieve<ChannelAccessProfile_Select,ChannelAccessProfile_Expand,ChannelAccessProfile_Filter,ChannelAccessProfile_Fixed,ChannelAccessProfile_Result,ChannelAccessProfile_FormattedResult>;
  lk_externalpartyitem_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_externalpartyitem_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_externalpartyitem_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ExternalPartyItem_RelatedMany {
  ExternalPartyItem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  externalpartyitem_asyncoperations_externalpartyitem: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  externalpartyitem_bulkdeletefailures_externalpartyitem: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  externalpartyitem_processsession_externalpartyitem: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
}
interface WebEntitiesRetrieve {
  externalpartyitems: WebMappingRetrieve<ExternalPartyItem_Select,ExternalPartyItem_Expand,ExternalPartyItem_Filter,ExternalPartyItem_Fixed,ExternalPartyItem_Result,ExternalPartyItem_FormattedResult>;
}
interface WebEntitiesRelated {
  externalpartyitems: WebMappingRelated<ExternalPartyItem_RelatedOne,ExternalPartyItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  externalpartyitems: WebMappingCUDA<ExternalPartyItem_Create,ExternalPartyItem_Update,ExternalPartyItem_Select>;
}
