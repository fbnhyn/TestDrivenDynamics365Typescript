interface OfficeDocument_Base extends WebEntity {
  clientdata?: string | null;
  content?: string | null;
  createdon?: Date | null;
  documenttype?: officedocument_documenttype | null;
  filelockstate?: number | null;
  filesize?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  officedocumentid?: string | null;
  sha256?: string | null;
  versionnumber?: number | null;
}
interface OfficeDocument_Relationships {
}
interface OfficeDocument extends OfficeDocument_Base, OfficeDocument_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface OfficeDocument_Create extends OfficeDocument {
}
interface OfficeDocument_Update extends OfficeDocument {
}
interface OfficeDocument_Select {
  clientdata: WebAttribute<OfficeDocument_Select, { clientdata: string | null }, {  }>;
  content: WebAttribute<OfficeDocument_Select, { content: string | null }, {  }>;
  createdby_guid: WebAttribute<OfficeDocument_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<OfficeDocument_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<OfficeDocument_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  documenttype: WebAttribute<OfficeDocument_Select, { documenttype: officedocument_documenttype | null }, { documenttype_formatted?: string }>;
  filelockstate: WebAttribute<OfficeDocument_Select, { filelockstate: number | null }, {  }>;
  filesize: WebAttribute<OfficeDocument_Select, { filesize: number | null }, {  }>;
  modifiedby_guid: WebAttribute<OfficeDocument_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<OfficeDocument_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<OfficeDocument_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<OfficeDocument_Select, { name: string | null }, {  }>;
  objectid_guid: WebAttribute<OfficeDocument_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  officedocumentid: WebAttribute<OfficeDocument_Select, { officedocumentid: string | null }, {  }>;
  ownerid_guid: WebAttribute<OfficeDocument_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  sha256: WebAttribute<OfficeDocument_Select, { sha256: string | null }, {  }>;
  versionnumber: WebAttribute<OfficeDocument_Select, { versionnumber: number | null }, {  }>;
}
interface OfficeDocument_Filter {
  clientdata: string;
  content: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  documenttype: officedocument_documenttype;
  filelockstate: number;
  filesize: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  objectid_guid: XQW.Guid;
  officedocumentid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  sha256: string;
  versionnumber: number;
}
interface OfficeDocument_Expand {
  createdonbehalfby: WebExpand<OfficeDocument_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<OfficeDocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<OfficeDocument_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
}
interface OfficeDocument_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  documenttype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  objectid_formatted?: string;
  ownerid_formatted?: string;
}
interface OfficeDocument_Result extends OfficeDocument_Base, OfficeDocument_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  objectid_guid: string | null;
  ownerid_guid: string | null;
}
interface OfficeDocument_RelatedOne {
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface OfficeDocument_RelatedMany {
}
interface WebEntitiesRetrieve {
  officedocuments: WebMappingRetrieve<OfficeDocument_Select,OfficeDocument_Expand,OfficeDocument_Filter,OfficeDocument_Fixed,OfficeDocument_Result,OfficeDocument_FormattedResult>;
}
interface WebEntitiesRelated {
  officedocuments: WebMappingRelated<OfficeDocument_RelatedOne,OfficeDocument_RelatedMany>;
}
interface WebEntitiesCUDA {
  officedocuments: WebMappingCUDA<OfficeDocument_Create,OfficeDocument_Update,OfficeDocument_Select>;
}
