interface PickListMapping_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  picklistmappingid?: string | null;
  picklistmappingidunique?: string | null;
  processcode?: picklistmapping_processcode | null;
  solutionid?: string | null;
  sourcevalue?: string | null;
  statecode?: picklistmapping_statecode | null;
  statuscode?: picklistmapping_statuscode | null;
  supportingsolutionid?: string | null;
  targetvalue?: number | null;
}
interface PickListMapping_Relationships {
  userentityinstancedata_picklistmapping?: UserEntityInstanceData_Result[] | null;
}
interface PickListMapping extends PickListMapping_Base, PickListMapping_Relationships {
  columnmappingid_bind$columnmappings?: string | null;
}
interface PickListMapping_Create extends PickListMapping {
}
interface PickListMapping_Update extends PickListMapping {
}
interface PickListMapping_Select {
  columnmappingid_guid: WebAttribute<PickListMapping_Select, { columnmappingid_guid: string | null }, { columnmappingid_formatted?: string }>;
  componentstate: WebAttribute<PickListMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<PickListMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PickListMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PickListMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  introducedversion: WebAttribute<PickListMapping_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<PickListMapping_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<PickListMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PickListMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PickListMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<PickListMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  picklistmappingid: WebAttribute<PickListMapping_Select, { picklistmappingid: string | null }, {  }>;
  picklistmappingidunique: WebAttribute<PickListMapping_Select, { picklistmappingidunique: string | null }, {  }>;
  processcode: WebAttribute<PickListMapping_Select, { processcode: picklistmapping_processcode | null }, { processcode_formatted?: string }>;
  solutionid: WebAttribute<PickListMapping_Select, { solutionid: string | null }, {  }>;
  sourcevalue: WebAttribute<PickListMapping_Select, { sourcevalue: string | null }, {  }>;
  statecode: WebAttribute<PickListMapping_Select, { statecode: picklistmapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<PickListMapping_Select, { statuscode: picklistmapping_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<PickListMapping_Select, { supportingsolutionid: string | null }, {  }>;
  targetvalue: WebAttribute<PickListMapping_Select, { targetvalue: number | null }, {  }>;
}
interface PickListMapping_Filter {
  columnmappingid_guid: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  picklistmappingid: XQW.Guid;
  picklistmappingidunique: XQW.Guid;
  processcode: picklistmapping_processcode;
  solutionid: XQW.Guid;
  sourcevalue: string;
  statecode: picklistmapping_statecode;
  statuscode: picklistmapping_statuscode;
  supportingsolutionid: XQW.Guid;
  targetvalue: number;
}
interface PickListMapping_Expand {
  columnmappingid: WebExpand<PickListMapping_Expand, ColumnMapping_Select, ColumnMapping_Filter, { columnmappingid: ColumnMapping_Result }>;
  createdby: WebExpand<PickListMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PickListMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<PickListMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PickListMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  userentityinstancedata_picklistmapping: WebExpand<PickListMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_picklistmapping: UserEntityInstanceData_Result[] }>;
}
interface PickListMapping_FormattedResult {
  columnmappingid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  processcode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface PickListMapping_Result extends PickListMapping_Base, PickListMapping_Relationships {
  "@odata.etag": string;
  columnmappingid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface PickListMapping_RelatedOne {
  columnmappingid: WebMappingRetrieve<ColumnMapping_Select,ColumnMapping_Expand,ColumnMapping_Filter,ColumnMapping_Fixed,ColumnMapping_Result,ColumnMapping_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface PickListMapping_RelatedMany {
  userentityinstancedata_picklistmapping: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  picklistmappings: WebMappingRetrieve<PickListMapping_Select,PickListMapping_Expand,PickListMapping_Filter,PickListMapping_Fixed,PickListMapping_Result,PickListMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  picklistmappings: WebMappingRelated<PickListMapping_RelatedOne,PickListMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  picklistmappings: WebMappingCUDA<PickListMapping_Create,PickListMapping_Update,PickListMapping_Select>;
}
