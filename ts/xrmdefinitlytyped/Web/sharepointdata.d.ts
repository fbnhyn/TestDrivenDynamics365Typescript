interface SharePointData_Base extends WebEntity {
  createdon?: Date | null;
  data?: string | null;
  isvalid?: boolean | null;
  modifiedon?: Date | null;
  nextpagetoken?: string | null;
  overwritetime?: Date | null;
  pagenumber?: number | null;
  previouspagetoken?: string | null;
  regardingobjectid?: string | null;
  sharepointdataid?: string | null;
}
interface SharePointData_Relationships {
}
interface SharePointData extends SharePointData_Base, SharePointData_Relationships {
}
interface SharePointData_Create extends SharePointData {
}
interface SharePointData_Update extends SharePointData {
}
interface SharePointData_Select {
  createdby_guid: WebAttribute<SharePointData_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SharePointData_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SharePointData_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<SharePointData_Select, { data: string | null }, {  }>;
  isvalid: WebAttribute<SharePointData_Select, { isvalid: boolean | null }, {  }>;
  location_guid: WebAttribute<SharePointData_Select, { location_guid: string | null }, { location_formatted?: string }>;
  modifiedby_guid: WebAttribute<SharePointData_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SharePointData_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SharePointData_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  nextpagetoken: WebAttribute<SharePointData_Select, { nextpagetoken: string | null }, {  }>;
  organizationid_guid: WebAttribute<SharePointData_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SharePointData_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  pagenumber: WebAttribute<SharePointData_Select, { pagenumber: number | null }, {  }>;
  previouspagetoken: WebAttribute<SharePointData_Select, { previouspagetoken: string | null }, {  }>;
  regardingobjectid: WebAttribute<SharePointData_Select, { regardingobjectid: string | null }, {  }>;
  sharepointdataid: WebAttribute<SharePointData_Select, { sharepointdataid: string | null }, {  }>;
  userid_guid: WebAttribute<SharePointData_Select, { userid_guid: string | null }, { userid_formatted?: string }>;
}
interface SharePointData_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  data: string;
  isvalid: boolean;
  location_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  nextpagetoken: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  pagenumber: number;
  previouspagetoken: string;
  regardingobjectid: string;
  sharepointdataid: XQW.Guid;
  userid_guid: XQW.Guid;
}
interface SharePointData_Expand {
  createdby: WebExpand<SharePointData_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SharePointData_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  location: WebExpand<SharePointData_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { location: SharePointDocumentLocation_Result }>;
  modifiedby: WebExpand<SharePointData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SharePointData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SharePointData_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userid: WebExpand<SharePointData_Expand, SystemUser_Select, SystemUser_Filter, { userid: SystemUser_Result }>;
}
interface SharePointData_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  location_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  userid_formatted?: string;
}
interface SharePointData_Result extends SharePointData_Base, SharePointData_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  location_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  userid_guid: string | null;
}
interface SharePointData_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  location: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  userid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface SharePointData_RelatedMany {
}
interface WebEntitiesRetrieve {
  sharepointdatacollection: WebMappingRetrieve<SharePointData_Select,SharePointData_Expand,SharePointData_Filter,SharePointData_Fixed,SharePointData_Result,SharePointData_FormattedResult>;
}
interface WebEntitiesRelated {
  sharepointdatacollection: WebMappingRelated<SharePointData_RelatedOne,SharePointData_RelatedMany>;
}
interface WebEntitiesCUDA {
  sharepointdatacollection: WebMappingCUDA<SharePointData_Create,SharePointData_Update,SharePointData_Select>;
}
