interface UntrackedEmail_Base extends WebEntity {
  activityid?: string | null;
  activitytypecode?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangeitemid?: string | null;
  exchangerate?: number | null;
  exchangeweblink?: string | null;
  modifiedon?: Date | null;
  subject?: string | null;
  versionnumber?: number | null;
}
interface UntrackedEmail_Relationships {
  createdby_untrackedemail?: SystemUser_Result | null;
  createdonbehalfby_untrackedemail?: SystemUser_Result | null;
  modifiedby_untrackedemail?: SystemUser_Result | null;
  modifiedonbehalfby_untrackedemail?: SystemUser_Result | null;
  ownerid_untrackedemail?: Team_Result | null;
  ownerid_untrackedemail1?: SystemUser_Result | null;
  owningbusinessunit_untrackedemail?: BusinessUnit_Result | null;
  owninguser_untrackedemail?: SystemUser_Result | null;
  transactioncurrencyid_untrackedmail?: TransactionCurrency_Result | null;
}
interface UntrackedEmail extends UntrackedEmail_Base, UntrackedEmail_Relationships {
  ownerid_untrackedemail_bind$systemusers?: string | null;
  ownerid_untrackedemail_bind$teams?: string | null;
  transactioncurrencyid_untrackedmail_bind$transactioncurrencies?: string | null;
}
interface UntrackedEmail_Create extends UntrackedEmail {
}
interface UntrackedEmail_Update extends UntrackedEmail {
}
interface UntrackedEmail_Select {
  activityid: WebAttribute<UntrackedEmail_Select, { activityid: string | null }, {  }>;
  activitytypecode: WebAttribute<UntrackedEmail_Select, { activitytypecode: string | null }, {  }>;
  createdby_guid: WebAttribute<UntrackedEmail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UntrackedEmail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UntrackedEmail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<UntrackedEmail_Select, { description: string | null }, {  }>;
  exchangeitemid: WebAttribute<UntrackedEmail_Select, { exchangeitemid: string | null }, {  }>;
  exchangerate: WebAttribute<UntrackedEmail_Select, { exchangerate: number | null }, {  }>;
  exchangeweblink: WebAttribute<UntrackedEmail_Select, { exchangeweblink: string | null }, {  }>;
  modifiedby_guid: WebAttribute<UntrackedEmail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UntrackedEmail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UntrackedEmail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<UntrackedEmail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UntrackedEmail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UntrackedEmail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UntrackedEmail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<UntrackedEmail_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  subject: WebAttribute<UntrackedEmail_Select, { subject: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<UntrackedEmail_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<UntrackedEmail_Select, { versionnumber: number | null }, {  }>;
}
interface UntrackedEmail_Filter {
  activityid: XQW.Guid;
  activitytypecode: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangeitemid: string;
  exchangerate: any;
  exchangeweblink: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  subject: string;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface UntrackedEmail_Expand {
  createdby_untrackedemail: WebExpand<UntrackedEmail_Expand, SystemUser_Select, SystemUser_Filter, { createdby_untrackedemail: SystemUser_Result }>;
  createdonbehalfby_untrackedemail: WebExpand<UntrackedEmail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby_untrackedemail: SystemUser_Result }>;
  modifiedby_untrackedemail: WebExpand<UntrackedEmail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby_untrackedemail: SystemUser_Result }>;
  modifiedonbehalfby_untrackedemail: WebExpand<UntrackedEmail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby_untrackedemail: SystemUser_Result }>;
  ownerid_untrackedemail: WebExpand<UntrackedEmail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid_untrackedemail: SystemUser_Result } & { ownerid_untrackedemail: Team_Result }>;
  owningbusinessunit_untrackedemail: WebExpand<UntrackedEmail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit_untrackedemail: BusinessUnit_Result }>;
  owninguser_untrackedemail: WebExpand<UntrackedEmail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser_untrackedemail: SystemUser_Result }>;
  transactioncurrencyid_untrackedmail: WebExpand<UntrackedEmail_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid_untrackedmail: TransactionCurrency_Result }>;
}
interface UntrackedEmail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface UntrackedEmail_Result extends UntrackedEmail_Base, UntrackedEmail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface UntrackedEmail_RelatedOne {
  createdby_untrackedemail: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby_untrackedemail: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby_untrackedemail: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby_untrackedemail: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid_untrackedemail: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  ownerid_untrackedemail1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningbusinessunit_untrackedemail: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owninguser_untrackedemail: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid_untrackedmail: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface UntrackedEmail_RelatedMany {
}
interface WebEntitiesRetrieve {
  untrackedemails: WebMappingRetrieve<UntrackedEmail_Select,UntrackedEmail_Expand,UntrackedEmail_Filter,UntrackedEmail_Fixed,UntrackedEmail_Result,UntrackedEmail_FormattedResult>;
}
interface WebEntitiesRelated {
  untrackedemails: WebMappingRelated<UntrackedEmail_RelatedOne,UntrackedEmail_RelatedMany>;
}
interface WebEntitiesCUDA {
  untrackedemails: WebMappingCUDA<UntrackedEmail_Create,UntrackedEmail_Update,UntrackedEmail_Select>;
}
