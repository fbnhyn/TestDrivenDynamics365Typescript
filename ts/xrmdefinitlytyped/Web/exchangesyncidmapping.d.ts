interface ExchangeSyncIdMapping_Base extends WebEntity {
  createdon?: Date | null;
  exchangeentryid?: string | null;
  exchangesyncidmappingid?: string | null;
  fromcrmchangetype?: number | null;
  isdeletedinexchange?: boolean | null;
  isunlinkedincrm?: boolean | null;
  itemsubject?: string | null;
  lastsyncerror?: string | null;
  lastsyncerrorcode?: number | null;
  lastsyncerroroccurredon?: Date | null;
  modifiedon?: Date | null;
  objectid?: string | null;
  objecttypecode?: number | null;
  retries?: number | null;
  tocrmchangetype?: number | null;
  userdecision?: number | null;
  versionnumber?: number | null;
}
interface ExchangeSyncIdMapping_Relationships {
}
interface ExchangeSyncIdMapping extends ExchangeSyncIdMapping_Base, ExchangeSyncIdMapping_Relationships {
}
interface ExchangeSyncIdMapping_Create extends ExchangeSyncIdMapping {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ExchangeSyncIdMapping_Update extends ExchangeSyncIdMapping {
}
interface ExchangeSyncIdMapping_Select {
  createdon: WebAttribute<ExchangeSyncIdMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  exchangeentryid: WebAttribute<ExchangeSyncIdMapping_Select, { exchangeentryid: string | null }, {  }>;
  exchangesyncidmappingid: WebAttribute<ExchangeSyncIdMapping_Select, { exchangesyncidmappingid: string | null }, {  }>;
  fromcrmchangetype: WebAttribute<ExchangeSyncIdMapping_Select, { fromcrmchangetype: number | null }, {  }>;
  isdeletedinexchange: WebAttribute<ExchangeSyncIdMapping_Select, { isdeletedinexchange: boolean | null }, {  }>;
  isunlinkedincrm: WebAttribute<ExchangeSyncIdMapping_Select, { isunlinkedincrm: boolean | null }, {  }>;
  itemsubject: WebAttribute<ExchangeSyncIdMapping_Select, { itemsubject: string | null }, {  }>;
  lastsyncerror: WebAttribute<ExchangeSyncIdMapping_Select, { lastsyncerror: string | null }, {  }>;
  lastsyncerrorcode: WebAttribute<ExchangeSyncIdMapping_Select, { lastsyncerrorcode: number | null }, {  }>;
  lastsyncerroroccurredon: WebAttribute<ExchangeSyncIdMapping_Select, { lastsyncerroroccurredon: Date | null }, { lastsyncerroroccurredon_formatted?: string }>;
  modifiedon: WebAttribute<ExchangeSyncIdMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  objectid: WebAttribute<ExchangeSyncIdMapping_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<ExchangeSyncIdMapping_Select, { objecttypecode: number | null }, {  }>;
  ownerid_guid: WebAttribute<ExchangeSyncIdMapping_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ExchangeSyncIdMapping_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ExchangeSyncIdMapping_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ExchangeSyncIdMapping_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  retries: WebAttribute<ExchangeSyncIdMapping_Select, { retries: number | null }, {  }>;
  tocrmchangetype: WebAttribute<ExchangeSyncIdMapping_Select, { tocrmchangetype: number | null }, {  }>;
  userdecision: WebAttribute<ExchangeSyncIdMapping_Select, { userdecision: number | null }, {  }>;
  versionnumber: WebAttribute<ExchangeSyncIdMapping_Select, { versionnumber: number | null }, {  }>;
}
interface ExchangeSyncIdMapping_Filter {
  createdon: Date;
  exchangeentryid: string;
  exchangesyncidmappingid: XQW.Guid;
  fromcrmchangetype: number;
  isdeletedinexchange: boolean;
  isunlinkedincrm: boolean;
  itemsubject: string;
  lastsyncerror: string;
  lastsyncerrorcode: number;
  lastsyncerroroccurredon: Date;
  modifiedon: Date;
  objectid: XQW.Guid;
  objecttypecode: number;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  retries: number;
  tocrmchangetype: number;
  userdecision: number;
  versionnumber: number;
}
interface ExchangeSyncIdMapping_Expand {
  ownerid: WebExpand<ExchangeSyncIdMapping_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ExchangeSyncIdMapping_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ExchangeSyncIdMapping_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ExchangeSyncIdMapping_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface ExchangeSyncIdMapping_FormattedResult {
  createdon_formatted?: string;
  lastsyncerroroccurredon_formatted?: string;
  modifiedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface ExchangeSyncIdMapping_Result extends ExchangeSyncIdMapping_Base, ExchangeSyncIdMapping_Relationships {
  "@odata.etag": string;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ExchangeSyncIdMapping_RelatedOne {
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ExchangeSyncIdMapping_RelatedMany {
}
interface WebEntitiesRetrieve {
  exchangesyncidmappings: WebMappingRetrieve<ExchangeSyncIdMapping_Select,ExchangeSyncIdMapping_Expand,ExchangeSyncIdMapping_Filter,ExchangeSyncIdMapping_Fixed,ExchangeSyncIdMapping_Result,ExchangeSyncIdMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  exchangesyncidmappings: WebMappingRelated<ExchangeSyncIdMapping_RelatedOne,ExchangeSyncIdMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  exchangesyncidmappings: WebMappingCUDA<ExchangeSyncIdMapping_Create,ExchangeSyncIdMapping_Update,ExchangeSyncIdMapping_Select>;
}
