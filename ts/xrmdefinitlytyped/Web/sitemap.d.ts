interface SiteMap_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  enablecollapsiblegroups?: boolean | null;
  isappaware?: boolean | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  showhome?: boolean | null;
  showpinned?: boolean | null;
  showrecents?: boolean | null;
  sitemapid?: string | null;
  sitemapidunique?: string | null;
  sitemapname?: string | null;
  sitemapnameunique?: string | null;
  sitemapxml?: string | null;
  sitemapxmlmanaged?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SiteMap_Relationships {
  SiteMap_createdby?: SystemUser_Result | null;
  SiteMap_createdonbehalfby?: SystemUser_Result | null;
  SiteMap_modifiedby?: SystemUser_Result | null;
  SiteMap_modifiedonbehalfby?: SystemUser_Result | null;
  userentityinstancedata_sitemap?: UserEntityInstanceData_Result[] | null;
}
interface SiteMap extends SiteMap_Base, SiteMap_Relationships {
}
interface SiteMap_Create extends SiteMap {
}
interface SiteMap_Update extends SiteMap {
}
interface SiteMap_Select {
  componentstate: WebAttribute<SiteMap_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SiteMap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SiteMap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SiteMap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  enablecollapsiblegroups: WebAttribute<SiteMap_Select, { enablecollapsiblegroups: boolean | null }, {  }>;
  isappaware: WebAttribute<SiteMap_Select, { isappaware: boolean | null }, {  }>;
  ismanaged: WebAttribute<SiteMap_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SiteMap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SiteMap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SiteMap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<SiteMap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SiteMap_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  showhome: WebAttribute<SiteMap_Select, { showhome: boolean | null }, {  }>;
  showpinned: WebAttribute<SiteMap_Select, { showpinned: boolean | null }, {  }>;
  showrecents: WebAttribute<SiteMap_Select, { showrecents: boolean | null }, {  }>;
  sitemapid: WebAttribute<SiteMap_Select, { sitemapid: string | null }, {  }>;
  sitemapidunique: WebAttribute<SiteMap_Select, { sitemapidunique: string | null }, {  }>;
  sitemapname: WebAttribute<SiteMap_Select, { sitemapname: string | null }, {  }>;
  sitemapnameunique: WebAttribute<SiteMap_Select, { sitemapnameunique: string | null }, {  }>;
  sitemapxml: WebAttribute<SiteMap_Select, { sitemapxml: string | null }, {  }>;
  sitemapxmlmanaged: WebAttribute<SiteMap_Select, { sitemapxmlmanaged: string | null }, {  }>;
  solutionid: WebAttribute<SiteMap_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SiteMap_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SiteMap_Select, { versionnumber: number | null }, {  }>;
}
interface SiteMap_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  enablecollapsiblegroups: boolean;
  isappaware: boolean;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  showhome: boolean;
  showpinned: boolean;
  showrecents: boolean;
  sitemapid: XQW.Guid;
  sitemapidunique: XQW.Guid;
  sitemapname: string;
  sitemapnameunique: string;
  sitemapxml: string;
  sitemapxmlmanaged: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface SiteMap_Expand {
  SiteMap_createdby: WebExpand<SiteMap_Expand, SystemUser_Select, SystemUser_Filter, { SiteMap_createdby: SystemUser_Result }>;
  SiteMap_createdonbehalfby: WebExpand<SiteMap_Expand, SystemUser_Select, SystemUser_Filter, { SiteMap_createdonbehalfby: SystemUser_Result }>;
  SiteMap_modifiedby: WebExpand<SiteMap_Expand, SystemUser_Select, SystemUser_Filter, { SiteMap_modifiedby: SystemUser_Result }>;
  SiteMap_modifiedonbehalfby: WebExpand<SiteMap_Expand, SystemUser_Select, SystemUser_Filter, { SiteMap_modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SiteMap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_sitemap: WebExpand<SiteMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sitemap: UserEntityInstanceData_Result[] }>;
}
interface SiteMap_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface SiteMap_Result extends SiteMap_Base, SiteMap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface SiteMap_RelatedOne {
  SiteMap_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  SiteMap_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  SiteMap_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  SiteMap_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SiteMap_RelatedMany {
  userentityinstancedata_sitemap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sitemaps: WebMappingRetrieve<SiteMap_Select,SiteMap_Expand,SiteMap_Filter,SiteMap_Fixed,SiteMap_Result,SiteMap_FormattedResult>;
}
interface WebEntitiesRelated {
  sitemaps: WebMappingRelated<SiteMap_RelatedOne,SiteMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  sitemaps: WebMappingCUDA<SiteMap_Create,SiteMap_Update,SiteMap_Select>;
}
