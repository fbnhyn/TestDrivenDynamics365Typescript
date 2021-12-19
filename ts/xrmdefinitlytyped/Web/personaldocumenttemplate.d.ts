interface PersonalDocumentTemplate_Base extends WebEntity {
  associatedentitytypecode?: string | null;
  clientdata?: string | null;
  content?: string | null;
  createdon?: Date | null;
  description?: string | null;
  documenttype?: officedocument_documenttype | null;
  languagecode?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  personaldocumenttemplateid?: string | null;
  status?: boolean | null;
  versionnumber?: number | null;
}
interface PersonalDocumentTemplate_Relationships {
}
interface PersonalDocumentTemplate extends PersonalDocumentTemplate_Base, PersonalDocumentTemplate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface PersonalDocumentTemplate_Create extends PersonalDocumentTemplate {
}
interface PersonalDocumentTemplate_Update extends PersonalDocumentTemplate {
}
interface PersonalDocumentTemplate_Select {
  associatedentitytypecode: WebAttribute<PersonalDocumentTemplate_Select, { associatedentitytypecode: string | null }, {  }>;
  clientdata: WebAttribute<PersonalDocumentTemplate_Select, { clientdata: string | null }, {  }>;
  content: WebAttribute<PersonalDocumentTemplate_Select, { content: string | null }, {  }>;
  createdby_guid: WebAttribute<PersonalDocumentTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PersonalDocumentTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PersonalDocumentTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<PersonalDocumentTemplate_Select, { description: string | null }, {  }>;
  documenttype: WebAttribute<PersonalDocumentTemplate_Select, { documenttype: officedocument_documenttype | null }, { documenttype_formatted?: string }>;
  languagecode: WebAttribute<PersonalDocumentTemplate_Select, { languagecode: number | null }, {  }>;
  modifiedby_guid: WebAttribute<PersonalDocumentTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PersonalDocumentTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PersonalDocumentTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<PersonalDocumentTemplate_Select, { name: string | null }, {  }>;
  ownerid_guid: WebAttribute<PersonalDocumentTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<PersonalDocumentTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<PersonalDocumentTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<PersonalDocumentTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  personaldocumenttemplateid: WebAttribute<PersonalDocumentTemplate_Select, { personaldocumenttemplateid: string | null }, {  }>;
  status: WebAttribute<PersonalDocumentTemplate_Select, { status: boolean | null }, {  }>;
  versionnumber: WebAttribute<PersonalDocumentTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface PersonalDocumentTemplate_Filter {
  associatedentitytypecode: string;
  clientdata: string;
  content: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  documenttype: officedocument_documenttype;
  languagecode: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  personaldocumenttemplateid: XQW.Guid;
  status: boolean;
  versionnumber: number;
}
interface PersonalDocumentTemplate_Expand {
  createdby: WebExpand<PersonalDocumentTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PersonalDocumentTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<PersonalDocumentTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PersonalDocumentTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<PersonalDocumentTemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<PersonalDocumentTemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
}
interface PersonalDocumentTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  documenttype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface PersonalDocumentTemplate_Result extends PersonalDocumentTemplate_Base, PersonalDocumentTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface PersonalDocumentTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
}
interface PersonalDocumentTemplate_RelatedMany {
}
interface WebEntitiesRetrieve {
  personaldocumenttemplates: WebMappingRetrieve<PersonalDocumentTemplate_Select,PersonalDocumentTemplate_Expand,PersonalDocumentTemplate_Filter,PersonalDocumentTemplate_Fixed,PersonalDocumentTemplate_Result,PersonalDocumentTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  personaldocumenttemplates: WebMappingRelated<PersonalDocumentTemplate_RelatedOne,PersonalDocumentTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  personaldocumenttemplates: WebMappingCUDA<PersonalDocumentTemplate_Create,PersonalDocumentTemplate_Update,PersonalDocumentTemplate_Select>;
}
