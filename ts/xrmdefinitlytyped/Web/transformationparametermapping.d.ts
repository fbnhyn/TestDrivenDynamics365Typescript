interface TransformationParameterMapping_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  data?: string | null;
  datatypecode?: transformationparametermapping_datatypecode | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  parameterarrayindex?: number | null;
  parametersequence?: number | null;
  parametertypecode?: transformationparametermapping_parametertypecode | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  transformationparametermappingid?: string | null;
  transformationparametermappingidunique?: string | null;
}
interface TransformationParameterMapping_Relationships {
  LookUpMapping_TransformationParameterMapping?: LookUpMapping_Result[] | null;
  userentityinstancedata_transformationparametermapping?: UserEntityInstanceData_Result[] | null;
}
interface TransformationParameterMapping extends TransformationParameterMapping_Base, TransformationParameterMapping_Relationships {
  transformationmappingid_bind$transformationmappings?: string | null;
}
interface TransformationParameterMapping_Create extends TransformationParameterMapping {
}
interface TransformationParameterMapping_Update extends TransformationParameterMapping {
}
interface TransformationParameterMapping_Select {
  componentstate: WebAttribute<TransformationParameterMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<TransformationParameterMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TransformationParameterMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TransformationParameterMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<TransformationParameterMapping_Select, { data: string | null }, {  }>;
  datatypecode: WebAttribute<TransformationParameterMapping_Select, { datatypecode: transformationparametermapping_datatypecode | null }, { datatypecode_formatted?: string }>;
  introducedversion: WebAttribute<TransformationParameterMapping_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<TransformationParameterMapping_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<TransformationParameterMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TransformationParameterMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TransformationParameterMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<TransformationParameterMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parameterarrayindex: WebAttribute<TransformationParameterMapping_Select, { parameterarrayindex: number | null }, {  }>;
  parametersequence: WebAttribute<TransformationParameterMapping_Select, { parametersequence: number | null }, {  }>;
  parametertypecode: WebAttribute<TransformationParameterMapping_Select, { parametertypecode: transformationparametermapping_parametertypecode | null }, { parametertypecode_formatted?: string }>;
  solutionid: WebAttribute<TransformationParameterMapping_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<TransformationParameterMapping_Select, { supportingsolutionid: string | null }, {  }>;
  transformationmappingid_guid: WebAttribute<TransformationParameterMapping_Select, { transformationmappingid_guid: string | null }, { transformationmappingid_formatted?: string }>;
  transformationparametermappingid: WebAttribute<TransformationParameterMapping_Select, { transformationparametermappingid: string | null }, {  }>;
  transformationparametermappingidunique: WebAttribute<TransformationParameterMapping_Select, { transformationparametermappingidunique: string | null }, {  }>;
}
interface TransformationParameterMapping_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  data: string;
  datatypecode: transformationparametermapping_datatypecode;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  parameterarrayindex: number;
  parametersequence: number;
  parametertypecode: transformationparametermapping_parametertypecode;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  transformationmappingid_guid: XQW.Guid;
  transformationparametermappingid: XQW.Guid;
  transformationparametermappingidunique: XQW.Guid;
}
interface TransformationParameterMapping_Expand {
  LookUpMapping_TransformationParameterMapping: WebExpand<TransformationParameterMapping_Expand, LookUpMapping_Select, LookUpMapping_Filter, { LookUpMapping_TransformationParameterMapping: LookUpMapping_Result[] }>;
  createdby: WebExpand<TransformationParameterMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TransformationParameterMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<TransformationParameterMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TransformationParameterMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  transformationmappingid: WebExpand<TransformationParameterMapping_Expand, TransformationMapping_Select, TransformationMapping_Filter, { transformationmappingid: TransformationMapping_Result }>;
  userentityinstancedata_transformationparametermapping: WebExpand<TransformationParameterMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_transformationparametermapping: UserEntityInstanceData_Result[] }>;
}
interface TransformationParameterMapping_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  datatypecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  parametertypecode_formatted?: string;
  transformationmappingid_formatted?: string;
}
interface TransformationParameterMapping_Result extends TransformationParameterMapping_Base, TransformationParameterMapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  transformationmappingid_guid: string | null;
}
interface TransformationParameterMapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transformationmappingid: WebMappingRetrieve<TransformationMapping_Select,TransformationMapping_Expand,TransformationMapping_Filter,TransformationMapping_Fixed,TransformationMapping_Result,TransformationMapping_FormattedResult>;
}
interface TransformationParameterMapping_RelatedMany {
  LookUpMapping_TransformationParameterMapping: WebMappingRetrieve<LookUpMapping_Select,LookUpMapping_Expand,LookUpMapping_Filter,LookUpMapping_Fixed,LookUpMapping_Result,LookUpMapping_FormattedResult>;
  userentityinstancedata_transformationparametermapping: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  transformationparametermappings: WebMappingRetrieve<TransformationParameterMapping_Select,TransformationParameterMapping_Expand,TransformationParameterMapping_Filter,TransformationParameterMapping_Fixed,TransformationParameterMapping_Result,TransformationParameterMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  transformationparametermappings: WebMappingRelated<TransformationParameterMapping_RelatedOne,TransformationParameterMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  transformationparametermappings: WebMappingCUDA<TransformationParameterMapping_Create,TransformationParameterMapping_Update,TransformationParameterMapping_Select>;
}
