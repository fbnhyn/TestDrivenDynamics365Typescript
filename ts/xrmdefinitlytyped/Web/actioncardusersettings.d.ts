interface ActionCardUserSettings_Base extends WebEntity {
  actioncardusersettingsid?: string | null;
  boolcardoption?: boolean | null;
  cardtype?: number | null;
  intcardoption?: number | null;
  isenabled?: boolean | null;
  stringcardoption?: string | null;
  versionnumber?: number | null;
}
interface ActionCardUserSettings_Relationships {
}
interface ActionCardUserSettings extends ActionCardUserSettings_Base, ActionCardUserSettings_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ActionCardUserSettings_Create extends ActionCardUserSettings {
  cardtypeid_bind$cardtype?: string | null;
}
interface ActionCardUserSettings_Update extends ActionCardUserSettings {
}
interface ActionCardUserSettings_Select {
  actioncardusersettingsid: WebAttribute<ActionCardUserSettings_Select, { actioncardusersettingsid: string | null }, {  }>;
  boolcardoption: WebAttribute<ActionCardUserSettings_Select, { boolcardoption: boolean | null }, {  }>;
  cardtype: WebAttribute<ActionCardUserSettings_Select, { cardtype: number | null }, {  }>;
  cardtypeid_guid: WebAttribute<ActionCardUserSettings_Select, { cardtypeid_guid: string | null }, { cardtypeid_formatted?: string }>;
  intcardoption: WebAttribute<ActionCardUserSettings_Select, { intcardoption: number | null }, {  }>;
  isenabled: WebAttribute<ActionCardUserSettings_Select, { isenabled: boolean | null }, {  }>;
  ownerid_guid: WebAttribute<ActionCardUserSettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ActionCardUserSettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ActionCardUserSettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ActionCardUserSettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  stringcardoption: WebAttribute<ActionCardUserSettings_Select, { stringcardoption: string | null }, {  }>;
  versionnumber: WebAttribute<ActionCardUserSettings_Select, { versionnumber: number | null }, {  }>;
}
interface ActionCardUserSettings_Filter {
  actioncardusersettingsid: XQW.Guid;
  boolcardoption: boolean;
  cardtype: number;
  cardtypeid_guid: XQW.Guid;
  intcardoption: number;
  isenabled: boolean;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  stringcardoption: string;
  versionnumber: number;
}
interface ActionCardUserSettings_Expand {
  cardtypeid: WebExpand<ActionCardUserSettings_Expand, CardType_Select, CardType_Filter, { cardtypeid: CardType_Result }>;
  ownerid: WebExpand<ActionCardUserSettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ActionCardUserSettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ActionCardUserSettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ActionCardUserSettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface ActionCardUserSettings_FormattedResult {
  cardtypeid_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface ActionCardUserSettings_Result extends ActionCardUserSettings_Base, ActionCardUserSettings_Relationships {
  "@odata.etag": string;
  cardtypeid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ActionCardUserSettings_RelatedOne {
  cardtypeid: WebMappingRetrieve<CardType_Select,CardType_Expand,CardType_Filter,CardType_Fixed,CardType_Result,CardType_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ActionCardUserSettings_RelatedMany {
}
interface WebEntitiesRetrieve {
  actioncardusersettingsset: WebMappingRetrieve<ActionCardUserSettings_Select,ActionCardUserSettings_Expand,ActionCardUserSettings_Filter,ActionCardUserSettings_Fixed,ActionCardUserSettings_Result,ActionCardUserSettings_FormattedResult>;
}
interface WebEntitiesRelated {
  actioncardusersettingsset: WebMappingRelated<ActionCardUserSettings_RelatedOne,ActionCardUserSettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  actioncardusersettingsset: WebMappingCUDA<ActionCardUserSettings_Create,ActionCardUserSettings_Update,ActionCardUserSettings_Select>;
}
