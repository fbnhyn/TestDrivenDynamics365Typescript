interface ApplicationFile_Base extends WebEntity {
  body?: string | null;
  createdon?: Date | null;
  fileid?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  versionnumber?: number | null;
}
interface ApplicationFile_Relationships {
}
interface ApplicationFile extends ApplicationFile_Base, ApplicationFile_Relationships {
}
interface ApplicationFile_Create extends ApplicationFile {
}
interface ApplicationFile_Update extends ApplicationFile {
}
interface ApplicationFile_Select {
  body: WebAttribute<ApplicationFile_Select, { body: string | null }, {  }>;
  createdby_guid: WebAttribute<ApplicationFile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ApplicationFile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ApplicationFile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  fileid: WebAttribute<ApplicationFile_Select, { fileid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<ApplicationFile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ApplicationFile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ApplicationFile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ApplicationFile_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ApplicationFile_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  versionnumber: WebAttribute<ApplicationFile_Select, { versionnumber: number | null }, {  }>;
}
interface ApplicationFile_Filter {
  body: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  fileid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  versionnumber: number;
}
interface ApplicationFile_Expand {
  createdby: WebExpand<ApplicationFile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ApplicationFile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ApplicationFile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ApplicationFile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ApplicationFile_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface ApplicationFile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
}
interface ApplicationFile_Result extends ApplicationFile_Base, ApplicationFile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ApplicationFile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ApplicationFile_RelatedMany {
}
interface WebEntitiesRetrieve {
  applicationfiles: WebMappingRetrieve<ApplicationFile_Select,ApplicationFile_Expand,ApplicationFile_Filter,ApplicationFile_Fixed,ApplicationFile_Result,ApplicationFile_FormattedResult>;
}
interface WebEntitiesRelated {
  applicationfiles: WebMappingRelated<ApplicationFile_RelatedOne,ApplicationFile_RelatedMany>;
}
interface WebEntitiesCUDA {
  applicationfiles: WebMappingCUDA<ApplicationFile_Create,ApplicationFile_Update,ApplicationFile_Select>;
}
