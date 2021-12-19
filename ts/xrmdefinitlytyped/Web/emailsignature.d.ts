interface EmailSignature_Base extends WebEntity {
  body?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  emailsignatureid?: string | null;
  generationtypecode?: number | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  isdefault?: boolean | null;
  ispersonal?: boolean | null;
  languagecode?: number | null;
  mimetype?: string | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  presentationxml?: string | null;
  safehtml?: string | null;
  title?: string | null;
}
interface EmailSignature_Relationships {
}
interface EmailSignature extends EmailSignature_Base, EmailSignature_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface EmailSignature_Create extends EmailSignature {
}
interface EmailSignature_Update extends EmailSignature {
}
interface EmailSignature_Select {
  body: WebAttribute<EmailSignature_Select, { body: string | null }, {  }>;
  componentstate: WebAttribute<EmailSignature_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<EmailSignature_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<EmailSignature_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<EmailSignature_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<EmailSignature_Select, { description: string | null }, {  }>;
  emailsignatureid: WebAttribute<EmailSignature_Select, { emailsignatureid: string | null }, {  }>;
  generationtypecode: WebAttribute<EmailSignature_Select, { generationtypecode: number | null }, {  }>;
  importsequencenumber: WebAttribute<EmailSignature_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<EmailSignature_Select, { iscustomizable: any | null }, {  }>;
  isdefault: WebAttribute<EmailSignature_Select, { isdefault: boolean | null }, {  }>;
  ispersonal: WebAttribute<EmailSignature_Select, { ispersonal: boolean | null }, {  }>;
  languagecode: WebAttribute<EmailSignature_Select, { languagecode: number | null }, {  }>;
  mimetype: WebAttribute<EmailSignature_Select, { mimetype: string | null }, {  }>;
  modifiedby_guid: WebAttribute<EmailSignature_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<EmailSignature_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<EmailSignature_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<EmailSignature_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<EmailSignature_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<EmailSignature_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<EmailSignature_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<EmailSignature_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<EmailSignature_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  presentationxml: WebAttribute<EmailSignature_Select, { presentationxml: string | null }, {  }>;
  safehtml: WebAttribute<EmailSignature_Select, { safehtml: string | null }, {  }>;
  title: WebAttribute<EmailSignature_Select, { title: string | null }, {  }>;
}
interface EmailSignature_Filter {
  body: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  emailsignatureid: XQW.Guid;
  generationtypecode: number;
  importsequencenumber: number;
  iscustomizable: any;
  isdefault: boolean;
  ispersonal: boolean;
  languagecode: number;
  mimetype: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  presentationxml: string;
  safehtml: string;
  title: string;
}
interface EmailSignature_Expand {
  createdby: WebExpand<EmailSignature_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<EmailSignature_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<EmailSignature_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<EmailSignature_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<EmailSignature_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<EmailSignature_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
}
interface EmailSignature_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface EmailSignature_Result extends EmailSignature_Base, EmailSignature_Relationships {
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
interface EmailSignature_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
}
interface EmailSignature_RelatedMany {
}
interface WebEntitiesRetrieve {
  emailsignatures: WebMappingRetrieve<EmailSignature_Select,EmailSignature_Expand,EmailSignature_Filter,EmailSignature_Fixed,EmailSignature_Result,EmailSignature_FormattedResult>;
}
interface WebEntitiesRelated {
  emailsignatures: WebMappingRelated<EmailSignature_RelatedOne,EmailSignature_RelatedMany>;
}
interface WebEntitiesCUDA {
  emailsignatures: WebMappingCUDA<EmailSignature_Create,EmailSignature_Update,EmailSignature_Select>;
}
