interface CardType_Base extends WebEntity {
  actions?: string | null;
  adaptivecardtemplate?: string | null;
  boolcardoption?: boolean | null;
  cardname?: string | null;
  cardtype?: number | null;
  cardtypeicon?: string | null;
  cardtypeid?: string | null;
  clientavailability?: actioncard_clientavailability | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  groupcategory?: number | null;
  grouptype?: string | null;
  hassnoozedismiss?: boolean | null;
  importsequencenumber?: number | null;
  intcardoption?: number | null;
  isbasecard?: boolean | null;
  isenabled?: boolean | null;
  isliveonly?: boolean | null;
  ispreviewcard?: boolean | null;
  lastsynctime?: Date | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  priority?: number | null;
  publishername?: string | null;
  scheduletime?: Date | null;
  softtitle?: string | null;
  stringcardoption?: string | null;
  summarytext?: string | null;
  versionnumber?: number | null;
}
interface CardType_Relationships {
  cardtype_actioncards?: ActionCard_Result[] | null;
  cardtype_actioncardusersettingss?: ActionCardUserSettings_Result[] | null;
  msdyn_cardtype_msdyn_flowcardtype_cardtypeid?: msdyn_flowcardtype_Result[] | null;
  msdyn_cardtypeid?: msdyn_actioncardrolesetting_Result[] | null;
}
interface CardType extends CardType_Base, CardType_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface CardType_Create extends CardType {
}
interface CardType_Update extends CardType {
}
interface CardType_Select {
  actions: WebAttribute<CardType_Select, { actions: string | null }, {  }>;
  adaptivecardtemplate: WebAttribute<CardType_Select, { adaptivecardtemplate: string | null }, {  }>;
  boolcardoption: WebAttribute<CardType_Select, { boolcardoption: boolean | null }, {  }>;
  cardname: WebAttribute<CardType_Select, { cardname: string | null }, {  }>;
  cardtype1;
  cardtypeicon: WebAttribute<CardType_Select, { cardtypeicon: string | null }, {  }>;
  cardtypeid: WebAttribute<CardType_Select, { cardtypeid: string | null }, {  }>;
  clientavailability: WebAttribute<CardType_Select, { clientavailability: actioncard_clientavailability | null }, { clientavailability_formatted?: string }>;
  createdby_guid: WebAttribute<CardType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CardType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CardType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<CardType_Select, { exchangerate: number | null }, {  }>;
  groupcategory: WebAttribute<CardType_Select, { groupcategory: number | null }, {  }>;
  grouptype: WebAttribute<CardType_Select, { grouptype: string | null }, {  }>;
  hassnoozedismiss: WebAttribute<CardType_Select, { hassnoozedismiss: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<CardType_Select, { importsequencenumber: number | null }, {  }>;
  intcardoption: WebAttribute<CardType_Select, { intcardoption: number | null }, {  }>;
  isbasecard: WebAttribute<CardType_Select, { isbasecard: boolean | null }, {  }>;
  isenabled: WebAttribute<CardType_Select, { isenabled: boolean | null }, {  }>;
  isliveonly: WebAttribute<CardType_Select, { isliveonly: boolean | null }, {  }>;
  ispreviewcard: WebAttribute<CardType_Select, { ispreviewcard: boolean | null }, {  }>;
  lastsynctime: WebAttribute<CardType_Select, { lastsynctime: Date | null }, { lastsynctime_formatted?: string }>;
  modifiedby_guid: WebAttribute<CardType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CardType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CardType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<CardType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  priority: WebAttribute<CardType_Select, { priority: number | null }, {  }>;
  publishername: WebAttribute<CardType_Select, { publishername: string | null }, {  }>;
  scheduletime: WebAttribute<CardType_Select, { scheduletime: Date | null }, { scheduletime_formatted?: string }>;
  softtitle: WebAttribute<CardType_Select, { softtitle: string | null }, {  }>;
  stringcardoption: WebAttribute<CardType_Select, { stringcardoption: string | null }, {  }>;
  summarytext: WebAttribute<CardType_Select, { summarytext: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<CardType_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<CardType_Select, { versionnumber: number | null }, {  }>;
}
interface CardType_Filter {
  actions: string;
  adaptivecardtemplate: string;
  boolcardoption: boolean;
  cardname: string;
  cardtype: number;
  cardtypeicon: string;
  cardtypeid: XQW.Guid;
  clientavailability: actioncard_clientavailability;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  groupcategory: number;
  grouptype: string;
  hassnoozedismiss: boolean;
  importsequencenumber: number;
  intcardoption: number;
  isbasecard: boolean;
  isenabled: boolean;
  isliveonly: boolean;
  ispreviewcard: boolean;
  lastsynctime: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  priority: number;
  publishername: string;
  scheduletime: Date;
  softtitle: string;
  stringcardoption: string;
  summarytext: string;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface CardType_Expand {
  cardtype_actioncards: WebExpand<CardType_Expand, ActionCard_Select, ActionCard_Filter, { cardtype_actioncards: ActionCard_Result[] }>;
  cardtype_actioncardusersettingss: WebExpand<CardType_Expand, ActionCardUserSettings_Select, ActionCardUserSettings_Filter, { cardtype_actioncardusersettingss: ActionCardUserSettings_Result[] }>;
  createdby: WebExpand<CardType_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CardType_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<CardType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CardType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_cardtype_msdyn_flowcardtype_cardtypeid: WebExpand<CardType_Expand, msdyn_flowcardtype_Select, msdyn_flowcardtype_Filter, { msdyn_cardtype_msdyn_flowcardtype_cardtypeid: msdyn_flowcardtype_Result[] }>;
  msdyn_cardtypeid: WebExpand<CardType_Expand, msdyn_actioncardrolesetting_Select, msdyn_actioncardrolesetting_Filter, { msdyn_cardtypeid: msdyn_actioncardrolesetting_Result[] }>;
  transactioncurrencyid: WebExpand<CardType_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface CardType_FormattedResult {
  clientavailability_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  lastsynctime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  scheduletime_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface CardType_Result extends CardType_Base, CardType_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface CardType_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface CardType_RelatedMany {
  cardtype_actioncards: WebMappingRetrieve<ActionCard_Select,ActionCard_Expand,ActionCard_Filter,ActionCard_Fixed,ActionCard_Result,ActionCard_FormattedResult>;
  cardtype_actioncardusersettingss: WebMappingRetrieve<ActionCardUserSettings_Select,ActionCardUserSettings_Expand,ActionCardUserSettings_Filter,ActionCardUserSettings_Fixed,ActionCardUserSettings_Result,ActionCardUserSettings_FormattedResult>;
  msdyn_cardtype_msdyn_flowcardtype_cardtypeid: WebMappingRetrieve<msdyn_flowcardtype_Select,msdyn_flowcardtype_Expand,msdyn_flowcardtype_Filter,msdyn_flowcardtype_Fixed,msdyn_flowcardtype_Result,msdyn_flowcardtype_FormattedResult>;
  msdyn_cardtypeid: WebMappingRetrieve<msdyn_actioncardrolesetting_Select,msdyn_actioncardrolesetting_Expand,msdyn_actioncardrolesetting_Filter,msdyn_actioncardrolesetting_Fixed,msdyn_actioncardrolesetting_Result,msdyn_actioncardrolesetting_FormattedResult>;
}
interface WebEntitiesRetrieve {
  cardtype: WebMappingRetrieve<CardType_Select,CardType_Expand,CardType_Filter,CardType_Fixed,CardType_Result,CardType_FormattedResult>;
}
interface WebEntitiesRelated {
  cardtype: WebMappingRelated<CardType_RelatedOne,CardType_RelatedMany>;
}
interface WebEntitiesCUDA {
  cardtype: WebMappingCUDA<CardType_Create,CardType_Update,CardType_Select>;
}
