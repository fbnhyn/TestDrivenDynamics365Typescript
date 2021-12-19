interface ReportVisibility_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  reportvisibilityid?: string | null;
  reportvisibilityidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
  visibilitycode?: reportvisibility_visibilitycode | null;
}
interface ReportVisibility_Relationships {
  userentityinstancedata_reportvisibility?: UserEntityInstanceData_Result[] | null;
}
interface ReportVisibility extends ReportVisibility_Base, ReportVisibility_Relationships {
  reportid_bind$reports?: string | null;
}
interface ReportVisibility_Create extends ReportVisibility {
}
interface ReportVisibility_Update extends ReportVisibility {
}
interface ReportVisibility_Select {
  componentstate: WebAttribute<ReportVisibility_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ReportVisibility_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ReportVisibility_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ReportVisibility_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ReportVisibility_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<ReportVisibility_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ReportVisibility_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ReportVisibility_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ReportVisibility_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ReportVisibility_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<ReportVisibility_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ReportVisibility_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ReportVisibility_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ReportVisibility_Select, { owninguser: string | null }, {  }>;
  reportid_guid: WebAttribute<ReportVisibility_Select, { reportid_guid: string | null }, { reportid_formatted?: string }>;
  reportvisibilityid: WebAttribute<ReportVisibility_Select, { reportvisibilityid: string | null }, {  }>;
  reportvisibilityidunique: WebAttribute<ReportVisibility_Select, { reportvisibilityidunique: string | null }, {  }>;
  solutionid: WebAttribute<ReportVisibility_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ReportVisibility_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ReportVisibility_Select, { versionnumber: number | null }, {  }>;
  visibilitycode: WebAttribute<ReportVisibility_Select, { visibilitycode: reportvisibility_visibilitycode | null }, { visibilitycode_formatted?: string }>;
}
interface ReportVisibility_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  reportid_guid: XQW.Guid;
  reportvisibilityid: XQW.Guid;
  reportvisibilityidunique: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
  visibilitycode: reportvisibility_visibilitycode;
}
interface ReportVisibility_Expand {
  createdby: WebExpand<ReportVisibility_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ReportVisibility_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ReportVisibility_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ReportVisibility_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  reportid: WebExpand<ReportVisibility_Expand, Report_Select, Report_Filter, { reportid: Report_Result }>;
  userentityinstancedata_reportvisibility: WebExpand<ReportVisibility_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_reportvisibility: UserEntityInstanceData_Result[] }>;
}
interface ReportVisibility_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  reportid_formatted?: string;
  visibilitycode_formatted?: string;
}
interface ReportVisibility_Result extends ReportVisibility_Base, ReportVisibility_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  reportid_guid: string | null;
}
interface ReportVisibility_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  reportid: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
}
interface ReportVisibility_RelatedMany {
  userentityinstancedata_reportvisibility: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  reportvisibilities: WebMappingRetrieve<ReportVisibility_Select,ReportVisibility_Expand,ReportVisibility_Filter,ReportVisibility_Fixed,ReportVisibility_Result,ReportVisibility_FormattedResult>;
}
interface WebEntitiesRelated {
  reportvisibilities: WebMappingRelated<ReportVisibility_RelatedOne,ReportVisibility_RelatedMany>;
}
interface WebEntitiesCUDA {
  reportvisibilities: WebMappingCUDA<ReportVisibility_Create,ReportVisibility_Update,ReportVisibility_Select>;
}
