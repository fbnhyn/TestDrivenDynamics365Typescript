interface MailboxTrackingCategory_Base extends WebEntity {
  categoryonboardingstatus?: number | null;
  createdon?: Date | null;
  exchangecategorycolor?: number | null;
  exchangecategoryid?: string | null;
  exchangecategoryname?: string | null;
  mailboxtrackingcategoryid?: string | null;
  modifiedon?: Date | null;
}
interface MailboxTrackingCategory_Relationships {
}
interface MailboxTrackingCategory extends MailboxTrackingCategory_Base, MailboxTrackingCategory_Relationships {
  mailboxid_bind$mailboxes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface MailboxTrackingCategory_Create extends MailboxTrackingCategory {
}
interface MailboxTrackingCategory_Update extends MailboxTrackingCategory {
}
interface MailboxTrackingCategory_Select {
  categoryonboardingstatus: WebAttribute<MailboxTrackingCategory_Select, { categoryonboardingstatus: number | null }, {  }>;
  createdon: WebAttribute<MailboxTrackingCategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  exchangecategorycolor: WebAttribute<MailboxTrackingCategory_Select, { exchangecategorycolor: number | null }, {  }>;
  exchangecategoryid: WebAttribute<MailboxTrackingCategory_Select, { exchangecategoryid: string | null }, {  }>;
  exchangecategoryname: WebAttribute<MailboxTrackingCategory_Select, { exchangecategoryname: string | null }, {  }>;
  mailboxid_guid: WebAttribute<MailboxTrackingCategory_Select, { mailboxid_guid: string | null }, { mailboxid_formatted?: string }>;
  mailboxtrackingcategoryid: WebAttribute<MailboxTrackingCategory_Select, { mailboxtrackingcategoryid: string | null }, {  }>;
  modifiedon: WebAttribute<MailboxTrackingCategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  ownerid_guid: WebAttribute<MailboxTrackingCategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<MailboxTrackingCategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<MailboxTrackingCategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<MailboxTrackingCategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
}
interface MailboxTrackingCategory_Filter {
  categoryonboardingstatus: number;
  createdon: Date;
  exchangecategorycolor: number;
  exchangecategoryid: XQW.Guid;
  exchangecategoryname: string;
  mailboxid_guid: XQW.Guid;
  mailboxtrackingcategoryid: XQW.Guid;
  modifiedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
}
interface MailboxTrackingCategory_Expand {
  mailboxid: WebExpand<MailboxTrackingCategory_Expand, Mailbox_Select, Mailbox_Filter, { mailboxid: Mailbox_Result }>;
  ownerid: WebExpand<MailboxTrackingCategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<MailboxTrackingCategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<MailboxTrackingCategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
}
interface MailboxTrackingCategory_FormattedResult {
  createdon_formatted?: string;
  mailboxid_formatted?: string;
  modifiedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface MailboxTrackingCategory_Result extends MailboxTrackingCategory_Base, MailboxTrackingCategory_Relationships {
  "@odata.etag": string;
  mailboxid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface MailboxTrackingCategory_RelatedOne {
  mailboxid: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface MailboxTrackingCategory_RelatedMany {
}
interface WebEntitiesRetrieve {
  mailboxtrackingcategories: WebMappingRetrieve<MailboxTrackingCategory_Select,MailboxTrackingCategory_Expand,MailboxTrackingCategory_Filter,MailboxTrackingCategory_Fixed,MailboxTrackingCategory_Result,MailboxTrackingCategory_FormattedResult>;
}
interface WebEntitiesRelated {
  mailboxtrackingcategories: WebMappingRelated<MailboxTrackingCategory_RelatedOne,MailboxTrackingCategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  mailboxtrackingcategories: WebMappingCUDA<MailboxTrackingCategory_Create,MailboxTrackingCategory_Update,MailboxTrackingCategory_Select>;
}
