interface LookUpMapping_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  lookupattributename?: string | null;
  lookupentityname?: string | null;
  lookupmappingid?: string | null;
  lookupmappingidunique?: string | null;
  lookupsourcecode?: lookupmapping_lookupsourcecode | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  processcode?: lookupmapping_processcode | null;
  solutionid?: string | null;
  statecode?: lookupmapping_statecode | null;
  statuscode?: lookupmapping_statuscode | null;
  supportingsolutionid?: string | null;
}
interface LookUpMapping_Relationships {
  userentityinstancedata_lookupmapping?: UserEntityInstanceData_Result[] | null;
}
interface LookUpMapping extends LookUpMapping_Base, LookUpMapping_Relationships {
  columnmappingid_bind$columnmappings?: string | null;
  transformationparametermappingid_bind$transformationparametermappings?: string | null;
}
interface LookUpMapping_Create extends LookUpMapping {
}
interface LookUpMapping_Update extends LookUpMapping {
}
interface LookUpMapping_Select {
  columnmappingid_guid: WebAttribute<LookUpMapping_Select, { columnmappingid_guid: string | null }, { columnmappingid_formatted?: string }>;
  componentstate: WebAttribute<LookUpMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<LookUpMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<LookUpMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<LookUpMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  introducedversion: WebAttribute<LookUpMapping_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<LookUpMapping_Select, { ismanaged: boolean | null }, {  }>;
  lookupattributename: WebAttribute<LookUpMapping_Select, { lookupattributename: string | null }, {  }>;
  lookupentityname: WebAttribute<LookUpMapping_Select, { lookupentityname: string | null }, {  }>;
  lookupmappingid: WebAttribute<LookUpMapping_Select, { lookupmappingid: string | null }, {  }>;
  lookupmappingidunique: WebAttribute<LookUpMapping_Select, { lookupmappingidunique: string | null }, {  }>;
  lookupsourcecode: WebAttribute<LookUpMapping_Select, { lookupsourcecode: lookupmapping_lookupsourcecode | null }, { lookupsourcecode_formatted?: string }>;
  modifiedby_guid: WebAttribute<LookUpMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<LookUpMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<LookUpMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<LookUpMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  processcode: WebAttribute<LookUpMapping_Select, { processcode: lookupmapping_processcode | null }, { processcode_formatted?: string }>;
  solutionid: WebAttribute<LookUpMapping_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<LookUpMapping_Select, { statecode: lookupmapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<LookUpMapping_Select, { statuscode: lookupmapping_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<LookUpMapping_Select, { supportingsolutionid: string | null }, {  }>;
  transformationparametermappingid_guid: WebAttribute<LookUpMapping_Select, { transformationparametermappingid_guid: string | null }, { transformationparametermappingid_formatted?: string }>;
}
interface LookUpMapping_Filter {
  columnmappingid_guid: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  lookupattributename: string;
  lookupentityname: string;
  lookupmappingid: XQW.Guid;
  lookupmappingidunique: XQW.Guid;
  lookupsourcecode: lookupmapping_lookupsourcecode;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  processcode: lookupmapping_processcode;
  solutionid: XQW.Guid;
  statecode: lookupmapping_statecode;
  statuscode: lookupmapping_statuscode;
  supportingsolutionid: XQW.Guid;
  transformationparametermappingid_guid: XQW.Guid;
}
interface LookUpMapping_Expand {
  columnmappingid: WebExpand<LookUpMapping_Expand, ColumnMapping_Select, ColumnMapping_Filter, { columnmappingid: ColumnMapping_Result }>;
  createdby: WebExpand<LookUpMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<LookUpMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<LookUpMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<LookUpMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  transformationparametermappingid: WebExpand<LookUpMapping_Expand, TransformationParameterMapping_Select, TransformationParameterMapping_Filter, { transformationparametermappingid: TransformationParameterMapping_Result }>;
  userentityinstancedata_lookupmapping: WebExpand<LookUpMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_lookupmapping: UserEntityInstanceData_Result[] }>;
}
interface LookUpMapping_FormattedResult {
  columnmappingid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  lookupsourcecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  processcode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transformationparametermappingid_formatted?: string;
}
interface LookUpMapping_Result extends LookUpMapping_Base, LookUpMapping_Relationships {
  "@odata.etag": string;
  columnmappingid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  transformationparametermappingid_guid: string | null;
}
interface LookUpMapping_RelatedOne {
  columnmappingid: WebMappingRetrieve<ColumnMapping_Select,ColumnMapping_Expand,ColumnMapping_Filter,ColumnMapping_Fixed,ColumnMapping_Result,ColumnMapping_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transformationparametermappingid: WebMappingRetrieve<TransformationParameterMapping_Select,TransformationParameterMapping_Expand,TransformationParameterMapping_Filter,TransformationParameterMapping_Fixed,TransformationParameterMapping_Result,TransformationParameterMapping_FormattedResult>;
}
interface LookUpMapping_RelatedMany {
  userentityinstancedata_lookupmapping: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  lookupmappings: WebMappingRetrieve<LookUpMapping_Select,LookUpMapping_Expand,LookUpMapping_Filter,LookUpMapping_Fixed,LookUpMapping_Result,LookUpMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  lookupmappings: WebMappingRelated<LookUpMapping_RelatedOne,LookUpMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  lookupmappings: WebMappingCUDA<LookUpMapping_Create,LookUpMapping_Update,LookUpMapping_Select>;
}
