interface ColumnMapping_Base extends WebEntity {
  columnmappingid?: string | null;
  columnmappingidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  processcode?: columnmapping_processcode | null;
  solutionid?: string | null;
  sourceattributename?: string | null;
  sourceentityname?: string | null;
  statecode?: columnmapping_statecode | null;
  statuscode?: columnmapping_statuscode | null;
  supportingsolutionid?: string | null;
  targetattributename?: string | null;
  targetentityname?: string | null;
}
interface ColumnMapping_Relationships {
  LookUpMapping_ColumnMapping?: LookUpMapping_Result[] | null;
  PickListMapping_ColumnMapping?: PickListMapping_Result[] | null;
  userentityinstancedata_columnmapping?: UserEntityInstanceData_Result[] | null;
}
interface ColumnMapping extends ColumnMapping_Base, ColumnMapping_Relationships {
  importmapid_bind$importmaps?: string | null;
}
interface ColumnMapping_Create extends ColumnMapping {
}
interface ColumnMapping_Update extends ColumnMapping {
}
interface ColumnMapping_Select {
  columnmappingid: WebAttribute<ColumnMapping_Select, { columnmappingid: string | null }, {  }>;
  columnmappingidunique: WebAttribute<ColumnMapping_Select, { columnmappingidunique: string | null }, {  }>;
  componentstate: WebAttribute<ColumnMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ColumnMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ColumnMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ColumnMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importmapid_guid: WebAttribute<ColumnMapping_Select, { importmapid_guid: string | null }, { importmapid_formatted?: string }>;
  introducedversion: WebAttribute<ColumnMapping_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<ColumnMapping_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ColumnMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ColumnMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ColumnMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<ColumnMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  processcode: WebAttribute<ColumnMapping_Select, { processcode: columnmapping_processcode | null }, { processcode_formatted?: string }>;
  solutionid: WebAttribute<ColumnMapping_Select, { solutionid: string | null }, {  }>;
  sourceattributename: WebAttribute<ColumnMapping_Select, { sourceattributename: string | null }, {  }>;
  sourceentityname: WebAttribute<ColumnMapping_Select, { sourceentityname: string | null }, {  }>;
  statecode: WebAttribute<ColumnMapping_Select, { statecode: columnmapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ColumnMapping_Select, { statuscode: columnmapping_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ColumnMapping_Select, { supportingsolutionid: string | null }, {  }>;
  targetattributename: WebAttribute<ColumnMapping_Select, { targetattributename: string | null }, {  }>;
  targetentityname: WebAttribute<ColumnMapping_Select, { targetentityname: string | null }, {  }>;
}
interface ColumnMapping_Filter {
  columnmappingid: XQW.Guid;
  columnmappingidunique: XQW.Guid;
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
  processcode: columnmapping_processcode;
  solutionid: XQW.Guid;
  sourceattributename: string;
  sourceentityname: string;
  statecode: columnmapping_statecode;
  statuscode: columnmapping_statuscode;
  supportingsolutionid: XQW.Guid;
  targetattributename: string;
  targetentityname: string;
}
interface ColumnMapping_Expand {
  LookUpMapping_ColumnMapping: WebExpand<ColumnMapping_Expand, LookUpMapping_Select, LookUpMapping_Filter, { LookUpMapping_ColumnMapping: LookUpMapping_Result[] }>;
  PickListMapping_ColumnMapping: WebExpand<ColumnMapping_Expand, PickListMapping_Select, PickListMapping_Filter, { PickListMapping_ColumnMapping: PickListMapping_Result[] }>;
  createdby: WebExpand<ColumnMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ColumnMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  importmapid: WebExpand<ColumnMapping_Expand, ImportMap_Select, ImportMap_Filter, { importmapid: ImportMap_Result }>;
  modifiedby: WebExpand<ColumnMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ColumnMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  userentityinstancedata_columnmapping: WebExpand<ColumnMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_columnmapping: UserEntityInstanceData_Result[] }>;
}
interface ColumnMapping_FormattedResult {
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
interface ColumnMapping_Result extends ColumnMapping_Base, ColumnMapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  importmapid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface ColumnMapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  importmapid: WebMappingRetrieve<ImportMap_Select,ImportMap_Expand,ImportMap_Filter,ImportMap_Fixed,ImportMap_Result,ImportMap_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ColumnMapping_RelatedMany {
  LookUpMapping_ColumnMapping: WebMappingRetrieve<LookUpMapping_Select,LookUpMapping_Expand,LookUpMapping_Filter,LookUpMapping_Fixed,LookUpMapping_Result,LookUpMapping_FormattedResult>;
  PickListMapping_ColumnMapping: WebMappingRetrieve<PickListMapping_Select,PickListMapping_Expand,PickListMapping_Filter,PickListMapping_Fixed,PickListMapping_Result,PickListMapping_FormattedResult>;
  userentityinstancedata_columnmapping: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  columnmappings: WebMappingRetrieve<ColumnMapping_Select,ColumnMapping_Expand,ColumnMapping_Filter,ColumnMapping_Fixed,ColumnMapping_Result,ColumnMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  columnmappings: WebMappingRelated<ColumnMapping_RelatedOne,ColumnMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  columnmappings: WebMappingCUDA<ColumnMapping_Create,ColumnMapping_Update,ColumnMapping_Select>;
}
