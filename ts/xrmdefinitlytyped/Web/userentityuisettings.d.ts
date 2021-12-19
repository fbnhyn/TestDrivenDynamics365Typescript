interface UserEntityUISettings_Base extends WebEntity {
  insertintoemailmruxml?: string | null;
  lastviewedformxml?: string | null;
  lookupmruxml?: string | null;
  mruxml?: string | null;
  objecttypecode?: number | null;
  readingpanexml?: string | null;
  recentlyviewedxml?: string | null;
  showinaddressbook?: boolean | null;
  taborderxml?: string | null;
  userentityuisettingsid?: string | null;
  versionnumber?: number | null;
}
interface UserEntityUISettings_Relationships {
  userentityinstancedata_userentityuisettings?: UserEntityInstanceData_Result[] | null;
}
interface UserEntityUISettings extends UserEntityUISettings_Base, UserEntityUISettings_Relationships {
}
interface UserEntityUISettings_Create extends UserEntityUISettings {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UserEntityUISettings_Update extends UserEntityUISettings {
}
interface UserEntityUISettings_Select {
  insertintoemailmruxml: WebAttribute<UserEntityUISettings_Select, { insertintoemailmruxml: string | null }, {  }>;
  lastviewedformxml: WebAttribute<UserEntityUISettings_Select, { lastviewedformxml: string | null }, {  }>;
  lookupmruxml: WebAttribute<UserEntityUISettings_Select, { lookupmruxml: string | null }, {  }>;
  mruxml: WebAttribute<UserEntityUISettings_Select, { mruxml: string | null }, {  }>;
  objecttypecode: WebAttribute<UserEntityUISettings_Select, { objecttypecode: number | null }, {  }>;
  ownerid_guid: WebAttribute<UserEntityUISettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UserEntityUISettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UserEntityUISettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UserEntityUISettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  readingpanexml: WebAttribute<UserEntityUISettings_Select, { readingpanexml: string | null }, {  }>;
  recentlyviewedxml: WebAttribute<UserEntityUISettings_Select, { recentlyviewedxml: string | null }, {  }>;
  showinaddressbook: WebAttribute<UserEntityUISettings_Select, { showinaddressbook: boolean | null }, {  }>;
  taborderxml: WebAttribute<UserEntityUISettings_Select, { taborderxml: string | null }, {  }>;
  userentityuisettingsid: WebAttribute<UserEntityUISettings_Select, { userentityuisettingsid: string | null }, {  }>;
  versionnumber: WebAttribute<UserEntityUISettings_Select, { versionnumber: number | null }, {  }>;
}
interface UserEntityUISettings_Filter {
  insertintoemailmruxml: string;
  lastviewedformxml: string;
  lookupmruxml: string;
  mruxml: string;
  objecttypecode: number;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  readingpanexml: string;
  recentlyviewedxml: string;
  showinaddressbook: boolean;
  taborderxml: string;
  userentityuisettingsid: XQW.Guid;
  versionnumber: number;
}
interface UserEntityUISettings_Expand {
  ownerid: WebExpand<UserEntityUISettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UserEntityUISettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UserEntityUISettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UserEntityUISettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_userentityuisettings: WebExpand<UserEntityUISettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_userentityuisettings: UserEntityInstanceData_Result[] }>;
}
interface UserEntityUISettings_FormattedResult {
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface UserEntityUISettings_Result extends UserEntityUISettings_Base, UserEntityUISettings_Relationships {
  "@odata.etag": string;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface UserEntityUISettings_RelatedOne {
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UserEntityUISettings_RelatedMany {
  userentityinstancedata_userentityuisettings: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  userentityuisettingsset: WebMappingRetrieve<UserEntityUISettings_Select,UserEntityUISettings_Expand,UserEntityUISettings_Filter,UserEntityUISettings_Fixed,UserEntityUISettings_Result,UserEntityUISettings_FormattedResult>;
}
interface WebEntitiesRelated {
  userentityuisettingsset: WebMappingRelated<UserEntityUISettings_RelatedOne,UserEntityUISettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  userentityuisettingsset: WebMappingCUDA<UserEntityUISettings_Create,UserEntityUISettings_Update,UserEntityUISettings_Select>;
}
