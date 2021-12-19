interface ActionCardUserState_Base extends WebEntity {
  actioncarduserstateid?: string | null;
  exchangerate?: number | null;
  startdate?: Date | null;
  state?: actioncarduserstate_state | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ActionCardUserState_Relationships {
}
interface ActionCardUserState extends ActionCardUserState_Base, ActionCardUserState_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface ActionCardUserState_Create extends ActionCardUserState {
  actioncardid_bind$actioncards?: string | null;
}
interface ActionCardUserState_Update extends ActionCardUserState {
}
interface ActionCardUserState_Select {
  actioncardid_guid: WebAttribute<ActionCardUserState_Select, { actioncardid_guid: string | null }, { actioncardid_formatted?: string }>;
  actioncarduserstateid: WebAttribute<ActionCardUserState_Select, { actioncarduserstateid: string | null }, {  }>;
  exchangerate: WebAttribute<ActionCardUserState_Select, { exchangerate: number | null }, {  }>;
  ownerid_guid: WebAttribute<ActionCardUserState_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ActionCardUserState_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  startdate: WebAttribute<ActionCardUserState_Select, { startdate: Date | null }, { startdate_formatted?: string }>;
  state: WebAttribute<ActionCardUserState_Select, { state: actioncarduserstate_state | null }, { state_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ActionCardUserState_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ActionCardUserState_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ActionCardUserState_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ActionCardUserState_Select, { versionnumber: number | null }, {  }>;
}
interface ActionCardUserState_Filter {
  actioncardid_guid: XQW.Guid;
  actioncarduserstateid: XQW.Guid;
  exchangerate: any;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  startdate: Date;
  state: actioncarduserstate_state;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ActionCardUserState_Expand {
  actioncardid: WebExpand<ActionCardUserState_Expand, ActionCard_Select, ActionCard_Filter, { actioncardid: ActionCard_Result }>;
  ownerid: WebExpand<ActionCardUserState_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  transactioncurrencyid: WebExpand<ActionCardUserState_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface ActionCardUserState_FormattedResult {
  actioncardid_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  startdate_formatted?: string;
  state_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface ActionCardUserState_Result extends ActionCardUserState_Base, ActionCardUserState_Relationships {
  "@odata.etag": string;
  actioncardid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ActionCardUserState_RelatedOne {
  actioncardid: WebMappingRetrieve<ActionCard_Select,ActionCard_Expand,ActionCard_Filter,ActionCard_Fixed,ActionCard_Result,ActionCard_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface ActionCardUserState_RelatedMany {
}
interface WebEntitiesRetrieve {
  actioncarduserstates: WebMappingRetrieve<ActionCardUserState_Select,ActionCardUserState_Expand,ActionCardUserState_Filter,ActionCardUserState_Fixed,ActionCardUserState_Result,ActionCardUserState_FormattedResult>;
}
interface WebEntitiesRelated {
  actioncarduserstates: WebMappingRelated<ActionCardUserState_RelatedOne,ActionCardUserState_RelatedMany>;
}
interface WebEntitiesCUDA {
  actioncarduserstates: WebMappingCUDA<ActionCardUserState_Create,ActionCardUserState_Update,ActionCardUserState_Select>;
}
