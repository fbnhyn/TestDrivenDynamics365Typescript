interface TransformationMapping_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  processcode?: transformationmapping_processcode | null;
  solutionid?: string | null;
  sourceentityname?: string | null;
  statecode?: transformationmapping_statecode | null;
  statuscode?: transformationmapping_statuscode | null;
  supportingsolutionid?: string | null;
  targetentityname?: string | null;
  transformationmappingid?: string | null;
  transformationmappingidunique?: string | null;
  transformationtypename?: string | null;
}
interface TransformationMapping_Relationships {
  TransformationParameterMapping_TransformationMapping?: TransformationParameterMapping_Result[] | null;
  userentityinstancedata_transformationmapping?: UserEntityInstanceData_Result[] | null;
}
interface TransformationMapping extends TransformationMapping_Base, TransformationMapping_Relationships {
  importmapid_bind$importmaps?: string | null;
}
interface TransformationMapping_Create extends TransformationMapping {
}
interface TransformationMapping_Update extends TransformationMapping {
}
interface TransformationMapping_Select {
  componentstate: WebAttribute<TransformationMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<TransformationMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TransformationMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TransformationMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importmapid_guid: WebAttribute<TransformationMapping_Select, { importmapid_guid: string | null }, { importmapid_formatted?: string }>;
  introducedversion: WebAttribute<TransformationMapping_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<TransformationMapping_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<TransformationMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TransformationMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TransformationMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<TransformationMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  processcode: WebAttribute<TransformationMapping_Select, { processcode: transformationmapping_processcode | null }, { processcode_formatted?: string }>;
  solutionid: WebAttribute<TransformationMapping_Select, { solutionid: string | null }, {  }>;
  sourceentityname: WebAttribute<TransformationMapping_Select, { sourceentityname: string | null }, {  }>;
  statecode: WebAttribute<TransformationMapping_Select, { statecode: transformationmapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<TransformationMapping_Select, { statuscode: transformationmapping_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<TransformationMapping_Select, { supportingsolutionid: string | null }, {  }>;
  targetentityname: WebAttribute<TransformationMapping_Select, { targetentityname: string | null }, {  }>;
  transformationmappingid: WebAttribute<TransformationMapping_Select, { transformationmappingid: string | null }, {  }>;
  transformationmappingidunique: WebAttribute<TransformationMapping_Select, { transformationmappingidunique: string | null }, {  }>;
  transformationtypename: WebAttribute<TransformationMapping_Select, { transformationtypename: string | null }, {  }>;
}
interface TransformationMapping_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importmapid_guid: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  processcode: transformationmapping_processcode;
  solutionid: XQW.Guid;
  sourceentityname: string;
  statecode: transformationmapping_statecode;
  statuscode: transformationmapping_statuscode;
  supportingsolutionid: XQW.Guid;
  targetentityname: string;
  transformationmappingid: XQW.Guid;
  transformationmappingidunique: XQW.Guid;
  transformationtypename: string;
}
interface TransformationMapping_Expand {
  TransformationParameterMapping_TransformationMapping: WebExpand<TransformationMapping_Expand, TransformationParameterMapping_Select, TransformationParameterMapping_Filter, { TransformationParameterMapping_TransformationMapping: TransformationParameterMapping_Result[] }>;
  createdby: WebExpand<TransformationMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TransformationMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  importmapid: WebExpand<TransformationMapping_Expand, ImportMap_Select, ImportMap_Filter, { importmapid: ImportMap_Result }>;
  modifiedby: WebExpand<TransformationMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TransformationMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  userentityinstancedata_transformationmapping: WebExpand<TransformationMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_transformationmapping: UserEntityInstanceData_Result[] }>;
}
interface TransformationMapping_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  importmapid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  processcode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface TransformationMapping_Result extends TransformationMapping_Base, TransformationMapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  importmapid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface TransformationMapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  importmapid: WebMappingRetrieve<ImportMap_Select,ImportMap_Expand,ImportMap_Filter,ImportMap_Fixed,ImportMap_Result,ImportMap_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface TransformationMapping_RelatedMany {
  TransformationParameterMapping_TransformationMapping: WebMappingRetrieve<TransformationParameterMapping_Select,TransformationParameterMapping_Expand,TransformationParameterMapping_Filter,TransformationParameterMapping_Fixed,TransformationParameterMapping_Result,TransformationParameterMapping_FormattedResult>;
  userentityinstancedata_transformationmapping: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  transformationmappings: WebMappingRetrieve<TransformationMapping_Select,TransformationMapping_Expand,TransformationMapping_Filter,TransformationMapping_Fixed,TransformationMapping_Result,TransformationMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  transformationmappings: WebMappingRelated<TransformationMapping_RelatedOne,TransformationMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  transformationmappings: WebMappingCUDA<TransformationMapping_Create,TransformationMapping_Update,TransformationMapping_Select>;
}
