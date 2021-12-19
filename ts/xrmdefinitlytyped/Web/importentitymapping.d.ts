interface ImportEntityMapping_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  dedupe?: importentitymapping_dedupe | null;
  importentitymappingid?: string | null;
  importentitymappingidunique?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  processcode?: importentitymapping_processcode | null;
  solutionid?: string | null;
  sourceentityname?: string | null;
  statecode?: importentitymapping_statecode | null;
  statuscode?: importentitymapping_statuscode | null;
  supportingsolutionid?: string | null;
  targetentityname?: string | null;
}
interface ImportEntityMapping_Relationships {
  userentityinstancedata_importentitymapping?: UserEntityInstanceData_Result[] | null;
}
interface ImportEntityMapping extends ImportEntityMapping_Base, ImportEntityMapping_Relationships {
  importmapid_bind$importmaps?: string | null;
}
interface ImportEntityMapping_Create extends ImportEntityMapping {
}
interface ImportEntityMapping_Update extends ImportEntityMapping {
}
interface ImportEntityMapping_Select {
  componentstate: WebAttribute<ImportEntityMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ImportEntityMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ImportEntityMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ImportEntityMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dedupe: WebAttribute<ImportEntityMapping_Select, { dedupe: importentitymapping_dedupe | null }, { dedupe_formatted?: string }>;
  importentitymappingid: WebAttribute<ImportEntityMapping_Select, { importentitymappingid: string | null }, {  }>;
  importentitymappingidunique: WebAttribute<ImportEntityMapping_Select, { importentitymappingidunique: string | null }, {  }>;
  importmapid_guid: WebAttribute<ImportEntityMapping_Select, { importmapid_guid: string | null }, { importmapid_formatted?: string }>;
  introducedversion: WebAttribute<ImportEntityMapping_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<ImportEntityMapping_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ImportEntityMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ImportEntityMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ImportEntityMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<ImportEntityMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  processcode: WebAttribute<ImportEntityMapping_Select, { processcode: importentitymapping_processcode | null }, { processcode_formatted?: string }>;
  solutionid: WebAttribute<ImportEntityMapping_Select, { solutionid: string | null }, {  }>;
  sourceentityname: WebAttribute<ImportEntityMapping_Select, { sourceentityname: string | null }, {  }>;
  statecode: WebAttribute<ImportEntityMapping_Select, { statecode: importentitymapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ImportEntityMapping_Select, { statuscode: importentitymapping_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ImportEntityMapping_Select, { supportingsolutionid: string | null }, {  }>;
  targetentityname: WebAttribute<ImportEntityMapping_Select, { targetentityname: string | null }, {  }>;
}
interface ImportEntityMapping_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dedupe: importentitymapping_dedupe;
  importentitymappingid: XQW.Guid;
  importentitymappingidunique: XQW.Guid;
  importmapid_guid: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  processcode: importentitymapping_processcode;
  solutionid: XQW.Guid;
  sourceentityname: string;
  statecode: importentitymapping_statecode;
  statuscode: importentitymapping_statuscode;
  supportingsolutionid: XQW.Guid;
  targetentityname: string;
}
interface ImportEntityMapping_Expand {
  createdby: WebExpand<ImportEntityMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ImportEntityMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  importmapid: WebExpand<ImportEntityMapping_Expand, ImportMap_Select, ImportMap_Filter, { importmapid: ImportMap_Result }>;
  modifiedby: WebExpand<ImportEntityMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ImportEntityMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  userentityinstancedata_importentitymapping: WebExpand<ImportEntityMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_importentitymapping: UserEntityInstanceData_Result[] }>;
}
interface ImportEntityMapping_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  dedupe_formatted?: string;
  importmapid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  processcode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ImportEntityMapping_Result extends ImportEntityMapping_Base, ImportEntityMapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  importmapid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface ImportEntityMapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  importmapid: WebMappingRetrieve<ImportMap_Select,ImportMap_Expand,ImportMap_Filter,ImportMap_Fixed,ImportMap_Result,ImportMap_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ImportEntityMapping_RelatedMany {
  userentityinstancedata_importentitymapping: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  importentitymappings: WebMappingRetrieve<ImportEntityMapping_Select,ImportEntityMapping_Expand,ImportEntityMapping_Filter,ImportEntityMapping_Fixed,ImportEntityMapping_Result,ImportEntityMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  importentitymappings: WebMappingRelated<ImportEntityMapping_RelatedOne,ImportEntityMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  importentitymappings: WebMappingCUDA<ImportEntityMapping_Create,ImportEntityMapping_Update,ImportEntityMapping_Select>;
}
