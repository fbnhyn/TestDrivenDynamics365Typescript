interface DocumentTemplate_Base extends WebEntity {
  associatedentitytypecode?: string | null;
  clientdata?: string | null;
  content?: string | null;
  createdon?: Date | null;
  description?: string | null;
  documenttemplateid?: string | null;
  documenttype?: officedocument_documenttype | null;
  languagecode?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  status?: boolean | null;
  versionnumber?: number | null;
}
interface DocumentTemplate_Relationships {
}
interface DocumentTemplate extends DocumentTemplate_Base, DocumentTemplate_Relationships {
}
interface DocumentTemplate_Create extends DocumentTemplate {
}
interface DocumentTemplate_Update extends DocumentTemplate {
}
interface DocumentTemplate_Select {
  associatedentitytypecode: WebAttribute<DocumentTemplate_Select, { associatedentitytypecode: string | null }, {  }>;
  clientdata: WebAttribute<DocumentTemplate_Select, { clientdata: string | null }, {  }>;
  content: WebAttribute<DocumentTemplate_Select, { content: string | null }, {  }>;
  createdby_guid: WebAttribute<DocumentTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DocumentTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DocumentTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<DocumentTemplate_Select, { description: string | null }, {  }>;
  documenttemplateid: WebAttribute<DocumentTemplate_Select, { documenttemplateid: string | null }, {  }>;
  documenttype: WebAttribute<DocumentTemplate_Select, { documenttype: officedocument_documenttype | null }, { documenttype_formatted?: string }>;
  languagecode: WebAttribute<DocumentTemplate_Select, { languagecode: number | null }, {  }>;
  modifiedby_guid: WebAttribute<DocumentTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DocumentTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DocumentTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<DocumentTemplate_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<DocumentTemplate_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  status: WebAttribute<DocumentTemplate_Select, { status: boolean | null }, {  }>;
  versionnumber: WebAttribute<DocumentTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface DocumentTemplate_Filter {
  associatedentitytypecode: string;
  clientdata: string;
  content: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  documenttemplateid: XQW.Guid;
  documenttype: officedocument_documenttype;
  languagecode: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  status: boolean;
  versionnumber: number;
}
interface DocumentTemplate_Expand {
  createdby: WebExpand<DocumentTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DocumentTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<DocumentTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DocumentTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<DocumentTemplate_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface DocumentTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  documenttype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
}
interface DocumentTemplate_Result extends DocumentTemplate_Base, DocumentTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface DocumentTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface DocumentTemplate_RelatedMany {
}
interface WebEntitiesRetrieve {
  documenttemplates: WebMappingRetrieve<DocumentTemplate_Select,DocumentTemplate_Expand,DocumentTemplate_Filter,DocumentTemplate_Fixed,DocumentTemplate_Result,DocumentTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  documenttemplates: WebMappingRelated<DocumentTemplate_RelatedOne,DocumentTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  documenttemplates: WebMappingCUDA<DocumentTemplate_Create,DocumentTemplate_Update,DocumentTemplate_Select>;
}
